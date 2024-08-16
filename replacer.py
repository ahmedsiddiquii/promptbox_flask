from pynput import keyboard
import pyperclip
import django
import os
import time
import platform
import subprocess
from pydub import AudioSegment
from pydub.playback import play
import json

import threading

global_data = {}

def set_clipboard_html_windows(html):
    import win32clipboard as clipboard
    import win32con

    html_header = """Version:0.9
StartHTML:{start_html:08d}
EndHTML:{end_html:08d}
StartFragment:{start_fragment:08d}
EndFragment:{end_fragment:08d}
"""
    html_start = html_header.format(
        start_html=0,
        end_html=0,
        start_fragment=len(html_header),
        end_fragment=len(html_header) + len(html)
    )

    html_body = f"<!DOCTYPE html><html><body><!--StartFragment-->{html}<!--EndFragment--></body></html>"
    html_full = html_start + html_body

    html_full = html_full.format(
        start_html=len(html_start),
        end_html=len(html_start) + len(html_body),
        start_fragment=len(html_start) + len("<!DOCTYPE html><html><body><!--StartFragment-->"),
        end_fragment=len(html_full) - len("<!--EndFragment--></body></html>")
    )

    clipboard.OpenClipboard()
    clipboard.EmptyClipboard()
    clipboard.SetClipboardData(clipboard.RegisterClipboardFormat("HTML Format"), html_full.encode('utf-8'))
    clipboard.CloseClipboard()


def set_clipboard_html_macos(html):
    html_body = f"<!DOCTYPE html><html><body>{html}</body></html>"
    process = subprocess.Popen(['pbcopy'], stdin=subprocess.PIPE)
    process.communicate(input=html_body.encode('utf-8'))


def set_clipboard_html_linux(html):
    html_body = f"<!DOCTYPE html><html><body>{html}</body></html>"
    process = subprocess.Popen(['xclip', '-selection', 'clipboard', '-t', 'text/html'], stdin=subprocess.PIPE)
    process.communicate(input=html_body.encode('utf-8'))


def set_clipboard_html(html):
    os_type = platform.system()

    if os_type == 'Windows':
        set_clipboard_html_windows(html)
    elif os_type == 'Darwin':  # macOS
        set_clipboard_html_macos(html)
    elif os_type == 'Linux':
        set_clipboard_html_linux(html)
    else:
        raise NotImplementedError(f"Clipboard handling not implemented for {os_type}")


def fetch_data():
    global global_data
    while True:
        try:
            with open('data.json', 'r') as file:
                data = json.loads(file.read())['prompts']
                # Assuming data is a list of dictionaries with 'shortcut' and 'name' keys
                global_data = {item['shortcut']: item['name'] for item in data if item['shortcut']}
        except FileNotFoundError:
            print("The file data.json was not found.")
            global_data = {}
        except json.JSONDecodeError:
            print("Error decoding JSON from the file.")
            global_data = {}
        except Exception as e:
            print(f"An error occurred: {e}")
            global_data = {}

        time.sleep(10)


# Buffer to store typed text
typed_buffer = ""


def on_press(key):
    global typed_buffer,global_data

    try:
        # Check if the key pressed is a character key
        if hasattr(key, 'char') and key.char:
            # Add the character to the buffer
            typed_buffer += key.char
            print(global_data)
            for shortcut in global_data:

                # Check if the buffer ends with the phrase to replace
                if shortcut in typed_buffer:
                    print(True)
                    print([shortcut])
                    print(typed_buffer)
                    # Replace the phrase in the buffer
                    # typed_buffer = typed_buffer.replace(shortcut,REPLACEMENT_TEXT)
                    set_clipboard_html(global_data[shortcut].replace("{","__").replace("}","__"))
                    audio = AudioSegment.from_file(
                        'mixkit-cooking-stopwatch-alert-1792.wav')
                    play(audio)
                    # Copy the updated buffer to the clipboard
                    # pyperclip.copy(global_data[shortcut])

                    # Clear the buffer after copying
                    typed_buffer = ""
    except AttributeError:
        pass


def on_release(key):
    # Exit the program if the escape key is pressed
    if key == keyboard.Key.esc:
        return False


def start():
    fetch_thread = threading.Thread(target=fetch_data)
    fetch_thread.daemon = True  # Ensure thread exits when the main program exits
    fetch_thread.start()
    # Set up the listener
    with keyboard.Listener(on_press=on_press, on_release=on_release) as listener:
        listener.join()
# start()