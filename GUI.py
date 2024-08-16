import os
import json
import shutil
import webbrowser
import sys
import threading
import requests
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import logging
import psutil


from PySide6.QtCore import Qt, QTimer, QCoreApplication
from PySide6.QtWidgets import QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout, QPushButton
from PySide6.QtGui import QPainter, QBrush, QColor, QIcon
from PySide6.QtWebEngineCore import QWebEngineProfile, QWebEnginePage
from PySide6.QtWebEngineWidgets import QWebEngineView
from PySide6.QtCore import QPropertyAnimation, QRect, QEasingCurve, Qt

import replacer

app = Flask(__name__,static_folder='build', template_folder='build')
CORS(app, resources={r"/api/*": {"origins": "*"}})
base_url = "https://shaggy-jacquelynn-analytiq-61c81921.koyeb.app/api/"

# Load or initialize data
data_file = 'data.json'
if os.path.exists(data_file):
    with open(data_file, 'r') as file:
        data = json.load(file)
else:
    data = {
        "prompts": [],
        "users": []
    }

# Save data to JSON file
def save_data():
    global data
    with open(data_file, 'w') as file:
        json.dump(data, file, indent=4)

def delete_all_in_folder(folder_path):
    """
    Delete all files and subfolders in the given folder path.
    """
    if not os.path.isdir(folder_path):
        print(f"The path {folder_path} is not a valid directory.")
        return

    try:
        for item in os.listdir(folder_path):
            item_path = os.path.join(folder_path, item)
            if os.path.isfile(item_path):
                os.remove(item_path)
                print(f"File {item_path} deleted.")
            elif os.path.isdir(item_path):
                shutil.rmtree(item_path)
                print(f"Directory {item_path} and its contents deleted.")

        print(f"All contents of {folder_path} have been deleted.")
    except Exception as e:
        print(f"An error occurred: {e}")

@app.route('/')
def index():
    return send_from_directory('build', 'popup.html')

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('build', filename)

@app.route('/api/add_shortcut/', methods=['POST'])
def add_shortcut():
    global data

    try:
        body = request.json
        shortcut = body.get('shortcut')
        text = body.get('title')
        if shortcut == "":
            return jsonify({'message': 'Shortcut added successfully'}), 200

        if not shortcut:
            return jsonify({'error': 'Shortcut is required'}), 400

        for prompt in data['prompts']:
            if prompt['shortcut'] == shortcut:
                return jsonify({'error': 'Shortcut already exists'}), 400

        # Save the new shortcut
        new_shortcut = {"shortcut": shortcut, "name": text}
        data['prompts'].append(new_shortcut)
        save_data()

        return jsonify({'message': 'Shortcut added successfully'}), 201

    except json.JSONDecodeError:
        return jsonify({'error': 'Invalid JSON'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/open_url/', methods=['POST'])
def open_url():
    global data

    try:
        body = request.json
        url = body.get('url')

        if not url:
            return jsonify({'error': 'URL is required'}), 400

        webbrowser.open(url)
        return jsonify({'success': True}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/login/', methods=['POST'])
def login():
    global data

    print("local api")
    if request.method == 'POST':
        data = request.json
        email = data.get('email')
        password = data.get('password')
        print(email)
        print(password)

        try:
            url = f'{base_url}login/'
            headers = {
                'Content-Type': 'application/json',
            }
            payload = {
                'email': email,
                'password': password,
            }
            response = requests.post(url, headers=headers, json=payload)
            try:
                uid = response.json().get('user', {}).get('localId')
                url = f'{base_url}fetch-document/'
                data = {'uid': uid}
                print(data)
                response2 = requests.post(url, data=data)
                response_json = response.json()
                response_json['payload'] = response2.json()

                # Delete all prompts in the JSON file
                data['prompts'] = []
                save_data()

                for prompt in response2.json():
                    for shortcut in prompt:
                        name = prompt[shortcut]
                        data['prompts'].append({"shortcut": shortcut, "name": name})
                print(data)
                save_data()

                # Check if user exists or create one (simplified for JSON storage)
                user_exists = any(user['email'] == email for user in data['users'])
                if not user_exists:
                    data['users'].append({"email": email, "uid": uid})
                    save_data()

            except Exception as e:
                print(e)
                pass

            return jsonify(response_json), 200
        except Exception as e:
            print(e)
            return jsonify({'error': str(e)}), 500

    return jsonify({'error': 'Invalid request method'}), 400

@app.route('/api/logout/', methods=['GET'])
def logout():
    global data

    try:
        # Delete all prompts in the JSON file
        data['prompts'] = []
        save_data()

        # Optionally, delete all files in a specific folder
        # delete_all_in_folder(os.getcwd() + "/cache")
        print("All prompts deleted successfully")

        return jsonify({'message': 'All prompts deleted successfully.'}), 200
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500

def run_flask():
    app.run(debug=False, use_reloader=False,port=8000)  # `use_reloader=False` is important to prevent Flask from running twice


# QApplication.setAttribute(Qt.AA_UseSoftwareOpenGL,True)

class CustomWebEngineView(QWebEngineView):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setContextMenuPolicy(Qt.NoContextMenu)  # Disable context menu

    def contextMenuEvent(self, event):
        # Override this method to suppress the context menu
        pass


class CustomWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowFlags(Qt.FramelessWindowHint)  # Remove title bar
        self.setAttribute(Qt.WA_TranslucentBackground)  # Transparent background
        self.current_color = QColor(255, 255, 255)
        self.first = True
        self.dragging = False  # Flag to track if the window is being dragged
        self.drag_start_position = None  # Position where the dragging started

        self.initUI()

        # Create a QTimer to periodically check local storage
        self.timer = QTimer(self)
        self.timer.timeout.connect(self.read_local_storage)
        self.timer.start(1000)  # Set the interval to 1000 ms (1 second)
        # QCoreApplication.setAttribute(Qt.AA_UseSoftwareOpenGL, True)
        self.center()
        self.setAnimated(True)

    def center(self):
        # Get the size of the screen
        screen_rect = QApplication.primaryScreen().availableGeometry()
        screen_center = screen_rect.center()

        # Get the size of the window
        window_rect = self.rect()
        window_center = window_rect.center()

        # Calculate the new position for the window
        new_position = screen_center - window_center

        # Set the new position
        self.setGeometry(QRect(new_position, window_rect.size()))

    def check_server_status(self, url):
        try:
            response = requests.get(url)
            return response.status_code == 200
        except requests.RequestException:
            return False
    def initUI(self):
        # Create and configure a QWebEngineProfile
        profile = QWebEngineProfile("CustomProfile2",self)
        profile.setPersistentStoragePath(os.getcwd()+"/cache")
        profile.setHttpCacheType(QWebEngineProfile.DiskHttpCache)
        profile.setCachePath(os.getcwd()+"/cache")
        profile.setHttpCacheMaximumSize(200 * 1024 * 1024)

        # Create CustomWebEngineView and set its profile
        self.web_view = CustomWebEngineView(self)
        page = QWebEnginePage(profile, self.web_view)

        self.web_view.setPage(page)
        self.web_view.loadFinished.connect(self.read_local_storage)  # Connect loadFinished to the method
        server_url = "http://localhost:8000/popup.html"
        if self.check_server_status("http://localhost:8000"):
            print("Server is live. Setting URL.")
            self.web_view.setUrl(server_url)
        else:
            print("Server is not reachable.")
        # Apply gradient background to QWebEngineView and its border
        self.web_view.setStyleSheet("""
                    border-radius: 15px; 
                    border: 1px solid blue;  # Thin blue outline
                    background: radial-gradient(circle, rgba(5,10,47,1) 0%, rgba(3,12,25,1) 92%);  # Gradient background
                """)

        self.setFixedSize(441, 762)  # Set the fixed size of the window

        # Create the central widget and set layout
        central_widget = QWidget(self)
        layout = QVBoxLayout(central_widget)

        # Set gradient background style to central widget
        central_widget.setStyleSheet("""
            border: 3px solid black;  # Black border
            border-radius: 15px;  # Rounded corners
            background: radial-gradient(circle, rgba(5,10,47,1) 0%, rgba(3,12,25,1) 92%);  # Gradient background
        """)

        # Add custom buttons
        button_layout = QHBoxLayout()
        button_layout.setContentsMargins(0, 0, 0, 0)
        button_layout.setSpacing(0)
        button_layout.setAlignment(Qt.AlignLeft)

        self.close_button = QPushButton("", self)
        self.minimize_button = QPushButton("", self)

        self.close_button.setMaximumSize(31, 31)
        self.close_button.setIcon(QIcon("icons/close-button.png"))
        self.close_button.setCursor(Qt.PointingHandCursor)
        self.close_button.setStyleSheet("""
        QPushButton {
            border: none;
            background: none;
            image: url(:/icons/remove.png);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-radius: 50px;
            width: 100px;
            height: 100px;
        }
        QPushButton:hover {
            opacity: 0.8;
        }
        QPushButton:pressed {
            opacity: 0.6;
        }
        """)

        self.minimize_button.setMaximumSize(31, 31)
        self.minimize_button.setIcon(QIcon("icons/remove (1).png"))
        self.minimize_button.setCursor(Qt.PointingHandCursor)
        self.minimize_button.setStyleSheet("""
                QPushButton {
                    border: none;
                    background: none;
                    image: url(:/icons/remove (1).png);
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    border-radius: 50px;
                    width: 100px;
                    height: 100px;
                }
                QPushButton:hover {
                    opacity: 0.8;
                }
                QPushButton:pressed {
                    opacity: 0.6;
                }
                """)

        self.close_button.clicked.connect(self.close)
        self.minimize_button.clicked.connect(self.showMinimized)

        button_layout.addWidget(self.close_button)
        button_layout.addWidget(self.minimize_button)

        layout.addLayout(button_layout)
        layout.addWidget(self.web_view)

        central_widget.setLayout(layout)
        self.setCentralWidget(central_widget)

    def animateMinimize(self):
        print("Minimize button clicked")  # Debugging print statement

        # Create and start an animation for the height
        animation = QPropertyAnimation(self, b"geometry")
        animation.setDuration(300)  # Duration of the animation in milliseconds
        animation.setEasingCurve(QEasingCurve.InOutQuad)

        start_geometry = self.geometry()
        end_geometry = QRect(start_geometry.x(), start_geometry.y() + start_geometry.height(), start_geometry.width(), 0)
        animation.setStartValue(start_geometry)
        animation.setEndValue(end_geometry)

        # Ensure the window minimizes after animation
        animation.finished.connect(self.minimizeAfterAnimation)
        print("here")
        animation.start()

    def minimizeAfterAnimation(self):
        # Minimize the window after the animation completes
        print("animated")
        self.showMinimized()
    def read_local_storage(self):
        js_code = """
                (function() {
                    let storage = {};
                    for (let i = 0; i < localStorage.length; i++) {
                        let key = localStorage.key(i);
                        storage[key] = localStorage.getItem(key);
                    }
                    return JSON.stringify(storage);
                })();
                """
        self.web_view.page().runJavaScript(js_code, 0, self.handle_local_storage)

    def handle_local_storage(self, result):
        result = json.loads(result)
        theme = result["theme"]
        if self.first:
            self.first = None

        if theme == '"dark"':
            self.current_color = QColor(3, 12, 25)
        else:
            self.current_color = QColor(225, 238, 255)
        self.update()

    def toggle_maximize(self):
        if self.isMaximized():
            self.showNormal()
        else:
            self.showMaximized()

    def mousePressEvent(self, event):
        if event.button() == Qt.LeftButton:
            self.drag_start_position = event.globalPosition().toPoint()
            self.dragging = True

    def mouseMoveEvent(self, event):
        if self.dragging:
            delta = event.globalPosition().toPoint() - self.drag_start_position
            self.move(self.pos() + delta)
            self.drag_start_position = event.globalPosition().toPoint()

    def mouseReleaseEvent(self, event):
        if event.button() == Qt.LeftButton:
            self.dragging = False
    def paintEvent(self, event):
        painter = QPainter(self)
        painter.setRenderHint(QPainter.Antialiasing)
        painter.setBrush(QBrush(self.current_color))
        painter.setPen(Qt.NoPen)
        painter.drawRoundedRect(self.rect(), 15, 15)
        super().paintEvent(event)

def terminate_previous_gui_instances():
    logging.info("Checking for existing GUI.exe processes...")
    for proc in psutil.process_iter(['pid', 'name']):
        if proc.info['name'] == 'GUI.exe':
            try:
                logging.info(f"Terminating process {proc.info['pid']} - {proc.info['name']}")
                proc.terminate()
                proc.wait(timeout=5)  # Wait for process to terminate
                logging.info(f"Process {proc.info['pid']} terminated successfully.")
            except psutil.NoSuchProcess:
                logging.warning(f"Process {proc.info['pid']} no longer exists.")
            except psutil.TimeoutExpired:
                logging.error(f"Process {proc.info['pid']} did not terminate in time. Force killing...")
                proc.kill()  # Force kill if process did not terminate

if __name__ == '__main__':

# /    try:
#         logging.basicConfig(level=logging.INFO)
#
#         # Terminate any previous GUI.exe instances
#         terminate_previous_gui_instances()
#     except Exception as e:
#         print(e)
#         pass
    # Start the Flask API server in a separate thread
    flask_thread = threading.Thread(target=run_flask)
    flask_thread.daemon = True  # Allow thread to be killed when the main program exits
    flask_thread.start()
    threading.Thread(target=replacer.start).start()
    # input()

    # Start the PySide6 GUI application
    app = QApplication(sys.argv)
    window = CustomWindow()
    window.show()
    sys.exit(app.exec())
