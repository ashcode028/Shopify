(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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

/***/ "./src/pages/sellerPages/components/ManageProduct/AddProductFrom.js":
/*!**************************************************************************!*\
  !*** ./src/pages/sellerPages/components/ManageProduct/AddProductFrom.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");








function AddProductFrom(_ref) {
  var onClose = _ref.onClose,
      forceClose = _ref.forceClose;
  var paperStyle = {
    padding: '0 15px 40px 15px',
    width: 450
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      ProductMainImage = _useState2[0],
      setProductMainImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
      ProductImage1 = _useState4[0],
      setProductImage1 = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState5, 2),
      ProductImage2 = _useState6[0],
      setProductImage2 = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState7, 2),
      ProductProposal = _useState8[0],
      setProductProposal = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState9, 2),
      ProductName = _useState10[0],
      setProductName = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState11, 2),
      Stock = _useState12[0],
      setStock = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState13, 2),
      ProductPrice = _useState14[0],
      setProductPrice = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState15, 2),
      DiscountPrice = _useState16[0],
      setDiscountPrice = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState18 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState17, 2),
      ProductDes = _useState18[0],
      setProductDes = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('NA'),
      _useState20 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState19, 2),
      Size = _useState20[0],
      setSize = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('topwear'),
      _useState22 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState21, 2),
      Category = _useState22[0],
      setCategory = _useState22[1];

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var form_data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (ProductMainImage === null) {
                alert("Please upload your product main image");
              } else if (ProductImage1 === null) {
                alert("Please upload your product image 1");
              } else if (ProductImage2 === null) {
                alert("Please upload your product image 2");
              } else if (ProductProposal === null) {
                alert("Please upload your product proposal");
              } else if (ProductMainImage.size > 524288) {
                alert("Main image file size should be less than 0.5 MB");
              } else if (ProductImage1.size > 524288) {
                alert("Image1 file size should be less than 0.5 MB");
              } else if (ProductImage2.size > 524288) {
                alert("Image2 file size should be less than 0.5 MB");
              } else if (ProductProposal.size > 1048576) {
                alert("Proposal file size should be less than 1 MB");
              } else if (ProductName.length < 2) {
                alert("Product name is too short");
              } else if (parseFloat(Stock) < 10) {
                alert("Product stock should be greater or equal to 10");
              } else if (parseFloat(Stock) % 1 !== 0) {
                alert("Product stock should be integer only");
              } else if (parseFloat(ProductPrice) < 50) {
                alert("Product price should be greater or equal to 50");
              } else if (parseFloat(DiscountPrice) > parseFloat(ProductPrice)) {
                alert("Discount price should be less or equal to product price");
              } else if (parseFloat(DiscountPrice) < 50) {
                alert("Discount price should be greater or equal to 50");
              } else if (ProductDes.length < 10) {
                alert("Product description should be aleast 10 characters long");
              } else {
                form_data = new FormData();
                form_data.append('title', ProductName + " " + Category);
                form_data.append('sale_count', Stock);
                form_data.append('price', ProductPrice);
                form_data.append('discount_price', DiscountPrice);
                form_data.append('proposal', ProductProposal);
                form_data.append('description', ProductDes);
                form_data.append('photo_main', ProductMainImage);
                form_data.append('photo_1', ProductImage1);
                form_data.append('photo_2', ProductImage2);
                form_data.append('size', Size);
                onClose(form_data);
              }

              forceClose();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    elevation: 0,
    style: paperStyle
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 2
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 5
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Product Main Image")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 7
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "file",
    accept: ".png,.jpg",
    multiple: true,
    onChange: function onChange(e) {
      return setProductMainImage(e.target.files[0]);
    },
    required: true
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 5
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Product Image 1")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 7
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "file",
    accept: ".png,.jpg",
    multiple: true,
    onChange: function onChange(e) {
      return setProductImage1(e.target.files[0]);
    },
    required: true
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 5
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Product Image 2")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 7
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "file",
    accept: ".png,.jpg",
    multiple: true,
    onChange: function onChange(e) {
      setProductImage2(e.target.files[0]);
    },
    required: true
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 5
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Product Proposal")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 7
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "file",
    accept: ".pdf",
    style: {
      margin: "10px"
    },
    onChange: function onChange(event) {
      setProductProposal(event.target.files[0]);
    },
    required: true
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 5
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "ProductName")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 7
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "text",
    value: ProductName,
    onChange: function onChange(event) {
      setProductName(event.target.value);
    },
    required: true
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 5
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Product Stock")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 7
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "number",
    value: Stock,
    onChange: function onChange(event) {
      setStock(event.target.value);
    },
    required: true
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 5
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Product Price")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 7
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "number",
    value: ProductPrice,
    onChange: function onChange(event) {
      setProductPrice(event.target.value);
    },
    required: true
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 5
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Discount Price")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 7
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "number",
    value: DiscountPrice,
    onChange: function onChange(event) {
      setDiscountPrice(event.target.value);
    },
    required: true
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 5
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Product Description")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 7
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", {
    value: ProductDes,
    onChange: function onChange(event) {
      setProductDes(event.target.value);
    },
    required: true,
    style: {
      height: "200px",
      width: "250px"
    }
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 5
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Category")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 7
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("select", {
    onChange: function onChange(event) {
      setCategory(event.target.value);
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
    selected: true,
    value: "topwear"
  }, "Topwear"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
    value: "bottomwear"
  }, "Bottomwear"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
    value: "footwear"
  }, "Footwear"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 5
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", null, "Size")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 7
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("select", {
    onChange: function onChange(event) {
      setSize(event.target.value);
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
    selected: true,
    value: "NA"
  }, "NA"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
    value: "S"
  }, "S"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
    value: "M"
  }, "M"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
    value: "L"
  }, "L"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
    value: "XL"
  }, "XL"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
    value: "XXL"
  }, "XXL"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
    value: "XXXL"
  }, "XXXL"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
    value: "4XL"
  }, "4XL"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
    value: "FREE SIZE"
  }, "FREE SIZE"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 6
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 6
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "submit",
    onClick: handleSubmit,
    style: {
      background: "green",
      color: "white",
      fontWeight: "bold"
    }
  }, "Submit"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (AddProductFrom);

/***/ }),

/***/ "./src/pages/sellerPages/components/ManageProduct/EditProductForm.js":
/*!***************************************************************************!*\
  !*** ./src/pages/sellerPages/components/ManageProduct/EditProductForm.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");









function EditProductForm(_ref) {
  var onClose = _ref.onClose,
      sellerProduct = _ref.sellerProduct;
  var paperStyle = {
    padding: '0 15px 40px 15px',
    width: 450
  };
  var btnStyle = {
    marginTop: 20
  };
  var values = {
    stock: sellerProduct['sale_count'],
    product_price: sellerProduct['price'],
    discount_price: sellerProduct['discount_price']
  };
  var validationSchema = yup__WEBPACK_IMPORTED_MODULE_6__["object"]().shape({
    stock: yup__WEBPACK_IMPORTED_MODULE_6__["number"]().min(10).required('Product stock must be atleast 10'),
    product_price: yup__WEBPACK_IMPORTED_MODULE_6__["number"]().min(50).required('Product stock must be atleast 50'),
    discount_price: yup__WEBPACK_IMPORTED_MODULE_6__["number"]().min(0).required('Discount Price should be less than or equal to Product Price')
  });

  var onSubmit = function onSubmit(values, actions) {
    if (parseFloat(values['stock']) < 10) {
      alert("Product stock should be greater or equal to 10");
    } else if (parseFloat(values['stock']) % 1 !== 0) {
      alert("Product stock should be integer only");
    } else if (parseFloat(values['product_price']) < 50) {
      alert("Product price should be greater or equal to 50");
    } else if (parseFloat(values['discount_price']) > parseFloat(values['product_price'])) {
      alert("Discount price should be less or equal to product price");
    } else if (parseFloat(values['discount_price']) < 50) {
      alert("Discount price should be greater or equal to 50");
    }

    sellerProduct['sale_count'] = values['stock'];
    sellerProduct['price'] = values['product_price'];
    sellerProduct['discount_price'] = values['discount_price'];
    onClose(sellerProduct);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    elevation: 0,
    style: paperStyle
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: values,
    validationSchema: validationSchema,
    onSubmit: onSubmit
  }, function (props) {
    var _React$createElement, _React$createElement2;

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      onSubmit: props.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      as: _material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      name: "stock",
      label: "Product Stock",
      placeholder: props.values.stock,
      values: props.values.stock,
      onChange: props.handleChange,
      fullWidth: true,
      error: props.errors.stock && props.touched.stock,
      helperText: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
        name: "stock"
      }),
      required: true,
      style: {
        marginTop: "10px"
      }
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], (_React$createElement = {
      as: _material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      name: "product_price",
      label: "Product Price",
      placeholder: props.values.product_price,
      values: props.values.product_price,
      onChange: props.handleChange,
      fullWidth: true,
      required: true,
      error: props.errors.product_price && props.touched.product_price,
      helperText: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
        name: "product_price"
      })
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "required", true), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "style", {
      marginTop: "10px"
    }), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], (_React$createElement2 = {
      as: _material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      name: "discount_price",
      label: "Discount Price",
      placeholder: props.values.discount_price,
      values: props.values.discount_price,
      onChange: props.handleChange,
      fullWidth: true,
      required: true,
      error: props.errors.discount_price && props.touched.discount_price,
      helperText: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
        name: "discount_price"
      })
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement2, "required", true), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement2, "style", {
      marginTop: "10px"
    }), _React$createElement2)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      type: "submit",
      style: btnStyle,
      variant: "contained",
      color: "primary"
    }, "Edit"));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (EditProductForm);

/***/ }),

/***/ "./src/pages/sellerPages/components/ManageProduct/SellerProductView.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/sellerPages/components/ManageProduct/SellerProductView.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



function SellerProductView(_ref) {
  var sellerProduct = _ref.sellerProduct,
      handleRemove = _ref.handleRemove;
  var paperStyle = {
    padding: '0 10px 40px 25px',
    width: 400
  };
  var title = sellerProduct.title,
      photo_1 = sellerProduct.photo_1,
      photo_2 = sellerProduct.photo_2,
      description = sellerProduct.description,
      price = sellerProduct.price,
      discount_price = sellerProduct.discount_price,
      sale_count = sellerProduct.sale_count;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    elevation: 0,
    style: paperStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: photo_1,
    style: {
      height: "150px",
      width: "150px"
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: photo_2,
    style: {
      height: "150px",
      width: "150px"
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 5
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Name")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 7
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 5
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Stock")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 7
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, sale_count)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 5
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Price")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 7
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 5
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Discount Price")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 7
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, discount_price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 5
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Description")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 7
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    onClick: function onClick() {
      return handleRemove(sellerProduct);
    },
    style: {
      background: "red",
      color: "white",
      fontWeight: "bold"
    }
  }, "Remove Product"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (SellerProductView);

/***/ }),

/***/ "./src/pages/sellerPages/components/Seller_Products.js":
/*!*************************************************************!*\
  !*** ./src/pages/sellerPages/components/Seller_Products.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Seller_Products; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Seller_Sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Seller_Sidebar */ "./src/pages/sellerPages/Seller_Sidebar.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _ManageProduct_AddProductFrom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ManageProduct/AddProductFrom */ "./src/pages/sellerPages/components/ManageProduct/AddProductFrom.js");
/* harmony import */ var _ManageProduct_EditProductForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ManageProduct/EditProductForm */ "./src/pages/sellerPages/components/ManageProduct/EditProductForm.js");
/* harmony import */ var _ManageProduct_SellerProductView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ManageProduct/SellerProductView */ "./src/pages/sellerPages/components/ManageProduct/SellerProductView.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_sellerActions_ProductActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @actions/sellerActions/ProductActions */ "./src/redux/actions/sellerActions/ProductActions.js");






















var modal_Style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

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

var useStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    root: {
      marginTop: theme.spacing(1)
    },
    detail: {
      padding: theme.spacing(1)
    },
    header: {
      color: "white",
      fontWeight: "bold"
    }
  };
});
function Seller_Products() {
  var classes = useStyle();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["useDispatch"])();
  var sellerProducts = Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["useSelector"])(function (state) {
    return state.seller.sellerProducts;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_actions_sellerActions_ProductActions__WEBPACK_IMPORTED_MODULE_15__["fetchSellerProducts"])());
  }, [dispatch]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
      addOpen = _React$useState2[0],
      setAddOpen = _React$useState2[1];

  var handleAddOpen = function handleAddOpen() {
    return setAddOpen(true);
  };

  var addClose = function addClose(newSellerProduct) {
    dispatch(Object(_actions_sellerActions_ProductActions__WEBPACK_IMPORTED_MODULE_15__["createSellerProduct"])(newSellerProduct, setAddOpen));
  };

  var forceAddClose = function forceAddClose() {
    setAddOpen(false);
  };

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState3, 2),
      Editopen = _React$useState4[0],
      setEditopen = _React$useState4[1];

  var handleEditopen = function handleEditopen() {
    return setEditopen(true);
  };

  var handleEditclose = function handleEditclose() {
    return setEditopen(false);
  };

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null),
      _React$useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState5, 2),
      editSellerProduct = _React$useState6[0],
      set_edit_sellerProduct = _React$useState6[1];

  function EditHelper(sellerProduct) {
    if (sellerProduct['status'] === true) {
      handleEditopen();
      set_edit_sellerProduct(sellerProduct);
    }
  }

  ;

  var editClose = function editClose(updatedSellerProduct) {
    dispatch(Object(_actions_sellerActions_ProductActions__WEBPACK_IMPORTED_MODULE_15__["updateSellerProduct"])(updatedSellerProduct, updatedSellerProduct['id']));
    handleEditclose();
  };

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null),
      _React$useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState7, 2),
      viewSellerProduct = _React$useState8[0],
      setViewSellerProduct = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState9, 2),
      viewOpen = _React$useState10[0],
      setViewOpen = _React$useState10[1];

  var handleViewOpen = function handleViewOpen() {
    return setViewOpen(true);
  };

  var handleViewClose = function handleViewClose() {
    return setViewOpen(false);
  };

  function ViewHelper(sellerProduct) {
    setViewSellerProduct(sellerProduct);
    handleViewOpen();
  }

  ;

  var handleRemove = function handleRemove(sellerProduct) {
    dispatch(Object(_actions_sellerActions_ProductActions__WEBPACK_IMPORTED_MODULE_15__["deleteSellerProduct"])(sellerProduct['id']));
    handleViewClose();
  };

  function parseTitle(title) {
    title = title + "";
    return title.substr(0, title.lastIndexOf(' '));
  }

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Seller_Sidebar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activeItem: "seller_product"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    sx: {
      flexGrow: 1,
      marginTop: "20px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    spacing: 2
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 9
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Title, null, "Products")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 3
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: handleAddOpen,
    style: {
      background: "green",
      color: "white"
    }
  }, "Add Product"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
    open: addOpen,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    sx: modal_Style
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Title, null, "Add Product"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ManageProduct_AddProductFrom__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClose: addClose,
    forceClose: forceAddClose
  })))))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      background: 'black'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.header,
    align: "center"
  }, "SNo."), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.header,
    align: "center"
  }, "Product"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.header,
    align: "center"
  }, "Stock"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.header,
    align: "center"
  }, "Price"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.header,
    align: "center"
  }, "View"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.header,
    align: "center"
  }, "Status"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.header,
    align: "center"
  }, "Action"))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], null, sellerProducts.map(function (sellerProduct, id) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: id + 1
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "center"
    }, id + 1), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "center",
      style: {
        alignItems: "center"
      }
    }, parseTitle(sellerProduct.title)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "center"
    }, sellerProduct['sale_count']), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "center"
    }, sellerProduct['price']), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Button: true,
      align: "center",
      onClick: function onClick() {
        return ViewHelper(sellerProduct);
      },
      style: {
        background: "green",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer"
      }
    }, "View"), sellerProduct['status'] === true ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "center",
      style: {
        color: "green",
        fontWeight: "bold"
      }
    }, "Approved") : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "center",
      style: {
        color: "red",
        fontWeight: "bold"
      }
    }, "Pending"), sellerProduct['status'] === true ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Button: true,
      align: "center",
      onClick: function onClick() {
        return EditHelper(sellerProduct);
      },
      style: {
        background: "red",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer"
      }
    }, "Edit") : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
    open: viewOpen,
    onClose: handleViewClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    sx: modal_Style
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Title, null, "Product Information"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ManageProduct_SellerProductView__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sellerProduct: viewSellerProduct,
    handleRemove: handleRemove
  }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
    open: Editopen,
    onClose: handleEditclose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    sx: modal_Style
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Title, null, "Edit"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ManageProduct_EditProductForm__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClose: editClose,
    sellerProduct: editSellerProduct
  })))))));
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
//# sourceMappingURL=16.a2bed35cef352dd09e69.js.map