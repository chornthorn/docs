(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(2),o=(a(0),a(88));const r={id:"part-1-overview-concepts",title:"Flutter Essentials, Part 1: Flutter Overview and Concepts",sidebar_label:"Flutter Overview and Concepts",hide_title:!0,description:"The official Essentials tutorial for Redux: learn how to use Redux, the right way"},i={unversionedId:"tutorials/flutter/essentials/part-1-overview-concepts",id:"tutorials/flutter/essentials/part-1-overview-concepts",isDocsHomePage:!1,title:"Flutter Essentials, Part 1: Flutter Overview and Concepts",description:"The official Essentials tutorial for Redux: learn how to use Redux, the right way",source:"@site/../docs/tutorials/flutter/essentials/part-1-overview-concepts.md",slug:"/tutorials/flutter/essentials/part-1-overview-concepts",permalink:"/docs/tutorials/flutter/essentials/part-1-overview-concepts",version:"current",sidebar_label:"Flutter Overview and Concepts",sidebar:"docs",previous:{title:"Flutter Tutorials Index",permalink:"/docs/tutorials/index"},next:{title:"Firebase Tutorials Index",permalink:"/docs/firebases/index"}},s=[{value:"Introduction",id:"introduction",children:[{value:"How to Read This Tutorial",id:"how-to-read-this-tutorial",children:[]}]},{value:"What is Redux?",id:"what-is-redux",children:[{value:"Why Should I Use Redux?",id:"why-should-i-use-redux",children:[]},{value:"When Should I Use Redux?",id:"when-should-i-use-redux",children:[]}]},{value:"What&#39;s Next?",id:"whats-next",children:[]}],l={rightToc:s};function c({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"redux-essentials-part-1-redux-overview-and-concepts"},"Redux Essentials, Part 1: Redux Overview and Concepts"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"What You'll Learn")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"What Redux is and why you might want to use it"),Object(o.b)("li",{parentName:"ul"},"Key Redux terms and concepts"),Object(o.b)("li",{parentName:"ul"},"How data flows through a Redux app")))),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Welcome to the Redux Essentials tutorial! ",Object(o.b)("strong",{parentName:"p"},"This tutorial will introduce you to Redux and teach you how to use it the right way, using our latest recommended tools and best practices"),". By the time you finish, you should be able to start building your own Redux applications using the tools and patterns you've learned here."),Object(o.b)("p",null,"In Part 1 of this tutorial, we'll cover the key concepts and terms you need to know to use Redux, and in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./"}),"Part 2: Redux App Structure")," we'll examine a basic React + Redux app to see how the pieces fit together."),Object(o.b)("p",null,"Starting in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./"}),"Part 3: Basic Redux Data Flow"),", we'll use that knowledge to build a small social media feed app with some real-world features, see how those pieces actually work in practice, and talk about some important patterns and guidelines for using Redux."),Object(o.b)("h3",{id:"how-to-read-this-tutorial"},"How to Read This Tutorial"),Object(o.b)("p",null,"This page will focus on showing you ",Object(o.b)("em",{parentName:"p"},"how")," to use Redux the right way, and explain just enough of the concepts so that you can understand how to build Redux apps correctly."),Object(o.b)("p",null,"We've tried to keep these explanations beginner-friendly, but we do need to make some assumptions about what you know already:"),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Prerequisites")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Familiarity with ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://internetingishard.com/"}),"HTML & CSS"),"."),Object(o.b)("li",{parentName:"ul"},"Familiarity with ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.taniarascia.com/es6-syntax-and-feature-overview/"}),"ES6 syntax and features")),Object(o.b)("li",{parentName:"ul"},"Knowledge of React terminology: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactjs.org/docs/introducing-jsx.html"}),"JSX"),", ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactjs.org/docs/state-and-lifecycle.html"}),"State"),", ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactjs.org/docs/components-and-props.html"}),"Function Components, Props"),", and ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactjs.org/docs/hooks-intro.html"}),"Hooks")),Object(o.b)("li",{parentName:"ul"},"Knowledge of ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://javascript.info/promise-basics"}),"asynchronous JavaScript")," and ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://javascript.info/fetch"}),"making AJAX requests"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"If you're not already comfortable with those topics, we encourage you to take some time to become comfortable with them first, and then come back to learn about Redux"),". We'll be here when you're ready!"),Object(o.b)("p",null,"You should make sure that you have the React and Redux DevTools extensions installed in your browser:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"React DevTools Extension:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en"}),"React DevTools Extension for Chrome")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://addons.mozilla.org/en-US/firefox/addon/react-devtools/"}),"React DevTools Extension for Firefox")))),Object(o.b)("li",{parentName:"ul"},"Redux DevTools Extension:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"}),"Redux DevTools Extension for Chrome")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"}),"Redux DevTools Extension for Firefox"))))),Object(o.b)("h2",{id:"what-is-redux"},"What is Redux?"),Object(o.b)("p",null,'It helps to understand what this "Redux" thing is in the first place. What does it do? What problems does it help me solve? Why would I want to use it?'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},'Redux is a pattern and library for managing and updating application state, using events called "actions".')," It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion."),Object(o.b)("h3",{id:"why-should-i-use-redux"},"Why Should I Use Redux?"),Object(o.b)("p",null,'Redux helps you manage "global" state - state that is needed across many parts of your application.'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur"),". Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected."),Object(o.b)("h3",{id:"when-should-i-use-redux"},"When Should I Use Redux?"),Object(o.b)("p",null,"Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity."),Object(o.b)("p",null,"Redux is more useful when:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have large amounts of application state that are needed in many places in the app"),Object(o.b)("li",{parentName:"ul"},"The app state is updated frequently over time"),Object(o.b)("li",{parentName:"ul"},"The logic to update that state may be complex"),Object(o.b)("li",{parentName:"ul"},"The app has a medium or large-sized codebase, and might be worked on by many people")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Not all apps need Redux. Take some time to think about the kind of app you're building, and decide what tools would be best to help solve the problems you're working on.")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Summary")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Redux is a library for managing global application state"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Redux is typically used with the React-Redux library for integrating Redux and React together"),Object(o.b)("li",{parentName:"ul"},"Redux Toolkit is the recommended way to write Redux logic"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},'Redux uses a "one-way data flow" app structure'),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"State describes the condition of the app at a point in time, and UI renders based on that state"),Object(o.b)("li",{parentName:"ul"},"When something happens in the app:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The UI dispatches an action"),Object(o.b)("li",{parentName:"ul"},"The store runs the reducers, and the state is updated based on what occurred"),Object(o.b)("li",{parentName:"ul"},"The store notifies the UI that the state has changed"))),Object(o.b)("li",{parentName:"ul"},"The UI re-renders based on the new state"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Redux uses several types of code"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Actions")," are plain objects with a ",Object(o.b)("inlineCode",{parentName:"li"},"type"),' field, and describe "what happened" in the app'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Reducers")," are functions that calculate a new state value based on previous state + an action"),Object(o.b)("li",{parentName:"ul"},"A Redux ",Object(o.b)("em",{parentName:"li"},"store")," runs the root reducer whenever an action is ",Object(o.b)("em",{parentName:"li"},"dispatched"))))))),Object(o.b)("h2",{id:"whats-next"},"What's Next?"),Object(o.b)("p",null,"We've seen each of the individual pieces of a Redux app. Next, continue on to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./"}),"Part 2: Redux App Structure"),", where we'll look at a full working example to see how the pieces fit together."))}c.isMDXComponent=!0},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,h=u["".concat(i,".").concat(p)]||u[p]||b[p]||r;return a?o.a.createElement(h,s(s({ref:t},c),{},{components:a})):o.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);