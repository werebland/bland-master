module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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

module.exports = require("react-pose");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);



var HeaderWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "Header__HeaderWrapper",
  componentId: "sc-1bl1itl-0"
})(["width:100vw;height:72px;position:absolute;top:0;right:0;left:0;display:flex;align-items:center;justify-content:space-between;padding:0 144px 0 72px;box-sizing:border-box;z-index:", ";;@media all and (max-width:860px){padding:0 96px 0 24px;}@media all and (max-width:520px){padding:0 72px 0 24px;}"], function (props) {
  return props.open === false && '8';
});
var HeaderLogo = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.a.withConfig({
  displayName: "Header__HeaderLogo",
  componentId: "sc-1bl1itl-1"
})(["width:61px;height:19px;background-image:url('/static/bland.svg');background-size:cover;background-position:center;cursor:pointer;"]);
var HeaderContact = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.a.withConfig({
  displayName: "Header__HeaderContact",
  componentId: "sc-1bl1itl-2"
})(["height:40px;font-size:1rem;font-weight:500;color:#fff;text-decoration:none;padding:0 24px;display:flex;align-items:center;justify-content:center;position:relative;cursor:pointer;&::before{content:\"\";height:100%;width:100%;position:absolute;left:0;top:0;bottom:0;background:#9f9f9f;z-index:-1;}&::after{content:\"\";height:100%;width:100%;background:#0f0f0f;position:absolute;left:0;top:0;bottom:0;z-index:-1;transition:0.3s ease-out all;}&:hover::after{width:0;}"]);
var MenuToggle = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "Header__MenuToggle",
  componentId: "sc-1bl1itl-3"
})(["width:72px;height:72px;position:fixed;right:72px;display:flex;align-items:center;justify-content:center;z-index:888;@media all and (max-width:860px){right:24px;}@media all and (max-width:520px){right:0;}"]);
var MenuToggleIcon = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
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
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HeaderWrapper, {
    className: "header",
    open: open
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    prefetch: true,
    passHref: true
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HeaderLogo, {
    className: "header__logo"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/contact",
    prefetch: true,
    passHref: true
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HeaderContact, {
    className: "header__contact"
  }, "Contact")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuToggle, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuToggleIcon, {
    open: open,
    onClick: function onClick() {
      return handleMenuToggle();
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_pose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_pose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_pose__);



var MenuWrapper = __WEBPACK_IMPORTED_MODULE_2_react_pose___default.a.div({
  visible: {
    y: '0vh'
  },
  hidden: {
    y: '-100vh'
  }
});
var StyledMenuWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(MenuWrapper).withConfig({
  displayName: "Menu__StyledMenuWrapper",
  componentId: "sc-1jbjsxa-0"
})(["width:100vw;height:100vh;background:#0f0f0f;z-index:88;position:fixed;color:#fff;transform:translateY(-100vh)"]);

var Menu = function Menu(_ref) {
  var open = _ref.open;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledMenuWrapper, {
    className: "menu",
    pose: open ? 'visible' : 'hidden'
  }, "Menu");
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_pose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_pose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_pose__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Section = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.section.withConfig({
  displayName: "Services__Section",
  componentId: "sc-1v7dk2-0"
})(["width:100vw;height:100vh;display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-end;padding:72px;box-sizing:border-box;position:relative;@media all and (max-width:860px){padding:72px 48px;}@media all and (max-width:770px){flex-flow:column nowrap;align-items:flex-end;justify-content:flex-start;}@media all and (max-width:520px){padding:72px 0;}"]);
var SectionContent = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "Services__SectionContent",
  componentId: "sc-1v7dk2-1"
})(["width:calc(100vw - 144px);height:70vh;position:absolute;background:#0f0f0f;right:72px;left:72px;padding:48px 408px 48px 48px;box-sizing:border-box;@media all and (max-width:860px){width:calc(100vw - 96px);right:48px;left:48px;}@media all and (max-width:770px){width:100vw;height:80vh;left:0;right:0;top:96px;padding:186px 24px 24px 24px;}"]);
var SectionCard = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.article.withConfig({
  displayName: "Services__SectionCard",
  componentId: "sc-1v7dk2-2"
})(["width:360px;height:100%;background:#fff;box-shadow:0 2px 16px -2px rgba(159,159,159,0.32);z-index:8;padding:24px;box-sizing:border-box;@media all and (max-width:770px){height:auto;padding:24px 0 24px 24px;}"]);
var SectionTitle = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.h3.withConfig({
  displayName: "Services__SectionTitle",
  componentId: "sc-1v7dk2-3"
})(["font-size:2rem;font-weight:500;color:#0f0f0f;margin:0 0 24px 0;"]);
var ServicesItems = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.ul.withConfig({
  displayName: "Services__ServicesItems",
  componentId: "sc-1v7dk2-4"
})(["width:100%;padding:0;margin:0;display:flex;flex-flow:column nowrap;@media all and (max-width:770px){flex-flow:row nowrap;overflow:scroll;}"]);
var ServicesItem = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.li.withConfig({
  displayName: "Services__ServicesItem",
  componentId: "sc-1v7dk2-5"
})(["width:100%;height:52px;font-size:1.5rem;font-weight:300;color:", ";position:relative;list-style:none;z-index:1;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:0.3s ease-out all;white-space:nowrap;&::before{content:\"\";height:100%;width:100%;position:absolute;left:0;top:0;bottom:0;background:#fff;z-index:-1;}&::after{content:\"\";height:100%;width:", ";background:#0f0f0f;position:absolute;left:0;top:0;bottom:0;z-index:-1;transition:0.3s ease-out all;}@media all and (max-width:770px){padding:0 24px;}"], function (props) {
  return props.active ? '#fff' : '0f0f0f';
}, function (props) {
  return props.active ? '100%' : '0';
});
var ServicesChanger = __WEBPACK_IMPORTED_MODULE_2_react_pose___default.a.div({
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: -24
  }
});
var StyledServicesChanger = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(ServicesChanger).withConfig({
  displayName: "Services__StyledServicesChanger",
  componentId: "sc-1v7dk2-6"
})(["width:100%;height:100%;color:#fff;position:absolute;top:0;left:0;padding:48px 408px 48px 48px;box-sizing:border-box;@media all and (max-width:770px){width:100vw;left:0;right:0;padding:186px 24px 24px 24px;}"]);
var ServicesTitle = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.h4.withConfig({
  displayName: "Services__ServicesTitle",
  componentId: "sc-1v7dk2-7"
})(["font-size:2rem;font-weight:500;color:#fff;margin:0 0 24px 0;"]);
var ServicesCopy = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.p.withConfig({
  displayName: "Services__ServicesCopy",
  componentId: "sc-1v7dk2-8"
})(["font-size:1rem;font-weight:300;color:#fff;margin:0;padding:0;"]);

var Services =
/*#__PURE__*/
function (_Component) {
  _inherits(Services, _Component);

  function Services(props) {
    var _this;

    _classCallCheck(this, Services);

    _this = _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).call(this, props));
    _this.state = {
      service: 'branding'
    };
    return _this;
  }

  _createClass(Services, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Section, {
        className: "services"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SectionContent, {
        className: "services__content"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledServicesChanger, {
        pose: this.state.service === "branding" ? 'visible' : 'hidden'
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesTitle, {
        className: "services__title"
      }, "Branding & Identity"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesCopy, {
        className: "services__copy"
      }, "Your brand is who you are and it\u2019s more than just details. It is your personality, the who, what, where, and why. We work with you to create something that we both can be proud of. A brand that wears its identity on its sleeve. Thoughtful and precise, while still being everything you could hope it could be and more.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), "From ideation and logo work, to creating style guides and ensuring brand fidelity, we\u2019re here to make everything go right.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledServicesChanger, {
        pose: this.state.service === "content" ? 'visible' : 'hidden'
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesTitle, {
        className: "services__title"
      }, "Content"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesCopy, {
        className: "services__copy"
      }, "Your brand is who you are and it\u2019s more than just details. It is your personality, the who, what, where, and why. We work with you to create something that we both can be proud of. A brand that wears its identity on its sleeve. Thoughtful and precise, while still being everything you could hope it could be and more.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), "From ideation and logo work, to creating style guides and ensuring brand fidelity, we\u2019re here to make everything go right."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SectionCard, {
        className: "services__card"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SectionTitle, null, "Services"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesItems, {
        className: "services__items"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesItem, {
        className: "services__items--item",
        active: this.state.service === "branding",
        onClick: function onClick() {
          return _this2.setState({
            service: 'branding'
          });
        }
      }, "Branding & Identity"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesItem, {
        className: "services__items--item",
        active: this.state.service === "content",
        onClick: function onClick() {
          return _this2.setState({
            service: 'content'
          });
        }
      }, "Content Creation"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesItem, {
        className: "services__items--item",
        active: this.state.service === "social",
        onClick: function onClick() {
          return _this2.setState({
            service: 'social'
          });
        }
      }, "Social Media Management"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesItem, {
        className: "services__items--item",
        active: this.state.service === "retention",
        onClick: function onClick() {
          return _this2.setState({
            service: 'retention'
          });
        }
      }, "Customer Retention"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesItem, {
        className: "services__items--item",
        active: this.state.service === "reputation",
        onClick: function onClick() {
          return _this2.setState({
            service: 'reputation'
          });
        }
      }, "Reputation Management"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesItem, {
        className: "services__items--item",
        active: this.state.service === "strategy",
        onClick: function onClick() {
          return _this2.setState({
            service: 'strategy'
          });
        }
      }, "Strategy"))));
    }
  }]);

  return Services;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Services);

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(1);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "react-responsive"
var external__react_responsive_ = __webpack_require__(13);
var external__react_responsive__default = /*#__PURE__*/__webpack_require__.n(external__react_responsive_);

// CONCATENATED MODULE: ./components/Hero.jsx
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }



var Section = external__styled_components__default.a.section.withConfig({
  displayName: "Hero__Section",
  componentId: "mrxqip-0"
})(["width:100vw;height:100vh;display:flex;flex-flow:column nowrap;"]);
var SectionContent = external__styled_components__default.a.div.withConfig({
  displayName: "Hero__SectionContent",
  componentId: "mrxqip-1"
})(["display:flex;flex:1;width:100%;padding-left:144px;box-sizing:border-box;align-items:center;@media all and (max-width:860px){padding-left:48px}@media all and (max-width:520px){padding-left:24px}"]);
var SectionTitle = external__styled_components__default.a.h1.withConfig({
  displayName: "Hero__SectionTitle",
  componentId: "mrxqip-2"
})(["font-size:3rem;font-weight:100;color:#9f9f9f;margin:0;& strong{font-weight:500;color:#0f0f0f;display:block;}"]);
var SectionImage = external__styled_components__default.a.div.withConfig({
  displayName: "Hero__SectionImage",
  componentId: "mrxqip-3"
})(["display:flex;flex:1;width:100%;background:#9f9f9f;background-image:url(", ");background-size:cover;background-position:center;"], function (props) {
  return props.image;
});

var Hero_Hero = function Hero(_ref) {
  _objectDestructuringEmpty(_ref);

  return external__react__default.a.createElement(Section, {
    className: "hero"
  }, external__react__default.a.createElement(SectionContent, {
    className: "hero__content"
  }, external__react__default.a.createElement(SectionTitle, {
    className: "hero__content--title"
  }, "Forget the 7 herbs and spices,", external__react__default.a.createElement("strong", null, "we're your secret ingredient"))), external__react__default.a.createElement(SectionImage, {
    image: "/static/spices.jpg"
  }));
};

/* harmony default export */ var components_Hero = (Hero_Hero);
// EXTERNAL MODULE: ./components/Header.jsx
var Header = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Why.jsx
function Why__objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }



var Why_Section = external__styled_components__default.a.section.withConfig({
  displayName: "Why__Section",
  componentId: "e62d7n-0"
})(["width:100vw;height:100vh;display:flex;flex-flow:row nowrap;align-items:center;padding:72px;box-sizing:border-box;position:relative;@media all and (max-width:860px){padding:72px 48px;}@media all and (max-width:670px){flex-flow:column nowrap;}@media all and (max-width:520px){padding:72px 24px;}"]);
var SectionCard = external__styled_components__default.a.article.withConfig({
  displayName: "Why__SectionCard",
  componentId: "e62d7n-1"
})(["width:50vw;height:60vh;padding:48px;box-sizing:border-box;background:#FFFFFF;box-shadow:0 2px 16px -2px rgba(159,159,159,0.32);z-index:8;@media all and (max-width:1000px){width:75vw;}@media all and (max-width:670px){width:75vw;height:auto;padding:24px;}"]);
var Why_SectionTitle = external__styled_components__default.a.h3.withConfig({
  displayName: "Why__SectionTitle",
  componentId: "e62d7n-2"
})(["font-size:2rem;font-weight:500;color:#0f0f0f;margin:0 0 24px 0;"]);
var SectionCopy = external__styled_components__default.a.p.withConfig({
  displayName: "Why__SectionCopy",
  componentId: "e62d7n-3"
})(["font-size:1.5rem;font-weight:300;color:#9f9f9f;margin:0;padding:0;"]);
var Why_SectionImage = external__styled_components__default.a.div.withConfig({
  displayName: "Why__SectionImage",
  componentId: "e62d7n-4"
})(["width:66vw;height:calc(100vh - 144px);background:#9f9f9f;display:flex;position:absolute;top:72px;right:72px;background-image:url(", ");background-size:cover;background-position:center;@media all and (max-width:860px){right:48px;}@media all and (max-width:670px){width:100vw;right:0;left:0;top:24px;}"], function (props) {
  return props.image;
});

var Why_Why = function Why(_ref) {
  Why__objectDestructuringEmpty(_ref);

  return external__react__default.a.createElement(Why_Section, {
    className: "why"
  }, external__react__default.a.createElement(SectionCard, {
    className: "why__card"
  }, external__react__default.a.createElement(Why_SectionTitle, {
    className: "why__card--title"
  }, "Why Bland?"), external__react__default.a.createElement(SectionCopy, {
    className: "why__card--copy"
  }, "By merging disruptive technology with industry standards, we are able to create a one-of-a-kind presence for your brand. From social media management and content creation to a full-blown branding and identity overhaul, we have the power, expertise, and drive to bring your vision to life. From startups to established business, we\u2019re ready for the opportunity to embrace your big idea.")), external__react__default.a.createElement(Why_SectionImage, {
    image: "/static/speaker.jpg"
  }));
};

/* harmony default export */ var components_Why = (Why_Why);
// EXTERNAL MODULE: ./components/Menu.jsx
var Menu = __webpack_require__(5);

// EXTERNAL MODULE: external "floating-label-react"
var external__floating_label_react_ = __webpack_require__(14);
var external__floating_label_react__default = /*#__PURE__*/__webpack_require__.n(external__floating_label_react_);

// CONCATENATED MODULE: ./components/Contact.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ContactWrapper = external__styled_components__default.a.article.withConfig({
  displayName: "Contact__ContactWrapper",
  componentId: "sc-10vz4cd-0"
})(["width:25vw;min-width:360px;height:auto;position:absolute;right:72px;top:72px;background:#fff;box-shadow:0 2px 16px -2px rgba(159,159,159,0.32);"]);
var ContactHeader = external__styled_components__default.a.h3.withConfig({
  displayName: "Contact__ContactHeader",
  componentId: "sc-10vz4cd-1"
})(["width:100%;padding:24px 0;background:#0f0f0f;color:#fff;font-size:1.5rem;font-weight:500;margin:0;display:flex;align-items:center;justify-content:center;"]);
var ContactForm = external__styled_components__default.a.form.withConfig({
  displayName: "Contact__ContactForm",
  componentId: "sc-10vz4cd-2"
})(["width:100%;padding:24px;box-sizing:border-box;display:flex;flex-flow:column nowrap;& label input{width:100%;margin-bottom:8px;}& label textarea{width:100%;height:120px;margin-bottom:24px;}& input:-webkit-autofill,& input:-webkit-autofill:hover,& input:-webkit-autofill:focus & textarea:-webkit-autofill,& textarea:-webkit-autofill:hover & textarea:-webkit-autofill:focus,& select:-webkit-autofill,& select:-webkit-autofill:hover,& select:-webkit-autofill:focus{-webkit-box-shadow:0 0 0px 1000px #fff inset;}"]);
var ContactFormRow = external__styled_components__default.a.div.withConfig({
  displayName: "Contact__ContactFormRow",
  componentId: "sc-10vz4cd-3"
})(["width:100%;display:flex;flex-flow:row nowrap;justify-content:space-between;& label{width:calc(50% - 12px);}& label input{width:100%;}& label textarea{width:100%;}"]);
var ContactFormFieldset = external__styled_components__default.a.fieldset.withConfig({
  displayName: "Contact__ContactFormFieldset",
  componentId: "sc-10vz4cd-4"
})(["border:0;"]);
var StyledSubmitWrapper = external__styled_components__default.a.div.withConfig({
  displayName: "Contact__StyledSubmitWrapper",
  componentId: "sc-10vz4cd-5"
})(["width:100%;height:56px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;appearance:none;color:#0f0f0f;font-size:1.5rem;font-weight:400;position:relative;z-index:1;cursor:pointer;text-decoration:none;position:relative;&::before{content:\"\";height:100%;width:100%;position:absolute;left:0;top:0;bottom:0;background:#9f9f9f;z-index:-1;}&::after{content:\"\";height:100%;width:100%;background:#0f0f0f;position:absolute;left:0;top:0;bottom:0;z-index:-1;transition:0.3s ease-out all;}&:hover::after{width:0;}"]);
var StyledSubmit = external__styled_components__default.a.input.withConfig({
  displayName: "Contact__StyledSubmit",
  componentId: "sc-10vz4cd-6"
})(["position:absolute;width:100%;height:100%;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;appearance:none;border:0;background-image:none;background:transparent;color:#fff;font-size:1.25rem;font-weight:400;cursor:pointer;"]);

var Contact_Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(ContactWrapper, {
        className: "contact"
      }, external__react__default.a.createElement(ContactHeader, {
        className: "contact__header"
      }, "Let us buy you a beer"), external__react__default.a.createElement(ContactForm, {
        name: "contact",
        className: "contact__form",
        method: "post",
        "data-netlify": "true",
        "data-netlify-honeypot": "bot-field"
      }, external__react__default.a.createElement(ContactFormRow, {
        className: "contact__form--row"
      }, external__react__default.a.createElement("input", {
        type: "hidden",
        name: "form-name",
        value: "contact"
      }), external__react__default.a.createElement("input", {
        type: "text",
        name: "bot-field",
        hidden: true
      }), external__react__default.a.createElement(external__floating_label_react__default.a, {
        type: "text",
        name: "fname",
        placeholder: "First name",
        required: true,
        styles: {
          floating: _objectSpread({}, external__floating_label_react_["floatingStyles"], {
            color: '#9f9f9f'
          }),
          focus: _objectSpread({}, external__floating_label_react_["focusStyles"], {
            borderColor: '#0f0f0f'
          }),
          input: _objectSpread({}, external__floating_label_react_["inputStyles"], {
            borderBottomColor: '#9f9f9f',
            width: '100%'
          }),
          label: _objectSpread({}, external__floating_label_react_["labelStyles"], {
            color: '#9f9f9f'
          })
        }
      }), external__react__default.a.createElement(external__floating_label_react__default.a, {
        type: "text",
        name: "lname",
        placeholder: "Last name",
        required: true,
        styles: {
          floating: _objectSpread({}, external__floating_label_react_["floatingStyles"], {
            color: '#9f9f9f'
          }),
          focus: _objectSpread({}, external__floating_label_react_["focusStyles"], {
            borderColor: '#0f0f0f'
          }),
          input: _objectSpread({}, external__floating_label_react_["inputStyles"], {
            borderBottomColor: '#9f9f9f',
            width: '100%'
          }),
          label: _objectSpread({}, external__floating_label_react_["labelStyles"], {
            color: '#9f9f9f'
          })
        }
      })), external__react__default.a.createElement(external__floating_label_react__default.a, {
        type: "email",
        placeholder: "Email",
        required: true,
        styles: {
          floating: _objectSpread({}, external__floating_label_react_["floatingStyles"], {
            color: '#9f9f9f'
          }),
          focus: _objectSpread({}, external__floating_label_react_["focusStyles"], {
            borderColor: '#0f0f0f'
          }),
          input: _objectSpread({}, external__floating_label_react_["inputStyles"], {
            borderBottomColor: '#9f9f9f',
            width: '100%'
          }),
          label: _objectSpread({}, external__floating_label_react_["labelStyles"], {
            color: '#9f9f9f'
          })
        }
      }), external__react__default.a.createElement(external__floating_label_react__default.a, {
        type: "text",
        placeholder: "Favorite Halifax hangout spot",
        required: true,
        styles: {
          floating: _objectSpread({}, external__floating_label_react_["floatingStyles"], {
            color: '#9f9f9f'
          }),
          focus: _objectSpread({}, external__floating_label_react_["focusStyles"], {
            borderColor: '#0f0f0f'
          }),
          input: _objectSpread({}, external__floating_label_react_["inputStyles"], {
            borderBottomColor: '#9f9f9f',
            width: '100%'
          }),
          label: _objectSpread({}, external__floating_label_react_["labelStyles"], {
            color: '#9f9f9f'
          })
        }
      }), external__react__default.a.createElement(external__floating_label_react__default.a, {
        type: "text",
        placeholder: "What are you working on? (AirBnB for pets, a queso truck, etc)",
        required: true,
        element: "textarea",
        rows: "5",
        styles: {
          floating: _objectSpread({}, external__floating_label_react_["floatingStyles"], {
            color: '#9f9f9f'
          }),
          focus: _objectSpread({}, external__floating_label_react_["focusStyles"], {
            borderColor: '#0f0f0f'
          }),
          input: _objectSpread({}, external__floating_label_react_["inputStyles"], {
            borderBottomColor: '#9f9f9f',
            width: '100%'
          }),
          label: _objectSpread({}, external__floating_label_react_["labelStyles"], {
            color: '#9f9f9f'
          })
        }
      }), external__react__default.a.createElement(StyledSubmitWrapper, null, external__react__default.a.createElement(StyledSubmit, {
        type: "submit",
        value: "Submit"
      }))));
    }
  }]);

  return Contact;
}(external__react_["Component"]);

/* harmony default export */ var components_Contact = (Contact_Contact);
// EXTERNAL MODULE: ./components/Services.jsx
var Services = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/index.js
function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var PageWrapper = external__styled_components__default.a.div.withConfig({
  displayName: "pages__PageWrapper",
  componentId: "sc-1wbo52z-0"
})(["width:100%;height:100%;padding:0;margin:0;"]);
var Floaty = external__styled_components__default.a.div.withConfig({
  displayName: "pages__Floaty",
  componentId: "sc-1wbo52z-1"
})(["width:40vw;height:auto;margin:24px auto;padding:24px;box-sizing:border-box;background:#0f0f0f;@media all and (max-width:860px){width:calc(100vw - 96px);}@media all and (max-width:520px){width:calc(100vw - 48px);}"]);
var FloatyContent = external__styled_components__default.a.p.withConfig({
  displayName: "pages__FloatyContent",
  componentId: "sc-1wbo52z-2"
})(["font-size:1.5rem;font-weight:500;color:#fff;margin:0 0 24px 0;padding:0;"]);
var FloatyButton = external__styled_components__default.a.a.withConfig({
  displayName: "pages__FloatyButton",
  componentId: "sc-1wbo52z-3"
})(["width:100%;height:64px;display:flex;align-items:center;justify-content:center;color:#0f0f0f;font-size:1.5rem;font-weight:400;position:relative;z-index:1;cursor:pointer;text-decoration:none;&::before{content:\"\";height:100%;width:100%;position:absolute;left:0;top:0;bottom:0;background:#9f9f9f;z-index:-1;}&::after{content:\"\";height:100%;width:100%;background:#fff;position:absolute;left:0;top:0;bottom:0;z-index:-1;transition:0.3s ease-out all;}&:hover::after{width:0;}"]);

var pages_Index =
/*#__PURE__*/
function (_Component) {
  pages__inherits(Index, _Component);

  function Index(props) {
    var _this;

    pages__classCallCheck(this, Index);

    _this = pages__possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.state = {
      menuVisible: false
    };
    return _this;
  }

  pages__createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement(PageWrapper, null, external__react__default.a.createElement(Menu["a" /* default */], {
        open: this.state.menuVisible
      }), external__react__default.a.createElement(Header["a" /* default */], {
        handleMenuToggle: function handleMenuToggle() {
          return _this2.setState({
            menuVisible: !_this2.state.menuVisible
          });
        },
        open: this.state.menuVisible
      }), external__react__default.a.createElement(external__react_responsive__default.a, {
        query: "(min-width: 1160px)"
      }, external__react__default.a.createElement(components_Contact, null)), external__react__default.a.createElement(components_Hero, null), external__react__default.a.createElement(Floaty, {
        className: "about"
      }, external__react__default.a.createElement(FloatyContent, {
        className: "about__content"
      }, "Bland is an agile marketing agency devoted to first impressions with a focus on the food and beverage industry. We sweat the details of content and identity to create tangible and expansive presences that capture customers and lead to real-world growth."), external__react__default.a.createElement(link__default.a, {
        href: "/services",
        prefetch: true,
        passHref: true
      }, external__react__default.a.createElement(FloatyButton, {
        className: "about__button"
      }, "See what we can do"))), external__react__default.a.createElement(components_Why, null), external__react__default.a.createElement(Services["a" /* default */], null));
    }
  }]);

  return Index;
}(external__react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("floating-label-react");

/***/ })
/******/ ]);