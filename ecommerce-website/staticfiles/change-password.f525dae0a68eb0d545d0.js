(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password"],{

/***/ "./node_modules/use-force-update/use-force-update.js":
/*!***********************************************************!*\
  !*** ./node_modules/use-force-update/use-force-update.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function useForceUpdate() {
    var _a = __read(react_1.useState(Object.create(null)), 2), dispatch = _a[1];
    var memoizedDispatch = react_1.useCallback(function () {
        dispatch(Object.create(null));
    }, [dispatch]);
    return memoizedDispatch;
}
exports.default = useForceUpdate;


/***/ }),

/***/ "./node_modules/use-react-router/use-react-router.js":
/*!***********************************************************!*\
  !*** ./node_modules/use-react-router/use-react-router.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_1 = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
var use_force_update_1 = __webpack_require__(/*! use-force-update */ "./node_modules/use-force-update/use-force-update.js");
var INCORRECT_VERSION_ERROR = new Error('use-react-router may only be used with react-router@^5.');
var MISSING_CONTEXT_ERROR = new Error('useReactRouter may only be called within a <Router /> context.');
function useRouter() {
    if (!react_router_1.__RouterContext) {
        throw INCORRECT_VERSION_ERROR;
    }
    var context = react_1.useContext(react_router_1.__RouterContext);
    if (!context) {
        throw MISSING_CONTEXT_ERROR;
    }
    var forceUpdate = use_force_update_1.default();
    react_1.useEffect(function () {
        return context.history.listen(forceUpdate);
    }, [context]);
    return context;
}
exports.default = useRouter;


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

/***/ "./src/pages/authPages/AuthFromsStyles.js":
/*!************************************************!*\
  !*** ./src/pages/authPages/AuthFromsStyles.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_0___default()(function (theme) {
  return {
    root: {
      marginTop: theme.spacing(5),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%",
      // Fix IE 11 issue.
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    customError: {
      textAlign: "center"
    }
  };
}));

/***/ }),

/***/ "./src/pages/authPages/adminChangePassword/ChangePassword.js":
/*!*******************************************************************!*\
  !*** ./src/pages/authPages/adminChangePassword/ChangePassword.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-react-router */ "./node_modules/use-react-router/use-react-router.js");
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ChangePasswordForm */ "./src/pages/authPages/adminChangePassword/components/ChangePasswordForm.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @actions/authActions */ "./src/redux/actions/authActions.js");
/* harmony import */ var _regexes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../regexes */ "./src/pages/authPages/regexes.js");








var validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]({
  old_password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(8, "Must be at least 8 characters").required("Required field"),
  new_password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().matches(_regexes__WEBPACK_IMPORTED_MODULE_7__["password_reg"], "Weak Password ").required("Required field"),
  new_password2: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_4__["ref"]("new_password"), null], "Does not match").required("Required field")
});

var ChangePassword = function ChangePassword() {
  var values = {
    old_password: "",
    new_password: "",
    new_password2: ""
  };
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useReactRouter = use_react_router__WEBPACK_IMPORTED_MODULE_3___default()(),
      history = _useReactRouter.history;

  var handleSubmit = function handleSubmit(_ref, _ref2) {
    var old_password = _ref.old_password,
        new_password = _ref.new_password;
    var setErrors = _ref2.setErrors,
        resetForm = _ref2.resetForm;
    var data = {
      old_password: old_password,
      new_password: new_password
    };
    dispatch(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_6__["adminChangePassword"])(data, setErrors, resetForm, history));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: values,
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_5__["default"], props);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ChangePassword);

/***/ }),

/***/ "./src/pages/authPages/adminChangePassword/components/ChangePasswordForm.js":
/*!**********************************************************************************!*\
  !*** ./src/pages/authPages/adminChangePassword/components/ChangePasswordForm.js ***!
  \**********************************************************************************/
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
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AuthFromsStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../AuthFromsStyles */ "./src/pages/authPages/AuthFromsStyles.js");
/* harmony import */ var _components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/loading/LoadingButton */ "./src/components/loading/LoadingButton.js");












var LoginForm = function LoginForm(props) {
  var _props$values = props.values,
      old_password = _props$values.old_password,
      new_password = _props$values.new_password,
      new_password2 = _props$values.new_password2,
      errors = props.errors,
      handleSubmit = props.handleSubmit,
      handleChange = props.handleChange,
      isValid = props.isValid;
  var classes = Object(_AuthFromsStyles__WEBPACK_IMPORTED_MODULE_9__["default"])();
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "main",
    maxWidth: "xs"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.avatar
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h1",
    variant: "h5"
  }, "Change password"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    className: classes.form,
    noValidate: true,
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "old_password",
    label: "Old password",
    name: "old_password",
    type: "password",
    helperText: errors.old_password,
    error: Boolean(errors.old_password) || Boolean(errors.non_field_errors),
    value: old_password,
    onChange: handleChange,
    autoFocus: true
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "new_password",
    label: "New password",
    type: "password",
    id: "new_password",
    helperText: errors.new_password,
    error: Boolean(errors.new_password) || Boolean(errors.non_field_errors),
    value: new_password,
    onChange: handleChange
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "new_password2",
    label: "Repeat new password",
    type: "password",
    id: "new_password2",
    helperText: errors.new_password2,
    error: Boolean(errors.new_password2) || Boolean(errors.non_field_errors),
    value: new_password2,
    onChange: handleChange
  }), errors.non_field_errors && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body1",
    className: classes.customError,
    color: "error"
  }, errors.non_field_errors), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    disabled: !isValid
  }, "Change password"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./src/pages/authPages/adminChangePassword/index.js":
/*!**********************************************************!*\
  !*** ./src/pages/authPages/adminChangePassword/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangePassword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword */ "./src/pages/authPages/adminChangePassword/ChangePassword.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ChangePassword__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/pages/authPages/buyerChangePassword/ChangePassword.js":
/*!*******************************************************************!*\
  !*** ./src/pages/authPages/buyerChangePassword/ChangePassword.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-react-router */ "./node_modules/use-react-router/use-react-router.js");
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ChangePasswordForm */ "./src/pages/authPages/buyerChangePassword/components/ChangePasswordForm.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @actions/authActions */ "./src/redux/actions/authActions.js");







var validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]({
  old_password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(8, "Must be at least 8 characters").required("Required field"),
  new_password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(8, "Must be at least 8 characters").required("Required field"),
  new_password2: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_4__["ref"]("new_password"), null], "Does not match").required("Required field")
});

var ChangePassword = function ChangePassword() {
  var values = {
    old_password: "",
    new_password: "",
    new_password2: ""
  };
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useReactRouter = use_react_router__WEBPACK_IMPORTED_MODULE_3___default()(),
      history = _useReactRouter.history;

  var handleSubmit = function handleSubmit(_ref, _ref2) {
    var old_password = _ref.old_password,
        new_password = _ref.new_password;
    var setErrors = _ref2.setErrors,
        resetForm = _ref2.resetForm;
    var data = {
      old_password: old_password,
      new_password: new_password
    };
    dispatch(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_6__["buyerChangePassword"])(data, setErrors, resetForm, history));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: values,
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_5__["default"], props);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ChangePassword);

/***/ }),

/***/ "./src/pages/authPages/buyerChangePassword/components/ChangePasswordForm.js":
/*!**********************************************************************************!*\
  !*** ./src/pages/authPages/buyerChangePassword/components/ChangePasswordForm.js ***!
  \**********************************************************************************/
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
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AuthFromsStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../AuthFromsStyles */ "./src/pages/authPages/AuthFromsStyles.js");
/* harmony import */ var _components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/loading/LoadingButton */ "./src/components/loading/LoadingButton.js");












var LoginForm = function LoginForm(props) {
  var _props$values = props.values,
      old_password = _props$values.old_password,
      new_password = _props$values.new_password,
      new_password2 = _props$values.new_password2,
      errors = props.errors,
      handleSubmit = props.handleSubmit,
      handleChange = props.handleChange,
      isValid = props.isValid;
  var classes = Object(_AuthFromsStyles__WEBPACK_IMPORTED_MODULE_9__["default"])();
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "main",
    maxWidth: "xs"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.avatar
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h1",
    variant: "h5"
  }, "Change password"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    className: classes.form,
    noValidate: true,
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "old_password",
    label: "Old password",
    name: "old_password",
    type: "password",
    helperText: errors.old_password,
    error: Boolean(errors.old_password) || Boolean(errors.non_field_errors),
    value: old_password,
    onChange: handleChange,
    autoFocus: true
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "new_password",
    label: "New password",
    type: "password",
    id: "new_password",
    helperText: errors.new_password,
    error: Boolean(errors.new_password) || Boolean(errors.non_field_errors),
    value: new_password,
    onChange: handleChange
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "new_password2",
    label: "Repeat new password",
    type: "password",
    id: "new_password2",
    helperText: errors.new_password2,
    error: Boolean(errors.new_password2) || Boolean(errors.non_field_errors),
    value: new_password2,
    onChange: handleChange
  }), errors.non_field_errors && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body1",
    className: classes.customError,
    color: "error"
  }, errors.non_field_errors), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    disabled: !isValid
  }, "Change password"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./src/pages/authPages/buyerChangePassword/index.js":
/*!**********************************************************!*\
  !*** ./src/pages/authPages/buyerChangePassword/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangePassword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword */ "./src/pages/authPages/buyerChangePassword/ChangePassword.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ChangePassword__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./src/pages/authPages/sellerChangePassword/ChangePassword.js":
/*!********************************************************************!*\
  !*** ./src/pages/authPages/sellerChangePassword/ChangePassword.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-react-router */ "./node_modules/use-react-router/use-react-router.js");
/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ChangePasswordForm */ "./src/pages/authPages/sellerChangePassword/components/ChangePasswordForm.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @actions/authActions */ "./src/redux/actions/authActions.js");
/* harmony import */ var _regexes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../regexes */ "./src/pages/authPages/regexes.js");








var validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]({
  old_password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(8, "Must be at least 8 characters").required("Required field"),
  new_password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().matches(_regexes__WEBPACK_IMPORTED_MODULE_7__["password_reg"], "Weak Password ").required("Required field"),
  new_password2: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_4__["ref"]("new_password"), null], "Does not match").required("Required field")
});

var ChangePassword = function ChangePassword() {
  var values = {
    old_password: "",
    new_password: "",
    new_password2: ""
  };
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useReactRouter = use_react_router__WEBPACK_IMPORTED_MODULE_3___default()(),
      history = _useReactRouter.history;

  var handleSubmit = function handleSubmit(_ref, _ref2) {
    var old_password = _ref.old_password,
        new_password = _ref.new_password;
    var setErrors = _ref2.setErrors,
        resetForm = _ref2.resetForm;
    var data = {
      old_password: old_password,
      new_password: new_password
    };
    dispatch(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_6__["sellerChangePassword"])(data, setErrors, resetForm, history));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: values,
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_5__["default"], props);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ChangePassword);

/***/ }),

/***/ "./src/pages/authPages/sellerChangePassword/components/ChangePasswordForm.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/authPages/sellerChangePassword/components/ChangePasswordForm.js ***!
  \***********************************************************************************/
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
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AuthFromsStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../AuthFromsStyles */ "./src/pages/authPages/AuthFromsStyles.js");
/* harmony import */ var _components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/loading/LoadingButton */ "./src/components/loading/LoadingButton.js");












var LoginForm = function LoginForm(props) {
  var _props$values = props.values,
      old_password = _props$values.old_password,
      new_password = _props$values.new_password,
      new_password2 = _props$values.new_password2,
      errors = props.errors,
      handleSubmit = props.handleSubmit,
      handleChange = props.handleChange,
      isValid = props.isValid;
  var classes = Object(_AuthFromsStyles__WEBPACK_IMPORTED_MODULE_9__["default"])();
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "main",
    maxWidth: "xs"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.avatar
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h1",
    variant: "h5"
  }, "Change password"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    className: classes.form,
    noValidate: true,
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "old_password",
    label: "Old password",
    name: "old_password",
    type: "password",
    helperText: errors.old_password,
    error: Boolean(errors.old_password) || Boolean(errors.non_field_errors),
    value: old_password,
    onChange: handleChange,
    autoFocus: true
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "new_password",
    label: "New password",
    type: "password",
    id: "new_password",
    helperText: errors.new_password,
    error: Boolean(errors.new_password) || Boolean(errors.non_field_errors),
    value: new_password,
    onChange: handleChange
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "new_password2",
    label: "Repeat new password",
    type: "password",
    id: "new_password2",
    helperText: errors.new_password2,
    error: Boolean(errors.new_password2) || Boolean(errors.non_field_errors),
    value: new_password2,
    onChange: handleChange
  }), errors.non_field_errors && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body1",
    className: classes.customError,
    color: "error"
  }, errors.non_field_errors), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_loading_LoadingButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    disabled: !isValid
  }, "Change password"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./src/pages/authPages/sellerChangePassword/index.js":
/*!***********************************************************!*\
  !*** ./src/pages/authPages/sellerChangePassword/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangePassword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword */ "./src/pages/authPages/sellerChangePassword/ChangePassword.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ChangePassword__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

}]);
//# sourceMappingURL=change-password.f525dae0a68eb0d545d0.js.map