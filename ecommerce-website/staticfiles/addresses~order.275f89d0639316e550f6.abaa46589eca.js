(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addresses~order"],{

/***/ "./src/components/icons/AddLocation.js":
/*!*********************************************!*\
  !*** ./src/components/icons/AddLocation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M192 0C86.112 0 0 86.112 0 192c0 133.088 173.312 307.936 180.672 315.328a16.07 16.07 0 0 0 22.656 0s14.08-14.048 34.016-36.96c5.824-6.656 5.12-16.768-1.536-22.592-6.624-5.76-16.704-5.088-22.592 1.536-8.384 9.6-15.68 17.6-21.216 23.52C153.792 432 32 293.664 32 192c0-88.224 71.776-160 160-160s160 71.776 160 160c0 4.576-.256 9.44-1.056 14.304-1.472 8.704 4.384 16.96 13.12 18.432 8.704 1.376 16.96-4.416 18.432-13.12C383.616 204.96 384 198.304 384 192 384 86.112 297.888 0 192 0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M192 96c-52.928 0-96 43.072-96 96s43.072 96 96 96 96-43.072 96-96-43.072-96-96-96zm0 160c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64-28.704 64-64 64zM384 256c-70.592 0-128 57.408-128 128s57.408 128 128 128 128-57.408 128-128-57.408-128-128-128zm0 224c-52.928 0-96-43.072-96-96s43.072-96 96-96 96 43.072 96 96-43.072 96-96 96z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M432 368h-32v-32c0-8.832-7.168-16-16-16s-16 7.168-16 16v32h-32c-8.832 0-16 7.168-16 16s7.168 16 16 16h32v32c0 8.832 7.168 16 16 16s16-7.168 16-16v-32h32c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
  })));
});

/***/ }),

/***/ "./src/pages/authPages/regexes.js":
/*!****************************************!*\
  !*** ./src/pages/authPages/regexes.js ***!
  \****************************************/
/*! exports provided: phone_number_reg, national_code_reg, email_reg, password_reg, otp_reg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phone_number_reg", function() { return phone_number_reg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "national_code_reg", function() { return national_code_reg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email_reg", function() { return email_reg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "password_reg", function() { return password_reg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otp_reg", function() { return otp_reg; });
var phone_number_reg = /^(9|8|7)\d{9}$/;
var national_code_reg = /^((?!(0))[0-9]{6,6})$/;
var email_reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var password_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
var otp_reg = /^\d{6}$/;

/***/ }),

/***/ "./src/pages/profilePages/addresses/components/AddressItem.js":
/*!********************************************************************!*\
  !*** ./src/pages/profilePages/addresses/components/AddressItem.js ***!
  \********************************************************************/
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_EmailOutlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/EmailOutlined */ "./node_modules/@material-ui/icons/EmailOutlined.js");
/* harmony import */ var _material_ui_icons_EmailOutlined__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EmailOutlined__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_PhoneIphoneOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/PhoneIphoneOutlined */ "./node_modules/@material-ui/icons/PhoneIphoneOutlined.js");
/* harmony import */ var _material_ui_icons_PhoneIphoneOutlined__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhoneIphoneOutlined__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _DeleteAddress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DeleteAddress */ "./src/pages/profilePages/addresses/components/DeleteAddress.js");
/* harmony import */ var _EditAddress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./EditAddress */ "./src/pages/profilePages/addresses/components/EditAddress/index.js");

















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      height: "280px"
    },
    wrapperAddress: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
      padding: theme.spacing(2),
      minHeight: "120px"
    }, theme.breakpoints.down("sm"), {
      minHeight: 0
    }),
    wrapperInfo: {
      borderTop: "1px solid #f4f4f4"
    },
    button: {
      margin: theme.spacing(1)
    },
    list: {
      padding: 0,
      marginTop: theme.spacing(2)
    },
    mt3: {
      marginTop: theme.spacing(3)
    }
  };
});

var AddressItem = function AddressItem(_ref) {
  var address = _ref.address;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      edit = _useState2[0],
      setEdit = _useState2[1];

  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var matches = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"])(theme.breakpoints.down("sm"));

  var ListItemActions = function ListItemActions() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: function onClick() {
        return setEdit(true);
      },
      size: "small",
      variant: "contained",
      color: "primary"
    }, "Edit"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_EditAddress__WEBPACK_IMPORTED_MODULE_16__["default"], {
      open: edit,
      setOpen: setEdit,
      address: address
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_DeleteAddress__WEBPACK_IMPORTED_MODULE_15__["default"], {
      classes: classes,
      id: address.id
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.wrapperAddress
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h5"
  }, address.receiver_full_name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "subtitle1"
  }, address.state, " state, ", address.city, " city, ", address.postal_address)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.wrapperInfo
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disablePadding: true,
    className: classes.list
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_EmailOutlined__WEBPACK_IMPORTED_MODULE_13___default.a, null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    primary: "postal code: ".concat(address.postal_code)
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_PhoneIphoneOutlined__WEBPACK_IMPORTED_MODULE_14___default.a, null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    primary: "phone number: ".concat(address.receiver_phone_number)
  }), !matches && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ListItemActions, null)), matches && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.mt3
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ListItemActions, null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (AddressItem);

/***/ }),

/***/ "./src/pages/profilePages/addresses/components/CreateAddress/CreateAddress.js":
/*!************************************************************************************!*\
  !*** ./src/pages/profilePages/addresses/components/CreateAddress/CreateAddress.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _CreateAddressForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CreateAddressForm */ "./src/pages/profilePages/addresses/components/CreateAddress/CreateAddressForm.js");
/* harmony import */ var _components_layouts_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/layouts/DialogTitle */ "./src/components/layouts/DialogTitle.js");
/* harmony import */ var _pages_authPages_regexes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @pages/authPages/regexes */ "./src/pages/authPages/regexes.js");
/* harmony import */ var _actions_profileActions_AddressActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @actions/profileActions/AddressActions */ "./src/redux/actions/profileActions/AddressActions.js");












var validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]({
  receiver_full_name: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  receiver_phone_number: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().matches(_pages_authPages_regexes__WEBPACK_IMPORTED_MODULE_10__["phone_number_reg"], "Invalid phone number").required(),
  state: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  city: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  postal_address: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  postal_code: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required()
});

var CreateAddress = function CreateAddress(_ref) {
  var fullScreen = _ref.fullScreen,
      open = _ref.open,
      handleClose = _ref.handleClose,
      onSubmit = _ref.onSubmit;
  var values = {
    receiver_full_name: "",
    receiver_phone_number: "",
    state: "",
    city: "",
    postal_address: "",
    postal_code: ""
  };
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  var responsiveFullScreen = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__["default"])(theme.breakpoints.down("sm"));
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var handleSubmit = function handleSubmit(address, _ref2) {
    var setErrors = _ref2.setErrors;
    dispatch(Object(_actions_profileActions_AddressActions__WEBPACK_IMPORTED_MODULE_11__["createAddress"])(address, setErrors, onSubmit || handleClose));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fullScreen: fullScreen || responsiveFullScreen,
    open: open,
    onClose: handleClose,
    maxWidth: "md"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layouts_DialogTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClose: handleClose
  }, "Add Address"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: values,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
    validateOnChange: false
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CreateAddressForm__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      handleClose: handleClose
    }, props));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateAddress);

/***/ }),

/***/ "./src/pages/profilePages/addresses/components/CreateAddress/CreateAddressButton.js":
/*!******************************************************************************************!*\
  !*** ./src/pages/profilePages/addresses/components/CreateAddress/CreateAddressButton.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _components_icons_AddLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/icons/AddLocation */ "./src/components/icons/AddLocation.js");




var CreateAddressButton = function CreateAddressButton(_ref) {
  var noIcon = _ref.noIcon,
      setOpen = _ref.setOpen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      width: "100%",
      border: "4px dashed #b8b8b8",
      height: "100%",
      alignItems: "center",
      fontSize: "1.5rem",
      color: "rgba(0, 0, 0, 0.54)",
      fontWeight: "bold",
      display: "block"
    },
    onClick: function onClick() {
      return setOpen(true);
    }
  }, noIcon === false && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icons_AddLocation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      fontSize: "75px",
      display: "block",
      margin: "auto"
    },
    color: "action"
  }), "Add new address");
};

CreateAddressButton.defaultProps = {
  noIcon: false
};
/* harmony default export */ __webpack_exports__["default"] = (CreateAddressButton);

/***/ }),

/***/ "./src/pages/profilePages/addresses/components/CreateAddress/CreateAddressForm.js":
/*!****************************************************************************************!*\
  !*** ./src/pages/profilePages/addresses/components/CreateAddress/CreateAddressForm.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/loading/LoadingButton */ "./src/components/loading/LoadingButton.js");











var CreateAddressForm = function CreateAddressForm(props) {
  var _props$values = props.values,
      receiver_full_name = _props$values.receiver_full_name,
      receiver_phone_number = _props$values.receiver_phone_number,
      state = _props$values.state,
      city = _props$values.city,
      postal_address = _props$values.postal_address,
      postal_code = _props$values.postal_code,
      errors = props.errors,
      handleSubmit = props.handleSubmit,
      handleChange = props.handleChange,
      handleClose = props.handleClose;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    dividers: true
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 2
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 6,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "receiver full name",
    placeholder: "Enter receiver full name",
    variant: "outlined",
    margin: "normal",
    name: "receiver_full_name",
    autoComplete: "receiver_full_name",
    helperText: errors.receiver_full_name,
    error: Boolean(errors.receiver_full_name),
    value: receiver_full_name,
    onChange: handleChange,
    required: true,
    fullWidth: true,
    autoFocus: true
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 6,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "receiver phone number",
    placeholder: "Enter receiver phone number",
    variant: "outlined",
    margin: "normal",
    name: "receiver_phone_number",
    autoComplete: "receiver_phone_number",
    helperText: errors.receiver_phone_number,
    error: Boolean(errors.receiver_phone_number),
    value: receiver_phone_number,
    onChange: handleChange,
    required: true,
    fullWidth: true
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 6,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "State",
    placeholder: "Enter state",
    variant: "outlined",
    margin: "normal",
    name: "state",
    autoComplete: "state",
    helperText: errors.state,
    error: Boolean(errors.state),
    value: state,
    onChange: handleChange,
    required: true,
    fullWidth: true
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 6,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "City",
    placeholder: "Enter city",
    variant: "outlined",
    margin: "normal",
    name: "city",
    autoComplete: "city",
    helperText: errors.city,
    error: Boolean(errors.city),
    value: city,
    onChange: handleChange,
    required: true,
    fullWidth: true
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 12,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Postal address",
    placeholder: "Enter postal address",
    variant: "outlined",
    margin: "normal",
    name: "postal_address",
    autoComplete: "postal_address",
    rows: "3",
    helperText: errors.postal_address,
    error: Boolean(errors.postal_address),
    value: postal_address,
    onChange: handleChange,
    required: true,
    fullWidth: true,
    multiline: true
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 6,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Postal code",
    placeholder: "Enter postal code with out dash",
    variant: "outlined",
    margin: "normal",
    name: "postal_code",
    autoComplete: "postal_code",
    helperText: errors.postal_code,
    error: Boolean(errors.postal_code),
    value: postal_code,
    onChange: handleChange,
    required: true,
    fullWidth: true
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: handleClose,
    size: "large",
    variant: "outlined"
  }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handleSubmit,
    size: "large",
    variant: "outlined",
    color: "primary"
  }, "Add")));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateAddressForm);

/***/ }),

/***/ "./src/pages/profilePages/addresses/components/CreateAddress/index.js":
/*!****************************************************************************!*\
  !*** ./src/pages/profilePages/addresses/components/CreateAddress/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateAddress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateAddress */ "./src/pages/profilePages/addresses/components/CreateAddress/CreateAddress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CreateAddress__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/pages/profilePages/addresses/components/DeleteAddress.js":
/*!**********************************************************************!*\
  !*** ./src/pages/profilePages/addresses/components/DeleteAddress.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _components_layouts_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/layouts/DialogTitle */ "./src/components/layouts/DialogTitle.js");
/* harmony import */ var _components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/loading/LoadingButton */ "./src/components/loading/LoadingButton.js");
/* harmony import */ var _actions_profileActions_AddressActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @actions/profileActions/AddressActions */ "./src/redux/actions/profileActions/AddressActions.js");












var DeleteAddress = function DeleteAddress(_ref) {
  var classes = _ref.classes,
      id = _ref.id,
      onClose = _ref.onClose;

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
    onClose();
  };

  var handleSubmit = function handleSubmit() {
    dispatch(Object(_actions_profileActions_AddressActions__WEBPACK_IMPORTED_MODULE_10__["deleteAddress"])(id, handleClose));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleOpen,
    size: "small",
    className: classes.button,
    variant: "contained",
    color: "secondary"
  }, "Delete"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: open,
    onClose: handleClose,
    fullWidth: true,
    maxWidth: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layouts_DialogTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClose: handleClose
  }, "Delete address"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Are you sure you want to delete this address?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    variant: "outlined"
  }, "No, Cancel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handleSubmit,
    variant: "contained",
    color: "secondary"
  }, "Yes, Delete"))));
};

/* harmony default export */ __webpack_exports__["default"] = (DeleteAddress);

/***/ }),

/***/ "./src/pages/profilePages/addresses/components/EditAddress/EditAddress.js":
/*!********************************************************************************!*\
  !*** ./src/pages/profilePages/addresses/components/EditAddress/EditAddress.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _EditAddressForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditAddressForm */ "./src/pages/profilePages/addresses/components/EditAddress/EditAddressForm.js");
/* harmony import */ var _components_layouts_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/layouts/DialogTitle */ "./src/components/layouts/DialogTitle.js");
/* harmony import */ var _pages_authPages_regexes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @pages/authPages/regexes */ "./src/pages/authPages/regexes.js");
/* harmony import */ var _actions_profileActions_AddressActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @actions/profileActions/AddressActions */ "./src/redux/actions/profileActions/AddressActions.js");












var validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]({
  receiver_full_name: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  receiver_phone_number: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().matches(_pages_authPages_regexes__WEBPACK_IMPORTED_MODULE_10__["phone_number_reg"], "Invalid phone number").required(),
  state: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  city: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  postal_address: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required(),
  postal_code: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required()
});

var EditAddress = function EditAddress(_ref) {
  var open = _ref.open,
      setOpen = _ref.setOpen,
      address = _ref.address;
  var id = address.id,
      receiver_full_name = address.receiver_full_name,
      receiver_phone_number = address.receiver_phone_number,
      state = address.state,
      city = address.city,
      postal_address = address.postal_address,
      postal_code = address.postal_code;
  var values = {
    receiver_full_name: receiver_full_name,
    receiver_phone_number: receiver_phone_number,
    state: state,
    city: city,
    postal_address: postal_address,
    postal_code: postal_code
  };
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  var fullScreen = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__["default"])(theme.breakpoints.down("sm"));

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleSubmit = function handleSubmit(address, _ref2) {
    var setErrors = _ref2.setErrors;
    dispatch(Object(_actions_profileActions_AddressActions__WEBPACK_IMPORTED_MODULE_11__["updateAddress"])(address, id, setErrors, handleClose));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fullScreen: fullScreen,
    open: open,
    onClose: handleClose,
    maxWidth: "md"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layouts_DialogTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClose: handleClose
  }, "Add Address"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: values,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
    validateOnChange: false
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EditAddressForm__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      handleClose: handleClose
    }, props));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EditAddress);

/***/ }),

/***/ "./src/pages/profilePages/addresses/components/EditAddress/EditAddressForm.js":
/*!************************************************************************************!*\
  !*** ./src/pages/profilePages/addresses/components/EditAddress/EditAddressForm.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/loading/LoadingButton */ "./src/components/loading/LoadingButton.js");











var EditAddressForm = function EditAddressForm(props) {
  var _props$values = props.values,
      receiver_full_name = _props$values.receiver_full_name,
      receiver_phone_number = _props$values.receiver_phone_number,
      state = _props$values.state,
      city = _props$values.city,
      postal_address = _props$values.postal_address,
      postal_code = _props$values.postal_code,
      errors = props.errors,
      handleSubmit = props.handleSubmit,
      handleChange = props.handleChange,
      handleClose = props.handleClose,
      dirty = props.dirty,
      isValid = props.isValid;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    dividers: true
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 2
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 6,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "receiver full name",
    placeholder: "Enter receiver full name",
    variant: "outlined",
    margin: "normal",
    name: "receiver_full_name",
    autoComplete: "receiver_full_name",
    helperText: errors.receiver_full_name,
    error: Boolean(errors.receiver_full_name),
    value: receiver_full_name,
    onChange: handleChange,
    required: true,
    fullWidth: true,
    autoFocus: true
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 6,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "receiver phone number",
    placeholder: "Enter receiver phone number",
    variant: "outlined",
    margin: "normal",
    name: "receiver_phone_number",
    autoComplete: "receiver_phone_number",
    helperText: errors.receiver_phone_number,
    error: Boolean(errors.receiver_phone_number),
    value: receiver_phone_number,
    onChange: handleChange,
    required: true,
    fullWidth: true
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 6,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "State",
    placeholder: "Enter state",
    variant: "outlined",
    margin: "normal",
    name: "state",
    autoComplete: "state",
    helperText: errors.state,
    error: Boolean(errors.state),
    value: state,
    onChange: handleChange,
    required: true,
    fullWidth: true
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 6,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "City",
    placeholder: "Enter city",
    variant: "outlined",
    margin: "normal",
    name: "city",
    autoComplete: "city",
    helperText: errors.city,
    error: Boolean(errors.city),
    value: city,
    onChange: handleChange,
    required: true,
    fullWidth: true
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 12,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Postal address",
    placeholder: "Enter postal address",
    variant: "outlined",
    margin: "normal",
    name: "postal_address",
    autoComplete: "postal_address",
    rows: "3",
    helperText: errors.postal_address,
    error: Boolean(errors.postal_address),
    value: postal_address,
    onChange: handleChange,
    required: true,
    fullWidth: true,
    multiline: true
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    md: 6,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Postal code",
    placeholder: "Enter postal code with out dash",
    variant: "outlined",
    margin: "normal",
    name: "postal_code",
    autoComplete: "postal_code",
    helperText: errors.postal_code,
    error: Boolean(errors.postal_code),
    value: postal_code,
    onChange: handleChange,
    required: true,
    fullWidth: true
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: handleClose,
    size: "large",
    variant: "outlined"
  }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handleSubmit,
    size: "large",
    variant: "outlined",
    color: "primary",
    disabled: !dirty || !isValid
  }, "Edit")));
};

/* harmony default export */ __webpack_exports__["default"] = (EditAddressForm);

/***/ }),

/***/ "./src/pages/profilePages/addresses/components/EditAddress/index.js":
/*!**************************************************************************!*\
  !*** ./src/pages/profilePages/addresses/components/EditAddress/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditAddress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditAddress */ "./src/pages/profilePages/addresses/components/EditAddress/EditAddress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _EditAddress__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/redux/actions/profileActions/AddressActions.js":
/*!************************************************************!*\
  !*** ./src/redux/actions/profileActions/AddressActions.js ***!
  \************************************************************/
/*! exports provided: fetchAddresses, createAddress, deleteAddress, updateAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAddresses", function() { return fetchAddresses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAddress", function() { return createAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAddress", function() { return deleteAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAddress", function() { return updateAddress; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ "./src/redux/types.js");
/* harmony import */ var _notifActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notifActions */ "./src/redux/actions/notifActions.js");



var fetchAddresses = function fetchAddresses() {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["START_LOADING_UI"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user/addresses/").then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_ADDRESSES"],
        payload: response.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["STOP_LOADING_UI"]
      });
    });
  };
};
var createAddress = function createAddress(address, setErrors, handleClose) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["START_LOADING_BUTTON"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/user/addresses/", address).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["CREATE_ADDRESS"],
        payload: response.data
      });
      handleClose();
      dispatch(Object(_notifActions__WEBPACK_IMPORTED_MODULE_2__["addNotif"])({
        message: "Address has been created"
      }));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["STOP_LOADING_BUTTON"]
      });
    }).catch(function (error) {
      setErrors(error.response.data);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["STOP_LOADING_BUTTON"]
      });
    });
  };
};
var deleteAddress = function deleteAddress(id, handleClose) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["START_LOADING_BUTTON"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("/api/user/addresses/".concat(id, "/")).then(function () {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["DELETE_ADDRESS"],
        payload: id
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["STOP_LOADING_BUTTON"]
      });
      handleClose();
      dispatch(Object(_notifActions__WEBPACK_IMPORTED_MODULE_2__["addNotif"])({
        message: "Address has been deleted",
        options: {
          variant: "error"
        }
      }));
    });
  };
};
var updateAddress = function updateAddress(address, id, setErrors, handleClose) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["START_LOADING_BUTTON"]
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/user/addresses/".concat(id, "/"), address).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_ADDRESS"],
        id: id,
        payload: response.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["STOP_LOADING_BUTTON"]
      });
      handleClose();
      dispatch(Object(_notifActions__WEBPACK_IMPORTED_MODULE_2__["addNotif"])({
        message: "Address was updated",
        options: {
          variant: "info"
        }
      }));
    }).catch(function (error) {
      setErrors(error.response.data);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["STOP_LOADING_BUTTON"]
      });
    });
  };
};

/***/ })

}]);
//# sourceMappingURL=addresses~order.275f89d0639316e550f6.js.map