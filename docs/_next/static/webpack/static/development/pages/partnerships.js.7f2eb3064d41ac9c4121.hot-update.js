webpackHotUpdate("static\\development\\pages\\partnerships.js",{

/***/ "./components/partnerships/partnerships.js":
/*!*************************************************!*\
  !*** ./components/partnerships/partnerships.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _partnerships_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partnerships.css */ "./components/partnerships/partnerships.css");
/* harmony import */ var _partnerships_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_partnerships_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _partnerships_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partnerships.json */ "./components/partnerships/partnerships.json");
var _partnerships_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./partnerships.json */ "./components/partnerships/partnerships.json", 1);
var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\Remix-CS-Website\\components\\partnerships\\partnerships.js";





var Partnerships = function Partnerships() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "partnerships-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, _partnerships_json__WEBPACK_IMPORTED_MODULE_3__["partners"].map(function (_ref) {
    var name = _ref.name,
        website = _ref.website,
        start = _ref.start,
        picture = _ref.picture;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: [0.8, 0.7, 0.6, 0.5],
      ml: "auto",
      mr: "auto",
      mt: 40,
      className: "partnerships",
      key: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: [0.8, 0.2],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: picture,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: [0.8, 0.7],
      className: "partnerships-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: website,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "School Website \u2192")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, start))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Partnerships);

/***/ })

})
//# sourceMappingURL=partnerships.js.7f2eb3064d41ac9c4121.hot-update.js.map