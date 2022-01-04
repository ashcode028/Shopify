(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart~order~orders-detail"],{

/***/ "./src/components/layouts/DialogTitle.js":
/*!***********************************************!*\
  !*** ./src/components/layouts/DialogTitle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__);






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1)
    }
  };
});

var DialogTitle = function DialogTitle(props) {
  var children = props.children,
      onClose = props.onClose;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    disableTypography: true,
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h6"
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default.a, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (DialogTitle);

/***/ }),

/***/ "./src/components/loading/LoadingButton.js":
/*!*************************************************!*\
  !*** ./src/components/loading/LoadingButton.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function () {
  return {
    button: {
      position: "relative"
    },
    progress: {
      position: "absolute"
    }
  };
});

var LoadingButton = function LoadingButton(_ref) {
  var children = _ref.children,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["children"]);

  var loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.ui.loadingButton;
  });
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classes.button
  }, rest, {
    disabled: rest.disabled || loading
  }), children, loading && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 30,
    color: rest.color,
    className: classes.progress
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingButton);

/***/ }),

/***/ "./src/pages/checkoutPages/cart/components/CartItem.js":
/*!*************************************************************!*\
  !*** ./src/pages/checkoutPages/cart/components/CartItem.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _UpdateCartItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UpdateCartItem */ "./src/pages/checkoutPages/cart/components/UpdateCartItem.js");










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    img: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
      width: "125px",
      height: "125px",
      objectFit: "contain"
    }, theme.breakpoints.down("xs"), {
      width: "104px",
      height: "104px"
    }),
    m2: {
      margin: theme.spacing(2)
    },
    mt1: {
      marginTop: theme.spacing(1)
    },
    link: {
      textDecoration: "none"
    },
    price: {
      float: "right"
    },
    quantity: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
      marginTop: theme.spacing(1)
    }, theme.breakpoints.down("xs"), {
      margin: theme.spacing(0, 3, 2)
    })
  };
});

var getPrice = function getPrice(product) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, product.discount_price ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    display: "inline",
    variant: "body1"
  }, "\u20B9 ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("del", {
    style: {
      color: "grey"
    }
  }, product.price), " ", product.discount_price) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    display: "inline",
    variant: "body1"
  }, "\u20B9 ", product.price));
};

var CartItem = function CartItem(_ref) {
  var editable = _ref.editable,
      item = _ref.item,
      product = _ref.item.product;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  var matches = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__["default"])(theme.breakpoints.down("xs"));

  var QuantityAndPrice = function QuantityAndPrice() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.quantity
    }, editable ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_UpdateCartItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: item.id,
      available_count: item.size.available_count,
      quantity: item.quantity
    }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      display: "inline"
    }, "Quantity: ", item.quantity), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.price,
      variant: "h6",
      display: "inline"
    }, "\u20B9 ", item.total_price));
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.m2,
    alignContent: "center",
    item: true,
    md: 2
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/products/".concat(product.slug)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: product.slug,
    className: classes.img,
    src: product.photo_main
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.m2,
    item: true,
    md: true,
    xs: true
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.link,
    color: "inherit",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    to: "/products/".concat(product.slug)
  }, product.title.substring(0, product.title.lastIndexOf(' '))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.mt1,
    variant: "subtitle1"
  }, "Size: ", item.size.size), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.mt1,
    variant: "subtitle1"
  }, "Price: ", getPrice(product)), !matches && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(QuantityAndPrice, null))), matches && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(QuantityAndPrice, null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (CartItem);

/***/ }),

/***/ "./src/pages/checkoutPages/cart/components/CartItems.js":
/*!**************************************************************!*\
  !*** ./src/pages/checkoutPages/cart/components/CartItems.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartItem */ "./src/pages/checkoutPages/cart/components/CartItem.js");




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      marginTop: theme.spacing(1)
    }
  };
});

var CartItems = function CartItems(_ref) {
  var items = _ref.items,
      editable = _ref.editable;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root
  }, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      item: item,
      editable: editable
    });
  }));
};

CartItems.defaultProps = {
  editable: false
};
/* harmony default export */ __webpack_exports__["default"] = (CartItems);

/***/ }),

/***/ "./src/pages/checkoutPages/cart/components/UpdateCartItem.js":
/*!*******************************************************************!*\
  !*** ./src/pages/checkoutPages/cart/components/UpdateCartItem.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Remove */ "./node_modules/@material-ui/icons/Remove.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _actions_cartActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _components_layouts_DialogTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/layouts/DialogTitle */ "./src/components/layouts/DialogTitle.js");
/* harmony import */ var _components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/loading/LoadingButton */ "./src/components/loading/LoadingButton.js");

















var UpdateCartItem = function UpdateCartItem(_ref) {
  var id = _ref.id,
      quantity = _ref.quantity,
      available_count = _ref.available_count;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleSubmit = function handleSubmit() {
    dispatch(Object(_actions_cartActions__WEBPACK_IMPORTED_MODULE_12__["removeFromCart"])(id, handleClose));
  };

  var handleAdd = function handleAdd() {
    dispatch(Object(_actions_cartActions__WEBPACK_IMPORTED_MODULE_12__["updateQuantity"])(id, quantity + 1));
  };

  var handleRemove = function handleRemove() {
    dispatch(Object(_actions_cartActions__WEBPACK_IMPORTED_MODULE_12__["updateQuantity"])(id, quantity - 1));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "outlined",
    color: "primary",
    "aria-label": "split button",
    size: "small"
  }, quantity !== 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: handleRemove
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_9___default.a, {
    fontSize: "small"
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default.a, {
    onClick: handleOpen,
    fontSize: "small"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], null, quantity), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: handleAdd,
    disabled: available_count === quantity
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_10___default.a, {
    fontSize: "small"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: open,
    onClose: handleClose,
    fullWidth: true,
    maxWidth: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layouts_DialogTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClose: handleClose
  }, "Remove item"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Are you sure you want remove this item from your cart?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: handleClose,
    variant: "outlined"
  }, "No, Cancel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClick: handleSubmit,
    variant: "contained",
    color: "secondary"
  }, "Yes, Remove"))));
};

/* harmony default export */ __webpack_exports__["default"] = (UpdateCartItem);

/***/ }),

/***/ "./src/redux/actions/cartActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/cartActions.js ***!
  \******************************************/
/*! exports provided: fetchCart, addToCart, removeFromCart, updateQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCart", function() { return fetchCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCart", function() { return removeFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateQuantity", function() { return updateQuantity; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notifActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifActions */ "./src/redux/actions/notifActions.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/redux/types.js");



var fetchCart = function fetchCart() {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["START_LOADING_UI"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/cart/").then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_CART"],
        payload: response.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["STOP_LOADING_UI"]
      });
    });
  };
};
var addToCart = function addToCart(productId, sizeId, history) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["START_LOADING_BUTTON"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/cart/", {
      product: productId,
      size: sizeId
    }).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["ADD_TO_CART"],
        payload: response.data
      });
      dispatch(fetchCart());
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["STOP_LOADING_BUTTON"]
      });
      history.push("/cart");
      dispatch(Object(_notifActions__WEBPACK_IMPORTED_MODULE_1__["addNotif"])({
        message: "Item has been added to your cart",
        options: {
          variant: "info"
        }
      }));
    });
  };
};
var removeFromCart = function removeFromCart(id, handleClose) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["START_LOADING_BUTTON"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("/api/cart/".concat(id, "/")).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FROM_CART"],
        payload: id
      });
      dispatch(fetchCart());
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["STOP_LOADING_BUTTON"]
      });
      handleClose();
      dispatch(Object(_notifActions__WEBPACK_IMPORTED_MODULE_1__["addNotif"])({
        message: "Item has been removed",
        options: {
          variant: "error"
        }
      }));
    });
  };
};
var updateQuantity = function updateQuantity(id, quantity) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["START_LOADING_UI"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/cart/".concat(id, "/"), {
      quantity: quantity
    }).then(function (response) {
      dispatch(fetchCart());
    });
  };
};

/***/ })

}]);
//# sourceMappingURL=cart~order~orders-detail.9a1d9f1c3d32bd9c4496.js.map