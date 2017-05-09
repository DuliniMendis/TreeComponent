'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TreeComponent = require('./TreeComponent');

var _TreeComponent2 = _interopRequireDefault(_TreeComponent);

require('./App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.handleClick = function (evt) {};

    _this.state = {
      data: [{
        id: 0,
        value: 'roles',
        name: 'Roles',
        list: [{
          id: 4,
          value: 'prospective',
          name: 'Prospective'
        }, {
          id: 5,
          value: 'active',
          name: 'Active',
          list: [{
            id: 12,
            value: 'urgent',
            name: 'Urgent'
          }, {
            id: 12,
            value: 'other',
            name: 'Other'
          }]
        }, {
          id: 6,
          value: 'withdrawn',
          name: 'Withdrawn',
          list: []
        }, {
          id: 7,
          value: 'placed',
          name: 'Placed'
        }, {
          id: 8,
          value: 'deleted',
          name: 'Deleted'
        }]
      }, {
        id: 1,
        value: 'contacts',
        name: 'Contacts',
        list: [{
          id: 9,
          value: 'intern',
          name: 'Interns'
        }, {
          id: 10,
          value: 'company',
          name: 'Companies'
        }, {
          id: 11,
          value: 'education',
          name: 'Education'
        }]
      }, {
        id: 2,
        value: 'messages',
        name: 'Messages',
        list: []
      }, {
        id: 3,
        value: 'admin',
        name: 'Admin',
        list: []
      }]
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      var classNames = {
        wrapperName: 'tree-wrapper',
        itemName: 'tree-item'
      };

      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(_TreeComponent2.default, { data: this.state.data, classNames: classNames, handleClick: this.handleClick })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;