(self["webpackChunkgames_ui"] = self["webpackChunkgames_ui"] || []).push([["src_components_GameContainer_CardContainer_UnoCard_jsx-src_components_Model_Uno_js-src_compon-6afcde"],{

/***/ "./src/components/GameContainer/CardContainer/UnoCard.jsx":
/*!****************************************************************!*\
  !*** ./src/components/GameContainer/CardContainer/UnoCard.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UnoCard)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var UnoCard = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(UnoCard, _Component);

  var _super = _createSuper(UnoCard);

  function UnoCard() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UnoCard);

    return _super.call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UnoCard, [{
    key: "getText",
    value: function getText(text, isIcon) {
      return text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "bg-white mt-auto mb-auto p-2 d-flex",
        style: text != "+4" ? {
          width: '120%',
          marginLeft: '-10%',
          borderRadius: '10px',
          borderBottomLeftRadius: '100%',
          borderTopRightRadius: '100%'
        } : {}
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("span", {
        className: "position-relative m-auto font-weight-bold",
        style: {
          fontSize: isIcon ? '25px' : '30px',
          letterSpacing: '-3px'
        }
      }, text));
    }
  }, {
    key: "getBlackCard",
    value: function getBlackCard(value) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "position-relative w-100 h-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "position-absolute d-flex flex-column flex-wrap h-100 w-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "card bg-warning h-50 w-50 rounded-0"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "card bg-danger h-50 w-50 rounded-0"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "card bg-primary h-50 w-50 rounded-0"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "card bg-success h-50 w-50 rounded-0"
      })), this.getText(value));
    }
  }, {
    key: "getCardDisplayValue",
    value: function getCardDisplayValue(type) {
      if (type.match(/[0-9]/) != null || type == '') {
        return this.getText(type);
      }

      switch (type) {
        case 'DRAW_TWO_CARDS':
          return this.getText('+2', true);

        case 'REVERSE_CARD':
          return this.getText( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
            icon: 'sync-alt',
            fontSize: "50px"
          }), true);

        case 'SKIP_CARD':
          return this.getText( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
            icon: 'ban'
          }), true);

        case 'WILD_CARD':
          return this.getBlackCard(null);

        case 'WILD_CARD_DRAW_FOUR_CARDS':
          return this.getBlackCard('+4', true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          card = _this$props.card,
          className = _this$props.className,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        onClick: disabled != true && typeof onClick == "function" ? function () {
          return onClick(card);
        } : function () {},
        className: "btn mb-2 d-flex card p-1 bg-".concat(card.color, " text-").concat(card.color != 'dark' ? card.color : 'white', " overflow-hidden ").concat(className),
        style: {
          height: '70px',
          width: '50px',
          lineHeight: 1,
          marginRight: '-5px',
          boxShadow: '-5px 5px 15px black'
        }
      }, this.getCardDisplayValue(card.type));
    }
  }]);

  return UnoCard;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);



/***/ }),

/***/ "./src/components/Model/Uno.js":
/*!*************************************!*\
  !*** ./src/components/Model/Uno.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Request */ "./src/components/Model/Request.js");




var _default = /*#__PURE__*/function () {
  function _default() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, null, [{
    key: "submitChosenCard",
    value: function submitChosenCard(roomID, data) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("uno/".concat(roomID, "/submit"), data).then(function (resp) {
          return resolve(resp);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "takeCard",
    value: function takeCard(roomID) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("uno/".concat(roomID, "/take")).then(function (resp) {
          return resolve(resp);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "passCard",
    value: function passCard(roomID) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("uno/".concat(roomID, "/pass")).then(function (resp) {
          return resolve(resp);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/components/UtilsContainer/AbstractModal.jsx":
/*!*********************************************************!*\
  !*** ./src/components/UtilsContainer/AbstractModal.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styles_modals_abstract_modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/modals/abstract-modal.scss */ "./assets/styles/modals/abstract-modal.scss");
/* harmony import */ var styles_modals_abstract_modal_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_modals_abstract_modal_scss__WEBPACK_IMPORTED_MODULE_6__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var AbstractModal = /*#__PURE__*/function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(AbstractModal, _React$PureComponent);

  var _super = _createSuper(AbstractModal);

  function AbstractModal() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AbstractModal);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AbstractModal, [{
    key: "getCloseButton",
    value: function getCloseButton(flag) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("button", {
        className: "sg-modal-close-btn opacity-".concat(flag ? 1 : 0),
        onClick: this.props.onClose
      }, "\xD7");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          header = _this$props.header,
          body = _this$props.body,
          show = _this$props.show,
          hideClose = _this$props.hideClose;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "sg-modal",
        "data-show": show
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "sg-modal-content-outer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "sg-modal-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "sg-modal-header"
      }, this.getCloseButton(false), header, this.getCloseButton(!hideClose)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "sg-modal-body"
      }, body))));
    }
  }]);

  return AbstractModal;
}(react__WEBPACK_IMPORTED_MODULE_5__.PureComponent);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/modals/abstract-modal.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/modals/abstract-modal.scss ***!
  \*******************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".sg-modal {\n  position: fixed;\n  z-index: -1;\n  opacity: 0;\n  transition: z-index 0.5s, opacity 0.6s;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.sg-modal .sg-modal-content-outer {\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  display: flex;\n  padding: 5px;\n}\n.sg-modal .sg-modal-content {\n  margin: auto;\n  background: #3a0455;\n  border-radius: 10px;\n  box-shadow: 0 0 5px white;\n}\n.sg-modal .sg-modal-content .sg-modal-header {\n  position: relative;\n  padding: 5px;\n  border-bottom: 1px solid white;\n  color: white;\n  text-align: center;\n  display: flex;\n}\n.sg-modal .sg-modal-content .sg-modal-header .sg-modal-close-btn {\n  padding: 0;\n  height: 20px;\n  width: 20px;\n  background: #da5454;\n  font-size: 12px;\n  border-radius: 100%;\n  color: white;\n  text-align: center;\n  margin: auto;\n}\n.sg-modal .sg-modal-content .sg-modal-body {\n  padding: 10px;\n}\n\n.sg-modal[data-show=true] {\n  z-index: 100;\n  opacity: 1;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./assets/styles/modals/abstract-modal.scss":
/*!**************************************************!*\
  !*** ./assets/styles/modals/abstract-modal.scss ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./abstract-modal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/modals/abstract-modal.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

}]);
//# sourceMappingURL=bundle.src_components_GameContainer_CardContainer_UnoCard_jsx-src_components_Model_Uno_js-src_compon-6afcde.js.map