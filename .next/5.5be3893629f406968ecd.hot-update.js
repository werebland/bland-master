webpackHotUpdate(5,{

/***/ "./components/Services.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_pose__ = __webpack_require__("./node_modules/react-pose/dist/react-pose.es.js");
var _jsxFileName = "/Users/Chris/bland-ultra/components/Services.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Section = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].section.withConfig({
  displayName: "Services__Section",
  componentId: "sc-1v7dk2-0"
})(["width:100vw;height:100vh;display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-end;padding:72px;box-sizing:border-box;position:relative;@media all and (max-width:860px){padding:72px 48px;}@media all and (max-width:770px){flex-flow:column nowrap;align-items:flex-end;justify-content:flex-start;}@media all and (max-width:520px){padding:72px 0;}"]);
var SectionContent = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "Services__SectionContent",
  componentId: "sc-1v7dk2-1"
})(["width:calc(100vw - 144px);height:70vh;position:absolute;background:#0f0f0f;right:72px;left:72px;padding:48px 408px 48px 48px;box-sizing:border-box;@media all and (max-width:860px){width:calc(100vw - 96px);right:48px;left:48px;}@media all and (max-width:770px){width:100vw;height:80vh;left:0;right:0;top:96px;padding:186px 24px 24px 24px;}"]);
var SectionCard = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].article.withConfig({
  displayName: "Services__SectionCard",
  componentId: "sc-1v7dk2-2"
})(["width:360px;height:100%;background:#fff;box-shadow:0 2px 16px -2px rgba(159,159,159,0.32);z-index:8;padding:24px;box-sizing:border-box;@media all and (max-width:770px){height:auto;padding:24px 0 24px 24px;}"]);
var SectionTitle = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].h3.withConfig({
  displayName: "Services__SectionTitle",
  componentId: "sc-1v7dk2-3"
})(["font-size:2rem;font-weight:500;color:#0f0f0f;margin:0 0 24px 0;"]);
var ServicesItems = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].ul.withConfig({
  displayName: "Services__ServicesItems",
  componentId: "sc-1v7dk2-4"
})(["width:100%;padding:0;margin:0;display:flex;flex-flow:column nowrap;@media all and (max-width:770px){flex-flow:row nowrap;overflow:scroll;}"]);
var ServicesItem = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].li.withConfig({
  displayName: "Services__ServicesItem",
  componentId: "sc-1v7dk2-5"
})(["width:100%;height:52px;font-size:1.5rem;font-weight:300;color:", ";position:relative;list-style:none;z-index:1;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:0.3s ease-out all;white-space:nowrap;&::before{content:\"\";height:100%;width:100%;position:absolute;left:0;top:0;bottom:0;background:#fff;z-index:-1;}&::after{content:\"\";height:100%;width:", ";background:#0f0f0f;position:absolute;left:0;top:0;bottom:0;z-index:-1;transition:0.3s ease-out all;}@media all and (max-width:770px){padding:0 24px;}"], function (props) {
  return props.active ? '#fff' : '0f0f0f';
}, function (props) {
  return props.active ? '100%' : '0';
});
var ServicesChanger = __WEBPACK_IMPORTED_MODULE_2_react_pose__["a" /* default */].div({
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: -24
  }
});
var StyledServicesChanger = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */])(ServicesChanger).withConfig({
  displayName: "Services__StyledServicesChanger",
  componentId: "sc-1v7dk2-6"
})(["width:100%;height:100%;color:#fff;position:absolute;top:0;left:0;padding:48px 408px 48px 48px;box-sizing:border-box;@media all and (max-width:770px){width:100vw;left:0;right:0;padding:186px 24px 24px 24px;}"]);
var ServicesTitle = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].h4.withConfig({
  displayName: "Services__ServicesTitle",
  componentId: "sc-1v7dk2-7"
})(["font-size:2rem;font-weight:500;color:#fff;margin:0 0 24px 0;"]);
var ServicesCopy = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].p.withConfig({
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
        className: "services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SectionContent, {
        className: "services__content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledServicesChanger, {
        pose: this.state.service === "branding" ? 'visible' : 'hidden',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesTitle, {
        className: "services__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, "Branding & Identity"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesCopy, {
        className: "services__copy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, "Your brand is who you are and it\u2019s made up of more than just details. It is your personality, the who, what, where, and why. We work with you to create something that we both can be proud of. A brand that wears its identity on its sleeve. Thoughtful and precise, while still being everything you could hope it could be and more.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }), "From ideation and logo work, to creating style guides and ensuring brand fidelity, we\u2019re here to make everything go right.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledServicesChanger, {
        pose: this.state.service === "content" ? 'visible' : 'hidden',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesTitle, {
        className: "services__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, "Content"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesCopy, {
        className: "services__copy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, "In a foodie world, content is the meat and potatoes. Like a well-finished dish, great content has all the essentials. It begins with mise en place, prepared with a trained and enthusiastic eye, and presented in an approachable but intriguing way.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }), "Bland helps you create meaningful content that builds brands. With services from copywriting and public relations to menu consulting, we will always have something valuable to offer.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledServicesChanger, {
        pose: this.state.service === "social" ? 'visible' : 'hidden',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesTitle, {
        className: "services__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, "Social Media Management"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesCopy, {
        className: "services__copy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, "Does constructing an Instagram post seem more intimidating than preparing a full canard a la presse? Good thing you have Bland by your side to help you tell your influencers from your hashtags. Whether you need a few posts a week to advertise your specials or a complete social strategy, Bland is there to help you acquire customers and grow your brand.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledServicesChanger, {
        pose: this.state.service === "acquisition" ? 'visible' : 'hidden',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesTitle, {
        className: "services__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, "Acquisition & Retention"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesCopy, {
        className: "services__copy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, "Loyalty is what drives brands. But even the most loyal customers have to start by walking through your doors, and the ground work for that loyalty starts long before that. Bland focuses on helping you make customers for life, creating value in your interactions that result in tangible benefits.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }), "From email and SMS campaigns to strategy and consulting, Bland has a solution for you to achieve sustained and impactful growth."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SectionCard, {
        className: "services__card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SectionTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, "Services"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesItems, {
        className: "services__items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesItem, {
        className: "services__items--item",
        active: this.state.service === "branding",
        onClick: function onClick() {
          return _this2.setState({
            service: 'branding'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, "Branding & Identity"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesItem, {
        className: "services__items--item",
        active: this.state.service === "content",
        onClick: function onClick() {
          return _this2.setState({
            service: 'content'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, "Content Creation"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesItem, {
        className: "services__items--item",
        active: this.state.service === "social",
        onClick: function onClick() {
          return _this2.setState({
            service: 'social'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, "Social Media Management"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesItem, {
        className: "services__items--item",
        active: this.state.service === "acquisition",
        onClick: function onClick() {
          return _this2.setState({
            service: 'acquisition'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, "Acquisition & Retention"))));
    }
  }]);

  return Services;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Services);

/***/ })

})
//# sourceMappingURL=5.5be3893629f406968ecd.hot-update.js.map