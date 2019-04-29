webpackHotUpdate("static/development/pages/intro.js",{

/***/ "./components/CountrySection.tsx":
/*!***************************************!*\
  !*** ./components/CountrySection.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_ReponsiveLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/common/ReponsiveLayout */ "./components/common/ReponsiveLayout.tsx");

var _jsxFileName = "/Users/noah/github/code-test/triple-clone-coding/components/CountrySection.tsx";




var Heading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CountrySection__Heading",
  componentId: "sc-1709kj0-0"
})(["position:absolute;top:240px;letter-spacing:-1px;margin:0px;color:rgb(58,58,58);h2{font-weight:500;line-height:1.31;font-size:52px;}div{font-size:17px;line-height:1.76;letter-spacing:-0.3px;margin:20px 0px 0px;}"]);
var MetricsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CountrySection__MetricsContainer",
  componentId: "sc-1709kj0-1"
})(["position:absolute;top:150px;right:160px;animation-delay:0.1s;"]);
var MetricItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CountrySection__MetricItem",
  componentId: "sc-1709kj0-2"
})(["font-size:36px;letter-spacing:-1px;margin-bottom:20px;color:rgb(58,58,58);"]);
var AwardsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CountrySection__AwardsContainer",
  componentId: "sc-1709kj0-3"
})(["position:absolute;bottom:140px;right:10px;animation-delay:0.2s;"]);
var AwardItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CountrySection__AwardItem",
  componentId: "sc-1709kj0-4"
})(["display:inline-block;color:rgba(58,58,58,0.8);font-weight:bold;background-repeat:no-repeat;background-size:54px 54px;line-height:22px;padding:5px 0px 5px 62px;&:not(:last-child){margin-right:39px;}"]);

var CountrySection = function CountrySection() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common_ReponsiveLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layoutClass: "country",
    onWaypoint: function onWaypoint(active) {
      return setActive(active);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading, {
    className: "fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "\uC138\uACC4 120\uAC1C \uB3C4\uC2DC", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), "\uBB34\uB8CC \uAC00\uC774\uB4DC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "\uC5EC\uD589\uB9C8\uB2E4 \uB9E4\uBC88 \uC0AC\uC57C \uD588\uB358 \uAC00\uC774\uB4DC\uBD81", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), "\uC774\uC81C \uBB34\uB8CC\uB85C \uBCF4\uB294 \uD2B8\uB9AC\uD50C \uAC00\uC774\uB4DC\uB85C", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), "\uBCF4\uB2E4 \uC790\uC138\uD558\uAC8C, \uAE54\uB054\uD558\uAC8C")), active ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MetricsContainer, {
    className: "fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MetricItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_3___default.a, {
    start: 1,
    end: 360,
    separator: ",",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), "\uB9CC \uBA85"), "\uC758 \uC0AC\uC6A9\uC790"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MetricItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_3___default.a, {
    start: 1,
    end: 35,
    separator: ",",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), "\uB9CC \uBA85"), "\uC758 \uB9AC\uBDF0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MetricItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_3___default.a, {
    start: 1,
    end: 1100,
    separator: ",",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), "\uB9CC \uBA85"), "\uC758 \uC800\uC7A5")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AwardsContainer, {
    className: "fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AwardItem, {
    style: {
      backgroundImage: "url(/static/images/img-02-badge-google@3x.png)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "2018 \uAD6C\uAE00 \uD50C\uB808\uC774\uC2A4\uD1A0\uC5B4", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), "\uC62C\uD574\uC758 \uC571 \uCD5C\uC6B0\uC218\uC0C1 \uC218\uC0C1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AwardItem, {
    style: {
      backgroundImage: "url(/static/images/img-02-badge-apple@4x.png)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "2018 \uC560\uD50C \uC571\uC2A4\uD1A0\uC5B4", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), "\uC624\uB298\uC758 \uC5EC\uD589\uC571 \uC120\uC815")));
};

/* harmony default export */ __webpack_exports__["default"] = (CountrySection);

/***/ })

})
//# sourceMappingURL=intro.js.60e2da5a846e042d6c41.hot-update.js.map