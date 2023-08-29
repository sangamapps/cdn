(self["webpackChunkgames_ui"] = self["webpackChunkgames_ui"] || []).push([["src_components_AppContainer_index_js"],{

/***/ "./src/components/AppContainer/Home.jsx":
/*!**********************************************!*\
  !*** ./src/components/AppContainer/Home.jsx ***!
  \**********************************************/
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _RoomModal_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RoomModal.jsx */ "./src/components/AppContainer/RoomModal.jsx");
/* harmony import */ var styles_home_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styles/home.scss */ "./assets/styles/home.scss");
/* harmony import */ var styles_home_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styles_home_scss__WEBPACK_IMPORTED_MODULE_10__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var imagesPath = '/assets/images/';
var games = [{
  name: 'Uno',
  backgroundImage: imagesPath + 'uno.png',
  gameName: 'uno',
  style: {
    height: '150px',
    width: '200px'
  }
}, {
  name: 'Donkey / Ass',
  backgroundImage: imagesPath + 'ass.png',
  gameName: 'ass',
  style: {
    height: '150px',
    width: '200px'
  }
}, {
  name: 'Least Count / Show',
  backgroundImage: imagesPath + 'ass.png',
  gameName: 'leastcount',
  style: {
    height: '150px',
    width: '200px'
  }
}, {
  name: 'Othello',
  backgroundImage: imagesPath + 'othello.png',
  gameName: 'othello',
  style: {
    height: '200px',
    width: '200px'
  }
} // { name: 'Ludo', backgroundImage: imagesPath + 'ludo.png', gameName: 'ludo', style: { height: '200px', width: '200px' } },
];

var Home = /*#__PURE__*/function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, _React$PureComponent);

  var _super = _createSuper(Home);

  function Home() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      selectedGame: null
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "goTo", function (path) {
      _this.props.history.push(path);
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setSelectedGame", function (game) {
      _this.setState({
        selectedGame: game
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getGameCard", function (game, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("button", {
        key: key,
        className: "sg-game-card",
        onClick: function onClick() {
          return _this.setSelectedGame(game);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("img", {
        src: game.backgroundImage,
        className: "game-img",
        style: game.style
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("p", {
        className: "sg-game-card-footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("b", null, game.name)));
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "getGames",
    value: function getGames() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "games-body"
      }, games.map(this.getGameCard));
    }
  }, {
    key: "getHeader",
    value: function getHeader() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
        to: "/profile"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("button", {
        className: "profile-btn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {
        style: {
          fontSize: '20px'
        },
        icon: 'user'
      }))));
    }
  }, {
    key: "getRoomModal",
    value: function getRoomModal() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_RoomModal_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        selectedGame: this.state.selectedGame,
        goTo: this.goTo,
        onClose: function onClose() {
          return _this2.setSelectedGame(null);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "home-view"
      }, this.getHeader(), this.getGames(), this.getRoomModal());
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/components/AppContainer/Profile.jsx":
/*!*************************************************!*\
  !*** ./src/components/AppContainer/Profile.jsx ***!
  \*************************************************/
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux */ "./src/components/redux/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var styles_profile_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styles/profile.scss */ "./assets/styles/profile.scss");
/* harmony import */ var styles_profile_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styles_profile_scss__WEBPACK_IMPORTED_MODULE_11__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var Profile = /*#__PURE__*/function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Profile, _React$PureComponent);

  var _super = _createSuper(Profile);

  function Profile() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Profile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "gotoHome", function () {
      _this.props.history.replace('/');
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "signout", function () {
      (0,_redux__WEBPACK_IMPORTED_MODULE_9__.setPlayerAction)(null);

      _this.gotoHome();
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Profile, [{
    key: "render",
    value: function render() {
      var player = this.props.player;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "profile-view"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "profile-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
        icon: "user",
        style: {
          fontSize: '50px'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h5", {
        className: "card-title text-center text-truncate"
      }, player.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "flex-column"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("button", {
        className: "home-btn",
        onClick: this.gotoHome
      }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("button", {
        className: "signout-btn",
        onClick: this.signout
      }, "Sign-out")));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_8__.connect)(function (state) {
  return state;
})(Profile));

/***/ }),

/***/ "./src/components/AppContainer/RoomModal.jsx":
/*!***************************************************!*\
  !*** ./src/components/AppContainer/RoomModal.jsx ***!
  \***************************************************/
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var Model_Room__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Model/Room */ "./src/components/Model/Room.js");
/* harmony import */ var UtilsContainer_TabModal_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! UtilsContainer/TabModal.jsx */ "./src/components/UtilsContainer/TabModal.jsx");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var Room = /*#__PURE__*/function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Room, _React$PureComponent);

  var _super = _createSuper(Room);

  function Room() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Room);

    _this = _super.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "createRoom", function (e) {
      e.preventDefault();
      var gameName = _this.props.selectedGame.gameName;
      Model_Room__WEBPACK_IMPORTED_MODULE_8__["default"].createRoom($('#roomName').val(), gameName).then(function (resp) {
        _this.props.goTo("/game/".concat(gameName, "/").concat(resp._id));
      })["catch"](function (err) {
        return react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error(err.message, {
          toastId: 'CANT_CREATE_ROOM'
        });
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderCreateRoom", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("form", {
        onSubmit: _this.createRoom,
        autoComplete: "off",
        className: "sg-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("label", {
        htmlFor: "roomName"
      }, "Room Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("input", {
        type: "text",
        id: "roomName",
        required: true,
        placeholder: "Eg : Gaming Guys"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("button", {
        type: "submit"
      }, "Create"));
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "joinRoom", function (e) {
      e.preventDefault();
      var roomID = $('#roomID').val();
      var gameName = _this.props.selectedGame.gameName;
      Model_Room__WEBPACK_IMPORTED_MODULE_8__["default"].joinRoom(gameName, roomID).then(function (resp) {
        _this.props.goTo("/game/".concat(gameName, "/").concat(roomID));
      })["catch"](function (err) {
        return react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error(err.message, {
          toastId: 'CANT_JOIN_ROOM'
        });
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderJoinRoom", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("form", {
        onSubmit: _this.joinRoom,
        autoComplete: "off",
        className: "sg-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("label", {
        htmlFor: "roomID"
      }, "Room ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("input", {
        type: "text",
        id: "roomID",
        required: true,
        placeholder: "Eg : 123412341234"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("button", {
        type: "submit"
      }, "Join"));
    });

    _this.tabNames = ['Create', 'Join'];
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Room, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(UtilsContainer_TabModal_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        show: !_.isEmpty(this.props.selectedGame),
        onClose: this.props.onClose,
        tabNames: this.tabNames,
        defaultTabIndex: 0,
        tabs: [this.renderCreateRoom, this.renderJoinRoom]
      });
    }
  }]);

  return Room;
}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Room);

/***/ }),

/***/ "./src/components/AppContainer/index.js":
/*!**********************************************!*\
  !*** ./src/components/AppContainer/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Home_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.jsx */ "./src/components/AppContainer/Home.jsx");
/* harmony import */ var _Profile_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.jsx */ "./src/components/AppContainer/Profile.jsx");




var links = [{
  path: '/profile',
  component: _Profile_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: '/',
  component: _Home_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]
}];
function AppContainer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Switch, null, links.map(function (o, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
      path: o.path,
      key: i,
      component: o.component
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {
    to: "/"
  }));
}

/***/ }),

/***/ "./src/components/Model/Room.js":
/*!**************************************!*\
  !*** ./src/components/Model/Room.js ***!
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
    key: "createRoom",
    value: function createRoom(roomName, gameName) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("game/create", {
          gameName: gameName,
          roomName: roomName
        }).then(function (resp) {
          return resolve(resp);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "joinRoom",
    value: function joinRoom(gameName, roomID) {
      return new Promise(function (resolve, reject) {
        _Request__WEBPACK_IMPORTED_MODULE_2__["default"].post("game/".concat(roomID, "/join"), {
          gameName: gameName
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

/***/ "./src/components/UtilsContainer/TabModal.jsx":
/*!****************************************************!*\
  !*** ./src/components/UtilsContainer/TabModal.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AbstractModal_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AbstractModal.jsx */ "./src/components/UtilsContainer/AbstractModal.jsx");
/* harmony import */ var styles_modals_tab_modal_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styles/modals/tab-modal.scss */ "./assets/styles/modals/tab-modal.scss");
/* harmony import */ var styles_modals_tab_modal_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styles_modals_tab_modal_scss__WEBPACK_IMPORTED_MODULE_9__);
/* provided dependency */ var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var TabModal = /*#__PURE__*/function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TabModal, _React$PureComponent);

  var _super = _createSuper(TabModal);

  function TabModal(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TabModal);

    _this = _super.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setSelectedTabIndex", function (selectedTabIndex) {
      _this.setState({
        selectedTabIndex: selectedTabIndex
      });
    });

    _this.state = {
      selectedTabIndex: props.defaultTabIndex
    };
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TabModal, [{
    key: "getHeader",
    value: function getHeader() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "tab-modal-header"
      }, this.props.tabNames.map(function (o, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("button", {
          key: i,
          disabled: _this2.state.selectedTabIndex == i,
          onClick: function onClick() {
            return _this2.setSelectedTabIndex(i);
          }
        }, o);
      }));
    }
  }, {
    key: "getBody",
    value: function getBody() {
      var selectedTab = this.props.tabs[this.state.selectedTabIndex];
      return _.isFunction(selectedTab) ? selectedTab() : selectedTab;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_AbstractModal_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        show: this.props.show,
        onClose: this.props.onClose,
        header: this.getHeader(),
        body: this.getBody()
      });
    }
  }]);

  return TabModal;
}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/home.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/home.scss ***!
  \**************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".home-view {\n  padding: 20px;\n}\n\n.profile-btn {\n  border-radius: 100%;\n  height: 35px;\n  width: 35px;\n  background: #3a0455;\n  box-shadow: 0 0 5px white;\n  color: white;\n}\n\n.games-body {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 10px 0;\n}\n.games-body .sg-game-card {\n  margin: 10px;\n  padding: 5px;\n  border-radius: 10px;\n  background: #3a0455;\n  box-shadow: 0 0 5px white;\n  color: white;\n}\n.games-body .sg-game-card .sg-game-card-footer {\n  margin: 5px 0;\n}", ""]);
// Exports
module.exports = exports;


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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/modals/tab-modal.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/modals/tab-modal.scss ***!
  \**************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".tab-modal-header {\n  flex-shrink: 0;\n  display: flex;\n  width: 200px;\n  margin: 0 30px;\n}\n.tab-modal-header button {\n  width: 50%;\n  color: white;\n  background: transparent;\n  box-shadow: 0 0 3px white;\n}\n.tab-modal-header button:disabled {\n  opacity: 0.5;\n}\n.tab-modal-header button:first-child {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.tab-modal-header button:last-child {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/profile.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/profile.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".profile-view {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n}\n.profile-view .profile-card {\n  margin: 10px auto;\n  box-shadow: 0 0 5px white;\n  color: white;\n  text-align: center;\n  padding: 5px 20px;\n  border-radius: 5px;\n}\n.profile-view .profile-card > * {\n  margin: 5px 0;\n}\n.profile-view .home-btn,\n.profile-view .signout-btn {\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 10px auto;\n  color: white;\n}\n.profile-view .home-btn {\n  background: #1976d2;\n}\n.profile-view .signout-btn {\n  background: #da5454;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./assets/styles/home.scss":
/*!*********************************!*\
  !*** ./assets/styles/home.scss ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./home.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/home.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

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

/***/ }),

/***/ "./assets/styles/modals/tab-modal.scss":
/*!*********************************************!*\
  !*** ./assets/styles/modals/tab-modal.scss ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./tab-modal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/modals/tab-modal.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./assets/styles/profile.scss":
/*!************************************!*\
  !*** ./assets/styles/profile.scss ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./profile.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/profile.scss");

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
//# sourceMappingURL=bundle.src_components_AppContainer_index_js.js.map