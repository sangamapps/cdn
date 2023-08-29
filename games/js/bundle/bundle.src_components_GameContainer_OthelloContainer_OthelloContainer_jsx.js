(self["webpackChunkgames_ui"] = self["webpackChunkgames_ui"] || []).push([["src_components_GameContainer_OthelloContainer_OthelloContainer_jsx"],{

/***/ "./src/components/GameContainer/OthelloContainer/OthelloContainer.jsx":
/*!****************************************************************************!*\
  !*** ./src/components/GameContainer/OthelloContainer/OthelloContainer.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _PlayerContainer_Player_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../PlayerContainer/Player.jsx */ "./src/components/GameContainer/PlayerContainer/Player.jsx");
/* harmony import */ var Model_Game__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Model/Game */ "./src/components/Model/Game.js");
/* harmony import */ var Model_Othello__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Model/Othello */ "./src/components/Model/Othello.js");
/* harmony import */ var Utils_Game__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Utils/Game */ "./src/components/Utils/Game.js");
/* harmony import */ var styles_othello_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styles/othello.scss */ "./assets/styles/othello.scss");
/* harmony import */ var styles_othello_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(styles_othello_scss__WEBPACK_IMPORTED_MODULE_14__);
/* provided dependency */ var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var GAME_NAME = 'othello';

var OthelloContainer = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(OthelloContainer, _Component);

  var _super = _createSuper(OthelloContainer);

  function OthelloContainer() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, OthelloContainer);

    _this = _super.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handlePlaceDisk", function (x, y) {
      var data = {
        position: {
          x: x,
          y: y
        }
      };
      Model_Othello__WEBPACK_IMPORTED_MODULE_12__["default"].placeDisk(_this.props.game._id, data).then(_this.startAniAndUpdateGameInfo)["catch"](_this.handleError);
    });

    _this.state = _.assign({}, _this.getInitialValues());
    _this.updateReceived = _this.updateReceived.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.restartGame = _this.restartGame.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.resetStateUpdateGameInfo = Utils_Game__WEBPACK_IMPORTED_MODULE_13__["default"].resetStateUpdateGameInfo.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleError = Utils_Game__WEBPACK_IMPORTED_MODULE_13__["default"].handleError.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.startAniAndUpdateGameInfo = _this.startAniAndUpdateGameInfo.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(OthelloContainer, [{
    key: "getInitialValues",
    value: function getInitialValues() {
      return {
        board: null
      };
    }
  }, {
    key: "getAdditionalInfo",
    value: function getAdditionalInfo(player) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "player-additonal-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", null, "[", this.props.game.playersDiskColor[player._id] == 'W' ? 'White' : 'Black', "]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", null, "[", this.props.game.playersDisksInBoardCount[player._id], "]"));
    }
  }, {
    key: "listPlayers",
    value: function listPlayers() {
      var _this2 = this;

      var players = this.props.game.players;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "d-flex flex-wrap px-1 mt-2"
      }, players.map(function (o, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(_PlayerContainer_Player_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: i,
          gameId: _this2.props.game._id,
          gameName: GAME_NAME,
          player: o,
          isMe: o._id == _this2.props.me._id,
          currentPlayer: _this2.props.game.currentPlayer,
          amIAdmin: _this2.props.state.amIAdmin,
          additionalInfo: function additionalInfo() {
            return _this2.getAdditionalInfo(o);
          },
          hideInfo: true
        });
      }));
    }
  }, {
    key: "getPlayerTurnAlert",
    value: function getPlayerTurnAlert() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "d-flex py-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("span", {
        className: "m-auto sg-btn-".concat(this.props.state.isMyMove ? 'danger' : 'trans', " ")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("b", null, this.props.game.currentPlayer.name), " turn")));
    }
  }, {
    key: "getDisk",
    value: function getDisk(cell, i, j) {
      var _this3 = this;

      var className = "sg-cell ".concat(cell == 'E' && 'sg-btn');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("button", {
        onClick: function onClick() {
          return _this3.handlePlaceDisk(i, j);
        },
        key: j,
        className: className,
        disabled: !this.props.state.isMyMove
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        id: "disk-".concat(i, "-").concat(j),
        className: "sg-disk sg-disk-".concat(cell)
      }));
    }
  }, {
    key: "showBoard",
    value: function showBoard() {
      var board = this.props.game.board;
      if (!board) return;
      var rows = [];

      for (var i = 0; i < board.length; i++) {
        var cols = [];

        for (var j = 0; j < board[i].length; j++) {
          var cell = board[i][j];
          cols.push(this.getDisk(cell, i, j));
        }

        rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
          key: i,
          className: "sg-row"
        }, cols));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "board-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "board-container-inner"
      }, rows));
    }
  }, {
    key: "showDisksLeft",
    value: function showDisksLeft() {
      if (!this.props.amIPresentInPlayers) return;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "d-flex py-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("span", {
        className: "m-auto sg-btn-primary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("b", null, "Your ", this.props.game.playersDiskColor[this.props.me._id] == 'W' ? 'white' : 'black', " disk(s) left: ", this.props.game.playersDisksLeftCount[this.props.me._id])));
    }
  }, {
    key: "renderGame",
    value: function renderGame() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "d-flex flex-column"
      }, this.getPlayerTurnAlert(), this.listPlayers(true), this.showBoard(), this.showDisksLeft());
    }
  }, {
    key: "renderGameResults",
    value: function renderGameResults() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "game-result text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "alert alert-success text-center m-0 rounded-top rounded-bottom-0",
        style: {
          boxShadow: '0 0 5px white'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("b", null, "Game Results")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "game-result-table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("table", {
        className: "table table-hover table-light table-striped rounded-bottom",
        style: {
          boxShadow: '0 0 5px white'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("th", {
        scope: "col"
      }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("th", {
        scope: "col"
      }, "Disk Color"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("th", {
        scope: "col"
      }, "Total Disk"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("th", {
        scope: "col"
      }, "Status"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("tbody", null, this.props.game.playersInGame.map(function (o, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("tr", {
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("td", null, o.name, o._id == _this4.props.me._id ? " (You)" : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("td", null, _this4.props.game.playersDiskColor[o._id] == 'W' ? 'White' : 'Black'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("td", null, _this4.props.game.playersDisksInBoardCount[o._id]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("td", null, o._id == _this4.props.game.winner._id ? 'Won' : 'Lost'));
      })))), this.props.state.amIAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "d-flex"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("button", {
        className: "btn btn-primary m-auto btn-shadow",
        onClick: this.restartGame
      }, "Restart")));
    }
  }, {
    key: "restartGame",
    value: function restartGame() {
      Model_Game__WEBPACK_IMPORTED_MODULE_11__["default"].restartGame(GAME_NAME, this.props.game._id).then(this.props.updateGameInfo)["catch"](this.handleError);
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
    key: "placeDisk",
    value: function placeDisk(position, timeout) {
      var _this5 = this;

      return new Promise(function (resolve) {
        $("#disk-".concat(position.x, "-").concat(position.y)).css({
          backgroundColor: _this5.props.game.playersDiskColor[_this5.props.game.currentPlayer._id] == 'W' ? 'white' : 'black'
        });
        setTimeout(function () {
          return resolve();
        }, timeout);
      });
    }
  }, {
    key: "placeDisks",
    value: function () {
      var _placeDisks = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee(positionsToPlaceDisks) {
        var i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                i = 0;

              case 1:
                if (!(i < positionsToPlaceDisks.length)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return this.placeDisk(positionsToPlaceDisks[i], i == 0 ? 300 : 100);

              case 4:
                i++;
                _context.next = 1;
                break;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function placeDisks(_x) {
        return _placeDisks.apply(this, arguments);
      }

      return placeDisks;
    }()
  }, {
    key: "startAniAndUpdateGameInfo",
    value: function () {
      var _startAniAndUpdateGameInfo = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee2(gameData) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.placeDisks(gameData.positionsToPlaceDisks);

              case 2:
                _context2.next = 4;
                return this.props.updateGameInfo(gameData);

              case 4:
                _context2.next = 6;
                return this.props.state.isMyMove;

              case 6:
                if (!_context2.sent) {
                  _context2.next = 10;
                  break;
                }

                Utils_Game__WEBPACK_IMPORTED_MODULE_13__["default"].playNewNotify();
                _context2.next = 11;
                break;

              case 10:
                Utils_Game__WEBPACK_IMPORTED_MODULE_13__["default"].playLightNotify();

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function startAniAndUpdateGameInfo(_x2) {
        return _startAniAndUpdateGameInfo.apply(this, arguments);
      }

      return startAniAndUpdateGameInfo;
    }()
  }, {
    key: "updateReceived",
    value: function updateReceived(data) {
      switch (data.event) {
        case 'PLAYER_PLACED':
          this.startAniAndUpdateGameInfo(data.gameData);
          break;
      }
    }
  }]);

  return OthelloContainer;
}(react__WEBPACK_IMPORTED_MODULE_9__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OthelloContainer);

/***/ }),

/***/ "./src/components/Model/Othello.js":
/*!*****************************************!*\
  !*** ./src/components/Model/Othello.js ***!
  \*****************************************/
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
    key: "placeDisk",
    value: function placeDisk(roomID, data) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("othello/".concat(roomID, "/place"), data).then(function (resp) {
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/othello.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/othello.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".board-container {\n  display: flex;\n  margin: 10px auto;\n  border: 40px black solid;\n  border-radius: 10px;\n  padding: 3px;\n  background: #607d8b;\n}\n.board-container .board-container-inner {\n  background: #373737;\n  padding: 5px;\n  border-radius: 10px;\n}\n.board-container .board-container-inner .sg-row {\n  display: flex;\n}\n.board-container .board-container-inner .sg-cell {\n  background: #27b08e;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 0px 10px black;\n  padding: 10px;\n  border-radius: 5px;\n}\n.board-container .board-container-inner .sg-cell:not(:disabled):hover {\n  transform: scale(1.1);\n  transition: transform 0.5s;\n}\n.board-container .board-container-inner .sg-disk {\n  padding: 30px;\n  border-radius: 50px;\n  transition: background-color 0.5s ease;\n}\n.board-container .board-container-inner .sg-disk-B {\n  background: black;\n  box-shadow: 5px 5px 10px black;\n}\n.board-container .board-container-inner .sg-disk-W {\n  background: white;\n  box-shadow: 5px 5px 10px black;\n}\n\n@media only screen and (max-width: 750px) {\n  .board-container {\n    border: 30px black solid !important;\n  }\n\n  .sg-cell {\n    padding: 7.5px !important;\n  }\n\n  .sg-disk {\n    padding: 20px !important;\n  }\n}\n@media only screen and (max-width: 550px) {\n  .board-container {\n    border: 20px black solid !important;\n  }\n\n  .sg-cell {\n    padding: 5px !important;\n  }\n\n  .sg-disk {\n    padding: 15px !important;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .board-container {\n    border: 15px black solid !important;\n  }\n}\n@media only screen and (max-width: 370px) {\n  .sg-cell {\n    padding: 3px !important;\n  }\n}\n@media only screen and (max-width: 340px) {\n  .sg-disk {\n    padding: 12px !important;\n  }\n}\n@media only screen and (max-width: 300px) {\n  .board-container {\n    border: 10px black solid !important;\n  }\n\n  .sg-disk {\n    padding: 10px !important;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./assets/styles/othello.scss":
/*!************************************!*\
  !*** ./assets/styles/othello.scss ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./othello.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/othello.scss");

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
//# sourceMappingURL=bundle.src_components_GameContainer_OthelloContainer_OthelloContainer_jsx.js.map