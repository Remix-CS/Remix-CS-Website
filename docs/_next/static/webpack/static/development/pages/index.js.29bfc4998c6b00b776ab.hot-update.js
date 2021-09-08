webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _curriculum_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curriculum.css */ "./components/cirriculum/curriculum.css");
/* harmony import */ var _curriculum_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_curriculum_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _curriculum_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curriculum.json */ "./components/cirriculum/curriculum.json");
var _curriculum_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./curriculum.json */ "./components/cirriculum/curriculum.json", 1);
var _jsxFileName = "/Users/rithikjain/Desktop/Remix-CS-Website/components/cirriculum/curriculum.js";





var Curriculum = function Curriculum() {
  var module_components = [];

  for (var i = 0; i < _curriculum_json__WEBPACK_IMPORTED_MODULE_3__["modules"].length; i++) {
    module_components.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: "module",
      width: [0.7, 0.7, 0.5, 0.5],
      ml: "auto",
      mr: "auto",
      key: _curriculum_json__WEBPACK_IMPORTED_MODULE_3__["modules"][i].name,
      mt: 30,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "".concat(i + 1, ". ") + _curriculum_json__WEBPACK_IMPORTED_MODULE_3__["modules"][i].name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _curriculum_json__WEBPACK_IMPORTED_MODULE_3__["modules"][i].presentation,
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
    id: "curriculum",
    style: {
      backgroundImage: 'url(../../static/background.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'left bottom',
      backgroundAttachment: 'fixed'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "curriculum-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Curriculum"), module_components);
};

/* harmony default export */ __webpack_exports__["default"] = (Curriculum);

/***/ })

})
//# sourceMappingURL=index.js.29bfc4998c6b00b776ab.hot-update.js.map