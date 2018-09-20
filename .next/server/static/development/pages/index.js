module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Contact.jsx":
/*!********************************!*\
  !*** ./components/Contact.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var floating_label_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! floating-label-react */ "floating-label-react");
/* harmony import */ var floating_label_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(floating_label_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Chris/bland-ultra/components/Contact.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ContactWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.article.withConfig({
  displayName: "Contact__ContactWrapper",
  componentId: "sc-10vz4cd-0"
})(["width:25vw;min-width:330px;height:auto;position:absolute;left:72px;top:72px;background:#fff;box-shadow:0 2px 16px -2px rgba(159,159,159,0.32);@media all and (max-width:770px){position:relative;left:0;right:0;margin:auto;}"]);
var ContactHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "Contact__ContactHeader",
  componentId: "sc-10vz4cd-1"
})(["width:100%;padding:24px 0;background:#0f0f0f;color:#fff;font-size:1.5rem;font-weight:500;margin:0;display:flex;align-items:center;justify-content:center;"]);
var ContactForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "Contact__ContactForm",
  componentId: "sc-10vz4cd-2"
})(["width:100%;padding:24px;box-sizing:border-box;display:flex;flex-flow:column nowrap;& label input{width:100%;margin-bottom:8px;}& label textarea{width:100%;height:120px;margin-bottom:24px;}& input:-webkit-autofill,& input:-webkit-autofill:hover,& input:-webkit-autofill:focus & textarea:-webkit-autofill,& textarea:-webkit-autofill:hover & textarea:-webkit-autofill:focus,& select:-webkit-autofill,& select:-webkit-autofill:hover,& select:-webkit-autofill:focus{-webkit-box-shadow:0 0 0px 1000px #fff inset;}"]);
var ContactFormRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Contact__ContactFormRow",
  componentId: "sc-10vz4cd-3"
})(["width:100%;display:flex;flex-flow:row nowrap;justify-content:space-between;& label{width:calc(50% - 12px);}& label input{width:100%;}& label textarea{width:100%;}"]);
var ContactFormFieldset = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.fieldset.withConfig({
  displayName: "Contact__ContactFormFieldset",
  componentId: "sc-10vz4cd-4"
})(["border:0;"]);
var StyledSubmitWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Contact__StyledSubmitWrapper",
  componentId: "sc-10vz4cd-5"
})(["width:100%;height:56px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;appearance:none;color:#0f0f0f;font-size:1.5rem;font-weight:400;position:relative;z-index:1;cursor:pointer;text-decoration:none;position:relative;"]);
var StyledSubmit = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Contact__StyledSubmit",
  componentId: "sc-10vz4cd-6"
})(["position:absolute;width:100%;height:100%;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;appearance:none;border:0;background-image:none;background:transparent;color:#0f0f0f;font-size:1.25rem;font-weight:400;cursor:pointer;border:2px solid #0f0f0f;& i{transition:0.2s ease-out all;transform:translateX(0);font-size:2.25rem;}&:hover i{transform:translateX(4px);}"]);

var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, _getPrototypeOf(Contact).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactWrapper, {
        className: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactHeader, {
        className: "contact__header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Let us buy you a beer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactForm, {
        name: "contact",
        className: "contact__form",
        method: "post",
        "data-netlify": "true",
        "data-netlify-honeypot": "bot-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactFormRow, {
        className: "contact__form--row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "hidden",
        name: "form-name",
        value: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "bot-field",
        hidden: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(floating_label_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "text",
        name: "fname",
        placeholder: "First name",
        required: true,
        styles: {
          floating: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["floatingStyles"], {
            color: '#9f9f9f'
          }),
          focus: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["focusStyles"], {
            borderColor: '#0f0f0f'
          }),
          input: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["inputStyles"], {
            borderBottomColor: '#9f9f9f',
            width: '100%'
          }),
          label: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["labelStyles"], {
            color: '#9f9f9f'
          })
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(floating_label_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "text",
        name: "lname",
        placeholder: "Last name",
        required: true,
        styles: {
          floating: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["floatingStyles"], {
            color: '#9f9f9f'
          }),
          focus: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["focusStyles"], {
            borderColor: '#0f0f0f'
          }),
          input: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["inputStyles"], {
            borderBottomColor: '#9f9f9f',
            width: '100%'
          }),
          label: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["labelStyles"], {
            color: '#9f9f9f'
          })
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(floating_label_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "email",
        placeholder: "Email",
        name: "email",
        required: true,
        styles: {
          floating: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["floatingStyles"], {
            color: '#9f9f9f'
          }),
          focus: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["focusStyles"], {
            borderColor: '#0f0f0f'
          }),
          input: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["inputStyles"], {
            borderBottomColor: '#9f9f9f',
            width: '100%'
          }),
          label: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["labelStyles"], {
            color: '#9f9f9f'
          })
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(floating_label_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "text",
        placeholder: "Favorite Halifax hangout spot",
        name: "hangout",
        required: true,
        styles: {
          floating: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["floatingStyles"], {
            color: '#9f9f9f'
          }),
          focus: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["focusStyles"], {
            borderColor: '#0f0f0f'
          }),
          input: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["inputStyles"], {
            borderBottomColor: '#9f9f9f',
            width: '100%'
          }),
          label: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["labelStyles"], {
            color: '#9f9f9f'
          })
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(floating_label_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "text",
        placeholder: "What are you working on? (AirBnB for pets, a queso truck, etc)",
        name: "message",
        required: true,
        element: "textarea",
        rows: "5",
        styles: {
          floating: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["floatingStyles"], {
            color: '#9f9f9f'
          }),
          focus: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["focusStyles"], {
            borderColor: '#0f0f0f'
          }),
          input: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["inputStyles"], {
            borderBottomColor: '#9f9f9f',
            width: '100%'
          }),
          label: _objectSpread({}, floating_label_react__WEBPACK_IMPORTED_MODULE_2__["labelStyles"], {
            color: '#9f9f9f'
          })
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSubmitWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSubmit, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, "Submit", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "chevron_right")))));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Chris/bland-ultra/components/Header.jsx";



var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__HeaderWrapper",
  componentId: "sc-1bl1itl-0"
})(["width:100vw;height:72px;position:absolute;top:0;right:0;left:0;display:flex;align-items:center;justify-content:space-between;padding:0 144px 0 72px;box-sizing:border-box;z-index:", ";;@media all and (max-width:860px){padding:0 96px 0 24px;}@media all and (max-width:520px){padding:0 72px 0 24px;}"], function (props) {
  return props.open === false && '8';
});
var HeaderLogo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "Header__HeaderLogo",
  componentId: "sc-1bl1itl-1"
})(["width:61px;height:19px;background-image:url('/static/bland.svg');background-size:cover;background-position:center;cursor:pointer;"]);
var HeaderContact = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "Header__HeaderContact",
  componentId: "sc-1bl1itl-2"
})(["height:40px;font-size:1rem;font-weight:500;color:#0f0f0f;text-decoration:none;padding:0 12px 0 24px;display:flex;align-items:center;justify-content:center;position:relative;cursor:pointer;border:2px solid #0f0f0f;& i{transition:0.2s ease-out all;transform:translateX(0)}&:hover i{transform:translateX(4px);}"]);
var MenuToggle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__MenuToggle",
  componentId: "sc-1bl1itl-3"
})(["width:72px;height:72px;position:fixed;right:72px;display:flex;align-items:center;justify-content:center;z-index:888;@media all and (max-width:860px){right:24px;}@media all and (max-width:520px){right:0;}"]);
var MenuToggleIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
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

/***/ }),

/***/ "./components/Hero.jsx":
/*!*****************************!*\
  !*** ./components/Hero.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Chris/bland-ultra/components/Hero.jsx";

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }



var Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "Hero__Section",
  componentId: "mrxqip-0"
})(["width:100vw;height:100vh;display:flex;flex-flow:column nowrap;"]);
var SectionContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__SectionContent",
  componentId: "mrxqip-1"
})(["display:flex;flex:1;width:100%;padding-left:504px;box-sizing:border-box;align-items:center;@media all and (max-width:860px){padding-left:48px}@media all and (max-width:520px){padding:72px 24px 24px;}"]);
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Hero__SectionTitle",
  componentId: "mrxqip-2"
})(["font-size:3rem;font-weight:100;color:#9f9f9f;margin:0;& strong{font-weight:500;color:#0f0f0f;display:block;}@media all and (max-width:520px){font-size:2.5rem;}"]);
var SectionImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__SectionImage",
  componentId: "mrxqip-3"
})(["display:flex;flex:1;width:100%;background:#9f9f9f;background-image:url(", ");background-size:cover;background-position:center;"], function (props) {
  return props.image;
});

var Hero = function Hero(_ref) {
  _objectDestructuringEmpty(_ref);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
    className: "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionContent, {
    className: "hero__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionTitle, {
    className: "hero__content--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Forget the 7 herbs and spices,", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "we're your secret ingredient"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionImage, {
    image: "/static/spices.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Chris/bland-ultra/components/Menu.jsx";




var MenuWrapper = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.div({
  visible: {
    y: '0vh',
    delayChildren: 200,
    staggerChildren: 100
  },
  hidden: {
    y: '-100vh'
  }
});
var StyledMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(MenuWrapper).withConfig({
  displayName: "Menu__StyledMenuWrapper",
  componentId: "sc-1jbjsxa-0"
})(["width:100vw;height:100vh;background:#0f0f0f;z-index:88;position:fixed;color:#fff;transform:translateY(-100vh)"]);
var MenuLinks = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Menu__MenuLinks",
  componentId: "sc-1jbjsxa-1"
})(["padding:72px 0 0;margin:0;width:100%;display:flex;flex-flow:column nowrap;align-items:center;justify-content:flex-start;box-sizing:border-box;"]);
var MenuLink = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.li({
  visible: {
    y: '0',
    opacity: 1
  },
  hidden: {
    y: '20',
    opacity: 0
  }
});
var StyledMenuLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(MenuLink).withConfig({
  displayName: "Menu__StyledMenuLink",
  componentId: "sc-1jbjsxa-2"
})(["font-size:3rem;font-weight:500;color:#fff;list-style:none;& a{font-size:3rem;font-weight:500;color:#fff;text-decoration:none;}"]);
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Menu__Footer",
  componentId: "sc-1jbjsxa-3"
})(["position:absolute;bottom:0;left:0;right:0;width:100vw;box-sizing:border-box;display:flex;align-items:center;justify-content:center;padding-bottom:24px;text-align:center;font-weight:300;"]);

var Menu = function Menu(_ref) {
  var open = _ref.open;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenuWrapper, {
    className: "menu",
    pose: open ? 'visible' : 'hidden',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuLinks, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenuLink, {
    withParent: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Services"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenuLink, {
    withParent: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenuLink, {
    withParent: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "blank",
    href: "https://www.facebook.com/Bland-2218276858408891/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Facebook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenuLink, {
    withParent: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "blank",
    href: "https://twitter.com/werebland",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Twitter")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenuLink, {
    withParent: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "blank",
    href: "https://instagram.com/werebland",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Instagram")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenuLink, {
    withParent: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "blank",
    href: "https://www.linkedin.com/company/werebland/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "LinkedIn"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Made with \u2764\uFE0F in Halifax", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), "\xA9 2018 Bland Marketing Agency"));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/Services.jsx":
/*!*********************************!*\
  !*** ./components/Services.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Chris/bland-ultra/components/Services.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "Services__Section",
  componentId: "sc-1v7dk2-0"
})(["width:100vw;height:100%;min-height:100vh;display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-end;padding:72px;box-sizing:border-box;position:relative;@media all and (max-width:860px){padding:72px 48px;}@media all and (max-width:770px){flex-flow:column nowrap;align-items:flex-end;justify-content:flex-start;}@media all and (max-width:520px){padding:72px 0;}"]);
var SectionContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Services__SectionContent",
  componentId: "sc-1v7dk2-1"
})(["width:calc(100vw - 144px);height:70vh;position:absolute;background:#0f0f0f;right:72px;left:72px;padding:48px 408px 48px 48px;box-sizing:border-box;@media all and (max-width:860px){width:calc(100vw - 96px);right:48px;left:48px;}@media all and (max-width:770px){width:100vw;height:100vh;left:0;right:0;top:96px;padding:186px 24px 24px 24px;}"]);
var SectionCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.article.withConfig({
  displayName: "Services__SectionCard",
  componentId: "sc-1v7dk2-2"
})(["width:360px;height:80vh;background:#fff;box-shadow:0 2px 16px -2px rgba(159,159,159,0.32);z-index:4;padding:24px;box-sizing:border-box;@media all and (max-width:770px){height:auto;padding:24px 0 24px 24px;}"]);
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "Services__SectionTitle",
  componentId: "sc-1v7dk2-3"
})(["font-size:2rem;font-weight:500;color:#0f0f0f;margin:0 0 24px 0;"]);
var ServicesItems = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Services__ServicesItems",
  componentId: "sc-1v7dk2-4"
})(["width:100%;padding:0;margin:0;display:flex;flex-flow:column nowrap;@media all and (max-width:770px){flex-flow:row nowrap;overflow:scroll;}"]);
var ServicesItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "Services__ServicesItem",
  componentId: "sc-1v7dk2-5"
})(["width:100%;height:52px;font-size:1.5rem;font-weight:300;color:", ";position:relative;list-style:none;z-index:1;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:0.3s ease-out all;white-space:nowrap;&::before{content:\"\";height:100%;width:100%;position:absolute;left:0;top:0;bottom:0;background:#fff;z-index:-1;}&::after{content:\"\";height:100%;width:", ";background:#0f0f0f;position:absolute;left:0;top:0;bottom:0;z-index:-1;transition:0.3s ease-out all;}@media all and (max-width:770px){padding:0 24px;}"], function (props) {
  return props.active ? '#fff' : '0f0f0f';
}, function (props) {
  return props.active ? '100%' : '0';
});
var ServicesChanger = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.div({
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: -24
  }
});
var StyledServicesChanger = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(ServicesChanger).withConfig({
  displayName: "Services__StyledServicesChanger",
  componentId: "sc-1v7dk2-6"
})(["width:100%;height:100%;color:#fff;position:absolute;top:0;left:0;padding:48px 408px 48px 48px;box-sizing:border-box;@media all and (max-width:770px){width:100vw;left:0;right:0;padding:186px 24px 24px 24px;}"]);
var ServicesTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4.withConfig({
  displayName: "Services__ServicesTitle",
  componentId: "sc-1v7dk2-7"
})(["font-size:2rem;font-weight:500;color:#fff;margin:0 0 24px 0;"]);
var ServicesCopy = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Services__ServicesCopy",
  componentId: "sc-1v7dk2-8"
})(["font-size:1.25rem;font-weight:300;color:#fff;margin:0;padding:0;"]);

var Services =
/*#__PURE__*/
function (_Component) {
  _inherits(Services, _Component);

  function Services(props) {
    var _this;

    _classCallCheck(this, Services);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Services).call(this, props));
    _this.state = {
      service: 'branding'
    };
    return _this;
  }

  _createClass(Services, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
        className: "services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionContent, {
        className: "services__content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledServicesChanger, {
        pose: this.state.service === "branding" ? 'visible' : 'hidden',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesTitle, {
        className: "services__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "Branding & Identity"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesCopy, {
        className: "services__copy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Your brand is who you are and it\u2019s made up of more than just details. It is your personality, the who, what, where, and why. We work with you to create something that we both can be proud of. A brand that wears its identity on its sleeve. Thoughtful and precise, while still being everything you could hope it could be and more.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }), "From ideation and logo work, to creating style guides and ensuring brand fidelity, we\u2019re here to make everything go right.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledServicesChanger, {
        pose: this.state.service === "content" ? 'visible' : 'hidden',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesTitle, {
        className: "services__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "Content"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesCopy, {
        className: "services__copy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "In a foodie world, content is the meat and potatoes. Like a well-finished dish, great content has all the essentials. It begins with mise en place, prepared with a trained and enthusiastic eye, and presented in an approachable but intriguing way.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), "Bland helps you create meaningful content that builds brands. With services from copywriting and public relations to menu consulting and food photography, we will always have something valuable to offer.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledServicesChanger, {
        pose: this.state.service === "social" ? 'visible' : 'hidden',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesTitle, {
        className: "services__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "Social Media Management"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesCopy, {
        className: "services__copy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, "Does constructing an Instagram post seem more intimidating than preparing a full canard a la presse? Good thing you have Bland by your side to help you tell your influencers from your hashtags. Whether you need a few posts a week to advertise your specials or a complete social strategy, Bland is there to help you acquire customers and grow your brand.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledServicesChanger, {
        pose: this.state.service === "acquisition" ? 'visible' : 'hidden',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesTitle, {
        className: "services__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "Acquisition & Retention"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesCopy, {
        className: "services__copy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "Loyalty is what drives brands. But even the most loyal customers have to start by walking through your doors, and the ground work for that loyalty starts long before that. Bland focuses on helping you make customers for life, creating value in your interactions that result in tangible benefits.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }), "From email and SMS campaigns to strategy and consulting, Bland has a solution for you to achieve sustained and impactful growth."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionCard, {
        className: "services__card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Services at Bland"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesItems, {
        className: "services__items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesItem, {
        className: "services__items--item",
        active: this.state.service === "branding",
        onClick: function onClick() {
          return _this2.setState({
            service: 'branding'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, "Branding & Identity"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesItem, {
        className: "services__items--item",
        active: this.state.service === "content",
        onClick: function onClick() {
          return _this2.setState({
            service: 'content'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "Content Creation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesItem, {
        className: "services__items--item",
        active: this.state.service === "social",
        onClick: function onClick() {
          return _this2.setState({
            service: 'social'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "Social Media Management"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesItem, {
        className: "services__items--item",
        active: this.state.service === "acquisition",
        onClick: function onClick() {
          return _this2.setState({
            service: 'acquisition'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "Acquisition & Retention"))));
    }
  }]);

  return Services;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./components/Why.jsx":
/*!****************************!*\
  !*** ./components/Why.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Chris/bland-ultra/components/Why.jsx";

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }



var Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "Why__Section",
  componentId: "e62d7n-0"
})(["width:100vw;height:100%;min-height:100vh;display:flex;flex-flow:row nowrap;align-items:center;padding:72px;box-sizing:border-box;position:relative;@media all and (max-width:860px){padding:72px 48px;}@media all and (max-width:670px){flex-flow:column nowrap;}@media all and (max-width:520px){padding:72px 24px;}"]);
var SectionCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.article.withConfig({
  displayName: "Why__SectionCard",
  componentId: "e62d7n-1"
})(["width:50vw;height:60vh;padding:48px;box-sizing:border-box;background:#FFFFFF;box-shadow:0 2px 16px -2px rgba(159,159,159,0.32);z-index:8;@media all and (max-width:1000px){width:75vw;}@media all and (max-width:670px){width:75vw;height:auto;padding:24px;}"]);
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "Why__SectionTitle",
  componentId: "e62d7n-2"
})(["font-size:2rem;font-weight:500;color:#0f0f0f;margin:0 0 24px 0;"]);
var SectionCopy = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Why__SectionCopy",
  componentId: "e62d7n-3"
})(["font-size:1.5rem;font-weight:300;color:#9f9f9f;margin:0;padding:0;"]);
var SectionImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Why__SectionImage",
  componentId: "e62d7n-4"
})(["width:66vw;height:calc(100vh - 144px);background:#9f9f9f;display:flex;position:absolute;top:72px;right:72px;background-image:url(", ");background-size:cover;background-position:center;@media all and (max-width:860px){right:48px;}@media all and (max-width:670px){width:100vw;right:0;left:0;top:24px;}"], function (props) {
  return props.image;
});

var Why = function Why(_ref) {
  _objectDestructuringEmpty(_ref);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
    className: "why",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionCard, {
    className: "why__card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionTitle, {
    className: "why__card--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Why Bland?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionCopy, {
    className: "why__card--copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "By merging disruptive technology with industry standards, we are able to create a one-of-a-kind presence for your brand. From social media management and content creation to a full-blown branding and identity overhaul, we have the power, expertise, and drive to bring your vision to life. From startups to established business, we\u2019re ready for the opportunity to embrace your big idea.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionImage, {
    image: "/static/speaker.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Why);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.jsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./components/Header.jsx");
/* harmony import */ var _components_Why__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Why */ "./components/Why.jsx");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.jsx");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.jsx");
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Services */ "./components/Services.jsx");
var _jsxFileName = "/Users/Chris/bland-ultra/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__PageWrapper",
  componentId: "sc-1wbo52z-0"
})(["width:100%;height:100%;padding:0;margin:0;overflow:", ";"], function (props) {
  return props.open ? 'hidden' : 'scroll';
});
var Floaty = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Floaty",
  componentId: "sc-1wbo52z-1"
})(["width:40vw;height:auto;margin:24px auto;padding:24px;box-sizing:border-box;background:#0f0f0f;@media all and (max-width:860px){width:calc(100vw - 96px);}@media all and (max-width:520px){width:calc(100vw - 48px);}"]);
var FloatyContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "pages__FloatyContent",
  componentId: "sc-1wbo52z-2"
})(["font-size:1.5rem;font-weight:500;color:#fff;margin:0 0 24px 0;padding:0;"]);
var FloatyButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "pages__FloatyButton",
  componentId: "sc-1wbo52z-3"
})(["width:100%;height:64px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.5rem;font-weight:400;position:relative;z-index:1;cursor:pointer;text-decoration:none;border:2px solid #fff;& i{transition:0.2s ease-out all;transform:translateX(0);font-size:2.5rem;}&:hover i{transform:translateX(4px);}"]);
var Recent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "pages__Recent",
  componentId: "sc-1wbo52z-4"
})(["width:100vw;height:100%;min-height:100vh;display:flex;flex-flow:column nowrap;align-items:center;justify-content:flex-end;padding:72px;box-sizing:border-box;position:relative;@media all and (max-width:860px){padding:72px 48px;}@media all and (max-width:770px){flex-flow:column nowrap;align-items:flex-end;justify-content:flex-start;}@media all and (max-width:520px){padding:72px 0;}"]);
var RecentBackground = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__RecentBackground",
  componentId: "sc-1wbo52z-5"
})(["width:100%;height:100%;background:#0f0f0f;position:relative;padding:48px 0 48px 48px;box-sizing:border-box;display:flex;flex:1;flex-flow:column nowrap;@media all and (max-width:770px){padding:0 24px;}"]);
var RecentCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.article.withConfig({
  displayName: "pages__RecentCard",
  componentId: "sc-1wbo52z-6"
})(["height:100%;background:#fff;box-shadow:0 2px 16px -2px rgba(159,159,159,0.32);margin-bottom:48px;display:inline-flex;flex:1;align-items:center;justify-content:center;@media all and (max-width:770px){margin-bottom:0 24px;}"]);
var RecentTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "pages__RecentTitle",
  componentId: "sc-1wbo52z-7"
})(["font-size:2rem;font-weight:500;color:#fff;margin:0 0 24px 0;"]);
var RecentImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__RecentImage",
  componentId: "sc-1wbo52z-8"
})(["width:394px;height:182px;display:block;background-image:url(/static/bland-marketing-agency-client-rma.png);background-size:cover;background-position:center;"]);
var RecentCopy = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "pages__RecentCopy",
  componentId: "sc-1wbo52z-9"
})(["padding:0;margin:0;font-size:1.25rem;font-weight:300;color:#fff;margin:0;padding:0 48px 0 0;box-sizing:border-box;@media all and (max-width:770px){padding:0 24px 0 0;}& a{color:#fff;font-weight:500;text-decoration:none;}"]);

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      menuVisible: false
    };
    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageWrapper, {
        open: this.state.menuVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Bland | A Halifax Agency Creating Tasteful Presences")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
        open: this.state.menuVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        handleMenuToggle: function handleMenuToggle() {
          return _this2.setState({
            menuVisible: !_this2.state.menuVisible
          });
        },
        open: this.state.menuVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_4___default.a, {
        query: "(min-width: 1160px)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Floaty, {
        className: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FloatyContent, {
        className: "about__content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "Bland is an agile marketing agency devoted to first impressions with a focus on the food and beverage industry. We sweat the details of content and identity to create tangible and expansive presences that capture customers and lead to real-world growth."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/services",
        prefetch: true,
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FloatyButton, {
        className: "about__button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "See what Bland can do", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "chevron_right")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Why__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Recent, {
        className: "recent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentBackground, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "Bland No More"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentCard, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentImage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentCopy, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "We worked closely with Dalhousie's ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://dalrma.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, "Rowe Marketing Association"), " to breathe new life into a young marketing association. Bland embraced that youth and created a logo that was bold yet approachable, colorful but professional. In short, the perfect brand for a marketing association.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), "We also got together with our friends at ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://platinumleadmarketing.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "Platinum Lead"), " to create an expansive website and social media revamp."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Services__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "floating-label-react":
/*!***************************************!*\
  !*** external "floating-label-react" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("floating-label-react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map