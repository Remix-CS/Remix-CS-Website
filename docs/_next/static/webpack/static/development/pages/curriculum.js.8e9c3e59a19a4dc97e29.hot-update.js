webpackHotUpdate("static\\development\\pages\\curriculum.js",{

/***/ "./components/cirriculum/curriculum.js":
/*!*********************************************!*\
  !*** ./components/cirriculum/curriculum.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cirriculum_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cirriculum.css */ "./components/cirriculum/cirriculum.css");
/* harmony import */ var _cirriculum_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cirriculum_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cirriculum_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cirriculum.json */ "./components/cirriculum/cirriculum.json");
var _cirriculum_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./cirriculum.json */ "./components/cirriculum/cirriculum.json", 1);
var _jsxFileName = "C:\\Users\\nmeis\\Projects\\Websites\\Remix-CS-Website\\components\\cirriculum\\curriculum.js";





var Curriculum = function Curriculum() {
  var module_components = [];

  for (var i = 0; i < _cirriculum_json__WEBPACK_IMPORTED_MODULE_3__["modules"].length; i++) {
    module_components.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: "module",
      width: [1, 0.8, 0.6, 0.6],
      ml: "auto",
      mr: "auto",
      key: _cirriculum_json__WEBPACK_IMPORTED_MODULE_3__["modules"][i].name,
      mt: 30,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "".concat(i + 1, ". ") + _cirriculum_json__WEBPACK_IMPORTED_MODULE_3__["modules"][i].name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _cirriculum_json__WEBPACK_IMPORTED_MODULE_3__["modules"][i].presentation,
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "View the Lesson"))));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cirriculum-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, module_components);
};

/* harmony default export */ __webpack_exports__["default"] = (Curriculum);

/***/ })

})
//# sourceMappingURL=curriculum.js.8e9c3e59a19a4dc97e29.hot-update.js.map