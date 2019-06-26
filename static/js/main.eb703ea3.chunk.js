(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_apollo_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo-hooks */ "./node_modules/react-apollo-hooks/es/index.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home/index.js");
var _jsxFileName = "/home/cs/work/inu-v2-a/react-src/src/App.js";




const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["default"]({
  uri: "http://localhost/react-wp/graphql"
});

const App = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo_hooks__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
  client: client,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Home/Home.js":
/*!*************************************!*\
  !*** ./src/components/Home/Home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@devloco/react-scripts-wptheme/node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/cs/work/inu-v2-a/react-src/src/components/Home/Home.js: Identifier 'siteTitle' has already been declared (45:8)\n\n\u001b[0m \u001b[90m 43 | \u001b[39m  \u001b[36mconst\u001b[39m { data } \u001b[33m=\u001b[39m useQuery(\u001b[33mQuery\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 44 | \u001b[39m  let { siteTitle\u001b[33m,\u001b[39m siteDescription } \u001b[33m=\u001b[39m props\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 45 | \u001b[39m  \u001b[36mvar\u001b[39m { siteTitle\u001b[33m,\u001b[39m siteDescription } \u001b[33m=\u001b[39m getSiteInfo(data)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 46 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 47 | \u001b[39m  \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 48 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Object.raise (/home/cs/work/inu-v2-a/react-src/node_modules/@devloco/react-scripts-wptheme/node_modules/@babel/parser/lib/index.js:6344:17)\n    at ScopeHandler.checkRedeclarationInScope (/home/cs/work/inu-v2-a/react-src/node_modules/@devloco/react-scripts-wptheme/node_modules/@babel/parser/lib/index.js:3757:12)\n    at ScopeHandler.declareName (/home/cs/work/inu-v2-a/react-src/node_modules/@devloco/react-scripts-wptheme/node_modules/@babel/parser/lib/index.js:3737:14)\n    at Object.checkLVal (/home/cs/work/inu-v2-a/react-src/node_modules/@devloco/react-scripts-wptheme/node_modules/@babel/parser/lib/index.js:8034:22)\n    at Object.checkLVal (/home/cs/work/inu-v2-a/react-src/node_modules/@devloco/react-scripts-wptheme/node_modules/@babel/parser/lib/index.js:2344:20)\n    at Object.checkLVal (/home/cs/work/inu-v2-a/react-src/node_modules/@devloco/react-scripts-wptheme/node_modules/@babel/parser/lib/index.js:8050:16)\n    at Object.checkLVal (/home/cs/work/inu-v2-a/react-src/node_modules/@devloco/react-scripts-wptheme/node_modules/@babel/parser/lib/index.js:2344:20)\n    at Object.parseVarId (/home/cs/work/inu-v2-a/react-src/node_modules/@devloco/react-scripts-wptheme/node_modules/@babel/parser/lib/index.js:10465:10)\n    at Object.parseVarId (/home/cs/work/inu-v2-a/react-src/node_modules/@devloco/react-scripts-wptheme/node_modules/@babel/parser/lib/index.js:2597:11)\n    at Object.parseVar (/home/cs/work/inu-v2-a/react-src/node_modules/@devloco/react-scripts-wptheme/node_modules/@babel/parser/lib/index.js:10436:12)\n    at Object.parseVarStatement (/home/cs/work/inu-v2-a/react-src/node_modules/@devloco/react-scripts-wptheme/node_modules/@babel/parser/lib/index.js:10258:10)\n    at Object.parseStatementContent (/home/cs/work/inu-v2-a/react-src/node_modules/@devloco/react-scripts-wptheme/node_modules/@babel/parser/lib/index.js:9855:21)\n    at Object.parseStatement (/home/cs/work/inu-v2-a/react-src/node_modules/@devloco/react-scripts-wptheme/node_modules/@babel/parser/lib/index.js:9788:17)\n    at Object.parseStatement (/home/cs/work/inu-v2-a/react-src/node_modules/@devloco/react-scripts-wptheme/node_modules/@babel/parser/lib/index.js:2019:26)\n    at Object.parseBlockOrModuleBlockBody (/home/cs/work/inu-v2-a/react-src/node_modules/@devloco/react-scripts-wptheme/node_modules/@babel/parser/lib/index.js:10364:25)\n    at Object.parseBlockBody (/home/cs/work/inu-v2-a/react-src/node_modules/@devloco/react-scripts-wptheme/node_modules/@babel/parser/lib/index.js:10351:10)");

/***/ }),

/***/ "./src/components/Home/index.js":
/*!**************************************!*\
  !*** ./src/components/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/components/Home/Home.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Home__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/cs/work/inu-v2-a/react-src/src/index.js";





if (true) {
  var axe = __webpack_require__(/*! react-axe */ "./node_modules/react-axe/index.js");

  axe(react__WEBPACK_IMPORTED_MODULE_0___default.a, react_dom__WEBPACK_IMPORTED_MODULE_1___default.a, 1000);
}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cs/work/inu-v2-a/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.eb703ea3.chunk.js.map