(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart"],{

/***/ "./src/pages/checkoutPages/cart/Cart.js":
/*!**********************************************!*\
  !*** ./src/pages/checkoutPages/cart/Cart.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _actions_cartActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _components_CartItems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/CartItems */ "./src/pages/checkoutPages/cart/components/CartItems.js");
/* harmony import */ var _components_CartSummary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/CartSummary */ "./src/pages/checkoutPages/cart/components/CartSummary.js");
/* harmony import */ var _components_EmptyCart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/EmptyCart */ "./src/pages/checkoutPages/cart/components/EmptyCart.js");
/* harmony import */ var _components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/loading/LoadingButton */ "./src/components/loading/LoadingButton.js");













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  var _sticky;

  return {
    sticky: (_sticky = {
      position: "-webkit-sticky"
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sticky, "position", "sticky"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sticky, "bottom", 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_sticky, theme.breakpoints.down("xs"), {
      position: "fixed",
      zIndex: 9,
      display: "flex",
      width: "100%",
      marginLeft: "-8px",
      bottom: "56px"
    }), _sticky),
    price: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      float: "right",
      margin: theme.spacing(2)
    }, theme.breakpoints.down("xs"), {
      marginLeft: "auto"
    }),
    button: {
      margin: theme.spacing(1)
    },
    mb1: {
      marginBottom: theme.spacing(1)
    }
  };
});

var Cart = function Cart() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state;
  }),
      cart = _useSelector.cart,
      loadingUI = _useSelector.ui.loadingUI;

  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_actions_cartActions__WEBPACK_IMPORTED_MODULE_8__["fetchCart"])());
  }, [dispatch]);

  if (loadingUI === true) {
    return null;
  }

  if (cart.items_count === 0) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_EmptyCart__WEBPACK_IMPORTED_MODULE_11__["default"], null);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 2
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    lg: 9,
    md: 8,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CartItems__WEBPACK_IMPORTED_MODULE_9__["default"], {
    items: cart.items,
    editable: true
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.sticky,
    boxShadow: 3,
    bgcolor: "background.paper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.button,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    to: "/order",
    variant: "contained",
    color: "primary",
    size: "large",
    display: "inline"
  }, "Continue shopping"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "subtitle1",
    display: "flex",
    className: classes.price
  }, "\u20B9 ", cart.total_price))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    lg: 3,
    md: 4,
    xs: 12,
    className: classes.mb1
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CartSummary__WEBPACK_IMPORTED_MODULE_10__["default"], {
    cart: cart
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./src/pages/checkoutPages/cart/components/CartSummary.js":
/*!****************************************************************!*\
  !*** ./src/pages/checkoutPages/cart/components/CartSummary.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  var _root;

  return {
    root: (_root = {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(2),
      position: "-webkit-sticky"
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_root, "position", "sticky"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_root, "top", theme.spacing(1)), _root),
    right: {
      float: "right"
    },
    divider: {
      margin: theme.spacing(1)
    },
    control: {
      marginBottom: theme.spacing(2)
    }
  };
});

var CartSummary = function CartSummary(_ref) {
  var cart = _ref.cart;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.control
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    display: "inline"
  }, "Products price (", cart.items_count, " product)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    display: "inline",
    className: classes.right
  }, "\u20B9 ", (cart.total_price + cart.total_customer_profit).toFixed(2))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.control
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "primary",
    display: "inline"
  }, "Products profit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "primary",
    display: "inline",
    className: classes.right
  }, "\u20B9 ", cart.total_customer_profit)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.control
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    display: "inline"
  }, "Total price"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    display: "inline",
    className: classes.right
  }, "\u20B9 ", cart.total_price)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.divider
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    align: "center"
  }, "The amount payable:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    align: "center"
  }, "\u20B9 ", cart.total_price)));
};

/* harmony default export */ __webpack_exports__["default"] = (CartSummary);

/***/ }),

/***/ "./src/pages/checkoutPages/cart/components/EmptyCart.js":
/*!**************************************************************!*\
  !*** ./src/pages/checkoutPages/cart/components/EmptyCart.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");






var EmptyCart = function EmptyCart() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      textAlign: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      padding: "30px"
    },
    variant: "h3"
  }, "Your cart is empty"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      margin: "10px"
    },
    variant: "contained",
    color: "secondary",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/products",
    size: "large"
  }, "products"));
};

/* harmony default export */ __webpack_exports__["default"] = (EmptyCart);

/***/ }),

/***/ "./src/pages/checkoutPages/cart/index.js":
/*!***********************************************!*\
  !*** ./src/pages/checkoutPages/cart/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart */ "./src/pages/checkoutPages/cart/Cart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Cart__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

}]);
//# sourceMappingURL=cart.b0bd97e1133d4ac62e14.js.map