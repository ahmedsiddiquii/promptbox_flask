(()=>{var e,t,n={6751:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ie});var r=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(e){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),i=Math.abs,o=String.fromCharCode,a=Object.assign;function s(e){return e.trim()}function l(e,t,n){return e.replace(t,n)}function u(e,t){return e.indexOf(t)}function c(e,t){return 0|e.charCodeAt(t)}function d(e,t,n){return e.slice(t,n)}function h(e){return e.length}function f(e){return e.length}function p(e,t){return t.push(e),e}var m=1,g=1,y=0,v=0,b=0,w="";function E(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:m,column:g,length:a,return:""}}function S(e,t){return a(E("",null,null,"",null,null,0),e,{length:-e.length},t)}function k(){return b=v>0?c(w,--v):0,g--,10===b&&(g=1,m--),b}function _(){return b=v<y?c(w,v++):0,g++,10===b&&(g=1,m++),b}function I(){return c(w,v)}function T(){return v}function x(e,t){return d(w,e,t)}function C(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O(e){return m=g=1,y=h(w=e),v=0,[]}function R(e){return w="",e}function A(e){return s(x(v-1,M(91===e?e+2:40===e?e+1:e)))}function P(e){for(;(b=I())&&b<33;)_();return C(e)>2||C(b)>3?"":" "}function N(e,t){for(;--t&&_()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return x(e,T()+(t<6&&32==I()&&32==_()))}function M(e){for(;_();)switch(b){case e:return v;case 34:case 39:34!==e&&39!==e&&M(b);break;case 40:41===e&&M(e);break;case 92:_()}return v}function L(e,t){for(;_()&&e+b!==57&&(e+b!==84||47!==I()););return"/*"+x(t,v-1)+"*"+o(47===e?e:_())}function D(e){for(;!C(I());)_();return x(e,v)}var j="-ms-",F="-moz-",U="-webkit-",Z="comm",z="rule",B="decl",$="@keyframes";function V(e,t){for(var n="",r=f(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function W(e,t,n,r){switch(e.type){case"@import":case B:return e.return=e.return||e.value;case Z:return"";case $:return e.return=e.value+"{"+V(e.children,r)+"}";case z:e.value=e.props.join(",")}return h(n=V(e.children,r))?e.return=e.value+"{"+n+"}":""}function H(e){return R(q("",null,null,null,[""],e=O(e),0,[0],e))}function q(e,t,n,r,i,a,s,d,f){for(var m=0,g=0,y=s,v=0,b=0,w=0,E=1,S=1,x=1,C=0,O="",R=i,M=a,j=r,F=O;S;)switch(w=C,C=_()){case 40:if(108!=w&&58==c(F,y-1)){-1!=u(F+=l(A(C),"&","&\f"),"&\f")&&(x=-1);break}case 34:case 39:case 91:F+=A(C);break;case 9:case 10:case 13:case 32:F+=P(w);break;case 92:F+=N(T()-1,7);continue;case 47:switch(I()){case 42:case 47:p(G(L(_(),T()),t,n),f);break;default:F+="/"}break;case 123*E:d[m++]=h(F)*x;case 125*E:case 59:case 0:switch(C){case 0:case 125:S=0;case 59+g:b>0&&h(F)-y&&p(b>32?X(F+";",r,n,y-1):X(l(F," ","")+";",r,n,y-2),f);break;case 59:F+=";";default:if(p(j=K(F,t,n,m,g,i,d,O,R=[],M=[],y),a),123===C)if(0===g)q(F,t,j,j,R,a,y,d,M);else switch(99===v&&110===c(F,3)?100:v){case 100:case 109:case 115:q(e,j,j,r&&p(K(e,j,j,0,0,i,d,O,i,R=[],y),M),i,M,y,d,r?R:M);break;default:q(F,j,j,j,[""],M,0,d,M)}}m=g=b=0,E=x=1,O=F="",y=s;break;case 58:y=1+h(F),b=w;default:if(E<1)if(123==C)--E;else if(125==C&&0==E++&&125==k())continue;switch(F+=o(C),C*E){case 38:x=g>0?1:(F+="\f",-1);break;case 44:d[m++]=(h(F)-1)*x,x=1;break;case 64:45===I()&&(F+=A(_())),v=I(),g=y=h(O=F+=D(T())),C++;break;case 45:45===w&&2==h(F)&&(E=0)}}return a}function K(e,t,n,r,o,a,u,c,h,p,m){for(var g=o-1,y=0===o?a:[""],v=f(y),b=0,w=0,S=0;b<r;++b)for(var k=0,_=d(e,g+1,g=i(w=u[b])),I=e;k<v;++k)(I=s(w>0?y[k]+" "+_:l(_,/&\f/g,y[k])))&&(h[S++]=I);return E(e,t,n,0===o?z:c,h,p,m)}function G(e,t,n){return E(e,t,n,Z,o(b),d(e,2,-2),0)}function X(e,t,n,r){return E(e,t,n,B,d(e,0,r),d(e,r+1,-1),r)}n(5108);var J=function(e,t,n){for(var r=0,i=0;r=i,i=I(),38===r&&12===i&&(t[n]=1),!C(i);)_();return x(e,v)},Y=function(e,t){return R(function(e,t){var n=-1,r=44;do{switch(C(r)){case 0:38===r&&12===I()&&(t[n]=1),e[n]+=J(v-1,t,n);break;case 2:e[n]+=A(r);break;case 4:if(44===r){e[++n]=58===I()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=o(r)}}while(r=_());return e}(O(e),t))},Q=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Q.get(n))&&!r){Q.set(e,!0);for(var i=[],o=Y(t,i),a=n.props,s=0,l=0;s<o.length;s++)for(var u=0;u<a.length;u++,l++)e.props[l]=i[s]?o[s].replace(/&\f/g,a[u]):a[u]+" "+o[s]}}},te=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function ne(e,t){switch(function(e,t){return 45^c(e,0)?(((t<<2^c(e,0))<<2^c(e,1))<<2^c(e,2))<<2^c(e,3):0}(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+F+e+j+e+e;case 6828:case 4268:return U+e+j+e+e;case 6165:return U+e+j+"flex-"+e+e;case 5187:return U+e+l(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+j+"flex-$1$2")+e;case 5443:return U+e+j+"flex-item-"+l(e,/flex-|-self/,"")+e;case 4675:return U+e+j+"flex-line-pack"+l(e,/align-content|flex-|-self/,"")+e;case 5548:return U+e+j+l(e,"shrink","negative")+e;case 5292:return U+e+j+l(e,"basis","preferred-size")+e;case 6060:return U+"box-"+l(e,"-grow","")+U+e+j+l(e,"grow","positive")+e;case 4554:return U+l(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return l(l(l(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return l(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return l(l(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+j+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4095:case 3583:case 4068:case 2532:return l(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(e)-1-t>6)switch(c(e,t+1)){case 109:if(45!==c(e,t+4))break;case 102:return l(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+F+(108==c(e,t+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?ne(l(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==c(e,t+1))break;case 6444:switch(c(e,h(e)-3-(~u(e,"!important")&&10))){case 107:return l(e,":",":"+U)+e;case 101:return l(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+U+(45===c(e,14)?"inline-":"")+"box$3$1"+U+"$2$3$1"+j+"$2box$3")+e}break;case 5936:switch(c(e,t+11)){case 114:return U+e+j+l(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+j+l(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+j+l(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return U+e+j+e+e}return e}var re=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case B:e.return=ne(e.value,e.length);break;case $:return V([S(e,{value:l(e.value,"@","@"+U)})],r);case z:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return V([S(e,{props:[l(t,/:(read-\w+)/,":"+F+"$1")]})],r);case"::placeholder":return V([S(e,{props:[l(t,/:(plac\w+)/,":"+U+"input-$1")]}),S(e,{props:[l(t,/:(plac\w+)/,":"+F+"$1")]}),S(e,{props:[l(t,/:(plac\w+)/,j+"input-$1")]})],r)}return""}))}}];const ie=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var i=e.stylisPlugins||re;var o,a,s={},l=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)s[t[n]]=!0;l.push(e)}));var u,c,d=[W,(c=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&c(e)})],h=function(e){var t=f(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}([ee,te].concat(i,d));a=function(e,t,n,r){u=n,V(H(e?e+"{"+t.styles+"}":t.styles),h),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new r({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:a};return p.sheet.hydrate(l),p}},5042:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=function(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}},2443:(e,t,n)=>{"use strict";n.d(t,{T:()=>s,w:()=>a});var r=n(7294),i=n(6751),o=(n(6797),n(7278),(0,r.createContext)("undefined"!=typeof HTMLElement?(0,i.Z)({key:"css"}):null));o.Provider;var a=function(e){return(0,r.forwardRef)((function(t,n){var i=(0,r.useContext)(o);return e(t,i,n)}))},s=(0,r.createContext)({})},6797:(e,t,n)=>{"use strict";n.d(t,{O:()=>p});const r={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var i=n(5042),o=/[A-Z]|^ms/g,a=/_EMO_([^_]+?)_([^]*?)_EMO_/g,s=function(e){return 45===e.charCodeAt(1)},l=function(e){return null!=e&&"boolean"!=typeof e},u=(0,i.Z)((function(e){return s(e)?e:e.replace(o,"-$&").toLowerCase()})),c=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(a,(function(e,t,n){return h={name:t,styles:n,next:h},t}))}return 1===r[e]||s(e)||"number"!=typeof t||0===t?t:t+"px"};function d(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return h={name:n.name,styles:n.styles,next:h},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)h={name:r.name,styles:r.styles,next:h},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=d(e,t,n[i])+";";else for(var o in n){var a=n[o];if("object"!=typeof a)null!=t&&void 0!==t[a]?r+=o+"{"+t[a]+"}":l(a)&&(r+=u(o)+":"+c(o,a)+";");else if(!Array.isArray(a)||"string"!=typeof a[0]||null!=t&&void 0!==t[a[0]]){var s=d(e,t,a);switch(o){case"animation":case"animationName":r+=u(o)+":"+s+";";break;default:r+=o+"{"+s+"}"}}else for(var h=0;h<a.length;h++)l(a[h])&&(r+=u(o)+":"+c(o,a[h])+";")}return r}(e,t,n);case"function":if(void 0!==e){var i=h,o=n(e);return h=i,d(e,t,o)}}if(null==t)return n;var a=t[n];return void 0!==a?a:n}var h,f=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var p=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,i="";h=void 0;var o=e[0];null==o||void 0===o.raw?(r=!1,i+=d(n,t,o)):i+=o[0];for(var a=1;a<e.length;a++)i+=d(n,t,e[a]),r&&(i+=o[a]);f.lastIndex=0;for(var s,l="";null!==(s=f.exec(i));)l+="-"+s[1];var u=function(e){for(var t,n=0,r=0,i=e.length;i>=4;++r,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(i){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(i)+l;return{name:u,styles:i,next:h}}},7278:(e,t,n)=>{"use strict";var r;n.d(t,{L:()=>a,j:()=>s});var i=n(7294),o=!!(r||(r=n.t(i,2))).useInsertionEffect&&(r||(r=n.t(i,2))).useInsertionEffect,a=o||function(e){return e()},s=o||i.useLayoutEffect},444:(e,t,n)=>{"use strict";n.d(t,{My:()=>o,fp:()=>r,hC:()=>i});function r(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var i=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},o=function(e,t,n){i(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+r:"",o,e.sheet,!0);o=o.next}while(void 0!==o)}}},1583:(e,t,n)=>{"use strict";var r=n(5108),i=n(7294),o=n(7418),a=n(3840);
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!i)throw Error(s(227));var l=new Set,u={};function c(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(u[e]=t,e=0;e<t.length;e++)l.add(t[e])}var h=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p=Object.prototype.hasOwnProperty,m={},g={};function y(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){v[e]=new y(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];v[t]=new y(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){v[e]=new y(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){v[e]=new y(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){v[e]=new y(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){v[e]=new y(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){v[e]=new y(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){v[e]=new y(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){v[e]=new y(e,5,!1,e.toLowerCase(),null,!1,!1)}));var b=/[\-:]([a-z])/g;function w(e){return e[1].toUpperCase()}function E(e,t,n,r){var i=v.hasOwnProperty(t)?v[t]:null;(null!==i?0===i.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!p.call(g,e)||!p.call(m,e)&&(f.test(e)?g[e]=!0:(m[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(b,w);v[t]=new y(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(b,w);v[t]=new y(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(b,w);v[t]=new y(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){v[e]=new y(e,1,!1,e.toLowerCase(),null,!1,!1)})),v.xlinkHref=new y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){v[e]=new y(e,1,!1,e.toLowerCase(),null,!0,!0)}));var S=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=60103,_=60106,I=60107,T=60108,x=60114,C=60109,O=60110,R=60112,A=60113,P=60120,N=60115,M=60116,L=60121,D=60128,j=60129,F=60130,U=60131;if("function"==typeof Symbol&&Symbol.for){var Z=Symbol.for;k=Z("react.element"),_=Z("react.portal"),I=Z("react.fragment"),T=Z("react.strict_mode"),x=Z("react.profiler"),C=Z("react.provider"),O=Z("react.context"),R=Z("react.forward_ref"),A=Z("react.suspense"),P=Z("react.suspense_list"),N=Z("react.memo"),M=Z("react.lazy"),L=Z("react.block"),Z("react.scope"),D=Z("react.opaque.id"),j=Z("react.debug_trace_mode"),F=Z("react.offscreen"),U=Z("react.legacy_hidden")}var z,B="function"==typeof Symbol&&Symbol.iterator;function $(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=B&&e[B]||e["@@iterator"])?e:null}function V(e){if(void 0===z)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);z=t&&t[1]||""}return"\n"+z+e}var W=!1;function H(e,t){if(!e||W)return"";W=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(e){if(e&&r&&"string"==typeof e.stack){for(var i=e.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do{if(a--,0>--s||i[a]!==o[s])return"\n"+i[a].replace(" at new "," at ")}while(1<=a&&0<=s);break}}}finally{W=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?V(e):""}function q(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=H(e.type,!1);case 11:return e=H(e.type.render,!1);case 22:return e=H(e.type._render,!1);case 1:return e=H(e.type,!0);default:return""}}function K(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case I:return"Fragment";case _:return"Portal";case x:return"Profiler";case T:return"StrictMode";case A:return"Suspense";case P:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case O:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case R:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case N:return K(e.type);case L:return K(e._render);case M:t=e._payload,e=e._init;try{return K(e(t))}catch(e){}}return null}function G(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function X(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function J(e){e._valueTracker||(e._valueTracker=function(e){var t=X(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=X(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ee(e,t){var n=t.checked;return o({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function te(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=G(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ne(e,t){null!=(t=t.checked)&&E(e,"checked",t,!1)}function re(e,t){ne(e,t);var n=G(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?oe(e,t.type,n):t.hasOwnProperty("defaultValue")&&oe(e,t.type,G(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ie(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function oe(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function ae(e,t){return e=o({children:void 0},t),(t=function(e){var t="";return i.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function se(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+G(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function le(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(s(91));return o({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ue(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(s(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(s(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:G(n)}}function ce(e,t){var n=G(t.value),r=G(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function de(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var he={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function fe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?fe(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var me,ge,ye=(ge=function(e,t){if(e.namespaceURI!==he.svg||"innerHTML"in e)e.innerHTML=t;else{for((me=me||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=me.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ge(e,t)}))}:ge);function ve(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var be={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},we=["Webkit","ms","Moz","O"];function Ee(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||be.hasOwnProperty(e)&&be[e]?(""+t).trim():t+"px"}function Se(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=Ee(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(be).forEach((function(e){we.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),be[t]=be[e]}))}));var ke=o({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _e(e,t){if(t){if(ke[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(s(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(s(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(s(62))}}function Ie(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Te(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var xe=null,Ce=null,Oe=null;function Re(e){if(e=ri(e)){if("function"!=typeof xe)throw Error(s(280));var t=e.stateNode;t&&(t=oi(t),xe(e.stateNode,e.type,t))}}function Ae(e){Ce?Oe?Oe.push(e):Oe=[e]:Ce=e}function Pe(){if(Ce){var e=Ce,t=Oe;if(Oe=Ce=null,Re(e),t)for(e=0;e<t.length;e++)Re(t[e])}}function Ne(e,t){return e(t)}function Me(e,t,n,r,i){return e(t,n,r,i)}function Le(){}var De=Ne,je=!1,Fe=!1;function Ue(){null===Ce&&null===Oe||(Le(),Pe())}function Ze(e,t){var n=e.stateNode;if(null===n)return null;var r=oi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(s(231,t,typeof n));return n}var ze=!1;if(h)try{var Be={};Object.defineProperty(Be,"passive",{get:function(){ze=!0}}),window.addEventListener("test",Be,Be),window.removeEventListener("test",Be,Be)}catch(ge){ze=!1}function $e(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var Ve=!1,We=null,He=!1,qe=null,Ke={onError:function(e){Ve=!0,We=e}};function Ge(e,t,n,r,i,o,a,s,l){Ve=!1,We=null,$e.apply(Ke,arguments)}function Xe(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(1026&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Je(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ye(e){if(Xe(e)!==e)throw Error(s(188))}function Qe(e){if(e=function(e){var t=e.alternate;if(!t){if(null===(t=Xe(e)))throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ye(i),e;if(o===r)return Ye(i),t;o=o.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(3!==n.tag)throw Error(s(188));return n.stateNode.current===n?e:t}(e),!e)return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function et(e,t){for(var n=e.alternate;null!==t;){if(t===e||t===n)return!0;t=t.return}return!1}var tt,nt,rt,it,ot=!1,at=[],st=null,lt=null,ut=null,ct=new Map,dt=new Map,ht=[],ft="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pt(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:16|n,nativeEvent:i,targetContainers:[r]}}function mt(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":ct.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":dt.delete(t.pointerId)}}function gt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e=pt(t,n,r,i,o),null!==t&&(null!==(t=ri(t))&&nt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function yt(e){var t=ni(e.target);if(null!==t){var n=Xe(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Je(n)))return e.blockedOn=t,void it(e.lanePriority,(function(){a.unstable_runWithPriority(e.priority,(function(){rt(n)}))}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function vt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ri(n))&&nt(t),e.blockedOn=n,!1;t.shift()}return!0}function bt(e,t,n){vt(e)&&n.delete(t)}function wt(){for(ot=!1;0<at.length;){var e=at[0];if(null!==e.blockedOn){null!==(e=ri(e.blockedOn))&&tt(e);break}for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n){e.blockedOn=n;break}t.shift()}null===e.blockedOn&&at.shift()}null!==st&&vt(st)&&(st=null),null!==lt&&vt(lt)&&(lt=null),null!==ut&&vt(ut)&&(ut=null),ct.forEach(bt),dt.forEach(bt)}function Et(e,t){e.blockedOn===t&&(e.blockedOn=null,ot||(ot=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,wt)))}function St(e){function t(t){return Et(t,e)}if(0<at.length){Et(at[0],e);for(var n=1;n<at.length;n++){var r=at[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==st&&Et(st,e),null!==lt&&Et(lt,e),null!==ut&&Et(ut,e),ct.forEach(t),dt.forEach(t),n=0;n<ht.length;n++)(r=ht[n]).blockedOn===e&&(r.blockedOn=null);for(;0<ht.length&&null===(n=ht[0]).blockedOn;)yt(n),null===n.blockedOn&&ht.shift()}function kt(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _t={animationend:kt("Animation","AnimationEnd"),animationiteration:kt("Animation","AnimationIteration"),animationstart:kt("Animation","AnimationStart"),transitionend:kt("Transition","TransitionEnd")},It={},Tt={};function xt(e){if(It[e])return It[e];if(!_t[e])return e;var t,n=_t[e];for(t in n)if(n.hasOwnProperty(t)&&t in Tt)return It[e]=n[t];return e}h&&(Tt=document.createElement("div").style,"AnimationEvent"in window||(delete _t.animationend.animation,delete _t.animationiteration.animation,delete _t.animationstart.animation),"TransitionEvent"in window||delete _t.transitionend.transition);var Ct=xt("animationend"),Ot=xt("animationiteration"),Rt=xt("animationstart"),At=xt("transitionend"),Pt=new Map,Nt=new Map,Mt=["abort","abort",Ct,"animationEnd",Ot,"animationIteration",Rt,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",At,"transitionEnd","waiting","waiting"];function Lt(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Nt.set(r,t),Pt.set(r,i),c(i,[r])}}(0,a.unstable_now)();var Dt=8;function jt(e){if(0!=(1&e))return Dt=15,1;if(0!=(2&e))return Dt=14,2;if(0!=(4&e))return Dt=13,4;var t=24&e;return 0!==t?(Dt=12,t):0!=(32&e)?(Dt=11,32):0!==(t=192&e)?(Dt=10,t):0!=(256&e)?(Dt=9,256):0!==(t=3584&e)?(Dt=8,t):0!=(4096&e)?(Dt=7,4096):0!==(t=4186112&e)?(Dt=6,t):0!==(t=62914560&e)?(Dt=5,t):67108864&e?(Dt=4,67108864):0!=(134217728&e)?(Dt=3,134217728):0!==(t=805306368&e)?(Dt=2,t):0!=(1073741824&e)?(Dt=1,1073741824):(Dt=8,e)}function Ft(e,t){var n=e.pendingLanes;if(0===n)return Dt=0;var r=0,i=0,o=e.expiredLanes,a=e.suspendedLanes,s=e.pingedLanes;if(0!==o)r=o,i=Dt=15;else if(0!==(o=134217727&n)){var l=o&~a;0!==l?(r=jt(l),i=Dt):0!==(s&=o)&&(r=jt(s),i=Dt)}else 0!==(o=n&~a)?(r=jt(o),i=Dt):0!==s&&(r=jt(s),i=Dt);if(0===r)return 0;if(r=n&((0>(r=31-Vt(r))?0:1<<r)<<1)-1,0!==t&&t!==r&&0==(t&a)){if(jt(t),i<=Dt)return t;Dt=i}if(0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-Vt(t)),r|=e[n],t&=~i;return r}function Ut(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Zt(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return 0===(e=zt(24&~t))?Zt(10,t):e;case 10:return 0===(e=zt(192&~t))?Zt(8,t):e;case 8:return 0===(e=zt(3584&~t))&&(0===(e=zt(4186112&~t))&&(e=512)),e;case 2:return 0===(t=zt(805306368&~t))&&(t=268435456),t}throw Error(s(358,e))}function zt(e){return e&-e}function Bt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $t(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,(e=e.eventTimes)[t=31-Vt(t)]=n}var Vt=Math.clz32?Math.clz32:function(e){return 0===e?32:31-(Wt(e)/Ht|0)|0},Wt=Math.log,Ht=Math.LN2;var qt=a.unstable_UserBlockingPriority,Kt=a.unstable_runWithPriority,Gt=!0;function Xt(e,t,n,r){je||Le();var i=Yt,o=je;je=!0;try{Me(i,e,t,n,r)}finally{(je=o)||Ue()}}function Jt(e,t,n,r){Kt(qt,Yt.bind(null,e,t,n,r))}function Yt(e,t,n,r){var i;if(Gt)if((i=0==(4&t))&&0<at.length&&-1<ft.indexOf(e))e=pt(null,e,t,n,r),at.push(e);else{var o=Qt(e,t,n,r);if(null===o)i&&mt(e,r);else{if(i){if(-1<ft.indexOf(e))return e=pt(o,e,t,n,r),void at.push(e);if(function(e,t,n,r,i){switch(t){case"focusin":return st=gt(st,e,t,n,r,i),!0;case"dragenter":return lt=gt(lt,e,t,n,r,i),!0;case"mouseover":return ut=gt(ut,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ct.set(o,gt(ct.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,dt.set(o,gt(dt.get(o)||null,e,t,n,r,i)),!0}return!1}(o,e,t,n,r))return;mt(e,r)}Lr(e,t,r,null,n)}}}function Qt(e,t,n,r){var i=Te(r);if(null!==(i=ni(i))){var o=Xe(i);if(null===o)i=null;else{var a=o.tag;if(13===a){if(null!==(i=Je(o)))return i;i=null}else if(3===a){if(o.stateNode.hydrate)return 3===o.tag?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null)}}return Lr(e,t,r,i,n),null}var en=null,tn=null,nn=null;function rn(){if(nn)return nn;var e,t,n=tn,r=n.length,i="value"in en?en.value:en.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return nn=i.slice(e,1<t?1-t:void 0)}function on(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function an(){return!0}function sn(){return!1}function ln(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?an:sn,this.isPropagationStopped=sn,this}return o(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=an)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=an)},persist:function(){},isPersistent:an}),t}var un,cn,dn,hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fn=ln(hn),pn=o({},hn,{view:0,detail:0}),mn=ln(pn),gn=o({},pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dn&&(dn&&"mousemove"===e.type?(un=e.screenX-dn.screenX,cn=e.screenY-dn.screenY):cn=un=0,dn=e),un)},movementY:function(e){return"movementY"in e?e.movementY:cn}}),yn=ln(gn),vn=ln(o({},gn,{dataTransfer:0})),bn=ln(o({},pn,{relatedTarget:0})),wn=ln(o({},hn,{animationName:0,elapsedTime:0,pseudoElement:0})),En=o({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sn=ln(En),kn=ln(o({},hn,{data:0})),_n={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},In={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Tn[e])&&!!t[e]}function Cn(){return xn}var On=o({},pn,{key:function(e){if(e.key){var t=_n[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=on(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?In[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?on(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?on(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Rn=ln(On),An=ln(o({},gn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=ln(o({},pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Nn=ln(o({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Mn=o({},gn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ln=ln(Mn),Dn=[9,13,27,32],jn=h&&"CompositionEvent"in window,Fn=null;h&&"documentMode"in document&&(Fn=document.documentMode);var Un=h&&"TextEvent"in window&&!Fn,Zn=h&&(!jn||Fn&&8<Fn&&11>=Fn),zn=String.fromCharCode(32),Bn=!1;function $n(e,t){switch(e){case"keyup":return-1!==Dn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Wn=!1;var Hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Hn[e.type]:"textarea"===t}function Kn(e,t,n,r){Ae(r),0<(t=jr(t,"onChange")).length&&(n=new fn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,Xn=null;function Jn(e){Or(e,0)}function Yn(e){if(Y(ii(e)))return e}function Qn(e,t){if("change"===e)return t}var er=!1;if(h){var tr;if(h){var nr="oninput"in document;if(!nr){var rr=document.createElement("div");rr.setAttribute("oninput","return;"),nr="function"==typeof rr.oninput}tr=nr}else tr=!1;er=tr&&(!document.documentMode||9<document.documentMode)}function ir(){Gn&&(Gn.detachEvent("onpropertychange",or),Xn=Gn=null)}function or(e){if("value"===e.propertyName&&Yn(Xn)){var t=[];if(Kn(t,Xn,e,Te(e)),e=Jn,je)e(t);else{je=!0;try{Ne(e,t)}finally{je=!1,Ue()}}}}function ar(e,t,n){"focusin"===e?(ir(),Xn=n,(Gn=t).attachEvent("onpropertychange",or)):"focusout"===e&&ir()}function sr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yn(Xn)}function lr(e,t){if("click"===e)return Yn(t)}function ur(e,t){if("input"===e||"change"===e)return Yn(t)}var cr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},dr=Object.prototype.hasOwnProperty;function hr(e,t){if(cr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!dr.call(t,n[r])||!cr(e[n[r]],t[n[r]]))return!1;return!0}function fr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pr(e,t){var n,r=fr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=fr(r)}}function mr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?mr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function gr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var vr=h&&"documentMode"in document&&11>=document.documentMode,br=null,wr=null,Er=null,Sr=!1;function kr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Sr||null==br||br!==Q(r)||("selectionStart"in(r=br)&&yr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Er&&hr(Er,r)||(Er=r,0<(r=jr(wr,"onSelect")).length&&(t=new fn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=br)))}Lt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Lt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Lt(Mt,2);for(var _r="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Ir=0;Ir<_r.length;Ir++)Nt.set(_r[Ir],0);d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function Cr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,a,l,u){if(Ge.apply(this,arguments),Ve){if(!Ve)throw Error(s(198));var c=We;Ve=!1,We=null,He||(He=!0,qe=c)}}(r,t,void 0,e),e.currentTarget=null}function Or(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Cr(i,s,u),o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Cr(i,s,u),o=l}}}if(He)throw e=qe,He=!1,qe=null,e}function Rr(e,t){var n=ai(t),r=e+"__bubble";n.has(r)||(Mr(t,e,2,!1),n.add(r))}var Ar="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){e[Ar]||(e[Ar]=!0,l.forEach((function(t){xr.has(t)||Nr(t,!1,e,null),Nr(t,!0,e,null)})))}function Nr(e,t,n,r){var i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,o=n;if("selectionchange"===e&&9!==n.nodeType&&(o=n.ownerDocument),null!==r&&!t&&xr.has(e)){if("scroll"!==e)return;i|=2,o=r}var a=ai(o),s=e+"__"+(t?"capture":"bubble");a.has(s)||(t&&(i|=4),Mr(o,e,i,t),a.add(s))}function Mr(e,t,n,r){var i=Nt.get(t);switch(void 0===i?2:i){case 0:i=Xt;break;case 1:i=Jt;break;default:i=Yt}n=i.bind(null,t,n,e),i=void 0,!ze||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Lr(e,t,n,r,i){var o=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=ni(s)))return;if(5===(l=a.tag)||6===l){r=o=a;continue e}s=s.parentNode}}r=r.return}!function(e,t,n){if(Fe)return e(t,n);Fe=!0;try{return De(e,t,n)}finally{Fe=!1,Ue()}}((function(){var r=o,i=Te(n),a=[];e:{var s=Pt.get(e);if(void 0!==s){var l=fn,u=e;switch(e){case"keypress":if(0===on(n))break e;case"keydown":case"keyup":l=Rn;break;case"focusin":u="focus",l=bn;break;case"focusout":u="blur",l=bn;break;case"beforeblur":case"afterblur":l=bn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=yn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=vn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Pn;break;case Ct:case Ot:case Rt:l=wn;break;case At:l=Nn;break;case"scroll":l=mn;break;case"wheel":l=Ln;break;case"copy":case"cut":case"paste":l=Sn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=An}var c=0!=(4&t),d=!c&&"scroll"===e,h=c?null!==s?s+"Capture":null:s;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==h&&(null!=(m=Ze(p,h))&&c.push(Dr(p,m,f)))),d)break;p=p.return}0<c.length&&(s=new l(s,u,null,n,i),a.push({event:s,listeners:c}))}}if(0==(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||0!=(16&t)||!(u=n.relatedTarget||n.fromElement)||!ni(u)&&!u[ei])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?ni(u):null)&&(u!==(d=Xe(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=yn,m="onMouseLeave",h="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=An,m="onPointerLeave",h="onPointerEnter",p="pointer"),d=null==l?s:ii(l),f=null==u?s:ii(u),(s=new c(m,p+"leave",l,n,i)).target=d,s.relatedTarget=f,m=null,ni(i)===r&&((c=new c(h,p+"enter",u,n,i)).target=f,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(h=u,p=0,f=c=l;f;f=Fr(f))p++;for(f=0,m=h;m;m=Fr(m))f++;for(;0<p-f;)c=Fr(c),p--;for(;0<f-p;)h=Fr(h),f--;for(;p--;){if(c===h||null!==h&&c===h.alternate)break e;c=Fr(c),h=Fr(h)}c=null}else c=null;null!==l&&Ur(a,s,l,c,!1),null!==u&&null!==d&&Ur(a,d,u,c,!0)}if("select"===(l=(s=r?ii(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Qn;else if(qn(s))if(er)g=ur;else{g=sr;var y=ar}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=lr);switch(g&&(g=g(e,r))?Kn(a,g,n,i):(y&&y(e,s,r),"focusout"===e&&(y=s._wrapperState)&&y.controlled&&"number"===s.type&&oe(s,"number",s.value)),y=r?ii(r):window,e){case"focusin":(qn(y)||"true"===y.contentEditable)&&(br=y,wr=r,Er=null);break;case"focusout":Er=wr=br=null;break;case"mousedown":Sr=!0;break;case"contextmenu":case"mouseup":case"dragend":Sr=!1,kr(a,n,i);break;case"selectionchange":if(vr)break;case"keydown":case"keyup":kr(a,n,i)}var v;if(jn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Wn?$n(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Zn&&"ko"!==n.locale&&(Wn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Wn&&(v=rn()):(tn="value"in(en=i)?en.value:en.textContent,Wn=!0)),0<(y=jr(r,b)).length&&(b=new kn(b,e,null,n,i),a.push({event:b,listeners:y}),v?b.data=v:null!==(v=Vn(n))&&(b.data=v))),(v=Un?function(e,t){switch(e){case"compositionend":return Vn(t);case"keypress":return 32!==t.which?null:(Bn=!0,zn);case"textInput":return(e=t.data)===zn&&Bn?null:e;default:return null}}(e,n):function(e,t){if(Wn)return"compositionend"===e||!jn&&$n(e,t)?(e=rn(),nn=tn=en=null,Wn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=jr(r,"onBeforeInput")).length&&(i=new kn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=v))}Or(a,t)}))}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Ze(e,n))&&r.unshift(Dr(e,o,i)),null!=(o=Ze(e,t))&&r.push(Dr(e,o,i))),e=e.return}return r}function Fr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Ur(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,i?null!=(l=Ze(n,o))&&a.unshift(Dr(n,l,s)):i||null!=(l=Ze(n,o))&&a.push(Dr(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}function Zr(){}var zr=null,Br=null;function $r(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Vr(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Wr="function"==typeof setTimeout?setTimeout:void 0,Hr="function"==typeof clearTimeout?clearTimeout:void 0;function qr(e){1===e.nodeType?e.textContent="":9===e.nodeType&&(null!=(e=e.body)&&(e.textContent=""))}function Kr(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function Gr(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Xr=0;var Jr=Math.random().toString(36).slice(2),Yr="__reactFiber$"+Jr,Qr="__reactProps$"+Jr,ei="__reactContainer$"+Jr,ti="__reactEvents$"+Jr;function ni(e){var t=e[Yr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ei]||n[Yr]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Gr(e);null!==e;){if(n=e[Yr])return n;e=Gr(e)}return t}n=(e=n).parentNode}return null}function ri(e){return!(e=e[Yr]||e[ei])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ii(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(s(33))}function oi(e){return e[Qr]||null}function ai(e){var t=e[ti];return void 0===t&&(t=e[ti]=new Set),t}var si=[],li=-1;function ui(e){return{current:e}}function ci(e){0>li||(e.current=si[li],si[li]=null,li--)}function di(e,t){li++,si[li]=e.current,e.current=t}var hi={},fi=ui(hi),pi=ui(!1),mi=hi;function gi(e,t){var n=e.type.contextTypes;if(!n)return hi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function yi(e){return null!=(e=e.childContextTypes)}function vi(){ci(pi),ci(fi)}function bi(e,t,n){if(fi.current!==hi)throw Error(s(168));di(fi,t),di(pi,n)}function wi(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in e))throw Error(s(108,K(t)||"Unknown",i));return o({},n,r)}function Ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hi,mi=fi.current,di(fi,e),di(pi,pi.current),!0}function Si(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=wi(e,t,mi),r.__reactInternalMemoizedMergedChildContext=e,ci(pi),ci(fi),di(fi,e)):ci(pi),di(pi,n)}var ki=null,_i=null,Ii=a.unstable_runWithPriority,Ti=a.unstable_scheduleCallback,xi=a.unstable_cancelCallback,Ci=a.unstable_shouldYield,Oi=a.unstable_requestPaint,Ri=a.unstable_now,Ai=a.unstable_getCurrentPriorityLevel,Pi=a.unstable_ImmediatePriority,Ni=a.unstable_UserBlockingPriority,Mi=a.unstable_NormalPriority,Li=a.unstable_LowPriority,Di=a.unstable_IdlePriority,ji={},Fi=void 0!==Oi?Oi:function(){},Ui=null,Zi=null,zi=!1,Bi=Ri(),$i=1e4>Bi?Ri:function(){return Ri()-Bi};function Vi(){switch(Ai()){case Pi:return 99;case Ni:return 98;case Mi:return 97;case Li:return 96;case Di:return 95;default:throw Error(s(332))}}function Wi(e){switch(e){case 99:return Pi;case 98:return Ni;case 97:return Mi;case 96:return Li;case 95:return Di;default:throw Error(s(332))}}function Hi(e,t){return e=Wi(e),Ii(e,t)}function qi(e,t,n){return e=Wi(e),Ti(e,t,n)}function Ki(){if(null!==Zi){var e=Zi;Zi=null,xi(e)}Gi()}function Gi(){if(!zi&&null!==Ui){zi=!0;var e=0;try{var t=Ui;Hi(99,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}})),Ui=null}catch(t){throw null!==Ui&&(Ui=Ui.slice(e+1)),Ti(Pi,Ki),t}finally{zi=!1}}}var Xi=S.ReactCurrentBatchConfig;function Ji(e,t){if(e&&e.defaultProps){for(var n in t=o({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var Yi=ui(null),Qi=null,eo=null,to=null;function no(){to=eo=Qi=null}function ro(e){var t=Yi.current;ci(Yi),e.type._context._currentValue=t}function io(e,t){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)===t){if(null===n||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,null!==n&&(n.childLanes|=t);e=e.return}}function oo(e,t){Qi=e,to=eo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(ja=!0),e.firstContext=null)}function ao(e,t){if(to!==e&&!1!==t&&0!==t)if("number"==typeof t&&1073741823!==t||(to=e,t=1073741823),t={context:e,observedBits:t,next:null},null===eo){if(null===Qi)throw Error(s(308));eo=t,Qi.dependencies={lanes:0,firstContext:t,responders:null}}else eo=eo.next=t;return e._currentValue}var so=!1;function lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function uo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function co(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ho(e,t){if(null!==(e=e.updateQueue)){var n=(e=e.shared).pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function fo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function po(e,t,n,r){var i=e.updateQueue;so=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(null!==l){i.shared.pending=null;var u=l,c=u.next;u.next=null,null===s?a=c:s.next=c,s=u;var d=e.alternate;if(null!==d){var h=(d=d.updateQueue).lastBaseUpdate;h!==s&&(null===h?d.firstBaseUpdate=c:h.next=c,d.lastBaseUpdate=u)}}if(null!==a){for(h=i.baseState,s=0,d=c=u=null;;){l=a.lane;var f=a.eventTime;if((r&l)===l){null!==d&&(d=d.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,m=a;switch(l=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,l);break e}h=p;break e;case 3:p.flags=-4097&p.flags|64;case 0:if(null==(l="function"==typeof(p=m.payload)?p.call(f,h,l):p))break e;h=o({},h,l);break e;case 2:so=!0}}null!==a.callback&&(e.flags|=32,null===(l=i.effects)?i.effects=[a]:l.push(a))}else f={eventTime:f,lane:l,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===d?(c=d=f,u=h):d=d.next=f,s|=l;if(null===(a=a.next)){if(null===(l=i.shared.pending))break;a=l.next,l.next=null,i.lastBaseUpdate=l,i.shared.pending=null}}null===d&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,Bs|=s,e.lanes=s,e.memoizedState=h}}function mo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(s(191,i));i.call(r)}}}var go=(new i.Component).refs;function yo(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:o({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var vo={isMounted:function(e){return!!(e=e._reactInternals)&&Xe(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fl(),i=pl(e),o=co(r,i);o.payload=t,null!=n&&(o.callback=n),ho(e,o),ml(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fl(),i=pl(e),o=co(r,i);o.tag=1,o.payload=t,null!=n&&(o.callback=n),ho(e,o),ml(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fl(),r=pl(e),i=co(n,r);i.tag=2,null!=t&&(i.callback=t),ho(e,i),ml(e,r,n)}};function bo(e,t,n,r,i,o,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!hr(n,r)||!hr(i,o))}function wo(e,t,n){var r=!1,i=hi,o=t.contextType;return"object"==typeof o&&null!==o?o=ao(o):(i=yi(t)?mi:fi.current,o=(r=null!=(r=t.contextTypes))?gi(e,i):hi),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=vo,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Eo(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vo.enqueueReplaceState(t,t.state,null)}function So(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=go,lo(e);var o=t.contextType;"object"==typeof o&&null!==o?i.context=ao(o):(o=yi(t)?mi:fi.current,i.context=gi(e,o)),po(e,n,i,r),i.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(yo(e,t,o,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&vo.enqueueReplaceState(i,i.state,null),po(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4)}var ko=Array.isArray;function _o(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=r.refs;t===go&&(t=r.refs={}),null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!=typeof e)throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function Io(e,t){if("textarea"!==e.type)throw Error(s(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function To(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.flags=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=ql(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags=2,n):r:(t.flags=2,n):n}function a(t){return e&&null===t.alternate&&(t.flags=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Jl(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){return null!==t&&t.elementType===n.type?((r=i(t,n.props)).ref=_o(e,t,n),r.return=e,r):((r=Kl(n.type,n.key,n.props,null,e.mode,r)).ref=_o(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Yl(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Gl(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=Jl(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case k:return(n=Kl(t.type,t.key,t.props,null,e.mode,n)).ref=_o(e,null,t),n.return=e,n;case _:return(t=Yl(t,e.mode,n)).return=e,t}if(ko(t)||$(t))return(t=Gl(t,e.mode,n,null)).return=e,t;Io(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==i?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case k:return n.key===i?n.type===I?d(e,t,n.props.children,r,i):u(e,t,n,r):null;case _:return n.key===i?c(e,t,n,r):null}if(ko(n)||$(n))return null!==i?null:d(e,t,n,r,null);Io(e,n)}return null}function p(e,t,n,r,i){if("string"==typeof r||"number"==typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case k:return e=e.get(null===r.key?n:r.key)||null,r.type===I?d(t,e,r.props.children,i,r.key):u(t,e,r,i);case _:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i)}if(ko(r)||$(r))return d(t,e=e.get(n)||null,r,i,null);Io(t,r)}return null}function m(i,a,s,l){for(var u=null,c=null,d=a,m=a=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var y=f(i,d,s[m],l);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(i,d),a=o(y,a,m),null===c?u=y:c.sibling=y,c=y,d=g}if(m===s.length)return n(i,d),u;if(null===d){for(;m<s.length;m++)null!==(d=h(i,s[m],l))&&(a=o(d,a,m),null===c?u=d:c.sibling=d,c=d);return u}for(d=r(i,d);m<s.length;m++)null!==(g=p(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=o(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(i,e)})),u}function g(i,a,l,u){var c=$(l);if("function"!=typeof c)throw Error(s(150));if(null==(l=c.call(l)))throw Error(s(151));for(var d=c=null,m=a,g=a=0,y=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(y=m,m=null):y=m.sibling;var b=f(i,m,v.value,u);if(null===b){null===m&&(m=y);break}e&&m&&null===b.alternate&&t(i,m),a=o(b,a,g),null===d?c=b:d.sibling=b,d=b,m=y}if(v.done)return n(i,m),c;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=h(i,v.value,u))&&(a=o(v,a,g),null===d?c=v:d.sibling=v,d=v);return c}for(m=r(i,m);!v.done;g++,v=l.next())null!==(v=p(m,i,g,v.value,u))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),a=o(v,a,g),null===d?c=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(i,e)})),c}return function(e,r,o,l){var u="object"==typeof o&&null!==o&&o.type===I&&null===o.key;u&&(o=o.props.children);var c="object"==typeof o&&null!==o;if(c)switch(o.$$typeof){case k:e:{for(c=o.key,u=r;null!==u;){if(u.key===c){if(7===u.tag){if(o.type===I){n(e,u.sibling),(r=i(u,o.props.children)).return=e,e=r;break e}}else if(u.elementType===o.type){n(e,u.sibling),(r=i(u,o.props)).ref=_o(e,u,o),r.return=e,e=r;break e}n(e,u);break}t(e,u),u=u.sibling}o.type===I?((r=Gl(o.props.children,e.mode,l,o.key)).return=e,e=r):((l=Kl(o.type,o.key,o.props,null,e.mode,l)).ref=_o(e,r,o),l.return=e,e=l)}return a(e);case _:e:{for(u=o.key;null!==r;){if(r.key===u){if(4===r.tag&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),(r=i(r,o.children||[])).return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}(r=Yl(o,e.mode,l)).return=e,e=r}return a(e)}if("string"==typeof o||"number"==typeof o)return o=""+o,null!==r&&6===r.tag?(n(e,r.sibling),(r=i(r,o)).return=e,e=r):(n(e,r),(r=Jl(o,e.mode,l)).return=e,e=r),a(e);if(ko(o))return m(e,r,o,l);if($(o))return g(e,r,o,l);if(c&&Io(e,o),void 0===o&&!u)switch(e.tag){case 1:case 22:case 0:case 11:case 15:throw Error(s(152,K(e.type)||"Component"))}return n(e,r)}}var xo=To(!0),Co=To(!1),Oo={},Ro=ui(Oo),Ao=ui(Oo),Po=ui(Oo);function No(e){if(e===Oo)throw Error(s(174));return e}function Mo(e,t){switch(di(Po,t),di(Ao,e),di(Ro,Oo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pe(null,"");break;default:t=pe(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}ci(Ro),di(Ro,t)}function Lo(){ci(Ro),ci(Ao),ci(Po)}function Do(e){No(Po.current);var t=No(Ro.current),n=pe(t,e.type);t!==n&&(di(Ao,e),di(Ro,n))}function jo(e){Ao.current===e&&(ci(Ro),ci(Ao))}var Fo=ui(0);function Uo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(64&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zo=null,zo=null,Bo=!1;function $o(e,t){var n=Wl(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Vo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);default:return!1}}function Wo(e){if(Bo){var t=zo;if(t){var n=t;if(!Vo(e,t)){if(!(t=Kr(n.nextSibling))||!Vo(e,t))return e.flags=-1025&e.flags|2,Bo=!1,void(Zo=e);$o(Zo,n)}Zo=e,zo=Kr(t.firstChild)}else e.flags=-1025&e.flags|2,Bo=!1,Zo=e}}function Ho(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;Zo=e}function qo(e){if(e!==Zo)return!1;if(!Bo)return Ho(e),Bo=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!Vr(t,e.memoizedProps))for(t=zo;t;)$o(e,t),t=Kr(t.nextSibling);if(Ho(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){zo=Kr(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}zo=null}}else zo=Zo?Kr(e.stateNode.nextSibling):null;return!0}function Ko(){zo=Zo=null,Bo=!1}var Go=[];function Xo(){for(var e=0;e<Go.length;e++)Go[e]._workInProgressVersionPrimary=null;Go.length=0}var Jo=S.ReactCurrentDispatcher,Yo=S.ReactCurrentBatchConfig,Qo=0,ea=null,ta=null,na=null,ra=!1,ia=!1;function oa(){throw Error(s(321))}function aa(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!cr(e[n],t[n]))return!1;return!0}function sa(e,t,n,r,i,o){if(Qo=o,ea=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jo.current=null===e||null===e.memoizedState?Na:Ma,e=n(r,i),ia){o=0;do{if(ia=!1,!(25>o))throw Error(s(301));o+=1,na=ta=null,t.updateQueue=null,Jo.current=La,e=n(r,i)}while(ia)}if(Jo.current=Pa,t=null!==ta&&null!==ta.next,Qo=0,na=ta=ea=null,ra=!1,t)throw Error(s(300));return e}function la(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===na?ea.memoizedState=na=e:na=na.next=e,na}function ua(){if(null===ta){var e=ea.alternate;e=null!==e?e.memoizedState:null}else e=ta.next;var t=null===na?ea.memoizedState:na.next;if(null!==t)na=t,ta=e;else{if(null===e)throw Error(s(310));e={memoizedState:(ta=e).memoizedState,baseState:ta.baseState,baseQueue:ta.baseQueue,queue:ta.queue,next:null},null===na?ea.memoizedState=na=e:na=na.next=e}return na}function ca(e,t){return"function"==typeof t?t(e):t}function da(e){var t=ua(),n=t.queue;if(null===n)throw Error(s(311));n.lastRenderedReducer=e;var r=ta,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(null!==i){i=i.next,r=r.baseState;var l=a=o=null,u=i;do{var c=u.lane;if((Qo&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),r=u.eagerReducer===e?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};null===l?(a=l=d,o=r):l=l.next=d,ea.lanes|=c,Bs|=c}u=u.next}while(null!==u&&u!==i);null===l?o=r:l.next=a,cr(r,t.memoizedState)||(ja=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function ha(e){var t=ua(),n=t.queue;if(null===n)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do{o=e(o,a.action),a=a.next}while(a!==i);cr(o,t.memoizedState)||(ja=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fa(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(null!==i?e=i===r:(e=e.mutableReadLanes,(e=(Qo&e)===e)&&(t._workInProgressVersionPrimary=r,Go.push(t))),e)return n(t._source);throw Go.push(t),Error(s(350))}function pa(e,t,n,r){var i=Ms;if(null===i)throw Error(s(349));var o=t._getVersion,a=o(t._source),l=Jo.current,u=l.useState((function(){return fa(i,t,n)})),c=u[1],d=u[0];u=na;var h=e.memoizedState,f=h.refs,p=f.getSnapshot,m=h.source;h=h.subscribe;var g=ea;return e.memoizedState={refs:f,source:t,subscribe:r},l.useEffect((function(){f.getSnapshot=n,f.setSnapshot=c;var e=o(t._source);if(!cr(a,e)){e=n(t._source),cr(d,e)||(c(e),e=pl(g),i.mutableReadLanes|=e&i.pendingLanes),e=i.mutableReadLanes,i.entangledLanes|=e;for(var r=i.entanglements,s=e;0<s;){var l=31-Vt(s),u=1<<l;r[l]|=e,s&=~u}}}),[n,t,r]),l.useEffect((function(){return r(t._source,(function(){var e=f.getSnapshot,n=f.setSnapshot;try{n(e(t._source));var r=pl(g);i.mutableReadLanes|=r&i.pendingLanes}catch(e){n((function(){throw e}))}}))}),[t,r]),cr(p,n)&&cr(m,t)&&cr(h,r)||((e={pending:null,dispatch:null,lastRenderedReducer:ca,lastRenderedState:d}).dispatch=c=Aa.bind(null,ea,e),u.queue=e,u.baseQueue=null,d=fa(i,t,n),u.memoizedState=u.baseState=d),d}function ma(e,t,n){return pa(ua(),e,t,n)}function ga(e){var t=la();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e}).dispatch=Aa.bind(null,ea,e),[t.memoizedState,e]}function ya(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=ea.updateQueue)?(t={lastEffect:null},ea.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function va(e){return e={current:e},la().memoizedState=e}function ba(){return ua().memoizedState}function wa(e,t,n,r){var i=la();ea.flags|=e,i.memoizedState=ya(1|t,n,void 0,void 0===r?null:r)}function Ea(e,t,n,r){var i=ua();r=void 0===r?null:r;var o=void 0;if(null!==ta){var a=ta.memoizedState;if(o=a.destroy,null!==r&&aa(r,a.deps))return void ya(t,n,o,r)}ea.flags|=e,i.memoizedState=ya(1|t,n,o,r)}function Sa(e,t){return wa(516,4,e,t)}function ka(e,t){return Ea(516,4,e,t)}function _a(e,t){return Ea(4,2,e,t)}function Ia(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ta(e,t,n){return n=null!=n?n.concat([e]):null,Ea(4,2,Ia.bind(null,t,e),n)}function xa(){}function Ca(e,t){var n=ua();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&aa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Oa(e,t){var n=ua();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&aa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ra(e,t){var n=Vi();Hi(98>n?98:n,(function(){e(!0)})),Hi(97<n?97:n,(function(){var n=Yo.transition;Yo.transition=1;try{e(!1),t()}finally{Yo.transition=n}}))}function Aa(e,t,n){var r=fl(),i=pl(e),o={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},a=t.pending;if(null===a?o.next=o:(o.next=a.next,a.next=o),t.pending=o,a=e.alternate,e===ea||null!==a&&a===ea)ia=ra=!0;else{if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var s=t.lastRenderedState,l=a(s,n);if(o.eagerReducer=a,o.eagerState=l,cr(l,s))return}catch(e){}ml(e,i,r)}}var Pa={readContext:ao,useCallback:oa,useContext:oa,useEffect:oa,useImperativeHandle:oa,useLayoutEffect:oa,useMemo:oa,useReducer:oa,useRef:oa,useState:oa,useDebugValue:oa,useDeferredValue:oa,useTransition:oa,useMutableSource:oa,useOpaqueIdentifier:oa,unstable_isNewReconciler:!1},Na={readContext:ao,useCallback:function(e,t){return la().memoizedState=[e,void 0===t?null:t],e},useContext:ao,useEffect:Sa,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,wa(4,2,Ia.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wa(4,2,e,t)},useMemo:function(e,t){var n=la();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=la();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=Aa.bind(null,ea,e),[r.memoizedState,e]},useRef:va,useState:ga,useDebugValue:xa,useDeferredValue:function(e){var t=ga(e),n=t[0],r=t[1];return Sa((function(){var t=Yo.transition;Yo.transition=1;try{r(e)}finally{Yo.transition=t}}),[e]),n},useTransition:function(){var e=ga(!1),t=e[0];return va(e=Ra.bind(null,e[1])),[e,t]},useMutableSource:function(e,t,n){var r=la();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},pa(r,e,t,n)},useOpaqueIdentifier:function(){if(Bo){var e=!1,t=function(e){return{$$typeof:D,toString:e,valueOf:e}}((function(){throw e||(e=!0,n("r:"+(Xr++).toString(36))),Error(s(355))})),n=ga(t)[1];return 0==(2&ea.mode)&&(ea.flags|=516,ya(5,(function(){n("r:"+(Xr++).toString(36))}),void 0,null)),t}return ga(t="r:"+(Xr++).toString(36)),t},unstable_isNewReconciler:!1},Ma={readContext:ao,useCallback:Ca,useContext:ao,useEffect:ka,useImperativeHandle:Ta,useLayoutEffect:_a,useMemo:Oa,useReducer:da,useRef:ba,useState:function(){return da(ca)},useDebugValue:xa,useDeferredValue:function(e){var t=da(ca),n=t[0],r=t[1];return ka((function(){var t=Yo.transition;Yo.transition=1;try{r(e)}finally{Yo.transition=t}}),[e]),n},useTransition:function(){var e=da(ca)[0];return[ba().current,e]},useMutableSource:ma,useOpaqueIdentifier:function(){return da(ca)[0]},unstable_isNewReconciler:!1},La={readContext:ao,useCallback:Ca,useContext:ao,useEffect:ka,useImperativeHandle:Ta,useLayoutEffect:_a,useMemo:Oa,useReducer:ha,useRef:ba,useState:function(){return ha(ca)},useDebugValue:xa,useDeferredValue:function(e){var t=ha(ca),n=t[0],r=t[1];return ka((function(){var t=Yo.transition;Yo.transition=1;try{r(e)}finally{Yo.transition=t}}),[e]),n},useTransition:function(){var e=ha(ca)[0];return[ba().current,e]},useMutableSource:ma,useOpaqueIdentifier:function(){return ha(ca)[0]},unstable_isNewReconciler:!1},Da=S.ReactCurrentOwner,ja=!1;function Fa(e,t,n,r){t.child=null===e?Co(t,null,n,r):xo(t,e.child,n,r)}function Ua(e,t,n,r,i){n=n.render;var o=t.ref;return oo(t,i),r=sa(e,t,n,r,o,i),null===e||ja?(t.flags|=1,Fa(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,as(e,t,i))}function Za(e,t,n,r,i,o){if(null===e){var a=n.type;return"function"!=typeof a||Hl(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Kl(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,za(e,t,a,r,i,o))}return a=e.child,0==(i&o)&&(i=a.memoizedProps,(n=null!==(n=n.compare)?n:hr)(i,r)&&e.ref===t.ref)?as(e,t,o):(t.flags|=1,(e=ql(a,r)).ref=t.ref,e.return=t,t.child=e)}function za(e,t,n,r,i,o){if(null!==e&&hr(e.memoizedProps,r)&&e.ref===t.ref){if(ja=!1,0==(o&i))return t.lanes=e.lanes,as(e,t,o);0!=(16384&e.flags)&&(ja=!0)}return Va(e,t,n,r,o)}function Ba(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode||"unstable-defer-without-hiding"===r.mode)if(0==(4&t.mode))t.memoizedState={baseLanes:0},kl(t,n);else{if(0==(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},kl(t,e),null;t.memoizedState={baseLanes:0},kl(t,null!==o?o.baseLanes:n)}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,kl(t,r);return Fa(e,t,i,n),t.child}function $a(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=128)}function Va(e,t,n,r,i){var o=yi(n)?mi:fi.current;return o=gi(t,o),oo(t,i),n=sa(e,t,n,r,o,i),null===e||ja?(t.flags|=1,Fa(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,as(e,t,i))}function Wa(e,t,n,r,i){if(yi(n)){var o=!0;Ei(t)}else o=!1;if(oo(t,i),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),wo(t,n,r),So(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;"object"==typeof u&&null!==u?u=ao(u):u=gi(t,u=yi(n)?mi:fi.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;d||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==r||l!==u)&&Eo(t,a,r,u),so=!1;var h=t.memoizedState;a.state=h,po(t,r,a,i),l=t.memoizedState,s!==r||h!==l||pi.current||so?("function"==typeof c&&(yo(t,n,c,r),l=t.memoizedState),(s=so||bo(t,n,s,r,h,l,u))?(d||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4)):("function"==typeof a.componentDidMount&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):("function"==typeof a.componentDidMount&&(t.flags|=4),r=!1)}else{a=t.stateNode,uo(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ji(t.type,s),a.props=u,d=t.pendingProps,h=a.context,"object"==typeof(l=n.contextType)&&null!==l?l=ao(l):l=gi(t,l=yi(n)?mi:fi.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==d||h!==l)&&Eo(t,a,r,l),so=!1,h=t.memoizedState,a.state=h,po(t,r,a,i);var p=t.memoizedState;s!==d||h!==p||pi.current||so?("function"==typeof f&&(yo(t,n,f,r),p=t.memoizedState),(u=so||bo(t,n,u,r,h,p,l))?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=256)):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=u):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),r=!1)}return Ha(e,t,n,r,o,i)}function Ha(e,t,n,r,i,o){$a(e,t);var a=0!=(64&t.flags);if(!r&&!a)return i&&Si(t,n,!1),as(e,t,o);r=t.stateNode,Da.current=t;var s=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=xo(t,e.child,null,o),t.child=xo(t,null,s,o)):Fa(e,t,s,o),t.memoizedState=r.state,i&&Si(t,n,!0),t.child}function qa(e){var t=e.stateNode;t.pendingContext?bi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&bi(0,t.context,!1),Mo(e,t.containerInfo)}var Ka,Ga,Xa,Ja,Ya={dehydrated:null,retryLane:0};function Qa(e,t,n){var r,i=t.pendingProps,o=Fo.current,a=!1;return(r=0!=(64&t.flags))||(r=(null===e||null!==e.memoizedState)&&0!=(2&o)),r?(a=!0,t.flags&=-65):null!==e&&null===e.memoizedState||void 0===i.fallback||!0===i.unstable_avoidThisFallback||(o|=1),di(Fo,1&o),null===e?(void 0!==i.fallback&&Wo(t),e=i.children,o=i.fallback,a?(e=es(t,e,o,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Ya,e):"number"==typeof i.unstable_expectedLoadTime?(e=es(t,e,o,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Ya,t.lanes=33554432,e):((n=Xl({mode:"visible",children:e},t.mode,n,null)).return=t,t.child=n)):(e.memoizedState,a?(i=ns(e,t,i.children,i.fallback,n),a=t.child,o=e.child.memoizedState,a.memoizedState=null===o?{baseLanes:n}:{baseLanes:o.baseLanes|n},a.childLanes=e.childLanes&~n,t.memoizedState=Ya,i):(n=ts(e,t,i.children,n),t.memoizedState=null,n))}function es(e,t,n,r){var i=e.mode,o=e.child;return t={mode:"hidden",children:t},0==(2&i)&&null!==o?(o.childLanes=0,o.pendingProps=t):o=Xl(t,i,0,null),n=Gl(n,i,r,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n}function ts(e,t,n,r){var i=e.child;return e=i.sibling,n=ql(i,{mode:"visible",children:n}),0==(2&t.mode)&&(n.lanes=r),n.return=t,n.sibling=null,null!==e&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function ns(e,t,n,r,i){var o=t.mode,a=e.child;e=a.sibling;var s={mode:"hidden",children:n};return 0==(2&o)&&t.child!==a?((n=t.child).childLanes=0,n.pendingProps=s,null!==(a=n.lastEffect)?(t.firstEffect=n.firstEffect,t.lastEffect=a,a.nextEffect=null):t.firstEffect=t.lastEffect=null):n=ql(a,s),null!==e?r=ql(e,r):(r=Gl(r,o,i,null)).flags|=2,r.return=t,n.return=t,n.sibling=r,t.child=n,r}function rs(e,t){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),io(e.return,t)}function is(e,t,n,r,i,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i,a.lastEffect=o)}function os(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Fa(e,t,r.children,n),0!=(2&(r=Fo.current)))r=1&r|2,t.flags|=64;else{if(null!==e&&0!=(64&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&rs(e,n);else if(19===e.tag)rs(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(di(Fo,r),0==(2&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Uo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),is(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Uo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}is(t,!0,n,null,o,t.lastEffect);break;case"together":is(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function as(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Bs|=t.lanes,0!=(n&t.childLanes)){if(null!==e&&t.child!==e.child)throw Error(s(153));if(null!==t.child){for(n=ql(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=ql(e,e.pendingProps)).return=t;n.sibling=null}return t.child}return null}function ss(e,t){if(!Bo)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ls(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:case 17:return yi(t.type)&&vi(),null;case 3:return Lo(),ci(pi),ci(fi),Xo(),(r=t.stateNode).pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(qo(t)?t.flags|=4:r.hydrate||(t.flags|=256)),Ga(t),null;case 5:jo(t);var i=No(Po.current);if(n=t.type,null!==e&&null!=t.stateNode)Xa(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(null===t.stateNode)throw Error(s(166));return null}if(e=No(Ro.current),qo(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Yr]=t,r[Qr]=a,n){case"dialog":Rr("cancel",r),Rr("close",r);break;case"iframe":case"object":case"embed":Rr("load",r);break;case"video":case"audio":for(e=0;e<Tr.length;e++)Rr(Tr[e],r);break;case"source":Rr("error",r);break;case"img":case"image":case"link":Rr("error",r),Rr("load",r);break;case"details":Rr("toggle",r);break;case"input":te(r,a),Rr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Rr("invalid",r);break;case"textarea":ue(r,a),Rr("invalid",r)}for(var l in _e(n,a),e=null,a)a.hasOwnProperty(l)&&(i=a[l],"children"===l?"string"==typeof i?r.textContent!==i&&(e=["children",i]):"number"==typeof i&&r.textContent!==""+i&&(e=["children",""+i]):u.hasOwnProperty(l)&&null!=i&&"onScroll"===l&&Rr("scroll",r));switch(n){case"input":J(r),ie(r,a,!0);break;case"textarea":J(r),de(r);break;case"select":case"option":break;default:"function"==typeof a.onClick&&(r.onclick=Zr)}r=e,t.updateQueue=r,null!==r&&(t.flags|=4)}else{switch(l=9===i.nodeType?i:i.ownerDocument,e===he.html&&(e=fe(n)),e===he.html?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Yr]=t,e[Qr]=r,Ka(e,t,!1,!1),t.stateNode=e,l=Ie(n,r),n){case"dialog":Rr("cancel",e),Rr("close",e),i=r;break;case"iframe":case"object":case"embed":Rr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tr.length;i++)Rr(Tr[i],e);i=r;break;case"source":Rr("error",e),i=r;break;case"img":case"image":case"link":Rr("error",e),Rr("load",e),i=r;break;case"details":Rr("toggle",e),i=r;break;case"input":te(e,r),i=ee(e,r),Rr("invalid",e);break;case"option":i=ae(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=o({},r,{value:void 0}),Rr("invalid",e);break;case"textarea":ue(e,r),i=le(e,r),Rr("invalid",e);break;default:i=r}_e(n,i);var c=i;for(a in c)if(c.hasOwnProperty(a)){var d=c[a];"style"===a?Se(e,d):"dangerouslySetInnerHTML"===a?null!=(d=d?d.__html:void 0)&&ye(e,d):"children"===a?"string"==typeof d?("textarea"!==n||""!==d)&&ve(e,d):"number"==typeof d&&ve(e,""+d):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(u.hasOwnProperty(a)?null!=d&&"onScroll"===a&&Rr("scroll",e):null!=d&&E(e,a,d,l))}switch(n){case"input":J(e),ie(e,r,!1);break;case"textarea":J(e),de(e);break;case"option":null!=r.value&&e.setAttribute("value",""+G(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?se(e,!!r.multiple,a,!1):null!=r.defaultValue&&se(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Zr)}$r(n,r)&&(t.flags|=4)}null!==t.ref&&(t.flags|=128)}return null;case 6:if(e&&null!=t.stateNode)Ja(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(s(166));n=No(Po.current),No(Ro.current),qo(t)?(r=t.stateNode,n=t.memoizedProps,r[Yr]=t,r.nodeValue!==n&&(t.flags|=4)):((r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Yr]=t,t.stateNode=r)}return null;case 13:return ci(Fo),r=t.memoizedState,0!=(64&t.flags)?(t.lanes=n,t):(r=null!==r,n=!1,null===e?void 0!==t.memoizedProps.fallback&&qo(t):n=null!==e.memoizedState,r&&!n&&0!=(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!=(1&Fo.current)?0===Us&&(Us=3):(0!==Us&&3!==Us||(Us=4),null===Ms||0==(134217727&Bs)&&0==(134217727&$s)||bl(Ms,Ds))),(r||n)&&(t.flags|=4),null);case 4:return Lo(),Ga(t),null===e&&Pr(t.stateNode.containerInfo),null;case 10:return ro(t),null;case 19:if(ci(Fo),null===(r=t.memoizedState))return null;if(a=0!=(64&t.flags),null===(l=r.rendering))if(a)ss(r,!1);else{if(0!==Us||null!==e&&0!=(64&e.flags))for(e=t.child;null!==e;){if(null!==(l=Uo(e))){for(t.flags|=64,ss(r,!1),null!==(a=l.updateQueue)&&(t.updateQueue=a,t.flags|=4),null===r.lastEffect&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=2,a.nextEffect=null,a.firstEffect=null,a.lastEffect=null,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return di(Fo,1&Fo.current|2),t.child}e=e.sibling}null!==r.tail&&$i()>qs&&(t.flags|=64,a=!0,ss(r,!1),t.lanes=33554432)}else{if(!a)if(null!==(e=Uo(l))){if(t.flags|=64,a=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),ss(r,!0),null===r.tail&&"hidden"===r.tailMode&&!l.alternate&&!Bo)return null!==(t=t.lastEffect=r.lastEffect)&&(t.nextEffect=null),null}else 2*$i()-r.renderingStartTime>qs&&1073741824!==n&&(t.flags|=64,a=!0,ss(r,!1),t.lanes=33554432);r.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=r.last)?n.sibling=l:t.child=l,r.last=l)}return null!==r.tail?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=$i(),n.sibling=null,t=Fo.current,di(Fo,a?1&t|2:1&t),n):null;case 23:case 24:return _l(),null!==e&&null!==e.memoizedState!=(null!==t.memoizedState)&&"unstable-defer-without-hiding"!==r.mode&&(t.flags|=4),null}throw Error(s(156,t.tag))}function us(e){switch(e.tag){case 1:yi(e.type)&&vi();var t=e.flags;return 4096&t?(e.flags=-4097&t|64,e):null;case 3:if(Lo(),ci(pi),ci(fi),Xo(),0!=(64&(t=e.flags)))throw Error(s(285));return e.flags=-4097&t|64,e;case 5:return jo(e),null;case 13:return ci(Fo),4096&(t=e.flags)?(e.flags=-4097&t|64,e):null;case 19:return ci(Fo),null;case 4:return Lo(),null;case 10:return ro(e),null;case 23:case 24:return _l(),null;default:return null}}function cs(e,t){try{var n="",r=t;do{n+=q(r),r=r.return}while(r);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i}}function ds(e,t){try{r.error(t.value)}catch(e){setTimeout((function(){throw e}))}}Ka=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ga=function(){},Xa=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,No(Ro.current);var a,s=null;switch(n){case"input":i=ee(e,i),r=ee(e,r),s=[];break;case"option":i=ae(e,i),r=ae(e,r),s=[];break;case"select":i=o({},i,{value:void 0}),r=o({},r,{value:void 0}),s=[];break;case"textarea":i=le(e,i),r=le(e,r),s=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=Zr)}for(d in _e(n,r),n=null,i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&null!=i[d])if("style"===d){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==d&&"children"!==d&&"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(u.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var c=r[d];if(l=null!=i?i[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(null!=c||null!=l))if("style"===d)if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(d,n)),n=c;else"dangerouslySetInnerHTML"===d?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(s=s||[]).push(d,c)):"children"===d?"string"!=typeof c&&"number"!=typeof c||(s=s||[]).push(d,""+c):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&(u.hasOwnProperty(d)?(null!=c&&"onScroll"===d&&Rr("scroll",e),s||l===c||(s=[])):"object"==typeof c&&null!==c&&c.$$typeof===D?c.toString():(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}},Ja=function(e,t,n,r){n!==r&&(t.flags|=4)};var hs="function"==typeof WeakMap?WeakMap:Map;function fs(e,t,n){(n=co(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Js||(Js=!0,Ys=r),ds(0,t)},n}function ps(e,t,n){(n=co(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return ds(0,t),r(i)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Qs?Qs=new Set([this]):Qs.add(this),ds(0,t));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}var ms="function"==typeof WeakSet?WeakSet:Set;function gs(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){zl(e,t)}else t.current=null}function ys(e,t){switch(t.tag){case 0:case 11:case 15:case 22:case 5:case 6:case 4:case 17:return;case 1:if(256&t.flags&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:Ji(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:return void(256&t.flags&&qr(t.stateNode.containerInfo))}throw Error(s(163))}function vs(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{if(3==(3&e.tag)){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{var i=e;r=i.next,0!=(4&(i=i.tag))&&0!=(1&i)&&(Fl(n,e),jl(n,e)),e=r}while(e!==t)}return;case 1:return e=n.stateNode,4&n.flags&&(null===t?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:Ji(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),void(null!==(t=n.updateQueue)&&mo(n,t,e));case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:case 1:e=n.child.stateNode}mo(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.flags&&$r(n.type,n.memoizedProps)&&e.focus());case 6:case 4:case 12:case 19:case 17:case 20:case 21:case 23:case 24:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&St(n)))))}throw Error(s(163))}function bs(e,t){for(var n=e;;){if(5===n.tag){var r=n.stateNode;if(t)"function"==typeof(r=r.style).setProperty?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=null!=i&&i.hasOwnProperty("display")?i.display:null,r.style.display=Ee("display",i)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((23!==n.tag&&24!==n.tag||null===n.memoizedState||n===e)&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function ws(e,t){if(_i&&"function"==typeof _i.onCommitFiberUnmount)try{_i.onCommitFiberUnmount(ki,t)}catch(e){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,void 0!==i)if(0!=(4&r))Fl(t,n);else{r=t;try{i()}catch(e){zl(r,e)}}n=n.next}while(n!==e)}break;case 1:if(gs(t),"function"==typeof(e=t.stateNode).componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){zl(t,e)}break;case 5:gs(t);break;case 4:Ts(e,t)}}function Es(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Ss(e){return 5===e.tag||3===e.tag||4===e.tag}function ks(e){e:{for(var t=e.return;null!==t;){if(Ss(t))break e;t=t.return}throw Error(s(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error(s(161))}16&n.flags&&(ve(t,""),n.flags&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||Ss(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.flags)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.flags)){n=n.stateNode;break e}}r?_s(e,n,t):Is(e,n,t)}function _s(e,t,n){var r=e.tag,i=5===r||6===r;if(i)e=i?e.stateNode:e.stateNode.instance,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(_s(e,t,n),e=e.sibling;null!==e;)_s(e,t,n),e=e.sibling}function Is(e,t,n){var r=e.tag,i=5===r||6===r;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(Is(e,t,n),e=e.sibling;null!==e;)Is(e,t,n),e=e.sibling}function Ts(e,t){for(var n,r,i=t,o=!1;;){if(!o){o=i.return;e:for(;;){if(null===o)throw Error(s(160));switch(n=o.stateNode,o.tag){case 5:r=!1;break e;case 3:case 4:n=n.containerInfo,r=!0;break e}o=o.return}o=!0}if(5===i.tag||6===i.tag){e:for(var a=e,l=i,u=l;;)if(ws(a,u),null!==u.child&&4!==u.tag)u.child.return=u,u=u.child;else{if(u===l)break e;for(;null===u.sibling;){if(null===u.return||u.return===l)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}r?(a=n,l=i.stateNode,8===a.nodeType?a.parentNode.removeChild(l):a.removeChild(l)):n.removeChild(i.stateNode)}else if(4===i.tag){if(null!==i.child){n=i.stateNode.containerInfo,r=!0,i.child.return=i,i=i.child;continue}}else if(ws(e,i),null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break;for(;null===i.sibling;){if(null===i.return||i.return===t)return;4===(i=i.return).tag&&(o=!1)}i.sibling.return=i.return,i=i.sibling}}function xs(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var r=n=n.next;do{3==(3&r.tag)&&(e=r.destroy,r.destroy=void 0,void 0!==e&&e()),r=r.next}while(r!==n)}return;case 1:case 12:case 17:return;case 5:if(null!=(n=t.stateNode)){r=t.memoizedProps;var i=null!==e?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,null!==o){for(n[Qr]=r,"input"===e&&"radio"===r.type&&null!=r.name&&ne(n,r),Ie(e,i),t=Ie(e,r),i=0;i<o.length;i+=2){var a=o[i],l=o[i+1];"style"===a?Se(n,l):"dangerouslySetInnerHTML"===a?ye(n,l):"children"===a?ve(n,l):E(n,a,l,t)}switch(e){case"input":re(n,r);break;case"textarea":ce(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(o=r.value)?se(n,!!r.multiple,o,!1):e!==!!r.multiple&&(null!=r.defaultValue?se(n,!!r.multiple,r.defaultValue,!0):se(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(s(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((n=t.stateNode).hydrate&&(n.hydrate=!1,St(n.containerInfo)));case 13:return null!==t.memoizedState&&(Hs=$i(),bs(t.child,!0)),void Cs(t);case 19:return void Cs(t);case 23:case 24:return void bs(t,null!==t.memoizedState)}throw Error(s(163))}function Cs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new ms),t.forEach((function(t){var r=$l.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function Os(e,t){return null!==e&&(null===(e=e.memoizedState)||null!==e.dehydrated)&&(null!==(t=t.memoizedState)&&null===t.dehydrated)}var Rs=Math.ceil,As=S.ReactCurrentDispatcher,Ps=S.ReactCurrentOwner,Ns=0,Ms=null,Ls=null,Ds=0,js=0,Fs=ui(0),Us=0,Zs=null,zs=0,Bs=0,$s=0,Vs=0,Ws=null,Hs=0,qs=1/0;function Ks(){qs=$i()+500}var Gs,Xs=null,Js=!1,Ys=null,Qs=null,el=!1,tl=null,nl=90,rl=[],il=[],ol=null,al=0,sl=null,ll=-1,ul=0,cl=0,dl=null,hl=!1;function fl(){return 0!=(48&Ns)?$i():-1!==ll?ll:ll=$i()}function pl(e){if(0==(2&(e=e.mode)))return 1;if(0==(4&e))return 99===Vi()?1:2;if(0===ul&&(ul=zs),0!==Xi.transition){0!==cl&&(cl=null!==Ws?Ws.pendingLanes:0),e=ul;var t=4186112&~cl;return 0===(t&=-t)&&(0===(t=(e=4186112&~e)&-e)&&(t=8192)),t}return e=Vi(),0!=(4&Ns)&&98===e?e=Zt(12,ul):e=Zt(e=function(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}(e),ul),e}function ml(e,t,n){if(50<al)throw al=0,sl=null,Error(s(185));if(null===(e=gl(e,t)))return null;$t(e,t,n),e===Ms&&($s|=t,4===Us&&bl(e,Ds));var r=Vi();1===t?0!=(8&Ns)&&0==(48&Ns)?wl(e):(yl(e,n),0===Ns&&(Ks(),Ki())):(0==(4&Ns)||98!==r&&99!==r||(null===ol?ol=new Set([e]):ol.add(e)),yl(e,n)),Ws=e}function gl(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}function yl(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-Vt(a),u=1<<l,c=o[l];if(-1===c){if(0==(u&r)||0!=(u&i)){c=t,jt(u);var d=Dt;o[l]=10<=d?c+250:6<=d?c+5e3:-1}}else c<=t&&(e.expiredLanes|=u);a&=~u}if(r=Ft(e,e===Ms?Ds:0),t=Dt,0===r)null!==n&&(n!==ji&&xi(n),e.callbackNode=null,e.callbackPriority=0);else{if(null!==n){if(e.callbackPriority===t)return;n!==ji&&xi(n)}15===t?(n=wl.bind(null,e),null===Ui?(Ui=[n],Zi=Ti(Pi,Gi)):Ui.push(n),n=ji):14===t?n=qi(99,wl.bind(null,e)):(n=function(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(s(358,e))}}(t),n=qi(n,vl.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function vl(e){if(ll=-1,cl=ul=0,0!=(48&Ns))throw Error(s(327));var t=e.callbackNode;if(Dl()&&e.callbackNode!==t)return null;var n=Ft(e,e===Ms?Ds:0);if(0===n)return null;var r=n,i=Ns;Ns|=16;var o=xl();for(Ms===e&&Ds===r||(Ks(),Il(e,r));;)try{Rl();break}catch(t){Tl(e,t)}if(no(),As.current=o,Ns=i,null!==Ls?r=0:(Ms=null,Ds=0,r=Us),0!=(zs&$s))Il(e,0);else if(0!==r){if(2===r&&(Ns|=64,e.hydrate&&(e.hydrate=!1,qr(e.containerInfo)),0!==(n=Ut(e))&&(r=Cl(e,n))),1===r)throw t=Zs,Il(e,0),bl(e,n),yl(e,$i()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(s(345));case 2:case 5:Nl(e);break;case 3:if(bl(e,n),(62914560&n)===n&&10<(r=Hs+500-$i())){if(0!==Ft(e,0))break;if(((i=e.suspendedLanes)&n)!==n){fl(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Wr(Nl.bind(null,e),r);break}Nl(e);break;case 4:if(bl(e,n),(4186112&n)===n)break;for(r=e.eventTimes,i=-1;0<n;){var a=31-Vt(n);o=1<<a,(a=r[a])>i&&(i=a),n&=~o}if(n=i,10<(n=(120>(n=$i()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Rs(n/1960))-n)){e.timeoutHandle=Wr(Nl.bind(null,e),n);break}Nl(e);break;default:throw Error(s(329))}}return yl(e,$i()),e.callbackNode===t?vl.bind(null,e):null}function bl(e,t){for(t&=~Vs,t&=~$s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Vt(t),r=1<<n;e[n]=-1,t&=~r}}function wl(e){if(0!=(48&Ns))throw Error(s(327));if(Dl(),e===Ms&&0!=(e.expiredLanes&Ds)){var t=Ds,n=Cl(e,t);0!=(zs&$s)&&(n=Cl(e,t=Ft(e,t)))}else n=Cl(e,t=Ft(e,0));if(0!==e.tag&&2===n&&(Ns|=64,e.hydrate&&(e.hydrate=!1,qr(e.containerInfo)),0!==(t=Ut(e))&&(n=Cl(e,t))),1===n)throw n=Zs,Il(e,0),bl(e,t),yl(e,$i()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nl(e),yl(e,$i()),null}function El(e,t){var n=Ns;Ns|=1;try{return e(t)}finally{0===(Ns=n)&&(Ks(),Ki())}}function Sl(e,t){var n=Ns;Ns&=-2,Ns|=8;try{return e(t)}finally{0===(Ns=n)&&(Ks(),Ki())}}function kl(e,t){di(Fs,js),js|=t,zs|=t}function _l(){js=Fs.current,ci(Fs)}function Il(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,Hr(n)),null!==Ls)for(n=Ls.return;null!==n;){var r=n;switch(r.tag){case 1:null!=(r=r.type.childContextTypes)&&vi();break;case 3:Lo(),ci(pi),ci(fi),Xo();break;case 5:jo(r);break;case 4:Lo();break;case 13:case 19:ci(Fo);break;case 10:ro(r);break;case 23:case 24:_l()}n=n.return}Ms=e,Ls=ql(e.current,null),Ds=js=zs=t,Us=0,Zs=null,Vs=$s=Bs=0}function Tl(e,t){for(;;){var n=Ls;try{if(no(),Jo.current=Pa,ra){for(var r=ea.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ra=!1}if(Qo=0,na=ta=ea=null,ia=!1,Ps.current=null,null===n||null===n.return){Us=1,Zs=t,Ls=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Ds,s.flags|=2048,s.firstEffect=s.lastEffect=null,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l;if(0==(2&s.mode)){var c=s.alternate;c?(s.updateQueue=c.updateQueue,s.memoizedState=c.memoizedState,s.lanes=c.lanes):(s.updateQueue=null,s.memoizedState=null)}var d=0!=(1&Fo.current),h=a;do{var f;if(f=13===h.tag){var p=h.memoizedState;if(null!==p)f=null!==p.dehydrated;else{var m=h.memoizedProps;f=void 0!==m.fallback&&(!0!==m.unstable_avoidThisFallback||!d)}}if(f){var g=h.updateQueue;if(null===g){var y=new Set;y.add(u),h.updateQueue=y}else g.add(u);if(0==(2&h.mode)){if(h.flags|=64,s.flags|=16384,s.flags&=-2981,1===s.tag)if(null===s.alternate)s.tag=17;else{var v=co(-1,1);v.tag=2,ho(s,v)}s.lanes|=1;break e}l=void 0,s=t;var b=o.pingCache;if(null===b?(b=o.pingCache=new hs,l=new Set,b.set(u,l)):void 0===(l=b.get(u))&&(l=new Set,b.set(u,l)),!l.has(s)){l.add(s);var w=Bl.bind(null,o,u,s);u.then(w,w)}h.flags|=4096,h.lanes=t;break e}h=h.return}while(null!==h);l=Error((K(s.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==Us&&(Us=2),l=cs(l,s),h=a;do{switch(h.tag){case 3:o=l,h.flags|=4096,t&=-t,h.lanes|=t,fo(h,fs(0,o,t));break e;case 1:o=l;var E=h.type,S=h.stateNode;if(0==(64&h.flags)&&("function"==typeof E.getDerivedStateFromError||null!==S&&"function"==typeof S.componentDidCatch&&(null===Qs||!Qs.has(S)))){h.flags|=4096,t&=-t,h.lanes|=t,fo(h,ps(h,o,t));break e}}h=h.return}while(null!==h)}Pl(n)}catch(e){t=e,Ls===n&&null!==n&&(Ls=n=n.return);continue}break}}function xl(){var e=As.current;return As.current=Pa,null===e?Pa:e}function Cl(e,t){var n=Ns;Ns|=16;var r=xl();for(Ms===e&&Ds===t||Il(e,t);;)try{Ol();break}catch(t){Tl(e,t)}if(no(),Ns=n,As.current=r,null!==Ls)throw Error(s(261));return Ms=null,Ds=0,Us}function Ol(){for(;null!==Ls;)Al(Ls)}function Rl(){for(;null!==Ls&&!Ci();)Al(Ls)}function Al(e){var t=Gs(e.alternate,e,js);e.memoizedProps=e.pendingProps,null===t?Pl(e):Ls=t,Ps.current=null}function Pl(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(2048&t.flags)){if(null!==(n=ls(n,t,js)))return void(Ls=n);if(24!==(n=t).tag&&23!==n.tag||null===n.memoizedState||0!=(1073741824&js)||0==(4&n.mode)){for(var r=0,i=n.child;null!==i;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}null!==e&&0==(2048&e.flags)&&(null===e.firstEffect&&(e.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(null!==e.lastEffect?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(null!==(n=us(t)))return n.flags&=2047,void(Ls=n);null!==e&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(null!==(t=t.sibling))return void(Ls=t);Ls=t=e}while(null!==t);0===Us&&(Us=5)}function Nl(e){var t=Vi();return Hi(99,Ml.bind(null,e,t)),null}function Ml(e,t){do{Dl()}while(null!==tl);if(0!=(48&Ns))throw Error(s(327));var n=e.finishedWork;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,o=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var a=e.eventTimes,l=e.expirationTimes;0<o;){var u=31-Vt(o),c=1<<u;i[u]=0,a[u]=-1,l[u]=-1,o&=~c}if(null!==ol&&0==(24&r)&&ol.has(e)&&ol.delete(e),e===Ms&&(Ls=Ms=null,Ds=0),1<n.flags?null!==n.lastEffect?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,null!==r){if(i=Ns,Ns|=32,Ps.current=null,zr=Gt,yr(a=gr())){if("selectionStart"in a)l={start:a.selectionStart,end:a.selectionEnd};else e:if(l=(l=a.ownerDocument)&&l.defaultView||window,(c=l.getSelection&&l.getSelection())&&0!==c.rangeCount){l=c.anchorNode,o=c.anchorOffset,u=c.focusNode,c=c.focusOffset;try{l.nodeType,u.nodeType}catch(e){l=null;break e}var d=0,h=-1,f=-1,p=0,m=0,g=a,y=null;t:for(;;){for(var v;g!==l||0!==o&&3!==g.nodeType||(h=d+o),g!==u||0!==c&&3!==g.nodeType||(f=d+c),3===g.nodeType&&(d+=g.nodeValue.length),null!==(v=g.firstChild);)y=g,g=v;for(;;){if(g===a)break t;if(y===l&&++p===o&&(h=d),y===u&&++m===c&&(f=d),null!==(v=g.nextSibling))break;y=(g=y).parentNode}g=v}l=-1===h||-1===f?null:{start:h,end:f}}else l=null;l=l||{start:0,end:0}}else l=null;Br={focusedElem:a,selectionRange:l},Gt=!1,dl=null,hl=!1,Xs=r;do{try{Ll()}catch(e){if(null===Xs)throw Error(s(330));zl(Xs,e),Xs=Xs.nextEffect}}while(null!==Xs);dl=null,Xs=r;do{try{for(a=e;null!==Xs;){var b=Xs.flags;if(16&b&&ve(Xs.stateNode,""),128&b){var w=Xs.alternate;if(null!==w){var E=w.ref;null!==E&&("function"==typeof E?E(null):E.current=null)}}switch(1038&b){case 2:ks(Xs),Xs.flags&=-3;break;case 6:ks(Xs),Xs.flags&=-3,xs(Xs.alternate,Xs);break;case 1024:Xs.flags&=-1025;break;case 1028:Xs.flags&=-1025,xs(Xs.alternate,Xs);break;case 4:xs(Xs.alternate,Xs);break;case 8:Ts(a,l=Xs);var S=l.alternate;Es(l),null!==S&&Es(S)}Xs=Xs.nextEffect}}catch(e){if(null===Xs)throw Error(s(330));zl(Xs,e),Xs=Xs.nextEffect}}while(null!==Xs);if(E=Br,w=gr(),b=E.focusedElem,a=E.selectionRange,w!==b&&b&&b.ownerDocument&&mr(b.ownerDocument.documentElement,b)){null!==a&&yr(b)&&(w=a.start,void 0===(E=a.end)&&(E=w),"selectionStart"in b?(b.selectionStart=w,b.selectionEnd=Math.min(E,b.value.length)):(E=(w=b.ownerDocument||document)&&w.defaultView||window).getSelection&&(E=E.getSelection(),l=b.textContent.length,S=Math.min(a.start,l),a=void 0===a.end?S:Math.min(a.end,l),!E.extend&&S>a&&(l=a,a=S,S=l),l=pr(b,S),o=pr(b,a),l&&o&&(1!==E.rangeCount||E.anchorNode!==l.node||E.anchorOffset!==l.offset||E.focusNode!==o.node||E.focusOffset!==o.offset)&&((w=w.createRange()).setStart(l.node,l.offset),E.removeAllRanges(),S>a?(E.addRange(w),E.extend(o.node,o.offset)):(w.setEnd(o.node,o.offset),E.addRange(w))))),w=[];for(E=b;E=E.parentNode;)1===E.nodeType&&w.push({element:E,left:E.scrollLeft,top:E.scrollTop});for("function"==typeof b.focus&&b.focus(),b=0;b<w.length;b++)(E=w[b]).element.scrollLeft=E.left,E.element.scrollTop=E.top}Gt=!!zr,Br=zr=null,e.current=n,Xs=r;do{try{for(b=e;null!==Xs;){var k=Xs.flags;if(36&k&&vs(b,Xs.alternate,Xs),128&k){w=void 0;var _=Xs.ref;if(null!==_){var I=Xs.stateNode;Xs.tag,w=I,"function"==typeof _?_(w):_.current=w}}Xs=Xs.nextEffect}}catch(e){if(null===Xs)throw Error(s(330));zl(Xs,e),Xs=Xs.nextEffect}}while(null!==Xs);Xs=null,Fi(),Ns=i}else e.current=n;if(el)el=!1,tl=e,nl=t;else for(Xs=r;null!==Xs;)t=Xs.nextEffect,Xs.nextEffect=null,8&Xs.flags&&((k=Xs).sibling=null,k.stateNode=null),Xs=t;if(0===(r=e.pendingLanes)&&(Qs=null),1===r?e===sl?al++:(al=0,sl=e):al=0,n=n.stateNode,_i&&"function"==typeof _i.onCommitFiberRoot)try{_i.onCommitFiberRoot(ki,n,void 0,64==(64&n.current.flags))}catch(e){}if(yl(e,$i()),Js)throw Js=!1,e=Ys,Ys=null,e;return 0!=(8&Ns)||Ki(),null}function Ll(){for(;null!==Xs;){var e=Xs.alternate;hl||null===dl||(0!=(8&Xs.flags)?et(Xs,dl)&&(hl=!0):13===Xs.tag&&Os(e,Xs)&&et(Xs,dl)&&(hl=!0));var t=Xs.flags;0!=(256&t)&&ys(e,Xs),0==(512&t)||el||(el=!0,qi(97,(function(){return Dl(),null}))),Xs=Xs.nextEffect}}function Dl(){if(90!==nl){var e=97<nl?97:nl;return nl=90,Hi(e,Ul)}return!1}function jl(e,t){rl.push(t,e),el||(el=!0,qi(97,(function(){return Dl(),null})))}function Fl(e,t){il.push(t,e),el||(el=!0,qi(97,(function(){return Dl(),null})))}function Ul(){if(null===tl)return!1;var e=tl;if(tl=null,0!=(48&Ns))throw Error(s(331));var t=Ns;Ns|=32;var n=il;il=[];for(var r=0;r<n.length;r+=2){var i=n[r],o=n[r+1],a=i.destroy;if(i.destroy=void 0,"function"==typeof a)try{a()}catch(e){if(null===o)throw Error(s(330));zl(o,e)}}for(n=rl,rl=[],r=0;r<n.length;r+=2){i=n[r],o=n[r+1];try{var l=i.create;i.destroy=l()}catch(e){if(null===o)throw Error(s(330));zl(o,e)}}for(l=e.current.firstEffect;null!==l;)e=l.nextEffect,l.nextEffect=null,8&l.flags&&(l.sibling=null,l.stateNode=null),l=e;return Ns=t,Ki(),!0}function Zl(e,t,n){ho(e,t=fs(0,t=cs(n,t),1)),t=fl(),null!==(e=gl(e,1))&&($t(e,1,t),yl(e,t))}function zl(e,t){if(3===e.tag)Zl(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){Zl(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Qs||!Qs.has(r))){var i=ps(n,e=cs(t,e),1);if(ho(n,i),i=fl(),null!==(n=gl(n,1)))$t(n,1,i),yl(n,i);else if("function"==typeof r.componentDidCatch&&(null===Qs||!Qs.has(r)))try{r.componentDidCatch(t,e)}catch(e){}break}}n=n.return}}function Bl(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=fl(),e.pingedLanes|=e.suspendedLanes&n,Ms===e&&(Ds&n)===n&&(4===Us||3===Us&&(62914560&Ds)===Ds&&500>$i()-Hs?Il(e,0):Vs|=n),yl(e,t)}function $l(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(0==(2&(t=e.mode))?t=1:0==(4&t)?t=99===Vi()?1:2:(0===ul&&(ul=zs),0===(t=zt(62914560&~ul))&&(t=4194304))),n=fl(),null!==(e=gl(e,t))&&($t(e,t,n),yl(e,n))}function Vl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Wl(e,t,n,r){return new Vl(e,t,n,r)}function Hl(e){return!(!(e=e.prototype)||!e.isReactComponent)}function ql(e,t){var n=e.alternate;return null===n?((n=Wl(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kl(e,t,n,r,i,o){var a=2;if(r=e,"function"==typeof e)Hl(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case I:return Gl(n.children,i,o,t);case j:a=8,i|=16;break;case T:a=8,i|=1;break;case x:return(e=Wl(12,n,t,8|i)).elementType=x,e.type=x,e.lanes=o,e;case A:return(e=Wl(13,n,t,i)).type=A,e.elementType=A,e.lanes=o,e;case P:return(e=Wl(19,n,t,i)).elementType=P,e.lanes=o,e;case F:return Xl(n,i,o,t);case U:return(e=Wl(24,n,t,i)).elementType=U,e.lanes=o,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case C:a=10;break e;case O:a=9;break e;case R:a=11;break e;case N:a=14;break e;case M:a=16,r=null;break e;case L:a=22;break e}throw Error(s(130,null==e?e:typeof e,""))}return(t=Wl(a,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Gl(e,t,n,r){return(e=Wl(7,e,r,t)).lanes=n,e}function Xl(e,t,n,r){return(e=Wl(23,e,r,t)).elementType=F,e.lanes=n,e}function Jl(e,t,n){return(e=Wl(6,e,null,t)).lanes=n,e}function Yl(e,t,n){return(t=Wl(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ql(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Bt(0),this.expirationTimes=Bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.mutableSourceEagerHydrationData=null}function eu(e,t,n,r){var i=t.current,o=fl(),a=pl(i);e:if(n){t:{if(Xe(n=n._reactInternals)!==n||1!==n.tag)throw Error(s(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(yi(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(null!==l);throw Error(s(171))}if(1===n.tag){var u=n.type;if(yi(u)){n=wi(n,u,l);break e}}n=l}else n=hi;return null===t.context?t.context=n:t.pendingContext=n,(t=co(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),ho(i,t),ml(i,a,o),a}function tu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function nu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ru(e,t){nu(e,t),(e=e.alternate)&&nu(e,t)}function iu(e,t,n){var r=null!=n&&null!=n.hydrationOptions&&n.hydrationOptions.mutableSources||null;if(n=new Ql(e,t,null!=n&&!0===n.hydrate),t=Wl(3,null,null,2===t?7:1===t?3:0),n.current=t,t.stateNode=n,lo(t),e[ei]=n.current,Pr(8===e.nodeType?e.parentNode:e),r)for(e=0;e<r.length;e++){var i=(t=r[e])._getVersion;i=i(t._source),null==n.mutableSourceEagerHydrationData?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}function ou(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function au(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o._internalRoot;if("function"==typeof i){var s=i;i=function(){var e=tu(a);s.call(e)}}eu(t,a,e,i)}else{if(o=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new iu(e,0,t?{hydrate:!0}:void 0)}(n,r),a=o._internalRoot,"function"==typeof i){var l=i;i=function(){var e=tu(a);l.call(e)}}Sl((function(){eu(t,a,e,i)}))}return tu(a)}function su(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ou(t))throw Error(s(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:_,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)}Gs=function(e,t,n){var r=t.lanes;if(null!==e)if(e.memoizedProps!==t.pendingProps||pi.current)ja=!0;else{if(0==(n&r)){switch(ja=!1,t.tag){case 3:qa(t),Ko();break;case 5:Do(t);break;case 1:yi(t.type)&&Ei(t);break;case 4:Mo(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;di(Yi,i._currentValue),i._currentValue=r;break;case 13:if(null!==t.memoizedState)return 0!=(n&t.child.childLanes)?Qa(e,t,n):(di(Fo,1&Fo.current),null!==(t=as(e,t,n))?t.sibling:null);di(Fo,1&Fo.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(64&e.flags)){if(r)return os(e,t,n);t.flags|=64}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),di(Fo,Fo.current),r)break;return null;case 23:case 24:return t.lanes=0,Ba(e,t,n)}return as(e,t,n)}ja=0!=(16384&e.flags)}else ja=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=gi(t,fi.current),oo(t,n),i=sa(null,t,r,e,i,n),t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,yi(r)){var o=!0;Ei(t)}else o=!1;t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,lo(t);var a=r.getDerivedStateFromProps;"function"==typeof a&&yo(t,r,a,e),i.updater=vo,t.stateNode=i,i._reactInternals=t,So(t,r,e,n),t=Ha(null,t,r,!0,o,n)}else t.tag=0,Fa(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=(o=i._init)(i._payload),t.type=i,o=t.tag=function(e){if("function"==typeof e)return Hl(e)?1:0;if(null!=e){if((e=e.$$typeof)===R)return 11;if(e===N)return 14}return 2}(i),e=Ji(i,e),o){case 0:t=Va(null,t,i,e,n);break e;case 1:t=Wa(null,t,i,e,n);break e;case 11:t=Ua(null,t,i,e,n);break e;case 14:t=Za(null,t,i,Ji(i.type,e),r,n);break e}throw Error(s(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,Va(e,t,r,i=t.elementType===r?i:Ji(r,i),n);case 1:return r=t.type,i=t.pendingProps,Wa(e,t,r,i=t.elementType===r?i:Ji(r,i),n);case 3:if(qa(t),r=t.updateQueue,null===e||null===r)throw Error(s(282));if(r=t.pendingProps,i=null!==(i=t.memoizedState)?i.element:null,uo(e,t),po(t,r,null,n),(r=t.memoizedState.element)===i)Ko(),t=as(e,t,n);else{if((o=(i=t.stateNode).hydrate)&&(zo=Kr(t.stateNode.containerInfo.firstChild),Zo=t,o=Bo=!0),o){if(null!=(e=i.mutableSourceEagerHydrationData))for(i=0;i<e.length;i+=2)(o=e[i])._workInProgressVersionPrimary=e[i+1],Go.push(o);for(n=Co(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|1024,n=n.sibling}else Fa(e,t,r,n),Ko();t=t.child}return t;case 5:return Do(t),null===e&&Wo(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,a=i.children,Vr(r,i)?a=null:null!==o&&Vr(r,o)&&(t.flags|=16),$a(e,t),Fa(e,t,a,n),t.child;case 6:return null===e&&Wo(t),null;case 13:return Qa(e,t,n);case 4:return Mo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=xo(t,null,r,n):Fa(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Ua(e,t,r,i=t.elementType===r?i:Ji(r,i),n);case 7:return Fa(e,t,t.pendingProps,n),t.child;case 8:case 12:return Fa(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value;var l=t.type._context;if(di(Yi,l._currentValue),l._currentValue=o,null!==a)if(l=a.value,0===(o=cr(l,o)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(l,o):1073741823))){if(a.children===i.children&&!pi.current){t=as(e,t,n);break e}}else for(null!==(l=t.child)&&(l.return=t);null!==l;){var u=l.dependencies;if(null!==u){a=l.child;for(var c=u.firstContext;null!==c;){if(c.context===r&&0!=(c.observedBits&o)){1===l.tag&&((c=co(-1,n&-n)).tag=2,ho(l,c)),l.lanes|=n,null!==(c=l.alternate)&&(c.lanes|=n),io(l.return,n),u.lanes|=n;break}c=c.next}}else a=10===l.tag&&l.type===t.type?null:l.child;if(null!==a)a.return=l;else for(a=l;null!==a;){if(a===t){a=null;break}if(null!==(l=a.sibling)){l.return=a.return,a=l;break}a=a.return}l=a}Fa(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=(o=t.pendingProps).children,oo(t,n),r=r(i=ao(i,o.unstable_observedBits)),t.flags|=1,Fa(e,t,r,n),t.child;case 14:return o=Ji(i=t.type,t.pendingProps),Za(e,t,i,o=Ji(i.type,o),r,n);case 15:return za(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ji(r,i),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,yi(r)?(e=!0,Ei(t)):e=!1,oo(t,n),wo(t,r,i),So(t,r,i,n),Ha(null,t,r,!0,e,n);case 19:return os(e,t,n);case 23:case 24:return Ba(e,t,n)}throw Error(s(156,t.tag))},iu.prototype.render=function(e){eu(e,this._internalRoot,null,null)},iu.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;eu(null,e,null,(function(){t[ei]=null}))},tt=function(e){13===e.tag&&(ml(e,4,fl()),ru(e,4))},nt=function(e){13===e.tag&&(ml(e,67108864,fl()),ru(e,67108864))},rt=function(e){if(13===e.tag){var t=fl(),n=pl(e);ml(e,n,t),ru(e,n)}},it=function(e,t){return t()},xe=function(e,t,n){switch(t){case"input":if(re(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=oi(r);if(!i)throw Error(s(90));Y(r),re(r,i)}}}break;case"textarea":ce(e,n);break;case"select":null!=(t=n.value)&&se(e,!!n.multiple,t,!1)}},Ne=El,Me=function(e,t,n,r,i){var o=Ns;Ns|=4;try{return Hi(98,e.bind(null,t,n,r,i))}finally{0===(Ns=o)&&(Ks(),Ki())}},Le=function(){0==(49&Ns)&&(function(){if(null!==ol){var e=ol;ol=null,e.forEach((function(e){e.expiredLanes|=24&e.pendingLanes,yl(e,$i())}))}Ki()}(),Dl())},De=function(e,t){var n=Ns;Ns|=2;try{return e(t)}finally{0===(Ns=n)&&(Ks(),Ki())}};var lu={Events:[ri,ii,oi,Ae,Pe,Dl,{current:!1}]},uu={findFiberByHostInstance:ni,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},cu={bundleType:uu.bundleType,version:uu.version,rendererPackageName:uu.rendererPackageName,rendererConfig:uu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:S.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Qe(e))?null:e.stateNode},findFiberByHostInstance:uu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{ki=du.inject(cu),_i=du}catch(ge){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lu,t.createPortal=su,t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(s(188));throw Error(s(268,Object.keys(e)))}return e=null===(e=Qe(t))?null:e.stateNode},t.flushSync=function(e,t){var n=Ns;if(0!=(48&n))return e(t);Ns|=1;try{if(e)return Hi(99,e.bind(null,t))}finally{Ns=n,Ki()}},t.hydrate=function(e,t,n){if(!ou(t))throw Error(s(200));return au(null,e,t,!0,n)},t.render=function(e,t,n){if(!ou(t))throw Error(s(200));return au(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!ou(e))throw Error(s(40));return!!e._reactRootContainer&&(Sl((function(){au(null,null,e,!1,(function(){e._reactRootContainer=null,e[ei]=null}))})),!0)},t.unstable_batchedUpdates=El,t.unstable_createPortal=function(e,t){return su(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ou(n))throw Error(s(200));if(null==e||void 0===e._reactInternals)throw Error(s(38));return au(e,t,n,!1,r)},t.version="17.0.2"},9060:(e,t,n)=>{"use strict";var r=n(5108);!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){r.error(e)}}(),e.exports=n(1583)},3619:(e,t,n)=>{"use strict";var r=n(4836);t.Z=void 0;var i=r(n(4938)),o=n(5893),a=(0,i.default)((0,o.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.Z=a},4938:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(1699)},4518:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"}},3023:(e,t)=>{"use strict";var n,r=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case s:case a:case h:case f:return e;default:switch(e=e&&e.$$typeof){case c:case u:case d:case m:case p:case l:return e;default:return t}}case i:return t}}}n=Symbol.for("react.module.reference")},6607:(e,t,n)=>{"use strict";n(3023)},7659:(e,t,n)=>{"use strict";n.d(t,{Z:()=>U});var r=n(7462),i=n(3366),o=n(1387),a=n(9766),s=n(6268),l=n(8010),u=n(6523);var c=n(1796);const d={black:"#000",white:"#fff"},h={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};var f=n(4518);const p={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},m={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},g={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},y={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},v={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},b=["mode","contrastThreshold","tonalOffset"],w={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:d.white,default:d.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},E={text:{primary:d.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:d.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function S(e,t,n,r){const i=r.light||r,o=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=(0,c.$n)(e.main,i):"dark"===t&&(e.dark=(0,c._j)(e.main,o)))}function k(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:s=.2}=e,l=(0,i.Z)(e,b),u=e.primary||function(e="light"){return"dark"===e?{main:g[200],light:g[50],dark:g[400]}:{main:g[700],light:g[400],dark:g[800]}}(t),k=e.secondary||function(e="light"){return"dark"===e?{main:f.Z[200],light:f.Z[50],dark:f.Z[400]}:{main:f.Z[500],light:f.Z[300],dark:f.Z[700]}}(t),_=e.error||function(e="light"){return"dark"===e?{main:p[500],light:p[300],dark:p[700]}:{main:p[700],light:p[400],dark:p[800]}}(t),I=e.info||function(e="light"){return"dark"===e?{main:y[400],light:y[300],dark:y[700]}:{main:y[700],light:y[500],dark:y[900]}}(t),T=e.success||function(e="light"){return"dark"===e?{main:v[400],light:v[300],dark:v[700]}:{main:v[800],light:v[500],dark:v[900]}}(t),x=e.warning||function(e="light"){return"dark"===e?{main:m[400],light:m[300],dark:m[700]}:{main:"#ed6c02",light:m[500],dark:m[900]}}(t);function C(e){return(0,c.mi)(e,E.text.primary)>=n?E.text.primary:w.text.primary}const O=({color:e,name:t,mainShade:n=500,lightShade:i=300,darkShade:a=700})=>{if(!(e=(0,r.Z)({},e)).main&&e[n]&&(e.main=e[n]),!e.hasOwnProperty("main"))throw new Error((0,o.Z)(11,t?` (${t})`:"",n));if("string"!=typeof e.main)throw new Error((0,o.Z)(12,t?` (${t})`:"",JSON.stringify(e.main)));return S(e,"light",i,s),S(e,"dark",a,s),e.contrastText||(e.contrastText=C(e.main)),e},R={dark:E,light:w};return(0,a.Z)((0,r.Z)({common:(0,r.Z)({},d),mode:t,primary:O({color:u,name:"primary"}),secondary:O({color:k,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:O({color:_,name:"error"}),warning:O({color:x,name:"warning"}),info:O({color:I,name:"info"}),success:O({color:T,name:"success"}),grey:h,contrastThreshold:n,getContrastText:C,augmentColor:O,tonalOffset:s},R[t]),l)}const _=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];const I={textTransform:"uppercase"},T='"Roboto", "Helvetica", "Arial", sans-serif';function x(e,t){const n="function"==typeof t?t(e):t,{fontFamily:o=T,fontSize:s=14,fontWeightLight:l=300,fontWeightRegular:u=400,fontWeightMedium:c=500,fontWeightBold:d=700,htmlFontSize:h=16,allVariants:f,pxToRem:p}=n,m=(0,i.Z)(n,_);const g=s/14,y=p||(e=>e/h*g+"rem"),v=(e,t,n,i,a)=>{return(0,r.Z)({fontFamily:o,fontWeight:e,fontSize:y(t),lineHeight:n},o===T?{letterSpacing:(s=i/t,Math.round(1e5*s)/1e5)+"em"}:{},a,f);var s},b={h1:v(l,96,1.167,-1.5),h2:v(l,60,1.2,-.5),h3:v(u,48,1.167,0),h4:v(u,34,1.235,.25),h5:v(u,24,1.334,0),h6:v(c,20,1.6,.15),subtitle1:v(u,16,1.75,.15),subtitle2:v(c,14,1.57,.1),body1:v(u,16,1.5,.15),body2:v(u,14,1.43,.15),button:v(c,14,1.75,.4,I),caption:v(u,12,1.66,.4),overline:v(u,12,2.66,1,I)};return(0,a.Z)((0,r.Z)({htmlFontSize:h,pxToRem:y,fontFamily:o,fontSize:s,fontWeightLight:l,fontWeightRegular:u,fontWeightMedium:c,fontWeightBold:d},b),m,{clone:!1})}function C(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`].join(",")}const O=["none",C(0,2,1,-1,0,1,1,0,0,1,3,0),C(0,3,1,-2,0,2,2,0,0,1,5,0),C(0,3,3,-2,0,3,4,0,0,1,8,0),C(0,2,4,-1,0,4,5,0,0,1,10,0),C(0,3,5,-1,0,5,8,0,0,1,14,0),C(0,3,5,-1,0,6,10,0,0,1,18,0),C(0,4,5,-2,0,7,10,1,0,2,16,1),C(0,5,5,-3,0,8,10,1,0,3,14,2),C(0,5,6,-3,0,9,12,1,0,3,16,2),C(0,6,6,-3,0,10,14,1,0,4,18,3),C(0,6,7,-4,0,11,15,1,0,4,20,3),C(0,7,8,-4,0,12,17,2,0,5,22,4),C(0,7,8,-4,0,13,19,2,0,5,24,4),C(0,7,9,-4,0,14,21,2,0,5,26,4),C(0,8,9,-5,0,15,22,2,0,6,28,5),C(0,8,10,-5,0,16,24,2,0,6,30,5),C(0,8,11,-5,0,17,26,2,0,6,32,5),C(0,9,11,-5,0,18,28,2,0,7,34,6),C(0,9,12,-6,0,19,29,2,0,7,36,6),C(0,10,13,-6,0,20,31,3,0,8,38,7),C(0,10,13,-6,0,21,33,3,0,8,40,7),C(0,10,14,-6,0,22,35,3,0,8,42,7),C(0,11,14,-7,0,23,36,3,0,9,44,8),C(0,11,15,-7,0,24,38,3,0,9,46,8)],R=["duration","easing","delay"],A={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},P={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function N(e){return`${Math.round(e)}ms`}function M(e){if(!e)return 0;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}function L(e){const t=(0,r.Z)({},A,e.easing),n=(0,r.Z)({},P,e.duration);return(0,r.Z)({getAutoHeightDuration:M,create:(e=["all"],r={})=>{const{duration:o=n.standard,easing:a=t.easeInOut,delay:s=0}=r;(0,i.Z)(r,R);return(Array.isArray(e)?e:[e]).map((e=>`${e} ${"string"==typeof o?o:N(o)} ${a} ${"string"==typeof s?s:N(s)}`)).join(",")}},e,{easing:t,duration:n})}const D={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},j=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function F(e={},...t){const{mixins:n={},palette:c={},transitions:d={},typography:h={}}=e,f=(0,i.Z)(e,j);if(e.vars)throw new Error((0,o.Z)(18));const p=k(c),m=(0,s.Z)(e);let g=(0,a.Z)(m,{mixins:(y=m.breakpoints,v=n,(0,r.Z)({toolbar:{minHeight:56,[y.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[y.up("sm")]:{minHeight:64}}},v)),palette:p,shadows:O.slice(),typography:x(p,h),transitions:L(d),zIndex:(0,r.Z)({},D)});var y,v;return g=(0,a.Z)(g,f),g=t.reduce(((e,t)=>(0,a.Z)(e,t)),g),g.unstable_sxConfig=(0,r.Z)({},l.Z,null==f?void 0:f.unstable_sxConfig),g.unstable_sx=function(e){return(0,u.Z)({sx:e,theme:this})},g}const U=F},247:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(7659).Z)()},948:(e,t,n)=>{"use strict";n.d(t,{Dz:()=>a,FO:()=>o,ZP:()=>s});var r=n(2807),i=n(247);const o=e=>(0,r.x9)(e)&&"classes"!==e,a=r.x9,s=(0,r.ZP)({defaultTheme:i.Z,rootShouldForwardProp:o})},1657:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7333),i=n(247);function o({props:e,name:t}){return(0,r.Z)({props:e,name:t,defaultTheme:i.Z})}},8216:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(4142).Z},5949:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(7462),i=n(7294),o=n(3366),a=n(6010),s=n(4780),l=n(8216),u=n(1657),c=n(948),d=n(1588),h=n(4867);function f(e){return(0,h.Z)("MuiSvgIcon",e)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=n(5893);const m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],g=(0,c.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,l.Z)(n.color)}`],t[`fontSize${(0,l.Z)(n.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var n,r,i,o,a,s,l,u,c,d,h,f,p,m,g,y,v;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=e.transitions)||null==(r=n.create)?void 0:r.call(n,"fill",{duration:null==(i=e.transitions)||null==(o=i.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(a=e.typography)||null==(s=a.pxToRem)?void 0:s.call(a,20))||"1.25rem",medium:(null==(l=e.typography)||null==(u=l.pxToRem)?void 0:u.call(l,24))||"1.5rem",large:(null==(c=e.typography)||null==(d=c.pxToRem)?void 0:d.call(c,35))||"2.1875rem"}[t.fontSize],color:null!=(h=null==(f=(e.vars||e).palette)||null==(p=f[t.color])?void 0:p.main)?h:{action:null==(m=(e.vars||e).palette)||null==(g=m.action)?void 0:g.active,disabled:null==(y=(e.vars||e).palette)||null==(v=y.action)?void 0:v.disabled,inherit:void 0}[t.color]}})),y=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiSvgIcon"}),{children:i,className:c,color:d="inherit",component:h="svg",fontSize:y="medium",htmlColor:v,inheritViewBox:b=!1,titleAccess:w,viewBox:E="0 0 24 24"}=n,S=(0,o.Z)(n,m),k=(0,r.Z)({},n,{color:d,component:h,fontSize:y,instanceFontSize:e.fontSize,inheritViewBox:b,viewBox:E}),_={};b||(_.viewBox=E);const I=(e=>{const{color:t,fontSize:n,classes:r}=e,i={root:["root","inherit"!==t&&`color${(0,l.Z)(t)}`,`fontSize${(0,l.Z)(n)}`]};return(0,s.Z)(i,f,r)})(k);return(0,p.jsxs)(g,(0,r.Z)({as:h,className:(0,a.Z)(I.root,c),focusable:"false",color:v,"aria-hidden":!w||void 0,role:w?"img":void 0,ref:t},_,S,{ownerState:k,children:[i,w?(0,p.jsx)("title",{children:w}):null]}))}));y.muiName="SvgIcon";const v=y;function b(e,t){function n(n,i){return(0,p.jsx)(v,(0,r.Z)({"data-testid":`${t}Icon`,ref:i},n,{children:e}))}return n.muiName=v.muiName,i.memo(i.forwardRef(n))}},7144:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(9336).Z},1699:(e,t,n)=>{"use strict";n.r(t),n.d(t,{capitalize:()=>i.Z,createChainedFunction:()=>o,createSvgIcon:()=>a.Z,debounce:()=>s.Z,deprecatedPropType:()=>l,isMuiElement:()=>u.Z,ownerDocument:()=>c.Z,ownerWindow:()=>d.Z,requirePropFactory:()=>h,setRef:()=>f,unstable_ClassNameGenerator:()=>E,unstable_useEnhancedEffect:()=>p.Z,unstable_useId:()=>m.Z,unsupportedProp:()=>g,useControlled:()=>y.Z,useEventCallback:()=>v.Z,useForkRef:()=>b.Z,useIsFocusVisible:()=>w.Z});var r=n(7078),i=n(8216);const o=n(9064).Z;var a=n(5949),s=n(7144);const l=function(e,t){return()=>null};var u=n(8502),c=n(8038),d=n(5340);n(7462);const h=function(e,t){return()=>null};const f=n(7960).Z;var p=n(8974),m=n(7909);const g=function(e,t,n,r,i){return null};var y=n(9327),v=n(2068),b=n(1705),w=n(3511);const E={configure:e=>{r.Z.configure(e)}}},8502:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(7294);const i=function(e,t){var n,i;return r.isValidElement(e)&&-1!==t.indexOf(null!=(n=e.type.muiName)?n:null==(i=e.type)||null==(i=i._payload)||null==(i=i.value)?void 0:i.muiName)}},8038:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(2690).Z},5340:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(4161).Z},9327:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(7294);const i=function({controlled:e,default:t,name:n,state:i="value"}){const{current:o}=r.useRef(void 0!==e),[a,s]=r.useState(t);return[o?e:a,r.useCallback((e=>{o||s(e)}),[])]}},8974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(3546).Z},2068:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(9948).Z},1705:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(3703).Z},7909:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(2996).Z},3511:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(7294);let i,o=!0,a=!1;const s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function u(){o=!1}function c(){"hidden"===this.visibilityState&&a&&(o=!0)}function d(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return o||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!s[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}const h=function(){const e=r.useCallback((e=>{null!=e&&function(e){e.addEventListener("keydown",l,!0),e.addEventListener("mousedown",u,!0),e.addEventListener("pointerdown",u,!0),e.addEventListener("touchstart",u,!0),e.addEventListener("visibilitychange",c,!0)}(e.ownerDocument)}),[]),t=r.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!d(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(a=!0,window.clearTimeout(i),i=window.setTimeout((()=>{a=!1}),100),t.current=!1,!0)},ref:e}}},4819:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(7294).createContext(null)},6760:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7294),i=n(4819);function o(){return r.useContext(i.Z)}},9378:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>w,Co:()=>E});var r=n(7294),i=n(7462),o=n(5042),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;const s=(0,o.Z)((function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));var l=n(2443),u=n(444),c=n(6797),d=n(7278),h=s,f=function(e){return"theme"!==e},p=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?h:f},m=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},g=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;(0,u.hC)(t,n,r);(0,d.L)((function(){return(0,u.My)(t,n,r)}));return null};const y=function e(t,n){var o,a,s=t.__emotion_real===t,d=s&&t.__emotion_base||t;void 0!==n&&(o=n.label,a=n.target);var h=m(t,n,s),f=h||p(d),y=!f("as");return function(){var v=arguments,b=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==o&&b.push("label:"+o+";"),null==v[0]||void 0===v[0].raw)b.push.apply(b,v);else{0,b.push(v[0][0]);for(var w=v.length,E=1;E<w;E++)b.push(v[E],v[0][E])}var S=(0,l.w)((function(e,t,n){var i=y&&e.as||d,o="",s=[],m=e;if(null==e.theme){for(var v in m={},e)m[v]=e[v];m.theme=(0,r.useContext)(l.T)}"string"==typeof e.className?o=(0,u.fp)(t.registered,s,e.className):null!=e.className&&(o=e.className+" ");var w=(0,c.O)(b.concat(s),t.registered,m);o+=t.key+"-"+w.name,void 0!==a&&(o+=" "+a);var E=y&&void 0===h?p(i):f,S={};for(var k in e)y&&"as"===k||E(k)&&(S[k]=e[k]);return S.className=o,S.ref=n,(0,r.createElement)(r.Fragment,null,(0,r.createElement)(g,{cache:t,serialized:w,isStringTag:"string"==typeof i}),(0,r.createElement)(i,S))}));return S.displayName=void 0!==o?o:"Styled("+("string"==typeof d?d:d.displayName||d.name||"Component")+")",S.defaultProps=t.defaultProps,S.__emotion_real=S,S.__emotion_base=d,S.__emotion_styles=b,S.__emotion_forwardProp=h,Object.defineProperty(S,"toString",{value:function(){return"."+a}}),S.withComponent=function(t,r){return e(t,(0,i.Z)({},n,r,{shouldForwardProp:m(S,r,!0)})).apply(void 0,b)},S}};var v=y.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){v[e]=v(e)}));const b=v;
/** @license MUI v5.11.0
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function w(e,t){return b(e,t)}const E=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))}},5408:(e,t,n)=>{"use strict";n.d(t,{L7:()=>l,P$:()=>c,VO:()=>i,W8:()=>s,dt:()=>u,k9:()=>a});var r=n(9766);const i={xs:0,sm:600,md:900,lg:1200,xl:1536},o={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${i[e]}px)`};function a(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const e=r.breakpoints||o;return t.reduce(((r,i,o)=>(r[e.up(e.keys[o])]=n(t[o]),r)),{})}if("object"==typeof t){const e=r.breakpoints||o;return Object.keys(t).reduce(((r,o)=>{if(-1!==Object.keys(e.values||i).indexOf(o)){r[e.up(o)]=n(t[o],o)}else{const e=o;r[e]=t[e]}return r}),{})}return n(t)}function s(e={}){var t;return(null==(t=e.keys)?void 0:t.reduce(((t,n)=>(t[e.up(n)]={},t)),{}))||{}}function l(e,t){return e.reduce(((e,t)=>{const n=e[t];return(!n||0===Object.keys(n).length)&&delete e[t],e}),t)}function u(e,...t){const n=s(e),i=[n,...t].reduce(((e,t)=>(0,r.Z)(e,t)),{});return l(Object.keys(n),i)}function c({values:e,breakpoints:t,base:n}){const r=n||function(e,t){if("object"!=typeof e)return{};const n={},r=Object.keys(t);return Array.isArray(e)?r.forEach(((t,r)=>{r<e.length&&(n[t]=!0)})):r.forEach((t=>{null!=e[t]&&(n[t]=!0)})),n}(e,t),i=Object.keys(r);if(0===i.length)return e;let o;return i.reduce(((t,n,r)=>(Array.isArray(e)?(t[n]=null!=e[r]?e[r]:e[o],o=r):"object"==typeof e?(t[n]=null!=e[n]?e[n]:e[o],o=n):t[n]=e,t)),{})}},1796:(e,t,n)=>{"use strict";n.d(t,{$n:()=>d,Fq:()=>u,_j:()=>c,mi:()=>l});var r=n(1387);function i(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function o(e){if(e.type)return e;if("#"===e.charAt(0))return o(function(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&1===n[0].length&&(n=n.map((e=>e+e))),n?`rgb${4===n.length?"a":""}(${n.map(((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", ")})`:""}(e));const t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(n))throw new Error((0,r.Z)(9,e));let i,a=e.substring(t+1,e.length-1);if("color"===n){if(a=a.split(" "),i=a.shift(),4===a.length&&"/"===a[3].charAt(0)&&(a[3]=a[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i))throw new Error((0,r.Z)(10,i))}else a=a.split(",");return a=a.map((e=>parseFloat(e))),{type:n,values:a,colorSpace:i}}function a(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return-1!==t.indexOf("rgb")?r=r.map(((e,t)=>t<3?parseInt(e,10):e)):-1!==t.indexOf("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),r=-1!==t.indexOf("color")?`${n} ${r.join(" ")}`:`${r.join(", ")}`,`${t}(${r})`}function s(e){let t="hsl"===(e=o(e)).type||"hsla"===e.type?o(function(e){e=o(e);const{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,s=r*Math.min(i,1-i),l=(e,t=(e+n/30)%12)=>i-s*Math.max(Math.min(t-3,9-t,1),-1);let u="rgb";const c=[Math.round(255*l(0)),Math.round(255*l(8)),Math.round(255*l(4))];return"hsla"===e.type&&(u+="a",c.push(t[3])),a({type:u,values:c})}(e)).values:e.values;return t=t.map((t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4))),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function l(e,t){const n=s(e),r=s(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function u(e,t){return e=o(e),t=i(t),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,a(e)}function c(e,t){if(e=o(e),t=i(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return a(e)}function d(e,t){if(e=o(e),t=i(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return a(e)}},2807:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>E,x9:()=>b});var r=n(3366),i=n(7462),o=n(9378),a=n(6268),s=n(4142);const l=["variant"];function u(e){return 0===e.length}function c(e){const{variant:t}=e,n=(0,r.Z)(e,l);let i=t||"";return Object.keys(n).sort().forEach((t=>{i+="color"===t?u(i)?e[t]:(0,s.Z)(e[t]):`${u(i)?t:(0,s.Z)(t)}${(0,s.Z)(e[t].toString())}`})),i}var d=n(6523);const h=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],f=["theme"],p=["theme"];function m(e){return 0===Object.keys(e).length}const g=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,y=(e,t)=>{let n=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants);const r={};return n.forEach((e=>{const t=c(e.props);r[t]=e.style})),r},v=(e,t,n,r)=>{var i,o;const{ownerState:a={}}=e,s=[],l=null==n||null==(i=n.components)||null==(o=i[r])?void 0:o.variants;return l&&l.forEach((n=>{let r=!0;Object.keys(n.props).forEach((t=>{a[t]!==n.props[t]&&e[t]!==n.props[t]&&(r=!1)})),r&&s.push(t[c(n.props)])})),s};function b(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const w=(0,a.Z)();function E(e={}){const{defaultTheme:t=w,rootShouldForwardProp:n=b,slotShouldForwardProp:a=b}=e,s=e=>{const n=m(e.theme)?t:e.theme;return(0,d.Z)((0,i.Z)({},e,{theme:n}))};return s.__mui_systemSx=!0,(e,l={})=>{(0,o.Co)(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:u,slot:c,skipVariantsResolver:d,skipSx:w,overridesResolver:E}=l,S=(0,r.Z)(l,h),k=void 0!==d?d:c&&"Root"!==c||!1,_=w||!1;let I=b;"Root"===c?I=n:c?I=a:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(I=void 0);const T=(0,o.ZP)(e,(0,i.Z)({shouldForwardProp:I,label:undefined},S)),x=(e,...n)=>{const o=n?n.map((e=>"function"==typeof e&&e.__emotion_real!==e?n=>{let{theme:o}=n,a=(0,r.Z)(n,f);return e((0,i.Z)({theme:m(o)?t:o},a))}:e)):[];let a=e;u&&E&&o.push((e=>{const n=m(e.theme)?t:e.theme,r=g(u,n);if(r){const t={};return Object.entries(r).forEach((([r,o])=>{t[r]="function"==typeof o?o((0,i.Z)({},e,{theme:n})):o})),E(e,t)}return null})),u&&!k&&o.push((e=>{const n=m(e.theme)?t:e.theme;return v(e,y(u,n),n,u)})),_||o.push(s);const l=o.length-n.length;if(Array.isArray(e)&&l>0){const t=new Array(l).fill("");a=[...e,...t],a.raw=[...e.raw,...t]}else"function"==typeof e&&e.__emotion_real!==e&&(a=n=>{let{theme:o}=n,a=(0,r.Z)(n,p);return e((0,i.Z)({theme:m(o)?t:o},a))});return T(a,...o)};return T.withConfig&&(x.withConfig=T.withConfig),x}}},6268:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(7462),i=n(3366),o=n(9766);const a=["values","unit","step"],s=e=>{const t=Object.keys(e).map((t=>({key:t,val:e[t]})))||[];return t.sort(((e,t)=>e.val-t.val)),t.reduce(((e,t)=>(0,r.Z)({},e,{[t.key]:t.val})),{})};const l={borderRadius:4};var u=n(2605);var c=n(6523),d=n(8010);const h=["breakpoints","palette","spacing","shape"];const f=function(e={},...t){const{breakpoints:n={},palette:f={},spacing:p,shape:m={}}=e,g=(0,i.Z)(e,h),y=function(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:o=5}=e,l=(0,i.Z)(e,a),u=s(t),c=Object.keys(u);function d(e){return`@media (min-width:${"number"==typeof t[e]?t[e]:e}${n})`}function h(e){return`@media (max-width:${("number"==typeof t[e]?t[e]:e)-o/100}${n})`}function f(e,r){const i=c.indexOf(r);return`@media (min-width:${"number"==typeof t[e]?t[e]:e}${n}) and (max-width:${(-1!==i&&"number"==typeof t[c[i]]?t[c[i]]:r)-o/100}${n})`}return(0,r.Z)({keys:c,values:u,up:d,down:h,between:f,only:function(e){return c.indexOf(e)+1<c.length?f(e,c[c.indexOf(e)+1]):d(e)},not:function(e){const t=c.indexOf(e);return 0===t?d(c[1]):t===c.length-1?h(c[t]):f(e,c[c.indexOf(e)+1]).replace("@media","@media not all and")},unit:n},l)}(n),v=function(e=8){if(e.mui)return e;const t=(0,u.hB)({spacing:e}),n=(...e)=>(0===e.length?[1]:e).map((e=>{const n=t(e);return"number"==typeof n?`${n}px`:n})).join(" ");return n.mui=!0,n}(p);let b=(0,o.Z)({breakpoints:y,direction:"ltr",components:{},palette:(0,r.Z)({mode:"light"},f),spacing:v,shape:(0,r.Z)({},l,m)},g);return b=t.reduce(((e,t)=>(0,o.Z)(e,t)),b),b.unstable_sxConfig=(0,r.Z)({},d.Z,null==g?void 0:g.unstable_sxConfig),b.unstable_sx=function(e){return(0,c.Z)({sx:e,theme:this})},b}},7730:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(9766);const i=function(e,t){return t?(0,r.Z)(e,t,{clone:!1}):e}},2605:(e,t,n)=>{"use strict";n.d(t,{hB:()=>p,eI:()=>f,NA:()=>m,e6:()=>v,o3:()=>b});var r=n(5408),i=n(4844),o=n(7730);const a={m:"margin",p:"padding"},s={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},l={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},u=function(e){const t={};return n=>(void 0===t[n]&&(t[n]=e(n)),t[n])}((e=>{if(e.length>2){if(!l[e])return[e];e=l[e]}const[t,n]=e.split(""),r=a[t],i=s[n]||"";return Array.isArray(i)?i.map((e=>r+e)):[r+i]})),c=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],d=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],h=[...c,...d];function f(e,t,n,r){var o;const a=null!=(o=(0,i.DW)(e,t,!1))?o:n;return"number"==typeof a?e=>"string"==typeof e?e:a*e:Array.isArray(a)?e=>"string"==typeof e?e:a[e]:"function"==typeof a?a:()=>{}}function p(e){return f(e,"spacing",8)}function m(e,t){if("string"==typeof t||null==t)return t;const n=e(Math.abs(t));return t>=0?n:"number"==typeof n?-n:`-${n}`}function g(e,t,n,i){if(-1===t.indexOf(n))return null;const o=function(e,t){return n=>e.reduce(((e,r)=>(e[r]=m(t,n),e)),{})}(u(n),i),a=e[n];return(0,r.k9)(e,a,o)}function y(e,t){const n=p(e.theme);return Object.keys(e).map((r=>g(e,t,r,n))).reduce(o.Z,{})}function v(e){return y(e,c)}function b(e){return y(e,d)}function w(e){return y(e,h)}v.propTypes={},v.filterProps=c,b.propTypes={},b.filterProps=d,w.propTypes={},w.filterProps=h},4844:(e,t,n)=>{"use strict";n.d(t,{DW:()=>o,Jq:()=>a,ZP:()=>s});var r=n(4142),i=n(5408);function o(e,t,n=!0){if(!t||"string"!=typeof t)return null;if(e&&e.vars&&n){const n=`vars.${t}`.split(".").reduce(((e,t)=>e&&e[t]?e[t]:null),e);if(null!=n)return n}return t.split(".").reduce(((e,t)=>e&&null!=e[t]?e[t]:null),e)}function a(e,t,n,r=n){let i;return i="function"==typeof e?e(n):Array.isArray(e)?e[n]||r:o(e,n)||r,t&&(i=t(i,r,e)),i}const s=function(e){const{prop:t,cssProperty:n=e.prop,themeKey:s,transform:l}=e,u=e=>{if(null==e[t])return null;const u=e[t],c=o(e.theme,s)||{};return(0,i.k9)(e,u,(e=>{let i=a(c,l,e);return e===i&&"string"==typeof e&&(i=a(c,l,`${t}${"default"===e?"":(0,r.Z)(e)}`,e)),!1===n?i:{[n]:i}}))};return u.propTypes={},u.filterProps=[t],u}},8010:(e,t,n)=>{"use strict";n.d(t,{Z:()=>A});var r=n(2605),i=n(4844),o=n(7730);const a=function(...e){const t=e.reduce(((e,t)=>(t.filterProps.forEach((n=>{e[n]=t})),e)),{}),n=e=>Object.keys(e).reduce(((n,r)=>t[r]?(0,o.Z)(n,t[r](e)):n),{});return n.propTypes={},n.filterProps=e.reduce(((e,t)=>e.concat(t.filterProps)),[]),n};var s=n(5408);function l(e){return"number"!=typeof e?e:`${e}px solid`}const u=(0,i.ZP)({prop:"border",themeKey:"borders",transform:l}),c=(0,i.ZP)({prop:"borderTop",themeKey:"borders",transform:l}),d=(0,i.ZP)({prop:"borderRight",themeKey:"borders",transform:l}),h=(0,i.ZP)({prop:"borderBottom",themeKey:"borders",transform:l}),f=(0,i.ZP)({prop:"borderLeft",themeKey:"borders",transform:l}),p=(0,i.ZP)({prop:"borderColor",themeKey:"palette"}),m=(0,i.ZP)({prop:"borderTopColor",themeKey:"palette"}),g=(0,i.ZP)({prop:"borderRightColor",themeKey:"palette"}),y=(0,i.ZP)({prop:"borderBottomColor",themeKey:"palette"}),v=(0,i.ZP)({prop:"borderLeftColor",themeKey:"palette"}),b=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){const t=(0,r.eI)(e.theme,"shape.borderRadius",4,"borderRadius"),n=e=>({borderRadius:(0,r.NA)(t,e)});return(0,s.k9)(e,e.borderRadius,n)}return null};b.propTypes={},b.filterProps=["borderRadius"];a(u,c,d,h,f,p,m,g,y,v,b);const w=e=>{if(void 0!==e.gap&&null!==e.gap){const t=(0,r.eI)(e.theme,"spacing",8,"gap"),n=e=>({gap:(0,r.NA)(t,e)});return(0,s.k9)(e,e.gap,n)}return null};w.propTypes={},w.filterProps=["gap"];const E=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){const t=(0,r.eI)(e.theme,"spacing",8,"columnGap"),n=e=>({columnGap:(0,r.NA)(t,e)});return(0,s.k9)(e,e.columnGap,n)}return null};E.propTypes={},E.filterProps=["columnGap"];const S=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){const t=(0,r.eI)(e.theme,"spacing",8,"rowGap"),n=e=>({rowGap:(0,r.NA)(t,e)});return(0,s.k9)(e,e.rowGap,n)}return null};S.propTypes={},S.filterProps=["rowGap"];a(w,E,S,(0,i.ZP)({prop:"gridColumn"}),(0,i.ZP)({prop:"gridRow"}),(0,i.ZP)({prop:"gridAutoFlow"}),(0,i.ZP)({prop:"gridAutoColumns"}),(0,i.ZP)({prop:"gridAutoRows"}),(0,i.ZP)({prop:"gridTemplateColumns"}),(0,i.ZP)({prop:"gridTemplateRows"}),(0,i.ZP)({prop:"gridTemplateAreas"}),(0,i.ZP)({prop:"gridArea"}));function k(e,t){return"grey"===t?t:e}a((0,i.ZP)({prop:"color",themeKey:"palette",transform:k}),(0,i.ZP)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:k}),(0,i.ZP)({prop:"backgroundColor",themeKey:"palette",transform:k}));function _(e){return e<=1&&0!==e?100*e+"%":e}const I=(0,i.ZP)({prop:"width",transform:_}),T=e=>{if(void 0!==e.maxWidth&&null!==e.maxWidth){const t=t=>{var n,r,i;return{maxWidth:(null==(n=e.theme)||null==(r=n.breakpoints)||null==(i=r.values)?void 0:i[t])||s.VO[t]||_(t)}};return(0,s.k9)(e,e.maxWidth,t)}return null};T.filterProps=["maxWidth"];const x=(0,i.ZP)({prop:"minWidth",transform:_}),C=(0,i.ZP)({prop:"height",transform:_}),O=(0,i.ZP)({prop:"maxHeight",transform:_}),R=(0,i.ZP)({prop:"minHeight",transform:_}),A=((0,i.ZP)({prop:"size",cssProperty:"width",transform:_}),(0,i.ZP)({prop:"size",cssProperty:"height",transform:_}),a(I,T,x,C,O,R,(0,i.ZP)({prop:"boxSizing"})),{border:{themeKey:"borders",transform:l},borderTop:{themeKey:"borders",transform:l},borderRight:{themeKey:"borders",transform:l},borderBottom:{themeKey:"borders",transform:l},borderLeft:{themeKey:"borders",transform:l},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:b},color:{themeKey:"palette",transform:k},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:k},backgroundColor:{themeKey:"palette",transform:k},p:{style:r.o3},pt:{style:r.o3},pr:{style:r.o3},pb:{style:r.o3},pl:{style:r.o3},px:{style:r.o3},py:{style:r.o3},padding:{style:r.o3},paddingTop:{style:r.o3},paddingRight:{style:r.o3},paddingBottom:{style:r.o3},paddingLeft:{style:r.o3},paddingX:{style:r.o3},paddingY:{style:r.o3},paddingInline:{style:r.o3},paddingInlineStart:{style:r.o3},paddingInlineEnd:{style:r.o3},paddingBlock:{style:r.o3},paddingBlockStart:{style:r.o3},paddingBlockEnd:{style:r.o3},m:{style:r.e6},mt:{style:r.e6},mr:{style:r.e6},mb:{style:r.e6},ml:{style:r.e6},mx:{style:r.e6},my:{style:r.e6},margin:{style:r.e6},marginTop:{style:r.e6},marginRight:{style:r.e6},marginBottom:{style:r.e6},marginLeft:{style:r.e6},marginX:{style:r.e6},marginY:{style:r.e6},marginInline:{style:r.e6},marginInlineStart:{style:r.e6},marginInlineEnd:{style:r.e6},marginBlock:{style:r.e6},marginBlockStart:{style:r.e6},marginBlockEnd:{style:r.e6},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:w},rowGap:{style:S},columnGap:{style:E},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:_},maxWidth:{style:T},minWidth:{transform:_},height:{transform:_},maxHeight:{transform:_},minHeight:{transform:_},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}})},6523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(4142),i=n(7730),o=n(4844),a=n(5408),s=n(8010);const l=function(){function e(e,t,n,i){const s={[e]:t,theme:n},l=i[e];if(!l)return{[e]:t};const{cssProperty:u=e,themeKey:c,transform:d,style:h}=l;if(null==t)return null;const f=(0,o.DW)(n,c)||{};if(h)return h(s);return(0,a.k9)(s,t,(t=>{let n=(0,o.Jq)(f,d,t);return t===n&&"string"==typeof t&&(n=(0,o.Jq)(f,d,`${e}${"default"===t?"":(0,r.Z)(t)}`,t)),!1===u?n:{[u]:n}}))}return function t(n){var r;const{sx:o,theme:l={}}=n||{};if(!o)return null;const u=null!=(r=l.unstable_sxConfig)?r:s.Z;function c(n){let r=n;if("function"==typeof n)r=n(l);else if("object"!=typeof n)return n;if(!r)return null;const o=(0,a.W8)(l.breakpoints),s=Object.keys(o);let c=o;return Object.keys(r).forEach((n=>{const o=(s=r[n],d=l,"function"==typeof s?s(d):s);var s,d;if(null!=o)if("object"==typeof o)if(u[n])c=(0,i.Z)(c,e(n,o,l,u));else{const e=(0,a.k9)({theme:l},o,(e=>({[n]:e})));!function(...e){const t=e.reduce(((e,t)=>e.concat(Object.keys(t))),[]),n=new Set(t);return e.every((e=>n.size===Object.keys(e).length))}(e,o)?c=(0,i.Z)(c,e):c[n]=t({sx:o,theme:l})}else c=(0,i.Z)(c,e(n,o,l,u))})),(0,a.L7)(s,c)}return Array.isArray(o)?o.map(c):c(o)}}();l.filterProps=["sx"];const u=l},6682:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(6268),i=n(4168);const o=(0,r.Z)();const a=function(e=o){return(0,i.Z)(e)}},7333:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7925);var i=n(6682);function o({props:e,name:t,defaultTheme:n}){const o=function(e){const{theme:t,name:n,props:i}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?(0,r.Z)(t.components[n].defaultProps,i):i}({theme:(0,i.Z)(n),name:t,props:e});return o}},4168:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(6760);const i=function(e=null){const t=(0,r.Z)();return t&&(n=t,0!==Object.keys(n).length)?t:e;var n}},7078:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const r=e=>e,i=(()=>{let e=r;return{configure(t){e=t},generate:t=>e(t),reset(){e=r}}})()},4142:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(1387);function i(e){if("string"!=typeof e)throw new Error((0,r.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},4780:(e,t,n)=>{"use strict";function r(e,t,n=void 0){const r={};return Object.keys(e).forEach((i=>{r[i]=e[i].reduce(((e,r)=>{if(r){const i=t(r);""!==i&&e.push(i),n&&n[r]&&e.push(n[r])}return e}),[]).join(" ")})),r}n.d(t,{Z:()=>r})},9064:(e,t,n)=>{"use strict";function r(...e){return e.reduce(((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)}),(()=>{}))}n.d(t,{Z:()=>r})},9336:(e,t,n)=>{"use strict";function r(e,t=166){let n;function r(...r){clearTimeout(n),n=setTimeout((()=>{e.apply(this,r)}),t)}return r.clear=()=>{clearTimeout(n)},r}n.d(t,{Z:()=>r})},9766:(e,t,n)=>{"use strict";n.d(t,{P:()=>i,Z:()=>a});var r=n(7462);function i(e){return null!==e&&"object"==typeof e&&e.constructor===Object}function o(e){if(!i(e))return e;const t={};return Object.keys(e).forEach((n=>{t[n]=o(e[n])})),t}function a(e,t,n={clone:!0}){const s=n.clone?(0,r.Z)({},e):e;return i(e)&&i(t)&&Object.keys(t).forEach((r=>{"__proto__"!==r&&(i(t[r])&&r in e&&i(e[r])?s[r]=a(e[r],t[r],n):n.clone?s[r]=i(t[r])?o(t[r]):t[r]:s[r]=t[r])})),s}},1387:(e,t,n)=>{"use strict";function r(e){let t="https://mui.com/production-error/?code="+e;for(let e=1;e<arguments.length;e+=1)t+="&args[]="+encodeURIComponent(arguments[e]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}n.d(t,{Z:()=>r})},4867:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7078);const i={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function o(e,t,n="Mui"){const o=i[t];return o?`${n}-${o}`:`${r.Z.generate(e)}-${t}`}},1588:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(4867);function i(e,t,n="Mui"){const i={};return t.forEach((t=>{i[t]=(0,r.Z)(e,t,n)})),i}},2690:(e,t,n)=>{"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,{Z:()=>r})},4161:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(2690);function i(e){return(0,r.Z)(e).defaultView||window}},7925:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(7462);function i(e,t){const n=(0,r.Z)({},t);return Object.keys(e).forEach((o=>{if(o.toString().match(/^(components|slots)$/))n[o]=(0,r.Z)({},e[o],n[o]);else if(o.toString().match(/^(componentsProps|slotProps)$/)){const a=e[o]||{},s=t[o];n[o]={},s&&Object.keys(s)?a&&Object.keys(a)?(n[o]=(0,r.Z)({},s),Object.keys(a).forEach((e=>{n[o][e]=i(a[e],s[e])}))):n[o]=s:n[o]=a}else void 0===n[o]&&(n[o]=e[o])})),n}},7960:(e,t,n)=>{"use strict";function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:()=>r})},3546:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(7294);const i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},9948:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7294),i=n(3546);const o=function(e){const t=r.useRef(e);return(0,i.Z)((()=>{t.current=e})),r.useRef(((...e)=>(0,t.current)(...e))).current}},3703:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7294),i=n(7960);function o(...e){return r.useMemo((()=>e.every((e=>null==e))?null:t=>{e.forEach((e=>{(0,i.Z)(e,t)}))}),e)}},2996:(e,t,n)=>{"use strict";var r;n.d(t,{Z:()=>s});var i=n(7294);let o=0;const a=(r||(r=n.t(i,2)))["useId".toString()];function s(e){if(void 0!==a){const t=a();return null!=e?e:t}return function(e){const[t,n]=i.useState(e),r=e||t;return i.useEffect((()=>{null==t&&(o+=1,n(`mui-${o}`))}),[t]),r}(e)}},9282:(e,t,n)=>{"use strict";var r=n(4155),i=n(5108);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var a,s,l=n(2136).codes,u=l.ERR_AMBIGUOUS_ARGUMENT,c=l.ERR_INVALID_ARG_TYPE,d=l.ERR_INVALID_ARG_VALUE,h=l.ERR_INVALID_RETURN_VALUE,f=l.ERR_MISSING_ARGS,p=n(5961),m=n(9539).inspect,g=n(9539).types,y=g.isPromise,v=g.isRegExp,b=Object.assign?Object.assign:n(8091).assign,w=Object.is?Object.is:n(609);new Map;function E(){var e=n(9158);a=e.isDeepEqual,s=e.isDeepStrictEqual}var S=!1,k=e.exports=x,_={};function I(e){if(e.message instanceof Error)throw e.message;throw new p(e)}function T(e,t,n,r){if(!n){var i=!1;if(0===t)i=!0,r="No value argument passed to `assert.ok()`";else if(r instanceof Error)throw r;var o=new p({actual:n,expected:!0,message:r,operator:"==",stackStartFn:e});throw o.generatedMessage=i,o}}function x(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];T.apply(void 0,[x,t.length].concat(t))}k.fail=function e(t,n,o,a,s){var l,u=arguments.length;if(0===u)l="Failed";else if(1===u)o=t,t=void 0;else{if(!1===S)S=!0,(r.emitWarning?r.emitWarning:i.warn.bind(i))("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.","DeprecationWarning","DEP0094");2===u&&(a="!=")}if(o instanceof Error)throw o;var c={actual:t,expected:n,operator:void 0===a?"fail":a,stackStartFn:s||e};void 0!==o&&(c.message=o);var d=new p(c);throw l&&(d.message=l,d.generatedMessage=!0),d},k.AssertionError=p,k.ok=x,k.equal=function e(t,n,r){if(arguments.length<2)throw new f("actual","expected");t!=n&&I({actual:t,expected:n,message:r,operator:"==",stackStartFn:e})},k.notEqual=function e(t,n,r){if(arguments.length<2)throw new f("actual","expected");t==n&&I({actual:t,expected:n,message:r,operator:"!=",stackStartFn:e})},k.deepEqual=function e(t,n,r){if(arguments.length<2)throw new f("actual","expected");void 0===a&&E(),a(t,n)||I({actual:t,expected:n,message:r,operator:"deepEqual",stackStartFn:e})},k.notDeepEqual=function e(t,n,r){if(arguments.length<2)throw new f("actual","expected");void 0===a&&E(),a(t,n)&&I({actual:t,expected:n,message:r,operator:"notDeepEqual",stackStartFn:e})},k.deepStrictEqual=function e(t,n,r){if(arguments.length<2)throw new f("actual","expected");void 0===a&&E(),s(t,n)||I({actual:t,expected:n,message:r,operator:"deepStrictEqual",stackStartFn:e})},k.notDeepStrictEqual=function e(t,n,r){if(arguments.length<2)throw new f("actual","expected");void 0===a&&E();s(t,n)&&I({actual:t,expected:n,message:r,operator:"notDeepStrictEqual",stackStartFn:e})},k.strictEqual=function e(t,n,r){if(arguments.length<2)throw new f("actual","expected");w(t,n)||I({actual:t,expected:n,message:r,operator:"strictEqual",stackStartFn:e})},k.notStrictEqual=function e(t,n,r){if(arguments.length<2)throw new f("actual","expected");w(t,n)&&I({actual:t,expected:n,message:r,operator:"notStrictEqual",stackStartFn:e})};var C=function e(t,n,r){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n.forEach((function(e){e in t&&(void 0!==r&&"string"==typeof r[e]&&v(t[e])&&t[e].test(r[e])?i[e]=r[e]:i[e]=t[e])}))};function O(e,t,n,r){if("function"!=typeof t){if(v(t))return t.test(e);if(2===arguments.length)throw new c("expected",["Function","RegExp"],t);if("object"!==o(e)||null===e){var i=new p({actual:e,expected:t,message:n,operator:"deepStrictEqual",stackStartFn:r});throw i.operator=r.name,i}var l=Object.keys(t);if(t instanceof Error)l.push("name","message");else if(0===l.length)throw new d("error",t,"may not be an empty object");return void 0===a&&E(),l.forEach((function(i){"string"==typeof e[i]&&v(t[i])&&t[i].test(e[i])||function(e,t,n,r,i,o){if(!(n in e)||!s(e[n],t[n])){if(!r){var a=new C(e,i),l=new C(t,i,e),u=new p({actual:a,expected:l,operator:"deepStrictEqual",stackStartFn:o});throw u.actual=e,u.expected=t,u.operator=o.name,u}I({actual:e,expected:t,message:r,operator:o.name,stackStartFn:o})}}(e,t,i,n,l,r)})),!0}return void 0!==t.prototype&&e instanceof t||!Error.isPrototypeOf(t)&&!0===t.call({},e)}function R(e){if("function"!=typeof e)throw new c("fn","Function",e);try{e()}catch(e){return e}return _}function A(e){return y(e)||null!==e&&"object"===o(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function P(e){return Promise.resolve().then((function(){var t;if("function"==typeof e){if(!A(t=e()))throw new h("instance of Promise","promiseFn",t)}else{if(!A(e))throw new c("promiseFn",["Function","Promise"],e);t=e}return Promise.resolve().then((function(){return t})).then((function(){return _})).catch((function(e){return e}))}))}function N(e,t,n,r){if("string"==typeof n){if(4===arguments.length)throw new c("error",["Object","Error","Function","RegExp"],n);if("object"===o(t)&&null!==t){if(t.message===n)throw new u("error/message",'The error message "'.concat(t.message,'" is identical to the message.'))}else if(t===n)throw new u("error/message",'The error "'.concat(t,'" is identical to the message.'));r=n,n=void 0}else if(null!=n&&"object"!==o(n)&&"function"!=typeof n)throw new c("error",["Object","Error","Function","RegExp"],n);if(t===_){var i="";n&&n.name&&(i+=" (".concat(n.name,")")),i+=r?": ".concat(r):".";var a="rejects"===e.name?"rejection":"exception";I({actual:void 0,expected:n,operator:e.name,message:"Missing expected ".concat(a).concat(i),stackStartFn:e})}if(n&&!O(t,n,r,e))throw t}function M(e,t,n,r){if(t!==_){if("string"==typeof n&&(r=n,n=void 0),!n||O(t,n)){var i=r?": ".concat(r):".",o="doesNotReject"===e.name?"rejection":"exception";I({actual:t,expected:n,operator:e.name,message:"Got unwanted ".concat(o).concat(i,"\n")+'Actual message: "'.concat(t&&t.message,'"'),stackStartFn:e})}throw t}}function L(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];T.apply(void 0,[L,t.length].concat(t))}k.throws=function e(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];N.apply(void 0,[e,R(t)].concat(r))},k.rejects=function e(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return P(t).then((function(t){return N.apply(void 0,[e,t].concat(r))}))},k.doesNotThrow=function e(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];M.apply(void 0,[e,R(t)].concat(r))},k.doesNotReject=function e(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return P(t).then((function(t){return M.apply(void 0,[e,t].concat(r))}))},k.ifError=function e(t){if(null!=t){var n="ifError got unwanted exception: ";"object"===o(t)&&"string"==typeof t.message?0===t.message.length&&t.constructor?n+=t.constructor.name:n+=t.message:n+=m(t);var r=new p({actual:t,expected:null,operator:"ifError",message:n,stackStartFn:e}),i=t.stack;if("string"==typeof i){var a=i.split("\n");a.shift();for(var s=r.stack.split("\n"),l=0;l<a.length;l++){var u=s.indexOf(a[l]);if(-1!==u){s=s.slice(0,u);break}}r.stack="".concat(s.join("\n"),"\n").concat(a.join("\n"))}throw r}},k.strict=b(L,k,{equal:k.strictEqual,deepEqual:k.deepStrictEqual,notEqual:k.notStrictEqual,notDeepEqual:k.notDeepStrictEqual}),k.strict.strict=k.strict},5961:(e,t,n)=>{"use strict";var r=n(4155);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){var t="function"==typeof Map?new Map:void 0;return l=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return u(e,arguments,d(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,e)},l(e)}function u(e,t,n){return u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&c(i,n.prototype),i},u.apply(null,arguments)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}var f=n(9539).inspect,p=n(2136).codes.ERR_INVALID_ARG_TYPE;function m(e,t,n){return(void 0===n||n>e.length)&&(n=e.length),e.substring(n-t.length,n)===t}var g="",y="",v="",b="",w={deepStrictEqual:"Expected values to be strictly deep-equal:",strictEqual:"Expected values to be strictly equal:",strictEqualObject:'Expected "actual" to be reference-equal to "expected":',deepEqual:"Expected values to be loosely deep-equal:",equal:"Expected values to be loosely equal:",notDeepStrictEqual:'Expected "actual" not to be strictly deep-equal to:',notStrictEqual:'Expected "actual" to be strictly unequal to:',notStrictEqualObject:'Expected "actual" not to be reference-equal to "expected":',notDeepEqual:'Expected "actual" not to be loosely deep-equal to:',notEqual:'Expected "actual" to be loosely unequal to:',notIdentical:"Values identical but not reference-equal:"};function E(e){var t=Object.keys(e),n=Object.create(Object.getPrototypeOf(e));return t.forEach((function(t){n[t]=e[t]})),Object.defineProperty(n,"message",{value:e.message}),n}function S(e){return f(e,{compact:!1,customInspect:!1,depth:1e3,maxArrayLength:1/0,showHidden:!1,breakLength:1/0,showProxy:!1,sorted:!0,getters:!0})}function k(e,t,n){var i="",o="",a=0,s="",l=!1,u=S(e),c=u.split("\n"),d=S(t).split("\n"),f=0,p="";if("strictEqual"===n&&"object"===h(e)&&"object"===h(t)&&null!==e&&null!==t&&(n="strictEqualObject"),1===c.length&&1===d.length&&c[0]!==d[0]){var E=c[0].length+d[0].length;if(E<=10){if(!("object"===h(e)&&null!==e||"object"===h(t)&&null!==t||0===e&&0===t))return"".concat(w[n],"\n\n")+"".concat(c[0]," !== ").concat(d[0],"\n")}else if("strictEqualObject"!==n){if(E<(r.stderr&&r.stderr.isTTY?r.stderr.columns:80)){for(;c[0][f]===d[0][f];)f++;f>2&&(p="\n  ".concat(function(e,t){if(t=Math.floor(t),0==e.length||0==t)return"";var n=e.length*t;for(t=Math.floor(Math.log(t)/Math.log(2));t;)e+=e,t--;return e+e.substring(0,n-e.length)}(" ",f),"^"),f=0)}}}for(var k=c[c.length-1],_=d[d.length-1];k===_&&(f++<2?s="\n  ".concat(k).concat(s):i=k,c.pop(),d.pop(),0!==c.length&&0!==d.length);)k=c[c.length-1],_=d[d.length-1];var I=Math.max(c.length,d.length);if(0===I){var T=u.split("\n");if(T.length>30)for(T[26]="".concat(g,"...").concat(b);T.length>27;)T.pop();return"".concat(w.notIdentical,"\n\n").concat(T.join("\n"),"\n")}f>3&&(s="\n".concat(g,"...").concat(b).concat(s),l=!0),""!==i&&(s="\n  ".concat(i).concat(s),i="");var x=0,C=w[n]+"\n".concat(y,"+ actual").concat(b," ").concat(v,"- expected").concat(b),O=" ".concat(g,"...").concat(b," Lines skipped");for(f=0;f<I;f++){var R=f-a;if(c.length<f+1)R>1&&f>2&&(R>4?(o+="\n".concat(g,"...").concat(b),l=!0):R>3&&(o+="\n  ".concat(d[f-2]),x++),o+="\n  ".concat(d[f-1]),x++),a=f,i+="\n".concat(v,"-").concat(b," ").concat(d[f]),x++;else if(d.length<f+1)R>1&&f>2&&(R>4?(o+="\n".concat(g,"...").concat(b),l=!0):R>3&&(o+="\n  ".concat(c[f-2]),x++),o+="\n  ".concat(c[f-1]),x++),a=f,o+="\n".concat(y,"+").concat(b," ").concat(c[f]),x++;else{var A=d[f],P=c[f],N=P!==A&&(!m(P,",")||P.slice(0,-1)!==A);N&&m(A,",")&&A.slice(0,-1)===P&&(N=!1,P+=","),N?(R>1&&f>2&&(R>4?(o+="\n".concat(g,"...").concat(b),l=!0):R>3&&(o+="\n  ".concat(c[f-2]),x++),o+="\n  ".concat(c[f-1]),x++),a=f,o+="\n".concat(y,"+").concat(b," ").concat(P),i+="\n".concat(v,"-").concat(b," ").concat(A),x+=2):(o+=i,i="",1!==R&&0!==f||(o+="\n  ".concat(P),x++))}if(x>20&&f<I-2)return"".concat(C).concat(O,"\n").concat(o,"\n").concat(g,"...").concat(b).concat(i,"\n")+"".concat(g,"...").concat(b)}return"".concat(C).concat(l?O:"","\n").concat(o).concat(i).concat(s).concat(p)}var _=function(e){function t(e){var n;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),"object"!==h(e)||null===e)throw new p("options","Object",e);var i=e.message,o=e.operator,l=e.stackStartFn,u=e.actual,c=e.expected,f=Error.stackTraceLimit;if(Error.stackTraceLimit=0,null!=i)n=a(this,d(t).call(this,String(i)));else if(r.stderr&&r.stderr.isTTY&&(r.stderr&&r.stderr.getColorDepth&&1!==r.stderr.getColorDepth()?(g="[34m",y="[32m",b="[39m",v="[31m"):(g="",y="",b="",v="")),"object"===h(u)&&null!==u&&"object"===h(c)&&null!==c&&"stack"in u&&u instanceof Error&&"stack"in c&&c instanceof Error&&(u=E(u),c=E(c)),"deepStrictEqual"===o||"strictEqual"===o)n=a(this,d(t).call(this,k(u,c,o)));else if("notDeepStrictEqual"===o||"notStrictEqual"===o){var m=w[o],_=S(u).split("\n");if("notStrictEqual"===o&&"object"===h(u)&&null!==u&&(m=w.notStrictEqualObject),_.length>30)for(_[26]="".concat(g,"...").concat(b);_.length>27;)_.pop();n=1===_.length?a(this,d(t).call(this,"".concat(m," ").concat(_[0]))):a(this,d(t).call(this,"".concat(m,"\n\n").concat(_.join("\n"),"\n")))}else{var I=S(u),T="",x=w[o];"notDeepEqual"===o||"notEqual"===o?(I="".concat(w[o],"\n\n").concat(I)).length>1024&&(I="".concat(I.slice(0,1021),"...")):(T="".concat(S(c)),I.length>512&&(I="".concat(I.slice(0,509),"...")),T.length>512&&(T="".concat(T.slice(0,509),"...")),"deepEqual"===o||"equal"===o?I="".concat(x,"\n\n").concat(I,"\n\nshould equal\n\n"):T=" ".concat(o," ").concat(T)),n=a(this,d(t).call(this,"".concat(I).concat(T)))}return Error.stackTraceLimit=f,n.generatedMessage=!i,Object.defineProperty(s(n),"name",{value:"AssertionError [ERR_ASSERTION]",enumerable:!1,writable:!0,configurable:!0}),n.code="ERR_ASSERTION",n.actual=u,n.expected=c,n.operator=o,Error.captureStackTrace&&Error.captureStackTrace(s(n),l),n.stack,n.name="AssertionError",a(n)}var n,l,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),n=t,l=[{key:"toString",value:function(){return"".concat(this.name," [").concat(this.code,"]: ").concat(this.message)}},{key:f.custom,value:function(e,t){return f(this,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},t,{customInspect:!1,depth:0}))}}],l&&o(n.prototype,l),u&&o(n,u),t}(l(Error));e.exports=_},2136:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}var s,l,u={};function c(e,t,n){n||(n=Error);var r=function(n){function r(n,a,s){var l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),l=i(this,o(r).call(this,function(e,n,r){return"string"==typeof t?t:t(e,n,r)}(n,a,s))),l.code=e,l}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(r,n),r}(n);u[e]=r}function d(e,t){if(Array.isArray(e)){var n=e.length;return e=e.map((function(e){return String(e)})),n>2?"one of ".concat(t," ").concat(e.slice(0,n-1).join(", "),", or ")+e[n-1]:2===n?"one of ".concat(t," ").concat(e[0]," or ").concat(e[1]):"of ".concat(t," ").concat(e[0])}return"of ".concat(t," ").concat(String(e))}c("ERR_AMBIGUOUS_ARGUMENT",'The "%s" argument is ambiguous. %s',TypeError),c("ERR_INVALID_ARG_TYPE",(function(e,t,i){var o,a,l,u;if(void 0===s&&(s=n(9282)),s("string"==typeof e,"'name' must be a string"),"string"==typeof t&&(a="not ",t.substr(!l||l<0?0:+l,a.length)===a)?(o="must not be",t=t.replace(/^not /,"")):o="must be",function(e,t,n){return(void 0===n||n>e.length)&&(n=e.length),e.substring(n-t.length,n)===t}(e," argument"))u="The ".concat(e," ").concat(o," ").concat(d(t,"type"));else{var c=function(e,t,n){return"number"!=typeof n&&(n=0),!(n+t.length>e.length)&&-1!==e.indexOf(t,n)}(e,".")?"property":"argument";u='The "'.concat(e,'" ').concat(c," ").concat(o," ").concat(d(t,"type"))}return u+=". Received type ".concat(r(i))}),TypeError),c("ERR_INVALID_ARG_VALUE",(function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"is invalid";void 0===l&&(l=n(9539));var i=l.inspect(t);return i.length>128&&(i="".concat(i.slice(0,128),"...")),"The argument '".concat(e,"' ").concat(r,". Received ").concat(i)}),TypeError,RangeError),c("ERR_INVALID_RETURN_VALUE",(function(e,t,n){var i;return i=n&&n.constructor&&n.constructor.name?"instance of ".concat(n.constructor.name):"type ".concat(r(n)),"Expected ".concat(e,' to be returned from the "').concat(t,'"')+" function but got ".concat(i,".")}),TypeError),c("ERR_MISSING_ARGS",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];void 0===s&&(s=n(9282)),s(t.length>0,"At least one arg needs to be specified");var i="The ",o=t.length;switch(t=t.map((function(e){return'"'.concat(e,'"')})),o){case 1:i+="".concat(t[0]," argument");break;case 2:i+="".concat(t[0]," and ").concat(t[1]," arguments");break;default:i+=t.slice(0,o-1).join(", "),i+=", and ".concat(t[o-1]," arguments")}return"".concat(i," must be specified")}),TypeError),e.exports.codes=u},9158:(e,t,n)=>{"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var o=void 0!==/a/g.flags,a=function(e){var t=[];return e.forEach((function(e){return t.push(e)})),t},s=function(e){var t=[];return e.forEach((function(e,n){return t.push([n,e])})),t},l=Object.is?Object.is:n(609),u=Object.getOwnPropertySymbols?Object.getOwnPropertySymbols:function(){return[]},c=Number.isNaN?Number.isNaN:n(360);function d(e){return e.call.bind(e)}var h=d(Object.prototype.hasOwnProperty),f=d(Object.prototype.propertyIsEnumerable),p=d(Object.prototype.toString),m=n(9539).types,g=m.isAnyArrayBuffer,y=m.isArrayBufferView,v=m.isDate,b=m.isMap,w=m.isRegExp,E=m.isSet,S=m.isNativeError,k=m.isBoxedPrimitive,_=m.isNumberObject,I=m.isStringObject,T=m.isBooleanObject,x=m.isBigIntObject,C=m.isSymbolObject,O=m.isFloat32Array,R=m.isFloat64Array;function A(e){if(0===e.length||e.length>10)return!0;for(var t=0;t<e.length;t++){var n=e.charCodeAt(t);if(n<48||n>57)return!0}return 10===e.length&&e>=Math.pow(2,32)}function P(e){return Object.keys(e).filter(A).concat(u(e).filter(Object.prototype.propertyIsEnumerable.bind(e)))}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function N(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0}var M=0,L=1,D=2,j=3;function F(e,t,n,r){if(e===t)return 0!==e||(!n||l(e,t));if(n){if("object"!==i(e))return"number"==typeof e&&c(e)&&c(t);if("object"!==i(t)||null===e||null===t)return!1;if(Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1}else{if(null===e||"object"!==i(e))return(null===t||"object"!==i(t))&&e==t;if(null===t||"object"!==i(t))return!1}var a,s,u,d,h=p(e);if(h!==p(t))return!1;if(Array.isArray(e)){if(e.length!==t.length)return!1;var f=P(e),m=P(t);return f.length===m.length&&Z(e,t,n,r,L,f)}if("[object Object]"===h&&(!b(e)&&b(t)||!E(e)&&E(t)))return!1;if(v(e)){if(!v(t)||Date.prototype.getTime.call(e)!==Date.prototype.getTime.call(t))return!1}else if(w(e)){if(!w(t)||(u=e,d=t,!(o?u.source===d.source&&u.flags===d.flags:RegExp.prototype.toString.call(u)===RegExp.prototype.toString.call(d))))return!1}else if(S(e)||e instanceof Error){if(e.message!==t.message||e.name!==t.name)return!1}else{if(y(e)){if(n||!O(e)&&!R(e)){if(!function(e,t){return e.byteLength===t.byteLength&&0===N(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}(e,t))return!1}else if(!function(e,t){if(e.byteLength!==t.byteLength)return!1;for(var n=0;n<e.byteLength;n++)if(e[n]!==t[n])return!1;return!0}(e,t))return!1;var A=P(e),F=P(t);return A.length===F.length&&Z(e,t,n,r,M,A)}if(E(e))return!(!E(t)||e.size!==t.size)&&Z(e,t,n,r,D);if(b(e))return!(!b(t)||e.size!==t.size)&&Z(e,t,n,r,j);if(g(e)){if(s=t,(a=e).byteLength!==s.byteLength||0!==N(new Uint8Array(a),new Uint8Array(s)))return!1}else if(k(e)&&!function(e,t){return _(e)?_(t)&&l(Number.prototype.valueOf.call(e),Number.prototype.valueOf.call(t)):I(e)?I(t)&&String.prototype.valueOf.call(e)===String.prototype.valueOf.call(t):T(e)?T(t)&&Boolean.prototype.valueOf.call(e)===Boolean.prototype.valueOf.call(t):x(e)?x(t)&&BigInt.prototype.valueOf.call(e)===BigInt.prototype.valueOf.call(t):C(t)&&Symbol.prototype.valueOf.call(e)===Symbol.prototype.valueOf.call(t)}(e,t))return!1}return Z(e,t,n,r,M)}function U(e,t){return t.filter((function(t){return f(e,t)}))}function Z(e,t,n,o,l,c){if(5===arguments.length){c=Object.keys(e);var d=Object.keys(t);if(c.length!==d.length)return!1}for(var p=0;p<c.length;p++)if(!h(t,c[p]))return!1;if(n&&5===arguments.length){var m=u(e);if(0!==m.length){var g=0;for(p=0;p<m.length;p++){var y=m[p];if(f(e,y)){if(!f(t,y))return!1;c.push(y),g++}else if(f(t,y))return!1}var v=u(t);if(m.length!==v.length&&U(t,v).length!==g)return!1}else{var b=u(t);if(0!==b.length&&0!==U(t,b).length)return!1}}if(0===c.length&&(l===M||l===L&&0===e.length||0===e.size))return!0;if(void 0===o)o={val1:new Map,val2:new Map,position:0};else{var w=o.val1.get(e);if(void 0!==w){var E=o.val2.get(t);if(void 0!==E)return w===E}o.position++}o.val1.set(e,o.position),o.val2.set(t,o.position);var S=function(e,t,n,o,l,u){var c=0;if(u===D){if(!function(e,t,n,r){for(var o=null,s=a(e),l=0;l<s.length;l++){var u=s[l];if("object"===i(u)&&null!==u)null===o&&(o=new Set),o.add(u);else if(!t.has(u)){if(n)return!1;if(!$(e,t,u))return!1;null===o&&(o=new Set),o.add(u)}}if(null!==o){for(var c=a(t),d=0;d<c.length;d++){var h=c[d];if("object"===i(h)&&null!==h){if(!z(o,h,n,r))return!1}else if(!n&&!e.has(h)&&!z(o,h,n,r))return!1}return 0===o.size}return!0}(e,t,n,l))return!1}else if(u===j){if(!function(e,t,n,o){for(var a=null,l=s(e),u=0;u<l.length;u++){var c=r(l[u],2),d=c[0],h=c[1];if("object"===i(d)&&null!==d)null===a&&(a=new Set),a.add(d);else{var f=t.get(d);if(void 0===f&&!t.has(d)||!F(h,f,n,o)){if(n)return!1;if(!V(e,t,d,h,o))return!1;null===a&&(a=new Set),a.add(d)}}}if(null!==a){for(var p=s(t),m=0;m<p.length;m++){var g=r(p[m],2),y=(d=g[0],g[1]);if("object"===i(d)&&null!==d){if(!W(a,e,d,y,n,o))return!1}else if(!(n||e.has(d)&&F(e.get(d),y,!1,o)||W(a,e,d,y,!1,o)))return!1}return 0===a.size}return!0}(e,t,n,l))return!1}else if(u===L)for(;c<e.length;c++){if(!h(e,c)){if(h(t,c))return!1;for(var d=Object.keys(e);c<d.length;c++){var f=d[c];if(!h(t,f)||!F(e[f],t[f],n,l))return!1}return d.length===Object.keys(t).length}if(!h(t,c)||!F(e[c],t[c],n,l))return!1}for(c=0;c<o.length;c++){var p=o[c];if(!F(e[p],t[p],n,l))return!1}return!0}(e,t,n,c,o,l);return o.val1.delete(e),o.val2.delete(t),S}function z(e,t,n,r){for(var i=a(e),o=0;o<i.length;o++){var s=i[o];if(F(t,s,n,r))return e.delete(s),!0}return!1}function B(e){switch(i(e)){case"undefined":return null;case"object":return;case"symbol":return!1;case"string":e=+e;case"number":if(c(e))return!1}return!0}function $(e,t,n){var r=B(n);return null!=r?r:t.has(r)&&!e.has(r)}function V(e,t,n,r,i){var o=B(n);if(null!=o)return o;var a=t.get(o);return!(void 0===a&&!t.has(o)||!F(r,a,!1,i))&&(!e.has(o)&&F(r,a,!1,i))}function W(e,t,n,r,i,o){for(var s=a(e),l=0;l<s.length;l++){var u=s[l];if(F(n,u,i,o)&&F(r,t.get(u),i,o))return e.delete(u),!0}return!1}e.exports={isDeepEqual:function(e,t){return F(e,t,false)},isDeepStrictEqual:function(e,t){return F(e,t,true)}}},1924:(e,t,n)=>{"use strict";var r=n(210),i=n(5559),o=i(r("String.prototype.indexOf"));e.exports=function(e,t){var n=r(e,!!t);return"function"==typeof n&&o(e,".prototype.")>-1?i(n):n}},5559:(e,t,n)=>{"use strict";var r=n(8612),i=n(210),o=i("%Function.prototype.apply%"),a=i("%Function.prototype.call%"),s=i("%Reflect.apply%",!0)||r.call(a,o),l=i("%Object.getOwnPropertyDescriptor%",!0),u=i("%Object.defineProperty%",!0),c=i("%Math.max%");if(u)try{u({},"a",{value:1})}catch(e){u=null}e.exports=function(e){var t=s(r,a,arguments);l&&u&&(l(t,"length").configurable&&u(t,"length",{value:1+c(0,e.length-(arguments.length-1))}));return t};var d=function(){return s(r,o,arguments)};u?u(e.exports,"apply",{value:d}):e.exports.apply=d},6010:(e,t,n)=>{"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:()=>i});const i=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},5108:(e,t,n)=>{var r=n(9539),i=n(9282);function o(){return(new Date).getTime()}var a,s=Array.prototype.slice,l={};a=void 0!==n.g&&n.g.console?n.g.console:"undefined"!=typeof window&&window.console?window.console:{};for(var u=[[function(){},"log"],[function(){a.log.apply(a,arguments)},"info"],[function(){a.log.apply(a,arguments)},"warn"],[function(){a.warn.apply(a,arguments)},"error"],[function(e){l[e]=o()},"time"],[function(e){var t=l[e];if(!t)throw new Error("No such label: "+e);delete l[e];var n=o()-t;a.log(e+": "+n+"ms")},"timeEnd"],[function(){var e=new Error;e.name="Trace",e.message=r.format.apply(null,arguments),a.error(e.stack)},"trace"],[function(e){a.log(r.inspect(e)+"\n")},"dir"],[function(e){if(!e){var t=s.call(arguments,1);i.ok(!1,r.format.apply(null,t))}},"assert"]],c=0;c<u.length;c++){var d=u[c],h=d[0],f=d[1];a[f]||(a[f]=h)}e.exports=a},4289:(e,t,n)=>{"use strict";var r=n(2215),i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,a=Array.prototype.concat,s=Object.defineProperty,l=n(1044)(),u=s&&l,c=function(e,t,n,r){var i;(!(t in e)||"function"==typeof(i=r)&&"[object Function]"===o.call(i)&&r())&&(u?s(e,t,{configurable:!0,enumerable:!1,value:n,writable:!0}):e[t]=n)},d=function(e,t){var n=arguments.length>2?arguments[2]:{},o=r(t);i&&(o=a.call(o,Object.getOwnPropertySymbols(t)));for(var s=0;s<o.length;s+=1)c(e,o[s],t[o[s]],n[o[s]])};d.supportsDescriptors=!!u,e.exports=d},8091:e=>{"use strict";function t(e,t){if(null==e)throw new TypeError("Cannot convert first argument to object");for(var n=Object(e),r=1;r<arguments.length;r++){var i=arguments[r];if(null!=i)for(var o=Object.keys(Object(i)),a=0,s=o.length;a<s;a++){var l=o[a],u=Object.getOwnPropertyDescriptor(i,l);void 0!==u&&u.enumerable&&(n[l]=i[l])}}return n}e.exports={assign:t,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:t})}}},4029:(e,t,n)=>{"use strict";var r=n(5320),i=Object.prototype.toString,o=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){if(!r(t))throw new TypeError("iterator must be a function");var a;arguments.length>=3&&(a=n),"[object Array]"===i.call(e)?function(e,t,n){for(var r=0,i=e.length;r<i;r++)o.call(e,r)&&(null==n?t(e[r],r,e):t.call(n,e[r],r,e))}(e,t,a):"string"==typeof e?function(e,t,n){for(var r=0,i=e.length;r<i;r++)null==n?t(e.charAt(r),r,e):t.call(n,e.charAt(r),r,e)}(e,t,a):function(e,t,n){for(var r in e)o.call(e,r)&&(null==n?t(e[r],r,e):t.call(n,e[r],r,e))}(e,t,a)}},7648:e=>{"use strict";var t=Array.prototype.slice,n=Object.prototype.toString;e.exports=function(e){var r=this;if("function"!=typeof r||"[object Function]"!==n.call(r))throw new TypeError("Function.prototype.bind called on incompatible "+r);for(var i,o=t.call(arguments,1),a=Math.max(0,r.length-o.length),s=[],l=0;l<a;l++)s.push("$"+l);if(i=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")((function(){if(this instanceof i){var n=r.apply(this,o.concat(t.call(arguments)));return Object(n)===n?n:this}return r.apply(e,o.concat(t.call(arguments)))})),r.prototype){var u=function(){};u.prototype=r.prototype,i.prototype=new u,u.prototype=null}return i}},8612:(e,t,n)=>{"use strict";var r=n(7648);e.exports=Function.prototype.bind||r},210:(e,t,n)=>{"use strict";var r,i=SyntaxError,o=Function,a=TypeError,s=function(e){try{return o('"use strict"; return ('+e+").constructor;")()}catch(e){}},l=Object.getOwnPropertyDescriptor;if(l)try{l({},"")}catch(e){l=null}var u=function(){throw new a},c=l?function(){try{return u}catch(e){try{return l(arguments,"callee").get}catch(e){return u}}}():u,d=n(1405)(),h=Object.getPrototypeOf||function(e){return e.__proto__},f={},p="undefined"==typeof Uint8Array?r:h(Uint8Array),m={"%AggregateError%":"undefined"==typeof AggregateError?r:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?r:ArrayBuffer,"%ArrayIteratorPrototype%":d?h([][Symbol.iterator]()):r,"%AsyncFromSyncIteratorPrototype%":r,"%AsyncFunction%":f,"%AsyncGenerator%":f,"%AsyncGeneratorFunction%":f,"%AsyncIteratorPrototype%":f,"%Atomics%":"undefined"==typeof Atomics?r:Atomics,"%BigInt%":"undefined"==typeof BigInt?r:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?r:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?r:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?r:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?r:FinalizationRegistry,"%Function%":o,"%GeneratorFunction%":f,"%Int8Array%":"undefined"==typeof Int8Array?r:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?r:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?r:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":d?h(h([][Symbol.iterator]())):r,"%JSON%":"object"==typeof JSON?JSON:r,"%Map%":"undefined"==typeof Map?r:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&d?h((new Map)[Symbol.iterator]()):r,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?r:Promise,"%Proxy%":"undefined"==typeof Proxy?r:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?r:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?r:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&d?h((new Set)[Symbol.iterator]()):r,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?r:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":d?h(""[Symbol.iterator]()):r,"%Symbol%":d?Symbol:r,"%SyntaxError%":i,"%ThrowTypeError%":c,"%TypedArray%":p,"%TypeError%":a,"%Uint8Array%":"undefined"==typeof Uint8Array?r:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?r:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?r:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?r:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?r:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?r:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?r:WeakSet},g=function e(t){var n;if("%AsyncFunction%"===t)n=s("async function () {}");else if("%GeneratorFunction%"===t)n=s("function* () {}");else if("%AsyncGeneratorFunction%"===t)n=s("async function* () {}");else if("%AsyncGenerator%"===t){var r=e("%AsyncGeneratorFunction%");r&&(n=r.prototype)}else if("%AsyncIteratorPrototype%"===t){var i=e("%AsyncGenerator%");i&&(n=h(i.prototype))}return m[t]=n,n},y={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},v=n(8612),b=n(7642),w=v.call(Function.call,Array.prototype.concat),E=v.call(Function.apply,Array.prototype.splice),S=v.call(Function.call,String.prototype.replace),k=v.call(Function.call,String.prototype.slice),_=v.call(Function.call,RegExp.prototype.exec),I=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,T=/\\(\\)?/g,x=function(e,t){var n,r=e;if(b(y,r)&&(r="%"+(n=y[r])[0]+"%"),b(m,r)){var o=m[r];if(o===f&&(o=g(r)),void 0===o&&!t)throw new a("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:n,name:r,value:o}}throw new i("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new a("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new a('"allowMissing" argument must be a boolean');if(null===_(/^%?[^%]*%?$/,e))throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=function(e){var t=k(e,0,1),n=k(e,-1);if("%"===t&&"%"!==n)throw new i("invalid intrinsic syntax, expected closing `%`");if("%"===n&&"%"!==t)throw new i("invalid intrinsic syntax, expected opening `%`");var r=[];return S(e,I,(function(e,t,n,i){r[r.length]=n?S(i,T,"$1"):t||e})),r}(e),r=n.length>0?n[0]:"",o=x("%"+r+"%",t),s=o.name,u=o.value,c=!1,d=o.alias;d&&(r=d[0],E(n,w([0,1],d)));for(var h=1,f=!0;h<n.length;h+=1){var p=n[h],g=k(p,0,1),y=k(p,-1);if(('"'===g||"'"===g||"`"===g||'"'===y||"'"===y||"`"===y)&&g!==y)throw new i("property names with quotes must have matching quotes");if("constructor"!==p&&f||(c=!0),b(m,s="%"+(r+="."+p)+"%"))u=m[s];else if(null!=u){if(!(p in u)){if(!t)throw new a("base intrinsic for "+e+" exists, but the property is not available.");return}if(l&&h+1>=n.length){var v=l(u,p);u=(f=!!v)&&"get"in v&&!("originalValue"in v.get)?v.get:u[p]}else f=b(u,p),u=u[p];f&&!c&&(m[s]=u)}}return u}},7296:(e,t,n)=>{"use strict";var r=n(210)("%Object.getOwnPropertyDescriptor%",!0);if(r)try{r([],"length")}catch(e){r=null}e.exports=r},1044:(e,t,n)=>{"use strict";var r=n(210)("%Object.defineProperty%",!0),i=function(){if(r)try{return r({},"a",{value:1}),!0}catch(e){return!1}return!1};i.hasArrayLengthDefineBug=function(){if(!i())return null;try{return 1!==r([],"length",{value:1}).length}catch(e){return!0}},e.exports=i},1405:(e,t,n)=>{"use strict";var r="undefined"!=typeof Symbol&&Symbol,i=n(5419);e.exports=function(){return"function"==typeof r&&("function"==typeof Symbol&&("symbol"==typeof r("foo")&&("symbol"==typeof Symbol("bar")&&i())))}},5419:e=>{"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),n=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(n))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var r=Object.getOwnPropertySymbols(e);if(1!==r.length||r[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(e,t);if(42!==i.value||!0!==i.enumerable)return!1}return!0}},6410:(e,t,n)=>{"use strict";var r=n(5419);e.exports=function(){return r()&&!!Symbol.toStringTag}},7642:(e,t,n)=>{"use strict";var r=n(8612);e.exports=r.call(Function.call,Object.prototype.hasOwnProperty)},8679:(e,t,n)=>{"use strict";var r=n(9864),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return r.isMemo(e)?a:s[e.$$typeof]||i}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=a;var u=Object.defineProperty,c=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(p){var i=f(n);i&&i!==p&&e(t,i,r)}var a=c(n);d&&(a=a.concat(d(n)));for(var s=l(t),m=l(n),g=0;g<a.length;++g){var y=a[g];if(!(o[y]||r&&r[y]||m&&m[y]||s&&s[y])){var v=h(n,y);try{u(t,y,v)}catch(e){}}}}return t}},5717:e=>{"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}},2584:(e,t,n)=>{"use strict";var r=n(6410)(),i=n(1924)("Object.prototype.toString"),o=function(e){return!(r&&e&&"object"==typeof e&&Symbol.toStringTag in e)&&"[object Arguments]"===i(e)},a=function(e){return!!o(e)||null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Array]"!==i(e)&&"[object Function]"===i(e.callee)},s=function(){return o(arguments)}();o.isLegacyArguments=a,e.exports=s?o:a},5320:e=>{"use strict";var t,n,r=Function.prototype.toString,i="object"==typeof Reflect&&null!==Reflect&&Reflect.apply;if("function"==typeof i&&"function"==typeof Object.defineProperty)try{t=Object.defineProperty({},"length",{get:function(){throw n}}),n={},i((function(){throw 42}),null,t)}catch(e){e!==n&&(i=null)}else i=null;var o=/^\s*class\b/,a=function(e){try{var t=r.call(e);return o.test(t)}catch(e){return!1}},s=function(e){try{return!a(e)&&(r.call(e),!0)}catch(e){return!1}},l=Object.prototype.toString,u="function"==typeof Symbol&&!!Symbol.toStringTag,c=!(0 in[,]),d=function(){return!1};if("object"==typeof document){var h=document.all;l.call(h)===l.call(document.all)&&(d=function(e){if((c||!e)&&(void 0===e||"object"==typeof e))try{var t=l.call(e);return("[object HTMLAllCollection]"===t||"[object HTML document.all class]"===t||"[object HTMLCollection]"===t||"[object Object]"===t)&&null==e("")}catch(e){}return!1})}e.exports=i?function(e){if(d(e))return!0;if(!e)return!1;if("function"!=typeof e&&"object"!=typeof e)return!1;try{i(e,null,t)}catch(e){if(e!==n)return!1}return!a(e)&&s(e)}:function(e){if(d(e))return!0;if(!e)return!1;if("function"!=typeof e&&"object"!=typeof e)return!1;if(u)return s(e);if(a(e))return!1;var t=l.call(e);return!("[object Function]"!==t&&"[object GeneratorFunction]"!==t&&!/^\[object HTML/.test(t))&&s(e)}},8662:(e,t,n)=>{"use strict";var r,i=Object.prototype.toString,o=Function.prototype.toString,a=/^\s*(?:function)?\*/,s=n(6410)(),l=Object.getPrototypeOf;e.exports=function(e){if("function"!=typeof e)return!1;if(a.test(o.call(e)))return!0;if(!s)return"[object GeneratorFunction]"===i.call(e);if(!l)return!1;if(void 0===r){var t=function(){if(!s)return!1;try{return Function("return function*() {}")()}catch(e){}}();r=!!t&&l(t)}return l(e)===r}},8611:e=>{"use strict";e.exports=function(e){return e!=e}},360:(e,t,n)=>{"use strict";var r=n(5559),i=n(4289),o=n(8611),a=n(9415),s=n(3194),l=r(a(),Number);i(l,{getPolyfill:a,implementation:o,shim:s}),e.exports=l},9415:(e,t,n)=>{"use strict";var r=n(8611);e.exports=function(){return Number.isNaN&&Number.isNaN(NaN)&&!Number.isNaN("a")?Number.isNaN:r}},3194:(e,t,n)=>{"use strict";var r=n(4289),i=n(9415);e.exports=function(){var e=i();return r(Number,{isNaN:e},{isNaN:function(){return Number.isNaN!==e}}),e}},5692:(e,t,n)=>{"use strict";var r=n(6430);e.exports=function(e){return!!r(e)}},7418:e=>{"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var u in o=Object(arguments[l]))n.call(o,u)&&(s[u]=o[u]);if(t){a=t(o);for(var c=0;c<a.length;c++)r.call(o,a[c])&&(s[a[c]]=o[a[c]])}}return s}},4244:e=>{"use strict";var t=function(e){return e!=e};e.exports=function(e,n){return 0===e&&0===n?1/e==1/n:e===n||!(!t(e)||!t(n))}},609:(e,t,n)=>{"use strict";var r=n(4289),i=n(5559),o=n(4244),a=n(5624),s=n(2281),l=i(a(),Object);r(l,{getPolyfill:a,implementation:o,shim:s}),e.exports=l},5624:(e,t,n)=>{"use strict";var r=n(4244);e.exports=function(){return"function"==typeof Object.is?Object.is:r}},2281:(e,t,n)=>{"use strict";var r=n(5624),i=n(4289);e.exports=function(){var e=r();return i(Object,{is:e},{is:function(){return Object.is!==e}}),e}},8987:(e,t,n)=>{"use strict";var r;if(!Object.keys){var i=Object.prototype.hasOwnProperty,o=Object.prototype.toString,a=n(1414),s=Object.prototype.propertyIsEnumerable,l=!s.call({toString:null},"toString"),u=s.call((function(){}),"prototype"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],d=function(e){var t=e.constructor;return t&&t.prototype===e},h={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},f=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!h["$"+e]&&i.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{d(window[e])}catch(e){return!0}}catch(e){return!0}return!1}();r=function(e){var t=null!==e&&"object"==typeof e,n="[object Function]"===o.call(e),r=a(e),s=t&&"[object String]"===o.call(e),h=[];if(!t&&!n&&!r)throw new TypeError("Object.keys called on a non-object");var p=u&&n;if(s&&e.length>0&&!i.call(e,0))for(var m=0;m<e.length;++m)h.push(String(m));if(r&&e.length>0)for(var g=0;g<e.length;++g)h.push(String(g));else for(var y in e)p&&"prototype"===y||!i.call(e,y)||h.push(String(y));if(l)for(var v=function(e){if("undefined"==typeof window||!f)return d(e);try{return d(e)}catch(e){return!1}}(e),b=0;b<c.length;++b)v&&"constructor"===c[b]||!i.call(e,c[b])||h.push(c[b]);return h}}e.exports=r},2215:(e,t,n)=>{"use strict";var r=Array.prototype.slice,i=n(1414),o=Object.keys,a=o?function(e){return o(e)}:n(8987),s=Object.keys;a.shim=function(){if(Object.keys){var e=function(){var e=Object.keys(arguments);return e&&e.length===arguments.length}(1,2);e||(Object.keys=function(e){return i(e)?s(r.call(e)):s(e)})}else Object.keys=a;return Object.keys||a},e.exports=a},1414:e=>{"use strict";var t=Object.prototype.toString;e.exports=function(e){var n=t.call(e),r="[object Arguments]"===n;return r||(r="[object Array]"!==n&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===t.call(e.callee)),r}},4155:e=>{var t,n,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s,l=[],u=!1,c=-1;function d(){u&&s&&(u=!1,s.length?l=s.concat(l):c=-1,l.length&&h())}function h(){if(!u){var e=a(d);u=!0;for(var t=l.length;t;){for(s=l,l=[];++c<t;)s&&s[c].run();c=-1,t=l.length}s=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||a(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},9921:(e,t)=>{"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case d:case o:case s:case a:case f:return e;default:switch(e=e&&e.$$typeof){case u:case h:case g:case m:case l:return e;default:return t}}case i:return t}}}function S(e){return E(e)===d}t.AsyncMode=c,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=l,t.Element=r,t.ForwardRef=h,t.Fragment=o,t.Lazy=g,t.Memo=m,t.Portal=i,t.Profiler=s,t.StrictMode=a,t.Suspense=f,t.isAsyncMode=function(e){return S(e)||E(e)===c},t.isConcurrentMode=S,t.isContextConsumer=function(e){return E(e)===u},t.isContextProvider=function(e){return E(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return E(e)===h},t.isFragment=function(e){return E(e)===o},t.isLazy=function(e){return E(e)===g},t.isMemo=function(e){return E(e)===m},t.isPortal=function(e){return E(e)===i},t.isProfiler=function(e){return E(e)===s},t.isStrictMode=function(e){return E(e)===a},t.isSuspense=function(e){return E(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===s||e===a||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===u||e.$$typeof===h||e.$$typeof===v||e.$$typeof===b||e.$$typeof===w||e.$$typeof===y)},t.typeOf=E},9864:(e,t,n)=>{"use strict";e.exports=n(9921)},5251:(e,t,n)=>{"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */n(7418);var r=n(7294),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),t.Fragment=o("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:c,props:o,_owner:a.current}}t.jsx=u,t.jsxs=u},2408:(e,t,n)=>{"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7418),i=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,s=60110,l=60112;t.Suspense=60113;var u=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;i=d("react.element"),o=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),a=d("react.provider"),s=d("react.context"),l=d("react.forward_ref"),t.Suspense=d("react.suspense"),u=d("react.memo"),c=d("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function y(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var b=v.prototype=new y;b.constructor=v,r(b,g.prototype),b.isPureReactComponent=!0;var w={current:null},E=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,o={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)E.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:w.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var I=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,n,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case o:l=!0}}if(l)return a=a(l=e),e=""===r?"."+T(l,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(I,"$&/")+"/"),x(a,t,n,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(I,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var c=r+T(s=e[u],u);l+=x(s,t,n,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=x(s=s.value,t,n,c=r+T(s,u++),a);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function C(e,t,n){if(null==e)return e;var r=[],i=0;return x(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function O(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function A(){var e=R.current;if(null===e)throw Error(f(321));return e}var P={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(f(143));return e}},t.Component=g,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,n){if(null==e)throw Error(f(267,e));var o=r({},e.props),a=e.key,s=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,l=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)E.call(t,c)&&!S.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){u=Array(c);for(var d=0;d<c;d++)u[d]=arguments[d+2];o.children=u}return{$$typeof:i,type:e.type,key:a,ref:s,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return A().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,n){return A().useReducer(e,t,n)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="17.0.2"},7294:(e,t,n)=>{"use strict";e.exports=n(2408)},5893:(e,t,n)=>{"use strict";e.exports=n(5251)},53:(e,t,n)=>{"use strict";var r,i,o,a,s=n(5108);
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */if("object"==typeof performance&&"function"==typeof performance.now){var l=performance;t.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();t.unstable_now=function(){return u.now()-c}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var d=null,h=null,f=function(){if(null!==d)try{var e=t.unstable_now();d(!0,e),d=null}catch(e){throw setTimeout(f,0),e}};r=function(e){null!==d?setTimeout(r,0,e):(d=e,setTimeout(f,0))},i=function(e,t){h=setTimeout(e,t)},o=function(){clearTimeout(h)},t.unstable_shouldYield=function(){return!1},a=t.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,m=window.clearTimeout;if(void 0!==s){var g=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&s.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof g&&s.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,v=null,b=-1,w=5,E=0;t.unstable_shouldYield=function(){return t.unstable_now()>=E},a=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?s.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<e?Math.floor(1e3/e):5};var S=new MessageChannel,k=S.port2;S.port1.onmessage=function(){if(null!==v){var e=t.unstable_now();E=e+w;try{v(!0,e)?k.postMessage(null):(y=!1,v=null)}catch(e){throw k.postMessage(null),e}}else y=!1},r=function(e){v=e,y||(y=!0,k.postMessage(null))},i=function(e,n){b=p((function(){e(t.unstable_now())}),n)},o=function(){m(b),b=-1}}function _(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,i=e[r];if(!(void 0!==i&&0<x(i,t)))break e;e[r]=t,e[n]=i,n=r}}function I(e){return void 0===(e=e[0])?null:e}function T(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length;r<i;){var o=2*(r+1)-1,a=e[o],s=o+1,l=e[s];if(void 0!==a&&0>x(a,n))void 0!==l&&0>x(l,a)?(e[r]=l,e[s]=n,r=s):(e[r]=a,e[o]=n,r=o);else{if(!(void 0!==l&&0>x(l,n)))break e;e[r]=l,e[s]=n,r=s}}}return t}return null}function x(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var C=[],O=[],R=1,A=null,P=3,N=!1,M=!1,L=!1;function D(e){for(var t=I(O);null!==t;){if(null===t.callback)T(O);else{if(!(t.startTime<=e))break;T(O),t.sortIndex=t.expirationTime,_(C,t)}t=I(O)}}function j(e){if(L=!1,D(e),!M)if(null!==I(C))M=!0,r(F);else{var t=I(O);null!==t&&i(j,t.startTime-e)}}function F(e,n){M=!1,L&&(L=!1,o()),N=!0;var r=P;try{for(D(n),A=I(C);null!==A&&(!(A.expirationTime>n)||e&&!t.unstable_shouldYield());){var a=A.callback;if("function"==typeof a){A.callback=null,P=A.priorityLevel;var s=a(A.expirationTime<=n);n=t.unstable_now(),"function"==typeof s?A.callback=s:A===I(C)&&T(C),D(n)}else T(C);A=I(C)}if(null!==A)var l=!0;else{var u=I(O);null!==u&&i(j,u.startTime-n),l=!1}return l}finally{A=null,P=r,N=!1}}var U=a;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){M||N||(M=!0,r(F))},t.unstable_getCurrentPriorityLevel=function(){return P},t.unstable_getFirstCallbackNode=function(){return I(C)},t.unstable_next=function(e){switch(P){case 1:case 2:case 3:var t=3;break;default:t=P}var n=P;P=t;try{return e()}finally{P=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=U,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=P;P=e;try{return t()}finally{P=n}},t.unstable_scheduleCallback=function(e,n,a){var s=t.unstable_now();switch("object"==typeof a&&null!==a?a="number"==typeof(a=a.delay)&&0<a?s+a:s:a=s,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:R++,callback:n,priorityLevel:e,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>s?(e.sortIndex=a,_(O,e),null===I(C)&&e===I(O)&&(L?o():L=!0,i(j,a-s))):(e.sortIndex=l,_(C,e),M||N||(M=!0,r(F))),e},t.unstable_wrapCallback=function(e){var t=P;return function(){var n=P;P=t;try{return e.apply(this,arguments)}finally{P=n}}}},3840:(e,t,n)=>{"use strict";e.exports=n(53)},384:e=>{e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},5955:(e,t,n)=>{"use strict";var r=n(2584),i=n(8662),o=n(6430),a=n(5692);function s(e){return e.call.bind(e)}var l="undefined"!=typeof BigInt,u="undefined"!=typeof Symbol,c=s(Object.prototype.toString),d=s(Number.prototype.valueOf),h=s(String.prototype.valueOf),f=s(Boolean.prototype.valueOf);if(l)var p=s(BigInt.prototype.valueOf);if(u)var m=s(Symbol.prototype.valueOf);function g(e,t){if("object"!=typeof e)return!1;try{return t(e),!0}catch(e){return!1}}function y(e){return"[object Map]"===c(e)}function v(e){return"[object Set]"===c(e)}function b(e){return"[object WeakMap]"===c(e)}function w(e){return"[object WeakSet]"===c(e)}function E(e){return"[object ArrayBuffer]"===c(e)}function S(e){return"undefined"!=typeof ArrayBuffer&&(E.working?E(e):e instanceof ArrayBuffer)}function k(e){return"[object DataView]"===c(e)}function _(e){return"undefined"!=typeof DataView&&(k.working?k(e):e instanceof DataView)}t.isArgumentsObject=r,t.isGeneratorFunction=i,t.isTypedArray=a,t.isPromise=function(e){return"undefined"!=typeof Promise&&e instanceof Promise||null!==e&&"object"==typeof e&&"function"==typeof e.then&&"function"==typeof e.catch},t.isArrayBufferView=function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):a(e)||_(e)},t.isUint8Array=function(e){return"Uint8Array"===o(e)},t.isUint8ClampedArray=function(e){return"Uint8ClampedArray"===o(e)},t.isUint16Array=function(e){return"Uint16Array"===o(e)},t.isUint32Array=function(e){return"Uint32Array"===o(e)},t.isInt8Array=function(e){return"Int8Array"===o(e)},t.isInt16Array=function(e){return"Int16Array"===o(e)},t.isInt32Array=function(e){return"Int32Array"===o(e)},t.isFloat32Array=function(e){return"Float32Array"===o(e)},t.isFloat64Array=function(e){return"Float64Array"===o(e)},t.isBigInt64Array=function(e){return"BigInt64Array"===o(e)},t.isBigUint64Array=function(e){return"BigUint64Array"===o(e)},y.working="undefined"!=typeof Map&&y(new Map),t.isMap=function(e){return"undefined"!=typeof Map&&(y.working?y(e):e instanceof Map)},v.working="undefined"!=typeof Set&&v(new Set),t.isSet=function(e){return"undefined"!=typeof Set&&(v.working?v(e):e instanceof Set)},b.working="undefined"!=typeof WeakMap&&b(new WeakMap),t.isWeakMap=function(e){return"undefined"!=typeof WeakMap&&(b.working?b(e):e instanceof WeakMap)},w.working="undefined"!=typeof WeakSet&&w(new WeakSet),t.isWeakSet=function(e){return w(e)},E.working="undefined"!=typeof ArrayBuffer&&E(new ArrayBuffer),t.isArrayBuffer=S,k.working="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView&&k(new DataView(new ArrayBuffer(1),0,1)),t.isDataView=_;var I="undefined"!=typeof SharedArrayBuffer?SharedArrayBuffer:void 0;function T(e){return"[object SharedArrayBuffer]"===c(e)}function x(e){return void 0!==I&&(void 0===T.working&&(T.working=T(new I)),T.working?T(e):e instanceof I)}function C(e){return g(e,d)}function O(e){return g(e,h)}function R(e){return g(e,f)}function A(e){return l&&g(e,p)}function P(e){return u&&g(e,m)}t.isSharedArrayBuffer=x,t.isAsyncFunction=function(e){return"[object AsyncFunction]"===c(e)},t.isMapIterator=function(e){return"[object Map Iterator]"===c(e)},t.isSetIterator=function(e){return"[object Set Iterator]"===c(e)},t.isGeneratorObject=function(e){return"[object Generator]"===c(e)},t.isWebAssemblyCompiledModule=function(e){return"[object WebAssembly.Module]"===c(e)},t.isNumberObject=C,t.isStringObject=O,t.isBooleanObject=R,t.isBigIntObject=A,t.isSymbolObject=P,t.isBoxedPrimitive=function(e){return C(e)||O(e)||R(e)||A(e)||P(e)},t.isAnyArrayBuffer=function(e){return"undefined"!=typeof Uint8Array&&(S(e)||x(e))},["isProxy","isExternal","isModuleNamespaceObject"].forEach((function(e){Object.defineProperty(t,e,{enumerable:!1,value:function(){throw new Error(e+" is not supported in userland")}})}))},9539:(e,t,n)=>{var r=n(4155),i=n(5108),o=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},a=/%[sdj%]/g;t.format=function(e){if(!w(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,o=String(e).replace(a,(function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}})),s=r[n];n<i;s=r[++n])v(s)||!k(s)?o+=" "+s:o+=" "+c(s);return o},t.deprecate=function(e,n){if(void 0!==r&&!0===r.noDeprecation)return e;if(void 0===r)return function(){return t.deprecate(e,n).apply(this,arguments)};var o=!1;return function(){if(!o){if(r.throwDeprecation)throw new Error(n);r.traceDeprecation?i.trace(n):i.error(n),o=!0}return e.apply(this,arguments)}};var s={},l=/^$/;if(r.env.NODE_DEBUG){var u=r.env.NODE_DEBUG;u=u.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase(),l=new RegExp("^"+u+"$","i")}function c(e,n){var r={seen:[],stylize:h};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),y(n)?r.showHidden=n:n&&t._extend(r,n),E(r.showHidden)&&(r.showHidden=!1),E(r.depth)&&(r.depth=2),E(r.colors)&&(r.colors=!1),E(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=d),f(r,e,r.depth)}function d(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function h(e,t){return e}function f(e,n,r){if(e.customInspect&&n&&T(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e);return w(i)||(i=f(e,i,r)),i}var o=function(e,t){if(E(t))return e.stylize("undefined","undefined");if(w(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(b(t))return e.stylize(""+t,"number");if(y(t))return e.stylize(""+t,"boolean");if(v(t))return e.stylize("null","null")}(e,n);if(o)return o;var a=Object.keys(n),s=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),I(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return p(n);if(0===a.length){if(T(n)){var l=n.name?": "+n.name:"";return e.stylize("[Function"+l+"]","special")}if(S(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(_(n))return e.stylize(Date.prototype.toString.call(n),"date");if(I(n))return p(n)}var u,c="",d=!1,h=["{","}"];(g(n)&&(d=!0,h=["[","]"]),T(n))&&(c=" [Function"+(n.name?": "+n.name:"")+"]");return S(n)&&(c=" "+RegExp.prototype.toString.call(n)),_(n)&&(c=" "+Date.prototype.toUTCString.call(n)),I(n)&&(c=" "+p(n)),0!==a.length||d&&0!=n.length?r<0?S(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),u=d?function(e,t,n,r,i){for(var o=[],a=0,s=t.length;a<s;++a)R(t,String(a))?o.push(m(e,t,n,r,String(a),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(m(e,t,n,r,i,!0))})),o}(e,n,r,s,a):a.map((function(t){return m(e,n,r,s,t,d)})),e.seen.pop(),function(e,t,n){var r=e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0);if(r>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(u,c,h)):h[0]+c+h[1]}function p(e){return"["+Error.prototype.toString.call(e)+"]"}function m(e,t,n,r,i,o){var a,s,l;if((l=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?s=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(s=e.stylize("[Setter]","special")),R(r,i)||(a="["+i+"]"),s||(e.seen.indexOf(l.value)<0?(s=v(n)?f(e,l.value,null):f(e,l.value,n-1)).indexOf("\n")>-1&&(s=o?s.split("\n").map((function(e){return"  "+e})).join("\n").slice(2):"\n"+s.split("\n").map((function(e){return"   "+e})).join("\n")):s=e.stylize("[Circular]","special")),E(a)){if(o&&i.match(/^\d+$/))return s;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.slice(1,-1),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+s}function g(e){return Array.isArray(e)}function y(e){return"boolean"==typeof e}function v(e){return null===e}function b(e){return"number"==typeof e}function w(e){return"string"==typeof e}function E(e){return void 0===e}function S(e){return k(e)&&"[object RegExp]"===x(e)}function k(e){return"object"==typeof e&&null!==e}function _(e){return k(e)&&"[object Date]"===x(e)}function I(e){return k(e)&&("[object Error]"===x(e)||e instanceof Error)}function T(e){return"function"==typeof e}function x(e){return Object.prototype.toString.call(e)}function C(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(e=e.toUpperCase(),!s[e])if(l.test(e)){var n=r.pid;s[e]=function(){var r=t.format.apply(t,arguments);i.error("%s %d: %s",e,n,r)}}else s[e]=function(){};return s[e]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.types=n(5955),t.isArray=g,t.isBoolean=y,t.isNull=v,t.isNullOrUndefined=function(e){return null==e},t.isNumber=b,t.isString=w,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=E,t.isRegExp=S,t.types.isRegExp=S,t.isObject=k,t.isDate=_,t.types.isDate=_,t.isError=I,t.types.isNativeError=I,t.isFunction=T,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(384);var O=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function R(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){var e,n;i.log("%s - %s",(e=new Date,n=[C(e.getHours()),C(e.getMinutes()),C(e.getSeconds())].join(":"),[e.getDate(),O[e.getMonth()],n].join(" ")),t.format.apply(t,arguments))},t.inherits=n(5717),t._extend=function(e,t){if(!t||!k(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var A="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function P(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(A&&e[A]){var t;if("function"!=typeof(t=e[A]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,A,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise((function(e,r){t=e,n=r})),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push((function(e,r){e?n(e):t(r)}));try{e.apply(this,i)}catch(e){n(e)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),A&&Object.defineProperty(t,A,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,o(e))},t.promisify.custom=A,t.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function t(){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);var i=t.pop();if("function"!=typeof i)throw new TypeError("The last argument must be of type Function");var o=this,a=function(){return i.apply(o,arguments)};e.apply(this,t).then((function(e){r.nextTick(a.bind(null,null,e))}),(function(e){r.nextTick(P.bind(null,e,a))}))}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),Object.defineProperties(t,o(e)),t}},6430:(e,t,n)=>{"use strict";var r=n(4029),i=n(3083),o=n(5559),a=n(1924),s=n(7296),l=a("Object.prototype.toString"),u=n(6410)(),c="undefined"==typeof globalThis?n.g:globalThis,d=i(),h=a("String.prototype.slice"),f=Object.getPrototypeOf,p=a("Array.prototype.indexOf",!0)||function(e,t){for(var n=0;n<e.length;n+=1)if(e[n]===t)return n;return-1},m={__proto__:null};r(d,u&&s&&f?function(e){var t=new c[e];if(Symbol.toStringTag in t){var n=f(t),r=s(n,Symbol.toStringTag);if(!r){var i=f(n);r=s(i,Symbol.toStringTag)}m["$"+e]=o(r.get)}}:function(e){var t=new c[e];m["$"+e]=o(t.slice)});e.exports=function(e){if(!e||"object"!=typeof e)return!1;if(!u){var t=h(l(e),8,-1);return p(d,t)>-1?t:"Object"===t&&function(e){var t=!1;return r(m,(function(n,r){if(!t)try{n(e),t=h(r,1)}catch(e){}})),t}(e)}return s?function(e){var t=!1;return r(m,(function(n,r){if(!t)try{"$"+n(e)===r&&(t=h(r,1))}catch(e){}})),t}(e):null}},4836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},3083:(e,t,n)=>{"use strict";var r=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],i="undefined"==typeof globalThis?n.g:globalThis;e.exports=function(){for(var e=[],t=0;t<r.length;t++)"function"==typeof i[r[t]]&&(e[e.length]=r[t]);return e}},7462:(e,t,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:()=>r})},3366:(e,t,n)=>{"use strict";function r(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:()=>r})}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,i),o.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);i.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,i.d(o,a),o},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e,t=i(7294),n=i.t(t,2),r=i(9060),o=i(5108);
/**
 * @remix-run/router v1.0.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const s="popstate";function l(e){return{usr:e.state,key:e.key}}function u(e,t,n,r){return void 0===n&&(n=null),a({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?d(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function c(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function d(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function h(e){let t="undefined"!=typeof window&&void 0!==window.location&&"null"!==window.location.origin?window.location.origin:"unknown://unknown",n="string"==typeof e?e:c(e);return new URL(n,t)}function f(t,n,r,i){void 0===i&&(i={});let{window:o=document.defaultView,v5Compat:a=!1}=i,d=o.history,f=e.Pop,p=null;function m(){f=e.Pop,p&&p({action:f,location:g.location})}let g={get action(){return f},get location(){return t(o,d)},listen(e){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(s,m),p=e,()=>{o.removeEventListener(s,m),p=null}},createHref:e=>n(o,e),encodeLocation(e){let t=h("string"==typeof e?e:c(e));return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){f=e.Push;let i=u(g.location,t,n);r&&r(i,t);let s=l(i),c=g.createHref(i);try{d.pushState(s,"",c)}catch(e){o.location.assign(c)}a&&p&&p({action:f,location:g.location})},replace:function(t,n){f=e.Replace;let i=u(g.location,t,n);r&&r(i,t);let o=l(i),s=g.createHref(i);d.replaceState(o,"",s),a&&p&&p({action:f,location:g.location})},go:e=>d.go(e)};return g}var p;function m(e,t,n){void 0===n&&(n="/");let r=C(("string"==typeof t?d(t):t).pathname||"/",n);if(null==r)return null;let i=g(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let o=null;for(let e=0;null==o&&e<i.length;++e)o=I(i[e],x(r));return o}function g(e,t,n,r){return void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r=""),e.forEach(((e,i)=>{let o={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(O(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let a=A([r,o.relativePath]),s=n.concat(o);e.children&&e.children.length>0&&(O(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+a+'".'),g(e.children,t,s,a)),(null!=e.path||e.index)&&t.push({path:a,score:_(a,e.index),routesMeta:s})})),t}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(p||(p={}));const y=/^:\w+$/,v=3,b=2,w=1,E=10,S=-2,k=e=>"*"===e;function _(e,t){let n=e.split("/"),r=n.length;return n.some(k)&&(r+=S),t&&(r+=b),n.filter((e=>!k(e))).reduce(((e,t)=>e+(y.test(t)?v:""===t?w:E)),r)}function I(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let e=0;e<n.length;++e){let a=n[e],s=e===n.length-1,l="/"===i?t:t.slice(i.length)||"/",u=T({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},l);if(!u)return null;Object.assign(r,u.params);let c=a.route;o.push({params:r,pathname:A([i,u.pathname]),pathnameBase:P(A([i,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(i=A([i,u.pathnameBase]))}return o}function T(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);R("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(r.push(t),"([^\\/]+)")));e.endsWith("*")?(r.push("*"),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=s[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return R(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(s[n]||"",t),e}),{}),pathname:o,pathnameBase:a,pattern:e}}function x(e){try{return decodeURI(e)}catch(t){return R(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function C(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function O(e,t){if(!1===e||null==e)throw new Error(t)}function R(e,t){if(!e){void 0!==o&&o.warn(t);try{throw new Error(t)}catch(e){}}}const A=e=>e.join("/").replace(/\/\/+/g,"/"),P=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");class N extends Error{}class M{constructor(e,t,n,r){void 0===r&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function L(e){return e instanceof M}const D=["post","put","patch","delete"],j=(new Set(D),["get",...D]);new Set(j),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;var F=i(5108);
/**
 * React Router v6.4.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}const Z="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:z,useEffect:B,useLayoutEffect:$,useDebugValue:V}=n;function W(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!Z(n,e)}catch(e){return!0}}"undefined"==typeof window||void 0===window.document||window.document.createElement;const H=t.createContext(null);const q=t.createContext(null);const K=t.createContext(null);const G=t.createContext(null);const X=t.createContext(null);const J=t.createContext({outlet:null,matches:[]});const Y=t.createContext(null);function Q(){return null!=t.useContext(X)}function ee(){return Q()||O(!1),t.useContext(X).location}function te(){let e=function(){var e;let n=t.useContext(Y),r=se(ae.UseRouteError),i=t.useContext(J),o=i.matches[i.matches.length-1];if(n)return n;return i||O(!1),!o.route.id&&O(!1),null==(e=r.errors)?void 0:e[o.route.id]}(),n=L(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unhandled Thrown Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:o},r):null,t.createElement("p",null,"💿 Hey developer 👋"),t.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",t.createElement("code",{style:a},"errorElement")," props on ",t.createElement("code",{style:a},"<Route>")))}class ne extends t.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){F.error("React Router caught the following error during render",e,t)}render(){return this.state.error?t.createElement(Y.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function re(e){let{routeContext:n,match:r,children:i}=e,o=t.useContext(H);return o&&r.route.errorElement&&(o._deepestRenderedBoundaryId=r.route.id),t.createElement(J.Provider,{value:n},i)}function ie(e,n,r){if(void 0===n&&(n=[]),null==e){if(null==r||!r.errors)return null;e=r.matches}let i=e,o=null==r?void 0:r.errors;if(null!=o){let e=i.findIndex((e=>e.route.id&&(null==o?void 0:o[e.route.id])));e>=0||O(!1),i=i.slice(0,Math.min(i.length,e+1))}return i.reduceRight(((e,a,s)=>{let l=a.route.id?null==o?void 0:o[a.route.id]:null,u=r?a.route.errorElement||t.createElement(te,null):null,c=()=>t.createElement(re,{match:a,routeContext:{outlet:e,matches:n.concat(i.slice(0,s+1))}},l?u:void 0!==a.route.element?a.route.element:e);return r&&(a.route.errorElement||0===s)?t.createElement(ne,{location:r.location,component:u,error:l,children:c()}):c()}),null)}var oe,ae;function se(e){let n=t.useContext(K);return n||O(!1),n}!function(e){e.UseRevalidator="useRevalidator"}(oe||(oe={})),function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(ae||(ae={}));function le(e){O(!1)}function ue(n){let{basename:r="/",children:i=null,location:o,navigationType:a=e.Pop,navigator:s,static:l=!1}=n;Q()&&O(!1);let u=r.replace(/^\/*/,"/"),c=t.useMemo((()=>({basename:u,navigator:s,static:l})),[u,s,l]);"string"==typeof o&&(o=d(o));let{pathname:h="/",search:f="",hash:p="",state:m=null,key:g="default"}=o,y=t.useMemo((()=>{let e=C(h,u);return null==e?null:{pathname:e,search:f,hash:p,state:m,key:g}}),[u,h,f,p,m,g]);return null==y?null:t.createElement(G.Provider,{value:c},t.createElement(X.Provider,{children:i,value:{location:y,navigationType:a}}))}function ce(n){let{children:r,location:i}=n,o=t.useContext(q);return function(n,r){Q()||O(!1);let{navigator:i}=t.useContext(G),o=t.useContext(K),{matches:a}=t.useContext(J),s=a[a.length-1],l=s?s.params:{},u=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let c,h=ee();if(r){var f;let e="string"==typeof r?d(r):r;"/"===u||(null==(f=e.pathname)?void 0:f.startsWith(u))||O(!1),c=e}else c=h;let p=c.pathname||"/",g=m(n,{pathname:"/"===u?p:p.slice(u.length)||"/"}),y=ie(g&&g.map((e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:A([u,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?u:A([u,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),a,o||void 0);return r&&y?t.createElement(X.Provider,{value:{location:U({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:e.Pop}},y):y}(o&&!r?o.router.routes:fe(r),i)}var de;!function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(de||(de={}));new Promise((()=>{}));class he extends t.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){F.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:n}=this.props,r=null,i=de.pending;if(n instanceof Promise)if(this.state.error){de.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>e})}else n._tracked?(n,void 0!==r._error?de.error:void 0!==r._data?de.success:de.pending):(de.pending,Object.defineProperty(n,"_tracked",{get:()=>!0}),n.then((e=>Object.defineProperty(n,"_data",{get:()=>e})),(e=>Object.defineProperty(n,"_error",{get:()=>e}))));else de.success,Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>n});if(i===de.error&&r._error instanceof AbortedDeferredError)throw neverSettledPromise;if(i===de.error&&!t)throw r._error;if(i===de.error)return React.createElement(AwaitContext.Provider,{value:r,children:t});if(i===de.success)return React.createElement(AwaitContext.Provider,{value:r,children:e});throw r}}function fe(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,((e,i)=>{if(!t.isValidElement(e))return;if(e.type===t.Fragment)return void r.push.apply(r,fe(e.props.children,n));e.type!==le&&O(!1),e.props.index&&e.props.children&&O(!1);let o=[...n,i],a={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,hasErrorBoundary:null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle};e.props.children&&(a.children=fe(e.props.children,o)),r.push(a)})),r}var pe=i(7462),me=i(3366),ge=i(6010),ye=i(9378),ve=i(6523),be=i(9766),we=i(8010);const Ee=["sx"],Se=e=>{var t,n;const r={systemProps:{},otherProps:{}},i=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:we.Z;return Object.keys(e).forEach((t=>{i[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r};function ke(e){const{sx:t}=e,n=(0,me.Z)(e,Ee),{systemProps:r,otherProps:i}=Se(n);let o;return o=Array.isArray(t)?[r,...t]:"function"==typeof t?(...e)=>{const n=t(...e);return(0,be.P)(n)?(0,pe.Z)({},r,n):r}:(0,pe.Z)({},r,t),(0,pe.Z)({},i,{sx:o})}var _e=i(6682),Ie=i(5893);const Te=["className","component"];var xe=i(7078);const Ce=function(e={}){const{defaultTheme:n,defaultClassName:r="MuiBox-root",generateClassName:i}=e,o=(0,ye.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(ve.Z);return t.forwardRef((function(e,t){const a=(0,_e.Z)(n),s=ke(e),{className:l,component:u="div"}=s,c=(0,me.Z)(s,Te);return(0,Ie.jsx)(o,(0,pe.Z)({as:u,ref:t,className:(0,ge.Z)(l,i?i(r):r),theme:a},c))}))}({defaultTheme:(0,i(7659).Z)(),defaultClassName:"MuiBox-root",generateClassName:xe.Z.generate}),Oe=Ce;var Re=i(5408),Ae=i(2605),Pe=i(948),Ne=i(1657);const Me=["component","direction","spacing","divider","children"];function Le(e,n){const r=t.Children.toArray(e).filter(Boolean);return r.reduce(((e,i,o)=>(e.push(i),o<r.length-1&&e.push(t.cloneElement(n,{key:`separator-${o}`})),e)),[])}const De=(0,Pe.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n=(0,pe.Z)({display:"flex",flexDirection:"column"},(0,Re.k9)({theme:t},(0,Re.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,Ae.hB)(t),i=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),o=(0,Re.P$)({values:e.direction,base:i}),a=(0,Re.P$)({values:e.spacing,base:i});"object"==typeof o&&Object.keys(o).forEach(((e,t,n)=>{if(!o[e]){const r=t>0?o[n[t-1]]:"column";o[e]=r}}));const s=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${i=n?o[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i]}`]:(0,Ae.NA)(r,t)}};var i};n=(0,be.Z)(n,(0,Re.k9)({theme:t},a,s))}return n=(0,Re.dt)(t.breakpoints,n),n})),je=t.forwardRef((function(e,t){const n=ke((0,Ne.Z)({props:e,name:"MuiStack"})),{component:r="div",direction:i="column",spacing:o=0,divider:a,children:s}=n,l=(0,me.Z)(n,Me),u={direction:i,spacing:o};return(0,Ie.jsx)(De,(0,pe.Z)({as:r,ownerState:u,ref:t},l,{children:a?Le(s,a):s}))})),Fe=je;var Ue=i(4780),Ze=i(8216),ze=i(1588),Be=i(4867);function $e(e){return(0,Be.Z)("MuiTypography",e)}(0,ze.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Ve=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],We=(0,Pe.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,Ze.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,pe.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),He={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},qe={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Ke=t.forwardRef((function(e,t){const n=(0,Ne.Z)({props:e,name:"MuiTypography"}),r=(e=>qe[e]||e)(n.color),i=ke((0,pe.Z)({},n,{color:r})),{align:o="inherit",className:a,component:s,gutterBottom:l=!1,noWrap:u=!1,paragraph:c=!1,variant:d="body1",variantMapping:h=He}=i,f=(0,me.Z)(i,Ve),p=(0,pe.Z)({},i,{align:o,color:r,className:a,component:s,gutterBottom:l,noWrap:u,paragraph:c,variant:d,variantMapping:h}),m=s||(c?"p":h[d]||He[d])||"span",g=(e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:i,variant:o,classes:a}=e,s={root:["root",o,"inherit"!==e.align&&`align${(0,Ze.Z)(t)}`,n&&"gutterBottom",r&&"noWrap",i&&"paragraph"]};return(0,Ue.Z)(s,$e,a)})(p);return(0,Ie.jsx)(We,(0,pe.Z)({as:m,ref:t,ownerState:p,className:(0,ge.Z)(g.root,a)},f))})),Ge=Ke;var Xe=i(7925),Je=i(1796),Ye=i(1705),Qe=i(2068),et=i(3511);function tt(e,t){return tt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},tt(e,t)}function nt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,tt(e,t)}const rt=t.createContext(null);function it(e,n){var r=Object.create(null);return e&&t.Children.map(e,(function(e){return e})).forEach((function(e){r[e.key]=function(e){return n&&(0,t.isValidElement)(e)?n(e):e}(e)})),r}function ot(e,t,n){return null!=n[t]?n[t]:e.props[t]}function at(e,n,r){var i=it(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var a in e)a in t?o.length&&(i[a]=o,o=[]):o.push(a);var s={};for(var l in t){if(i[l])for(r=0;r<i[l].length;r++){var u=i[l][r];s[i[l][r]]=n(u)}s[l]=n(l)}for(r=0;r<o.length;r++)s[o[r]]=n(o[r]);return s}(n,i);return Object.keys(o).forEach((function(a){var s=o[a];if((0,t.isValidElement)(s)){var l=a in n,u=a in i,c=n[a],d=(0,t.isValidElement)(c)&&!c.props.in;!u||l&&!d?u||!l||d?u&&l&&(0,t.isValidElement)(c)&&(o[a]=(0,t.cloneElement)(s,{onExited:r.bind(null,s),in:c.props.in,exit:ot(s,"exit",e),enter:ot(s,"enter",e)})):o[a]=(0,t.cloneElement)(s,{in:!1}):o[a]=(0,t.cloneElement)(s,{onExited:r.bind(null,s),in:!0,exit:ot(s,"exit",e),enter:ot(s,"enter",e)})}})),o}var st=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},lt=function(e){function n(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}nt(n,e);var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var r,i,o=n.children,a=n.handleExited;return{children:n.firstRender?(r=e,i=a,it(r.children,(function(e){return(0,t.cloneElement)(e,{onExited:i.bind(null,e),in:!0,appear:ot(e,"appear",r),enter:ot(e,"enter",r),exit:ot(e,"exit",r)})}))):at(e,o,a),firstRender:!1}},r.handleExited=function(e,t){var n=it(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,pe.Z)({},t.children);return delete n[e.key],{children:n}})))},r.render=function(){var e=this.props,n=e.component,r=e.childFactory,i=(0,me.Z)(e,["component","childFactory"]),o=this.state.contextValue,a=st(this.state.children).map(r);return delete i.appear,delete i.enter,delete i.exit,null===n?t.createElement(rt.Provider,{value:o},a):t.createElement(rt.Provider,{value:o},t.createElement(n,i,a))},n}(t.Component);lt.propTypes={},lt.defaultProps={component:"div",childFactory:function(e){return e}};const ut=lt;i(6751);var ct=i(2443),dt=(i(8679),i(444)),ht=i(6797),ft=i(7278),pt=(0,ct.w)((function(e,n){var r=e.styles,i=(0,ht.O)([r],void 0,(0,t.useContext)(ct.T)),o=(0,t.useRef)();return(0,ft.j)((function(){var e=n.key+"-global",t=new n.sheet.constructor({key:e,nonce:n.sheet.nonce,container:n.sheet.container,speedy:n.sheet.isSpeedy}),r=!1,a=document.querySelector('style[data-emotion="'+e+" "+i.name+'"]');return n.sheet.tags.length&&(t.before=n.sheet.tags[0]),null!==a&&(r=!0,a.setAttribute("data-emotion",e),t.hydrate([a])),o.current=[t,r],function(){t.flush()}}),[n]),(0,ft.j)((function(){var e=o.current,t=e[0];if(e[1])e[1]=!1;else{if(void 0!==i.next&&(0,dt.My)(n,i.next,!0),t.tags.length){var r=t.tags[t.tags.length-1].nextElementSibling;t.before=r,t.flush()}n.insert("",i,t,!1)}}),[n,i.name]),null}));function mt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,ht.O)(t)}var gt=function(){var e=mt.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const yt=function(e){const{className:n,classes:r,pulsate:i=!1,rippleX:o,rippleY:a,rippleSize:s,in:l,onExited:u,timeout:c}=e,[d,h]=t.useState(!1),f=(0,ge.Z)(n,r.ripple,r.rippleVisible,i&&r.ripplePulsate),p={width:s,height:s,top:-s/2+a,left:-s/2+o},m=(0,ge.Z)(r.child,d&&r.childLeaving,i&&r.childPulsate);return l||d||h(!0),t.useEffect((()=>{if(!l&&null!=u){const e=setTimeout(u,c);return()=>{clearTimeout(e)}}}),[u,l,c]),(0,Ie.jsx)("span",{className:f,style:p,children:(0,Ie.jsx)("span",{className:m})})};const vt=(0,ze.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),bt=["center","classes","className"];let wt,Et,St,kt,_t=e=>e;const It=gt(wt||(wt=_t`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Tt=gt(Et||(Et=_t`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),xt=gt(St||(St=_t`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Ct=(0,Pe.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Ot=(0,Pe.ZP)(yt,{name:"MuiTouchRipple",slot:"Ripple"})(kt||(kt=_t`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),vt.rippleVisible,It,550,(({theme:e})=>e.transitions.easing.easeInOut),vt.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),vt.child,vt.childLeaving,Tt,550,(({theme:e})=>e.transitions.easing.easeInOut),vt.childPulsate,xt,(({theme:e})=>e.transitions.easing.easeInOut)),Rt=t.forwardRef((function(e,n){const r=(0,Ne.Z)({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:o={},className:a}=r,s=(0,me.Z)(r,bt),[l,u]=t.useState([]),c=t.useRef(0),d=t.useRef(null);t.useEffect((()=>{d.current&&(d.current(),d.current=null)}),[l]);const h=t.useRef(!1),f=t.useRef(null),p=t.useRef(null),m=t.useRef(null);t.useEffect((()=>()=>{clearTimeout(f.current)}),[]);const g=t.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:a}=e;u((e=>[...e,(0,Ie.jsx)(Ot,{classes:{ripple:(0,ge.Z)(o.ripple,vt.ripple),rippleVisible:(0,ge.Z)(o.rippleVisible,vt.rippleVisible),ripplePulsate:(0,ge.Z)(o.ripplePulsate,vt.ripplePulsate),child:(0,ge.Z)(o.child,vt.child),childLeaving:(0,ge.Z)(o.childLeaving,vt.childLeaving),childPulsate:(0,ge.Z)(o.childPulsate,vt.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:i},c.current)])),c.current+=1,d.current=a}),[o]),y=t.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:o=i||t.pulsate,fakeElement:a=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&h.current)return void(h.current=!1);"touchstart"===(null==e?void 0:e.type)&&(h.current=!0);const s=a?null:m.current,l=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0};let u,c,d;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(l.width/2),c=Math.round(l.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;u=Math.round(t-l.left),c=Math.round(n-l.top)}if(o)d=Math.sqrt((2*l.width**2+l.height**2)/3),d%2==0&&(d+=1);else{const e=2*Math.max(Math.abs((s?s.clientWidth:0)-u),u)+2,t=2*Math.max(Math.abs((s?s.clientHeight:0)-c),c)+2;d=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===p.current&&(p.current=()=>{g({pulsate:r,rippleX:u,rippleY:c,rippleSize:d,cb:n})},f.current=setTimeout((()=>{p.current&&(p.current(),p.current=null)}),80)):g({pulsate:r,rippleX:u,rippleY:c,rippleSize:d,cb:n})}),[i,g]),v=t.useCallback((()=>{y({},{pulsate:!0})}),[y]),b=t.useCallback(((e,t)=>{if(clearTimeout(f.current),"touchend"===(null==e?void 0:e.type)&&p.current)return p.current(),p.current=null,void(f.current=setTimeout((()=>{b(e,t)})));p.current=null,u((e=>e.length>0?e.slice(1):e)),d.current=t}),[]);return t.useImperativeHandle(n,(()=>({pulsate:v,start:y,stop:b})),[v,y,b]),(0,Ie.jsx)(Ct,(0,pe.Z)({className:(0,ge.Z)(vt.root,o.root,a),ref:m},s,{children:(0,Ie.jsx)(ut,{component:null,exit:!0,children:l})}))})),At=Rt;function Pt(e){return(0,Be.Z)("MuiButtonBase",e)}const Nt=(0,ze.Z)("MuiButtonBase",["root","disabled","focusVisible"]),Mt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Lt=(0,Pe.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Nt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Dt=t.forwardRef((function(e,n){const r=(0,Ne.Z)({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:o=!1,children:a,className:s,component:l="button",disabled:u=!1,disableRipple:c=!1,disableTouchRipple:d=!1,focusRipple:h=!1,LinkComponent:f="a",onBlur:p,onClick:m,onContextMenu:g,onDragLeave:y,onFocus:v,onFocusVisible:b,onKeyDown:w,onKeyUp:E,onMouseDown:S,onMouseLeave:k,onMouseUp:_,onTouchEnd:I,onTouchMove:T,onTouchStart:x,tabIndex:C=0,TouchRippleProps:O,touchRippleRef:R,type:A}=r,P=(0,me.Z)(r,Mt),N=t.useRef(null),M=t.useRef(null),L=(0,Ye.Z)(M,R),{isFocusVisibleRef:D,onFocus:j,onBlur:F,ref:U}=(0,et.Z)(),[Z,z]=t.useState(!1);u&&Z&&z(!1),t.useImperativeHandle(i,(()=>({focusVisible:()=>{z(!0),N.current.focus()}})),[]);const[B,$]=t.useState(!1);t.useEffect((()=>{$(!0)}),[]);const V=B&&!c&&!u;function W(e,t,n=d){return(0,Qe.Z)((r=>{t&&t(r);return!n&&M.current&&M.current[e](r),!0}))}t.useEffect((()=>{Z&&h&&!c&&B&&M.current.pulsate()}),[c,h,Z,B]);const H=W("start",S),q=W("stop",g),K=W("stop",y),G=W("stop",_),X=W("stop",(e=>{Z&&e.preventDefault(),k&&k(e)})),J=W("start",x),Y=W("stop",I),Q=W("stop",T),ee=W("stop",(e=>{F(e),!1===D.current&&z(!1),p&&p(e)}),!1),te=(0,Qe.Z)((e=>{N.current||(N.current=e.currentTarget),j(e),!0===D.current&&(z(!0),b&&b(e)),v&&v(e)})),ne=()=>{const e=N.current;return l&&"button"!==l&&!("A"===e.tagName&&e.href)},re=t.useRef(!1),ie=(0,Qe.Z)((e=>{h&&!re.current&&Z&&M.current&&" "===e.key&&(re.current=!0,M.current.stop(e,(()=>{M.current.start(e)}))),e.target===e.currentTarget&&ne()&&" "===e.key&&e.preventDefault(),w&&w(e),e.target===e.currentTarget&&ne()&&"Enter"===e.key&&!u&&(e.preventDefault(),m&&m(e))})),oe=(0,Qe.Z)((e=>{h&&" "===e.key&&M.current&&Z&&!e.defaultPrevented&&(re.current=!1,M.current.stop(e,(()=>{M.current.pulsate(e)}))),E&&E(e),m&&e.target===e.currentTarget&&ne()&&" "===e.key&&!e.defaultPrevented&&m(e)}));let ae=l;"button"===ae&&(P.href||P.to)&&(ae=f);const se={};"button"===ae?(se.type=void 0===A?"button":A,se.disabled=u):(P.href||P.to||(se.role="button"),u&&(se["aria-disabled"]=u));const le=(0,Ye.Z)(n,U,N);const ue=(0,pe.Z)({},r,{centerRipple:o,component:l,disabled:u,disableRipple:c,disableTouchRipple:d,focusRipple:h,tabIndex:C,focusVisible:Z}),ce=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,o={root:["root",t&&"disabled",n&&"focusVisible"]},a=(0,Ue.Z)(o,Pt,i);return n&&r&&(a.root+=` ${r}`),a})(ue);return(0,Ie.jsxs)(Lt,(0,pe.Z)({as:ae,className:(0,ge.Z)(ce.root,s),ownerState:ue,onBlur:ee,onClick:m,onContextMenu:q,onFocus:te,onKeyDown:ie,onKeyUp:oe,onMouseDown:H,onMouseLeave:X,onMouseUp:G,onDragLeave:K,onTouchEnd:Y,onTouchMove:Q,onTouchStart:J,ref:le,tabIndex:u?-1:C,type:A},se,P,{children:[a,V?(0,Ie.jsx)(At,(0,pe.Z)({ref:L,center:o},O)):null]}))}));function jt(e){return(0,Be.Z)("MuiButton",e)}const Ft=(0,ze.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const Ut=t.createContext({}),Zt=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],zt=e=>(0,pe.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),Bt=(0,Pe.ZP)(Dt,{shouldForwardProp:e=>(0,Pe.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,Ze.Z)(n.color)}`],t[`size${(0,Ze.Z)(n.size)}`],t[`${n.variant}Size${(0,Ze.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var n,r;return(0,pe.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,pe.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,Je.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,Je.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,Je.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,pe.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${Ft.focusVisible}`]:(0,pe.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${Ft.disabled}`]:(0,pe.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,Je.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(r=e.palette).getContrastText)?void 0:n.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Ft.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Ft.disabled}`]:{boxShadow:"none"}})),$t=(0,Pe.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,Ze.Z)(n.size)}`]]}})((({ownerState:e})=>(0,pe.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},zt(e)))),Vt=(0,Pe.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,Ze.Z)(n.size)}`]]}})((({ownerState:e})=>(0,pe.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},zt(e)))),Wt=t.forwardRef((function(e,n){const r=t.useContext(Ut),i=(0,Xe.Z)(r,e),o=(0,Ne.Z)({props:i,name:"MuiButton"}),{children:a,color:s="primary",component:l="button",className:u,disabled:c=!1,disableElevation:d=!1,disableFocusRipple:h=!1,endIcon:f,focusVisibleClassName:p,fullWidth:m=!1,size:g="medium",startIcon:y,type:v,variant:b="text"}=o,w=(0,me.Z)(o,Zt),E=(0,pe.Z)({},o,{color:s,component:l,disabled:c,disableElevation:d,disableFocusRipple:h,fullWidth:m,size:g,type:v,variant:b}),S=(e=>{const{color:t,disableElevation:n,fullWidth:r,size:i,variant:o,classes:a}=e,s={root:["root",o,`${o}${(0,Ze.Z)(t)}`,`size${(0,Ze.Z)(i)}`,`${o}Size${(0,Ze.Z)(i)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,Ze.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,Ze.Z)(i)}`]},l=(0,Ue.Z)(s,jt,a);return(0,pe.Z)({},a,l)})(E),k=y&&(0,Ie.jsx)($t,{className:S.startIcon,ownerState:E,children:y}),_=f&&(0,Ie.jsx)(Vt,{className:S.endIcon,ownerState:E,children:f});return(0,Ie.jsxs)(Bt,(0,pe.Z)({ownerState:E,className:(0,ge.Z)(r.className,S.root,u),component:l,disabled:c,focusRipple:!h,focusVisibleClassName:(0,ge.Z)(S.focusVisible,p),ref:n,type:v},w,{classes:S,children:[k,a,_]}))})),Ht=Wt;var qt=i(5108),Kt=i(4155);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Xt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,a=o?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,u=i>>2,c=(3&i)<<4|a>>4;let d=(15&a)<<2|l>>6,h=63&l;s||(h=64,o||(d=64)),r.push(n[u],n[c],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Gt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==a||null==s)throw new Jt;const l=i<<2|o>>4;if(r.push(l),64!==a){const e=o<<4&240|a>>2;if(r.push(e),64!==s){const e=a<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yt=function(e){return function(e){const t=Gt(e);return Xt.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Qt=function(e){try{return Xt.decodeString(e,!0)}catch(e){qt.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const en=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i.g)return i.g;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,tn=()=>{try{return en()||(()=>{if(void 0===Kt||void 0===Kt.env)return;const e=Kt.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Qt(e[1]);return t&&JSON.parse(t)})()}catch(e){return void qt.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},nn=e=>{var t,n;return null===(n=null===(t=tn())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},rn=e=>{const t=nn(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},on=()=>{var e;return null===(e=tn())||void 0===e?void 0:e.config},an=e=>{var t;return null===(t=tn())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ln(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class un extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cn.prototype.create)}}class cn{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(dn,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new un(r,a,n)}}const dn=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(fn(n)&&fn(o)){if(!hn(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function fn(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pn(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function mn(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function gn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=vn),void 0===r.error&&(r.error=vn),void 0===r.complete&&(r.complete=vn);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){void 0!==qt&&qt.error&&qt.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function vn(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bn(e){return e&&e._delegate?e._delegate:e}class wn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new sn;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:En})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=En){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=En){return this.instances.has(e)}getOptions(e=En){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===En?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=En){return this.component?this.component.multipleInstances?e:En:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class kn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Sn(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}var _n=i(5108);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=[];var Tn;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Tn||(Tn={}));const xn={debug:Tn.DEBUG,verbose:Tn.VERBOSE,info:Tn.INFO,warn:Tn.WARN,error:Tn.ERROR,silent:Tn.SILENT},Cn=Tn.INFO,On={[Tn.DEBUG]:"log",[Tn.VERBOSE]:"log",[Tn.INFO]:"info",[Tn.WARN]:"warn",[Tn.ERROR]:"error"},Rn=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=On[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);_n[i](`[${r}]  ${e.name}:`,...n)};class An{constructor(e){this.name=e,this._logLevel=Cn,this._logHandler=Rn,this._userLogHandler=null,In.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Tn))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?xn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Tn.DEBUG,...e),this._logHandler(this,Tn.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Tn.VERBOSE,...e),this._logHandler(this,Tn.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Tn.INFO,...e),this._logHandler(this,Tn.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Tn.WARN,...e),this._logHandler(this,Tn.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Tn.ERROR,...e),this._logHandler(this,Tn.ERROR,...e)}}const Pn=(e,t)=>t.some((t=>e instanceof t));let Nn,Mn;const Ln=new WeakMap,Dn=new WeakMap,jn=new WeakMap,Fn=new WeakMap,Un=new WeakMap;let Zn={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Dn.get(e);if("objectStoreNames"===t)return e.objectStoreNames||jn.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function zn(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Mn||(Mn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Vn(this),t),$n(Ln.get(this))}:function(...t){return $n(e.apply(Vn(this),t))}:function(t,...n){const r=e.call(Vn(this),t,...n);return jn.set(r,t.sort?t.sort():[t]),$n(r)}}function Bn(e){return"function"==typeof e?zn(e):(e instanceof IDBTransaction&&function(e){if(Dn.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));Dn.set(e,t)}(e),Pn(e,Nn||(Nn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Zn):e)}function $n(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t($n(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&Ln.set(t,e)})).catch((()=>{})),Un.set(t,e),t}(e);if(Fn.has(e))return Fn.get(e);const t=Bn(e);return t!==e&&(Fn.set(e,t),Un.set(t,e)),t}const Vn=e=>Un.get(e);const Wn=["get","getKey","getAll","getAllKeys","count"],Hn=["put","add","delete","clear"],qn=new Map;function Kn(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(qn.get(t))return qn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Hn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Wn.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let a=o.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&o.done]))[0]};return qn.set(t,o),o}Zn=(e=>({...e,get:(t,n,r)=>Kn(t,n)||e.get(t,n,r),has:(t,n)=>!!Kn(t,n)||e.has(t,n)}))(Zn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Xn="@firebase/app",Jn="0.9.13",Yn=new An("@firebase/app"),Qn="[DEFAULT]",er={[Xn]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},tr=new Map,nr=new Map;function rr(e,t){try{e.container.addComponent(t)}catch(n){Yn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ir(e){const t=e.name;if(nr.has(t))return Yn.debug(`There were multiple attempts to register component ${t}.`),!1;nr.set(t,e);for(const t of tr.values())rr(t,e);return!0}function or(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ar=new cn("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sr{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new wn("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="9.23.0";function ur(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Qn,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw ar.create("bad-app-name",{appName:String(i)});if(n||(n=on()),!n)throw ar.create("no-options");const o=tr.get(i);if(o){if(hn(n,o.options)&&hn(r,o.config))return o;throw ar.create("duplicate-app",{appName:i})}const a=new kn(i);for(const e of nr.values())a.addComponent(e);const s=new sr(n,r,a);return tr.set(i,s),s}function cr(e=Qn){const t=tr.get(e);if(!t&&e===Qn&&on())return ur();if(!t)throw ar.create("no-app",{appName:e});return t}function dr(e,t,n){var r;let i=null!==(r=er[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Yn.warn(e.join(" "))}ir(new wn(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hr="firebase-heartbeat-database",fr=1,pr="firebase-heartbeat-store";let mr=null;function gr(){return mr||(mr=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=$n(a);return r&&a.addEventListener("upgradeneeded",(e=>{r($n(a.result),e.oldVersion,e.newVersion,$n(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}(hr,fr,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(pr)}}).catch((e=>{throw ar.create("idb-open",{originalErrorMessage:e.message})}))),mr}async function yr(e,t){try{const n=(await gr()).transaction(pr,"readwrite"),r=n.objectStore(pr);await r.put(t,vr(e)),await n.done}catch(e){if(e instanceof un)Yn.warn(e.message);else{const t=ar.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Yn.warn(t.message)}}}function vr(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Er(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=wr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=wr(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Sr(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sr(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Yt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function wr(){return(new Date).toISOString().substring(0,10)}class Er{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=await gr();return await t.transaction(pr).objectStore(pr).get(vr(e))}catch(e){if(e instanceof un)Yn.warn(e.message);else{const t=ar.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Yn.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return yr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return yr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Sr(e){return Yt(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kr;kr="",ir(new wn("platform-logger",(e=>new Gn(e)),"PRIVATE")),ir(new wn("heartbeat",(e=>new br(e)),"PRIVATE")),dr(Xn,Jn,kr),dr(Xn,Jn,"esm2017"),dr("fire-js","");var _r=function(e,t){return _r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},_r(e,t)};function Ir(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}_r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function Tr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function xr(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}function Cr(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}Object.create;function Or(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Rr(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function Ar(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"==typeof SuppressedError&&SuppressedError;var Pr=i(5108);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mr=Nr,Lr=new cn("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Dr=new An("@firebase/auth");function jr(e,...t){Dr.logLevel<=Tn.ERROR&&Dr.error(`Auth (${lr}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e,...t){throw zr(e,...t)}function Ur(e,...t){return zr(e,...t)}function Zr(e,t,n){const r=Object.assign(Object.assign({},Mr()),{[t]:n});return new cn("auth","Firebase",r).create(t,{appName:e.name})}function zr(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Lr.create(e,...t)}function Br(e,t,...n){if(!e)throw zr(t,...n)}function $r(e){const t="INTERNAL ASSERTION FAILED: "+e;throw jr(t),new Error(t)}function Vr(e,t){e||$r(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Hr(){return"http:"===qr()||"https:"===qr()}function qr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Hr()||function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vr(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ln())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Kr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(e,t){Vr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void $r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void $r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void $r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Qr=new Gr(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ti(e,t,n,r,i={}){return ni(e,i,(async()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const a=pn(Object.assign({key:e.config.apiKey},o)).slice(1),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode),Jr.fetch()(ii(e,e.config.apiHost,n,a),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},i))}))}async function ni(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yr),t);try{const t=new oi(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ai(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ai(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw ai(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw ai(e,"user-disabled",o);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw Zr(e,s,a);Fr(e,s)}}catch(t){if(t instanceof un)throw t;Fr(e,"network-request-failed",{message:String(t)})}}async function ri(e,t,n,r,i={}){const o=await ti(e,t,n,r,i);return"mfaPendingCredential"in o&&Fr(e,"multi-factor-auth-required",{_serverResponse:o}),o}function ii(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Xr(e.config,i):`${e.config.apiScheme}://${i}`}class oi{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ur(this.auth,"network-request-failed"))),Qr.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ai(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ur(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function si(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e){return 1e3*Number(e)}function ui(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return jr("JWT malformed, contained fewer than 3 sections"),null;try{const e=Qt(n);return e?JSON.parse(e):(jr("Failed to decode base64 JWT payload"),null)}catch(e){return jr("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ci(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof un&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class di{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ci(e,async function(e,t){return ti(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Br(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=Tr(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const s=(l=e.providerData,u=a,[...l.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var l,u;const c=e.isAnonymous,d=!(e.email&&o.passwordHash||(null==s?void 0:s.length)),h=!!c&&d,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new hi(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Br(e.idToken,"internal-error"),Br(void 0!==e.idToken,"internal-error"),Br(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=ui(e);return Br(t,"internal-error"),Br(void 0!==t.exp,"internal-error"),Br(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Br(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await ni(e,{},(async()=>{const n=pn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=ii(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jr.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new pi;return n&&(Br("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(Br("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(Br("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return $r("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e,t){Br("string"==typeof e||void 0===e,"internal-error",{appName:t})}class gi{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Tr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new di(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ci(this,this.stsTokenManager.getToken(this.auth,e));return Br(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=bn(e),r=await n.getIdToken(t),i=ui(r);Br(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:si(li(i.auth_time)),issuedAtTime:si(li(i.iat)),expirationTime:si(li(i.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=bn(e);await fi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Br(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Br(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await fi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ci(this,async function(e,t){return ti(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,a,s,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:S}=t;Br(v&&S,e,"internal-error");const k=pi.fromJSON(this.name,S);Br("string"==typeof v,e,"internal-error"),mi(c,e.name),mi(d,e.name),Br("boolean"==typeof b,e,"internal-error"),Br("boolean"==typeof w,e,"internal-error"),mi(h,e.name),mi(f,e.name),mi(p,e.name),mi(m,e.name),mi(g,e.name),mi(y,e.name);const _=new gi({uid:v,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(_.providerData=E.map((e=>Object.assign({},e)))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,n=!1){const r=new pi;r.updateFromServerResponse(t);const i=new gi({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await fi(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new Map;function vi(e){Vr(e instanceof Function,"Expected a class definition");let t=yi.get(e);return t?(Vr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,yi.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}bi.type="NONE";const wi=bi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(e,t,n){return`firebase:${e}:${t}:${n}`}class Si{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Ei(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ei("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Si(vi(wi),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||vi(wi);const o=Ei(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(o);if(t){const r=gi._fromJSON(e,t);n!==i&&(a=r),i=n;break}}catch(e){}const s=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&s.length?(i=s[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(e){}}))),new Si(i,e,n)):new Si(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(xi(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(_i(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Oi(t))return"Blackberry";if(Ri(t))return"Webos";if(Ii(t))return"Safari";if((t.includes("chrome/")||Ti(t))&&!t.includes("edge/"))return"Chrome";if(Ci(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function _i(e=ln()){return/firefox\//i.test(e)}function Ii(e=ln()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ti(e=ln()){return/crios\//i.test(e)}function xi(e=ln()){return/iemobile/i.test(e)}function Ci(e=ln()){return/android/i.test(e)}function Oi(e=ln()){return/blackberry/i.test(e)}function Ri(e=ln()){return/webos/i.test(e)}function Ai(e=ln()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Pi(){return function(){const e=ln();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Ni(e=ln()){return Ai(e)||Ci(e)||Ri(e)||Oi(e)||/windows phone/i.test(e)||xi(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mi(e,t=[]){let n;switch(e){case"Browser":n=ki(ln());break;case"Worker":n=`${ki(ln())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${lr}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(e,t){return ti(e,"GET","/v2/recaptchaConfig",ei(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(e){return void 0!==e&&void 0!==e.enterprise}class ji{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Ur("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(r)}))}function Ui(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Zi{constructor(e){this.type="recaptcha-enterprise",this.auth=Vi(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;Di(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Li(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new ji(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&Di(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));Fi("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function zi(e,t,n,r=!1){const i=new Zi(e);let o;try{o=await i.verify(n)}catch(e){o=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wi(this),this.idTokenSubscription=new Wi(this),this.beforeStateQueue=new Bi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vi(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Si.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==o||!(null==a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Br(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fi(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?bn(e):null;return t&&Br(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Br(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(vi(e))}))}async initializeRecaptchaConfig(){const e=await Li(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ji(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Zi(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cn("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vi(e)||this._popupRedirectResolver;Br(t,this,"argument-error"),this.redirectPersistenceManager=await Si.create(this,[vi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Br(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Br(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Dr.logLevel<=Tn.WARN&&Dr.warn(`Auth (${lr}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Vi(e){return bn(e)}class Wi{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new yn(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Br(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(e,t,n){const r=Vi(e);Br(r._canInitEmulator,r,"emulator-config-failed"),Br(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),o=qi(t),{host:a,port:s}=function(e){const t=qi(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ki(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ki(t)}}}(t),l=null===s?"":`:${s}`;r.config.emulator={url:`${o}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}void 0!==Pr&&"function"==typeof Pr.info&&Pr.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function qi(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ki(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Gi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $r("not implemented")}_getIdTokenResponse(e){return $r("not implemented")}_linkToIdToken(e,t){return $r("not implemented")}_getReauthenticationResolver(e){return $r("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(e,t){return ti(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ji(e,t){return ri(e,"POST","/v1/accounts:signInWithPassword",ei(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi extends Gi{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Yi(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Yi(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await zi(e,n,"signInWithPassword");return Ji(e,t)}return Ji(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){Pr.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await zi(e,n,"signInWithPassword");return Ji(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return ri(e,"POST","/v1/accounts:signInWithEmailLink",ei(e,t))}(e,{email:this._email,oobCode:this._password});default:Fr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Xi(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ri(e,"POST","/v1/accounts:signInWithEmailLink",ei(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Fr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(e,t){return ri(e,"POST","/v1/accounts:signInWithIdp",ei(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends Gi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new eo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Tr(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new eo(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return Qi(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Qi(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qi(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pn(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no extends Gi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new no({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new no({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ri(e,"POST","/v1/accounts:signInWithPhoneNumber",ei(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await ri(e,"POST","/v1/accounts:signInWithPhoneNumber",ei(e,t));if(n.temporaryProof)throw ai(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return ri(e,"POST","/v1/accounts:signInWithPhoneNumber",ei(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),to)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new no({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){var t,n,r,i,o,a;const s=mn(gn(e)),l=null!==(t=s.apiKey)&&void 0!==t?t:null,u=null!==(n=s.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=s.mode)&&void 0!==r?r:null);Br(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=s.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=s.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=s.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=mn(gn(e)).link,n=t?mn(gn(t)).deep_link_id:null,r=mn(gn(e)).deep_link_id;return(r?mn(gn(r)).link:null)||r||n||t||e}(e);try{return new ro(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{constructor(){this.providerId=io.PROVIDER_ID}static credential(e,t){return Yi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ro.parseLink(t);return Br(n,"argument-error"),Yi._fromEmailAndCode(e,n.code,n.tenantId)}}io.PROVIDER_ID="password",io.EMAIL_PASSWORD_SIGN_IN_METHOD="password",io.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends oo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class so extends ao{constructor(){super("facebook.com")}static credential(e){return eo._fromParams({providerId:so.PROVIDER_ID,signInMethod:so.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return so.credentialFromTaggedObject(e)}static credentialFromError(e){return so.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return so.credential(e.oauthAccessToken)}catch(e){return null}}}so.FACEBOOK_SIGN_IN_METHOD="facebook.com",so.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lo extends ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eo._fromParams({providerId:lo.PROVIDER_ID,signInMethod:lo.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return lo.credentialFromTaggedObject(e)}static credentialFromError(e){return lo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return lo.credential(t,n)}catch(e){return null}}}lo.GOOGLE_SIGN_IN_METHOD="google.com",lo.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uo extends ao{constructor(){super("github.com")}static credential(e){return eo._fromParams({providerId:uo.PROVIDER_ID,signInMethod:uo.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return uo.credentialFromTaggedObject(e)}static credentialFromError(e){return uo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return uo.credential(e.oauthAccessToken)}catch(e){return null}}}uo.GITHUB_SIGN_IN_METHOD="github.com",uo.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class co extends ao{constructor(){super("twitter.com")}static credential(e,t){return eo._fromParams({providerId:co.PROVIDER_ID,signInMethod:co.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return co.credentialFromTaggedObject(e)}static credentialFromError(e){return co.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return co.credential(t,n)}catch(e){return null}}}co.TWITTER_SIGN_IN_METHOD="twitter.com",co.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ho{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await gi._fromIdTokenResponse(e,n,r),o=fo(n);return new ho({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=fo(n);return new ho({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function fo(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class po extends un{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,po.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new po(e,t,n,r)}}function mo(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw po._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(e,t,n=!1){const r=await ci(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ho._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yo(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await ci(e,mo(r,i,t,e),n);Br(o.idToken,r,"internal-error");const a=ui(o.idToken);Br(a,r,"internal-error");const{sub:s}=a;return Br(e.uid===s,r,"user-mismatch"),ho._forOperation(e,i,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Fr(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(e,t,n=!1){const r="signIn",i=await mo(e,r,t),o=await ho._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}new WeakMap;const bo="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bo,"1"),this.storage.removeItem(bo),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends wo{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=ln();return Ii(e)||Ai(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Ni(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Pi()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Eo.type="LOCAL";const So=Eo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends wo{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ko.type="SESSION";const _o=ko;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Io(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map((async e=>e(t.origin,i))),s=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function To(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Io.receivers=[];class xo{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((a,s)=>{const l=To("",20);r.port1.start();const u=setTimeout((()=>{s(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(u),clearTimeout(i),s(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oo(){return void 0!==Co().WorkerGlobalScope&&"function"==typeof Co().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ro="firebaseLocalStorageDb",Ao="firebaseLocalStorage",Po="fbase_key";class No{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Mo(e,t){return e.transaction([Ao],t?"readwrite":"readonly").objectStore(Ao)}function Lo(){const e=indexedDB.open(Ro,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Ao,{keyPath:Po})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Ao)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Ro);return new No(e).toPromise()}(),t(await Lo()))}))}))}async function Do(e,t,n){const r=Mo(e,!0).put({[Po]:t,value:n});return new No(r).toPromise()}function jo(e,t){const n=Mo(e,!0).delete(t);return new No(n).toPromise()}class Fo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Lo()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Io._getInstance(Oo()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new xo(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lo();return await Do(e,bo,"1"),await jo(e,bo),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Do(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Mo(e,!1).get(t),r=await new No(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>jo(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Mo(e,!1).getAll();return new No(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Fo.type="LOCAL";const Uo=Fo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ui("rcb"),new Gr(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zo="recaptcha";async function zo(e,t,n){var r;const i=await n.verify();try{let o;if(Br("string"==typeof i,e,"argument-error"),Br(n.type===Zo,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){Br("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return ti(e,"POST","/v2/accounts/mfaEnrollment:start",ei(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Br("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;Br(n,e,"missing-multi-factor-info");const a=await function(e,t){return ti(e,"POST","/v2/accounts/mfaSignIn:start",ei(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return ti(e,"POST","/v1/accounts:sendVerificationCode",ei(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo{constructor(e){this.providerId=Bo.PROVIDER_ID,this.auth=Vi(e)}verifyPhoneNumber(e,t){return zo(this.auth,e,bn(t))}static credential(e,t){return no._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Bo.credentialFromTaggedObject(t)}static credentialFromError(e){return Bo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?no._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $o(e,t){return t?vi(t):(Br(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bo.PROVIDER_ID="phone",Bo.PHONE_SIGN_IN_METHOD="phone";class Vo extends Gi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Wo(e){return vo(e.auth,new Vo(e),e.bypassAuthState)}function Ho(e){const{auth:t,user:n}=e;return Br(n,t,"internal-error"),yo(n,new Vo(e),e.bypassAuthState)}async function qo(e){const{auth:t,user:n}=e;return Br(n,t,"internal-error"),go(n,new Vo(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=e;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wo;case"linkViaPopup":case"linkViaRedirect":return qo;case"reauthViaPopup":case"reauthViaRedirect":return Ho;default:Fr(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new Gr(2e3,1e4);class Xo extends Ko{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Xo.currentPopupAction&&Xo.currentPopupAction.cancel(),Xo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Br(e,this.auth,"internal-error"),e}async onExecution(){Vr(1===this.filter.length,"Popup operations only handle one event");const e=To();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ur(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ur(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Go.get())};e()}}Xo.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jo="pendingRedirect",Yo=new Map;class Qo extends Ko{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Yo.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=na(t),r=ta(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Yo.set(this.auth._key(),e)}return this.bypassAuthState||Yo.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function ea(e,t){Yo.set(e._key(),t)}function ta(e){return vi(e._redirectPersistence)}function na(e){return Ei(Jo,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(e,t,n=!1){const r=Vi(e),i=$o(r,t),o=new Qo(r,i,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}class ia{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aa(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!aa(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ur(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(oa(e))}saveEventToCache(e){this.cachedEventUids.add(oa(e)),this.lastProcessedEventTime=Date.now()}}function oa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function aa({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sa=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,la=/^https?/;async function ua(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return ti(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(ca(e))return}catch(e){}Fr(e,"unauthorized-domain")}function ca(e){const t=Wr(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!la.test(n))return!1;if(sa.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new Gr(3e4,6e4);function ha(){const e=Co().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let fa=null;function pa(e){return fa=fa||function(e){return new Promise(((t,n)=>{var r,i,o;function a(){ha(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ha(),n(Ur(e,"network-request-failed"))},timeout:da.get()})}if(null===(i=null===(r=Co().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Co().gapi)||void 0===o?void 0:o.load)){const t=Ui("iframefcb");return Co()[t]=()=>{gapi.load?a():n(Ur(e,"network-request-failed"))},Fi(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw fa=null,e}))}(e),fa}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new Gr(5e3,15e3),ga="__/auth/iframe",ya="emulator/auth/iframe",va={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ba=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wa(e){const t=e.config;Br(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Xr(t,ya):`https://${e.config.authDomain}/${ga}`,r={apiKey:t.apiKey,appName:e.name,v:lr},i=ba.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${pn(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ea={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Sa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ka(e,t,n,r=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},Ea),{width:r.toString(),height:i.toString(),top:o,left:a}),u=ln().toLowerCase();n&&(s=Ti(u)?"_blank":n),_i(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=ln()){var t;return Ai(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==s)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",s),new Sa(null);const d=window.open(t||"",s,c);Br(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Sa(d)}const _a="__/auth/handler",Ia="emulator/auth/handler",Ta=encodeURIComponent("fac");async function xa(e,t,n,r,i,o){Br(e.config.authDomain,e,"auth-domain-config-required"),Br(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:lr,eventId:i};if(t instanceof oo){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))a[e]=t}if(t instanceof ao){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const s=a;for(const e of Object.keys(s))void 0===s[e]&&delete s[e];const l=await e._getAppCheckToken(),u=l?`#${Ta}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${_a}`;return Xr(e,Ia)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${pn(s).slice(1)}${u}`}const Ca="webStorageSupport";const Oa=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_o,this._completeRedirectFn=ra,this._overrideRedirectResult=ea}async _openPopup(e,t,n,r){var i;Vr(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return ka(e,await xa(e,t,n,Wr(),r),To())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Co().location.href=e}(await xa(e,t,n,Wr(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Vr(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await pa(e),n=Co().gapi;return Br(n,e,"internal-error"),t.open({where:document.body,url:wa(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:va,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Ur(e,"network-request-failed"),o=Co().setTimeout((()=>{r(i)}),ma.get());function a(){Co().clearTimeout(o),n(t)}t.ping(a).then(a,(()=>{r(i)}))}))))}(e),n=new ia(e);return t.register("authEvent",(t=>{Br(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ca,{type:Ca},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Ca];void 0!==i&&t(!!i),Fr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ua(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ni()||Ii()||Ai()}};var Ra="@firebase/auth",Aa="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pa{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Br(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Na=an("authIdTokenMaxAge")||300;let Ma=null;var La;La="Browser",ir(new wn("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;Br(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const s={apiKey:o,authDomain:a,clientPlatform:La,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mi(La)},l=new $i(n,r,i,s);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ir(new wn("auth-internal",(e=>(e=>new Pa(e))(Vi(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),dr(Ra,Aa,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(La)),dr(Ra,Aa,"esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Da="functions";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(e,t,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then((e=>this.auth=e),(()=>{})),this.messaging||t.get().then((e=>this.messaging=e),(()=>{})),this.appCheck||n.get().then((e=>this.appCheck=e),(()=>{}))}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(e)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="us-central1";class Ua{constructor(e,t,n,r,i=Fa,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new ja(t,n,r),this.cancelAllRequests=new Promise((e=>{this.deleteService=()=>Promise.resolve(e())}));try{const e=new URL(i);this.customDomain=e.origin,this.region=Fa}catch(e){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;if(null!==this.emulatorOrigin){return`${this.emulatorOrigin}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}const Za="@firebase/functions",za="0.10.0";!function(e,t){ir(new wn(Da,((t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),o=t.getProvider("messaging-internal"),a=t.getProvider("app-check-internal");return new Ua(r,i,o,a,n,e)}),"PUBLIC").setMultipleInstances(!0)),dr(Za,za,t),dr(Za,za,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(fetch.bind(self));var Ba,$a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Va={},Wa=Wa||{},Ha=$a||self;function qa(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Ka(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Ga="closure_uid_"+(1e9*Math.random()>>>0),Xa=0;function Ja(e,t,n){return e.call.apply(e.bind,arguments)}function Ya(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Qa(e,t,n){return(Qa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ja:Ya).apply(null,arguments)}function es(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function ts(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function ns(){this.s=this.s,this.o=this.o}ns.prototype.s=!1,ns.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,Ga)&&e[Ga]||(e[Ga]=++Xa))},ns.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const rs=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function is(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function os(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(qa(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function as(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}as.prototype.h=function(){this.defaultPrevented=!0};var ss=function(){if(!Ha.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Ha.addEventListener("test",(()=>{}),t),Ha.removeEventListener("test",(()=>{}),t)}catch(e){}return e}();function ls(e){return/^[\s\xa0]*$/.test(e)}function us(){var e=Ha.navigator;return e&&(e=e.userAgent)?e:""}function cs(e){return-1!=us().indexOf(e)}function ds(e){return ds[" "](e),e}ds[" "]=function(){};var hs,fs,ps,ms=cs("Opera"),gs=cs("Trident")||cs("MSIE"),ys=cs("Edge"),vs=ys||gs,bs=cs("Gecko")&&!(-1!=us().toLowerCase().indexOf("webkit")&&!cs("Edge"))&&!(cs("Trident")||cs("MSIE"))&&!cs("Edge"),ws=-1!=us().toLowerCase().indexOf("webkit")&&!cs("Edge");function Es(){var e=Ha.document;return e?e.documentMode:void 0}e:{var Ss="",ks=(fs=us(),bs?/rv:([^\);]+)(\)|;)/.exec(fs):ys?/Edge\/([\d\.]+)/.exec(fs):gs?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(fs):ws?/WebKit\/(\S+)/.exec(fs):ms?/(?:Version)[ \/]?(\S+)/.exec(fs):void 0);if(ks&&(Ss=ks?ks[1]:""),gs){var _s=Es();if(null!=_s&&_s>parseFloat(Ss)){hs=String(_s);break e}}hs=Ss}if(Ha.document&&gs){var Is=Es();ps=Is||(parseInt(hs,10)||void 0)}else ps=void 0;var Ts=ps;function xs(e,t){if(as.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(bs){e:{try{ds(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Cs[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&xs.$.h.call(this)}}ts(xs,as);var Cs={2:"touch",3:"pen",4:"mouse"};xs.prototype.h=function(){xs.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Os="closure_listenable_"+(1e6*Math.random()|0),Rs=0;function As(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Rs,this.fa=this.ia=!1}function Ps(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ns(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Ms(e){const t={};for(const n in e)t[n]=e[n];return t}const Ls="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ds(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<Ls.length;t++)n=Ls[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function js(e){this.src=e,this.g={},this.h=0}function Fs(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=rs(i,t);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(Ps(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Us(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.fa&&o.listener==t&&o.capture==!!n&&o.la==r)return i}return-1}js.prototype.add=function(e,t,n,r,i){var o=e.toString();(e=this.g[o])||(e=this.g[o]=[],this.h++);var a=Us(e,t,r,i);return-1<a?(t=e[a],n||(t.ia=!1)):((t=new As(t,this.src,o,!!r,i)).ia=n,e.push(t)),t};var Zs="closure_lm_"+(1e6*Math.random()|0),zs={};function Bs(e,t,n,r,i){if(r&&r.once)return Vs(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)Bs(e,t[o],n,r,i);return null}return n=Js(n),e&&e[Os]?e.O(t,n,Ka(r)?!!r.capture:!!r,i):$s(e,t,n,!1,r,i)}function $s(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var a=Ka(i)?!!i.capture:!!i,s=Gs(e);if(s||(e[Zs]=s=new js(e)),(n=s.add(t,n,r,a,o)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Ks;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ss||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(qs(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Vs(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)Vs(e,t[o],n,r,i);return null}return n=Js(n),e&&e[Os]?e.P(t,n,Ka(r)?!!r.capture:!!r,i):$s(e,t,n,!0,r,i)}function Ws(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)Ws(e,t[o],n,r,i);else r=Ka(r)?!!r.capture:!!r,n=Js(n),e&&e[Os]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Us(o=e.g[t],n,r,i))&&(Ps(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=Gs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Us(t,n,r,i)),(n=-1<e?t[e]:null)&&Hs(n))}function Hs(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Os])Fs(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(qs(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Gs(t))?(Fs(n,e),0==n.h&&(n.src=null,t[Zs]=null)):Ps(e)}}}function qs(e){return e in zs?zs[e]:zs[e]="on"+e}function Ks(e,t){if(e.fa)e=!0;else{t=new xs(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Hs(e),e=n.call(r,t)}return e}function Gs(e){return(e=e[Zs])instanceof js?e:null}var Xs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Js(e){return"function"==typeof e?e:(e[Xs]||(e[Xs]=function(t){return e.handleEvent(t)}),e[Xs])}function Ys(){ns.call(this),this.i=new js(this),this.S=this,this.J=null}function Qs(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new as(t,e);else if(t instanceof as)t.target=t.target||e;else{var i=t;Ds(t=new as(r,e),i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var a=t.g=n[o];i=el(a,r,!0,t)&&i}if(i=el(a=t.g=e,r,!0,t)&&i,i=el(a,r,!1,t)&&i,n)for(o=0;o<n.length;o++)i=el(a=t.g=n[o],r,!1,t)&&i}function el(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var a=t[o];if(a&&!a.fa&&a.capture==n){var s=a.listener,l=a.la||a.src;a.ia&&Fs(e.i,a),i=!1!==s.call(l,r)&&i}}return i&&!r.defaultPrevented}ts(Ys,ns),Ys.prototype[Os]=!0,Ys.prototype.removeEventListener=function(e,t,n,r){Ws(this,e,t,n,r)},Ys.prototype.N=function(){if(Ys.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ps(n[r]);delete t.g[e],t.h--}}this.J=null},Ys.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ys.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var tl=Ha.JSON.stringify;function nl(){var e=ul;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var rl=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new il),(e=>e.reset()));class il{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ol(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function al(e){Ha.setTimeout((()=>{throw e}),0)}let sl,ll=!1,ul=new class{constructor(){this.h=this.g=null}add(e,t){const n=rl.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},cl=()=>{const e=Ha.Promise.resolve(void 0);sl=()=>{e.then(dl)}};var dl=()=>{for(var e;e=nl();){try{e.h.call(e.g)}catch(e){al(e)}var t=rl;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ll=!1};function hl(e,t){Ys.call(this),this.h=e||1,this.g=t||Ha,this.j=Qa(this.qb,this),this.l=Date.now()}function fl(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function pl(e,t,n){if("function"==typeof e)n&&(e=Qa(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Qa(e.handleEvent,e)}return 2147483647<Number(t)?-1:Ha.setTimeout(e,t||0)}function ml(e){e.g=pl((()=>{e.g=null,e.i&&(e.i=!1,ml(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}ts(hl,Ys),(Ba=hl.prototype).ga=!1,Ba.T=null,Ba.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Qs(this,"tick"),this.ga&&(fl(this),this.start()))}},Ba.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ba.N=function(){hl.$.N.call(this),fl(this),delete this.g};class gl extends ns{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ml(this)}N(){super.N(),this.g&&(Ha.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yl(e){ns.call(this),this.h=e,this.g={}}ts(yl,ns);var vl=[];function bl(e,t,n,r){Array.isArray(n)||(n&&(vl[0]=n.toString()),n=vl);for(var i=0;i<n.length;i++){var o=Bs(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function wl(e){Ns(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Hs(e)}),e),e.g={}}function El(){this.g=!0}function Sl(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var a=1;a<i.length;a++)i[a]=""}}}return tl(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}yl.prototype.N=function(){yl.$.N.call(this),wl(this)},yl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},El.prototype.Ea=function(){this.g=!1},El.prototype.info=function(){};var kl={},_l=null;function Il(){return _l=_l||new Ys}function Tl(e){as.call(this,kl.Ta,e)}function xl(e){const t=Il();Qs(t,new Tl(t))}function Cl(e,t){as.call(this,kl.STAT_EVENT,e),this.stat=t}function Ol(e){const t=Il();Qs(t,new Cl(t,e))}function Rl(e,t){as.call(this,kl.Ua,e),this.size=t}function Al(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Ha.setTimeout((function(){e()}),t)}kl.Ta="serverreachability",ts(Tl,as),kl.STAT_EVENT="statevent",ts(Cl,as),kl.Ua="timingevent",ts(Rl,as);var Pl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Nl={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ml(){}function Ll(e){return e.h||(e.h=e.i())}function Dl(){}Ml.prototype.h=null;var jl,Fl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ul(){as.call(this,"d")}function Zl(){as.call(this,"c")}function zl(){}function Bl(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new yl(this),this.P=Vl,e=vs?125:void 0,this.V=new hl(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new $l}function $l(){this.i=null,this.g="",this.h=!1}ts(Ul,as),ts(Zl,as),ts(zl,Ml),zl.prototype.g=function(){return new XMLHttpRequest},zl.prototype.i=function(){return{}},jl=new zl;var Vl=45e3,Wl={},Hl={};function ql(e,t,n){e.L=1,e.v=hu(su(t)),e.s=n,e.S=!0,Kl(e,null)}function Kl(e,t){e.G=Date.now(),Yl(e),e.A=su(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Iu(n.i,"t",r),e.C=0,n=e.l.J,e.h=new $l,e.g=_c(e.l,n?t:null,!e.s),0<e.O&&(e.M=new gl(Qa(e.Pa,e,e.g),e.O)),bl(e.U,e.g,"readystatechange",e.nb),t=e.I?Ms(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),xl(),function(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var a="",s=o.split("&"),l=0;l<s.length;l++){var u=s[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");a=2<=d.length&&"type"==d[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null;else a=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function Gl(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Xl(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=Jl(e,n),r==Hl){4==t&&(e.o=4,Ol(14),i=!1),Sl(e.j,e.m,null,"[Incomplete Response]");break}if(r==Wl){e.o=4,Ol(15),Sl(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Sl(e.j,e.m,r,null),ru(e,r)}Gl(e)&&r!=Hl&&r!=Wl&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Ol(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),gc(t),t.M=!0,Ol(11))):(Sl(e.j,e.m,n,"[Invalid Chunked Response]"),nu(e),tu(e))}function Jl(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Hl:(n=Number(t.substring(n,r)),isNaN(n)?Wl:(r+=1)+n>t.length?Hl:(t=t.slice(r,r+n),e.C=r+n,t))}function Yl(e){e.Y=Date.now()+e.P,Ql(e,e.P)}function Ql(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Al(Qa(e.lb,e),t)}function eu(e){e.B&&(Ha.clearTimeout(e.B),e.B=null)}function tu(e){0==e.l.H||e.J||bc(e.l,e)}function nu(e){eu(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,fl(e.V),wl(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ru(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Au(n.i,e)))if(!e.K&&Au(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;vc(n),lc(n)}mc(n),Ol(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=Al(Qa(n.ib,n),6e3));if(1>=Ru(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else Ec(n,11)}else if((e.K||n.g==e)&&vc(n),!ls(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=r.i;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(Pu(o,o.h),o.h=null))}if(r.F){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,du(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var a=e;if((r=n).wa=kc(r,r.J?r.pa:null,r.Y),a.K){Nu(r.i,a);var s=a,l=r.L;l&&s.setTimeout(l),s.B&&(eu(s),Yl(s)),r.g=a}else pc(r);0<n.j.length&&cc(n)}else"stop"!=u[0]&&"close"!=u[0]||Ec(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Ec(n,7):sc(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}xl()}catch(e){}}function iu(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(qa(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(qa(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(qa(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}(Ba=Bl.prototype).setTimeout=function(e){this.P=e},Ba.nb=function(e){e=e.target;const t=this.M;t&&3==tc(e)?t.l():this.Pa(e)},Ba.Pa=function(e){try{if(e==this.g)e:{const c=tc(this.g);var t=this.g.Ia();this.g.da();if(!(3>c)&&(3!=c||vs||this.g&&(this.h.h||this.g.ja()||nc(this.g)))){this.J||4!=c||7==t||xl(),eu(this);var n=this.g.da();this.ca=n;t:if(Gl(this)){var r=nc(this.g);e="";var i=r.length,o=4==tc(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){nu(this),tu(this);var a="";break t}this.h.i=new Ha.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=200==n,function(e,t,n,r,i,o,a){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+a}))}(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var s,l=this.g;if((s=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ls(s)){var u=s;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,Ol(12),nu(this),tu(this);break e}Sl(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ru(this,n)}this.S?(Xl(this,c,a),vs&&this.i&&3==c&&(bl(this.U,this.V,"tick",this.mb),this.V.start())):(Sl(this.j,this.m,a,null),ru(this,a)),4==c&&nu(this),this.i&&!this.J&&(4==c?bc(this.l,this):(this.i=!1,Yl(this)))}else(function(e){const t={};e=(e.g&&2<=tc(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(ls(e[r]))continue;var n=ol(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const o=t[i]||[];t[i]=o,o.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.o=3,Ol(12)):(this.o=0,Ol(13)),nu(this),tu(this)}}}catch(e){}},Ba.mb=function(){if(this.g){var e=tc(this.g),t=this.g.ja();this.C<t.length&&(eu(this),Xl(this,e,t),this.i&&4!=e&&Yl(this))}},Ba.cancel=function(){this.J=!0,nu(this)},Ba.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(xl(),Ol(17)),nu(this),this.o=2,tu(this)):Ql(this,this.Y-e)};var ou=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function au(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof au){this.h=e.h,lu(this,e.j),this.s=e.s,this.g=e.g,uu(this,e.m),this.l=e.l;var t=e.i,n=new Eu;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),cu(this,n),this.o=e.o}else e&&(t=String(e).match(ou))?(this.h=!1,lu(this,t[1]||"",!0),this.s=fu(t[2]||""),this.g=fu(t[3]||"",!0),uu(this,t[4]),this.l=fu(t[5]||"",!0),cu(this,t[6]||"",!0),this.o=fu(t[7]||"")):(this.h=!1,this.i=new Eu(null,this.h))}function su(e){return new au(e)}function lu(e,t,n){e.j=n?fu(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function uu(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function cu(e,t,n){t instanceof Eu?(e.i=t,function(e,t){t&&!e.j&&(Su(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(ku(this,t),Iu(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=pu(t,bu)),e.i=new Eu(t,e.h))}function du(e,t,n){e.i.set(t,n)}function hu(e){return du(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function fu(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function pu(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,mu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function mu(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}au.prototype.toString=function(){var e=[],t=this.j;t&&e.push(pu(t,gu,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(pu(t,gu,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(pu(n,"/"==n.charAt(0)?vu:yu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",pu(n,wu)),e.join("")};var gu=/[#\/\?@]/g,yu=/[#\?:]/g,vu=/[#\?]/g,bu=/[#\?@]/g,wu=/#/g;function Eu(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Su(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function ku(e,t){Su(e),t=Tu(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function _u(e,t){return Su(e),t=Tu(e,t),e.g.has(t)}function Iu(e,t,n){ku(e,t),0<n.length&&(e.i=null,e.g.set(Tu(e,t),is(n)),e.h+=n.length)}function Tu(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Ba=Eu.prototype).add=function(e,t){Su(this),this.i=null,e=Tu(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Ba.forEach=function(e,t){Su(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},Ba.ta=function(){Su(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},Ba.Z=function(e){Su(this);let t=[];if("string"==typeof e)_u(this,e)&&(t=t.concat(this.g.get(Tu(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},Ba.set=function(e,t){return Su(this),this.i=null,_u(this,e=Tu(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Ba.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},Ba.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),a=this.Z(r);for(r=0;r<a.length;r++){var i=o;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")};function xu(e){this.l=e||Cu,Ha.PerformanceNavigationTiming?e=0<(e=Ha.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Ha.g&&Ha.g.Ka&&Ha.g.Ka()&&Ha.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Cu=10;function Ou(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ru(e){return e.h?1:e.g?e.g.size:0}function Au(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Pu(e,t){e.g?e.g.add(t):e.h=t}function Nu(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Mu(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return is(e.i)}xu.prototype.cancel=function(){if(this.i=Mu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Lu=class{stringify(e){return Ha.JSON.stringify(e,void 0)}parse(e){return Ha.JSON.parse(e,void 0)}};function Du(){this.g=new Lu}function ju(e,t,n){const r=n||"";try{iu(e,(function(e,n){let i=e;Ka(e)&&(i=tl(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function Fu(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function Uu(e){this.l=e.fc||null,this.j=e.ob||!1}function Zu(e,t){Ys.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=zu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ts(Uu,Ml),Uu.prototype.g=function(){return new Zu(this.l,this.j)},Uu.prototype.i=function(e){return function(){return e}}({}),ts(Zu,Ys);var zu=0;function Bu(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function $u(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Vu(e)}function Vu(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Ba=Zu.prototype).open=function(e,t){if(this.readyState!=zu)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Vu(this)},Ba.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Ha).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},Ba.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,$u(this)),this.readyState=zu},Ba.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Vu(this)),this.g&&(this.readyState=3,Vu(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Ha.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bu(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},Ba.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?$u(this):Vu(this),3==this.readyState&&Bu(this)}},Ba.Za=function(e){this.g&&(this.response=this.responseText=e,$u(this))},Ba.Ya=function(e){this.g&&(this.response=e,$u(this))},Ba.ka=function(){this.g&&$u(this)},Ba.setRequestHeader=function(e,t){this.v.append(e,t)},Ba.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Ba.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Zu.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Wu=Ha.JSON.parse;function Hu(e){Ys.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=qu,this.L=this.M=!1}ts(Hu,Ys);var qu="",Ku=/^https?$/i,Gu=["POST","PUT"];function Xu(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ju(e),Qu(e)}function Ju(e){e.F||(e.F=!0,Qs(e,"complete"),Qs(e,"error"))}function Yu(e){if(e.h&&void 0!==Wa&&(!e.C[1]||4!=tc(e)||2!=e.da()))if(e.v&&4==tc(e))pl(e.La,0,e);else if(Qs(e,"readystatechange"),4==tc(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(ou)[1]||null;!i&&Ha.self&&Ha.self.location&&(i=Ha.self.location.protocol.slice(0,-1)),r=!Ku.test(i?i.toLowerCase():"")}n=r}if(n)Qs(e,"complete"),Qs(e,"success");else{e.m=6;try{var o=2<tc(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.da()+"]",Ju(e)}}finally{Qu(e)}}}function Qu(e,t){if(e.g){ec(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Qs(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function ec(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Ha.clearTimeout(e.A),e.A=null)}function tc(e){return e.g?e.g.readyState:0}function nc(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case qu:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function rc(e){let t="";return Ns(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function ic(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=rc(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):du(e,t,n))}function oc(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ac(e){this.Ga=0,this.j=[],this.l=new El,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=oc("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=oc("baseRetryDelayMs",5e3,e),this.hb=oc("retryDelaySeedMs",1e4,e),this.eb=oc("forwardChannelMaxRetries",2,e),this.xa=oc("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new xu(e&&e.concurrentRequestLimit),this.Ja=new Du,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function sc(e){if(uc(e),3==e.H){var t=e.W++,n=su(e.I);if(du(n,"SID",e.K),du(n,"RID",t),du(n,"TYPE","terminate"),hc(e,n),(t=new Bl(e,e.l,t)).L=2,t.v=hu(su(n)),n=!1,Ha.navigator&&Ha.navigator.sendBeacon)try{n=Ha.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&Ha.Image&&((new Image).src=t.v,n=!0),n||(t.g=_c(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Yl(t)}Sc(e)}function lc(e){e.g&&(gc(e),e.g.cancel(),e.g=null)}function uc(e){lc(e),e.u&&(Ha.clearTimeout(e.u),e.u=null),vc(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Ha.clearTimeout(e.m),e.m=null)}function cc(e){if(!Ou(e.i)&&!e.m){e.m=!0;var t=e.Na;sl||cl(),ll||(sl(),ll=!0),ul.add(t,e),e.C=0}}function dc(e,t){var n;n=t?t.m:e.W++;const r=su(e.I);du(r,"SID",e.K),du(r,"RID",n),du(r,"AID",e.V),hc(e,r),e.o&&e.s&&ic(r,e.o,e.s),n=new Bl(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=fc(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Pu(e.i,n),ql(n,r,t)}function hc(e,t){e.na&&Ns(e.na,(function(e,n){du(t,n,e)})),e.h&&iu({},(function(e,n){du(t,n,e)}))}function fc(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Qa(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const s=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{ju(s,e,"req"+n+"_")}catch(e){r&&r(s)}}if(o){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function pc(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;sl||cl(),ll||(sl(),ll=!0),ul.add(t,e),e.A=0}}function mc(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Al(Qa(e.Ma,e),wc(e,e.A)),e.A++,!0)}function gc(e){null!=e.B&&(Ha.clearTimeout(e.B),e.B=null)}function yc(e){e.g=new Bl(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=su(e.wa);du(t,"RID","rpc"),du(t,"SID",e.K),du(t,"AID",e.V),du(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&du(t,"TO",e.qa),du(t,"TYPE","xmlhttp"),hc(e,t),e.o&&e.s&&ic(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=hu(su(t)),n.s=null,n.S=!0,Kl(n,e)}function vc(e){null!=e.v&&(Ha.clearTimeout(e.v),e.v=null)}function bc(e,t){var n=null;if(e.g==t){vc(e),gc(e),e.g=null;var r=2}else{if(!Au(e.i,t))return;n=t.F,Nu(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;Qs(r=Il(),new Rl(r,n)),cc(e)}else pc(e);else if(3==(i=t.o)||0==i&&0<t.ca||!(1==r&&function(e,t){return!(Ru(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Al(Qa(e.Na,e,t),wc(e,e.C)),e.C++,0)))}(e,t)||2==r&&mc(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Ec(e,5);break;case 4:Ec(e,10);break;case 3:Ec(e,6);break;default:Ec(e,2)}}function wc(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Ec(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=Qa(e.pb,e);n||(n=new au("//www.google.com/images/cleardot.gif"),Ha.location&&"http"==Ha.location.protocol||lu(n,"https"),hu(n)),function(e,t){const n=new El;if(Ha.Image){const r=new Image;r.onload=es(Fu,n,r,"TestLoadImage: loaded",!0,t),r.onerror=es(Fu,n,r,"TestLoadImage: error",!1,t),r.onabort=es(Fu,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=es(Fu,n,r,"TestLoadImage: timeout",!1,t),Ha.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Ol(2);e.H=0,e.h&&e.h.za(t),Sc(e),uc(e)}function Sc(e){if(e.H=0,e.ma=[],e.h){const t=Mu(e.i);0==t.length&&0==e.j.length||(os(e.ma,t),os(e.ma,e.j),e.i.i.length=0,is(e.j),e.j.length=0),e.h.ya()}}function kc(e,t,n){var r=n instanceof au?su(n):new au(n);if(""!=r.g)t&&(r.g=t+"."+r.g),uu(r,r.m);else{var i=Ha.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new au(null);r&&lu(o,r),t&&(o.g=t),i&&uu(o,i),n&&(o.l=n),r=o}return n=e.F,t=e.Da,n&&t&&du(r,n,t),du(r,"VER",e.ra),hc(e,r),r}function _c(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new Hu(new Uu({ob:!0})):new Hu(e.va)).Oa(e.J),t}function Ic(){}function Tc(){if(gs&&!(10<=Number(Ts)))throw Error("Environmental error: no available transport.")}function xc(e,t){Ys.call(this),this.g=new ac(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ls(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ls(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Rc(this)}function Cc(e){Ul.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Oc(){Zl.call(this),this.status=1}function Rc(e){this.g=e}function Ac(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Pc(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var o=e.g[3],a=t+(o^n&(i^o))+r[0]+3614090360&4294967295;a=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=(n=(i=(o=(t=n+(a<<7&4294967295|a>>>25))+((a=o+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^o&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(o^t))+r[3]+3250441966&4294967295)<<22&4294967295|a>>>10))+((a=t+(o^n&(i^o))+r[4]+4118548399&4294967295)<<7&4294967295|a>>>25))+((a=o+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^o&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(o^t))+r[7]+4249261313&4294967295)<<22&4294967295|a>>>10))+((a=t+(o^n&(i^o))+r[8]+1770035416&4294967295)<<7&4294967295|a>>>25))+((a=o+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^o&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(o^t))+r[11]+2304563134&4294967295)<<22&4294967295|a>>>10))+((a=t+(o^n&(i^o))+r[12]+1804603682&4294967295)<<7&4294967295|a>>>25))+((a=o+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^o&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(o^t))+r[15]+1236535329&4294967295)<<22&4294967295|a>>>10))+((a=t+(i^o&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|a>>>27))+((a=o+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(o^t))+r[11]+643717713&4294967295)<<14&4294967295|a>>>18))+((a=n+(o^t&(i^o))+r[0]+3921069994&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^o&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|a>>>27))+((a=o+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(o^t))+r[15]+3634488961&4294967295)<<14&4294967295|a>>>18))+((a=n+(o^t&(i^o))+r[4]+3889429448&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^o&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|a>>>27))+((a=o+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(o^t))+r[3]+4107603335&4294967295)<<14&4294967295|a>>>18))+((a=n+(o^t&(i^o))+r[8]+1163531501&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^o&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|a>>>27))+((a=o+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(o^t))+r[7]+1735328473&4294967295)<<14&4294967295|a>>>18))+((a=n+(o^t&(i^o))+r[12]+2368359562&4294967295)<<20&4294967295|a>>>12))+((a=t+(n^i^o)+r[5]+4294588738&4294967295)<<4&4294967295|a>>>28))+((a=o+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|a>>>21))+((a=i+(o^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^o^t)+r[14]+4259657740&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^o)+r[1]+2763975236&4294967295)<<4&4294967295|a>>>28))+((a=o+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|a>>>21))+((a=i+(o^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^o^t)+r[10]+3200236656&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^o)+r[13]+681279174&4294967295)<<4&4294967295|a>>>28))+((a=o+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|a>>>21))+((a=i+(o^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^o^t)+r[6]+76029189&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^o)+r[9]+3654602809&4294967295)<<4&4294967295|a>>>28))+((a=o+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|a>>>21))+((a=i+(o^t^n)+r[15]+530742520&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^o^t)+r[2]+3299628645&4294967295)<<23&4294967295|a>>>9))+((a=t+(i^(n|~o))+r[0]+4096336452&4294967295)<<6&4294967295|a>>>26))+((a=o+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(o|~n))+r[14]+2878612391&4294967295)<<15&4294967295|a>>>17))+((a=n+(o^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~o))+r[12]+1700485571&4294967295)<<6&4294967295|a>>>26))+((a=o+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(o|~n))+r[10]+4293915773&4294967295)<<15&4294967295|a>>>17))+((a=n+(o^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~o))+r[8]+1873313359&4294967295)<<6&4294967295|a>>>26))+((a=o+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(o|~n))+r[6]+2734768916&4294967295)<<15&4294967295|a>>>17))+((a=n+(o^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|a>>>11))+((o=(t=n+((a=t+(i^(n|~o))+r[4]+4149444226&4294967295)<<6&4294967295|a>>>26))+((a=o+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|a>>>22))^((i=o+((a=i+(t^(o|~n))+r[2]+718787259&4294967295)<<15&4294967295|a>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}function Nc(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var o=0|e[i];r&&o==t||(n[i]=o,r=!1)}this.g=n}(Ba=Hu.prototype).Oa=function(e){this.M=e},Ba.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():jl.g(),this.C=this.u?Ll(this.u):Ll(jl),this.g.onreadystatechange=Qa(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void Xu(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=Ha.FormData&&e instanceof Ha.FormData,!(0<=rs(Gu,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ec(this),0<this.B&&((this.L=function(e){return gs&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qa(this.ua,this)):this.A=pl(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Xu(this,e)}},Ba.ua=function(){void 0!==Wa&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qs(this,"timeout"),this.abort(8))},Ba.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Qs(this,"complete"),Qs(this,"abort"),Qu(this))},Ba.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qu(this,!0)),Hu.$.N.call(this)},Ba.La=function(){this.s||(this.G||this.v||this.l?Yu(this):this.kb())},Ba.kb=function(){Yu(this)},Ba.isActive=function(){return!!this.g},Ba.da=function(){try{return 2<tc(this)?this.g.status:-1}catch(e){return-1}},Ba.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Ba.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Wu(t)}},Ba.Ia=function(){return this.m},Ba.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ba=ac.prototype).ra=8,Ba.H=1,Ba.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Bl(this,this.l,e);let o=this.s;if(this.U&&(o?(o=Ms(o),Ds(o,this.U)):o=this.U),null!==this.o||this.O||(i.I=o,o=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=fc(this,i,t),du(n=su(this.I),"RID",e),du(n,"CVER",22),this.F&&du(n,"X-HTTP-Session-Id",this.F),hc(this,n),o&&(this.O?t="headers="+encodeURIComponent(String(rc(o)))+"&"+t:this.o&&ic(n,this.o,o)),Pu(this.i,i),this.bb&&du(n,"TYPE","init"),this.P?(du(n,"$req",t),du(n,"SID","null"),i.aa=!0,ql(i,n,null)):ql(i,n,t),this.H=2}}else 3==this.H&&(e?dc(this,e):0==this.j.length||Ou(this.i)||dc(this))},Ba.Ma=function(){if(this.u=null,yc(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Al(Qa(this.jb,this),e)}},Ba.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ol(10),lc(this),yc(this))},Ba.ib=function(){null!=this.v&&(this.v=null,lc(this),mc(this),Ol(19))},Ba.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Ol(2)):(this.l.info("Failed to ping google.com"),Ol(1))},Ba.isActive=function(){return!!this.h&&this.h.isActive(this)},(Ba=Ic.prototype).Ba=function(){},Ba.Aa=function(){},Ba.za=function(){},Ba.ya=function(){},Ba.isActive=function(){return!0},Ba.Va=function(){},Tc.prototype.g=function(e,t){return new xc(e,t)},ts(xc,Ys),xc.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Ol(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=kc(e,null,e.Y),cc(e)},xc.prototype.close=function(){sc(this.g)},xc.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=tl(e),e=n);t.j.push(new class{constructor(e,t){this.g=e,this.map=t}}(t.fb++,e)),3==t.H&&cc(t)},xc.prototype.N=function(){this.g.h=null,delete this.j,sc(this.g),delete this.g,xc.$.N.call(this)},ts(Cc,Ul),ts(Oc,Zl),ts(Rc,Ic),Rc.prototype.Ba=function(){Qs(this.g,"a")},Rc.prototype.Aa=function(e){Qs(this.g,new Cc(e))},Rc.prototype.za=function(e){Qs(this.g,new Oc)},Rc.prototype.ya=function(){Qs(this.g,"b")},ts(Ac,(function(){this.blockSize=-1})),Ac.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Ac.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,o=0;o<t;){if(0==i)for(;o<=n;)Pc(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(r[i++]=e.charCodeAt(o++),i==this.blockSize){Pc(this,r),i=0;break}}else for(;o<t;)if(r[i++]=e[o++],i==this.blockSize){Pc(this,r),i=0;break}}this.h=i,this.i+=t},Ac.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var Mc={};function Lc(e){return-128<=e&&128>e?function(e,t){var n=Mc;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new Nc([0|e],0>e?-1:0)})):new Nc([0|e],0>e?-1:0)}function Dc(e){if(isNaN(e)||!isFinite(e))return Fc;if(0>e)return $c(Dc(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=jc;return new Nc(t,0)}var jc=4294967296,Fc=Lc(0),Uc=Lc(1),Zc=Lc(16777216);function zc(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Bc(e){return-1==e.h}function $c(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Nc(n,~e.h).add(Uc)}function Vc(e,t){return e.add($c(t))}function Wc(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Hc(e,t){this.g=e,this.h=t}function qc(e,t){if(zc(t))throw Error("division by zero");if(zc(e))return new Hc(Fc,Fc);if(Bc(e))return t=qc($c(e),t),new Hc($c(t.g),$c(t.h));if(Bc(t))return t=qc(e,$c(t)),new Hc($c(t.g),t.h);if(30<e.g.length){if(Bc(e)||Bc(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Uc,r=t;0>=r.X(e);)n=Kc(n),r=Kc(r);var i=Gc(n,1),o=Gc(r,1);for(r=Gc(r,2),n=Gc(n,2);!zc(r);){var a=o.add(r);0>=a.X(e)&&(i=i.add(n),o=a),r=Gc(r,1),n=Gc(n,1)}return t=Vc(e,i.R(t)),new Hc(i,t)}for(i=Fc;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),a=(o=Dc(n)).R(t);Bc(a)||0<a.X(e);)a=(o=Dc(n-=r)).R(t);zc(o)&&(o=Uc),i=i.add(o),e=Vc(e,a)}return new Hc(i,e)}function Kc(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Nc(n,e.h)}function Gc(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],o=0;o<r;o++)i[o]=0<t?e.D(o+n)>>>t|e.D(o+n+1)<<32-t:e.D(o+n);return new Nc(i,e.h)}(Ba=Nc.prototype).ea=function(){if(Bc(this))return-$c(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:jc+r)*t,t*=jc}return e},Ba.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(zc(this))return"0";if(Bc(this))return"-"+$c(this).toString(e);for(var t=Dc(Math.pow(e,6)),n=this,r="";;){var i=qc(n,t).g,o=((0<(n=Vc(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(zc(n=i))return o+r;for(;6>o.length;)o="0"+o;r=o+r}},Ba.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},Ba.X=function(e){return Bc(e=Vc(this,e))?-1:zc(e)?0:1},Ba.abs=function(){return Bc(this)?$c(this):this},Ba.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var o=r+(65535&this.D(i))+(65535&e.D(i)),a=(o>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=a>>>16,o&=65535,a&=65535,n[i]=a<<16|o}return new Nc(n,-2147483648&n[n.length-1]?-1:0)},Ba.R=function(e){if(zc(this)||zc(e))return Fc;if(Bc(this))return Bc(e)?$c(this).R($c(e)):$c($c(this).R(e));if(Bc(e))return $c(this.R($c(e)));if(0>this.X(Zc)&&0>e.X(Zc))return Dc(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var o=this.D(r)>>>16,a=65535&this.D(r),s=e.D(i)>>>16,l=65535&e.D(i);n[2*r+2*i]+=a*l,Wc(n,2*r+2*i),n[2*r+2*i+1]+=o*l,Wc(n,2*r+2*i+1),n[2*r+2*i+1]+=a*s,Wc(n,2*r+2*i+1),n[2*r+2*i+2]+=o*s,Wc(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Nc(n,0)},Ba.gb=function(e){return qc(this,e).h},Ba.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Nc(n,this.h&e.h)},Ba.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Nc(n,this.h|e.h)},Ba.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Nc(n,this.h^e.h)},Tc.prototype.createWebChannel=Tc.prototype.g,xc.prototype.send=xc.prototype.u,xc.prototype.open=xc.prototype.m,xc.prototype.close=xc.prototype.close,Pl.NO_ERROR=0,Pl.TIMEOUT=8,Pl.HTTP_ERROR=6,Nl.COMPLETE="complete",Dl.EventType=Fl,Fl.OPEN="a",Fl.CLOSE="b",Fl.ERROR="c",Fl.MESSAGE="d",Ys.prototype.listen=Ys.prototype.O,Hu.prototype.listenOnce=Hu.prototype.P,Hu.prototype.getLastError=Hu.prototype.Sa,Hu.prototype.getLastErrorCode=Hu.prototype.Ia,Hu.prototype.getStatus=Hu.prototype.da,Hu.prototype.getResponseJson=Hu.prototype.Wa,Hu.prototype.getResponseText=Hu.prototype.ja,Hu.prototype.send=Hu.prototype.ha,Hu.prototype.setWithCredentials=Hu.prototype.Oa,Ac.prototype.digest=Ac.prototype.l,Ac.prototype.reset=Ac.prototype.reset,Ac.prototype.update=Ac.prototype.j,Nc.prototype.add=Nc.prototype.add,Nc.prototype.multiply=Nc.prototype.R,Nc.prototype.modulo=Nc.prototype.gb,Nc.prototype.compare=Nc.prototype.X,Nc.prototype.toNumber=Nc.prototype.ea,Nc.prototype.toString=Nc.prototype.toString,Nc.prototype.getBits=Nc.prototype.D,Nc.fromNumber=Dc,Nc.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return $c(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=Dc(Math.pow(n,8)),i=Fc,o=0;o<t.length;o+=8){var a=Math.min(8,t.length-o),s=parseInt(t.substring(o,o+a),n);8>a?(a=Dc(Math.pow(n,a)),i=i.R(a).add(Dc(s))):i=(i=i.R(r)).add(Dc(s))}return i};Va.createWebChannelTransport=function(){return new Tc},Va.getStatEventTarget=function(){return Il()},Va.ErrorCode=Pl,Va.EventType=Nl,Va.Event=kl,Va.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Va.FetchXmlHttpFactory=Uu,Va.WebChannel=Dl,Va.XhrIo=Hu,Va.Md5=Ac;var Xc=Va.Integer=Nc;i(4155);const Jc="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Yc.UNAUTHENTICATED=new Yc(null),Yc.GOOGLE_CREDENTIALS=new Yc("google-credentials-uid"),Yc.FIRST_PARTY=new Yc("first-party-uid"),Yc.MOCK_USER=new Yc("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qc="9.23.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new An("@firebase/firestore");function td(e,...t){if(ed.logLevel<=Tn.DEBUG){const n=t.map(id);ed.debug(`Firestore (${Qc}): ${e}`,...n)}}function nd(e,...t){if(ed.logLevel<=Tn.ERROR){const n=t.map(id);ed.error(`Firestore (${Qc}): ${e}`,...n)}}function rd(e,...t){if(ed.logLevel<=Tn.WARN){const n=t.map(id);ed.warn(`Firestore (${Qc}): ${e}`,...n)}}function id(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(e="Unexpected state"){const t=`FIRESTORE (${Qc}) INTERNAL ASSERTION FAILED: `+e;throw nd(t),new Error(t)}function ad(e,t){e||od()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sd={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ld extends un{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Yc.UNAUTHENTICATED)))}shutdown(){}}class hd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class fd{constructor(e){this.t=e,this.currentUser=Yc.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ud;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ud,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},a=e=>{td("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(td("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ud)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(td("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ad("string"==typeof t.accessToken),new cd(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ad(null===e||"string"==typeof e),new Yc(e)}}class pd{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Yc.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class md{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new pd(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Yc.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yd{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&td("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,td("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{td("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):td("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ad("string"==typeof e.token),this.T=e.token,new gd(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vd(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=vd(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function wd(e,t){return e<t?-1:e>t?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ed{constructor(e,t,n){void 0===t?t=0:t>e.length&&od(),void 0===n?n=e.length-t:n>e.length-t&&od(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ed.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ed?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Sd extends Ed{construct(e,t,n){return new Sd(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ld(sd.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Sd(t)}static emptyPath(){return new Sd([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kd{constructor(e){this.path=e}static fromPath(e){return new kd(Sd.fromString(e))}static fromName(e){return new kd(Sd.fromString(e).popFirst(5))}static empty(){return new kd(Sd.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Sd.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Sd.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new kd(new Sd(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}_d.UNKNOWN_ID=-1;function Id(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Td{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function xd(e){return 0===e&&1/e==-1/0}Td.ct=-1;const Cd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Od=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Rd=Od;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ad{constructor(e,t){this.comparator=e,this.root=t||Nd.EMPTY}insert(e,t){return new Ad(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nd.BLACK,null,null))}remove(e){return new Ad(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nd.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pd(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pd(this.root,e,this.comparator,!0)}}class Pd{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nd{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Nd.RED,this.left=null!=r?r:Nd.EMPTY,this.right=null!=i?i:Nd.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Nd(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Nd.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Nd.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nd.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nd.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw od();if(this.right.isRed())throw od();const e=this.left.check();if(e!==this.right.check())throw od();return e+(this.isRed()?0:1)}}Nd.EMPTY=null,Nd.RED=!0,Nd.BLACK=!1,Nd.EMPTY=new class{constructor(){this.size=0}get key(){throw od()}get value(){throw od()}get color(){throw od()}get left(){throw od()}get right(){throw od()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Nd(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Md{constructor(e){this.comparator=e,this.data=new Ad(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ld(this.data.getIterator())}getIteratorFrom(e){return new Ld(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Md))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Md(this.comparator);return t.data=e,t}}class Ld{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jd{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Dd("Invalid base64 string: "+e):e}}(e);return new jd(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new jd(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return wd(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jd.EMPTY_BYTE_STRING=new jd("");function Fd(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ud(e){return"string"==typeof e?jd.fromBase64String(e):jd.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zd{constructor(e,t,n,r,i,o,a,s,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=s,this.useFetchStreams=l}}class zd{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new zd("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof zd&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Ad(kd.comparator);new Ad(kd.comparator);new Ad(kd.comparator),new Md(kd.comparator);new Md(wd);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var $d,Vd;(Vd=$d||($d={}))[Vd.OK=0]="OK",Vd[Vd.CANCELLED=1]="CANCELLED",Vd[Vd.UNKNOWN=2]="UNKNOWN",Vd[Vd.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Vd[Vd.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Vd[Vd.NOT_FOUND=5]="NOT_FOUND",Vd[Vd.ALREADY_EXISTS=6]="ALREADY_EXISTS",Vd[Vd.PERMISSION_DENIED=7]="PERMISSION_DENIED",Vd[Vd.UNAUTHENTICATED=16]="UNAUTHENTICATED",Vd[Vd.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Vd[Vd.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Vd[Vd.ABORTED=10]="ABORTED",Vd[Vd.OUT_OF_RANGE=11]="OUT_OF_RANGE",Vd[Vd.UNIMPLEMENTED=12]="UNIMPLEMENTED",Vd[Vd.INTERNAL=13]="INTERNAL",Vd[Vd.UNAVAILABLE=14]="UNAVAILABLE",Vd[Vd.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Xc([4294967295,4294967295],0);class Wd extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hd{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Fd(e.integerValue));else if("doubleValue"in e){const n=Fd(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),xd(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Ud(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?Bd(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):od()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const e of Object.keys(n))this.Te(e,t),this.me(n[e],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const e of n)this.me(e,t)}ve(e,t){this.ye(t,37),kd.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}Hd.Ve=new Hd;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Uint8Array(0);class qd{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new qd(e,qd.DEFAULT_COLLECTION_PERCENTILE,qd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qd.DEFAULT_COLLECTION_PERCENTILE=10,qd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qd.DEFAULT=new qd(41943040,qd.DEFAULT_COLLECTION_PERCENTILE,qd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qd.DISABLED=new qd(-1,0,0);function Kd(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gd{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&td("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xd{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ud,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,a=new Xd(e,t,o,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ld(sd.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jd(e,t){if(nd("AsyncQueue",`${t}: ${e}`),Id(e))return new ld(sd.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yd{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Yc.UNAUTHENTICATED,this.clientId=bd.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{td("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(td("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ld(sd.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ud;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Jd(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qd(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const eh=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":od()}function nh(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ld(sd.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=th(e);throw new ld(sd.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rh{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new ld(sd.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ld(sd.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new ld(sd.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qd(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ld(sd.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ld(sd.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ld(sd.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class ih{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ld(sd.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ld(sd.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rh(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new dd;switch(e.type){case"firstParty":return new md(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ld(sd.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=eh.get(e);t&&(td("ComponentProvider","Removing Datastore"),eh.delete(e),t.terminate())}(this),Promise.resolve()}}function oh(e,t,n,r={}){var i;const o=(e=nh(e,ih))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==a&&rd("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Yc.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Yt(JSON.stringify({alg:"none",type:"JWT"})),Yt(JSON.stringify(o)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new ld(sd.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Yc(o)}e._authCredentials=new hd(new cd(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ah{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Gd(this,"async_queue_retry"),this.Xc=()=>{const e=Kd();e&&td("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=Kd();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Kd();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new ud;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Id(e))throw e;td("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw nd("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=Xd.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(r),r}Zc(){this.Wc&&od()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}class sh extends ih{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ah,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lh(this),this._firestoreClient.terminate()}}function lh(e){var t,n,r;const i=e._freezeSettings(),o=function(e,t,n,r){return new Zd(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Qd(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Yd(e._authCredentials,e._appCheckCredentials,e._queue,o),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}!function(e,t=!0){!function(e){Qc=e}(lr),ir(new wn("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),o=new sh(new fd(e.getProvider("auth-internal")),new yd(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ld(sd.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zd(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),dr(Jc,"3.13.0",e),dr(Jc,"3.13.0","esm2017")}();i(5108);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},ch={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,a=o?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,u=i>>2,c=(3&i)<<4|a>>4;let d=(15&a)<<2|l>>6,h=63&l;s||(h=64,o||(d=64)),r.push(n[u],n[c],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(uh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==a||null==s)throw Error();const l=i<<2|o>>4;if(r.push(l),64!==a){const e=o<<4&240|a>>2;if(r.push(e),64!==s){const e=a<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},dh=function(e){return function(e){const t=uh(e);return ch.encodeByteArray(t,!0)}(e).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,hh.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fh.prototype.create)}}class fh{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(ph,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new hh(r,a,n)}}const ph=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gh=i(5108);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=[];var vh;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(vh||(vh={}));const bh={debug:vh.DEBUG,verbose:vh.VERBOSE,info:vh.INFO,warn:vh.WARN,error:vh.ERROR,silent:vh.SILENT},wh=vh.INFO,Eh={[vh.DEBUG]:"log",[vh.VERBOSE]:"log",[vh.INFO]:"info",[vh.WARN]:"warn",[vh.ERROR]:"error"},Sh=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Eh[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);gh[i](`[${r}]  ${e.name}:`,...n)};const kh=(e,t)=>t.some((t=>e instanceof t));let _h,Ih;const Th=new WeakMap,xh=new WeakMap,Ch=new WeakMap,Oh=new WeakMap,Rh=new WeakMap;let Ah={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return xh.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ch.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mh(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ph(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ih||(Ih=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Lh(this),t),Mh(Th.get(this))}:function(...t){return Mh(e.apply(Lh(this),t))}:function(t,...n){const r=e.call(Lh(this),t,...n);return Ch.set(r,t.sort?t.sort():[t]),Mh(r)}}function Nh(e){return"function"==typeof e?Ph(e):(e instanceof IDBTransaction&&function(e){if(xh.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));xh.set(e,t)}(e),kh(e,_h||(_h=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Ah):e)}function Mh(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(Mh(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&Th.set(t,e)})).catch((()=>{})),Rh.set(t,e),t}(e);if(Oh.has(e))return Oh.get(e);const t=Nh(e);return t!==e&&(Oh.set(e,t),Rh.set(t,e)),t}const Lh=e=>Rh.get(e);const Dh=["get","getKey","getAll","getAllKeys","count"],jh=["put","add","delete","clear"],Fh=new Map;function Uh(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Fh.get(t))return Fh.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=jh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Dh.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let a=o.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&o.done]))[0]};return Fh.set(t,o),o}!function(e){Ah=e(Ah)}((e=>({...e,get:(t,n,r)=>Uh(t,n)||e.get(t,n,r),has:(t,n)=>!!Uh(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const zh="@firebase/app",Bh="0.7.33",$h=new class{constructor(e){this.name=e,this._logLevel=wh,this._logHandler=Sh,this._userLogHandler=null,yh.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in vh))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?bh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,vh.DEBUG,...e),this._logHandler(this,vh.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,vh.VERBOSE,...e),this._logHandler(this,vh.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,vh.INFO,...e),this._logHandler(this,vh.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,vh.WARN,...e),this._logHandler(this,vh.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,vh.ERROR,...e),this._logHandler(this,vh.ERROR,...e)}}("@firebase/app"),Vh={[zh]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Wh=new Map,Hh=new Map;function qh(e,t){try{e.container.addComponent(t)}catch(n){$h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Kh(e){const t=e.name;if(Hh.has(t))return $h.debug(`There were multiple attempts to register component ${t}.`),!1;Hh.set(t,e);for(const t of Wh.values())qh(t,e);return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gh=new fh("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});function Xh(e,t,n){var r;let i=null!==(r=Vh[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void $h.warn(e.join(" "))}Kh(new mh(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jh="firebase-heartbeat-database",Yh=1,Qh="firebase-heartbeat-store";let ef=null;function tf(){return ef||(ef=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=Mh(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(Mh(a.result),e.oldVersion,e.newVersion,Mh(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),s}(Jh,Yh,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Qh)}}).catch((e=>{throw Gh.create("idb-open",{originalErrorMessage:e.message})}))),ef}async function nf(e,t){var n;try{const n=(await tf()).transaction(Qh,"readwrite"),r=n.objectStore(Qh);return await r.put(t,rf(e)),n.done}catch(e){if(e instanceof hh)$h.warn(e.message);else{const t=Gh.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});$h.warn(t.message)}}}function rf(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sf(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=af();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=af(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),lf(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=dh(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function af(){return(new Date).toISOString().substring(0,10)}class sf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){var t;try{return(await tf()).transaction(Qh).objectStore(Qh).get(rf(e))}catch(e){if(e instanceof hh)$h.warn(e.message);else{const n=Gh.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});$h.warn(n.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return nf(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return nf(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function lf(e){return dh(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){Kh(new mh("platform-logger",(e=>new Zh(e)),"PRIVATE")),Kh(new mh("heartbeat",(e=>new of(e)),"PRIVATE")),Xh(zh,Bh,e),Xh(zh,Bh,"esm2017"),Xh("fire-js","")}(""),Xh("firestore-stripe-payments","0.0.6");class uf{constructor(e,t){this.app=e,this.options=t,this.components={}}static create(e,t){return new uf(e,t)}get customersCollection(){return this.options.customersCollection}get productsCollection(){return this.options.productsCollection}getComponent(e){let t=this.components[e];return t||null}setComponent(e,t){this.components[e]=t}}class cf extends Error{constructor(e,t,n){super(t),this.code=e,this.message=t,this.cause=n}}var df=i(5108),hf=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},ff={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,d=(3&o)<<4|s>>4,h=(15&s)<<2|u>>6,f=63&u;l||(f=64,a||(h=64)),r.push(n[c],n[d],n[h],n[f])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(hf(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&(o=e[n++]))<<12|(63&(s=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{o=e[n++];var s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,l=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==l)throw Error();var u=o<<2|a>>4;if(r.push(u),64!==s){var c=a<<4&240|s>>2;if(r.push(c),64!==l){var d=s<<6&192|l;r.push(d)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},pf=function(e){try{return ff.decodeString(e,!0)}catch(e){df.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var mf=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gf(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yf=function(e){function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name="FirebaseError",Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,vf.prototype.create),o}return Ir(t,e),t}(Error),vf=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],a=o?function(e,t){return e.replace(bf,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}(o,r):"Error",s=this.serviceName+": "+a+" ("+i+").";return new yf(i,s,r)},e}();var bf=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wf(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var o=i[r];n(o[0],o[1])}return t.length?"&"+t.join("&"):""}function Ef(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=e.split("="),r=n[0],i=n[1];t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function Sf(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,a,s=this.chain_[0],l=this.chain_[1],u=this.chain_[2],c=this.chain_[3],d=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=c^l&(u^c),a=1518500249):(o=l^u^c,a=1859775393):r<60?(o=l&u|c&(l|u),a=2400959708):(o=l^u^c,a=3395469782);i=(s<<5|s>>>27)+o+d+a+n[r]&4294967295;d=c,c=u,u=4294967295&(l<<30|l>>>2),l=s,s=i}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e}}();var kf=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=_f),void 0===r.error&&(r.error=_f),void 0===r.complete&&(r.complete=_f);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){void 0!==df&&df.error&&df.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function _f(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function If(e){return e&&e._delegate?e._delegate:e}var Tf,xf=i(5108);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function Cf(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Of,Rf=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Of||(Of={}));var Af={debug:Of.DEBUG,verbose:Of.VERBOSE,info:Of.INFO,warn:Of.WARN,error:Of.ERROR,silent:Of.SILENT},Pf=Of.INFO,Nf=((Tf={})[Of.DEBUG]="log",Tf[Of.VERBOSE]="log",Tf[Of.INFO]="info",Tf[Of.WARN]="warn",Tf[Of.ERROR]="error",Tf),Mf=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),o=Nf[t];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");xf[o].apply(xf,Cf(["["+i+"]  "+e.name+":"],n))}},Lf=function(){function e(e){this.name=e,this._logLevel=Pf,this._logHandler=Mf,this._userLogHandler=null,Rf.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in Of))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?Af[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Cf([this,Of.DEBUG],e)),this._logHandler.apply(this,Cf([this,Of.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Cf([this,Of.VERBOSE],e)),this._logHandler.apply(this,Cf([this,Of.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Cf([this,Of.INFO],e)),this._logHandler.apply(this,Cf([this,Of.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Cf([this,Of.WARN],e)),this._logHandler.apply(this,Cf([this,Of.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Cf([this,Of.ERROR],e)),this._logHandler.apply(this,Cf([this,Of.ERROR],e))},e}();var Df=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),jf="[DEFAULT]",Ff=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new mf;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:jf})}catch(e){}try{for(var r=Or(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var o=Rr(i.value,2),a=o[0],s=o[1],l=this.normalizeInstanceIdentifier(a);try{var u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch(e){}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=jf),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return xr(this,void 0,void 0,(function(){var e;return Cr(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Ar(Ar([],Rr(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),Rr(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=jf),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=jf),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var s=Or(this.instancesDeferred.entries()),l=s.next();!l.done;l=s.next()){var u=Rr(l.value,2),c=u[0],d=u[1];o===this.normalizeInstanceIdentifier(c)&&d.resolve(a)}}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}return a},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var o=Or(i),a=o.next();!a.done;a=o.next()){var s=a.value;try{s(e,t)}catch(e){}}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===jf?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=jf),this.component?this.component.multipleInstances?e:jf:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){function e(e){this.name=e,this.providers=new Map}e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ff(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())}})(),i(5108);function Uf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zf=Uf,zf=new vf("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Bf=new Lf("@firebase/auth");function $f(e,...t){Bf.logLevel<=Of.ERROR&&Bf.error(`Auth (${lr}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(e,...t){throw qf(e,...t)}function Wf(e,...t){return qf(e,...t)}function Hf(e,t,n){const r=Object.assign(Object.assign({},Zf()),{[t]:n});return new vf("auth","Firebase",r).create(t,{appName:e.name})}function qf(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return zf.create(e,...t)}function Kf(e,t,...n){if(!e)throw qf(t,...n)}function Gf(e){const t="INTERNAL ASSERTION FAILED: "+e;throw $f(t),new Error(t)}function Xf(e,t){e||Gf(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=new Map;function Yf(e){Xf(e instanceof Function,"Expected a class definition");let t=Jf.get(e);return t?(Xf(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Jf.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(){return"http:"===ep()||"https:"===ep()}function ep(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!Qf()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class np{constructor(e,t){this.shortDelay=e,this.longDelay=t,Xf(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gf())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return tp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(e,t){Xf(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Gf("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Gf("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Gf("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},ap=new np(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function lp(e,t,n,r,i={}){return up(e,i,(()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const a=wf(Object.assign({key:e.config.apiKey},o)).slice(1),s=new(ip.headers());return s.set("Content-Type","application/json"),s.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&s.set("X-Firebase-Locale",e.languageCode),ip.fetch()(dp(e,e.config.apiHost,n,a),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},i))}))}async function up(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},op),t);try{const t=new hp(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fp(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw fp(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw fp(e,"email-already-in-use",o);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw Hf(e,s,a);Vf(e,s)}}catch(t){if(t instanceof yf)throw t;Vf(e,"network-request-failed")}}async function cp(e,t,n,r,i={}){const o=await lp(e,t,n,r,i);return"mfaPendingCredential"in o&&Vf(e,"multi-factor-auth-required",{serverResponse:o}),o}function dp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?rp(e.config,i):`${e.config.apiScheme}://${i}`}class hp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Wf(this.auth,"timeout"))),ap.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function fp(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Wf(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pp(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(e){return 1e3*Number(e)}function gp(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return $f("JWT malformed, contained fewer than 3 sections"),null;try{const e=pf(n);return e?JSON.parse(e):($f("Failed to decode base64 JWT payload"),null)}catch(e){return $f("Caught error parsing JWT payload as JSON",e),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yp(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof yf&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class vp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pp(this.lastLoginAt),this.creationTime=pp(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(e){var t;const n=e.auth,r=await e.getIdToken(),i=await yp(e,async function(e,t){return lp(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Kf(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=Tr(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const s=(l=e.providerData,u=a,[...l.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var l,u;const c=e.isAnonymous,d=!(e.email&&o.passwordHash||(null==s?void 0:s.length)),h=!!c&&d,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new bp(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ep{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Kf(e.idToken,"internal-error"),Kf(void 0!==e.idToken,"internal-error"),Kf(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=gp(e);return Kf(t,"internal-error"),Kf(void 0!==t.exp,"internal-error"),Kf(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Kf(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await up(e,{},(()=>{const n=wf({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=dp(e,r,"/v1/token",`key=${i}`);return ip.fetch()(o,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new Ep;return n&&(Kf("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(Kf("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(Kf("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ep,this.toJSON())}_performRefresh(){return Gf("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(e,t){Kf("string"==typeof e||void 0===e,"internal-error",{appName:t})}class kp{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Tr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new vp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new bp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await yp(this,this.stsTokenManager.getToken(this.auth,e));return Kf(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=If(e),r=await n.getIdToken(t),i=gp(r);Kf(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:pp(mp(i.auth_time)),issuedAtTime:pp(mp(i.iat)),expirationTime:pp(mp(i.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=If(e);await wp(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Kf(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new kp(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Kf(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await wp(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yp(this,async function(e,t){return lp(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,a,s,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:S}=t;Kf(v&&S,e,"internal-error");const k=Ep.fromJSON(this.name,S);Kf("string"==typeof v,e,"internal-error"),Sp(c,e.name),Sp(d,e.name),Kf("boolean"==typeof b,e,"internal-error"),Kf("boolean"==typeof w,e,"internal-error"),Sp(h,e.name),Sp(f,e.name),Sp(p,e.name),Sp(m,e.name),Sp(g,e.name),Sp(y,e.name);const _=new kp({uid:v,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(_.providerData=E.map((e=>Object.assign({},e)))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,n=!1){const r=new Ep;r.updateFromServerResponse(t);const i=new kp({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await wp(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_p.type="NONE";const Ip=_p;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(e,t,n){return`firebase:${e}:${t}:${n}`}class xp{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Tp(this.userKey,r.apiKey,i),this.fullPersistenceKey=Tp("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kp._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new xp(Yf(Ip),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Yf(Ip);const o=Tp(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(o);if(t){const r=kp._fromJSON(e,t);n!==i&&(a=r),i=n;break}}catch(e){}const s=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&s.length?(i=s[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(e){}}))),new xp(i,e,n)):new xp(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Pp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Op(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Mp(t))return"Blackberry";if(Lp(t))return"Webos";if(Rp(t))return"Safari";if((t.includes("chrome/")||Ap(t))&&!t.includes("edge/"))return"Chrome";if(Np(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Op(e=gf()){return/firefox\//i.test(e)}function Rp(e=gf()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ap(e=gf()){return/crios\//i.test(e)}function Pp(e=gf()){return/iemobile/i.test(e)}function Np(e=gf()){return/android/i.test(e)}function Mp(e=gf()){return/blackberry/i.test(e)}function Lp(e=gf()){return/webos/i.test(e)}function Dp(e=gf()){return/iphone|ipad|ipod/i.test(e)}function jp(){return function(){var e=gf();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Fp(e=gf()){return Dp(e)||Np(e)||Lp(e)||Mp(e)||/windows phone/i.test(e)||Pp(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Up(e,t=[]){let n;switch(e){case"Browser":n=Cp(gf());break;case"Worker":n=`${Cp(gf())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${lr}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bp(this),this.idTokenSubscription=new Bp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Yf(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await xp.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null==o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(Kf(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wp(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?If(e):null;return t&&Kf(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Kf(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Yf(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vf("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Yf(e)||this._popupRedirectResolver;Kf(t,this,"argument-error"),this.redirectPersistenceManager=await xp.create(this,[Yf(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Kf(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Kf(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Up(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function zp(e){return If(e)}class Bp{constructor(e){var t,n;this.auth=e,this.observer=null,this.addObserver=(n=new kf((e=>this.observer=e),t)).subscribe.bind(n)}get next(){return Kf(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $p{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Gf("not implemented")}_getIdTokenResponse(e){return Gf("not implemented")}_linkToIdToken(e,t){return Gf("not implemented")}_getReauthenticationResolver(e){return Gf("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(e,t){return lp(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wp extends $p{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Wp(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Wp(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return cp(e,"POST","/v1/accounts:signInWithPassword",sp(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return cp(e,"POST","/v1/accounts:signInWithEmailLink",sp(e,t))}(e,{email:this._email,oobCode:this._password});default:Vf(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Vp(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return cp(e,"POST","/v1/accounts:signInWithEmailLink",sp(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Vf(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(e,t){return cp(e,"POST","/v1/accounts:signInWithIdp",sp(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp extends $p{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new qp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vf("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Tr(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new qp(n,r);return Object.assign(o,i),o}_getIdTokenResponse(e){return Hp(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Hp(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Hp(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wf(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gp extends $p{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Gp({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Gp({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return cp(e,"POST","/v1/accounts:signInWithPhoneNumber",sp(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await cp(e,"POST","/v1/accounts:signInWithPhoneNumber",sp(e,t));if(n.temporaryProof)throw fp(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return cp(e,"POST","/v1/accounts:signInWithPhoneNumber",sp(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Kp)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Gp({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){var t,n,r,i,o,a;const s=Ef(Sf(e)),l=null!==(t=s.apiKey)&&void 0!==t?t:null,u=null!==(n=s.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=s.mode)&&void 0!==r?r:null);Kf(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=s.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=s.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=s.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=Ef(Sf(e)).link,n=t?Ef(Sf(t)).deep_link_id:null,r=Ef(Sf(e)).deep_link_id;return(r?Ef(Sf(r)).link:null)||r||n||t||e}(e);try{return new Xp(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jp{constructor(){this.providerId=Jp.PROVIDER_ID}static credential(e,t){return Wp._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Xp.parseLink(t);return Kf(n,"argument-error"),Wp._fromEmailAndCode(e,n.code,n.tenantId)}}Jp.PROVIDER_ID="password",Jp.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Jp.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp extends Yp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class em extends Qp{constructor(){super("facebook.com")}static credential(e){return qp._fromParams({providerId:em.PROVIDER_ID,signInMethod:em.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return em.credentialFromTaggedObject(e)}static credentialFromError(e){return em.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return em.credential(e.oauthAccessToken)}catch(e){return null}}}em.FACEBOOK_SIGN_IN_METHOD="facebook.com",em.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tm extends Qp{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return qp._fromParams({providerId:tm.PROVIDER_ID,signInMethod:tm.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tm.credentialFromTaggedObject(e)}static credentialFromError(e){return tm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return tm.credential(t,n)}catch(e){return null}}}tm.GOOGLE_SIGN_IN_METHOD="google.com",tm.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nm extends Qp{constructor(){super("github.com")}static credential(e){return qp._fromParams({providerId:nm.PROVIDER_ID,signInMethod:nm.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nm.credentialFromTaggedObject(e)}static credentialFromError(e){return nm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nm.credential(e.oauthAccessToken)}catch(e){return null}}}nm.GITHUB_SIGN_IN_METHOD="github.com",nm.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rm extends Qp{constructor(){super("twitter.com")}static credential(e,t){return qp._fromParams({providerId:rm.PROVIDER_ID,signInMethod:rm.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rm.credentialFromTaggedObject(e)}static credentialFromError(e){return rm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return rm.credential(t,n)}catch(e){return null}}}rm.TWITTER_SIGN_IN_METHOD="twitter.com",rm.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class im{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await kp._fromIdTokenResponse(e,n,r),o=om(n);return new im({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=om(n);return new im({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function om(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class am extends yf{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,am.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new am(e,t,n,r)}}function sm(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw am._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(e,t,n=!1){const r=await yp(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return im._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function um(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await yp(e,sm(r,i,t,e),n);Kf(o.idToken,r,"internal-error");const a=gp(o.idToken);Kf(a,r,"internal-error");const{sub:s}=a;return Kf(e.uid===s,r,"user-mismatch"),im._forOperation(e,i,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Vf(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cm(e,t,n=!1){const r="signIn",i=await sm(e,r,t),o=await im._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}new WeakMap;const dm="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(dm,"1"),this.storage.removeItem(dm),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm extends hm{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=gf();return Rp(e)||Dp(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Fp(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);jp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fm.type="LOCAL";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pm extends hm{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pm.type="SESSION";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new mm(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map((async e=>e(t.origin,i))),s=await
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gm(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mm.receivers=[];class ym{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((a,s)=>{const l=gm("",20);r.port1.start();const u=setTimeout((()=>{s(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(u),clearTimeout(i),s(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bm(){return void 0!==vm().WorkerGlobalScope&&"function"==typeof vm().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wm="firebaseLocalStorageDb",Em="firebaseLocalStorage",Sm="fbase_key";class km{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function _m(e,t){return e.transaction([Em],t?"readwrite":"readonly").objectStore(Em)}function Im(){const e=indexedDB.open(wm,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Em,{keyPath:Sm})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Em)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(wm);return new km(e).toPromise()}(),t(await Im()))}))}))}async function Tm(e,t,n){const r=_m(e,!0).put({[Sm]:t,value:n});return new km(r).toPromise()}function xm(e,t){const n=_m(e,!0).delete(t);return new km(n).toPromise()}class Cm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Im()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mm._getInstance(bm()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ym(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Im();return await Tm(e,dm,"1"),await xm(e,dm),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Tm(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=_m(e,!1).get(t),r=await new km(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>xm(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=_m(e,!1).getAll();return new km(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Cm.type="LOCAL";function Om(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Om("rcb"),new np(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rm="recaptcha";async function Am(e,t,n){var r;const i=await n.verify();try{let o;if(Kf("string"==typeof i,e,"argument-error"),Kf(n.type===Rm,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){Kf("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return lp(e,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:e.tenantId},t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Kf("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;Kf(n,e,"missing-multi-factor-info");const a=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return lp(e,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:e.tenantId},t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return lp(e,"POST","/v1/accounts:sendVerificationCode",sp(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pm{constructor(e){this.providerId=Pm.PROVIDER_ID,this.auth=zp(e)}verifyPhoneNumber(e,t){return Am(this.auth,e,If(t))}static credential(e,t){return Gp._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Pm.credentialFromTaggedObject(t)}static credentialFromError(e){return Pm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Gp._fromTokenResponse(t,n):null}}Pm.PROVIDER_ID="phone",Pm.PHONE_SIGN_IN_METHOD="phone";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nm extends $p{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hp(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Hp(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Hp(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mm(e){return cm(e.auth,new Nm(e),e.bypassAuthState)}function Lm(e){const{auth:t,user:n}=e;return Kf(n,t,"internal-error"),um(n,new Nm(e),e.bypassAuthState)}async function Dm(e){const{auth:t,user:n}=e;return Kf(n,t,"internal-error"),lm(n,new Nm(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=e;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mm;case"linkViaPopup":case"linkViaRedirect":return Dm;case"reauthViaPopup":case"reauthViaRedirect":return Lm;default:Vf(this.auth,"internal-error")}}resolve(e){Xf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=new np(2e3,1e4);class Um extends jm{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Um.currentPopupAction&&Um.currentPopupAction.cancel(),Um.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Kf(e,this.auth,"internal-error"),e}async onExecution(){Xf(1===this.filter.length,"Popup operations only handle one event");const e=gm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Wf(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Wf(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Um.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Wf(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Fm.get())};e()}}Um.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Map;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new np(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new np(5e3,15e3),new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Kf(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){ir(new Df("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(t=>{Kf(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),Kf(!(null==o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Up(e)},a=new Zp(t,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yf);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(a,n),a})(r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ir(new Df("auth-internal",(e=>(e=>new Zm(e))(zp(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),dr("@firebase/auth","0.17.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(e))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */("Browser");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
dr("firebase","9.23.0","app");var zm=ur({apiKey:"AIzaSyAd3l6tSt6-1rxnUSOqnDJysfWkhOCEM-k",authDomain:"promptbox-708b6.firebaseapp.com",projectId:"promptbox-708b6",storageBucket:"promptbox-708b6.appspot.com",messagingSenderId:"236185108322",appId:"1:236185108322:web:e69358abbdc76bf3e6763b",measurementId:"G-SBPMBTQ9YX"});!function(e,t){uf.create(e,t)}(zm,{productsCollection:"products",customersCollection:"users"});(function(e=cr()){const t=or(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=or(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(hn(n.getOptions(),null!=t?t:{}))return e;Fr(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Oa,persistence:[Uo,So,_o]}),r=an("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Na)return;const r=null==t?void 0:t.token;Ma!==r&&(Ma=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){bn(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){bn(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const o=nn("auth");o&&Hi(n,`http://${o}`)})(zm),function(e,t){const n="string"==typeof e?e:t||"(default)",r=or("object"==typeof e?e:cr(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=rn("firestore");e&&oh(r,...e)}}(zm),function(e=cr(),t=Fa){const n=or(bn(e),Da).getImmediate({identifier:t}),r=rn("functions");r&&function(e,t,n){!function(e,t,n){e.emulatorOrigin=`http://${t}:${n}`}(bn(e),t,n)}(n,...r)}(zm),new lo;i(5108),(0,t.createContext)({user:null,triggerUpdateCurrentUser:function(e,t){},logout:function(){},error:null,authLoading:!0,loginWithEmail:function(e,t){},signupWithEmail:function(e,t,n){},loginWithGoogle:function(){},premiumInfo:{isPremium:!1,hasTrials:!1,haveAccessToPremiumFeatures:!1,premiumLoaded:!1,trialDaysLeft:0}});const Bm=/^\s+/,$m=/\s+$/;function Vm(e,t){if(t=t||{},(e=e||"")instanceof Vm)return e;if(!(this instanceof Vm))return new Vm(e,t);var n=function(e){var t={r:0,g:0,b:0},n=1,r=null,i=null,o=null,a=!1,s=!1;"string"==typeof e&&(e=function(e){e=e.replace(Bm,"").replace($m,"").toLowerCase();var t,n=!1;if(sg[e])e=sg[e],n=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};if(t=wg.rgb.exec(e))return{r:t[1],g:t[2],b:t[3]};if(t=wg.rgba.exec(e))return{r:t[1],g:t[2],b:t[3],a:t[4]};if(t=wg.hsl.exec(e))return{h:t[1],s:t[2],l:t[3]};if(t=wg.hsla.exec(e))return{h:t[1],s:t[2],l:t[3],a:t[4]};if(t=wg.hsv.exec(e))return{h:t[1],s:t[2],v:t[3]};if(t=wg.hsva.exec(e))return{h:t[1],s:t[2],v:t[3],a:t[4]};if(t=wg.hex8.exec(e))return{r:hg(t[1]),g:hg(t[2]),b:hg(t[3]),a:gg(t[4]),format:n?"name":"hex8"};if(t=wg.hex6.exec(e))return{r:hg(t[1]),g:hg(t[2]),b:hg(t[3]),format:n?"name":"hex"};if(t=wg.hex4.exec(e))return{r:hg(t[1]+""+t[1]),g:hg(t[2]+""+t[2]),b:hg(t[3]+""+t[3]),a:gg(t[4]+""+t[4]),format:n?"name":"hex8"};if(t=wg.hex3.exec(e))return{r:hg(t[1]+""+t[1]),g:hg(t[2]+""+t[2]),b:hg(t[3]+""+t[3]),format:n?"name":"hex"};return!1}(e));"object"==typeof e&&(Eg(e.r)&&Eg(e.g)&&Eg(e.b)?(t=function(e,t,n){return{r:255*cg(e,255),g:255*cg(t,255),b:255*cg(n,255)}}(e.r,e.g,e.b),a=!0,s="%"===String(e.r).substr(-1)?"prgb":"rgb"):Eg(e.h)&&Eg(e.s)&&Eg(e.v)?(r=pg(e.s),i=pg(e.v),t=function(e,t,n){e=6*cg(e,360),t=cg(t,100),n=cg(n,100);var r=Math.floor(e),i=e-r,o=n*(1-t),a=n*(1-i*t),s=n*(1-(1-i)*t),l=r%6,u=[n,a,o,o,s,n][l],c=[s,n,n,a,o,o][l],d=[o,o,s,n,n,a][l];return{r:255*u,g:255*c,b:255*d}}(e.h,r,i),a=!0,s="hsv"):Eg(e.h)&&Eg(e.s)&&Eg(e.l)&&(r=pg(e.s),o=pg(e.l),t=function(e,t,n){var r,i,o;function a(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(e=cg(e,360),t=cg(t,100),n=cg(n,100),0===t)r=i=o=n;else{var s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;r=a(l,s,e+1/3),i=a(l,s,e),o=a(l,s,e-1/3)}return{r:255*r,g:255*i,b:255*o}}(e.h,r,o),a=!0,s="hsl"),e.hasOwnProperty("a")&&(n=e.a));return n=ug(n),{ok:a,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function Wm(e,t,n){e=cg(e,255),t=cg(t,255),n=cg(n,255);var r,i,o=Math.max(e,t,n),a=Math.min(e,t,n),s=(o+a)/2;if(o==a)r=i=0;else{var l=o-a;switch(i=s>.5?l/(2-o-a):l/(o+a),o){case e:r=(t-n)/l+(t<n?6:0);break;case t:r=(n-e)/l+2;break;case n:r=(e-t)/l+4}r/=6}return{h:r,s:i,l:s}}function Hm(e,t,n){e=cg(e,255),t=cg(t,255),n=cg(n,255);var r,i,o=Math.max(e,t,n),a=Math.min(e,t,n),s=o,l=o-a;if(i=0===o?0:l/o,o==a)r=0;else{switch(o){case e:r=(t-n)/l+(t<n?6:0);break;case t:r=(n-e)/l+2;break;case n:r=(e-t)/l+4}r/=6}return{h:r,s:i,v:s}}function qm(e,t,n,r){var i=[fg(Math.round(e).toString(16)),fg(Math.round(t).toString(16)),fg(Math.round(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function Km(e,t,n,r){return[fg(mg(r)),fg(Math.round(e).toString(16)),fg(Math.round(t).toString(16)),fg(Math.round(n).toString(16))].join("")}function Gm(e,t){t=0===t?0:t||10;var n=Vm(e).toHsl();return n.s-=t/100,n.s=dg(n.s),Vm(n)}function Xm(e,t){t=0===t?0:t||10;var n=Vm(e).toHsl();return n.s+=t/100,n.s=dg(n.s),Vm(n)}function Jm(e){return Vm(e).desaturate(100)}function Ym(e,t){t=0===t?0:t||10;var n=Vm(e).toHsl();return n.l+=t/100,n.l=dg(n.l),Vm(n)}function Qm(e,t){t=0===t?0:t||10;var n=Vm(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),Vm(n)}function eg(e,t){t=0===t?0:t||10;var n=Vm(e).toHsl();return n.l-=t/100,n.l=dg(n.l),Vm(n)}function tg(e,t){var n=Vm(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,Vm(n)}function ng(e){var t=Vm(e).toHsl();return t.h=(t.h+180)%360,Vm(t)}function rg(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=Vm(e).toHsl(),r=[Vm(e)],i=360/t,o=1;o<t;o++)r.push(Vm({h:(n.h+o*i)%360,s:n.s,l:n.l}));return r}function ig(e){var t=Vm(e).toHsl(),n=t.h;return[Vm(e),Vm({h:(n+72)%360,s:t.s,l:t.l}),Vm({h:(n+216)%360,s:t.s,l:t.l})]}function og(e,t,n){t=t||6,n=n||30;var r=Vm(e).toHsl(),i=360/n,o=[Vm(e)];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,o.push(Vm(r));return o}function ag(e,t){t=t||6;for(var n=Vm(e).toHsv(),r=n.h,i=n.s,o=n.v,a=[],s=1/t;t--;)a.push(Vm({h:r,s:i,v:o})),o=(o+s)%1;return a}Vm.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=ug(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Hm(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Hm(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Wm(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Wm(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return qm(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,n,r,i){var o=[fg(Math.round(e).toString(16)),fg(Math.round(t).toString(16)),fg(Math.round(n).toString(16)),fg(mg(r))];if(i&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1))return o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0);return o.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*cg(this._r,255))+"%",g:Math.round(100*cg(this._g,255))+"%",b:Math.round(100*cg(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*cg(this._r,255))+"%, "+Math.round(100*cg(this._g,255))+"%, "+Math.round(100*cg(this._b,255))+"%)":"rgba("+Math.round(100*cg(this._r,255))+"%, "+Math.round(100*cg(this._g,255))+"%, "+Math.round(100*cg(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(lg[qm(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+Km(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var i=Vm(e);n="#"+Km(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(n=this.toRgbString()),"prgb"===e&&(n=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(n=this.toHexString()),"hex3"===e&&(n=this.toHexString(!0)),"hex4"===e&&(n=this.toHex8String(!0)),"hex8"===e&&(n=this.toHex8String()),"name"===e&&(n=this.toName()),"hsl"===e&&(n=this.toHslString()),"hsv"===e&&(n=this.toHsvString()),n||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return Vm(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(Ym,arguments)},brighten:function(){return this._applyModification(Qm,arguments)},darken:function(){return this._applyModification(eg,arguments)},desaturate:function(){return this._applyModification(Gm,arguments)},saturate:function(){return this._applyModification(Xm,arguments)},greyscale:function(){return this._applyModification(Jm,arguments)},spin:function(){return this._applyModification(tg,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(og,arguments)},complement:function(){return this._applyCombination(ng,arguments)},monochromatic:function(){return this._applyCombination(ag,arguments)},splitcomplement:function(){return this._applyCombination(ig,arguments)},triad:function(){return this._applyCombination(rg,[3])},tetrad:function(){return this._applyCombination(rg,[4])}},Vm.fromRatio=function(e,t){if("object"==typeof e){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]="a"===r?e[r]:pg(e[r]));e=n}return Vm(e,t)},Vm.equals=function(e,t){return!(!e||!t)&&Vm(e).toRgbString()==Vm(t).toRgbString()},Vm.random=function(){return Vm.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},Vm.mix=function(e,t,n){n=0===n?0:n||50;var r=Vm(e).toRgb(),i=Vm(t).toRgb(),o=n/100;return Vm({r:(i.r-r.r)*o+r.r,g:(i.g-r.g)*o+r.g,b:(i.b-r.b)*o+r.b,a:(i.a-r.a)*o+r.a})},Vm.readability=function(e,t){var n=Vm(e),r=Vm(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},Vm.isReadable=function(e,t,n){var r,i,o=Vm.readability(e,t);switch(i=!1,(r=function(e){var t,n;t=((e=e||{level:"AA",size:"small"}).level||"AA").toUpperCase(),n=(e.size||"small").toLowerCase(),"AA"!==t&&"AAA"!==t&&(t="AA");"small"!==n&&"large"!==n&&(n="small");return{level:t,size:n}}(n)).level+r.size){case"AAsmall":case"AAAlarge":i=o>=4.5;break;case"AAlarge":i=o>=3;break;case"AAAsmall":i=o>=7}return i},Vm.mostReadable=function(e,t,n){var r,i,o,a,s=null,l=0;i=(n=n||{}).includeFallbackColors,o=n.level,a=n.size;for(var u=0;u<t.length;u++)(r=Vm.readability(e,t[u]))>l&&(l=r,s=Vm(t[u]));return Vm.isReadable(e,s,{level:o,size:a})||!i?s:(n.includeFallbackColors=!1,Vm.mostReadable(e,["#fff","#000"],n))};var sg=Vm.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},lg=Vm.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(sg);function ug(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function cg(e,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var n=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function dg(e){return Math.min(1,Math.max(0,e))}function hg(e){return parseInt(e,16)}function fg(e){return 1==e.length?"0"+e:""+e}function pg(e){return e<=1&&(e=100*e+"%"),e}function mg(e){return Math.round(255*parseFloat(e)).toString(16)}function gg(e){return hg(e)/255}var yg,vg,bg,wg=(vg="[\\s|\\(]+("+(yg="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+yg+")[,|\\s]+("+yg+")\\s*\\)?",bg="[\\s|\\(]+("+yg+")[,|\\s]+("+yg+")[,|\\s]+("+yg+")[,|\\s]+("+yg+")\\s*\\)?",{CSS_UNIT:new RegExp(yg),rgb:new RegExp("rgb"+vg),rgba:new RegExp("rgba"+bg),hsl:new RegExp("hsl"+vg),hsla:new RegExp("hsla"+bg),hsv:new RegExp("hsv"+vg),hsva:new RegExp("hsva"+bg),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Eg(e){return!!wg.CSS_UNIT.exec(e)}var Sg=(0,t.createContext)({saved:[],savedDataLoading:!0,savedDataError:null,setMixedData:function(){},setAlert:function(e){},alert:null,setCurrentTab:function(e){},currentTab:null,searchText:null,isOpenPremiumModal:!1,setSearchText:function(){},setIsOpenPremiumModal:function(){}});const kg=Sg,_g=!1;var Ig="unmounted",Tg="exited",xg="entering",Cg="entered",Og="exiting",Rg=function(e){function n(t,n){var r;r=e.call(this,t,n)||this;var i,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(i=Tg,r.appearStatus=xg):i=Cg:i=t.unmountOnExit||t.mountOnEnter?Ig:Tg,r.state={status:i},r.nextCallback=null,r}nt(n,e),n.getDerivedStateFromProps=function(e,t){return e.in&&t.status===Ig?{status:Tg}:null};var i=n.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==xg&&n!==Cg&&(t=xg):n!==xg&&n!==Cg||(t=Og)}this.updateStatus(!1,t)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},i.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===xg){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:r.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Tg&&this.setState({status:Ig})},i.performEnter=function(e){var t=this,n=this.props.enter,i=this.context?this.context.isMounting:e,o=this.props.nodeRef?[i]:[r.findDOMNode(this),i],a=o[0],s=o[1],l=this.getTimeouts(),u=i?l.appear:l.enter;!e&&!n||_g?this.safeSetState({status:Cg},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,s),this.safeSetState({status:xg},(function(){t.props.onEntering(a,s),t.onTransitionEnd(u,(function(){t.safeSetState({status:Cg},(function(){t.props.onEntered(a,s)}))}))})))},i.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:r.findDOMNode(this);t&&!_g?(this.props.onExit(i),this.safeSetState({status:Og},(function(){e.props.onExiting(i),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:Tg},(function(){e.props.onExited(i)}))}))}))):this.safeSetState({status:Tg},(function(){e.props.onExited(i)}))},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},i.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},i.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:r.findDOMNode(this),i=null==e&&!this.props.addEndListener;if(n&&!i){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=o[0],s=o[1];this.props.addEndListener(a,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},i.render=function(){var e=this.state.status;if(e===Ig)return null;var n=this.props,r=n.children,i=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,me.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return t.createElement(rt.Provider,{value:null},"function"==typeof r?r(e,i):t.cloneElement(t.Children.only(r),i))},n}(t.Component);function Ag(){}Rg.contextType=rt,Rg.propTypes={},Rg.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ag,onEntering:Ag,onEntered:Ag,onExit:Ag,onExiting:Ag,onExited:Ag},Rg.UNMOUNTED=Ig,Rg.EXITED=Tg,Rg.ENTERING=xg,Rg.ENTERED=Cg,Rg.EXITING=Og;const Pg=Rg;var Ng=i(247);function Mg(){return(0,_e.Z)(Ng.Z)}const Lg=e=>e.scrollTop;function Dg(e,t){var n,r;const{timeout:i,easing:o,style:a={}}=e;return{duration:null!=(n=a.transitionDuration)?n:"number"==typeof i?i:i[t.mode]||0,easing:null!=(r=a.transitionTimingFunction)?r:"object"==typeof o?o[t.mode]:o,delay:a.transitionDelay}}const jg=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Fg={entering:{opacity:1},entered:{opacity:1}},Ug=t.forwardRef((function(e,n){const r=Mg(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:o,appear:a=!0,children:s,easing:l,in:u,onEnter:c,onEntered:d,onEntering:h,onExit:f,onExited:p,onExiting:m,style:g,timeout:y=i,TransitionComponent:v=Pg}=e,b=(0,me.Z)(e,jg),w=t.useRef(null),E=(0,Ye.Z)(w,s.ref,n),S=e=>t=>{if(e){const n=w.current;void 0===t?e(n):e(n,t)}},k=S(h),_=S(((e,t)=>{Lg(e);const n=Dg({style:g,timeout:y,easing:l},{mode:"enter"});e.style.webkitTransition=r.transitions.create("opacity",n),e.style.transition=r.transitions.create("opacity",n),c&&c(e,t)})),I=S(d),T=S(m),x=S((e=>{const t=Dg({style:g,timeout:y,easing:l},{mode:"exit"});e.style.webkitTransition=r.transitions.create("opacity",t),e.style.transition=r.transitions.create("opacity",t),f&&f(e)})),C=S(p);return(0,Ie.jsx)(v,(0,pe.Z)({appear:a,in:u,nodeRef:w,onEnter:_,onEntered:I,onEntering:k,onExit:x,onExited:C,onExiting:T,addEndListener:e=>{o&&o(w.current,e)},timeout:y},b,{children:(e,n)=>t.cloneElement(s,(0,pe.Z)({style:(0,pe.Z)({opacity:0,visibility:"exited"!==e||u?void 0:"hidden"},Fg[e],g,s.props.style),ref:E},n))}))})),Zg=Ug;var zg=i(2996),Bg=i(1387),$g=i(3703),Vg=i(4161),Wg=i(9336),Hg=i(3546);const qg=["onChange","maxRows","minRows","style","value"];function Kg(e,t){return parseInt(e[t],10)||0}const Gg={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};function Xg(e){return null==e||0===Object.keys(e).length}const Jg=t.forwardRef((function(e,n){const{onChange:i,maxRows:o,minRows:a=1,style:s,value:l}=e,u=(0,me.Z)(e,qg),{current:c}=t.useRef(null!=l),d=t.useRef(null),h=(0,$g.Z)(n,d),f=t.useRef(null),p=t.useRef(0),[m,g]=t.useState({}),y=t.useCallback((()=>{const t=d.current,n=(0,Vg.Z)(t).getComputedStyle(t);if("0px"===n.width)return{};const r=f.current;r.style.width=n.width,r.value=t.value||e.placeholder||"x","\n"===r.value.slice(-1)&&(r.value+=" ");const i=n["box-sizing"],s=Kg(n,"padding-bottom")+Kg(n,"padding-top"),l=Kg(n,"border-bottom-width")+Kg(n,"border-top-width"),u=r.scrollHeight;r.value="x";const c=r.scrollHeight;let h=u;a&&(h=Math.max(Number(a)*c,h)),o&&(h=Math.min(Number(o)*c,h)),h=Math.max(h,c);return{outerHeightStyle:h+("border-box"===i?s+l:0),overflow:Math.abs(h-u)<=1}}),[o,a,e.placeholder]),v=(e,t)=>{const{outerHeightStyle:n,overflow:r}=t;return p.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==r)?(p.current+=1,{overflow:r,outerHeightStyle:n}):e},b=t.useCallback((()=>{const e=y();Xg(e)||g((t=>v(t,e)))}),[y]);t.useEffect((()=>{const e=(0,Wg.Z)((()=>{p.current=0,d.current&&(()=>{const e=y();Xg(e)||(0,r.flushSync)((()=>{g((t=>v(t,e)))}))})()})),t=(0,Vg.Z)(d.current);let n;return t.addEventListener("resize",e),"undefined"!=typeof ResizeObserver&&(n=new ResizeObserver(e),n.observe(d.current)),()=>{e.clear(),t.removeEventListener("resize",e),n&&n.disconnect()}})),(0,Hg.Z)((()=>{b()})),t.useEffect((()=>{p.current=0}),[l]);return(0,Ie.jsxs)(t.Fragment,{children:[(0,Ie.jsx)("textarea",(0,pe.Z)({value:l,onChange:e=>{p.current=0,c||b(),i&&i(e)},ref:h,rows:a,style:(0,pe.Z)({height:m.outerHeightStyle,overflow:m.overflow?"hidden":null},s)},u)),(0,Ie.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:f,tabIndex:-1,style:(0,pe.Z)({},Gg,s,{padding:0})})]})})),Yg=Jg;const Qg=function(e){return"string"==typeof e};function ey({props:e,states:t,muiFormControl:n}){return t.reduce(((t,r)=>(t[r]=e[r],n&&void 0===e[r]&&(t[r]=n[r]),t)),{})}const ty=t.createContext(void 0);function ny(){return t.useContext(ty)}var ry=i(8974);function iy(e){const{styles:t,defaultTheme:n={}}=e,r="function"==typeof t?e=>{return t(null==(r=e)||0===Object.keys(r).length?n:e);var r}:t;return(0,Ie.jsx)(pt,{styles:r})}const oy=function(e){return(0,Ie.jsx)(iy,(0,pe.Z)({},e,{defaultTheme:Ng.Z}))};function ay(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function sy(e,t=!1){return e&&(ay(e.value)&&""!==e.value||t&&ay(e.defaultValue)&&""!==e.defaultValue)}function ly(e){return(0,Be.Z)("MuiInputBase",e)}const uy=(0,ze.Z)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),cy=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],dy=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,"small"===n.size&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${(0,Ze.Z)(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},hy=(e,t)=>{const{ownerState:n}=e;return[t.input,"small"===n.size&&t.inputSizeSmall,n.multiline&&t.inputMultiline,"search"===n.type&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},fy=(0,Pe.ZP)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:dy})((({theme:e,ownerState:t})=>(0,pe.Z)({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${uy.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&(0,pe.Z)({padding:"4px 0 5px"},"small"===t.size&&{paddingTop:1}),t.fullWidth&&{width:"100%"}))),py=(0,Pe.ZP)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:hy})((({theme:e,ownerState:t})=>{const n="light"===e.palette.mode,r=(0,pe.Z)({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),i={opacity:"0 !important"},o=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return(0,pe.Z)({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${uy.formControl} &`]:{"&::-webkit-input-placeholder":i,"&::-moz-placeholder":i,"&:-ms-input-placeholder":i,"&::-ms-input-placeholder":i,"&:focus::-webkit-input-placeholder":o,"&:focus::-moz-placeholder":o,"&:focus:-ms-input-placeholder":o,"&:focus::-ms-input-placeholder":o},[`&.${uy.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},"small"===t.size&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===t.type&&{MozAppearance:"textfield"})})),my=(0,Ie.jsx)(oy,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),gy=t.forwardRef((function(e,n){var r;const i=(0,Ne.Z)({props:e,name:"MuiInputBase"}),{"aria-describedby":o,autoComplete:a,autoFocus:s,className:l,components:u={},componentsProps:c={},defaultValue:d,disabled:h,disableInjectingGlobalStyles:f,endAdornment:p,fullWidth:m=!1,id:g,inputComponent:y="input",inputProps:v={},inputRef:b,maxRows:w,minRows:E,multiline:S=!1,name:k,onBlur:_,onChange:I,onClick:T,onFocus:x,onKeyDown:C,onKeyUp:O,placeholder:R,readOnly:A,renderSuffix:P,rows:N,slotProps:M={},slots:L={},startAdornment:D,type:j="text",value:F}=i,U=(0,me.Z)(i,cy),Z=null!=v.value?v.value:F,{current:z}=t.useRef(null!=Z),B=t.useRef(),$=t.useCallback((e=>{0}),[]),V=(0,Ye.Z)(B,b,v.ref,$),[W,H]=t.useState(!1),q=ny();const K=ey({props:i,muiFormControl:q,states:["color","disabled","error","hiddenLabel","size","required","filled"]});K.focused=q?q.focused:W,t.useEffect((()=>{!q&&h&&W&&(H(!1),_&&_())}),[q,h,W,_]);const G=q&&q.onFilled,X=q&&q.onEmpty,J=t.useCallback((e=>{sy(e)?G&&G():X&&X()}),[G,X]);(0,ry.Z)((()=>{z&&J({value:Z})}),[Z,J,z]);t.useEffect((()=>{J(B.current)}),[]);let Y=y,Q=v;S&&"input"===Y&&(Q=N?(0,pe.Z)({type:void 0,minRows:N,maxRows:N},Q):(0,pe.Z)({type:void 0,maxRows:w,minRows:E},Q),Y=Yg);t.useEffect((()=>{q&&q.setAdornedStart(Boolean(D))}),[q,D]);const ee=(0,pe.Z)({},i,{color:K.color||"primary",disabled:K.disabled,endAdornment:p,error:K.error,focused:K.focused,formControl:q,fullWidth:m,hiddenLabel:K.hiddenLabel,multiline:S,size:K.size,startAdornment:D,type:j}),te=(e=>{const{classes:t,color:n,disabled:r,error:i,endAdornment:o,focused:a,formControl:s,fullWidth:l,hiddenLabel:u,multiline:c,readOnly:d,size:h,startAdornment:f,type:p}=e,m={root:["root",`color${(0,Ze.Z)(n)}`,r&&"disabled",i&&"error",l&&"fullWidth",a&&"focused",s&&"formControl","small"===h&&"sizeSmall",c&&"multiline",f&&"adornedStart",o&&"adornedEnd",u&&"hiddenLabel",d&&"readOnly"],input:["input",r&&"disabled","search"===p&&"inputTypeSearch",c&&"inputMultiline","small"===h&&"inputSizeSmall",u&&"inputHiddenLabel",f&&"inputAdornedStart",o&&"inputAdornedEnd",d&&"readOnly"]};return(0,Ue.Z)(m,ly,t)})(ee),ne=L.root||u.Root||fy,re=M.root||c.root||{},ie=L.input||u.Input||py;return Q=(0,pe.Z)({},Q,null!=(r=M.input)?r:c.input),(0,Ie.jsxs)(t.Fragment,{children:[!f&&my,(0,Ie.jsxs)(ne,(0,pe.Z)({},re,!Qg(ne)&&{ownerState:(0,pe.Z)({},ee,re.ownerState)},{ref:n,onClick:e=>{B.current&&e.currentTarget===e.target&&B.current.focus(),T&&T(e)}},U,{className:(0,ge.Z)(te.root,re.className,l),children:[D,(0,Ie.jsx)(ty.Provider,{value:null,children:(0,Ie.jsx)(ie,(0,pe.Z)({ownerState:ee,"aria-invalid":K.error,"aria-describedby":o,autoComplete:a,autoFocus:s,defaultValue:d,disabled:K.disabled,id:g,onAnimationStart:e=>{J("mui-auto-fill-cancel"===e.animationName?B.current:{value:"x"})},name:k,placeholder:R,readOnly:A,required:K.required,rows:N,value:Z,onKeyDown:C,onKeyUp:O,type:j},Q,!Qg(ie)&&{as:Y,ownerState:(0,pe.Z)({},ee,Q.ownerState)},{ref:V,className:(0,ge.Z)(te.input,Q.className),onBlur:e=>{_&&_(e),v.onBlur&&v.onBlur(e),q&&q.onBlur?q.onBlur(e):H(!1)},onChange:(e,...t)=>{if(!z){const t=e.target||B.current;if(null==t)throw new Error((0,Bg.Z)(1));J({value:t.value})}v.onChange&&v.onChange(e,...t),I&&I(e,...t)},onFocus:e=>{K.disabled?e.stopPropagation():(x&&x(e),v.onFocus&&v.onFocus(e),q&&q.onFocus?q.onFocus(e):H(!0))}}))}),p,P?P((0,pe.Z)({},K,{startAdornment:D})):null]}))]})})),yy=gy;function vy(e){return(0,Be.Z)("MuiInput",e)}const by=(0,pe.Z)({},uy,(0,ze.Z)("MuiInput",["root","underline","input"])),wy=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],Ey=(0,Pe.ZP)(fy,{shouldForwardProp:e=>(0,Pe.FO)(e)||"classes"===e,name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...dy(e,t),!n.disableUnderline&&t.underline]}})((({theme:e,ownerState:t})=>{let n="light"===e.palette.mode?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return e.vars&&(n=`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),(0,pe.Z)({position:"relative"},t.formControl&&{"label + &":{marginTop:16}},!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(e.vars||e).palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${by.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${by.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main},"&:focus-within:after":{transform:"scaleX(1)"}},"&:before":{borderBottom:`1px solid ${n}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${by.disabled}, .${by.error}):before`]:{borderBottom:`1px solid ${(e.vars||e).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${n}`}},[`&.${by.disabled}:before`]:{borderBottomStyle:"dotted"}})})),Sy=(0,Pe.ZP)(py,{name:"MuiInput",slot:"Input",overridesResolver:hy})({}),ky=t.forwardRef((function(e,t){var n,r,i,o;const a=(0,Ne.Z)({props:e,name:"MuiInput"}),{disableUnderline:s,components:l={},componentsProps:u,fullWidth:c=!1,inputComponent:d="input",multiline:h=!1,slotProps:f,slots:p={},type:m="text"}=a,g=(0,me.Z)(a,wy),y=(e=>{const{classes:t,disableUnderline:n}=e,r={root:["root",!n&&"underline"],input:["input"]},i=(0,Ue.Z)(r,vy,t);return(0,pe.Z)({},t,i)})(a),v={root:{ownerState:{disableUnderline:s}}},b=(null!=f?f:u)?(0,be.Z)(null!=f?f:u,v):v,w=null!=(n=null!=(r=p.root)?r:l.Root)?n:Ey,E=null!=(i=null!=(o=p.input)?o:l.Input)?i:Sy;return(0,Ie.jsx)(yy,(0,pe.Z)({slots:{root:w,input:E},slotProps:b,fullWidth:c,inputComponent:d,multiline:h,ref:t,type:m},g,{classes:y}))}));ky.muiName="Input";const _y=ky;function Iy(e){return(0,Be.Z)("MuiFilledInput",e)}const Ty=(0,pe.Z)({},uy,(0,ze.Z)("MuiFilledInput",["root","underline","input"])),xy=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],Cy=(0,Pe.ZP)(fy,{shouldForwardProp:e=>(0,Pe.FO)(e)||"classes"===e,name:"MuiFilledInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...dy(e,t),!n.disableUnderline&&t.underline]}})((({theme:e,ownerState:t})=>{var n;const r="light"===e.palette.mode,i=r?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",o=r?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",a=r?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",s=r?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return(0,pe.Z)({position:"relative",backgroundColor:e.vars?e.vars.palette.FilledInput.bg:o,borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:e.vars?e.vars.palette.FilledInput.hoverBg:a,"@media (hover: none)":{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:o}},[`&.${Ty.focused}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:o},[`&.${Ty.disabled}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.disabledBg:s}},!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${null==(n=(e.vars||e).palette[t.color||"primary"])?void 0:n.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Ty.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Ty.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main},"&:focus-within:after":{transform:"scaleX(1)"}},"&:before":{borderBottom:`1px solid ${e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`:i}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Ty.disabled}, .${Ty.error}):before`]:{borderBottom:`1px solid ${(e.vars||e).palette.text.primary}`},[`&.${Ty.disabled}:before`]:{borderBottomStyle:"dotted"}},t.startAdornment&&{paddingLeft:12},t.endAdornment&&{paddingRight:12},t.multiline&&(0,pe.Z)({padding:"25px 12px 8px"},"small"===t.size&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17}))})),Oy=(0,Pe.ZP)(py,{name:"MuiFilledInput",slot:"Input",overridesResolver:hy})((({theme:e,ownerState:t})=>(0,pe.Z)({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:"light"===e.palette.mode?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:"light"===e.palette.mode?null:"#fff",caretColor:"light"===e.palette.mode?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},"small"===t.size&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17},t.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0},t.hiddenLabel&&"small"===t.size&&{paddingTop:8,paddingBottom:9}))),Ry=t.forwardRef((function(e,t){var n,r,i,o;const a=(0,Ne.Z)({props:e,name:"MuiFilledInput"}),{components:s={},componentsProps:l,fullWidth:u=!1,inputComponent:c="input",multiline:d=!1,slotProps:h,slots:f={},type:p="text"}=a,m=(0,me.Z)(a,xy),g=(0,pe.Z)({},a,{fullWidth:u,inputComponent:c,multiline:d,type:p}),y=(e=>{const{classes:t,disableUnderline:n}=e,r={root:["root",!n&&"underline"],input:["input"]},i=(0,Ue.Z)(r,Iy,t);return(0,pe.Z)({},t,i)})(a),v={root:{ownerState:g},input:{ownerState:g}},b=(null!=h?h:l)?(0,be.Z)(null!=h?h:l,v):v,w=null!=(n=null!=(r=f.root)?r:s.Root)?n:Cy,E=null!=(i=null!=(o=f.input)?o:s.Input)?i:Oy;return(0,Ie.jsx)(yy,(0,pe.Z)({slots:{root:w,input:E},componentsProps:b,fullWidth:u,inputComponent:c,multiline:d,ref:t,type:p},m,{classes:y}))}));Ry.muiName="Input";const Ay=Ry;var Py;const Ny=["children","classes","className","label","notched"],My=(0,Pe.ZP)("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),Ly=(0,Pe.ZP)("legend")((({ownerState:e,theme:t})=>(0,pe.Z)({float:"unset",width:"auto",overflow:"hidden"},!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},e.withLabel&&(0,pe.Z)({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})}))));function Dy(e){return(0,Be.Z)("MuiOutlinedInput",e)}const jy=(0,pe.Z)({},uy,(0,ze.Z)("MuiOutlinedInput",["root","notchedOutline","input"])),Fy=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],Uy=(0,Pe.ZP)(fy,{shouldForwardProp:e=>(0,Pe.FO)(e)||"classes"===e,name:"MuiOutlinedInput",slot:"Root",overridesResolver:dy})((({theme:e,ownerState:t})=>{const n="light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return(0,pe.Z)({position:"relative",borderRadius:(e.vars||e).shape.borderRadius,[`&:hover .${jy.notchedOutline}`]:{borderColor:(e.vars||e).palette.text.primary},"@media (hover: none)":{[`&:hover .${jy.notchedOutline}`]:{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:n}},[`&.${jy.focused} .${jy.notchedOutline}`]:{borderColor:(e.vars||e).palette[t.color].main,borderWidth:2},[`&.${jy.error} .${jy.notchedOutline}`]:{borderColor:(e.vars||e).palette.error.main},[`&.${jy.disabled} .${jy.notchedOutline}`]:{borderColor:(e.vars||e).palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&(0,pe.Z)({padding:"16.5px 14px"},"small"===t.size&&{padding:"8.5px 14px"}))})),Zy=(0,Pe.ZP)((function(e){const{className:t,label:n,notched:r}=e,i=(0,me.Z)(e,Ny),o=null!=n&&""!==n,a=(0,pe.Z)({},e,{notched:r,withLabel:o});return(0,Ie.jsx)(My,(0,pe.Z)({"aria-hidden":!0,className:t,ownerState:a},i,{children:(0,Ie.jsx)(Ly,{ownerState:a,children:o?(0,Ie.jsx)("span",{children:n}):Py||(Py=(0,Ie.jsx)("span",{className:"notranslate",children:"​"}))})}))}),{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})((({theme:e})=>{const t="light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}})),zy=(0,Pe.ZP)(py,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:hy})((({theme:e,ownerState:t})=>(0,pe.Z)({padding:"16.5px 14px"},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:"light"===e.palette.mode?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:"light"===e.palette.mode?null:"#fff",caretColor:"light"===e.palette.mode?null:"#fff",borderRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},"small"===t.size&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0}))),By=t.forwardRef((function(e,n){var r,i,o,a,s;const l=(0,Ne.Z)({props:e,name:"MuiOutlinedInput"}),{components:u={},fullWidth:c=!1,inputComponent:d="input",label:h,multiline:f=!1,notched:p,slots:m={},type:g="text"}=l,y=(0,me.Z)(l,Fy),v=(e=>{const{classes:t}=e,n=(0,Ue.Z)({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},Dy,t);return(0,pe.Z)({},t,n)})(l),b=ny(),w=ey({props:l,muiFormControl:b,states:["required"]}),E=(0,pe.Z)({},l,{color:w.color||"primary",disabled:w.disabled,error:w.error,focused:w.focused,formControl:b,fullWidth:c,hiddenLabel:w.hiddenLabel,multiline:f,size:w.size,type:g}),S=null!=(r=null!=(i=m.root)?i:u.Root)?r:Uy,k=null!=(o=null!=(a=m.input)?a:u.Input)?o:zy;return(0,Ie.jsx)(yy,(0,pe.Z)({slots:{root:S,input:k},renderSuffix:e=>(0,Ie.jsx)(Zy,{ownerState:E,className:v.notchedOutline,label:null!=h&&""!==h&&w.required?s||(s=(0,Ie.jsxs)(t.Fragment,{children:[h," ","*"]})):h,notched:void 0!==p?p:Boolean(e.startAdornment||e.filled||e.focused)}),fullWidth:c,inputComponent:d,multiline:f,ref:n,type:g},y,{classes:(0,pe.Z)({},v,{notchedOutline:null})}))}));By.muiName="Input";const $y=By;function Vy(e){return(0,Be.Z)("MuiFormLabel",e)}const Wy=(0,ze.Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),Hy=["children","className","color","component","disabled","error","filled","focused","required"],qy=(0,Pe.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},t)=>(0,pe.Z)({},t.root,"secondary"===e.color&&t.colorSecondary,e.filled&&t.filled)})((({theme:e,ownerState:t})=>(0,pe.Z)({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${Wy.focused}`]:{color:(e.vars||e).palette[t.color].main},[`&.${Wy.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${Wy.error}`]:{color:(e.vars||e).palette.error.main}}))),Ky=(0,Pe.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})((({theme:e})=>({[`&.${Wy.error}`]:{color:(e.vars||e).palette.error.main}}))),Gy=t.forwardRef((function(e,t){const n=(0,Ne.Z)({props:e,name:"MuiFormLabel"}),{children:r,className:i,component:o="label"}=n,a=(0,me.Z)(n,Hy),s=ey({props:n,muiFormControl:ny(),states:["color","required","focused","disabled","error","filled"]}),l=(0,pe.Z)({},n,{color:s.color||"primary",component:o,disabled:s.disabled,error:s.error,filled:s.filled,focused:s.focused,required:s.required}),u=(e=>{const{classes:t,color:n,focused:r,disabled:i,error:o,filled:a,required:s}=e,l={root:["root",`color${(0,Ze.Z)(n)}`,i&&"disabled",o&&"error",a&&"filled",r&&"focused",s&&"required"],asterisk:["asterisk",o&&"error"]};return(0,Ue.Z)(l,Vy,t)})(l);return(0,Ie.jsxs)(qy,(0,pe.Z)({as:o,ownerState:l,className:(0,ge.Z)(u.root,i),ref:t},a,{children:[r,s.required&&(0,Ie.jsxs)(Ky,{ownerState:l,"aria-hidden":!0,className:u.asterisk,children:[" ","*"]})]}))}));function Xy(e){return(0,Be.Z)("MuiInputLabel",e)}(0,ze.Z)("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const Jy=["disableAnimation","margin","shrink","variant","className"],Yy=(0,Pe.ZP)(Gy,{shouldForwardProp:e=>(0,Pe.FO)(e)||"classes"===e,name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${Wy.asterisk}`]:t.asterisk},t.root,n.formControl&&t.formControl,"small"===n.size&&t.sizeSmall,n.shrink&&t.shrink,!n.disableAnimation&&t.animated,t[n.variant]]}})((({theme:e,ownerState:t})=>(0,pe.Z)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===t.size&&{transform:"translate(0, 17px) scale(1)"},t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!t.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},"filled"===t.variant&&(0,pe.Z)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===t.size&&{transform:"translate(12px, 13px) scale(1)"},t.shrink&&(0,pe.Z)({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===t.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===t.variant&&(0,pe.Z)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===t.size&&{transform:"translate(14px, 9px) scale(1)"},t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 24px)",transform:"translate(14px, -9px) scale(0.75)"})))),Qy=t.forwardRef((function(e,t){const n=(0,Ne.Z)({name:"MuiInputLabel",props:e}),{disableAnimation:r=!1,shrink:i,className:o}=n,a=(0,me.Z)(n,Jy),s=ny();let l=i;void 0===l&&s&&(l=s.filled||s.focused||s.adornedStart);const u=ey({props:n,muiFormControl:s,states:["size","variant","required"]}),c=(0,pe.Z)({},n,{disableAnimation:r,formControl:s,shrink:l,size:u.size,variant:u.variant,required:u.required}),d=(e=>{const{classes:t,formControl:n,size:r,shrink:i,disableAnimation:o,variant:a,required:s}=e,l={root:["root",n&&"formControl",!o&&"animated",i&&"shrink","small"===r&&"sizeSmall",a],asterisk:[s&&"asterisk"]},u=(0,Ue.Z)(l,Xy,t);return(0,pe.Z)({},t,u)})(c);return(0,Ie.jsx)(Yy,(0,pe.Z)({"data-shrink":l,ownerState:c,ref:t,className:(0,ge.Z)(d.root,o)},a,{classes:d}))})),ev=Qy;var tv=i(8502);function nv(e){return(0,Be.Z)("MuiFormControl",e)}(0,ze.Z)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const rv=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],iv=(0,Pe.ZP)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>(0,pe.Z)({},t.root,t[`margin${(0,Ze.Z)(e.margin)}`],e.fullWidth&&t.fullWidth)})((({ownerState:e})=>(0,pe.Z)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===e.margin&&{marginTop:16,marginBottom:8},"dense"===e.margin&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"}))),ov=t.forwardRef((function(e,n){const r=(0,Ne.Z)({props:e,name:"MuiFormControl"}),{children:i,className:o,color:a="primary",component:s="div",disabled:l=!1,error:u=!1,focused:c,fullWidth:d=!1,hiddenLabel:h=!1,margin:f="none",required:p=!1,size:m="medium",variant:g="outlined"}=r,y=(0,me.Z)(r,rv),v=(0,pe.Z)({},r,{color:a,component:s,disabled:l,error:u,fullWidth:d,hiddenLabel:h,margin:f,required:p,size:m,variant:g}),b=(e=>{const{classes:t,margin:n,fullWidth:r}=e,i={root:["root","none"!==n&&`margin${(0,Ze.Z)(n)}`,r&&"fullWidth"]};return(0,Ue.Z)(i,nv,t)})(v),[w,E]=t.useState((()=>{let e=!1;return i&&t.Children.forEach(i,(t=>{if(!(0,tv.Z)(t,["Input","Select"]))return;const n=(0,tv.Z)(t,["Select"])?t.props.input:t;n&&n.props.startAdornment&&(e=!0)})),e})),[S,k]=t.useState((()=>{let e=!1;return i&&t.Children.forEach(i,(t=>{(0,tv.Z)(t,["Input","Select"])&&sy(t.props,!0)&&(e=!0)})),e})),[_,I]=t.useState(!1);l&&_&&I(!1);const T=void 0===c||l?_:c;let x;const C=t.useMemo((()=>({adornedStart:w,setAdornedStart:E,color:a,disabled:l,error:u,filled:S,focused:T,fullWidth:d,hiddenLabel:h,size:m,onBlur:()=>{I(!1)},onEmpty:()=>{k(!1)},onFilled:()=>{k(!0)},onFocus:()=>{I(!0)},registerEffect:x,required:p,variant:g})),[w,a,l,u,S,T,d,h,x,p,m,g]);return(0,Ie.jsx)(ty.Provider,{value:C,children:(0,Ie.jsx)(iv,(0,pe.Z)({as:s,ownerState:v,className:(0,ge.Z)(b.root,o),ref:n},y,{children:i}))})})),av=ov;function sv(e){return(0,Be.Z)("MuiFormHelperText",e)}const lv=(0,ze.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var uv;const cv=["children","className","component","disabled","error","filled","focused","margin","required","variant"],dv=(0,Pe.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.size&&t[`size${(0,Ze.Z)(n.size)}`],n.contained&&t.contained,n.filled&&t.filled]}})((({theme:e,ownerState:t})=>(0,pe.Z)({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${lv.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${lv.error}`]:{color:(e.vars||e).palette.error.main}},"small"===t.size&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14}))),hv=t.forwardRef((function(e,t){const n=(0,Ne.Z)({props:e,name:"MuiFormHelperText"}),{children:r,className:i,component:o="p"}=n,a=(0,me.Z)(n,cv),s=ey({props:n,muiFormControl:ny(),states:["variant","size","disabled","error","filled","focused","required"]}),l=(0,pe.Z)({},n,{component:o,contained:"filled"===s.variant||"outlined"===s.variant,variant:s.variant,size:s.size,disabled:s.disabled,error:s.error,filled:s.filled,focused:s.focused,required:s.required}),u=(e=>{const{classes:t,contained:n,size:r,disabled:i,error:o,filled:a,focused:s,required:l}=e,u={root:["root",i&&"disabled",o&&"error",r&&`size${(0,Ze.Z)(r)}`,n&&"contained",s&&"focused",a&&"filled",l&&"required"]};return(0,Ue.Z)(u,sv,t)})(l);return(0,Ie.jsx)(dv,(0,pe.Z)({as:o,ownerState:l,className:(0,ge.Z)(u.root,i),ref:t},a,{children:" "===r?uv||(uv=(0,Ie.jsx)("span",{className:"notranslate",children:"​"})):r}))}));i(6607);var fv=i(8038);const pv=t.createContext({});function mv(e){return(0,Be.Z)("MuiList",e)}(0,ze.Z)("MuiList",["root","padding","dense","subheader"]);const gv=["children","className","component","dense","disablePadding","subheader"],yv=(0,Pe.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})((({ownerState:e})=>(0,pe.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0}))),vv=t.forwardRef((function(e,n){const r=(0,Ne.Z)({props:e,name:"MuiList"}),{children:i,className:o,component:a="ul",dense:s=!1,disablePadding:l=!1,subheader:u}=r,c=(0,me.Z)(r,gv),d=t.useMemo((()=>({dense:s})),[s]),h=(0,pe.Z)({},r,{component:a,dense:s,disablePadding:l}),f=(e=>{const{classes:t,disablePadding:n,dense:r,subheader:i}=e,o={root:["root",!n&&"padding",r&&"dense",i&&"subheader"]};return(0,Ue.Z)(o,mv,t)})(h);return(0,Ie.jsx)(pv.Provider,{value:d,children:(0,Ie.jsxs)(yv,(0,pe.Z)({as:a,className:(0,ge.Z)(f.root,o),ref:n,ownerState:h},c,{children:[u,i]}))})}));function bv(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const wv=bv,Ev=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Sv(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function kv(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function _v(e,t){if(void 0===t)return!0;let n=e.innerText;return void 0===n&&(n=e.textContent),n=n.trim().toLowerCase(),0!==n.length&&(t.repeating?n[0]===t.keys[0]:0===n.indexOf(t.keys.join("")))}function Iv(e,t,n,r,i,o){let a=!1,s=i(e,t,!!t&&n);for(;s;){if(s===e.firstChild){if(a)return!1;a=!0}const t=!r&&(s.disabled||"true"===s.getAttribute("aria-disabled"));if(s.hasAttribute("tabindex")&&_v(s,o)&&!t)return s.focus(),!0;s=i(e,s,n)}return!1}const Tv=t.forwardRef((function(e,n){const{actions:r,autoFocus:i=!1,autoFocusItem:o=!1,children:a,className:s,disabledItemsFocusable:l=!1,disableListWrap:u=!1,onKeyDown:c,variant:d="selectedMenu"}=e,h=(0,me.Z)(e,Ev),f=t.useRef(null),p=t.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,ry.Z)((()=>{i&&f.current.focus()}),[i]),t.useImperativeHandle(r,(()=>({adjustStyleForScrollbar:(e,t)=>{const n=!f.current.style.width;if(e.clientHeight<f.current.clientHeight&&n){const n=`${wv((0,fv.Z)(e))}px`;f.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=n,f.current.style.width=`calc(100% + ${n})`}return f.current}})),[]);const m=(0,Ye.Z)(f,n);let g=-1;t.Children.forEach(a,((e,n)=>{t.isValidElement(e)&&(e.props.disabled||("selectedMenu"===d&&e.props.selected||-1===g)&&(g=n))}));const y=t.Children.map(a,((e,n)=>{if(n===g){const n={};return o&&(n.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===d&&(n.tabIndex=0),t.cloneElement(e,n)}return e}));return(0,Ie.jsx)(vv,(0,pe.Z)({role:"menu",ref:m,className:s,onKeyDown:e=>{const t=f.current,n=e.key,r=(0,fv.Z)(t).activeElement;if("ArrowDown"===n)e.preventDefault(),Iv(t,r,u,l,Sv);else if("ArrowUp"===n)e.preventDefault(),Iv(t,r,u,l,kv);else if("Home"===n)e.preventDefault(),Iv(t,null,u,l,Sv);else if("End"===n)e.preventDefault(),Iv(t,null,u,l,kv);else if(1===n.length){const i=p.current,o=n.toLowerCase(),a=performance.now();i.keys.length>0&&(a-i.lastTime>500?(i.keys=[],i.repeating=!0,i.previousKeyMatched=!0):i.repeating&&o!==i.keys[0]&&(i.repeating=!1)),i.lastTime=a,i.keys.push(o);const s=r&&!i.repeating&&_v(r,i);i.previousKeyMatched&&(s||Iv(t,r,!1,l,Sv,i))?e.preventDefault():i.previousKeyMatched=!1}c&&c(e)},tabIndex:i?0:-1},h,{children:y}))})),xv=Tv,Cv=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};function Ov(e){return(0,Be.Z)("MuiPaper",e)}(0,ze.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Rv=["className","component","elevation","square","variant"],Av=(0,Pe.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>{var n;return(0,pe.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,pe.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,Je.Fq)("#fff",Cv(t.elevation))}, ${(0,Je.Fq)("#fff",Cv(t.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[t.elevation]}))})),Pv=t.forwardRef((function(e,t){const n=(0,Ne.Z)({props:e,name:"MuiPaper"}),{className:r,component:i="div",elevation:o=1,square:a=!1,variant:s="elevation"}=n,l=(0,me.Z)(n,Rv),u=(0,pe.Z)({},n,{component:i,elevation:o,square:a,variant:s}),c=(e=>{const{square:t,elevation:n,variant:r,classes:i}=e,o={root:["root",r,!t&&"rounded","elevation"===r&&`elevation${n}`]};return(0,Ue.Z)(o,Ov,i)})(u);return(0,Ie.jsx)(Av,(0,pe.Z)({as:i,ownerState:u,className:(0,ge.Z)(c.root,r),ref:t},l))})),Nv=Pv;var Mv=i(7144),Lv=i(5340);const Dv=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function jv(e){return`scale(${e}, ${e**2})`}const Fv={entering:{opacity:1,transform:jv(1)},entered:{opacity:1,transform:"none"}},Uv="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Zv=t.forwardRef((function(e,n){const{addEndListener:r,appear:i=!0,children:o,easing:a,in:s,onEnter:l,onEntered:u,onEntering:c,onExit:d,onExited:h,onExiting:f,style:p,timeout:m="auto",TransitionComponent:g=Pg}=e,y=(0,me.Z)(e,Dv),v=t.useRef(),b=t.useRef(),w=Mg(),E=t.useRef(null),S=(0,Ye.Z)(E,o.ref,n),k=e=>t=>{if(e){const n=E.current;void 0===t?e(n):e(n,t)}},_=k(c),I=k(((e,t)=>{Lg(e);const{duration:n,delay:r,easing:i}=Dg({style:p,timeout:m,easing:a},{mode:"enter"});let o;"auto"===m?(o=w.transitions.getAutoHeightDuration(e.clientHeight),b.current=o):o=n,e.style.transition=[w.transitions.create("opacity",{duration:o,delay:r}),w.transitions.create("transform",{duration:Uv?o:.666*o,delay:r,easing:i})].join(","),l&&l(e,t)})),T=k(u),x=k(f),C=k((e=>{const{duration:t,delay:n,easing:r}=Dg({style:p,timeout:m,easing:a},{mode:"exit"});let i;"auto"===m?(i=w.transitions.getAutoHeightDuration(e.clientHeight),b.current=i):i=t,e.style.transition=[w.transitions.create("opacity",{duration:i,delay:n}),w.transitions.create("transform",{duration:Uv?i:.666*i,delay:Uv?n:n||.333*i,easing:r})].join(","),e.style.opacity=0,e.style.transform=jv(.75),d&&d(e)})),O=k(h);return t.useEffect((()=>()=>{clearTimeout(v.current)}),[]),(0,Ie.jsx)(g,(0,pe.Z)({appear:i,in:s,nodeRef:E,onEnter:I,onEntered:T,onEntering:_,onExit:C,onExited:O,onExiting:x,addEndListener:e=>{"auto"===m&&(v.current=setTimeout(e,b.current||0)),r&&r(E.current,e)},timeout:"auto"===m?null:m},y,{children:(e,n)=>t.cloneElement(o,(0,pe.Z)({style:(0,pe.Z)({opacity:0,transform:jv(.75),visibility:"exited"!==e||s?void 0:"hidden"},Fv[e],p,o.props.style),ref:S},n))}))}));Zv.muiSupportAuto=!0;const zv=Zv;var Bv=i(2690),$v=i(9948),Vv=i(9064),Wv=i(7960);const Hv=t.forwardRef((function(e,n){const{children:i,container:o,disablePortal:a=!1}=e,[s,l]=t.useState(null),u=(0,$g.Z)(t.isValidElement(i)?i.ref:null,n);return(0,Hg.Z)((()=>{a||l(function(e){return"function"==typeof e?e():e}(o)||document.body)}),[o,a]),(0,Hg.Z)((()=>{if(s&&!a)return(0,Wv.Z)(n,s),()=>{(0,Wv.Z)(n,null)}}),[n,s,a]),a?t.isValidElement(i)?t.cloneElement(i,{ref:u}):i:(0,Ie.jsx)(t.Fragment,{children:s?r.createPortal(i,s):s})}));function qv(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Kv(e){return parseInt((0,Vg.Z)(e).getComputedStyle(e).paddingRight,10)||0}function Gv(e,t,n,r,i){const o=[t,n,...r];[].forEach.call(e.children,(e=>{const t=-1===o.indexOf(e),n=!function(e){const t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&qv(e,i)}))}function Xv(e,t){let n=-1;return e.some(((e,r)=>!!t(e)&&(n=r,!0))),n}function Jv(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(function(e){const t=(0,Bv.Z)(e);return t.body===e?(0,Vg.Z)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(r)){const e=bv((0,Bv.Z)(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Kv(r)+e}px`;const t=(0,Bv.Z)(r).querySelectorAll(".mui-fixed");[].forEach.call(t,(t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${Kv(t)+e}px`}))}let e;if(r.parentNode instanceof DocumentFragment)e=(0,Bv.Z)(r).body;else{const t=r.parentElement,n=(0,Vg.Z)(r);e="HTML"===(null==t?void 0:t.nodeName)&&"scroll"===n.getComputedStyle(t).overflowY?t:r}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach((({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)}))}}const Yv=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Qv(e){const t=[],n=[];return Array.from(e.querySelectorAll(Yv)).forEach(((e,r)=>{const i=function(e){const t=parseInt(e.getAttribute("tabindex"),10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1!==i&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}(e))}(e)&&(0===i?t.push(e):n.push({documentOrder:r,tabIndex:i,node:e}))})),n.sort(((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex)).map((e=>e.node)).concat(t)}function eb(){return!0}const tb=function(e){const{children:n,disableAutoFocus:r=!1,disableEnforceFocus:i=!1,disableRestoreFocus:o=!1,getTabbable:a=Qv,isEnabled:s=eb,open:l}=e,u=t.useRef(),c=t.useRef(null),d=t.useRef(null),h=t.useRef(null),f=t.useRef(null),p=t.useRef(!1),m=t.useRef(null),g=(0,$g.Z)(n.ref,m),y=t.useRef(null);t.useEffect((()=>{l&&m.current&&(p.current=!r)}),[r,l]),t.useEffect((()=>{if(!l||!m.current)return;const e=(0,Bv.Z)(m.current);return m.current.contains(e.activeElement)||(m.current.hasAttribute("tabIndex")||m.current.setAttribute("tabIndex",-1),p.current&&m.current.focus()),()=>{o||(h.current&&h.current.focus&&(u.current=!0,h.current.focus()),h.current=null)}}),[l]),t.useEffect((()=>{if(!l||!m.current)return;const e=(0,Bv.Z)(m.current),t=t=>{const{current:n}=m;if(null!==n)if(e.hasFocus()&&!i&&s()&&!u.current){if(!n.contains(e.activeElement)){if(t&&f.current!==t.target||e.activeElement!==f.current)f.current=null;else if(null!==f.current)return;if(!p.current)return;let i=[];if(e.activeElement!==c.current&&e.activeElement!==d.current||(i=a(m.current)),i.length>0){var r,o;const e=Boolean((null==(r=y.current)?void 0:r.shiftKey)&&"Tab"===(null==(o=y.current)?void 0:o.key)),t=i[0],n=i[i.length-1];e?n.focus():t.focus()}else n.focus()}}else u.current=!1},n=t=>{y.current=t,!i&&s()&&"Tab"===t.key&&e.activeElement===m.current&&t.shiftKey&&(u.current=!0,d.current.focus())};e.addEventListener("focusin",t),e.addEventListener("keydown",n,!0);const r=setInterval((()=>{"BODY"===e.activeElement.tagName&&t()}),50);return()=>{clearInterval(r),e.removeEventListener("focusin",t),e.removeEventListener("keydown",n,!0)}}),[r,i,o,s,l,a]);const v=e=>{null===h.current&&(h.current=e.relatedTarget),p.current=!0};return(0,Ie.jsxs)(t.Fragment,{children:[(0,Ie.jsx)("div",{tabIndex:l?0:-1,onFocus:v,ref:c,"data-testid":"sentinelStart"}),t.cloneElement(n,{ref:g,onFocus:e=>{null===h.current&&(h.current=e.relatedTarget),p.current=!0,f.current=e.target;const t=n.props.onFocus;t&&t(e)}}),(0,Ie.jsx)("div",{tabIndex:l?0:-1,onFocus:v,ref:d,"data-testid":"sentinelEnd"})]})};function nb(e){return(0,Be.Z)("MuiModal",e)}(0,ze.Z)("MuiModal",["root","hidden"]);function rb(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t]))).forEach((n=>{t[n]=e[n]})),t}function ib(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:o}=e;if(!t){const e=(0,ge.Z)(null==i?void 0:i.className,null==r?void 0:r.className,o,null==n?void 0:n.className),t=(0,pe.Z)({},null==n?void 0:n.style,null==i?void 0:i.style,null==r?void 0:r.style),a=(0,pe.Z)({},n,i,r);return e.length>0&&(a.className=e),Object.keys(t).length>0&&(a.style=t),{props:a,internalRef:void 0}}const a=function(e,t=[]){if(void 0===e)return{};const n={};return Object.keys(e).filter((n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n))).forEach((t=>{n[t]=e[t]})),n}((0,pe.Z)({},i,r)),s=rb(r),l=rb(i),u=t(a),c=(0,ge.Z)(null==u?void 0:u.className,null==n?void 0:n.className,o,null==i?void 0:i.className,null==r?void 0:r.className),d=(0,pe.Z)({},null==u?void 0:u.style,null==n?void 0:n.style,null==i?void 0:i.style,null==r?void 0:r.style),h=(0,pe.Z)({},u,n,l,s);return c.length>0&&(h.className=c),Object.keys(d).length>0&&(h.style=d),{props:h,internalRef:u.ref}}function ob(e,t){return"function"==typeof e?e(t):e}const ab=["elementType","externalSlotProps","ownerState"];function sb(e){var t;const{elementType:n,externalSlotProps:r,ownerState:i}=e,o=(0,me.Z)(e,ab),a=ob(r,i),{props:s,internalRef:l}=ib((0,pe.Z)({},o,{externalSlotProps:a})),u=(0,$g.Z)(l,null==a?void 0:a.ref,null==(t=e.additionalProps)?void 0:t.ref),c=function(e,t,n){return void 0===e||Qg(e)?t:(0,pe.Z)({},t,{ownerState:(0,pe.Z)({},t.ownerState,n)})}(n,(0,pe.Z)({},s,{ref:u}),i);return c}const lb=["children","classes","closeAfterTransition","component","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"];const ub=new class{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&qv(e.modalRef,!1);const r=function(e){const t=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);Gv(t,e.mount,e.modalRef,r,!0);const i=Xv(this.containers,(e=>e.container===t));return-1!==i?(this.containers[i].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n)}mount(e,t){const n=Xv(this.containers,(t=>-1!==t.modals.indexOf(e))),r=this.containers[n];r.restore||(r.restore=Jv(r,t))}remove(e,t=!0){const n=this.modals.indexOf(e);if(-1===n)return n;const r=Xv(this.containers,(t=>-1!==t.modals.indexOf(e))),i=this.containers[r];if(i.modals.splice(i.modals.indexOf(e),1),this.modals.splice(n,1),0===i.modals.length)i.restore&&i.restore(),e.modalRef&&qv(e.modalRef,t),Gv(i.container,e.mount,e.modalRef,i.hiddenSiblings,!1),this.containers.splice(r,1);else{const e=i.modals[i.modals.length-1];e.modalRef&&qv(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}},cb=t.forwardRef((function(e,n){var r,i;const{children:o,classes:a,closeAfterTransition:s=!1,component:l,container:u,disableAutoFocus:c=!1,disableEnforceFocus:d=!1,disableEscapeKeyDown:h=!1,disablePortal:f=!1,disableRestoreFocus:p=!1,disableScrollLock:m=!1,hideBackdrop:g=!1,keepMounted:y=!1,manager:v=ub,onBackdropClick:b,onClose:w,onKeyDown:E,open:S,onTransitionEnter:k,onTransitionExited:_,slotProps:I={},slots:T={}}=e,x=(0,me.Z)(e,lb),[C,O]=t.useState(!S),R=t.useRef({}),A=t.useRef(null),P=t.useRef(null),N=(0,$g.Z)(P,n),M=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(e),L=null==(r=e["aria-hidden"])||r,D=()=>(R.current.modalRef=P.current,R.current.mountNode=A.current,R.current),j=()=>{v.mount(D(),{disableScrollLock:m}),P.current.scrollTop=0},F=(0,$v.Z)((()=>{const e=function(e){return"function"==typeof e?e():e}(u)||(0,Bv.Z)(A.current).body;v.add(D(),e),P.current&&j()})),U=t.useCallback((()=>v.isTopModal(D())),[v]),Z=(0,$v.Z)((e=>{A.current=e,e&&(S&&U()?j():qv(P.current,L))})),z=t.useCallback((()=>{v.remove(D(),L)}),[v,L]);t.useEffect((()=>()=>{z()}),[z]),t.useEffect((()=>{S?F():M&&s||z()}),[S,z,M,s,F]);const B=(0,pe.Z)({},e,{classes:a,closeAfterTransition:s,disableAutoFocus:c,disableEnforceFocus:d,disableEscapeKeyDown:h,disablePortal:f,disableRestoreFocus:p,disableScrollLock:m,exited:C,hideBackdrop:g,keepMounted:y}),$=(e=>{const{open:t,exited:n,classes:r}=e,i={root:["root",!t&&n&&"hidden"]};return(0,Ue.Z)(i,nb,r)})(B),V=()=>{O(!1),k&&k()},W=()=>{O(!0),_&&_(),s&&z()},H={};void 0===o.props.tabIndex&&(H.tabIndex="-1"),M&&(H.onEnter=(0,Vv.Z)(V,o.props.onEnter),H.onExited=(0,Vv.Z)(W,o.props.onExited));const q=null!=(i=null!=l?l:T.root)?i:"div",K=sb({elementType:q,externalSlotProps:I.root,externalForwardedProps:x,additionalProps:{ref:N,role:"presentation",onKeyDown:e=>{E&&E(e),"Escape"===e.key&&U()&&(h||(e.stopPropagation(),w&&w(e,"escapeKeyDown")))}},className:$.root,ownerState:B}),G=T.backdrop,X=sb({elementType:G,externalSlotProps:I.backdrop,additionalProps:{"aria-hidden":!0,onClick:e=>{e.target===e.currentTarget&&(b&&b(e),w&&w(e,"backdropClick"))},open:S},className:$.backdrop,ownerState:B});return y||S||M&&!C?(0,Ie.jsx)(Hv,{ref:Z,container:u,disablePortal:f,children:(0,Ie.jsxs)(q,(0,pe.Z)({},K,{children:[!g&&G?(0,Ie.jsx)(G,(0,pe.Z)({},X)):null,(0,Ie.jsx)(tb,{disableEnforceFocus:d,disableAutoFocus:c,disableRestoreFocus:p,isEnabled:U,open:S,children:t.cloneElement(o,H)})]}))}):null}));function db(e){return(0,Be.Z)("MuiBackdrop",e)}(0,ze.Z)("MuiBackdrop",["root","invisible"]);const hb=["children","component","components","componentsProps","className","invisible","open","slotProps","slots","transitionDuration","TransitionComponent"],fb=(0,Pe.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})((({ownerState:e})=>(0,pe.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"}))),pb=t.forwardRef((function(e,t){var n,r,i;const o=(0,Ne.Z)({props:e,name:"MuiBackdrop"}),{children:a,component:s="div",components:l={},componentsProps:u={},className:c,invisible:d=!1,open:h,slotProps:f={},slots:p={},transitionDuration:m,TransitionComponent:g=Zg}=o,y=(0,me.Z)(o,hb),v=(0,pe.Z)({},o,{component:s,invisible:d}),b=(e=>{const{classes:t,invisible:n}=e,r={root:["root",n&&"invisible"]};return(0,Ue.Z)(r,db,t)})(v),w=null!=(n=f.root)?n:u.root;return(0,Ie.jsx)(g,(0,pe.Z)({in:h,timeout:m},y,{children:(0,Ie.jsx)(fb,(0,pe.Z)({"aria-hidden":!0},w,{as:null!=(r=null!=(i=p.root)?i:l.Root)?r:s,className:(0,ge.Z)(b.root,c,null==w?void 0:w.className),ownerState:(0,pe.Z)({},v,null==w?void 0:w.ownerState),classes:b,ref:t,children:a}))}))})),mb=["BackdropComponent","BackdropProps","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","slotProps","slots","theme"],gb=(0,Pe.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})((({theme:e,ownerState:t})=>(0,pe.Z)({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"}))),yb=(0,Pe.ZP)(pb,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),vb=t.forwardRef((function(e,n){var r,i,o,a,s,l;const u=(0,Ne.Z)({name:"MuiModal",props:e}),{BackdropComponent:c=yb,BackdropProps:d,closeAfterTransition:h=!1,children:f,component:p,components:m={},componentsProps:g={},disableAutoFocus:y=!1,disableEnforceFocus:v=!1,disableEscapeKeyDown:b=!1,disablePortal:w=!1,disableRestoreFocus:E=!1,disableScrollLock:S=!1,hideBackdrop:k=!1,keepMounted:_=!1,slotProps:I,slots:T,theme:x}=u,C=(0,me.Z)(u,mb),[O,R]=t.useState(!0),A={closeAfterTransition:h,disableAutoFocus:y,disableEnforceFocus:v,disableEscapeKeyDown:b,disablePortal:w,disableRestoreFocus:E,disableScrollLock:S,hideBackdrop:k,keepMounted:_},P=(0,pe.Z)({},u,A,{exited:O}),N=(e=>e.classes)(P),M=null!=(r=null!=(i=null==T?void 0:T.root)?i:m.Root)?r:gb,L=null!=(o=null!=(a=null==T?void 0:T.backdrop)?a:m.Backdrop)?o:c,D=null!=(s=null==I?void 0:I.root)?s:g.root,j=null!=(l=null==I?void 0:I.backdrop)?l:g.backdrop;return(0,Ie.jsx)(cb,(0,pe.Z)({slots:{root:M,backdrop:L},slotProps:{root:()=>(0,pe.Z)({},ob(D,P),!Qg(M)&&{as:p,theme:x}),backdrop:()=>(0,pe.Z)({},d,ob(j,P))},onTransitionEnter:()=>R(!1),onTransitionExited:()=>R(!0),ref:n},C,{classes:N},A,{children:f}))}));function bb(e){return(0,Be.Z)("MuiPopover",e)}(0,ze.Z)("MuiPopover",["root","paper"]);const wb=["onEntering"],Eb=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function Sb(e,t){let n=0;return"number"==typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function kb(e,t){let n=0;return"number"==typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function _b(e){return[e.horizontal,e.vertical].map((e=>"number"==typeof e?`${e}px`:e)).join(" ")}function Ib(e){return"function"==typeof e?e():e}const Tb=(0,Pe.ZP)(vb,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),xb=(0,Pe.ZP)(Nv,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Cb=t.forwardRef((function(e,n){const r=(0,Ne.Z)({props:e,name:"MuiPopover"}),{action:i,anchorEl:o,anchorOrigin:a={vertical:"top",horizontal:"left"},anchorPosition:s,anchorReference:l="anchorEl",children:u,className:c,container:d,elevation:h=8,marginThreshold:f=16,open:p,PaperProps:m={},transformOrigin:g={vertical:"top",horizontal:"left"},TransitionComponent:y=zv,transitionDuration:v="auto",TransitionProps:{onEntering:b}={}}=r,w=(0,me.Z)(r.TransitionProps,wb),E=(0,me.Z)(r,Eb),S=t.useRef(),k=(0,Ye.Z)(S,m.ref),_=(0,pe.Z)({},r,{anchorOrigin:a,anchorReference:l,elevation:h,marginThreshold:f,PaperProps:m,transformOrigin:g,TransitionComponent:y,transitionDuration:v,TransitionProps:w}),I=(e=>{const{classes:t}=e;return(0,Ue.Z)({root:["root"],paper:["paper"]},bb,t)})(_),T=t.useCallback((()=>{if("anchorPosition"===l)return s;const e=Ib(o),t=(e&&1===e.nodeType?e:(0,fv.Z)(S.current).body).getBoundingClientRect();return{top:t.top+Sb(t,a.vertical),left:t.left+kb(t,a.horizontal)}}),[o,a.horizontal,a.vertical,s,l]),x=t.useCallback((e=>({vertical:Sb(e,g.vertical),horizontal:kb(e,g.horizontal)})),[g.horizontal,g.vertical]),C=t.useCallback((e=>{const t={width:e.offsetWidth,height:e.offsetHeight},n=x(t);if("none"===l)return{top:null,left:null,transformOrigin:_b(n)};const r=T();let i=r.top-n.vertical,a=r.left-n.horizontal;const s=i+t.height,u=a+t.width,c=(0,Lv.Z)(Ib(o)),d=c.innerHeight-f,h=c.innerWidth-f;if(i<f){const e=i-f;i-=e,n.vertical+=e}else if(s>d){const e=s-d;i-=e,n.vertical+=e}if(a<f){const e=a-f;a-=e,n.horizontal+=e}else if(u>h){const e=u-h;a-=e,n.horizontal+=e}return{top:`${Math.round(i)}px`,left:`${Math.round(a)}px`,transformOrigin:_b(n)}}),[o,l,T,x,f]),[O,R]=t.useState(p),A=t.useCallback((()=>{const e=S.current;if(!e)return;const t=C(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin,R(!0)}),[C]);t.useEffect((()=>{p&&A()})),t.useImperativeHandle(i,(()=>p?{updatePosition:()=>{A()}}:null),[p,A]),t.useEffect((()=>{if(!p)return;const e=(0,Mv.Z)((()=>{A()})),t=(0,Lv.Z)(o);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[o,p,A]);let P=v;"auto"!==v||y.muiSupportAuto||(P=void 0);const N=d||(o?(0,fv.Z)(Ib(o)).body:void 0);return(0,Ie.jsx)(Tb,(0,pe.Z)({BackdropProps:{invisible:!0},className:(0,ge.Z)(I.root,c),container:N,open:p,ref:n,ownerState:_},E,{children:(0,Ie.jsx)(y,(0,pe.Z)({appear:!0,in:p,onEntering:(e,t)=>{b&&b(e,t),A()},onExited:()=>{R(!1)},timeout:P},w,{children:(0,Ie.jsx)(xb,(0,pe.Z)({elevation:h},m,{ref:k,className:(0,ge.Z)(I.paper,m.className)},O?void 0:{style:(0,pe.Z)({},m.style,{opacity:0})},{ownerState:_,children:u}))}))}))}));function Ob(e){return(0,Be.Z)("MuiMenu",e)}(0,ze.Z)("MuiMenu",["root","paper","list"]);const Rb=["onEntering"],Ab=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],Pb={vertical:"top",horizontal:"right"},Nb={vertical:"top",horizontal:"left"},Mb=(0,Pe.ZP)(Cb,{shouldForwardProp:e=>(0,Pe.FO)(e)||"classes"===e,name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Lb=(0,Pe.ZP)(Nv,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Db=(0,Pe.ZP)(xv,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),jb=t.forwardRef((function(e,n){const r=(0,Ne.Z)({props:e,name:"MuiMenu"}),{autoFocus:i=!0,children:o,disableAutoFocusItem:a=!1,MenuListProps:s={},onClose:l,open:u,PaperProps:c={},PopoverClasses:d,transitionDuration:h="auto",TransitionProps:{onEntering:f}={},variant:p="selectedMenu"}=r,m=(0,me.Z)(r.TransitionProps,Rb),g=(0,me.Z)(r,Ab),y=Mg(),v="rtl"===y.direction,b=(0,pe.Z)({},r,{autoFocus:i,disableAutoFocusItem:a,MenuListProps:s,onEntering:f,PaperProps:c,transitionDuration:h,TransitionProps:m,variant:p}),w=(e=>{const{classes:t}=e;return(0,Ue.Z)({root:["root"],paper:["paper"],list:["list"]},Ob,t)})(b),E=i&&!a&&u,S=t.useRef(null);let k=-1;return t.Children.map(o,((e,n)=>{t.isValidElement(e)&&(e.props.disabled||("selectedMenu"===p&&e.props.selected||-1===k)&&(k=n))})),(0,Ie.jsx)(Mb,(0,pe.Z)({onClose:l,anchorOrigin:{vertical:"bottom",horizontal:v?"right":"left"},transformOrigin:v?Pb:Nb,PaperProps:(0,pe.Z)({component:Lb},c,{classes:(0,pe.Z)({},c.classes,{root:w.paper})}),className:w.root,open:u,ref:n,transitionDuration:h,TransitionProps:(0,pe.Z)({onEntering:(e,t)=>{S.current&&S.current.adjustStyleForScrollbar(e,y),f&&f(e,t)}},m),ownerState:b},g,{classes:d,children:(0,Ie.jsx)(Db,(0,pe.Z)({onKeyDown:e=>{"Tab"===e.key&&(e.preventDefault(),l&&l(e,"tabKeyDown"))},actions:S,autoFocus:i&&(-1===k||a),autoFocusItem:E,variant:p},s,{className:(0,ge.Z)(w.list,s.className),children:o}))}))})),Fb=jb;function Ub(e){return(0,Be.Z)("MuiNativeSelect",e)}const Zb=(0,ze.Z)("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]),zb=["className","disabled","IconComponent","inputRef","variant"],Bb=({ownerState:e,theme:t})=>(0,pe.Z)({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":(0,pe.Z)({},t.vars?{backgroundColor:`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:"light"===t.palette.mode?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${Zb.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(t.vars||t).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},"filled"===e.variant&&{"&&&":{paddingRight:32}},"outlined"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius,"&:focus":{borderRadius:(t.vars||t).shape.borderRadius},"&&&":{paddingRight:32}}),$b=(0,Pe.ZP)("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:Pe.FO,overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.select,t[n.variant],{[`&.${Zb.multiple}`]:t.multiple}]}})(Bb),Vb=({ownerState:e,theme:t})=>(0,pe.Z)({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(t.vars||t).palette.action.active,[`&.${Zb.disabled}`]:{color:(t.vars||t).palette.action.disabled}},e.open&&{transform:"rotate(180deg)"},"filled"===e.variant&&{right:7},"outlined"===e.variant&&{right:7}),Wb=(0,Pe.ZP)("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${(0,Ze.Z)(n.variant)}`],n.open&&t.iconOpen]}})(Vb),Hb=t.forwardRef((function(e,n){const{className:r,disabled:i,IconComponent:o,inputRef:a,variant:s="standard"}=e,l=(0,me.Z)(e,zb),u=(0,pe.Z)({},e,{disabled:i,variant:s}),c=(e=>{const{classes:t,variant:n,disabled:r,multiple:i,open:o}=e,a={select:["select",n,r&&"disabled",i&&"multiple"],icon:["icon",`icon${(0,Ze.Z)(n)}`,o&&"iconOpen",r&&"disabled"]};return(0,Ue.Z)(a,Ub,t)})(u);return(0,Ie.jsxs)(t.Fragment,{children:[(0,Ie.jsx)($b,(0,pe.Z)({ownerState:u,className:(0,ge.Z)(c.select,r),disabled:i,ref:a||n},l)),e.multiple?null:(0,Ie.jsx)(Wb,{as:o,ownerState:u,className:c.icon})]})})),qb=Hb;var Kb=i(9327);function Gb(e){return(0,Be.Z)("MuiSelect",e)}const Xb=(0,ze.Z)("MuiSelect",["select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]);var Jb;const Yb=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],Qb=(0,Pe.ZP)("div",{name:"MuiSelect",slot:"Select",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`&.${Xb.select}`]:t.select},{[`&.${Xb.select}`]:t[n.variant]},{[`&.${Xb.multiple}`]:t.multiple}]}})(Bb,{[`&.${Xb.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),ew=(0,Pe.ZP)("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${(0,Ze.Z)(n.variant)}`],n.open&&t.iconOpen]}})(Vb),tw=(0,Pe.ZP)("input",{shouldForwardProp:e=>(0,Pe.Dz)(e)&&"classes"!==e,name:"MuiSelect",slot:"NativeInput",overridesResolver:(e,t)=>t.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function nw(e,t){return"object"==typeof t&&null!==t?e===t:String(e)===String(t)}function rw(e){return null==e||"string"==typeof e&&!e.trim()}const iw=t.forwardRef((function(e,n){const{"aria-describedby":r,"aria-label":i,autoFocus:o,autoWidth:a,children:s,className:l,defaultOpen:u,defaultValue:c,disabled:d,displayEmpty:h,IconComponent:f,inputRef:p,labelId:m,MenuProps:g={},multiple:y,name:v,onBlur:b,onChange:w,onClose:E,onFocus:S,onOpen:k,open:_,readOnly:I,renderValue:T,SelectDisplayProps:x={},tabIndex:C,value:O,variant:R="standard"}=e,A=(0,me.Z)(e,Yb),[P,N]=(0,Kb.Z)({controlled:O,default:c,name:"Select"}),[M,L]=(0,Kb.Z)({controlled:_,default:u,name:"Select"}),D=t.useRef(null),j=t.useRef(null),[F,U]=t.useState(null),{current:Z}=t.useRef(null!=_),[z,B]=t.useState(),$=(0,Ye.Z)(n,p),V=t.useCallback((e=>{j.current=e,e&&U(e)}),[]);t.useImperativeHandle($,(()=>({focus:()=>{j.current.focus()},node:D.current,value:P})),[P]),t.useEffect((()=>{u&&M&&F&&!Z&&(B(a?null:F.clientWidth),j.current.focus())}),[F,a]),t.useEffect((()=>{o&&j.current.focus()}),[o]),t.useEffect((()=>{if(!m)return;const e=(0,fv.Z)(j.current).getElementById(m);if(e){const t=()=>{getSelection().isCollapsed&&j.current.focus()};return e.addEventListener("click",t),()=>{e.removeEventListener("click",t)}}}),[m]);const W=(e,t)=>{e?k&&k(t):E&&E(t),Z||(B(a?null:F.clientWidth),L(e))},H=t.Children.toArray(s),q=e=>t=>{let n;if(t.currentTarget.hasAttribute("tabindex")){if(y){n=Array.isArray(P)?P.slice():[];const t=P.indexOf(e.props.value);-1===t?n.push(e.props.value):n.splice(t,1)}else n=e.props.value;if(e.props.onClick&&e.props.onClick(t),P!==n&&(N(n),w)){const r=t.nativeEvent||t,i=new r.constructor(r.type,r);Object.defineProperty(i,"target",{writable:!0,value:{value:n,name:v}}),w(i,e)}y||W(!1,t)}},K=null!==F&&M;let G,X;delete A["aria-invalid"];const J=[];let Y=!1,Q=!1;(sy({value:P})||h)&&(T?G=T(P):Y=!0);const ee=H.map(((e,n,r)=>{if(!t.isValidElement(e))return null;let i;if(y){if(!Array.isArray(P))throw new Error((0,Bg.Z)(2));i=P.some((t=>nw(t,e.props.value))),i&&Y&&J.push(e.props.children)}else i=nw(P,e.props.value),i&&Y&&(X=e.props.children);if(i&&(Q=!0),void 0===e.props.value)return t.cloneElement(e,{"aria-readonly":!0,role:"option"});return t.cloneElement(e,{"aria-selected":i?"true":"false",onClick:q(e),onKeyUp:t=>{" "===t.key&&t.preventDefault(),e.props.onKeyUp&&e.props.onKeyUp(t)},role:"option",selected:void 0===r[0].props.value||!0===r[0].props.disabled?(()=>{if(P)return i;const t=r.find((e=>void 0!==e.props.value&&!0!==e.props.disabled));return e===t||i})():i,value:void 0,"data-value":e.props.value})}));Y&&(G=y?0===J.length?null:J.reduce(((e,t,n)=>(e.push(t),n<J.length-1&&e.push(", "),e)),[]):X);let te,ne=z;!a&&Z&&F&&(ne=F.clientWidth),te=void 0!==C?C:d?null:0;const re=x.id||(v?`mui-component-select-${v}`:void 0),ie=(0,pe.Z)({},e,{variant:R,value:P,open:K}),oe=(e=>{const{classes:t,variant:n,disabled:r,multiple:i,open:o}=e,a={select:["select",n,r&&"disabled",i&&"multiple"],icon:["icon",`icon${(0,Ze.Z)(n)}`,o&&"iconOpen",r&&"disabled"],nativeInput:["nativeInput"]};return(0,Ue.Z)(a,Gb,t)})(ie);return(0,Ie.jsxs)(t.Fragment,{children:[(0,Ie.jsx)(Qb,(0,pe.Z)({ref:V,tabIndex:te,role:"button","aria-disabled":d?"true":void 0,"aria-expanded":K?"true":"false","aria-haspopup":"listbox","aria-label":i,"aria-labelledby":[m,re].filter(Boolean).join(" ")||void 0,"aria-describedby":r,onKeyDown:e=>{if(!I){-1!==[" ","ArrowUp","ArrowDown","Enter"].indexOf(e.key)&&(e.preventDefault(),W(!0,e))}},onMouseDown:d||I?null:e=>{0===e.button&&(e.preventDefault(),j.current.focus(),W(!0,e))},onBlur:e=>{!K&&b&&(Object.defineProperty(e,"target",{writable:!0,value:{value:P,name:v}}),b(e))},onFocus:S},x,{ownerState:ie,className:(0,ge.Z)(x.className,oe.select,l),id:re,children:rw(G)?Jb||(Jb=(0,Ie.jsx)("span",{className:"notranslate",children:"​"})):G})),(0,Ie.jsx)(tw,(0,pe.Z)({value:Array.isArray(P)?P.join(","):P,name:v,ref:D,"aria-hidden":!0,onChange:e=>{const t=H.map((e=>e.props.value)).indexOf(e.target.value);if(-1===t)return;const n=H[t];N(n.props.value),w&&w(e,n)},tabIndex:-1,disabled:d,className:oe.nativeInput,autoFocus:o,ownerState:ie},A)),(0,Ie.jsx)(ew,{as:f,className:oe.icon,ownerState:ie}),(0,Ie.jsx)(Fb,(0,pe.Z)({id:`menu-${v||""}`,anchorEl:F,open:K,onClose:e=>{W(!1,e)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},g,{MenuListProps:(0,pe.Z)({"aria-labelledby":m,role:"listbox",disableListWrap:!0},g.MenuListProps),PaperProps:(0,pe.Z)({},g.PaperProps,{style:(0,pe.Z)({minWidth:ne},null!=g.PaperProps?g.PaperProps.style:null)}),children:ee}))]})})),ow=iw;const aw=(0,i(5949).Z)((0,Ie.jsx)("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");var sw,lw;const uw=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],cw={name:"MuiSelect",overridesResolver:(e,t)=>t.root,shouldForwardProp:e=>(0,Pe.FO)(e)&&"variant"!==e,slot:"Root"},dw=(0,Pe.ZP)(_y,cw)(""),hw=(0,Pe.ZP)($y,cw)(""),fw=(0,Pe.ZP)(Ay,cw)(""),pw=t.forwardRef((function(e,n){const r=(0,Ne.Z)({name:"MuiSelect",props:e}),{autoWidth:i=!1,children:o,classes:a={},className:s,defaultOpen:l=!1,displayEmpty:u=!1,IconComponent:c=aw,id:d,input:h,inputProps:f,label:p,labelId:m,MenuProps:g,multiple:y=!1,native:v=!1,onClose:b,onOpen:w,open:E,renderValue:S,SelectDisplayProps:k,variant:_="outlined"}=r,I=(0,me.Z)(r,uw),T=v?qb:ow,x=ey({props:r,muiFormControl:ny(),states:["variant"]}).variant||_,C=h||{standard:sw||(sw=(0,Ie.jsx)(dw,{})),outlined:(0,Ie.jsx)(hw,{label:p}),filled:lw||(lw=(0,Ie.jsx)(fw,{}))}[x],O=(e=>{const{classes:t}=e;return t})((0,pe.Z)({},r,{variant:x,classes:a})),R=(0,Ye.Z)(n,C.ref);return(0,Ie.jsx)(t.Fragment,{children:t.cloneElement(C,(0,pe.Z)({inputComponent:T,inputProps:(0,pe.Z)({children:o,IconComponent:c,variant:x,type:void 0,multiple:y},v?{id:d}:{autoWidth:i,defaultOpen:l,displayEmpty:u,labelId:m,MenuProps:g,onClose:b,onOpen:w,open:E,renderValue:S,SelectDisplayProps:(0,pe.Z)({id:d},k)},f,{classes:f?(0,be.Z)(O,f.classes):O},h?h.props.inputProps:{})},y&&v&&"outlined"===x?{notched:!0}:{},{ref:R,className:(0,ge.Z)(C.props.className,s)},!h&&{variant:x},I))})}));pw.muiName="Select";const mw=pw;function gw(e){return(0,Be.Z)("MuiTextField",e)}(0,ze.Z)("MuiTextField",["root"]);const yw=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],vw={standard:_y,filled:Ay,outlined:$y},bw=(0,Pe.ZP)(av,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),ww=t.forwardRef((function(e,t){const n=(0,Ne.Z)({props:e,name:"MuiTextField"}),{autoComplete:r,autoFocus:i=!1,children:o,className:a,color:s="primary",defaultValue:l,disabled:u=!1,error:c=!1,FormHelperTextProps:d,fullWidth:h=!1,helperText:f,id:p,InputLabelProps:m,inputProps:g,InputProps:y,inputRef:v,label:b,maxRows:w,minRows:E,multiline:S=!1,name:k,onBlur:_,onChange:I,onFocus:T,placeholder:x,required:C=!1,rows:O,select:R=!1,SelectProps:A,type:P,value:N,variant:M="outlined"}=n,L=(0,me.Z)(n,yw),D=(0,pe.Z)({},n,{autoFocus:i,color:s,disabled:u,error:c,fullWidth:h,multiline:S,required:C,select:R,variant:M}),j=(e=>{const{classes:t}=e;return(0,Ue.Z)({root:["root"]},gw,t)})(D);const F={};"outlined"===M&&(m&&void 0!==m.shrink&&(F.notched=m.shrink),F.label=b),R&&(A&&A.native||(F.id=void 0),F["aria-describedby"]=void 0);const U=(0,zg.Z)(p),Z=f&&U?`${U}-helper-text`:void 0,z=b&&U?`${U}-label`:void 0,B=vw[M],$=(0,Ie.jsx)(B,(0,pe.Z)({"aria-describedby":Z,autoComplete:r,autoFocus:i,defaultValue:l,fullWidth:h,multiline:S,name:k,rows:O,maxRows:w,minRows:E,type:P,value:N,id:U,inputRef:v,onBlur:_,onChange:I,onFocus:T,placeholder:x,inputProps:g},F,y));return(0,Ie.jsxs)(bw,(0,pe.Z)({className:(0,ge.Z)(j.root,a),disabled:u,error:c,fullWidth:h,ref:t,required:C,color:s,variant:M,ownerState:D},L,{children:[null!=b&&""!==b&&(0,Ie.jsx)(ev,(0,pe.Z)({htmlFor:U,id:z},m,{children:b})),R?(0,Ie.jsx)(mw,(0,pe.Z)({"aria-describedby":Z,id:U,labelId:z,value:N,input:$},A,{children:o})):$,f&&(0,Ie.jsx)(hv,(0,pe.Z)({id:Z},d,{children:f}))]}))})),Ew=ww;function Sw(e){return(0,Be.Z)("MuiIconButton",e)}const kw=(0,ze.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),_w=["edge","children","className","color","disabled","disableFocusRipple","size"],Iw=(0,Pe.ZP)(Dt,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"default"!==n.color&&t[`color${(0,Ze.Z)(n.color)}`],n.edge&&t[`edge${(0,Ze.Z)(n.edge)}`],t[`size${(0,Ze.Z)(n.size)}`]]}})((({theme:e,ownerState:t})=>(0,pe.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,Je.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})),(({theme:e,ownerState:t})=>{var n;const r=null==(n=(e.vars||e).palette)?void 0:n[t.color];return(0,pe.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,pe.Z)({color:null==r?void 0:r.main},!t.disableRipple&&{"&:hover":(0,pe.Z)({},r&&{backgroundColor:e.vars?`rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,Je.Fq)(r.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${kw.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})})),Tw=t.forwardRef((function(e,t){const n=(0,Ne.Z)({props:e,name:"MuiIconButton"}),{edge:r=!1,children:i,className:o,color:a="default",disabled:s=!1,disableFocusRipple:l=!1,size:u="medium"}=n,c=(0,me.Z)(n,_w),d=(0,pe.Z)({},n,{edge:r,color:a,disabled:s,disableFocusRipple:l,size:u}),h=(e=>{const{classes:t,disabled:n,color:r,edge:i,size:o}=e,a={root:["root",n&&"disabled","default"!==r&&`color${(0,Ze.Z)(r)}`,i&&`edge${(0,Ze.Z)(i)}`,`size${(0,Ze.Z)(o)}`]};return(0,Ue.Z)(a,Sw,t)})(d);return(0,Ie.jsx)(Iw,(0,pe.Z)({className:(0,ge.Z)(h.root,o),centerRipple:!0,focusRipple:!l,disabled:s,ref:t,ownerState:d},c,{children:i}))}));var xw=i(3619),Cw=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};const Ow=function(e){var n=(0,t.useRef)(e);return(0,t.useEffect)((function(){e&&(n.current=e)}),[e]),(0,t.useCallback)((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return null===(e=null==n?void 0:n.current)||void 0===e?void 0:e.call.apply(e,Cw([n],t,!1))}),[])};var Rw=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},Aw=function(e){var n=e.index,r=(e.placeholder,e.values),i=e.setValues,o=e.onEnter,a=(e.isFocused,e.setCurrEditingVarIndex),s=e.topPosition,l=Ow(o),u=(0,t.useRef)(s);return(0,t.useEffect)((function(){var e=function(e){"Tab"===e.key&&(e.preventDefault(),null==l||l())};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[l]),t.createElement(Zg,{in:!0,unmountOnExit:!0,timeout:500},t.createElement(Oe,{sx:{}},t.createElement(Oe,{sx:{position:"absolute",top:u+"px",left:"50%",width:"90%",transform:"translateX(-50%)",minWidth:"265px",minHeight:"93px",bgcolor:"background.paper",zIndex:1}},t.createElement(Ew,{value:r[n]||"",autoFocus:!0,onChange:function(e){var t=Rw([],r,!0);t[n]=e.target.value,i(t)},multiline:!0,rows:3,sx:{width:"100%",height:"100%"},InputProps:{sx:{fontSize:"14px"}},onBlur:function(e){var t,n,r;e.relatedTarget&&(null===(r=null===(n=null===(t=null==e?void 0:e.relatedTarget)||void 0===t?void 0:t.classList)||void 0===n?void 0:n.contains)||void 0===r?void 0:r.call(n,"go_to_next_item"))||a(-1)}}),t.createElement(Ge,{fontSize:"12px",sx:{fontWeight:"500",background:"#eee",padding:"2px 3px",borderRadius:"2px",position:"absolute",right:"37px",bottom:"9px"}},"Tab"),t.createElement(Tw,{onClick:function(){o&&o()},sx:{position:"absolute",right:"3px",bottom:"0"},className:"go_to_next_item"},t.createElement(xw.Z,null)))))};const Pw=function(e){var n,r=e.placeholder,i=e.values,o=e.setValues,a=e.index,s=e.onEnter,l=e.isFocused,u=e.setCurrEditingVarIndex,c=t.useRef(null);return(0,t.useEffect)((function(){l&&c.current&&c.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),[l]),t.createElement(Oe,{sx:{display:"inline-block",width:"fit-content"}},t.createElement(_y,{placeholder:r,onChange:function(e){var t=Rw([],i,!0);t[a]=e.target.value,o(t)},value:i[a]||"",inputRef:c,onFocus:function(){u(a)},sx:{display:"inline-block",width:10*r.length+"px",minWidth:"50px"},style:{margin:"0 5px"}}),l&&t.createElement(Aw,{index:a,placeholder:r,values:i,setValues:o,onEnter:s,isFocused:l,setCurrEditingVarIndex:u,topPosition:((null===(n=c.current)||void 0===n?void 0:n.getBoundingClientRect().top)||0)-32}))};var Nw=i(5108),Mw={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"67%",bgcolor:"background.paper",borderRadius:"8px",boxShadow:1,padding:"65px !important","::-webkit-scrollbar":{width:"5px"},"&::-webkit-scrollbar-thumb":{background:"#bdbbbb",borderRadius:"4px"}};const Lw=function(){var e=(0,t.useState)(""),n=e[0],r=e[1];(0,t.useEffect)((function(){var e;null===(e=null===chrome||void 0===chrome?void 0:chrome.runtime)||void 0===e||e.sendMessage({action:"GET_VARS"},(function(e){r(null==e?void 0:e.text),chrome.runtime.lastError&&Nw.error("Message failed:",chrome.runtime.lastError)}))}),[]);(0,t.useContext)(kg).setAlert;var i=(0,t.useState)(0),o=i[0],a=i[1],s=t.useRef(null),l=(0,t.useState)([]),u=l[0],c=l[1],d=t.useRef(null);(0,t.useEffect)((function(){setTimeout((function(){if(d.current){var e=d.current.getElementsByTagName("input");e.length>0&&e[0].focus()}}),200)}),[]);var h=n.split(/{([^}]*)}/).map((function(e,t){return t%2==1?{type:"input",placeholder:e}:{type:"text",value:e}}));return t.createElement(Oe,null,t.createElement(Fe,{sx:Mw,spacing:3,maxHeight:"70vh",overflow:"auto"},t.createElement(Oe,null,"",t.createElement(Fe,{ref:d,spacing:2,display:"inline",lineHeight:"40px",sx:{width:"100%",whiteSpace:"pre-wrap"}},h.map((function(e,n){var r;return"input"===e.type?t.createElement(Pw,{key:n,index:n,placeholder:e.placeholder,values:u,setValues:c,isFocused:n===o,setCurrEditingVarIndex:a,onEnter:function(){return function(e){for(var t=e+1;"input"!==h[t].type&&t<h.length-1;)t++;if("input"===h[t].type)a(t);else{if(a(-1),!s.current)return;s.current.focus()}}(n)}}):t.createElement("div",{dangerouslySetInnerHTML:{__html:null!==(r=null==e?void 0:e.value)&&void 0!==r?r:""},key:n,style:{display:"inline-block",color:"text.primary",whiteSpace:"pre-wrap"}})})))),t.createElement(Ht,{onClick:function(){var e,t=n;u.filter((function(e){return void 0!==e})).forEach((function(e,n){t=t.replace(/{([^}]*)}/,e)})),null===(e=null===chrome||void 0===chrome?void 0:chrome.runtime)||void 0===e||e.sendMessage({action:"SEND_UPDATED",text:t},(function(e){chrome.runtime.lastError&&Nw.error("Message failed:",chrome.runtime.lastError)})),setTimeout((function(){window.close()}),100)},variant:"contained",ref:s},"Save")))};const Dw=function(){return t.createElement(ce,null,t.createElement(le,{path:"/form.html",element:t.createElement(Lw,null)}))};i(5108);
/**
 * React Router DOM v6.4.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var jw,Fw;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(jw||(jw={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Fw||(Fw={}));(0,r.render)(t.createElement((function(e){let{basename:n,children:r,window:i}=e,o=t.useRef();var a;null==o.current&&(o.current=(void 0===(a={window:i,v5Compat:!0})&&(a={}),f((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return u("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:c(t)}),null,a)));let s=o.current,[l,d]=t.useState({action:s.action,location:s.location});return t.useLayoutEffect((()=>s.listen(d)),[s]),t.createElement(ue,{basename:n,children:r,location:l.location,navigationType:l.action,navigator:s})}),null,t.createElement(Dw,null)),window.document.querySelector("#form-root"))})()})();