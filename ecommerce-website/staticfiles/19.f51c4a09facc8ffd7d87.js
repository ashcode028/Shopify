(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./src/components/layouts/Home.js":
/*!****************************************!*\
  !*** ./src/components/layouts/Home.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _images_HomeModel_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/HomeModel.jpg */ "./src/components/layouts/images/HomeModel.jpg");


function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  color: white;\n  background-color: #", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Home = function Home() {
  var SocialContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
  var SocialIcon = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2(), function (props) {
    return props.color;
  });

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.auth;
  }),
      isAuthenticated = _useSelector.isAuthenticated,
      user = _useSelector.user;

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    style: {
      margin: '40px 0px 0px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    component: "img",
    sx: {
      padding: '0px 0px 0px 200px',
      height: '590px',
      width: 'auto'
    },
    alt: "Home Model",
    src: _images_HomeModel_jpg__WEBPACK_IMPORTED_MODULE_7__["default"]
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      padding: '250px 200px 0px 0px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Find it, love it, buy it."), isAuthenticated && user.user_type === "Admin" ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
    to: "/admin/",
    onClick: function onClick() {
      return window.location.reload(false);
    },
    color: "primary",
    variant: "contained",
    style: {
      margin: '50px'
    }
  }, "GO TO ADMIN PROFILE") : isAuthenticated && user.user_type === "Seller" ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
    to: "/seller_dashboard",
    color: "primary",
    variant: "contained",
    style: {
      margin: '50px'
    }
  }, "GO TO YOUR PROFILE") : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
    to: "/products",
    color: "primary",
    variant: "contained",
    style: {
      margin: '50px'
    }
  }, "SHOP NOW"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    style: {
      background: 'silver',
      margin: '40px 0px 0px',
      padding: '10px 45%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SocialContainer, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SocialIcon, {
    color: "3B5999"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Facebook"], null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SocialIcon, {
    color: "E4405F"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Instagram"], null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SocialIcon, {
    color: "55ACEE"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Twitter"], null))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      margin: '10px 0px 0px',
      padding: '0px 15px'
    }
  }, "\xA9 2021 Shopify"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/layouts/images/HomeModel.jpg":
/*!*****************************************************!*\
  !*** ./src/components/layouts/images/HomeModel.jpg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fca23fd6b994dac7389c7d59cb8767b7.jpg");

/***/ })

}]);
//# sourceMappingURL=19.f51c4a09facc8ffd7d87.js.map