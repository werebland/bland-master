webpackHotUpdate(5,{

/***/ "./components/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _jsxFileName = "/Users/Chris/bland-ultra/components/Header.jsx";


var HeaderWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "Header__HeaderWrapper",
  componentId: "sc-1bl1itl-0"
})(["width:100vw;height:72px;position:absolute;top:0;right:0;left:0;display:flex;align-items:center;justify-content:space-between;padding:0 144px 0 72px;box-sizing:border-box;"]);
var HeaderLogo = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "Header__HeaderLogo",
  componentId: "sc-1bl1itl-1"
})(["width:61px;height:19px;background-image:url('/static/bland.svg');background-size:cover;background-position:center;"]);
var HeaderContact = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].a.withConfig({
  displayName: "Header__HeaderContact",
  componentId: "sc-1bl1itl-2"
})(["height:40px;font-size:1rem;font-weight:500;color:#fff;text-decoration:none;padding:0 24px;display:flex;align-items:center;justify-content:center;position:relative;&::before{content:\"\";height:100%;width:100%;position:absolute;left:0;top:0;bottom:0;background:#9f9f9f;z-index:-1;}&::after{content:\"\";height:100%;width:100%;background:#0f0f0f;position:absolute;left:0;top:0;bottom:0;z-index:-1;transition:0.4s ease-in-out all;}&:hover::after{width:0;}"]);
var MenuToggle = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "Header__MenuToggle",
  componentId: "sc-1bl1itl-3"
})(["width:72px;height:72px;position:fixed;right:72px;display:flex;align-items:center;justify-content:center;"]);
var MenuToggleIcon = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "Header__MenuToggleIcon",
  componentId: "sc-1bl1itl-4"
})(["width:24px;height:12px;position:relative;transform:rotate(0deg);transition:.5s ease-in-out;cursor:pointer;& span{width:100%;height:3px;display:block;position:absolute;background:#0f0f0f;transform:rotate(0deg);transition:.4s ease-in-out;}& span:nth-child(1){top:", ";left:", ";transform:", ";}& span:nth-child(2){top:", ";left:", ";transform:", ";transform-origin:bottom-right;}"], function (props) {
  return props.open ? '0' : '0';
}, function (props) {
  return props.open ? '0' : '0';
}, function (props) {
  return props.open ? 'rotate(135deg)' : 'rotate(0)';
}, function (props) {
  return props.open ? '9px' : '9px';
}, function (props) {
  return props.open ? '0px' : '0';
}, function (props) {
  return props.open ? 'rotate(45deg)' : 'rotate(0)';
});

var Header = function Header(_ref) {
  var handleMenuToggle = _ref.handleMenuToggle,
      open = _ref.open;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HeaderWrapper, {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HeaderLogo, {
    className: "header__logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HeaderContact, {
    href: "",
    className: "header__contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, "Contact"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuToggle, {
    onClick: function onClick() {
      return handleMenuToggle();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuToggleIcon, {
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ })

})
//# sourceMappingURL=5.b6f19636cd9f1cabfee6.hot-update.js.map