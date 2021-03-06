webpackHotUpdate("static/development/pages/intro.js",{

/***/ "./components/common/ReponsiveLayout.tsx":
/*!***********************************************!*\
  !*** ./components/common/ReponsiveLayout.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-waypoint */ "./node_modules/react-waypoint/es/index.js");

var _jsxFileName = "/Users/noah/github/code-test/triple-coding-nextjs/components/common/ReponsiveLayout.tsx";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReponsiveLayout__Container",
  componentId: "sc-1lrmk5t-0"
})(["", ";&.heading{background-image:url(", ");}&.country{background:center center / cover rgb(250,250,250);}"], function (props) {
  return props.theme.container;
}, __webpack_require__(/*! ../../static/images/img-01-bg.png */ "./static/images/img-01-bg.png"));
var Layout = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReponsiveLayout__Layout",
  componentId: "sc-1lrmk5t-1"
})(["", ";&.heading{height:860px;}&.boast{height:573px;}&.default{height:1000px;}"], function (props) {
  return props.theme.responsiveLayout;
});

var ReponsiveLayout = function ReponsiveLayout(_ref) {
  var containerClass = _ref.containerClass,
      layoutClass = _ref.layoutClass,
      children = _ref.children,
      onWaypoint = _ref.onWaypoint;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      waypointEnter = _useState2[0],
      setWaypointEnter = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    className: "".concat(containerClass || "default", " ").concat(waypointEnter ? "animation-active" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_3__["Waypoint"], {
    topOffset: "30%",
    onEnter: function onEnter() {
      if (onWaypoint) onWaypoint(true);
      setWaypointEnter(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout, {
    className: layoutClass || "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (ReponsiveLayout);

/***/ })

})
//# sourceMappingURL=intro.js.d26d3d23cf80737ae8ea.hot-update.js.map