webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_responsive__ = __webpack_require__("./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Hero__ = __webpack_require__("./components/Hero.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Header__ = __webpack_require__("./components/Header.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Why__ = __webpack_require__("./components/Why.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Menu__ = __webpack_require__("./components/Menu.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Contact__ = __webpack_require__("./components/Contact.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Services__ = __webpack_require__("./components/Services.jsx");
var _jsxFileName = "/Users/Chris/bland-ultra/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var PageWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "pages__PageWrapper",
  componentId: "sc-1wbo52z-0"
})(["width:100%;height:100%;padding:0;margin:0;overflow:", ";"], function (props) {
  return props.open ? 'hidden' : 'scroll';
});
var Floaty = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "pages__Floaty",
  componentId: "sc-1wbo52z-1"
})(["width:40vw;height:auto;margin:24px auto;padding:24px;box-sizing:border-box;background:#0f0f0f;@media all and (max-width:860px){width:calc(100vw - 96px);}@media all and (max-width:520px){width:calc(100vw - 48px);}"]);
var FloatyContent = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].p.withConfig({
  displayName: "pages__FloatyContent",
  componentId: "sc-1wbo52z-2"
})(["font-size:1.5rem;font-weight:500;color:#fff;margin:0 0 24px 0;padding:0;"]);
var FloatyButton = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].a.withConfig({
  displayName: "pages__FloatyButton",
  componentId: "sc-1wbo52z-3"
})(["width:100%;height:64px;display:flex;align-items:center;justify-content:center;color:#0f0f0f;font-size:1.5rem;font-weight:400;position:relative;z-index:1;cursor:pointer;text-decoration:none;&::before{content:\"\";height:100%;width:100%;position:absolute;left:0;top:0;bottom:0;background:#9f9f9f;z-index:-1;}&::after{content:\"\";height:100%;width:100%;background:#fff;position:absolute;left:0;top:0;bottom:0;z-index:-1;transition:0.3s ease-out all;}&:hover::after{width:0;}& i{transition:0.2s ease-out all;transform:translateX(0)}&:hover i{transform:translateX(4px);}"]);

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.state = {
      menuVisible: false
    };
    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PageWrapper, {
        open: this.state.menuVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, "Bland | A Halifax Agency Creating Tasteful Presences")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Menu__["a" /* default */], {
        open: this.state.menuVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Header__["a" /* default */], {
        handleMenuToggle: function handleMenuToggle() {
          return _this2.setState({
            menuVisible: !_this2.state.menuVisible
          });
        },
        open: this.state.menuVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_responsive___default.a, {
        query: "(min-width: 1160px)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Contact__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Hero__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Floaty, {
        className: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FloatyContent, {
        className: "about__content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "Bland is an agile marketing agency devoted to first impressions with a focus on the food and beverage industry. We sweat the details of content and identity to create tangible and expansive presences that capture customers and lead to real-world growth."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/services",
        prefetch: true,
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FloatyButton, {
        className: "about__button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "See what Bland can do", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, "chevron_right")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Why__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Services__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.e144bd43cac85779687a.hot-update.js.map