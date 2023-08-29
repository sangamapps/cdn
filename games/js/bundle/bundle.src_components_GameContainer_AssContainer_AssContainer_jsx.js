(self["webpackChunkgames_ui"] = self["webpackChunkgames_ui"] || []).push([["src_components_GameContainer_AssContainer_AssContainer_jsx"],{

/***/ "./src/components/GameContainer/AssContainer/AssContainer.jsx":
/*!********************************************************************!*\
  !*** ./src/components/GameContainer/AssContainer/AssContainer.jsx ***!
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
/* harmony import */ var Model_Game__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Model/Game */ "./src/components/Model/Game.js");
/* harmony import */ var Utils_Game__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Utils/Game */ "./src/components/Utils/Game.js");
/* harmony import */ var Model_Ass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Model/Ass */ "./src/components/Model/Ass.js");
/* harmony import */ var _CardContainer_StandardCard_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../CardContainer/StandardCard.jsx */ "./src/components/GameContainer/CardContainer/StandardCard.jsx");
/* provided dependency */ var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var GAME_NAME = 'ass';

var AssContainer = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AssContainer, _Component);

  var _super = _createSuper(AssContainer);

  function AssContainer() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AssContainer);

    _this = _super.call(this);
    _this.state = _.assign({
      myIndexInPlayersInGame: -1,
      amIPresentInPlayersInGame: false
    }, _this.getInitialValues());
    _this.animationTime = 1000;
    _this.updateGameInfo = _this.updateGameInfo.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.updateReceived = _this.updateReceived.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.setChosenCard = _this.setChosenCard.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.submitChosenCard = _this.submitChosenCard.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.restartGame = _this.restartGame.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleError = Utils_Game__WEBPACK_IMPORTED_MODULE_9__["default"].handleError.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AssContainer, [{
    key: "getInitialValues",
    value: function getInitialValues() {
      return {
        submitFlag: false,
        chosenCard: null
      };
    }
  }, {
    key: "startAnimi",
    value: function startAnimi(animiobj) {
      var _this2 = this;

      return new Promise(function (resolve) {
        setTimeout(function () {
          $('.game-player-selected-card').removeClass('game-player-selected-card-force');
          $('.game-player-selected-card').animate(animiobj, _this2.animationTime);
          setTimeout(function () {
            $('.game-player-selected-card').addClass('game-player-selected-card-force');
            resolve();
          }, _this2.animationTime + 100);
        }, 500);
      });
    }
  }, {
    key: "setCardsPosition",
    value: function setCardsPosition() {
      document.querySelectorAll('.game-player-selected-card').forEach(function (ele) {
        var offset = $(ele).offset();
        $(ele).css({
          position: 'fixed',
          top: offset.top,
          left: offset.left
        });
      });
    }
  }, {
    key: "checkAnime",
    value: function checkAnime(gameData) {
      var _this3 = this;

      return new Promise(function (resolve) {
        if (_.isEmpty(gameData.currentRoundPlayerCards) && gameData.lastRound) {
          switch (gameData.lastRound.type) {
            case 'ALL_SUBMITTED':
              _this3.props.updateGameInfo({
                currentRoundPlayerCards: gameData.lastRound.playersCards
              }).then(function () {
                _this3.setCardsPosition();

                _this3.startAnimi({
                  left: '-100px'
                }).then(resolve);
              });

              break;

            case 'HIT':
              _this3.props.game.currentRoundPlayerCards[gameData.lastRound.hitBy._id] = gameData.lastRound.hitBy._id == _this3.props.me._id ? _this3.state.chosenCard : {};

              _this3.props.updateGameInfo({
                currentRoundPlayerCards: _this3.props.game.currentRoundPlayerCards
              }).then(function () {
                _this3.setCardsPosition();

                var offset = $("[data-player-id='".concat(gameData.lastRound.playerGotHit._id, "'] .game-player-selected-card")).offset();

                _this3.startAnimi({
                  top: offset.top,
                  left: offset.left
                }).then(resolve);
              });

              break;
          }
        } else {
          resolve();
        }
      });
    }
  }, {
    key: "updateGameInfo",
    value: function updateGameInfo(gameData) {
      var _this4 = this;

      this.setState(this.getInitialValues(), function () {
        return _this4.props.updateGameInfo(gameData);
      });
    }
  }, {
    key: "beforeUpdateInfo",
    value: function beforeUpdateInfo(gameData) {
      var _this5 = this;

      this.checkAnime(gameData).then(function () {
        return _this5.updateGameInfo(gameData);
      });
    }
  }, {
    key: "isPlayerWon",
    value: function isPlayerWon(player) {
      return this.props.game.status == 'STARTED' && _.find(this.props.game.players, {
        _id: player._id
      }) && !_.find(this.props.game.playersInGame, {
        _id: player._id
      });
    }
  }, {
    key: "listPlayers",
    value: function listPlayers() {
      var _this6 = this;

      var _this$props$game = this.props.game,
          players = _this$props$game.players,
          currentRoundPlayerCards = _this$props$game.currentRoundPlayerCards;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex flex-wrap px-1 mt-2"
      }, players.map(function (o, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_PlayerContainer_Player_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: i,
          gameId: _this6.props.game._id,
          gameName: GAME_NAME,
          player: o,
          isMe: o._id == _this6.props.me._id,
          currentPlayer: _this6.props.game.currentPlayer,
          amIAdmin: _this6.props.state.amIAdmin,
          isPlayerWon: _this6.isPlayerWon(o),
          CardComponent: _CardContainer_StandardCard_jsx__WEBPACK_IMPORTED_MODULE_11__["default"],
          playerChosenCard: currentRoundPlayerCards[o._id]
        });
      }));
    }
  }, {
    key: "submitChosenCard",
    value: function submitChosenCard() {
      var _this7 = this;

      var chosenCard = this.state.chosenCard;
      this.setState({
        submitFlag: true
      }, function () {
        Model_Ass__WEBPACK_IMPORTED_MODULE_10__["default"].submitChosenCard(_this7.props.game._id, {
          chosenCard: chosenCard
        }).then(function (resp) {
          _this7.props.updateGameInfo({
            myCards: resp.myCards
          }).then(function () {
            return _this7.beforeUpdateInfo(resp);
          });
        })["catch"](_this7.handleError);
      });
    }
  }, {
    key: "getSubmitButton",
    value: function getSubmitButton() {
      var _this$state = this.state,
          chosenCard = _this$state.chosenCard,
          submitFlag = _this$state.submitFlag;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex my-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("button", {
        className: "btn btn-primary m-auto btn-shadow",
        onClick: this.submitChosenCard,
        disabled: chosenCard == null || submitFlag
      }, "Submit"));
    }
  }, {
    key: "setChosenCard",
    value: function setChosenCard(chosenCard) {
      this.setState({
        chosenCard: this.isChosenCard(chosenCard) ? null : chosenCard
      });
    }
  }, {
    key: "sortMyCards",
    value: function sortMyCards(cards) {
      return _.reverse(_.sortBy(cards, ['type', 'point']));
    }
  }, {
    key: "isChosenCard",
    value: function isChosenCard(card) {
      var chosenCard = this.state.chosenCard;
      return chosenCard && chosenCard.number == card.number && chosenCard.type == card.type;
    }
  }, {
    key: "showMyCards",
    value: function showMyCards() {
      var _this8 = this;

      var myCards = this.props.game.myCards,
          disabled = !this.props.state.isMyMove;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "my-cards"
      }, this.sortMyCards(myCards).map(function (o, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_CardContainer_StandardCard_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onClick: _this8.setChosenCard,
          isChosenCard: _this8.isChosenCard(o),
          card: o,
          key: i,
          disabled: disabled
        });
      }));
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
    key: "amISpectating",
    value: function amISpectating() {
      var amIPresentInPlayers = this.props.state.amIPresentInPlayers;
      return !amIPresentInPlayers && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "alert alert-warning text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("b", null, "You are spectaing the Game"));
    }
  }, {
    key: "renderGame",
    value: function renderGame() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex flex-column"
      }, this.getPlayerTurnAlert(), this.listPlayers(), this.getSubmitButton(), this.showMyCards(), this.amISpectating());
    }
  }, {
    key: "restartGame",
    value: function restartGame() {
      Model_Game__WEBPACK_IMPORTED_MODULE_8__["default"].restartGame(GAME_NAME, this.props.game._id).then(this.props.updateGameInfo)["catch"](this.handleError);
    }
  }, {
    key: "renderGameResults",
    value: function renderGameResults() {
      var _this9 = this;

      var _this$props$game2 = this.props.game,
          playersInGame = _this$props$game2.playersInGame,
          players = _this$props$game2.players;
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
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("th", {
        scope: "col"
      }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("th", {
        scope: "col"
      }, "Bal Cards"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("tbody", null, players.filter(function (o) {
        return _.findIndex(playersInGame, {
          _id: o._id
        }) == -1;
      }).map(function (o, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("tr", {
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("td", null, o._id == _this9.props.me._id ? 'You' : o.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("td", null, "Won"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("td", null, "-"));
      }), playersInGame.map(function (o, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("tr", {
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("td", null, o._id == _this9.props.me._id ? 'You' : o.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("td", null, "Lost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("td", null, _.find(players, {
          _id: o._id
        }).cardsCount));
      })))), this.amISpectating(), this.props.state.amIAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "d-flex"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("button", {
        className: "btn btn-primary m-auto btn-shadow",
        onClick: this.restartGame
      }, "Restart")));
    }
  }, {
    key: "prepareFields",
    value: function prepareFields(props) {
      var myIndexInPlayersInGame = _.findIndex(props.game.playersInGame, {
        _id: props.me._id
      });

      this.setState({
        myIndexInPlayersInGame: myIndexInPlayersInGame,
        amIPresentInPlayersInGame: myIndexInPlayersInGame != -1
      });
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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prepareFields(this.props);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      this.prepareFields(newProps);
    }
  }, {
    key: "updateReceived",
    value: function updateReceived(data) {
      var _this10 = this;

      switch (data.event) {
        case 'PLAYER_SUBMITTED_CARD':
          this.checkAnime(data.gameData).then(function () {
            var lastRound = data.gameData.lastRound;

            if (lastRound && lastRound.playerGotHit && lastRound.playerGotHit._id == _this10.props.me._id) {
              return _this10.props.getGameInfo();
            }

            _this10.updateGameInfo(data.gameData);
          });
          break;
      }
    }
  }]);

  return AssContainer;
}(react__WEBPACK_IMPORTED_MODULE_6__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssContainer);

/***/ }),

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

/***/ "./src/components/Model/Ass.js":
/*!*************************************!*\
  !*** ./src/components/Model/Ass.js ***!
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
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("ass/".concat(roomID, "/submit"), data).then(function (resp) {
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
//# sourceMappingURL=bundle.src_components_GameContainer_AssContainer_AssContainer_jsx.js.map