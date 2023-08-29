"use strict";
(self["webpackChunkgames_ui"] = self["webpackChunkgames_ui"] || []).push([["src_components_GameContainer_index_js"],{

/***/ "./src/components/GameContainer/index.js":
/*!***********************************************!*\
  !*** ./src/components/GameContainer/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js");
/* harmony import */ var Utils_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Utils/Loader */ "./src/components/Utils/Loader.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var LayoutType1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_lodash_lodash_js"), __webpack_require__.e("vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-f72195"), __webpack_require__.e("src_components_GameContainer_PlayerContainer_Player_jsx"), __webpack_require__.e("src_components_GameContainer_GameLayout_jsx-node_modules_moment_locale_sync_recursive_")]).then(__webpack_require__.bind(__webpack_require__, /*! ./GameLayout.jsx */ "./src/components/GameContainer/GameLayout.jsx"));
});

var GameContainer = /*#__PURE__*/function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(GameContainer, _React$PureComponent);

  var _super = _createSuper(GameContainer);

  function GameContainer() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GameContainer);

    _this = _super.call(this);
    _this.links = [{
      path: '/uno/:id',
      GameLayout: LayoutType1,
      args: {
        GameComponent: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.lazy)(function () {
          return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_lodash_lodash_js"), __webpack_require__.e("src_components_GameContainer_PlayerContainer_Player_jsx"), __webpack_require__.e("src_components_GameContainer_UnoContainer_UnoContainer_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./UnoContainer/UnoContainer.jsx */ "./src/components/GameContainer/UnoContainer/UnoContainer.jsx"));
        }),
        gameDisplayName: "Uno",
        gameName: "uno"
      }
    }, {
      path: '/ass/:id',
      GameLayout: LayoutType1,
      args: {
        GameComponent: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.lazy)(function () {
          return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_lodash_lodash_js"), __webpack_require__.e("src_components_GameContainer_PlayerContainer_Player_jsx"), __webpack_require__.e("src_components_GameContainer_AssContainer_AssContainer_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./AssContainer/AssContainer.jsx */ "./src/components/GameContainer/AssContainer/AssContainer.jsx"));
        }),
        gameDisplayName: "Ass",
        gameName: "ass"
      }
    }, {
      path: '/leastcount/:id',
      GameLayout: LayoutType1,
      args: {
        GameComponent: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.lazy)(function () {
          return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_lodash_lodash_js"), __webpack_require__.e("src_components_GameContainer_PlayerContainer_Player_jsx"), __webpack_require__.e("src_components_GameContainer_LeastCountContainer_LeastCountContainer_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./LeastCountContainer/LeastCountContainer.jsx */ "./src/components/GameContainer/LeastCountContainer/LeastCountContainer.jsx"));
        }),
        gameDisplayName: "LeastCount",
        gameName: "leastcount"
      }
    }, {
      path: '/othello/:id',
      GameLayout: LayoutType1,
      args: {
        GameComponent: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.lazy)(function () {
          return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_lodash_lodash_js"), __webpack_require__.e("vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_babel_runtime_helpers_es-58772e"), __webpack_require__.e("src_components_GameContainer_PlayerContainer_Player_jsx"), __webpack_require__.e("src_components_GameContainer_OthelloContainer_OthelloContainer_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./OthelloContainer/OthelloContainer.jsx */ "./src/components/GameContainer/OthelloContainer/OthelloContainer.jsx"));
        }),
        gameDisplayName: "Othello",
        gameName: "othello"
      }
    }];
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GameContainer, [{
    key: "render",
    value: function render() {
      var basePath = this.props.match.path;
      var LOADING_TEXT = "Fetching common assets...";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Switch, null, this.links.map(function (o, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
          key: i,
          path: basePath + o.path,
          render: (0,Utils_Loader__WEBPACK_IMPORTED_MODULE_6__.getComponent)(o.GameLayout, o.args, LOADING_TEXT)
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Redirect, {
        to: "/"
      }));
    }
  }]);

  return GameContainer;
}(react__WEBPACK_IMPORTED_MODULE_5__.PureComponent);



/***/ })

}]);
//# sourceMappingURL=bundle.src_components_GameContainer_index_js.js.map