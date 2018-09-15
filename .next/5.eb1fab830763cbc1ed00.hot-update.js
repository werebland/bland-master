webpackHotUpdate(5,{

/***/ "./components/Menu.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_pose__ = __webpack_require__("./node_modules/react-pose/dist/react-pose.es.js");
var _jsxFileName = "/Users/Chris/bland-ultra/components/Menu.jsx";



var MenuWrapper = __WEBPACK_IMPORTED_MODULE_2_react_pose__["a" /* default */].div({
  visible: {
    y: '0vh',
    staggerChildren: 500
  },
  hidden: {
    y: '-100vh'
  }
});
var StyledMenuWrapper = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */])(MenuWrapper).withConfig({
  displayName: "Menu__StyledMenuWrapper",
  componentId: "sc-1jbjsxa-0"
})(["width:100vw;height:100vh;background:#0f0f0f;z-index:88;position:fixed;color:#fff;transform:translateY(-100vh)"]);
var MenuLinks = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].ul.withConfig({
  displayName: "Menu__MenuLinks",
  componentId: "sc-1jbjsxa-1"
})(["padding:0;margin:0;width:100%;display:flex;flex-flow:column nowrap;align-items:center;justify-content:flex-start;"]);
var MenuLink = __WEBPACK_IMPORTED_MODULE_2_react_pose__["a" /* default */].li({
  visible: {
    y: '0',
    opacity: 1
  },
  hidden: {
    y: '20',
    opacity: 0
  }
});

var Menu = function Menu(_ref) {
  var open = _ref.open;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledMenuWrapper, {
    className: "menu",
    pose: open ? 'visible' : 'hidden',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuLinks, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "Services")));
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ })

})
//# sourceMappingURL=5.eb1fab830763cbc1ed00.hot-update.js.map