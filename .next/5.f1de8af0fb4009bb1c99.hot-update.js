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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ContactWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].article.withConfig({
  displayName: "Contact__ContactWrapper",
  componentId: "sc-10vz4cd-0"
})(["width:25vw;min-width:360px;height:auto;position:absolute;right:72px;top:72px;background:#fff;box-shadow:0 2px 16px -2px rgba(159,159,159,0.32);"]);
var ContactHeader = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].h3.withConfig({
  displayName: "Contact__ContactHeader",
  componentId: "sc-10vz4cd-1"
})(["width:100%;padding:24px 0;background:#0f0f0f;color:#fff;font-size:1.5rem;font-weight:500;margin:0;display:flex;align-items:center;justify-content:center;"]);
var ContactForm = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].form.withConfig({
  displayName: "Contact__ContactForm",
  componentId: "sc-10vz4cd-2"
})(["width:100%;padding:24px;box-sizing:border-box;display:flex;flex-flow:column nowrap;"]);
var ContactFormRow = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "Contact__ContactFormRow",
  componentId: "sc-10vz4cd-3"
})(["width:100%;display:flex;flex-flow:row nowrap;& input{display:inline-block;}"]);
var ContactFormFieldset = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].fieldset.withConfig({
  displayName: "Contact__ContactFormFieldset",
  componentId: "sc-10vz4cd-4"
})(["border:0;"]);

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
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactHeader, {
        className: "contact__header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Let us buy you a beer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactForm, {
        className: "contact__form",
        netlify: true,
        method: "POST",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactFormFieldset, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContactFormRow, {
        className: "contact__form--row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_floating_label_react__["a" /* default */], {
        type: "text",
        name: "fname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_floating_label_react__["a" /* default */], {
        type: "text",
        name: "lname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "email",
        name: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      })));
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Contact);

/***/ }),

/***/ "./node_modules/floating-label-react/dist/floating-label-react.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export labelStyles */
/* unused harmony export spanStyles */
/* unused harmony export floatingStyles */
/* unused harmony export inputStyles */
/* unused harmony export focusStyles */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};











var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var labelStyles = {
  boxSizing: "border-box",
  display: "inline-block",
  fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  paddingTop: 5,
  position: "relative"
};

var spanStyles = {
  boxSizing: "border-box",
  fontSize: "1rem",
  left: 0,
  padding: "17px 0 13px 0",
  pointerEvents: "none",
  position: "absolute",
  top: 0,
  transition: "font-size 200ms, padding 200ms",
  zIndex: 1
};

var floatingStyles = {
  fontSize: "0.625rem",
  padding: 0
};

var inputStyles = {
  border: "none",
  borderBottom: "1px solid black",
  boxSizing: "border-box",
  fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  fontSize: "1rem",
  padding: "12px 0 8px 0"
};

var focusStyles = {
  borderColor: "blue",
  outline: "none"
};

var FloatingLabel = function (_React$Component) {
  inherits(FloatingLabel, _React$Component);

  function FloatingLabel() {
    var _temp, _this, _ret;

    classCallCheck(this, FloatingLabel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      floating: false,
      focused: false,
      value: _this.props.value
    }, _this.handleChange = function (evt) {
      var value = evt.target.value;

      _this.props.onChange(evt);

      _this.setState({
        value: value
      });
    }, _this.handleFocusChange = function (evt) {
      evt.type === "focus" ? _this.props.onFocus(evt) : _this.props.onBlur(evt);

      _this.setState({
        focused: !_this.state.focused
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  FloatingLabel.prototype.isFloating = function isFloating(value, focused) {
    return value.length || focused;
  };

  FloatingLabel.prototype.render = function render() {
    var _state = this.state,
        value = _state.value,
        focused = _state.focused;
    var styles = this.props.styles;

    var floating = this.isFloating(value, focused);
    var Node = this.props.element;
    var floatingStyle = floating && Object.assign({}, floatingStyles, styles.floating);
    var focusStyle = focused && Object.assign({}, focusStyles, styles.focus);
    var labelStyle = Object.assign({}, labelStyles, styles.label);
    var spanStyle = Object.assign({}, spanStyles, styles.span, floatingStyle);
    var inputStyle = Object.assign({}, inputStyles, styles.input, focusStyle);

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "label",
      { htmlFor: this.props.id, style: labelStyle },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "span",
        { style: spanStyle },
        this.props.placeholder
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Node, {
        autoCapitalize: this.props.autoCapitalize,
        autoComplete: this.props.autoComplete,
        autoFocus: this.props.autoFocus,
        defaultValue: this.props.value,
        id: this.props.id,
        inputMode: this.props.inputMode,
        max: this.props.max,
        maxLength: this.props.maxLength,
        min: this.props.min,
        minLength: this.props.minLength,
        name: this.props.name,
        onBlur: this.handleFocusChange,
        onChange: this.handleChange,
        onFocus: this.handleFocusChange,
        pattern: this.props.pattern,
        readOnly: this.props.readOnly,
        required: this.props.required,
        spellCheck: this.props.spellCheck,
        step: this.props.step,
        style: inputStyle,
        type: this.props.type
      })
    );
  };

  return FloatingLabel;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

FloatingLabel.defaultProps = {
  autoFocus: false,
  disabled: false,
  element: "input",
  name: "",
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  placeholder: "",
  readOnly: false,
  required: false,
  step: 1,
  styles: {},
  type: "text",
  value: ""
};

/* harmony default export */ __webpack_exports__["a"] = (FloatingLabel);


/***/ })

})
//# sourceMappingURL=5.f1de8af0fb4009bb1c99.hot-update.js.map