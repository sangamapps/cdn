(self["webpackChunkgames_ui"] = self["webpackChunkgames_ui"] || []).push([["src_components_GameContainer_PlayerContainer_Player_jsx"],{

/***/ "./src/components/GameContainer/PlayerContainer/Player.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/GameContainer/PlayerContainer/Player.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var Model_Game__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Model/Game */ "./src/components/Model/Game.js");
/* harmony import */ var Utils_Game__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Utils/Game */ "./src/components/Utils/Game.js");
/* harmony import */ var styles_player_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styles/player.scss */ "./assets/styles/player.scss");
/* harmony import */ var styles_player_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styles_player_scss__WEBPACK_IMPORTED_MODULE_11__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var Player = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Player, _Component);

  var _super = _createSuper(Player);

  function Player() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Player);

    _this = _super.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "nudgePlayer", function () {
      var _this$props = _this.props,
          isMe = _this$props.isMe,
          amIAdmin = _this$props.amIAdmin;
      if (isMe || !amIAdmin) return;
      var _this$props2 = _this.props,
          gameName = _this$props2.gameName,
          gameId = _this$props2.gameId,
          player = _this$props2.player;
      Model_Game__WEBPACK_IMPORTED_MODULE_9__["default"].nudgePlayer(gameName, gameId, player._id)["catch"](_this.handleError);
    });

    _this.handleError = Utils_Game__WEBPACK_IMPORTED_MODULE_10__["default"].handleError.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Player, [{
    key: "getPlayerBorderColor",
    value: function getPlayerBorderColor() {
      return "sg-border-".concat(this.props.isMe ? 'warning' : 'primary');
    }
  }, {
    key: "isPlayerCurrentPlayer",
    value: function isPlayerCurrentPlayer() {
      var _this$props3 = this.props,
          currentPlayer = _this$props3.currentPlayer,
          player = _this$props3.player;
      return currentPlayer && currentPlayer._id == player._id;
    }
  }, {
    key: "getPlayerBtn",
    value: function getPlayerBtn() {
      return "sg-btn".concat(this.isPlayerCurrentPlayer() ? '-light' : '');
    }
  }, {
    key: "getPlayerBtnClassName",
    value: function getPlayerBtnClassName() {
      return ['player-card', this.getPlayerBtn(), this.getPlayerBorderColor()].join(' ');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          player = _this$props4.player,
          isMe = _this$props4.isMe,
          playerChosenCard = _this$props4.playerChosenCard,
          CardComponent = _this$props4.CardComponent,
          hideInfo = _this$props4.hideInfo,
          isPlayerWon = _this$props4.isPlayerWon,
          additionalInfo = _this$props4.additionalInfo;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "player-card-outer",
        "data-player-id": player._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("button", {
        className: this.getPlayerBtnClassName(),
        onClick: this.nudgePlayer,
        title: player.name
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "flex-column"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {
        icon: 'user',
        className: "player-icon"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "player-name"
      }, player.name, isMe && ' (You)'), additionalInfo && additionalInfo(), hideInfo != true && (isPlayerWon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("span", {
        className: "px-2 m-auto bg-success rounded text-white"
      }, "Won") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "text-center",
        style: {
          fontSize: '10px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("b", null, "(", player.cardsCount, ")")), CardComponent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "game-player-selected-card-back"
      }, playerChosenCard && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(CardComponent, {
        card: playerChosenCard,
        className: 'game-player-selected-card game-player-selected-card-force'
      })))))));
    }
  }]);

  return Player;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);



/***/ }),

/***/ "./src/components/Model/Game.js":
/*!**************************************!*\
  !*** ./src/components/Model/Game.js ***!
  \**************************************/
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
    key: "getGameInfo",
    value: function getGameInfo(gameName, roomId) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].get("game/".concat(roomId, "/info"), {
          gameName: gameName
        }).then(function (resp) {
          return resolve(resp);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "startGame",
    value: function startGame(gameName, roomID) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("".concat(gameName, "/").concat(roomID, "/start")).then(function (resp) {
          return resolve(resp);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "restartGame",
    value: function restartGame(gameName, roomID) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("game/".concat(roomID, "/restart"), {
          gameName: gameName
        }).then(function (resp) {
          return resolve(resp);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "leaveGame",
    value: function leaveGame(gameName, roomID) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("".concat(gameName, "/").concat(roomID, "/leave")).then(function (resp) {
          return resolve(resp);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(gameName, roomID, text) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("game/".concat(roomID, "/message"), {
          gameName: gameName,
          text: text
        }).then(function (resp) {
          return resolve(resp);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "nudgePlayer",
    value: function nudgePlayer(gameName, roomID, playerId) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("game/".concat(roomID, "/nudge"), {
          gameName: gameName,
          playerId: playerId
        }).then(function (resp) {
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

/***/ "./src/components/Utils/Game.js":
/*!**************************************!*\
  !*** ./src/components/Utils/Game.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


function playAudio(selector) {
  $("#".concat(selector)).trigger('play');
}

function playNewNotify() {
  playAudio('new-notify');
}

function playErrorNotify() {
  playAudio('error-notify');
}

function playLightNotify() {
  playAudio('light-notify');
}

function playBuzzNotify() {
  playAudio('buzz-notify');
}

function resetStateGetGameInfo() {
  this.setState(this.getInitialValues(), this.props.getGameInfo());
}

function resetStateUpdateGameInfo(gameData) {
  var _this = this;

  this.setState(this.getInitialValues(), function () {
    return _this.props.updateGameInfo(gameData);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  audios: ["new-notify", "error-notify", "light-notify", "buzz-notify"],
  playNewNotify: playNewNotify,
  playErrorNotify: playErrorNotify,
  playLightNotify: playLightNotify,
  playBuzzNotify: playBuzzNotify,
  vibrate: function vibrate() {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
    window.navigator.vibrate(time);
  },
  resetStateGetGameInfo: resetStateGetGameInfo,
  resetStateUpdateGameInfo: resetStateUpdateGameInfo,
  handleError: function handleError(error) {
    playErrorNotify();
    var message = error.message || 'Error Occurred';
    react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(message, {
      toastId: message
    });
    this.setState(this.getInitialValues());
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/player.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/player.scss ***!
  \****************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".player-card-outer {\n  margin: 10px auto;\n}\n.player-card-outer .player-card {\n  width: 70px;\n  margin: auto 5px;\n  border-radius: 5px !important;\n}\n.player-card-outer .player-name,\n.player-card-outer .player-additonal-info {\n  font-weight: bold;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.player-card-outer .player-icon {\n  margin: 5px auto;\n  font-size: 15px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./assets/styles/player.scss":
/*!***********************************!*\
  !*** ./assets/styles/player.scss ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./player.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/player.scss");

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
//# sourceMappingURL=bundle.src_components_GameContainer_PlayerContainer_Player_jsx.js.map