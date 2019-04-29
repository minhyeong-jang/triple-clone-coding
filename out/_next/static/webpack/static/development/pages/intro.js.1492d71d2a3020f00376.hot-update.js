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
/* harmony import */ var _components_common_ReponsiveLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/common/ReponsiveLayout */ "./components/common/ReponsiveLayout.tsx");

var _jsxFileName = "/Users/noah/github/code-test/triple-clone-coding/components/CountrySection.tsx";



var Heading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CountrySection__Heading",
  componentId: "sc-1709kj0-0"
})(["position:absolute;top:240px;letter-spacing:-1px;margin:0px;color:rgb(58,58,58);h2{font-weight:500;line-height:1.31;font-size:52px;}div{font-size:17px;line-height:1.76;letter-spacing:-0.3px;margin:20px 0px 0px;}"]);
var ImageList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CountrySection__ImageList",
  componentId: "sc-1709kj0-1"
})(["img:nth-child(1){width:160px;height:160px;top:343px;right:438px;animation-delay:0.7s;}img:nth-child(2){width:140px;height:140px;top:182px;right:315px;animation-delay:0.65s;}"]);

var CountrySection = function CountrySection() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common_ReponsiveLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    containerClass: "country",
    onWaypoint: function onWaypoint(active) {
      return setActive(active);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading, {
    className: "fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\uC138\uACC4 120\uAC1C \uB3C4\uC2DC", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), "\uBB34\uB8CC \uAC00\uC774\uB4DC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\uC5EC\uD589\uB9C8\uB2E4 \uB9E4\uBC88 \uC0AC\uC57C \uD588\uB358 \uAC00\uC774\uB4DC\uBD81", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), "\uC774\uC81C \uBB34\uB8CC\uB85C \uBCF4\uB294 \uD2B8\uB9AC\uD50C \uAC00\uC774\uB4DC\uB85C", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), "\uBCF4\uB2E4 \uC790\uC138\uD558\uAC8C, \uAE54\uB054\uD558\uAC8C")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/img-03-newyork@3x.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/img-03-vladivostok@3x.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/img-03-rome@3x.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/img-03-sydney@3x.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/img-03-sapporo@3x.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/img-03-tokyo@3x.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/img-03-osaka@3x.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/img-03-laos@3x.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/img-03-paris@3x.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/img-03-london@3x.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/img-03-budapest@3x.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/img-03-melbourne@3x.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CountrySection);

/***/ })

})
//# sourceMappingURL=intro.js.1492d71d2a3020f00376.hot-update.js.map