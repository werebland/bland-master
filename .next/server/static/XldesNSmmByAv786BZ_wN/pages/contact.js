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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("floating-label-react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



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
    open: open
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    prefetch: true,
    passHref: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderLogo, {
    className: "header__logo"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    prefetch: true,
    passHref: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderContact, {
    className: "header__contact"
  }, "Contact", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons"
  }, "chevron_right"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuToggle, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuToggleIcon, {
    open: open,
    onClick: function onClick() {
      return handleMenuToggle();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




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
    pose: open ? 'visible' : 'hidden'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuLinks, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenuLink, {
    withParent: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/services"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Services"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenuLink, {
    withParent: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contact"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Contact"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenuLink, {
    withParent: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "blank",
    href: "https://www.facebook.com/Bland-2218276858408891/"
  }, "Facebook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenuLink, {
    withParent: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "blank",
    href: "https://twitter.com/werebland"
  }, "Twitter")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenuLink, {
    withParent: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "blank",
    href: "https://instagram.com/werebland"
  }, "Instagram")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenuLink, {
    withParent: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "blank",
    href: "https://www.linkedin.com/company/werebland/"
  }, "LinkedIn"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null, "Made with \u2764\uFE0F in Halifax", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\xA9 2018 Bland Marketing Agency"));
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var floating_label_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var floating_label_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(floating_label_react__WEBPACK_IMPORTED_MODULE_2__);
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
        className: "contact"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactHeader, {
        className: "contact__header"
      }, "Let us buy you a beer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactForm, {
        name: "contact",
        className: "contact__form",
        method: "post",
        "data-netlify": "true",
        "data-netlify-honeypot": "bot-field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactFormRow, {
        className: "contact__form--row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "hidden",
        name: "form-name",
        value: "contact"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "bot-field",
        hidden: true
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
        }
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
        }
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
        }
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
        }
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
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSubmitWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSubmit, null, "Submit", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "material-icons"
      }, "chevron_right")))));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Contact);

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
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
  displayName: "contact__PageWrapper",
  componentId: "b6g70s-0"
})(["width:100%;height:100%;padding:0;margin:0;"]);

var ContactPage =
/*#__PURE__*/
function (_Component) {
  _inherits(ContactPage, _Component);

  function ContactPage(props) {
    var _this;

    _classCallCheck(this, ContactPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContactPage).call(this, props));
    _this.state = {
      menuVisible: false
    };
    return _this;
  }

  _createClass(ContactPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Contact Bland | A Halifax Agency Creating Tasteful Presences")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        open: this.state.menuVisible
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        handleMenuToggle: function handleMenuToggle() {
          return _this2.setState({
            menuVisible: !_this2.state.menuVisible
          });
        },
        open: this.state.menuVisible
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null));
    }
  }]);

  return ContactPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ContactPage);

/***/ })
/******/ ]);