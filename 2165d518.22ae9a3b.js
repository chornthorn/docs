(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),i=(n(0),n(91));const r={id:"intro",title:"Messaging Overview",description:"Introduction > Getting Started: Resources to get started learning and using Redux",hide_title:!0},o={unversionedId:"firebases/cloud-messaging/intro",id:"firebases/cloud-messaging/intro",isDocsHomePage:!1,title:"Messaging Overview",description:"Introduction > Getting Started: Resources to get started learning and using Redux",source:"@site/../docs/firebases/cloud-messaging/GettingStarted.md",slug:"/firebases/cloud-messaging/intro",permalink:"/docs/firebases/cloud-messaging/intro",version:"current",sidebar:"docs",previous:{title:"Functions Overview",permalink:"/docs/firebases/cloud-functions/intro"},next:{title:"Storage Overview",permalink:"/docs/firebases/cloud-storage/intro"}},c=[{value:"Installation",id:"installation",children:[{value:"1. Add dependency",id:"1-add-dependency",children:[]},{value:"1. Download dependency",id:"1-download-dependency",children:[]},{value:"3. Android Integration",id:"3-android-integration",children:[]},{value:"4. Apple Integration",id:"4-apple-integration",children:[]},{value:"5. (Web Only) Add the SDK",id:"5-web-only-add-the-sdk",children:[]},{value:"6. Rebuild your app",id:"6-rebuild-your-app",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],s={rightToc:c};function l({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"firebase-cloud-messaging"},"Firebase Cloud Messaging"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"WHAT YOU'LL LEARN")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"Push Notification"),Object(i.b)("li",{parentName:"ul"},"Receive Notification ")))),Object(i.b)("p",null,"Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost."),Object(i.b)("p",null,"Using FCM, you can notify a client app that new email or other data is available to sync. You can send notification messages to drive user re-engagement and retention. For use cases such as instant messaging, a message can transfer a payload of up to 4 KB to a client app."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("h3",{id:"1-add-dependency"},"1. Add dependency"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'{5} title="pubspec.yaml"',"{5}":!0,title:'"pubspec.yaml"'}),'dependencies:\n  flutter:\n    sdk: flutter\n  firebase_core: "^0.7.0"\n  firebase_messaging: "^7.0.3"\n')),Object(i.b)("h3",{id:"1-download-dependency"},"1. Download dependency"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ flutter pub get\n")),Object(i.b)("h3",{id:"3-android-integration"},"3. Android Integration"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you are using Flutter Android Embedding V2 (Flutter Version >= 1.12) then no additional integration steps are required for Android."))),Object(i.b)("h4",{id:"flutter-android-embedding-v1"},"Flutter Android Embedding V1"),Object(i.b)("p",null,"For the Flutter Android Embedding V1, the background service must be provided a callback to register plugins with the\nbackground isolate. This is done by giving the ",Object(i.b)("inlineCode",{parentName:"p"},"FlutterFirebaseMessagingBackgroundService")," a callback to call your\napplication's ",Object(i.b)("inlineCode",{parentName:"p"},"onCreate")," method."),Object(i.b)("p",null,"In particular, its ",Object(i.b)("inlineCode",{parentName:"p"},"Application")," class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:"{2,9}","{2,9}":!0}),"// ...\nimport io.flutter.plugins.firebase.messaging.FlutterFirebaseMessagingBackgroundService;\n\npublic class Application extends FlutterApplication implements PluginRegistrantCallback {\n  // ...\n  @Override\n  public void onCreate() {\n    super.onCreate();\n    FlutterFirebaseMessagingBackgroundService.setPluginRegistrant(this);\n  }\n\n  @Override\n  public void registerWith(PluginRegistry registry) {\n    GeneratedPluginRegistrant.registerWith(registry);\n  }\n  // ...\n}\n")),Object(i.b)("p",null,"Which is usually reflected in the application's ",Object(i.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),". E.g.:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:"{2}","{2}":!0}),'    <application\n        android:name=".Application"\n        ...\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," Not calling ",Object(i.b)("inlineCode",{parentName:"p"},"FlutterFirebaseMessagingBackgroundService.setPluginRegistrant")," will result in an exception being\nthrown when a message eventually comes through.")),Object(i.b)("h3",{id:"4-apple-integration"},"4. Apple Integration"),Object(i.b)("p",null,"iOS & macOS require additional configuration before you can start receiving messages through Firebase.\nRead the integration documentation on how to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/firebases/index"}),"setup iOS or macOS with Firebase Cloud Messaging"),"."),Object(i.b)("h3",{id:"5-web-only-add-the-sdk"},"5. (Web Only) Add the SDK"),Object(i.b)("p",null,"If using FlutterFire on the web, add the ",Object(i.b)("inlineCode",{parentName:"p"},"firebase-messaging")," JavaScript SDK to your index.html file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'{5} title="web/index.html"',"{5}":!0,title:'"web/index.html"'}),'<html>\n  ...\n  <body>\n    <script src="https://www.gstatic.com/firebasejs/{{ web.firebase_cdn }}/firebase-app.js"><\/script>\n    <script src="https://www.gstatic.com/firebasejs/{{ web.firebase_cdn }}/firebase-messaging.js"><\/script>\n  </body>\n</html>\n')),Object(i.b)("h3",{id:"6-rebuild-your-app"},"6. Rebuild your app"),Object(i.b)("p",null,"Once complete, rebuild your Flutter application:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ flutter run\n")),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Once installed, you're ready to start using Firebase Cloud Messaging in your Flutter Project."))}l.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,g=b["".concat(o,".").concat(u)]||b[u]||p[u]||r;return n?i.a.createElement(g,c(c({ref:t},l),{},{components:n})):i.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);