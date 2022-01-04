(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products"],{

/***/ "./node_modules/@material-ui/icons/ChevronLeft.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/icons/ChevronLeft.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'ChevronLeft');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/ChevronRight.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/icons/ChevronRight.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'ChevronRight');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/ExpandMore.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/ExpandMore.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');

exports.default = _default;

/***/ }),

/***/ "./src/components/layouts/MyExpansionPanel.js":
/*!****************************************************!*\
  !*** ./src/components/layouts/MyExpansionPanel.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__);






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  };
});

var MyExpansionPanel = function MyExpansionPanel(_ref) {
  var children = _ref.children,
      title = _ref.title,
      detailClass = _ref.detailClass,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["children", "title", "detailClass"]);

  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ExpansionPanel"], rest, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ExpansionPanelSummary"], {
    expandIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default.a, null)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.heading
  }, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ExpansionPanelDetails"], {
    className: detailClass
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (MyExpansionPanel);

/***/ }),

/***/ "./src/pages/productPages/products/Products.js":
/*!*****************************************************!*\
  !*** ./src/pages/productPages/products/Products.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _actions_productActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @actions/productActions */ "./src/redux/actions/productActions.js");
/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ProductItem */ "./src/pages/productPages/products/components/ProductItem.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Pagination */ "./src/pages/productPages/products/components/Pagination.js");
/* harmony import */ var _components_Ordering__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Ordering */ "./src/pages/productPages/products/components/Ordering.js");
/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Filters */ "./src/pages/productPages/products/components/Filters/index.js");










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      marginTop: theme.spacing(1)
    }
  };
});

var Products = function Products(_ref) {
  var history = _ref.history,
      location = _ref.location;
  var products = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.products.products;
  });
  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_actions_productActions__WEBPACK_IMPORTED_MODULE_5__["fetchProducts"])(location.search));
  }, [location.search, dispatch]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    spacing: 2,
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 3,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Filters__WEBPACK_IMPORTED_MODULE_9__["default"], {
    location: location,
    history: history
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Ordering__WEBPACK_IMPORTED_MODULE_8__["default"], {
    location: location
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    spacing: 1
  }, products.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: product.id,
      item: true,
      md: 3,
      xs: 12
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ProductItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      product: product,
      history: history
    }));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    location: location
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./src/pages/productPages/products/components/Filters/CategoryFilter.js":
/*!******************************************************************************!*\
  !*** ./src/pages/productPages/products/components/Filters/CategoryFilter.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/pages/productPages/products/components/Filters/utils.js");







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    paper: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(0.5)
    }
  };
});

var CategoryFilter = function CategoryFilter(_ref) {
  var location = _ref.location;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      category = _useState2[0],
      setCategory = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.paper
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["appendQuery"])(location, {
      search: "topwear"
    }),
    onClick: function onClick() {
      return setCategory("topwear");
    },
    className: classes.button,
    color: "secondary",
    variant: category === "topwear" ? "contained" : "outlined"
  }, "Topwear"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["appendQuery"])(location, {
      search: "bottomwear"
    }),
    onClick: function onClick() {
      return setCategory("bottomwear");
    },
    className: classes.button,
    color: "secondary",
    variant: category === "bottomwear" ? "contained" : "outlined"
  }, "Bottomwear"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["appendQuery"])(location, {
      search: "footwear"
    }),
    onClick: function onClick() {
      return setCategory("footwear");
    },
    className: classes.button,
    color: "secondary",
    variant: category === "footwear" ? "contained" : "outlined"
  }, "Footwear"));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryFilter);

/***/ }),

/***/ "./src/pages/productPages/products/components/Filters/Filters.js":
/*!***********************************************************************!*\
  !*** ./src/pages/productPages/products/components/Filters/Filters.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_MyExpansionPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layouts/MyExpansionPanel */ "./src/components/layouts/MyExpansionPanel.js");
/* harmony import */ var _PriceFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PriceFilter */ "./src/pages/productPages/products/components/Filters/PriceFilter.js");
/* harmony import */ var _OnlyAvailable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OnlyAvailable */ "./src/pages/productPages/products/components/Filters/OnlyAvailable.js");
/* harmony import */ var _SearchInResults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchInResults */ "./src/pages/productPages/products/components/Filters/SearchInResults.js");
/* harmony import */ var _SubmittedFilters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubmittedFilters */ "./src/pages/productPages/products/components/Filters/SubmittedFilters.js");
/* harmony import */ var _CategoryFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CategoryFilter */ "./src/pages/productPages/products/components/Filters/CategoryFilter.js");








var Filters = function Filters(_ref) {
  var location = _ref.location;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubmittedFilters__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchInResults__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnlyAvailable__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layouts_MyExpansionPanel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Price range"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceFilter__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategoryFilter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    location: location
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ }),

/***/ "./src/pages/productPages/products/components/Filters/OnlyAvailable.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/productPages/products/components/Filters/OnlyAvailable.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-react-router */ "./node_modules/use-react-router/use-react-router.js");
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(use_react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/pages/productPages/products/components/Filters/utils.js");











var OnlyAvailable = function OnlyAvailable() {
  var _useReactRouter = use_react_router__WEBPACK_IMPORTED_MODULE_4___default()(),
      history = _useReactRouter.history,
      location = _useReactRouter.location;

  var _queryString$parse = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.parse(location.search),
      available = _queryString$parse.available;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Boolean(available)),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setValue(Boolean(available));
  }, [available]);

  var handleChange = function handleChange(e) {
    var checked = e.target.checked;

    if (checked === true) {
      history.push(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["appendQuery"])(location, {
        available: true
      }));
    } else if (checked === false) {
      history.push(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["removeQuery"])(location, "available"));
    }

    setValue(checked);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      marginBottom: "8px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      padding: "8px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    row: true
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    control: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7__["default"], {
      checked: value,
      onChange: handleChange
    }),
    label: "Only available products"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (OnlyAvailable);

/***/ }),

/***/ "./src/pages/productPages/products/components/Filters/PriceFilter.js":
/*!***************************************************************************!*\
  !*** ./src/pages/productPages/products/components/Filters/PriceFilter.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-react-router */ "./node_modules/use-react-router/use-react-router.js");
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(use_react_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/pages/productPages/products/components/Filters/utils.js");










var Slider = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(function (theme) {
  return {
    root: {
      color: theme.palette.secondary.main,
      height: 8
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus,&:hover,&$active": {
        boxShadow: "inherit"
      }
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)"
    },
    track: {
      height: 8,
      borderRadius: 4
    },
    rail: {
      height: 8,
      borderRadius: 4
    }
  };
})(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_8__["default"]);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      width: 300 + theme.spacing(3) * 2
    }
  };
});

var PriceFilter = function PriceFilter() {
  var _useReactRouter = use_react_router__WEBPACK_IMPORTED_MODULE_6___default()(),
      history = _useReactRouter.history,
      location = _useReactRouter.location;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.products;
  }),
      max_price = _useSelector.max_price,
      min_price = _useSelector.min_price;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([0, 0]),
      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var classes = useStyles();
  var parsed = query_string__WEBPACK_IMPORTED_MODULE_5___default.a.parse(location.search);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setValue([parsed.min_price || min_price, parsed.max_price || max_price]);
  }, [parsed.min_price, parsed.max_price, min_price, max_price]);

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  var handleSubmit = function handleSubmit(event, value) {
    if (value) {
      history.push(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["appendQuery"])(location, {
        min_price: value[0],
        max_price: value[1]
      }));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Slider, {
    max: max_price,
    min: min_price,
    value: value,
    onChange: handleChange,
    onChangeCommitted: handleSubmit,
    valueLabelDisplay: "auto"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    gutterBottom: true
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "from \u20B9 ", value[0]), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    style: {
      float: "right"
    }
  }, "to \u20B9 ", value[1])));
};

/* harmony default export */ __webpack_exports__["default"] = (PriceFilter);

/***/ }),

/***/ "./src/pages/productPages/products/components/Filters/SearchInResults.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/productPages/products/components/Filters/SearchInResults.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! use-react-router */ "./node_modules/use-react-router/use-react-router.js");
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(use_react_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./src/pages/productPages/products/components/Filters/utils.js");











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(1)
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    }
  };
});

var SearchInResults = function SearchInResults() {
  var classes = useStyles();

  var _useReactRouter = use_react_router__WEBPACK_IMPORTED_MODULE_5___default()(),
      history = _useReactRouter.history,
      location = _useReactRouter.location;

  var parsed = query_string__WEBPACK_IMPORTED_MODULE_4___default.a.parse(location.search);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    history.push(Object(_utils__WEBPACK_IMPORTED_MODULE_10__["appendQuery"])(location, {
      search: parsed.search ? "".concat(parsed.search, " ").concat(value) : value,
      page: "1"
    }));
    setValue("");
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.input,
    placeholder: "Search in results",
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.iconButton,
    onClick: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchInResults);

/***/ }),

/***/ "./src/pages/productPages/products/components/Filters/SubmittedFilters.js":
/*!********************************************************************************!*\
  !*** ./src/pages/productPages/products/components/Filters/SubmittedFilters.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-react-router */ "./node_modules/use-react-router/use-react-router.js");
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./src/pages/productPages/products/components/Filters/utils.js");











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    margin: {
      margin: "4px"
    },
    padding: {
      padding: theme.spacing(1)
    },
    mb1: {
      marginBottom: theme.spacing(1)
    },
    remove: {
      float: "right",
      marginRight: theme.spacing(1),
      cursor: "pointer",
      fontWeight: "bold"
    }
  };
});

var SubmittedFilters = function SubmittedFilters() {
  var _useReactRouter = use_react_router__WEBPACK_IMPORTED_MODULE_3___default()(),
      history = _useReactRouter.history,
      location = _useReactRouter.location;

  var _queryString$parse = query_string__WEBPACK_IMPORTED_MODULE_4___default.a.parse(location.search),
      available = _queryString$parse.available,
      min_price = _queryString$parse.min_price,
      max_price = _queryString$parse.max_price,
      search = _queryString$parse.search;

  var classes = useStyles();

  if (available || min_price || max_price || search) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.mb1
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.padding
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      display: "inline",
      variant: "subtitle1"
    }, "Submitted Filters:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: function onClick() {
        return history.push("/products");
      },
      color: "error",
      display: "inline",
      variant: "subtitle1",
      className: classes.remove
    }, "remove"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], null)), available === "true" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return history.push(Object(_utils__WEBPACK_IMPORTED_MODULE_10__["removeQuery"])(location, "available"));
      },
      className: classes.margin,
      size: "small",
      variant: "outlined"
    }, "Only available products", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default.a, {
      fontSize: "small",
      color: "action"
    })), min_price && max_price && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return history.push(Object(_utils__WEBPACK_IMPORTED_MODULE_10__["removeQuery"])(location, ["min_price", "max_price"]));
      },
      className: classes.margin,
      size: "small",
      variant: "outlined"
    }, "from \u20B9 ", min_price, " to \u20B9 ", max_price, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default.a, {
      fontSize: "small",
      color: "action"
    })), search && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: function onClick() {
        return history.push(Object(_utils__WEBPACK_IMPORTED_MODULE_10__["removeQuery"])(location, "search"));
      },
      className: classes.margin,
      size: "small",
      variant: "outlined"
    }, search, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default.a, {
      fontSize: "small",
      color: "action"
    })));
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (SubmittedFilters);

/***/ }),

/***/ "./src/pages/productPages/products/components/Filters/index.js":
/*!*********************************************************************!*\
  !*** ./src/pages/productPages/products/components/Filters/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filters */ "./src/pages/productPages/products/components/Filters/Filters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Filters__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/pages/productPages/products/components/Filters/utils.js":
/*!*********************************************************************!*\
  !*** ./src/pages/productPages/products/components/Filters/utils.js ***!
  \*********************************************************************/
/*! exports provided: appendQuery, removeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendQuery", function() { return appendQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeQuery", function() { return removeQuery; });
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_8__);









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // Append new query with last query

function appendQuery(location, query) {
  var parsed = query_string__WEBPACK_IMPORTED_MODULE_8___default.a.parse(location.search);
  var pathname = location.pathname;

  if (pathname.slice(-1) !== "/") {
    pathname += "/";
  }

  return _objectSpread({}, location, {
    pathname: pathname,
    search: "?" + query_string__WEBPACK_IMPORTED_MODULE_8___default.a.stringify(_objectSpread({}, parsed, {}, query))
  });
}
function removeQuery(location, queries) {
  var parsed = query_string__WEBPACK_IMPORTED_MODULE_8___default.a.parse(location.search);

  try {
    queries.map(function (query) {
      return delete parsed[query];
    });
  } catch (_unused) {
    delete parsed[queries];
  }

  return _objectSpread({}, location, {
    search: "?" + query_string__WEBPACK_IMPORTED_MODULE_8___default.a.stringify(parsed)
  });
}

/***/ }),

/***/ "./src/pages/productPages/products/components/Ordering.js":
/*!****************************************************************!*\
  !*** ./src/pages/productPages/products/components/Ordering.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _Filters_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Filters/utils */ "./src/pages/productPages/products/components/Filters/utils.js");







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    paper: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(0.5)
    }
  };
});

var Ordering = function Ordering(_ref) {
  var location = _ref.location;
  var ordering = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.products.ordering;
  });
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.paper
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: Object(_Filters_utils__WEBPACK_IMPORTED_MODULE_6__["removeQuery"])(location, "ordering"),
    className: classes.button,
    color: "secondary",
    variant: ordering === null ? "contained" : "outlined"
  }, "Newest"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: Object(_Filters_utils__WEBPACK_IMPORTED_MODULE_6__["appendQuery"])(location, {
      ordering: "max_price"
    }),
    className: classes.button,
    color: "secondary",
    variant: ordering === "max_price" ? "contained" : "outlined"
  }, "expensivest"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: Object(_Filters_utils__WEBPACK_IMPORTED_MODULE_6__["appendQuery"])(location, {
      ordering: "min_price"
    }),
    className: classes.button,
    color: "secondary",
    variant: ordering === "min_price" ? "contained" : "outlined"
  }, "cheapest"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: Object(_Filters_utils__WEBPACK_IMPORTED_MODULE_6__["appendQuery"])(location, {
      ordering: "best_seller"
    }),
    className: classes.button,
    color: "secondary",
    variant: ordering === "best_seller" ? "contained" : "outlined"
  }, "Bestselling"));
};

/* harmony default export */ __webpack_exports__["default"] = (Ordering);

/***/ }),

/***/ "./src/pages/productPages/products/components/Pagination.js":
/*!******************************************************************!*\
  !*** ./src/pages/productPages/products/components/Pagination.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Filters_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Filters/utils */ "./src/pages/productPages/products/components/Filters/utils.js");









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      margin: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(0.5)
    }
  };
});

var Pagination = function Pagination(_ref) {
  var location = _ref.location;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.products;
  }),
      current = _useSelector.current,
      next = _useSelector.next,
      previous = _useSelector.previous,
      pages_count = _useSelector.pages_count;

  var classes = useStyles();
  var Buttons = [];

  if (pages_count) {
    for (var i = 1; i < pages_count + 1; i++) {
      Buttons.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: i,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
        to: Object(_Filters_utils__WEBPACK_IMPORTED_MODULE_8__["appendQuery"])(location, {
          page: i
        }),
        variant: "outlined",
        className: classes.button,
        size: "small",
        color: i === current ? "inherit" : "default"
      }, i));
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    alignItems: "center",
    justify: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: "/products/".concat(previous),
    disabled: previous === null,
    variant: "outlined",
    className: classes.button,
    size: "small"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7___default.a, null)), Buttons, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disabled: next === null,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
    to: "/products/".concat(next),
    variant: "outlined",
    size: "small",
    className: classes.button
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_6___default.a, null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./src/pages/productPages/products/components/ProductItem.js":
/*!*******************************************************************!*\
  !*** ./src/pages/productPages/products/components/ProductItem.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      height: "365px"
    },
    height: {
      height: "100%"
    },
    image: {
      objectFit: "contain",
      maxHeight: "200px",
      maxWidth: "100%",
      height: "100%",
      width: "100%"
    }
  };
});

var ProductItem = function ProductItem(_ref) {
  var product = _ref.product,
      history = _ref.history;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.height,
    onClick: function onClick() {
      return history.push("/products/".concat(product.slug));
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.height
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.imageWrap
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "img",
    className: classes.image,
    src: product.photo_main,
    title: product.title.substring(0, product.title.lastIndexOf(' '))
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    noWrap: true,
    gutterBottom: true,
    variant: "subtitle1",
    component: "h2"
  }, product.title.substring(0, product.title.lastIndexOf(' '))), product.available === false ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    color: "error",
    variant: "h5",
    component: "h2"
  }, "unavailable") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, product.discount_price ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    variant: "h6",
    color: "error",
    component: "h2"
  }, product.discount_percent, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    variant: "h6",
    component: "h2"
  }, "\u20B9 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", null, product.price), " ", product.discount_price)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gutterBottom: true,
    variant: "h6",
    component: "h2"
  }, "\u20B9 ", product.price))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

/***/ }),

/***/ "./src/pages/productPages/products/index.js":
/*!**************************************************!*\
  !*** ./src/pages/productPages/products/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products */ "./src/pages/productPages/products/Products.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Products__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/redux/actions/productActions.js":
/*!*********************************************!*\
  !*** ./src/redux/actions/productActions.js ***!
  \*********************************************/
/*! exports provided: fetchProducts, fetchProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProduct", function() { return fetchProduct; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/redux/types.js");


var fetchProducts = function fetchProducts() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "?page=1";
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["START_LOADING_UI"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/products/".concat(query)).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCTS"],
        payload: response.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["STOP_LOADING_UI"]
      });
    });
  };
};
var fetchProduct = function fetchProduct(slug) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["START_LOADING_UI"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/products/".concat(slug, "/")).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCT"],
        payload: response.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["STOP_LOADING_UI"]
      });
    });
  };
};

/***/ })

}]);
//# sourceMappingURL=products.83af946990aa2d09bb9d.js.map