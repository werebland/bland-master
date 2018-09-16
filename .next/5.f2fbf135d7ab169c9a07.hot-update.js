webpackHotUpdate(5,{

/***/ "./components/Contact.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_floating_label_react__ = __webpack_require__("./node_modules/floating-label-react/dist/floating-label-react.es.js");
var _jsxFileName = "/Users/Chris/bland-ultra/components/Contact.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ContactWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].article.withConfig({
  displayName: "Contact__ContactWrapper",
  componentId: "sc-10vz4cd-0"
})(["width:25vw;min-width:330px;height:auto;position:absolute;left:72px;top:72px;background:#fff;box-shadow:0 2px 16px -2px rgba(159,159,159,0.32);@media all and (max-width:770px){position:relative;left:0;right:0;margin:auto;}"]);
var ContactHeader = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].h3.withConfig({
  displayName: "Contact__ContactHeader",
  componentId: "sc-10vz4cd-1"
})(["width:100%;padding:24px 0;background:#0f0f0f;color:#fff;font-size:1.5rem;font-weight:500;margin:0;display:flex;align-items:center;justify-content:center;"]);
var ContactForm = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].form.withConfig({
  displayName: "Contact__ContactForm",
  componentId: "sc-10vz4cd-2"
})(["width:100%;padding:24px;box-sizing:border-box;display:flex;flex-flow:column nowrap;& label input{width:100%;margin-bottom:8px;}& label textarea{width:100%;height:120px;margin-bottom:24px;}& input:-webkit-autofill,& input:-webkit-autofill:hover,& input:-webkit-autofill:focus & textarea:-webkit-autofill,& textarea:-webkit-autofill:hover & textarea:-webkit-autofill:focus,& select:-webkit-autofill,& select:-webkit-autofill:hover,& select:-webkit-autofill:focus{-webkit-box-shadow:0 0 0px 1000px #fff inset;}"]);
var ContactFormRow = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "Contact__ContactFormRow",
  componentId: "sc-10vz4cd-3"
})(["width:100%;display:flex;flex-flow:row nowrap;justify-content:space-between;& label{width:calc(50% - 12px);}& label input{width:100%;}& label textarea{width:100%;}"]);
var ContactFormFieldset = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].fieldset.withConfig({
  displayName: "Contact__ContactFormFieldset",
  componentId: "sc-10vz4cd-4"
})(["border:0;"]);
var StyledSubmitWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "Contact__StyledSubmitWrapper",
  componentId: "sc-10vz4cd-5"
})(["width:100%;height:56px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;appearance:none;color:#0f0f0f;font-size:1.5rem;font-weight:400;position:relative;z-index:1;cursor:pointer;text-decoration:none;position:relative;"]);
var StyledSubmit = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].button.withConfig({
  displayName: "Contact__StyledSubmit",
  componentId: "sc-10vz4cd-6"
})(["position:absolute;width:100%;height:100%;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;appearance:none;border:0;background-image:none;background:transparent;color:#0f0f0f;font-size:1.25rem;font-weight:400;cursor:pointer;border:2px solid #0f0f0f;& i{transition:0.2s ease-out all;transform:translateX(0);font-size:2.25rem;}&:hover i{transform:translateX(4px);}"]);

var Contact =
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactWrapper, {
        className: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactHeader, {
        className: "contact__header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "Let us buy you a beer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactForm, {
        name: "contact",
        className: "contact__form",
        method: "post",
        "data-netlify": "true",
        "data-netlify-honeypot": "bot-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactFormRow, {
        className: "contact__form--row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "hidden",
        name: "form-name",
        value: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "bot-field",
        hidden: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_floating_label_react__["a" /* default */], {
        type: "text",
        name: "fname",
        placeholder: "First name",
        required: true,
        styles: {
          floating: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["b" /* floatingStyles */], {
            color: '#9f9f9f'
          }),
          focus: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["c" /* focusStyles */], {
            borderColor: '#0f0f0f'
          }),
          input: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["d" /* inputStyles */], {
            borderBottomColor: '#9f9f9f',
            width: '100%'
          }),
          label: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["e" /* labelStyles */], {
            color: '#9f9f9f'
          })
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_floating_label_react__["a" /* default */], {
        type: "text",
        name: "lname",
        placeholder: "Last name",
        required: true,
        styles: {
          floating: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["b" /* floatingStyles */], {
            color: '#9f9f9f'
          }),
          focus: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["c" /* focusStyles */], {
            borderColor: '#0f0f0f'
          }),
          input: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["d" /* inputStyles */], {
            borderBottomColor: '#9f9f9f',
            width: '100%'
          }),
          label: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["e" /* labelStyles */], {
            color: '#9f9f9f'
          })
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_floating_label_react__["a" /* default */], {
        type: "email",
        placeholder: "Email",
        name: "email",
        required: true,
        styles: {
          floating: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["b" /* floatingStyles */], {
            color: '#9f9f9f'
          }),
          focus: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["c" /* focusStyles */], {
            borderColor: '#0f0f0f'
          }),
          input: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["d" /* inputStyles */], {
            borderBottomColor: '#9f9f9f',
            width: '100%'
          }),
          label: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["e" /* labelStyles */], {
            color: '#9f9f9f'
          })
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_floating_label_react__["a" /* default */], {
        type: "text",
        placeholder: "Favorite Halifax hangout spot",
        name: "hangout",
        required: true,
        styles: {
          floating: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["b" /* floatingStyles */], {
            color: '#9f9f9f'
          }),
          focus: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["c" /* focusStyles */], {
            borderColor: '#0f0f0f'
          }),
          input: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["d" /* inputStyles */], {
            borderBottomColor: '#9f9f9f',
            width: '100%'
          }),
          label: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["e" /* labelStyles */], {
            color: '#9f9f9f'
          })
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_floating_label_react__["a" /* default */], {
        type: "text",
        placeholder: "What are you working on? (AirBnB for pets, a queso truck, etc)",
        name: "message",
        required: true,
        element: "textarea",
        rows: "5",
        styles: {
          floating: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["b" /* floatingStyles */], {
            color: '#9f9f9f'
          }),
          focus: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["c" /* focusStyles */], {
            borderColor: '#0f0f0f'
          }),
          input: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["d" /* inputStyles */], {
            borderBottomColor: '#9f9f9f',
            width: '100%'
          }),
          label: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_2_floating_label_react__["e" /* labelStyles */], {
            color: '#9f9f9f'
          })
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledSubmitWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledSubmit, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, "Submit", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, "chevron_right")))));
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Contact);

/***/ })

})
//# sourceMappingURL=5.f2fbf135d7ab169c9a07.hot-update.js.map