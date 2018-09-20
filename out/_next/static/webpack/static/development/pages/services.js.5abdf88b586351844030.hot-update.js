webpackHotUpdate("static/development/pages/services.js",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Chris/bland-ultra/components/Header.jsx";



var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__HeaderWrapper",
  componentId: "sc-1bl1itl-0"
})(["width:100vw;height:72px;position:absolute;top:0;right:0;left:0;display:flex;align-items:center;justify-content:space-between;padding:0 144px 0 72px;box-sizing:border-box;z-index:", ";;@media all and (max-width:860px){padding:0 96px 0 24px;}@media all and (max-width:520px){padding:0 72px 0 24px;}"], function (props) {
  return props.open === false && '8';
});
var HeaderLogo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Header__HeaderLogo",
  componentId: "sc-1bl1itl-1"
})(["width:61px;height:19px;background-image:url('/static/bland.svg');background-size:cover;background-position:center;cursor:pointer;"]);
var HeaderContact = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Header__HeaderContact",
  componentId: "sc-1bl1itl-2"
})(["height:40px;font-size:1rem;font-weight:500;color:#0f0f0f;text-decoration:none;padding:0 12px 0 24px;display:flex;align-items:center;justify-content:center;position:relative;cursor:pointer;border:2px solid #0f0f0f;& i{transition:0.2s ease-out all;transform:translateX(0)}&:hover i{transform:translateX(4px);}"]);
var MenuToggle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__MenuToggle",
  componentId: "sc-1bl1itl-3"
})(["width:72px;height:72px;position:fixed;right:72px;display:flex;align-items:center;justify-content:center;z-index:888;@media all and (max-width:860px){right:24px;}@media all and (max-width:520px){right:0;}"]);
var MenuToggleIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__MenuToggleIcon",
  componentId: "sc-1bl1itl-4"
})(["width:24px;height:12px;position:relative;transform:rotate(0deg);transition:.3s ease-out;cursor:pointer;& span{width:100%;height:3px;display:block;position:absolute;background:", ";transform:rotate(0deg);transition:.3s ease-out;}& span:nth-child(1){top:", ";left:", ";transform:", ";}& span:nth-child(2){top:", ";left:", ";transform:", ";transform-origin:bottom-right;}"], function (props) {
  return props.open ? '#fff' : '#0f0f0f';
}, function (props) {
  return props.open ? '6px' : '0';
}, function (props) {
  return props.open ? '0' : '0';
}, function (props) {
  return props.open ? 'rotate(135deg)' : 'rotate(0)';
}, function (props) {
  return props.open ? '6px' : '9px';
}, function (props) {
  return props.open ? '0px' : '0';
}, function (props) {
  return props.open ? 'rotate(45deg)' : 'rotate(0)';
});

var Header = function Header(_ref) {
  var handleMenuToggle = _ref.handleMenuToggle,
      open = _ref.open;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderWrapper, {
    className: "header",
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    prefetch: true,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderLogo, {
    className: "header__logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    prefetch: true,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderContact, {
    className: "header__contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Contact", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "chevron_right"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuToggle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuToggleIcon, {
    open: open,
    onClick: function onClick() {
      return handleMenuToggle();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=services.js.5abdf88b586351844030.hot-update.js.map