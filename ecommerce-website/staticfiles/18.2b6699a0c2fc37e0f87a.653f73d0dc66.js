(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./src/pages/profilePages/Sidebar/ListItemLink.js":
/*!********************************************************!*\
  !*** ./src/pages/profilePages/Sidebar/ListItemLink.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");





var ListItemLink = function ListItemLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"]
  }, props));
};

ListItemLink.defaultProps = {
  to: ""
};
/* harmony default export */ __webpack_exports__["default"] = (ListItemLink);

/***/ }),

/***/ "./src/pages/sellerPages/Seller_Sidebar.js":
/*!*************************************************!*\
  !*** ./src/pages/sellerPages/Seller_Sidebar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_profilePages_Sidebar_ListItemLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/profilePages/Sidebar/ListItemLink */ "./src/pages/profilePages/Sidebar/ListItemLink.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ShoppingCartOutlined */ "./node_modules/@material-ui/icons/ShoppingCartOutlined.js");
/* harmony import */ var _material_ui_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "./node_modules/@material-ui/icons/ExitToApp.js");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "./node_modules/@material-ui/icons/ShoppingCart.js");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_sellerActions_ProductActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @actions/sellerActions/ProductActions */ "./src/redux/actions/sellerActions/ProductActions.js");













var useStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      marginTop: theme.spacing(1)
    },
    detail: {
      padding: theme.spacing(1)
    }
  };
});

var Seller_Sidebar = function Seller_Sidebar(_ref) {
  var activeItem = _ref.activeItem,
      children = _ref.children;
  var classes = useStyle();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 3
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    md: "auto",
    xs: 12,
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ExpansionPanel"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      width: "100%"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_profilePages_Sidebar_ListItemLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selected: activeItem === "seller_dashboard",
    to: "/seller_dashboard"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_10__["Dashboard"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    primary: "Dashboard"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_profilePages_Sidebar_ListItemLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selected: activeItem === "seller_product",
    to: "/seller_product"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, {
    color: "action"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    primary: "Products"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_profilePages_Sidebar_ListItemLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selected: activeItem === "seller_orders",
    to: "/seller_Order"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_9___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    primary: "Orders"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_profilePages_Sidebar_ListItemLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    to: "/seller-change-password"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_6___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    primary: "Change password"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_profilePages_Sidebar_ListItemLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    to: "/seller-logout"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_7___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    primary: "Logout"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    md: true,
    xs: 12
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Seller_Sidebar);

/***/ }),

/***/ "./src/pages/sellerPages/components/Seller_Orders.js":
/*!***********************************************************!*\
  !*** ./src/pages/sellerPages/components/Seller_Orders.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Orders; });
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Seller_Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Seller_Sidebar */ "./src/pages/sellerPages/Seller_Sidebar.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_sellerActions_ProductActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @actions/sellerActions/ProductActions */ "./src/redux/actions/sellerActions/ProductActions.js");













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      marginTop: "10px",
      overflowX: "auto"
    },
    header: {
      color: "white",
      fontWeight: "bold"
    }
  };
});

function Title(props) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    component: "h2",
    variant: "h6",
    color: "primary",
    gutterBottom: true,
    style: {
      marginTop: "10px"
    }
  }, props.children);
}

function parseTitle(title) {
  title = title + "";
  return title.substr(0, title.lastIndexOf(' '));
}

function Orders() {
  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();
  var sellerOrders = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state.seller.sellerOrders;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_actions_sellerActions_ProductActions__WEBPACK_IMPORTED_MODULE_11__["fetchSellerOrders"])());
  }, [dispatch]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Seller_Sidebar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    activeItem: "seller_orders"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Title, null, "Recent Orders"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      background: "black"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.header,
    align: "center"
  }, "Date"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.header,
    align: "center"
  }, "Product Name"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.header,
    align: "center"
  }, "Quantity"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.header,
    align: "center"
  }, "Total Price"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.header,
    align: "center"
  }, "Payment Mode"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.header,
    align: "center"
  }, "Ship To"))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], null, sellerOrders.map(function (sellerOrder) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "center"
    }, sellerOrder.date.split(' ')[0]), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "center"
    }, parseTitle(sellerOrder.title)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "center"
    }, sellerOrder.quantity), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "center"
    }, "\u20B9 ", sellerOrder.total_price), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "center"
    }, sellerOrder.payment_mode), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "center"
    }, sellerOrder.location));
  })))));
}

/***/ }),

/***/ "./src/redux/actions/sellerActions/ProductActions.js":
/*!***********************************************************!*\
  !*** ./src/redux/actions/sellerActions/ProductActions.js ***!
  \***********************************************************/
/*! exports provided: fetchSellerProducts, fetchSellerOrders, createSellerProduct, deleteSellerProduct, updateSellerProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSellerProducts", function() { return fetchSellerProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSellerOrders", function() { return fetchSellerOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSellerProduct", function() { return createSellerProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSellerProduct", function() { return deleteSellerProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSellerProduct", function() { return updateSellerProduct; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ "./src/redux/types.js");
/* harmony import */ var _notifActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notifActions */ "./src/redux/actions/notifActions.js");



var fetchSellerProducts = function fetchSellerProducts() {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["START_LOADING_UI"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/products/seller/backproduct/").then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_SELLER_PRODUCTS"],
        payload: response.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["STOP_LOADING_UI"]
      });
    });
  };
};
var fetchSellerOrders = function fetchSellerOrders() {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["START_LOADING_UI"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/orders/orderfilter/seller/").then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_SELLER_ORDERS"],
        payload: response.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["STOP_LOADING_UI"]
      });
    });
  };
};
var createSellerProduct = function createSellerProduct(newSellerProduct, setAddOpen) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["START_LOADING_BUTTON"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/products/seller/add/", newSellerProduct, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["CREATE_SELLER_PRODUCT"],
        payload: response.data
      });
      dispatch(Object(_notifActions__WEBPACK_IMPORTED_MODULE_2__["addNotif"])({
        message: "Product has been added"
      }));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["STOP_LOADING_BUTTON"]
      });
      setAddOpen(false);
    }).catch(function (error) {
      // console.log(error, newSellerProduct);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["STOP_LOADING_BUTTON"]
      });
    });
  };
};
var deleteSellerProduct = function deleteSellerProduct(id) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["START_LOADING_BUTTON"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/products/del/".concat(id, "/")).then(function () {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["DELETE_SELLER_PRODUCT"],
        payload: id
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["STOP_LOADING_BUTTON"]
      });
      dispatch(Object(_notifActions__WEBPACK_IMPORTED_MODULE_2__["addNotif"])({
        message: "Product has been deleted",
        options: {
          variant: "error"
        }
      }));
    });
  };
};
var updateSellerProduct = function updateSellerProduct(updatedSellerProduct, id) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["START_LOADING_BUTTON"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/products/upd/".concat(id, "/"), updatedSellerProduct).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_SELLER_PRODUCT"],
        id: id,
        payload: response.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["STOP_LOADING_BUTTON"]
      });
      dispatch(Object(_notifActions__WEBPACK_IMPORTED_MODULE_2__["addNotif"])({
        message: "Product has been updated",
        options: {
          variant: "info"
        }
      }));
    }).catch(function (error) {
      // console.log(error);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["STOP_LOADING_BUTTON"]
      });
    });
  };
};

/***/ })

}]);
//# sourceMappingURL=18.2b6699a0c2fc37e0f87a.js.map