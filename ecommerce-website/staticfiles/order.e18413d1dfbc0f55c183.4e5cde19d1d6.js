(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order"],{

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

/***/ "./src/pages/checkoutPages/order/Order.js":
/*!************************************************!*\
  !*** ./src/pages/checkoutPages/order/Order.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _actions_cartActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _actions_profileActions_AddressActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @actions/profileActions/AddressActions */ "./src/redux/actions/profileActions/AddressActions.js");
/* harmony import */ var _components_SelectAddress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/SelectAddress */ "./src/pages/checkoutPages/order/components/SelectAddress.js");
/* harmony import */ var _cart_components_CartItems__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cart/components/CartItems */ "./src/pages/checkoutPages/cart/components/CartItems.js");
/* harmony import */ var _cart_components_CartSummary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../cart/components/CartSummary */ "./src/pages/checkoutPages/cart/components/CartSummary.js");
/* harmony import */ var _components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/loading/LoadingButton */ "./src/components/loading/LoadingButton.js");















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  var _sticky;

  return {
    mt1: {
      marginTop: theme.spacing(1)
    },
    m1: {
      margin: theme.spacing(1)
    },
    sticky: (_sticky = {
      marginTop: "8px",
      position: "-webkit-sticky"
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_sticky, "position", "sticky"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_sticky, "bottom", 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_sticky, theme.breakpoints.down("xs"), {
      position: "fixed",
      zIndex: 9,
      display: "flex",
      width: "100%",
      marginLeft: "-8px",
      bottom: "56px"
    }), _sticky),
    button: {
      margin: theme.spacing(1),
      float: "right"
    },
    right: {
      marginLeft: "auto"
    }
  };
});

var Order = function Order(_ref) {
  var history = _ref.history;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state;
  }),
      cart = _useSelector.cart,
      loadingUI = _useSelector.ui.loadingUI,
      addresses = _useSelector.profile.addresses;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(addresses[0] || ""),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      address = _useState2[0],
      setAddress = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (cart.items_count === 0) {
      history.push("/cart");
    }
  }, [cart.items_count]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch(Object(_actions_cartActions__WEBPACK_IMPORTED_MODULE_9__["fetchCart"])());
    dispatch(Object(_actions_profileActions_AddressActions__WEBPACK_IMPORTED_MODULE_10__["fetchAddresses"])());
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setAddress(addresses[0] || "");
  }, [addresses]);

  if (loadingUI === true) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    spacing: 2
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    lg: 9,
    md: 8,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SelectAddress__WEBPACK_IMPORTED_MODULE_11__["default"], {
    setAddress: setAddress,
    address: address,
    addresses: addresses
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_cart_components_CartItems__WEBPACK_IMPORTED_MODULE_12__["default"], {
    items: cart.items
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    boxShadow: 3,
    bgcolor: "background.paper",
    className: classes.sticky
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    spacing: 1
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    md: 3
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.m1,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
    to: "/cart",
    variant: "outlined"
  }, "Back to cart")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    md: 5,
    xs: true,
    className: classes.right
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.button,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
    to: "/payment",
    variant: "contained",
    color: "primary",
    fullWidth: true
  }, "Check out"))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    lg: 3,
    md: 4,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_cart_components_CartSummary__WEBPACK_IMPORTED_MODULE_13__["default"], {
    cart: cart
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Order);

/***/ }),

/***/ "./src/pages/checkoutPages/order/components/ChangeAddress.js":
/*!*******************************************************************!*\
  !*** ./src/pages/checkoutPages/order/components/ChangeAddress.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _components_layouts_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/layouts/DialogTitle */ "./src/components/layouts/DialogTitle.js");
/* harmony import */ var _pages_profilePages_addresses_components_CreateAddress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pages/profilePages/addresses/components/CreateAddress */ "./src/pages/profilePages/addresses/components/CreateAddress/index.js");
/* harmony import */ var _pages_profilePages_addresses_components_AddressItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pages/profilePages/addresses/components/AddressItem */ "./src/pages/profilePages/addresses/components/AddressItem.js");
/* harmony import */ var _pages_profilePages_addresses_components_CreateAddress_CreateAddressButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pages/profilePages/addresses/components/CreateAddress/CreateAddressButton */ "./src/pages/profilePages/addresses/components/CreateAddress/CreateAddressButton.js");










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    paper: {
      margin: theme.spacing(1),
      "&:last-child": {
        marginBottom: theme.spacing(5)
      }
    },
    button: {
      borderWidth: "1px 0 0 0",
      border: "solid #e0e0e0"
    },
    createAddress: {
      padding: theme.spacing(2),
      margin: theme.spacing(1)
    }
  };
});

var ChangeAddress = function ChangeAddress(_ref) {
  var setOpen = _ref.setOpen,
      addresses = _ref.addresses,
      setAddress = _ref.setAddress,
      open = _ref.open;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      create = _useState2[0],
      setCreate = _useState2[1];

  var classes = useStyles();

  var handleClick = function handleClick(address) {
    setAddress(address);
    setOpen(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: open,
    fullScreen: true,
    PaperProps: {
      style: {
        backgroundColor: "#f4f4f4"
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layouts_DialogTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClose: function onClose() {
      return setOpen(false);
    }
  }, "Change address")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.createAddress
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_profilePages_addresses_components_CreateAddress_CreateAddressButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    noIcon: true,
    setOpen: setCreate
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_profilePages_addresses_components_CreateAddress__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: create,
    handleClose: function handleClose() {
      return setCreate(false);
    }
  })), addresses.map(function (address) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.paper
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_profilePages_addresses_components_AddressItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      address: address
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: function onClick() {
        return handleClick(address);
      },
      className: classes.button,
      variant: "outlined",
      fullWidth: true
    }, "Select this address"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ChangeAddress);

/***/ }),

/***/ "./src/pages/checkoutPages/order/components/SelectAddress.js":
/*!*******************************************************************!*\
  !*** ./src/pages/checkoutPages/order/components/SelectAddress.js ***!
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
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-react-router */ "./node_modules/use-react-router/use-react-router.js");
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_profilePages_addresses_components_CreateAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pages/profilePages/addresses/components/CreateAddress */ "./src/pages/profilePages/addresses/components/CreateAddress/index.js");
/* harmony import */ var _SelectedAddress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectedAddress */ "./src/pages/checkoutPages/order/components/SelectedAddress.js");
/* harmony import */ var _ChangeAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChangeAddress */ "./src/pages/checkoutPages/order/components/ChangeAddress.js");








var SelectAddress = function SelectAddress(_ref) {
  var address = _ref.address,
      addresses = _ref.addresses,
      setAddress = _ref.setAddress;

  var _useReactRouter = use_react_router__WEBPACK_IMPORTED_MODULE_3___default()(),
      history = _useReactRouter.history;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      change = _useState2[0],
      setChange = _useState2[1];

  var loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.ui.loadingUI;
  });

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      add = _useState4[0],
      setAdd = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (addresses.length === 0) {
      setAdd(true);
    } else {
      setAdd(false);
    }
  }, [addresses]);

  var onSubmit = function onSubmit() {
    setAdd(false);
    history.push("/order");
  };

  if (loading === true) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, change === false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SelectedAddress__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setChange: setChange,
    address: address
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ChangeAddress__WEBPACK_IMPORTED_MODULE_6__["default"], {
    addresses: addresses,
    setOpen: setChange,
    setAddress: setAddress,
    open: change
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_profilePages_addresses_components_CreateAddress__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fullScreen: true,
    open: add,
    onSubmit: onSubmit,
    handleClose: function handleClose() {
      return history.push("/cart");
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectAddress);

/***/ }),

/***/ "./src/pages/checkoutPages/order/components/SelectedAddress.js":
/*!*********************************************************************!*\
  !*** ./src/pages/checkoutPages/order/components/SelectedAddress.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      marginTop: theme.spacing(1)
    },
    button: {
      marginLeft: theme.spacing(2)
    },
    right: {
      marginLeft: "auto"
    }
  };
});

var SelectedAddress = function SelectedAddress(_ref) {
  var address = _ref.address,
      setChange = _ref.setChange;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    display: "inline"
  }, "receiver: ".concat(address.receiver_full_name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], null, "address: ", address.state, ", ", address.city, ", ", address.postal_address)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], null, "phone number: ", address.receiver_phone_number)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], null, "postal code: ", address.postal_code)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick() {
      return setChange(true);
    },
    className: classes.right,
    color: "secondary",
    size: "small",
    variant: "outlined"
  }, "Change address"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectedAddress);

/***/ }),

/***/ "./src/pages/checkoutPages/order/index.js":
/*!************************************************!*\
  !*** ./src/pages/checkoutPages/order/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Order */ "./src/pages/checkoutPages/order/Order.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Order__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/pages/checkoutPages/payment/Payment.js":
/*!****************************************************!*\
  !*** ./src/pages/checkoutPages/payment/Payment.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Payment; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Cod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Cod */ "./src/pages/checkoutPages/payment/components/Cod.js");
/* harmony import */ var _components_UPI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/UPI */ "./src/pages/checkoutPages/payment/components/UPI.js");













function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(props, ["children", "value", "index"]);

  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
    role: "tabpanel",
    id: "full-width-tabpanel-".concat(index),
    "aria-labelledby": "full-width-tab-".concat(index)
  }, other), value === index && react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      p: 3
    }
  }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], null, children)));
}

function Payment(_ref) {
  var history = _ref.history;
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["useTheme"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](0),
      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
      selectedTab = _React$useState2[0],
      setselectedTab = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setselectedTab(newValue);
  };

  var handleChangeIndex = function handleChangeIndex(index) {
    setselectedTab(index);
  };

  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      width: 550,
      height: 450,
      margin: "auto",
      marginTop: "30px",
      border: "1px solid black"
    }
  }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: selectedTab,
    onChange: handleChange,
    indicatorColor: "secondary",
    textColor: "inherit",
    variant: "fullWidth",
    "aria-label": "full width tabs example"
  }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Cash On Delivery"
  }), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Card"
  })), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_swipeable_views__WEBPACK_IMPORTED_MODULE_8___default.a, {
    axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',
    onChangeIndex: handleChangeIndex
  }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](TabPanel, {
    index: 0,
    dir: theme.direction
  }), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](TabPanel, {
    index: 1,
    dir: theme.direction
  })), selectedTab === 0 && react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_components_Cod__WEBPACK_IMPORTED_MODULE_10__["default"], {
    history: history
  }), selectedTab == 1 && react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_components_UPI__WEBPACK_IMPORTED_MODULE_11__["default"], {
    history: history
  })));
}

/***/ }),

/***/ "./src/pages/checkoutPages/payment/components/Cod.js":
/*!***********************************************************!*\
  !*** ./src/pages/checkoutPages/payment/components/Cod.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_profileActions_orderActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @actions/profileActions/orderActions */ "./src/redux/actions/profileActions/orderActions.js");
/* harmony import */ var _actions_cartActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _actions_profileActions_AddressActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @actions/profileActions/AddressActions */ "./src/redux/actions/profileActions/AddressActions.js");













function Cod(_ref) {
  var history = _ref.history;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state;
  }),
      cart = _useSelector.cart,
      loadingUI = _useSelector.ui.loadingUI,
      addresses = _useSelector.profile.addresses;

  var address = addresses[0];
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var handleClick = function handleClick(payment_mode) {
    if (typedCaptcha === data) {
      var order = {
        receiver: {
          full_name: address.receiver_full_name,
          phone_number: address.receiver_phone_number,
          address: "".concat(address.state, " ").concat(address.city, " ").concat(address.postal_address, " ").concat(address.postal_code)
        },
        payment_mode: payment_mode
      };
      dispatch(Object(_actions_profileActions_orderActions__WEBPACK_IMPORTED_MODULE_7__["createOrder"])(order, history));
    } else {
      alert("Incorrect");
      getCaptcha();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    dispatch(Object(_actions_cartActions__WEBPACK_IMPORTED_MODULE_8__["fetchCart"])());
    dispatch(Object(_actions_profileActions_AddressActions__WEBPACK_IMPORTED_MODULE_9__["fetchAddresses"])());
  }, [dispatch]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      typedCaptcha = _useState2[0],
      setTypeCaptcha = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var handleTypedCaptchaChange = function handleTypedCaptchaChange(event) {
    setTypeCaptcha(event.target.value);
  };

  function RandomIndex(length) {
    return Math.floor(Math.random() * length);
  }

  var getCaptcha = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    var captcanvas = document.getElementById("captchacanvas");
    var pen = captcanvas.getContext("2d");
    var generatedCaptcha = Math.random.toString(36).substring(2, 8);
    pen.font = "30px Georgia";
    pen.fillStyle = "#c5c9c6";
    pen.fillRect(0, 0, 400, 400);
    pen.fillStyle = "red";
    var maxlength = generatedCaptcha.length;
    var index1 = RandomIndex(maxlength);
    var val1 = RandomIndex(10);
    var val2 = RandomIndex(10);
    generatedCaptcha = generatedCaptcha.substring(0, index1 - 1) + val1 + generatedCaptcha[index1].toUpperCase() + generatedCaptcha.substring(index1 + 1, maxlength) + val2;
    setData(generatedCaptcha); // console.log(data);

    pen.fillText(generatedCaptcha, 40, 40);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    getCaptcha();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      border: "none",
      boxShadow: "none"
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], {
    title: "Pay on Delivery(Cash/Card/UPI)"
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      pl: 1,
      pb: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("canvas", {
    id: "captchacanvas",
    width: 220,
    height: 60,
    style: {
      border: "2px solid grey"
    }
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "text",
    onClick: function onClick() {
      return getCaptcha();
    },
    style: {
      color: "red",
      justifyContent: "center",
      marginLeft: "20px"
    }
  }, "Change Captcha"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    helperText: "Please enter above captcha",
    id: "captchaInput",
    label: "Captcha",
    value: typedCaptcha,
    onChange: handleTypedCaptchaChange
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    style: {
      background: "green",
      color: "white"
    },
    onClick: function onClick() {
      return handleClick("Cash On Delievery");
    }
  }, "Place Order")));
}

/* harmony default export */ __webpack_exports__["default"] = (Cod);

/***/ }),

/***/ "./src/pages/checkoutPages/payment/components/UPI.js":
/*!***********************************************************!*\
  !*** ./src/pages/checkoutPages/payment/components/UPI.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _actions_profileActions_AddressActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @actions/profileActions/AddressActions */ "./src/redux/actions/profileActions/AddressActions.js");
/* harmony import */ var _actions_profileActions_orderActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @actions/profileActions/orderActions */ "./src/redux/actions/profileActions/orderActions.js");
/* harmony import */ var _actions_cartActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @actions/cartActions */ "./src/redux/actions/cartActions.js");






var REACT_APP_RAZORPAY_PUBLIC_KEY = "rzp_test_QaWbhtFi6r6szP";



function UPI(_ref) {
  var history = _ref.history;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      paymentMethod = _useState2[0],
      setpaymentMethod = _useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state;
  }),
      cart = _useSelector.cart,
      loadingUI = _useSelector.ui.loadingUI,
      addresses = _useSelector.profile.addresses;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.auth.user;
  }),
      first_name = _useSelector2.first_name,
      last_name = _useSelector2.last_name,
      phone_number = _useSelector2.phone_number,
      email = _useSelector2.email;

  var options = {
    key: REACT_APP_RAZORPAY_PUBLIC_KEY,
    amount: Math.round(cart.total_price / 75) * 100,
    // method:paymentMode,
    currency: "USD",
    method: {
      card: paymentMethod === 'card',
      netbanking: paymentMethod === 'netbanking',
      upi: paymentMethod === 'upi',
      wallet: false,
      paylater: false
    },
    name: 'Shopify',
    description: 'Transaction Amount',
    image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
    handler: function handler(response) {
      if (typeof response.razorpay_payment_id == 'undefined' || response.razorpay_payment_id < 1) {
        alert("Payment unsuccessful");
      } else {
        //alert(response.razorpay_payment_id);
        //console.log('data',pay_instance.payments.fetch(response.razorpay_payment_id));
        var order = {
          receiver: {
            full_name: address.receiver_full_name,
            phone_number: address.receiver_phone_number,
            address: "".concat(address.state, " ").concat(address.city, " ").concat(address.postal_address, " ").concat(address.postal_code)
          },
          payment_mode: paymentMethod,
          code: response.razorpay_payment_id
        };
        dispatch(Object(_actions_profileActions_orderActions__WEBPACK_IMPORTED_MODULE_5__["createOrder"])(order, history));
      }
    },
    prefill: {
      name: first_name + last_name,
      contact: phone_number,
      email: email
    },
    theme: {
      color: 'blue',
      hide_topbar: false
    },
    notify: {
      sms: true,
      email: true
    }
  };
  var address = addresses[0];
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var handleClick = function handleClick(payment_mode) {
    setpaymentMethod(payment_mode);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (paymentMethod !== '') {
      var paywindow = new window.Razorpay(options);
      paywindow.open();
    }
  }, [paymentMethod]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["fetchCart"])());
    dispatch(Object(_actions_profileActions_AddressActions__WEBPACK_IMPORTED_MODULE_4__["fetchAddresses"])());
  }, [dispatch]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    sx: {
      flexGrow: 1,
      margin: "20px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h5",
    gutterBottom: true
  }, "Payment method"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    sx: {
      marginLeft: "50px",
      marginTop: "30px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    alignItems: "center",
    lg: 12
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    lg: 2
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    lg: 4
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h8"
  }, "Card")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    lg: 6
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    color: "success",
    size: "large",
    style: {
      background: "green",
      color: "white"
    },
    onClick: function onClick() {
      return handleClick("card");
    }
  }, "Pay Now"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (UPI);

/***/ }),

/***/ "./src/pages/checkoutPages/payment/index.js":
/*!**************************************************!*\
  !*** ./src/pages/checkoutPages/payment/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Payment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Payment */ "./src/pages/checkoutPages/payment/Payment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Payment__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/redux/actions/profileActions/orderActions.js":
/*!**********************************************************!*\
  !*** ./src/redux/actions/profileActions/orderActions.js ***!
  \**********************************************************/
/*! exports provided: fetchOrders, fetchOrder, createOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOrders", function() { return fetchOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOrder", function() { return fetchOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrder", function() { return createOrder; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notifActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notifActions */ "./src/redux/actions/notifActions.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ "./src/redux/types.js");



var fetchOrders = function fetchOrders() {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["START_LOADING_UI"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/orders/").then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_ORDERS"],
        payload: response.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["STOP_LOADING_UI"]
      });
    });
  };
};
var fetchOrder = function fetchOrder(id) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["START_LOADING_UI"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/orders/".concat(id, "/")).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_ORDER"],
        payload: response.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["STOP_LOADING_UI"]
      });
    });
  };
};
var createOrder = function createOrder(order, history) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["START_LOADING_BUTTON"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/orders/", order).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["CREATE_ORDER"],
        payload: response.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["STOP_LOADING_BUTTON"]
      });
      history.push("/profile/orders/".concat(response.data.id));
      dispatch(Object(_notifActions__WEBPACK_IMPORTED_MODULE_1__["addNotif"])({
        message: "Your order has been compeleted"
      }));
    });
  };
};

/***/ })

}]);
//# sourceMappingURL=order.e18413d1dfbc0f55c183.js.map