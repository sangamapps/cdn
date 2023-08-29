(self["webpackChunkgames_ui"] = self["webpackChunkgames_ui"] || []).push([["src_components_GameContainer_UnoContainer_UnoContainer_jsx"],{

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

/***/ "./src/components/GameContainer/UnoContainer/UnoContainer.jsx":
/*!********************************************************************!*\
  !*** ./src/components/GameContainer/UnoContainer/UnoContainer.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _PlayerContainer_Player_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PlayerContainer/Player.jsx */ "./src/components/GameContainer/PlayerContainer/Player.jsx");
/* harmony import */ var UtilsContainer_AbstractModal_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! UtilsContainer/AbstractModal.jsx */ "./src/components/UtilsContainer/AbstractModal.jsx");
/* harmony import */ var Model_Game__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Model/Game */ "./src/components/Model/Game.js");
/* harmony import */ var Utils_Game__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Utils/Game */ "./src/components/Utils/Game.js");
/* harmony import */ var Model_Uno__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Model/Uno */ "./src/components/Model/Uno.js");
/* harmony import */ var _CardContainer_UnoCard_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../CardContainer/UnoCard.jsx */ "./src/components/GameContainer/CardContainer/UnoCard.jsx");
/* provided dependency */ var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var GAME_NAME = 'uno';

var UnoContainer = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(UnoContainer, _Component);

  var _super = _createSuper(UnoContainer);

  function UnoContainer() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UnoContainer);

    _this = _super.call(this);
    _this.state = _.assign({}, _this.getInitialValues());
    _this.updateReceived = _this.updateReceived.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.setUnoButtonClicked = _this.setUnoButtonClicked.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.setChosenCard = _this.setChosenCard.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.submitChosenCard = _this.submitChosenCard.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.takeCard = _this.takeCard.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.passCard = _this.passCard.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.restartGame = _this.restartGame.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.hideColorChooseModal = _this.hideColorChooseModal.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.resetStateUpdateGameInfo = Utils_Game__WEBPACK_IMPORTED_MODULE_10__["default"].resetStateUpdateGameInfo.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleError = Utils_Game__WEBPACK_IMPORTED_MODULE_10__["default"].handleError.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UnoContainer, [{
    key: "getInitialValues",
    value: function getInitialValues() {
      return {
        showColorChooseModal: false,
        isUnoClicked: false,
        chosenCard: null
      };
    }
  }, {
    key: "listPlayers",
    value: function listPlayers() {
      var _this2 = this;

      var players = this.props.game.players;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex flex-wrap px-1 mt-2"
      }, players.map(function (o, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_PlayerContainer_Player_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: i,
          gameId: _this2.props.game._id,
          gameName: GAME_NAME,
          player: o,
          isMe: o._id == _this2.props.me._id,
          currentPlayer: _this2.props.game.currentPlayer,
          amIAdmin: _this2.props.state.amIAdmin
        });
      }));
    }
  }, {
    key: "takeCard",
    value: function takeCard() {
      Model_Uno__WEBPACK_IMPORTED_MODULE_11__["default"].takeCard(this.props.game._id).then(this.props.updateGameInfo)["catch"](this.handleError);
    }
  }, {
    key: "getBorderedCard",
    value: function getBorderedCard(card, onClick, color, disabled) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "border-".concat(color, " rounded-circle m-auto d-flex"),
        style: {
          height: '120px',
          width: '120px',
          borderWidth: '2px',
          borderStyle: 'solid'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_CardContainer_UnoCard_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
        card: card,
        className: "m-auto",
        disabled: disabled,
        onClick: onClick
      }));
    }
  }, {
    key: "getDeckAndLastCard",
    value: function getDeckAndLastCard() {
      var _this$props$game = this.props.game,
          lastCard = _this$props$game.lastCard,
          currentPlayer = _this$props$game.currentPlayer;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex my-2"
      }, this.getBorderedCard({
        color: 'info',
        type: ''
      }, this.takeCard, 'info', !this.props.state.isMyMove || currentPlayer.pass), this.getBorderedCard(lastCard, null, lastCard.chosenColor || lastCard.color, true));
    }
  }, {
    key: "passCard",
    value: function passCard() {
      Model_Uno__WEBPACK_IMPORTED_MODULE_11__["default"].passCard(this.props.game._id).then(this.resetStateUpdateGameInfo)["catch"](this.handleError);
    }
  }, {
    key: "setUnoButtonClicked",
    value: function setUnoButtonClicked() {
      this.setState({
        isUnoClicked: true
      });
    }
  }, {
    key: "showPassAndUnoButtons",
    value: function showPassAndUnoButtons() {
      var isMyMove = this.props.state.isMyMove;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex my-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("button", {
        disabled: !isMyMove || !this.props.game.currentPlayer.pass,
        style: {
          boxShadow: '5px 5px 10px black'
        },
        className: "btn btn-success m-auto font-weight-bold btn-shadow",
        onClick: this.passCard
      }, "Pass"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("button", {
        disabled: !isMyMove || this.props.game.myCards.length != 2 || this.state.isUnoClicked,
        style: {
          boxShadow: '5px 5px 10px black'
        },
        className: "btn btn-danger m-auto font-weight-bold btn-shadow",
        onClick: this.setUnoButtonClicked
      }, "UNO"));
    }
  }, {
    key: "submitChosenCard",
    value: function submitChosenCard(chosenColorCard) {
      var chosenCard = this.state.chosenCard;
      var data = {
        chosenCard: _.assign(chosenCard, {
          chosenColor: chosenColorCard ? chosenColorCard.color : null
        }),
        isUnoClicked: this.state.isUnoClicked
      };
      Model_Uno__WEBPACK_IMPORTED_MODULE_11__["default"].submitChosenCard(this.props.game._id, data).then(this.resetStateUpdateGameInfo)["catch"](this.handleError);
    }
  }, {
    key: "setChosenCard",
    value: function setChosenCard(chosenCard) {
      var isWildCard = chosenCard.type.match(/WILD_CARD/) != null;
      this.setState({
        chosenCard: chosenCard,
        showColorChooseModal: isWildCard
      }, !isWildCard ? this.submitChosenCard : function () {});
    }
  }, {
    key: "showMyCards",
    value: function showMyCards() {
      var _this3 = this;

      var myCards = this.props.game.myCards,
          disabled = !this.props.state.isMyMove;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex flex-wrap p-2 mt-2"
      }, _.sortBy(myCards, ['color', 'type']).map(function (o, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_CardContainer_UnoCard_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
          onClick: _this3.setChosenCard,
          card: o,
          key: i,
          disabled: disabled
        });
      }));
    }
  }, {
    key: "hideColorChooseModal",
    value: function hideColorChooseModal() {
      this.setState({
        showColorChooseModal: false
      });
    }
  }, {
    key: "getColorChooseModalBody",
    value: function getColorChooseModalBody() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex"
      }, ['warning', 'danger', 'primary', 'success'].map(function (o, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_CardContainer_UnoCard_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
          card: {
            color: o,
            type: ''
          },
          onClick: function onClick(card) {
            _this4.hideColorChooseModal();

            _this4.submitChosenCard(card);
          },
          key: i,
          className: "m-auto"
        });
      }));
    }
  }, {
    key: "getColorChooseModal",
    value: function getColorChooseModal() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(UtilsContainer_AbstractModal_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "colorChooseModal",
        header: 'Choose Color',
        show: this.state.showColorChooseModal,
        onClose: this.hideColorChooseModal,
        body: this.getColorChooseModalBody()
      });
    }
  }, {
    key: "getPlayerTurnAlert",
    value: function getPlayerTurnAlert() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex py-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", {
        className: "m-auto sg-btn-".concat(this.props.state.isMyMove ? 'danger' : 'trans', " ")
      }, this.props.state.isMyMove ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("b", null, "Your turn") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("b", null, this.props.game.currentPlayer.name), " turn")));
    }
  }, {
    key: "renderGame",
    value: function renderGame() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex flex-column"
      }, this.getPlayerTurnAlert(), this.listPlayers(true), this.getDeckAndLastCard(), this.showPassAndUnoButtons(), this.showMyCards(), this.getColorChooseModal());
    }
  }, {
    key: "renderGameResults",
    value: function renderGameResults() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "game-result text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "alert alert-success text-center m-0 rounded-top rounded-bottom-0",
        style: {
          boxShadow: '0 0 5px white'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("b", null, "Game Results")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "game-result-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("table", {
        className: "table table-hover table-light table-striped rounded-bottom",
        style: {
          boxShadow: '0 0 5px white'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("th", {
        scope: "col"
      }, "Rank"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("th", {
        scope: "col"
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("th", {
        scope: "col"
      }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("th", {
        scope: "col"
      }, "Bal Cards"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("tbody", null, _.sortBy(this.props.game.players, 'cardsCount').map(function (o, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("tr", {
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("td", {
          scope: "row"
        }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("td", null, o.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("td", null, i == 0 ? 'Won' : 'Lost'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("td", null, o.cardsCount));
      })))), this.props.state.amIAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("button", {
        className: "btn btn-primary m-auto btn-shadow",
        onClick: this.restartGame
      }, "Restart")));
    }
  }, {
    key: "restartGame",
    value: function restartGame() {
      Model_Game__WEBPACK_IMPORTED_MODULE_9__["default"].restartGame(GAME_NAME, this.props.game._id).then(this.props.updateGameInfo)["catch"](this.handleError);
    }
  }, {
    key: "render",
    value: function render() {
      switch (this.props.game.status) {
        case 'STARTED':
          return this.renderGame();

        case 'ENDED':
          return this.renderGameResults();
      }
    }
  }, {
    key: "updateReceived",
    value: function updateReceived(data) {
      switch (data.event) {
        case 'PLAYER_SUBMITTED_CARD':
          var ind = this.props.state.myIndexInPlayers;

          if (ind != -1 && data.gameData.players[ind].cardsCount != this.props.game.players[ind].cardsCount) {
            this.props.getGameInfo();
            break;
          }

        case 'PLAYER_TOOK_CARD':
          this.props.updateGameInfo(data.gameData).then(Utils_Game__WEBPACK_IMPORTED_MODULE_10__["default"].playLightNotify);
          break;

        case 'PLAYER_PASSED':
          this.props.updateGameInfo(data.gameData).then(this.props.state.isMyMove ? Utils_Game__WEBPACK_IMPORTED_MODULE_10__["default"].playNewNotify : Utils_Game__WEBPACK_IMPORTED_MODULE_10__["default"].playLightNotify);
          break;
      }
    }
  }]);

  return UnoContainer;
}(react__WEBPACK_IMPORTED_MODULE_6__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnoContainer);

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
//# sourceMappingURL=bundle.src_components_GameContainer_UnoContainer_UnoContainer_jsx.js.map