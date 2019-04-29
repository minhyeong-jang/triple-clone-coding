webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/common/FrameHeader.tsx":
/*!*******************************************!*\
  !*** ./components/common/FrameHeader.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/noah/github/code-test/triple-clone-coding/components/common/FrameHeader.tsx";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "FrameHeader__Container",
  componentId: "sc-1nj016y-0"
})(["position:fixed;top:0px;right:0px;left:0px;z-index:1;background:white;height:80px;opacity:0;border-bottom:1px solid rgb(239,239,239);transform:translateY(-20%);transition:all 400ms ease-in-out 0s;&.active{opacity:1;transform:translateY(0%);}"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "FrameHeader__Logo",
  componentId: "sc-1nj016y-1"
})(["position:absolute;top:50%;left:50px;width:68px;height:24px;background-size:cover;background-image:url(\"/static/images/img-intro-logo-dark@2x.png\");transform:translateY(-50%);"]);
var ExtraActionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "FrameHeader__ExtraActionsContainer",
  componentId: "sc-1nj016y-2"
})(["position:absolute;right:0px;top:0px;bottom:0px;padding-right:50px;"]);
var ExtraActionItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "FrameHeader__ExtraActionItem",
  componentId: "sc-1nj016y-3"
})(["line-height:80px;font-size:17px;height:80px;margin:0px 0px 0px 34px;color:", ";display:inline-block;cursor:pointer;"], function (props) {
  return props.theme.regularBlackColor;
});

var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var handleScroll = function handleScroll() {
    if (window.scrollY > 125) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    className: active ? "active" : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ExtraActionsContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ExtraActionItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Triple Team")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ExtraActionItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Contact"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.7ee8984ebefb771faa14.hot-update.js.map