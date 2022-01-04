(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-detail"],{

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

/***/ "./src/pages/productPages/productsDetail/ProductsDetail.js":
/*!*****************************************************************!*\
  !*** ./src/pages/productPages/productsDetail/ProductsDetail.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var react_clipboard_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-clipboard.js */ "./node_modules/react-clipboard.js/dist/react-clipboard.js");
/* harmony import */ var react_clipboard_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_clipboard_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_FileCopyOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/FileCopyOutlined */ "./node_modules/@material-ui/icons/FileCopyOutlined.js");
/* harmony import */ var _material_ui_icons_FileCopyOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FileCopyOutlined__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "./node_modules/@material-ui/icons/FavoriteBorder.js");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/colors/teal */ "./node_modules/@material-ui/core/colors/teal.js");
/* harmony import */ var _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _actions_productActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @actions/productActions */ "./src/redux/actions/productActions.js");
/* harmony import */ var _actions_cartActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _actions_profileActions_FavoriteProductsActions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @actions/profileActions/FavoriteProductsActions */ "./src/redux/actions/profileActions/FavoriteProductsActions.js");
/* harmony import */ var _actions_notifActions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @actions/notifActions */ "./src/redux/actions/notifActions.js");
/* harmony import */ var _components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @components/loading/LoadingButton */ "./src/components/loading/LoadingButton.js");
/* harmony import */ var _components_ProductImages__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/ProductImages */ "./src/pages/productPages/productsDetail/components/ProductImages.js");
/* harmony import */ var _components_SizeGuide__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/SizeGuide */ "./src/pages/productPages/productsDetail/components/SizeGuide.js");


























var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    mt1: {
      marginTop: theme.spacing(1)
    },
    button: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({
      width: "98%"
    }, theme.breakpoints.down("sm"), {
      width: "93%"
    }),
    buttonGreen: {
      color: theme.palette.common.white,
      backgroundColor: _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_18___default.a[500],
      "&:hover": {
        backgroundColor: _material_ui_core_colors_teal__WEBPACK_IMPORTED_MODULE_18___default.a[600]
      }
    },
    description: {
      whiteSpace: "pre-line"
    },
    sizeButton: {
      marginLeft: theme.spacing(1)
    },
    mb2: {
      marginBottom: theme.spacing(2)
    },
    img: {
      border: "1px solid gray",
      padding: "5px",
      marginRight: "10px",
      objectFit: "contain"
    },
    fixed: {
      position: "fixed",
      zIndex: 10,
      display: "flex",
      bottom: 0,
      left: 0,
      padding: "12px",
      width: "100%"
    },
    right: {
      float: "right"
    }
  };
});

function parseTitle(title) {
  title = title + "";
  return title.substr(0, title.lastIndexOf(' '));
}

var ProductsDetail = function ProductsDetail(_ref) {
  var match = _ref.match,
      history = _ref.history;
  var slug = match.params.slug;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.products;
  }),
      product = _useSelector.product,
      _useSelector$product = _useSelector.product,
      colors = _useSelector$product.colors,
      sizes = _useSelector$product.sizes;

  var isAuthenticated = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.auth.isAuthenticated;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      orderSize = _useState2[0],
      setOrderSize = _useState2[1];

  var classes = useStyles(); // Size guide dialog

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setOrderSize(product.default_size);
  }, [product]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    dispatch(Object(_actions_productActions__WEBPACK_IMPORTED_MODULE_19__["fetchProduct"])(slug));
  }, [dispatch, slug]);

  var handleAddToCart = function handleAddToCart() {
    if (isAuthenticated) {
      dispatch(Object(_actions_cartActions__WEBPACK_IMPORTED_MODULE_20__["addToCart"])(product.id, orderSize, history));
      return;
    }

    history.push("/login");
  };

  var handleAddToFavProducts = function handleAddToFavProducts() {
    if (isAuthenticated) {
      dispatch(Object(_actions_profileActions_FavoriteProductsActions__WEBPACK_IMPORTED_MODULE_21__["updateFavoriteProducts"])(product.id));
      return;
    }

    history.push("/login");
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: classes.mt1
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_clipboard_js__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onSuccess: function onSuccess() {
      return dispatch(Object(_actions_notifActions__WEBPACK_IMPORTED_MODULE_22__["addNotif"])({
        message: "product link copied",
        options: {
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          }
        }
      }));
    },
    component: _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"],
    "data-clipboard-text": window.location.href
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons_FileCopyOutlined__WEBPACK_IMPORTED_MODULE_15___default.a, null)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handleAddToFavProducts,
    color: "secondary"
  }, product.is_favorite_product === false ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_17___default.a, null) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_16___default.a, null)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: function onClick() {
      return history.goBack();
    },
    className: classes.right
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14___default.a, null)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    spacing: 2
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    md: 4,
    xs: 12,
    className: classes.mb2
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_ProductImages__WEBPACK_IMPORTED_MODULE_24__["default"], {
    product: product
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    md: true,
    xs: 12,
    className: classes.mb2
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h4",
    gutterBottom: true
  }, parseTitle(product.title)), product.available === false ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    gutterBottom: true,
    color: "error",
    variant: "h5",
    component: "h2"
  }, "unavailable") : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: classes.mb2
  }, product.discount_price ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    gutterBottom: true,
    variant: "h5",
    color: "error",
    component: "h2"
  }, product.discount_percent, "%"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    gutterBottom: true,
    variant: "h4",
    component: "h2"
  }, "\u20B9 ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("del", null, product.price), " ", product.discount_price)) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    gutterBottom: true,
    variant: "h4",
    component: "h2"
  }, product.price, " INR")), sizes.length !== 0 && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: classes.mb2
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    display: "inline",
    variant: "h6"
  }, "sizes:"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: function onClick() {
      return setOpen(true);
    },
    className: classes.right,
    variant: "outlined"
  }, "Size Guide"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_SizeGuide__WEBPACK_IMPORTED_MODULE_25__["default"], {
    open: open,
    setOpen: setOpen,
    sizes: sizes
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: classes.mt1
  }, sizes.map(function (size) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: classes.sizeButton,
      key: size.id,
      variant: orderSize === size.id ? "contained" : "outlined",
      size: "small",
      color: "secondary",
      onClick: function onClick() {
        return setOrderSize(size.id);
      },
      disabled: !size.available
    }, size.size);
  }))), Array.isArray(colors) && colors.length ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: classes.mb2
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h6"
  }, "colors:"), colors.map(function (color) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      key: color.id,
      to: "/products/".concat(color.slug)
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
      className: classes.img,
      height: "80px",
      width: "70px",
      src: color.photo_main,
      alt: color.title
    }));
  })) : null, product.available === true && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.fixed
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_23__["default"], {
    fullWidth: true,
    className: "".concat(classes.button, " ").concat(classes.buttonGreen),
    onClick: handleAddToCart,
    variant: "contained",
    size: "large"
  }, "Add to cart")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.description
  }, product.description))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductsDetail);

/***/ }),

/***/ "./src/pages/productPages/productsDetail/components/ProductImages.js":
/*!***************************************************************************!*\
  !*** ./src/pages/productPages/productsDetail/components/ProductImages.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-id-swiper */ "./node_modules/react-id-swiper/lib/index.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/swiper.css */ "./node_modules/swiper/css/swiper.css");
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_3__);




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    image: {
      width: "100%",
      height: "100%",
      maxHeight: "500px",
      display: "block",
      margin: "0 auto",
      objectFit: "contain"
    }
  };
});

var ProductImages = function ProductImages(_ref) {
  var product = _ref.product;
  var classes = useStyles(); // List of just available product photos (remove nulls)

  var photos = [product.photo_main, product.photo_1, product.photo_2, product.photo_3, product.photo_4].filter(Boolean);
  var params = {
    spaceBetween: 30,
    rebuildOnUpdate: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default.a, params, photos.map(function (photo) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: product.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: photo,
      alt: product.title.substring(0, product.title.lastIndexOf(' ')),
      className: classes.image
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductImages);

/***/ }),

/***/ "./src/pages/productPages/productsDetail/components/SizeGuide.js":
/*!***********************************************************************!*\
  !*** ./src/pages/productPages/productsDetail/components/SizeGuide.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _components_layouts_DialogTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/layouts/DialogTitle */ "./src/components/layouts/DialogTitle.js");













var SizeGuide = function SizeGuide(_ref) {
  var open = _ref.open,
      setOpen = _ref.setOpen,
      sizes = _ref.sizes;
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var responsiveFullScreen = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__["default"])(theme.breakpoints.down("sm"));

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fullWidth: true,
    maxWidth: "md",
    fullScreen: responsiveFullScreen,
    open: open,
    onClose: handleClose
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layouts_DialogTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClose: handleClose
  }, "Size Guide"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], null, "The unit of measurement is CM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    align: "center"
  }, "Size"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    align: "center"
  }, "Waist"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    align: "center"
  }, "Hip"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    align: "center"
  }, "Height"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__["default"], null, sizes.map(function (size) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: size.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      align: "center"
    }, size.size), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      align: "center"
    }, size.waist_min_size, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), size.waist_max_size && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "- ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), size.waist_max_size)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      align: "center"
    }, size.hip_min_size, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), size.hip_max_size && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "- ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), size.hip_max_size)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      align: "center"
    }, size.height_min_size, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), size.height_max_size && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "- ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), size.height_max_size)));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SizeGuide);

/***/ }),

/***/ "./src/pages/productPages/productsDetail/index.js":
/*!********************************************************!*\
  !*** ./src/pages/productPages/productsDetail/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductsDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsDetail */ "./src/pages/productPages/productsDetail/ProductsDetail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ProductsDetail__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ }),

/***/ "./src/redux/actions/profileActions/FavoriteProductsActions.js":
/*!*********************************************************************!*\
  !*** ./src/redux/actions/profileActions/FavoriteProductsActions.js ***!
  \*********************************************************************/
/*! exports provided: fetchFavoriteProducts, updateFavoriteProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFavoriteProducts", function() { return fetchFavoriteProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFavoriteProducts", function() { return updateFavoriteProducts; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notifActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notifActions */ "./src/redux/actions/notifActions.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ "./src/redux/types.js");



var fetchFavoriteProducts = function fetchFavoriteProducts() {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["START_LOADING_UI"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user/favorites-products/").then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["FETCH_FAVORITE_PRODUCTS"],
        payload: response.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["STOP_LOADING_UI"]
      });
    });
  };
};
var updateFavoriteProducts = function updateFavoriteProducts(id) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/user/favorites-products/update/".concat(id, "/")).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_FAVORITE_PRODUCTS"],
        payload: response.data
      });
      response.data.is_favorite_product ? dispatch(Object(_notifActions__WEBPACK_IMPORTED_MODULE_1__["addNotif"])({
        message: "Added to your favorites",
        options: {
          variant: "info"
        }
      })) : dispatch(Object(_notifActions__WEBPACK_IMPORTED_MODULE_1__["addNotif"])({
        message: "Removed from your favorites",
        options: {
          variant: "error"
        }
      }));
    });
  };
};

/***/ })

}]);
//# sourceMappingURL=products-detail.5282ba093d02f9f628a2.js.map