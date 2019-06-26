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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flatted__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flatted */ "./node_modules/flatted/esm/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../hooks */ "./src/hooks/index.js");
/* harmony import */ var _Reset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Reset */ "./src/components/Reset/index.js");
/* harmony import */ var _TypographicGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../TypographicGrid */ "./src/components/TypographicGrid/index.js");


var _jsxFileName = "/home/cs/work/inu-v2-a/react-src/src/components/Home/Home.js";

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query siteInfo {\n    generalSettings {\n      title\n      url\n      description\n    }\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}









 // Global settings

const Props = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  url: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
}; // Default global settings

const DefaultProps = {
  title: "Ioan Chivu",
  description: "Photo traveler",
  url: "http://inu.ro"
}; // Query for site info

const query = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject()); // Display site info in the `<head>` with Helmet

const SiteInfo = props => {
  const title = props.title,
        description = props.description,
        url = props.url;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_6__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "description",
    content: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "canonical",
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }));
}; // The main component


const Home = props => {
  // Set up the site info
  // - This is a good example how Hooks work in React
  // - The db query is async which means we'll have to wait for the real data
  // - Meantime we set up a state variable with default values (`props`)
  // - Then we'll update the state var in `useEffect` when the data is ready
  // - And the `<SiteInfo/>` component will be re-rendered
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props),
        _useState2 = Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        siteInfo = _useState2[0],
        setSiteInfo = _useState2[1];

  const _useQuery = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["useQuery"])(query),
        data = _useQuery.data;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (data.generalSettings) {
      setSiteInfo(data.generalSettings);
    }
  }, [data.generalSettings]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Reset__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TypographicGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    displayVerticalRhytm: false,
    displayHorizontalRhytm: false,
    numberOfHorizontalLines: 100,
    numberOfVerticalLines: 100,
    lineColor: "#666",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SiteInfo, Object.assign({}, siteInfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  })));
};

Home.propTypes = Props;
Home.defaultProps = DefaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ "./src/components/Repeat/Repeat.js":
/*!*****************************************!*\
  !*** ./src/components/Repeat/Repeat.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Imitates the for loop inside JSX
 * - https://reactjs.org/docs/jsx-in-depth.html
 */
const Repeat = props => {
  let ret = [];
  let startAt = props.startAt;
  let endAt = startAt + props.numberOfTimes;

  for (let i = startAt; i < endAt; i++) {
    ret.push(props.children(i));
  }

  return ret;
};

/* harmony default export */ __webpack_exports__["default"] = (Repeat);

/***/ }),

/***/ "./src/components/Repeat/index.js":
/*!****************************************!*\
  !*** ./src/components/Repeat/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repeat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repeat */ "./src/components/Repeat/Repeat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Repeat__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Reset/Reset.js":
/*!***************************************!*\
  !*** ./src/components/Reset/Reset.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");

var _jsxFileName = "/home/cs/work/inu-v2-a/react-src/src/components/Reset/Reset.js";

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t", "\n\n\tbody {\n\t\t// Grid reset\n\t\t//\n\t\tbox-sizing: border-box;\n\n\t\t*,\n\t\t*::before,\n\t\t*::after {\n\t\t\tbox-sizing: inherit;\n\t\t}\n\n\t\t// Typography reset on top of Normalize.css\n\t\t//\n\t\th1,\n\t\th2,\n\t\th3,\n\t\th4,\n\t\th5,\n\t\th6 {\n\t\t\tfont-size: 1em;\n\t\t\tfont-weight: normal;\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\n\t\tp,\n\t\tfigure,\n\t\tblockquote,\n\t\tul,\n\t\tol,\n\t\tli {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\n\t\t// Remove the extra bottom spacing for <img> inside <a>\n\t\t// unfortunatelly in WP it breaks the figcaption ...\n\t\tfigure a {\n\t\t\t// line-height: 0;\n\t\t\t// display: inline-block;\n\t\t}\n\n\t\ta {\n\t\t\tword-wrap: break-word;\n\t\t}\n\n\t\t// https://stackoverflow.com/questions/17838607/making-an-iframe-responsive\n\t\tiframe,\n\t\tobject,\n\t\tembed {\n\t\t\tmax-width: 100%;\n\t\t}\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}



 // Global reset with `normalize.css`

const GlobalReset = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject(), Object(polished__WEBPACK_IMPORTED_MODULE_3__["normalize"])());

const Reset = () => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalReset, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Reset);

/***/ }),

/***/ "./src/components/Reset/index.js":
/*!***************************************!*\
  !*** ./src/components/Reset/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reset */ "./src/components/Reset/Reset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Reset__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/TypographicGrid/TypographicGrid.js":
/*!***********************************************************!*\
  !*** ./src/components/TypographicGrid/TypographicGrid.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Repeat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Repeat */ "./src/components/Repeat/index.js");

var _jsxFileName = "/home/cs/work/inu-v2-a/react-src/src/components/TypographicGrid/TypographicGrid.js";

function _templateObject8() {
  const data = Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject8 = function () {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  height: var(--lem);\n  border-bottom-style: solid;\n"]);

  _templateObject7 = function () {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: var(--lem);\n  height: 100%;\n  border-right-style: solid;\n"]);

  _templateObject6 = function () {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  box-sizing: border-box;\n  border-color: ", ";\n  border-width: 1px;\n"]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: ", ";\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: ", ";\n  flex-wrap: wrap;\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tbody {\n\t\tfont-size: 100%;\n\t\tline-height: 1.25;\n\t\t--lem: 1.25em;\n\t}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());
const Rhythm = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
const VerticalRhythm = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Rhythm)(_templateObject3(), props => props.displayVerticalRhytm ? "flex" : "none");
const HorizontalRhythm = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Rhythm)(_templateObject4(), props => props.displayHorizontalRhytm ? "block" : "none");
const Line = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5(), props => props.lineColor ? props.lineColor : "transparent");
const VerticalRhythmLine = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Line)(_templateObject6());
const HorizontalRhythmLine = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Line)(_templateObject7());
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject8());

const TypographicGrid = props => {
  const displayVerticalRhytm = props.displayVerticalRhytm,
        displayHorizontalRhytm = props.displayHorizontalRhytm,
        numberOfHorizontalLines = props.numberOfHorizontalLines,
        numberOfVerticalLines = props.numberOfVerticalLines,
        lineColor = props.lineColor;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), (displayHorizontalRhytm || displayVerticalRhytm) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    className: "typographic-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, displayHorizontalRhytm && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HorizontalRhythm, {
    className: "horizontal-lines",
    displayHorizontalRhytm: displayHorizontalRhytm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Repeat__WEBPACK_IMPORTED_MODULE_3__["default"], {
    numberOfTimes: numberOfHorizontalLines,
    startAt: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, i => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HorizontalRhythmLine, {
    key: i,
    lineColor: lineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }))), displayVerticalRhytm && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VerticalRhythm, {
    className: "vertical-lines",
    displayVerticalRhytm: displayVerticalRhytm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Repeat__WEBPACK_IMPORTED_MODULE_3__["default"], {
    numberOfTimes: numberOfVerticalLines,
    startAt: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, i => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VerticalRhythmLine, {
    key: i,
    lineColor: lineColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TypographicGrid);

/***/ }),

/***/ "./src/components/TypographicGrid/index.js":
/*!*************************************************!*\
  !*** ./src/components/TypographicGrid/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TypographicGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TypographicGrid */ "./src/components/TypographicGrid/TypographicGrid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TypographicGrid__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/hooks/index.js":
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
/*! exports provided: useQuery, useLoadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useQuery */ "./src/hooks/useQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _useQuery__WEBPACK_IMPORTED_MODULE_0__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLoadMore", function() { return _useQuery__WEBPACK_IMPORTED_MODULE_0__["useLoadMore"]; });



/***/ }),

/***/ "./src/hooks/useQuery.js":
/*!*******************************!*\
  !*** ./src/hooks/useQuery.js ***!
  \*******************************/
/*! exports provided: useQuery, useLoadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return useQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoadMore", function() { return useLoadMore; });
/* harmony import */ var _home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo-hooks */ "./node_modules/react-apollo-hooks/es/index.js");






const useLoadMore = (fetchMore, data, variables) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
        _useState2 = Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
        isLoadingMore = _useState2[0],
        setIsLoadingMore = _useState2[1];

  function loadMore() {
    setIsLoadingMore(true);
    fetchMore({
      variables: Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, variables, {
        skip: data.list.length
      }),
      updateQuery: (previousResult, {
        fetchMoreResult
      }) => {
        setIsLoadingMore(false);

        if (!fetchMoreResult) {
          return previousResult;
        }

        return Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, fetchMoreResult, {
          edges: [...previousResult.edges, ...fetchMoreResult.edges]
        });
      }
    });
  }

  return [isLoadingMore, loadMore];
};

const useQuery = (schema, variables = {}, options = {}) => {
  const _useQuery2 = Object(react_apollo_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(schema, Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
    variables
  }, options)),
        fetchMore = _useQuery2.fetchMore,
        data = _useQuery2.data,
        other = Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_useQuery2, ["fetchMore", "data"]);

  const _useLoadMore = useLoadMore(fetchMore, data, variables),
        _useLoadMore2 = Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useLoadMore, 2),
        isLoadingMore = _useLoadMore2[0],
        loadMore = _useLoadMore2[1];

  return Object(_home_cs_work_inu_v2_a_react_src_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
    isLoadingMore,
    loadMore,
    fetchMore,
    data
  }, other);
};



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

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.535c8236.chunk.js.map