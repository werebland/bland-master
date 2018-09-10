webpackHotUpdate(1,{

/***/ "./node_modules/react-structured-data/dist/JSONLD.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JSONLD = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var JSONLD = function JSONLD(props) {
  var json = null;
  if (props.children) {
    var ChildClass = props.children.type;

    var _props$children$props = props.children.props,
        children = _props$children$props.children,
        type = _props$children$props.type,
        schema = _objectWithoutProperties(_props$children$props, ['children', 'type']);

    var firstChild = new ChildClass(props.children.props).getJSON(true, schema);
    json = ChildClass.name === 'JSONLDNodeCollection' ? _extends({ '@context': 'http://schema.org/' }, _defineProperty({}, type, firstChild)) : _extends({ '@context': 'http://schema.org/' }, firstChild);
  }

  return props.dangerouslyExposeHtml ? _react2.default.createElement('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: JSON.stringify(json) } }) : _react2.default.createElement(
    'script',
    { type: 'application/ld+json' },
    JSON.stringify(json)
  );
};

exports.JSONLD = JSONLD;
JSONLD.propTypes = {
  additionalType: _propTypes2.default.object,
  dangerouslyExposeHtml: _propTypes2.default.bool
};

JSONLD.defaultProps = {
  dangerouslyExposeHtml: false
};

exports.default = JSONLD;

/***/ }),

/***/ "./node_modules/react-structured-data/dist/JSONLDAbstractNode.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSONLDAbstractNode = function (_React$Component) {
  _inherits(JSONLDAbstractNode, _React$Component);

  function JSONLDAbstractNode() {
    _classCallCheck(this, JSONLDAbstractNode);

    return _possibleConstructorReturn(this, (JSONLDAbstractNode.__proto__ || Object.getPrototypeOf(JSONLDAbstractNode)).apply(this, arguments));
  }

  _createClass(JSONLDAbstractNode, [{
    key: 'getChildJSON',
    value: function getChildJSON(child, isCollection) {
      var ChildClass = child.type;

      var _child$props = child.props,
          children = _child$props.children,
          type = _child$props.type,
          id = _child$props.id,
          parentID = _child$props.parentID,
          schema = _objectWithoutProperties(_child$props, ['children', 'type', 'id', 'parentID']);

      if (!!parentID) schema = { '@id': parentID };
      if (!!id) schema = _extends({}, schema, {
        "@id": id
      });
      var newChildren = new ChildClass(child.props).getJSON(!!type || isCollection, schema);
      return !!type ? _extends(_defineProperty({}, type, newChildren)) : newChildren;
    }
  }, {
    key: 'parseChildren',
    value: function parseChildren() {
      var _this2 = this;

      var isCollection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.props.children) return {};
      /*
       * If a component has a single child, this.props.children is a Child object.
       * If a component has multiple children, this.props.children is an array of Child objects.
       */
      if (this.props.children.length > 0) {
        return this.props.children.map(function (child) {
          return _this2.getChildJSON(child, isCollection);
        });
      }
      return [this.getChildJSON(this.props.children, isCollection)];
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return JSONLDAbstractNode;
}(_react2.default.Component);

JSONLDAbstractNode.propTypes = {
  schema: _propTypes2.default.object,
  type: _propTypes2.default.string,
  id: _propTypes2.default.string,
  jsonldtype: _propTypes2.default.string
};
exports.default = JSONLDAbstractNode;

/***/ }),

/***/ "./node_modules/react-structured-data/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemas = __webpack_require__("./node_modules/react-structured-data/dist/schemas/index.js");

Object.keys(_schemas).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _schemas[key];
    }
  });
});

var _JSONLD = __webpack_require__("./node_modules/react-structured-data/dist/JSONLD.js");

Object.defineProperty(exports, 'JSONLD', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_JSONLD).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-structured-data/dist/schemas/AggregateRating.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _JSONLDAbstractNode2 = __webpack_require__("./node_modules/react-structured-data/dist/JSONLDAbstractNode.js");

var _JSONLDAbstractNode3 = _interopRequireDefault(_JSONLDAbstractNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AggregateRating = function (_JSONLDAbstractNode) {
  _inherits(AggregateRating, _JSONLDAbstractNode);

  function AggregateRating() {
    _classCallCheck(this, AggregateRating);

    return _possibleConstructorReturn(this, (AggregateRating.__proto__ || Object.getPrototypeOf(AggregateRating)).apply(this, arguments));
  }

  _createClass(AggregateRating, [{
    key: 'getJSON',
    value: function getJSON() {
      var isFirstChildNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var schema = arguments[1];

      var parseChildren = _get(AggregateRating.prototype.__proto__ || Object.getPrototypeOf(AggregateRating.prototype), 'parseChildren', this).call(this);
      var details = _extends({
        '@type': 'AggregateRating'
      }, schema);
      return isFirstChildNode ? _extends.apply(undefined, [details].concat(_toConsumableArray(parseChildren))) : _extends.apply(undefined, [{ aggregateRating: details }].concat(_toConsumableArray(parseChildren)));
    }
  }]);

  return AggregateRating;
}(_JSONLDAbstractNode3.default);

exports.default = AggregateRating;

/***/ }),

/***/ "./node_modules/react-structured-data/dist/schemas/Answer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _JSONLDAbstractNode2 = __webpack_require__("./node_modules/react-structured-data/dist/JSONLDAbstractNode.js");

var _JSONLDAbstractNode3 = _interopRequireDefault(_JSONLDAbstractNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Answer = function (_JSONLDAbstractNode) {
  _inherits(Answer, _JSONLDAbstractNode);

  function Answer() {
    _classCallCheck(this, Answer);

    return _possibleConstructorReturn(this, (Answer.__proto__ || Object.getPrototypeOf(Answer)).apply(this, arguments));
  }

  _createClass(Answer, [{
    key: 'getJSON',
    value: function getJSON() {
      var isFirstChildNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var schema = arguments[1];

      var parseChildren = _get(Answer.prototype.__proto__ || Object.getPrototypeOf(Answer.prototype), 'parseChildren', this).call(this);
      var details = _extends({
        '@type': 'Answer'
      }, schema);
      return isFirstChildNode ? _extends.apply(undefined, [details].concat(_toConsumableArray(parseChildren))) : _extends.apply(undefined, [{ suggestedAnswer: details }].concat(_toConsumableArray(parseChildren)));
    }
  }]);

  return Answer;
}(_JSONLDAbstractNode3.default);

exports.default = Answer;

/***/ }),

/***/ "./node_modules/react-structured-data/dist/schemas/Author.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _JSONLDAbstractNode2 = __webpack_require__("./node_modules/react-structured-data/dist/JSONLDAbstractNode.js");

var _JSONLDAbstractNode3 = _interopRequireDefault(_JSONLDAbstractNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Author = function (_JSONLDAbstractNode) {
  _inherits(Author, _JSONLDAbstractNode);

  function Author() {
    _classCallCheck(this, Author);

    return _possibleConstructorReturn(this, (Author.__proto__ || Object.getPrototypeOf(Author)).apply(this, arguments));
  }

  _createClass(Author, [{
    key: 'getJSON',
    value: function getJSON() {
      var isFirstChildNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var schema = arguments[1];

      var parseChildren = _get(Author.prototype.__proto__ || Object.getPrototypeOf(Author.prototype), 'parseChildren', this).call(this);
      var details = _extends({
        '@type': 'Person'
      }, schema);
      return isFirstChildNode ? _extends.apply(undefined, [details].concat(_toConsumableArray(parseChildren))) : _extends.apply(undefined, [{ author: details }].concat(_toConsumableArray(parseChildren)));
    }
  }]);

  return Author;
}(_JSONLDAbstractNode3.default);

exports.default = Author;

/***/ }),

/***/ "./node_modules/react-structured-data/dist/schemas/Generic.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _JSONLDAbstractNode2 = __webpack_require__("./node_modules/react-structured-data/dist/JSONLDAbstractNode.js");

var _JSONLDAbstractNode3 = _interopRequireDefault(_JSONLDAbstractNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChildNode = function (_JSONLDAbstractNode) {
  _inherits(ChildNode, _JSONLDAbstractNode);

  function ChildNode() {
    _classCallCheck(this, ChildNode);

    return _possibleConstructorReturn(this, (ChildNode.__proto__ || Object.getPrototypeOf(ChildNode)).apply(this, arguments));
  }

  _createClass(ChildNode, [{
    key: 'getJSON',
    value: function getJSON() {
      var isFirstChildNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var parseChildren = _get(ChildNode.prototype.__proto__ || Object.getPrototypeOf(ChildNode.prototype), 'parseChildren', this).call(this);
      var schema = this.props.schema;
      var details = {
        '@type': this.props.jsonldtype
      };

      return _extends.apply(undefined, [_extends({}, details, schema)].concat(_toConsumableArray(parseChildren)));
    }
  }]);

  return ChildNode;
}(_JSONLDAbstractNode3.default);

exports.default = ChildNode;

/***/ }),

/***/ "./node_modules/react-structured-data/dist/schemas/GenericCollection.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _JSONLDAbstractNode2 = __webpack_require__("./node_modules/react-structured-data/dist/JSONLDAbstractNode.js");

var _JSONLDAbstractNode3 = _interopRequireDefault(_JSONLDAbstractNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSONLDNodeCollection = function (_JSONLDAbstractNode) {
  _inherits(JSONLDNodeCollection, _JSONLDAbstractNode);

  function JSONLDNodeCollection() {
    _classCallCheck(this, JSONLDNodeCollection);

    return _possibleConstructorReturn(this, (JSONLDNodeCollection.__proto__ || Object.getPrototypeOf(JSONLDNodeCollection)).apply(this, arguments));
  }

  _createClass(JSONLDNodeCollection, [{
    key: 'getJSON',
    value: function getJSON() {
      if (!!this.props.children) {
        return _get(JSONLDNodeCollection.prototype.__proto__ || Object.getPrototypeOf(JSONLDNodeCollection.prototype), 'parseChildren', this).call(this, true);
      }
    }
  }]);

  return JSONLDNodeCollection;
}(_JSONLDAbstractNode3.default);

exports.default = JSONLDNodeCollection;

/***/ }),

/***/ "./node_modules/react-structured-data/dist/schemas/Graph.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _JSONLDAbstractNode2 = __webpack_require__("./node_modules/react-structured-data/dist/JSONLDAbstractNode.js");

var _JSONLDAbstractNode3 = _interopRequireDefault(_JSONLDAbstractNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Graph = function (_JSONLDAbstractNode) {
  _inherits(Graph, _JSONLDAbstractNode);

  function Graph() {
    _classCallCheck(this, Graph);

    return _possibleConstructorReturn(this, (Graph.__proto__ || Object.getPrototypeOf(Graph)).apply(this, arguments));
  }

  _createClass(Graph, [{
    key: 'getJSON',
    value: function getJSON() {
      var isFirstChildNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var schema = arguments[1];

      var parseChildren = _get(Graph.prototype.__proto__ || Object.getPrototypeOf(Graph.prototype), 'parseChildren', this).call(this, true);
      return _extends({ '@graph': parseChildren });
    }
  }]);

  return Graph;
}(_JSONLDAbstractNode3.default);

exports.default = Graph;

/***/ }),

/***/ "./node_modules/react-structured-data/dist/schemas/ItemReviewed.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _JSONLDAbstractNode2 = __webpack_require__("./node_modules/react-structured-data/dist/JSONLDAbstractNode.js");

var _JSONLDAbstractNode3 = _interopRequireDefault(_JSONLDAbstractNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemReviewed = function (_JSONLDAbstractNode) {
  _inherits(ItemReviewed, _JSONLDAbstractNode);

  function ItemReviewed() {
    _classCallCheck(this, ItemReviewed);

    return _possibleConstructorReturn(this, (ItemReviewed.__proto__ || Object.getPrototypeOf(ItemReviewed)).apply(this, arguments));
  }

  _createClass(ItemReviewed, [{
    key: 'getJSON',
    value: function getJSON() {
      var isFirstChildNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var schema = arguments[1];

      var parseChildren = _get(ItemReviewed.prototype.__proto__ || Object.getPrototypeOf(ItemReviewed.prototype), 'parseChildren', this).call(this, true);

      if (parseChildren.length > 1) {
        throw new Error('The <ItemReviewed /> component can only contain a single child.');
      }
      var details = _extends({}, parseChildren[0], schema);
      return isFirstChildNode ? _extends(details) : _extends({ itemReviewed: details });
    }
  }]);

  return ItemReviewed;
}(_JSONLDAbstractNode3.default);

exports.default = ItemReviewed;

/***/ }),

/***/ "./node_modules/react-structured-data/dist/schemas/Location.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _JSONLDAbstractNode2 = __webpack_require__("./node_modules/react-structured-data/dist/JSONLDAbstractNode.js");

var _JSONLDAbstractNode3 = _interopRequireDefault(_JSONLDAbstractNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Location = function (_JSONLDAbstractNode) {
  _inherits(Location, _JSONLDAbstractNode);

  function Location() {
    _classCallCheck(this, Location);

    return _possibleConstructorReturn(this, (Location.__proto__ || Object.getPrototypeOf(Location)).apply(this, arguments));
  }

  _createClass(Location, [{
    key: 'getJSON',
    value: function getJSON() {
      var isFirstChildNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var schema = arguments[1];

      var parseChildren = _get(Location.prototype.__proto__ || Object.getPrototypeOf(Location.prototype), 'parseChildren', this).call(this);
      var details = _extends({
        '@type': 'AdministrativeArea'
      }, schema);
      return isFirstChildNode ? _extends.apply(undefined, [details].concat(_toConsumableArray(parseChildren))) : _extends.apply(undefined, [{ locationCreated: details }].concat(_toConsumableArray(parseChildren)));
    }
  }]);

  return Location;
}(_JSONLDAbstractNode3.default);

exports.default = Location;

/***/ }),

/***/ "./node_modules/react-structured-data/dist/schemas/Product.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _JSONLDAbstractNode2 = __webpack_require__("./node_modules/react-structured-data/dist/JSONLDAbstractNode.js");

var _JSONLDAbstractNode3 = _interopRequireDefault(_JSONLDAbstractNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Product = function (_JSONLDAbstractNode) {
  _inherits(Product, _JSONLDAbstractNode);

  function Product() {
    _classCallCheck(this, Product);

    return _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).apply(this, arguments));
  }

  _createClass(Product, [{
    key: 'getJSON',
    value: function getJSON() {
      var isFirstChildNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var schema = arguments[1];

      var parseChildren = _get(Product.prototype.__proto__ || Object.getPrototypeOf(Product.prototype), 'parseChildren', this).call(this);
      var details = _extends({
        '@type': 'Product'
      }, schema);
      return isFirstChildNode ? _extends.apply(undefined, [details].concat(_toConsumableArray(parseChildren))) : _extends.apply(undefined, [{ product: details }].concat(_toConsumableArray(parseChildren)));
    }
  }]);

  return Product;
}(_JSONLDAbstractNode3.default);

exports.default = Product;

/***/ }),

/***/ "./node_modules/react-structured-data/dist/schemas/Question.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _JSONLDAbstractNode2 = __webpack_require__("./node_modules/react-structured-data/dist/JSONLDAbstractNode.js");

var _JSONLDAbstractNode3 = _interopRequireDefault(_JSONLDAbstractNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Question = function (_JSONLDAbstractNode) {
  _inherits(Question, _JSONLDAbstractNode);

  function Question() {
    _classCallCheck(this, Question);

    return _possibleConstructorReturn(this, (Question.__proto__ || Object.getPrototypeOf(Question)).apply(this, arguments));
  }

  _createClass(Question, [{
    key: 'getJSON',
    value: function getJSON() {
      var isFirstChildNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var schema = arguments[1];

      var parseChildren = _get(Question.prototype.__proto__ || Object.getPrototypeOf(Question.prototype), 'parseChildren', this).call(this);
      var details = _extends({
        '@type': 'Question'
      }, schema);
      return isFirstChildNode ? _extends.apply(undefined, [details].concat(_toConsumableArray(parseChildren))) : _extends.apply(undefined, [{ question: details }].concat(_toConsumableArray(parseChildren)));
    }
  }]);

  return Question;
}(_JSONLDAbstractNode3.default);

exports.default = Question;

/***/ }),

/***/ "./node_modules/react-structured-data/dist/schemas/Rating.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _JSONLDAbstractNode2 = __webpack_require__("./node_modules/react-structured-data/dist/JSONLDAbstractNode.js");

var _JSONLDAbstractNode3 = _interopRequireDefault(_JSONLDAbstractNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rating = function (_JSONLDAbstractNode) {
  _inherits(Rating, _JSONLDAbstractNode);

  function Rating() {
    _classCallCheck(this, Rating);

    return _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).apply(this, arguments));
  }

  _createClass(Rating, [{
    key: 'getJSON',
    value: function getJSON() {
      var isFirstChildNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var schema = arguments[1];

      var parseChildren = _get(Rating.prototype.__proto__ || Object.getPrototypeOf(Rating.prototype), 'parseChildren', this).call(this);
      var details = _extends({
        '@type': 'Rating'
      }, schema);
      return isFirstChildNode ? _extends.apply(undefined, [details].concat(_toConsumableArray(parseChildren))) : _extends.apply(undefined, [{ reviewRating: details }].concat(_toConsumableArray(parseChildren)));
    }
  }]);

  return Rating;
}(_JSONLDAbstractNode3.default);

exports.default = Rating;

/***/ }),

/***/ "./node_modules/react-structured-data/dist/schemas/Review.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _JSONLDAbstractNode2 = __webpack_require__("./node_modules/react-structured-data/dist/JSONLDAbstractNode.js");

var _JSONLDAbstractNode3 = _interopRequireDefault(_JSONLDAbstractNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Review = function (_JSONLDAbstractNode) {
  _inherits(Review, _JSONLDAbstractNode);

  function Review() {
    _classCallCheck(this, Review);

    return _possibleConstructorReturn(this, (Review.__proto__ || Object.getPrototypeOf(Review)).apply(this, arguments));
  }

  _createClass(Review, [{
    key: 'getJSON',
    value: function getJSON() {
      var isFirstChildNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var schema = arguments[1];

      var parseChildren = _get(Review.prototype.__proto__ || Object.getPrototypeOf(Review.prototype), 'parseChildren', this).call(this);
      var details = _extends({
        '@type': 'Review'
      }, schema);
      return _extends.apply(undefined, [details].concat(_toConsumableArray(parseChildren)));
    }
  }]);

  return Review;
}(_JSONLDAbstractNode3.default);

exports.default = Review;

/***/ }),

/***/ "./node_modules/react-structured-data/dist/schemas/Reviews.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _JSONLDAbstractNode2 = __webpack_require__("./node_modules/react-structured-data/dist/JSONLDAbstractNode.js");

var _JSONLDAbstractNode3 = _interopRequireDefault(_JSONLDAbstractNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reviews = function (_JSONLDAbstractNode) {
  _inherits(Reviews, _JSONLDAbstractNode);

  function Reviews() {
    _classCallCheck(this, Reviews);

    return _possibleConstructorReturn(this, (Reviews.__proto__ || Object.getPrototypeOf(Reviews)).apply(this, arguments));
  }

  _createClass(Reviews, [{
    key: 'getJSON',
    value: function getJSON() {
      return _get(Reviews.prototype.__proto__ || Object.getPrototypeOf(Reviews.prototype), 'parseChildren', this).call(this);
    }
  }]);

  return Reviews;
}(_JSONLDAbstractNode3.default);

exports.default = Reviews;

/***/ }),

/***/ "./node_modules/react-structured-data/dist/schemas/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AggregateRating = __webpack_require__("./node_modules/react-structured-data/dist/schemas/AggregateRating.js");

Object.defineProperty(exports, 'AggregateRating', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AggregateRating).default;
  }
});

var _Author = __webpack_require__("./node_modules/react-structured-data/dist/schemas/Author.js");

Object.defineProperty(exports, 'Author', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Author).default;
  }
});

var _Generic = __webpack_require__("./node_modules/react-structured-data/dist/schemas/Generic.js");

Object.defineProperty(exports, 'Generic', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Generic).default;
  }
});

var _GenericCollection = __webpack_require__("./node_modules/react-structured-data/dist/schemas/GenericCollection.js");

Object.defineProperty(exports, 'GenericCollection', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GenericCollection).default;
  }
});

var _Location = __webpack_require__("./node_modules/react-structured-data/dist/schemas/Location.js");

Object.defineProperty(exports, 'Location', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Location).default;
  }
});

var _Product = __webpack_require__("./node_modules/react-structured-data/dist/schemas/Product.js");

Object.defineProperty(exports, 'Product', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Product).default;
  }
});

var _Rating = __webpack_require__("./node_modules/react-structured-data/dist/schemas/Rating.js");

Object.defineProperty(exports, 'Rating', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Rating).default;
  }
});

var _Review = __webpack_require__("./node_modules/react-structured-data/dist/schemas/Review.js");

Object.defineProperty(exports, 'Review', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Review).default;
  }
});

var _Reviews = __webpack_require__("./node_modules/react-structured-data/dist/schemas/Reviews.js");

Object.defineProperty(exports, 'Reviews', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Reviews).default;
  }
});

var _ItemReviewed = __webpack_require__("./node_modules/react-structured-data/dist/schemas/ItemReviewed.js");

Object.defineProperty(exports, 'ItemReviewed', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ItemReviewed).default;
  }
});

var _Question = __webpack_require__("./node_modules/react-structured-data/dist/schemas/Question.js");

Object.defineProperty(exports, 'Question', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Question).default;
  }
});

var _Answer = __webpack_require__("./node_modules/react-structured-data/dist/schemas/Answer.js");

Object.defineProperty(exports, 'Answer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Answer).default;
  }
});

var _Graph = __webpack_require__("./node_modules/react-structured-data/dist/schemas/Graph.js");

Object.defineProperty(exports, 'Graph', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Graph).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./pages/_document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__("./node_modules/next/document.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_structured_data__ = __webpack_require__("./node_modules/react-structured-data/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_structured_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_structured_data__);
var _jsxFileName = "/Users/Chris/bland-ultra/pages/_document.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("html", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Head"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "Bland | A Halifax Agency Creating Tasteful Presences"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/static/apple-touch-icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/static/favicon-32x32.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/static/favicon-16x16.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "manifest",
        href: "/static/site.webmanifest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "msapplication-TileColor",
        content: "#da532c",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "theme-color",
        content: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:type",
        content: "business.business",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:title",
        content: "Bland Marketing Agency",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:url",
        content: "https://bland.marketing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:image",
        content: "https://bland.marketing/static/bland__square.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "business:contact_data:street_address",
        content: "22A Sunnybrae Ave",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "business:contact_data:locality",
        content: "Halifax",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "business:contact_data:region",
        content: "Nova Scotia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "business:contact_data:postal_code",
        content: "B3N 2G1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "business:contact_data:country_name",
        content: "Canada",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "description",
        content: "A Halifax-based marketing agency devoted to first impressions with a focus on the F&B industry. Let us buy you a beer.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), this.props.styleTags), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("body", {
        style: {
          margin: 0,
          padding: 0,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Main"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["NextScript"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;
      var sheet = new __WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* ServerStyleSheet */]();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, _extends({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          })));
        };
      });
      var styleTags = sheet.getStyleElement();
      return _objectSpread({}, page, {
        styleTags: styleTags
      });
    }
  }]);

  return MyDocument;
}(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_document")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.016ba294a902424b5e18.hot-update.js.map