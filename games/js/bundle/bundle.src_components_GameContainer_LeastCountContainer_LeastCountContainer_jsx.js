(self["webpackChunkgames_ui"] = self["webpackChunkgames_ui"] || []).push([["src_components_GameContainer_LeastCountContainer_LeastCountContainer_jsx"],{

/***/ "./src/components/GameContainer/CardContainer/StandardCard.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/GameContainer/CardContainer/StandardCard.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styles_standard_card_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/standard-card.scss */ "./assets/styles/standard-card.scss");
/* harmony import */ var styles_standard_card_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_standard_card_scss__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var _default = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    return _super.call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "getOnClick",
    value: function getOnClick() {
      var _this$props = this.props,
          card = _this$props.card,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;
      return disabled != true && typeof onClick == "function" ? function () {
        return onClick(card);
      } : function () {};
    }
  }, {
    key: "getTextColorClass",
    value: function getTextColorClass() {
      switch (this.props.card.type) {
        case 'SPADE':
        case 'CLUB':
          return 'text-dark';

        default:
          return 'text-danger';
      }
    }
  }, {
    key: "getCardClass",
    value: function getCardClass() {
      var _this$props2 = this.props,
          isChosenCard = _this$props2.isChosenCard,
          className = _this$props2.className;
      return ['game-card', isChosenCard ? 'game-chosen-card' : '', this.getTextColorClass(), className].join(' ');
    }
  }, {
    key: "getJokerCard",
    value: function getJokerCard() {
      var jokerText = _.toArray('JOKER').map(function (o, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
          key: i
        }, o);
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "d-flex joker-card text-danger"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "left"
      }, jokerText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("img", {
        src: "/assets/images/joker.png"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "right"
      }, jokerText));
    }
  }, {
    key: "getLayer",
    value: function getLayer(tag1, tag2, className) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "d-flex flex-column ".concat(className)
      }, tag1, tag2);
    }
  }, {
    key: "getNumberCard",
    value: function getNumberCard(card) {
      var numberTag = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "game-card-corner-text"
      }, card.number);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "position-relative h-100 w-100 d-flex flex-column game-card-body"
      }, this.getLayer(numberTag, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "".concat(card.type, "-icon game-card-corner-icon")
      }), 'mbr-auto'), this.getLayer('', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "".concat(card.type, "-icon game-card-center-icon")
      }), ''), this.getLayer( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        className: "".concat(card.type, "-icon game-card-corner-icon")
      }), numberTag, 'mlt-auto'));
    }
  }, {
    key: "getGameCardBody",
    value: function getGameCardBody() {
      var card = this.props.card;

      switch (card.type) {
        case 'JOKER':
          return this.getJokerCard();

        default:
          return this.getNumberCard(card);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        onClick: this.getOnClick(),
        className: this.getCardClass()
      }, this.getGameCardBody());
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);



/***/ }),

/***/ "./src/components/GameContainer/LeastCountContainer/LeastCountContainer.jsx":
/*!**********************************************************************************!*\
  !*** ./src/components/GameContainer/LeastCountContainer/LeastCountContainer.jsx ***!
  \**********************************************************************************/
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
/* harmony import */ var Model_Game__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Model/Game */ "./src/components/Model/Game.js");
/* harmony import */ var Model_LeastCount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Model/LeastCount */ "./src/components/Model/LeastCount.js");
/* harmony import */ var _CardContainer_StandardCard_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../CardContainer/StandardCard.jsx */ "./src/components/GameContainer/CardContainer/StandardCard.jsx");
/* harmony import */ var Utils_Game__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Utils/Game */ "./src/components/Utils/Game.js");
/* provided dependency */ var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var GAME_NAME = 'leastcount';

var LeastCountContainer = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(LeastCountContainer, _Component);

  var _super = _createSuper(LeastCountContainer);

  function LeastCountContainer() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LeastCountContainer);

    _this = _super.call(this);
    _this.state = _.assign({}, _.cloneDeep(_this.getInitialValues()));
    _this.updateReceived = _this.updateReceived.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleChosenCard = _this.handleChosenCard.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.submitChosenCards = _this.submitChosenCards.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.takeCard = _this.takeCard.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.noShow = _this.noShow.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.continueGame = _this.continueGame.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.showCards = _this.showCards.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.restartGame = _this.restartGame.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.resetStateGetGameInfo = Utils_Game__WEBPACK_IMPORTED_MODULE_11__["default"].resetStateGetGameInfo.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleError = Utils_Game__WEBPACK_IMPORTED_MODULE_11__["default"].handleError.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LeastCountContainer, [{
    key: "getInitialValues",
    value: function getInitialValues() {
      return {
        chosenCards: [],
        submitFlag: false,
        decideFlag: false
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
    value: function takeCard(takeFrom) {
      Model_LeastCount__WEBPACK_IMPORTED_MODULE_9__["default"].takeCard(this.props.game._id, {
        takeFrom: takeFrom
      }).then(this.props.getGameInfo)["catch"](this.handleError);
    }
  }, {
    key: "getBorderedCard",
    value: function getBorderedCard(card, onClick, disabled) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "border-white rounded-circle m-auto d-flex",
        style: {
          height: '120px',
          width: '120px',
          borderWidth: '2px',
          borderStyle: 'solid'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_CardContainer_StandardCard_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        card: card,
        className: "m-auto ".concat(disabled ? '' : 'zoom-animi'),
        disabled: disabled,
        onClick: onClick
      }));
    }
  }, {
    key: "getDeckAndLastCard",
    value: function getDeckAndLastCard() {
      var _this3 = this;

      var _this$props$game = this.props.game,
          lastCards = _this$props$game.lastCards,
          currentPlayerAction = _this$props$game.currentPlayerAction;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex my-2"
      }, this.getBorderedCard({
        color: 'info',
        type: ''
      }, function () {
        return _this3.takeCard('DECK');
      }, !this.props.state.isMyMove || currentPlayerAction != 'TAKE'), this.getBorderedCard(lastCards.length ? lastCards[0] : {}, function () {
        return _this3.takeCard('LASTCARD');
      }, !this.props.state.isMyMove || currentPlayerAction != 'TAKE'));
    }
  }, {
    key: "showCards",
    value: function showCards() {
      var _this4 = this;

      this.setState({
        decideFlag: true
      }, function () {
        Model_LeastCount__WEBPACK_IMPORTED_MODULE_9__["default"].showCards(_this4.props.game._id).then(_this4.props.getGameInfo)["catch"](_this4.handleError);
      });
    }
  }, {
    key: "noShow",
    value: function noShow() {
      var _this5 = this;

      this.setState({
        decideFlag: true
      }, function () {
        Model_LeastCount__WEBPACK_IMPORTED_MODULE_9__["default"].noShow(_this5.props.game._id).then(_this5.props.getGameInfo)["catch"](_this5.handleError);
      });
    }
  }, {
    key: "submitChosenCards",
    value: function submitChosenCards() {
      var _this6 = this;

      var data = {
        chosenCards: this.state.chosenCards
      };
      this.setState({
        submitFlag: true
      }, function () {
        Model_LeastCount__WEBPACK_IMPORTED_MODULE_9__["default"].submitChosenCards(_this6.props.game._id, data).then(_this6.resetStateGetGameInfo)["catch"](_this6.handleError);
      });
    }
  }, {
    key: "handleChosenCard",
    value: function handleChosenCard(chosenCard) {
      var ind = _.findIndex(this.state.chosenCards, chosenCard);

      ind == -1 ? this.state.chosenCards.push(chosenCard) : this.state.chosenCards.splice(ind, 1);
      this.setState({
        chosenCards: this.state.chosenCards
      });
    }
  }, {
    key: "getCurrentPlayerDroppedCards",
    value: function getCurrentPlayerDroppedCards() {
      var _this$props$game2 = this.props.game,
          currentPlayerDroppedCards = _this$props$game2.currentPlayerDroppedCards,
          currentPlayerAction = _this$props$game2.currentPlayerAction,
          currentPlayer = _this$props$game2.currentPlayer;
      return currentPlayerAction == "TAKE" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex flex-column mt-2 border border-white rounded"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "alert alert-primary text-center py-0 rounded-0"
      }, this.props.state.isMyMove ? 'Your' : currentPlayer.name, " Dropped Cards"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex flex-wrap p-2"
      }, _.sortBy(currentPlayerDroppedCards, ['number', 'type']).map(function (o, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_CardContainer_StandardCard_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: i,
          disabled: true,
          chosenCards: [],
          card: o,
          className: "mx-auto"
        });
      })));
    }
  }, {
    key: "isChosenCard",
    value: function isChosenCard(card) {
      var chosenCards = this.state.chosenCards;
      return _.find(chosenCards, card);
    }
  }, {
    key: "getMyCards",
    value: function getMyCards() {
      var _this7 = this;

      var _this$props$game3 = this.props.game,
          myCards = _this$props$game3.myCards,
          currentPlayerAction = _this$props$game3.currentPlayerAction;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex flex-wrap p-2 mt-2"
      }, _.sortBy(myCards, ['point', 'number', 'type']).map(function (o, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_CardContainer_StandardCard_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onClick: _this7.handleChosenCard,
          key: i,
          disabled: !_this7.props.state.isMyMove || currentPlayerAction != 'SUBMIT',
          isChosenCard: _this7.isChosenCard(o),
          card: _.assign(o, {
            ind: i
          })
        });
      }));
    }
  }, {
    key: "getActionText",
    value: function getActionText() {
      switch (this.props.game.currentPlayerAction) {
        case 'SUBMIT':
          return 'Drop card';

        case 'TAKE':
          return 'Take card';

        case 'DECIDE':
          return 'Choose Show or Play';
      }
    }
  }, {
    key: "getPlayerTurnAlert",
    value: function getPlayerTurnAlert() {
      var isMyMove = this.props.state.isMyMove,
          currentPlayer = this.props.game.currentPlayer;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex py-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", {
        style: {
          boxShadow: '0 0 5px white'
        },
        className: "m-auto px-3 rounded text-white bg-".concat(this.props.state.isMyMove ? 'danger' : 'secondary', " ")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "text-center"
      }, isMyMove ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("b", null, "Your turn") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "Player ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("b", null, currentPlayer.name), " turn")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "text-center"
      }, !isMyMove && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("b", null, currentPlayer.name), " has to"), " ", this.getActionText())));
    }
  }, {
    key: "getGameButtons",
    value: function getGameButtons() {
      var isMyMove = this.props.state.isMyMove,
          currentPlayerAction = this.props.game.currentPlayerAction,
          _this$state = this.state,
          submitFlag = _this$state.submitFlag,
          decideFlag = _this$state.decideFlag;
      var isMyActionDecide = !decideFlag && isMyMove && currentPlayerAction == 'DECIDE';
      var isMyActionSubmit = !submitFlag && isMyMove && currentPlayerAction == 'SUBMIT' && this.state.chosenCards.length;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex my-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("button", {
        disabled: !isMyActionSubmit,
        style: {
          boxShadow: '5px 5px 10px black'
        },
        className: "btn btn-success m-auto font-weight-bold btn-shadow ".concat(isMyActionSubmit && 'zoom-animi'),
        onClick: this.submitChosenCards
      }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("button", {
        disabled: !isMyActionDecide,
        style: {
          boxShadow: '5px 5px 10px black'
        },
        className: "btn btn-danger m-auto font-weight-bold btn-shadow ".concat(isMyActionDecide && 'zoom-animi'),
        onClick: this.showCards
      }, "Show"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("button", {
        disabled: !isMyActionDecide,
        style: {
          boxShadow: '5px 5px 10px black'
        },
        className: "btn btn-primary m-auto font-weight-bold btn-shadow ".concat(isMyActionDecide && 'zoom-animi'),
        onClick: this.noShow
      }, "Play"));
    }
  }, {
    key: "getMyPoints",
    value: function getMyPoints() {
      return this.props.state.amIPresentInPlayers && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "my-2 text-center text-white"
      }, "Points : ", this.props.game.myPoints);
    }
  }, {
    key: "renderGame",
    value: function renderGame() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex flex-column"
      }, this.getPlayerTurnAlert(), this.listPlayers(), this.getCurrentPlayerDroppedCards(), this.getDeckAndLastCard(), this.getGameButtons(), this.getMyPoints(), this.getMyCards());
    }
  }, {
    key: "continueGame",
    value: function continueGame() {
      Model_LeastCount__WEBPACK_IMPORTED_MODULE_9__["default"].continueGame(this.props.game._id).then(this.props.getGameInfo)["catch"](this.handleError);
    }
  }, {
    key: "restartGame",
    value: function restartGame() {
      Model_Game__WEBPACK_IMPORTED_MODULE_8__["default"].restartGame(GAME_NAME, this.props.game._id).then(this.props.getGameInfo)["catch"](this.handleError);
    }
  }, {
    key: "renderGameResults",
    value: function renderGameResults() {
      var _this8 = this;

      var _this$props$game4 = this.props.game,
          players = _this$props$game4.players,
          playersTotalPoints = _this$props$game4.playersTotalPoints,
          status = _this$props$game4.status,
          rounds = _this$props$game4.rounds;

      var _$nth = _.nth(rounds, -1),
          showResult = _$nth.showResult,
          playersPoints = _$nth.playersPoints,
          showedBy = _$nth.showedBy;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "game-result text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "alert alert-success text-center m-0 rounded-top rounded-bottom-0",
        style: {
          boxShadow: '0 0 5px white'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("b", {
        className: "text-underline"
      }, status == 'ENDED' ? 'Final' : 'Current Round', " Results"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("b", null, showedBy._id == this.props.me._id ? 'You' : showedBy.name), " showed cards and its ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("b", null, showResult), " show")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
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
      }, "Points"), status == 'ENDED' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("th", {
        scope: "col"
      }, "Status"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("tbody", null, _.sortBy(players, function (o) {
        return playersTotalPoints[o._id];
      }).map(function (o, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("tr", {
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("td", {
          scope: "row"
        }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("td", null, o._id == _this8.props.me._id ? 'You' : o.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("b", null, playersTotalPoints[o._id]), " (+", playersPoints[o._id], ")"), status == 'ENDED' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("td", null, i == players.length - 1 ? 'LOST' : 'WON'));
      })))), this.props.state.amIAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("button", {
        className: "btn btn-primary m-auto btn-shadow",
        onClick: status == 'ENDED' ? this.restartGame : this.continueGame
      }, status == 'ENDED' ? 'Restart' : 'Continue')));
    }
  }, {
    key: "render",
    value: function render() {
      switch (this.props.game.status) {
        case 'STARTED':
          return this.renderGame();

        case 'PLAYER_SHOWED':
        case 'ENDED':
          return this.renderGameResults();
      }
    }
  }, {
    key: "updateReceived",
    value: function updateReceived(data) {
      return this.props.getGameInfo();
    }
  }]);

  return LeastCountContainer;
}(react__WEBPACK_IMPORTED_MODULE_6__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeastCountContainer);

/***/ }),

/***/ "./src/components/Model/LeastCount.js":
/*!********************************************!*\
  !*** ./src/components/Model/LeastCount.js ***!
  \********************************************/
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
    key: "submitChosenCards",
    value: function submitChosenCards(roomID, data) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("leastcount/".concat(roomID, "/submit"), data).then(function (resp) {
          return resolve(resp);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "takeCard",
    value: function takeCard(roomID, data) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("leastcount/".concat(roomID, "/take"), data).then(function (resp) {
          return resolve(resp);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "noShow",
    value: function noShow(roomID) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("leastcount/".concat(roomID, "/no-show")).then(function (resp) {
          return resolve(resp);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "showCards",
    value: function showCards(roomID) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("leastcount/".concat(roomID, "/show")).then(function (resp) {
          return resolve(resp);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "continueGame",
    value: function continueGame(roomID) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("leastcount/".concat(roomID, "/continue")).then(function (resp) {
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/standard-card.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/standard-card.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".game-card,\n.game-player-selected-card-back {\n  background: white;\n  border-radius: 3px;\n  height: 70px;\n  width: 45px;\n  padding: 3px;\n  cursor: pointer;\n  box-shadow: -5px 5px 10px black;\n  margin-bottom: 5px;\n  z-index: 0;\n}\n\n.game-chosen-card {\n  transform: scale(1.1);\n  transition: transform 0.2s;\n}\n\n.game-player-selected-card-back {\n  position: relative;\n  margin: auto;\n}\n\n.game-player-selected-card,\n.game-player-selected-card-back {\n  height: 40px;\n  width: 30px;\n}\n\n.game-player-selected-card-force {\n  position: absolute !important;\n  top: 0 !important;\n  left: 0 !important;\n}\n\n.game-player-selected-card {\n  box-shadow: none;\n  margin: 0 !important;\n}\n.game-player-selected-card .game-card-body .game-card-corner-text {\n  font-size: 6px;\n}\n.game-player-selected-card .game-card-body .game-card-corner-icon {\n  margin: 0.5px auto;\n  height: 4px;\n  width: 4px;\n}\n.game-player-selected-card .game-card-body .game-card-center-icon {\n  height: 6px;\n  width: 6px;\n}\n\n.game-card-corner-text {\n  text-align: center;\n  font-size: 8px;\n  font-weight: bold;\n}\n\n.SPADE-icon {\n  background-image: url(\"/assets/images/SPADE.png\");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n\n.CLUB-icon {\n  background-image: url(\"/assets/images/CLUB.png\");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n\n.DIAMOND-icon {\n  background-image: url(\"/assets/images/DIAMOND.png\");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n\n.HEART-icon {\n  background-image: url(\"/assets/images/HEART.png\");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n\n.game-card-corner-icon {\n  margin: 1px auto;\n  height: 6px;\n  width: 6px;\n}\n\n.game-card-center-icon {\n  height: 15px;\n  width: 15px;\n  margin: auto;\n}\n\n.joker-card {\n  width: 100%;\n  height: 100%;\n  font-size: 6px;\n  line-height: 6px;\n  font-weight: bold;\n}\n.joker-card .left,\n.joker-card .right {\n  display: flex;\n}\n.joker-card .left {\n  flex-direction: column;\n}\n.joker-card .center {\n  display: flex;\n  width: 100%;\n}\n.joker-card .center img {\n  margin: auto;\n  height: 30px;\n  width: 25px;\n}\n.joker-card .right {\n  margin-left: auto;\n  margin-top: auto;\n  flex-direction: column-reverse;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./assets/styles/standard-card.scss":
/*!******************************************!*\
  !*** ./assets/styles/standard-card.scss ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./standard-card.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/standard-card.scss");

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
//# sourceMappingURL=bundle.src_components_GameContainer_LeastCountContainer_LeastCountContainer_jsx.js.map