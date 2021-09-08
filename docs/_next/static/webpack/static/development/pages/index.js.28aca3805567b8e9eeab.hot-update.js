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
      width: [1, 0.8, 0.6, 0.6],
      ml: "auto",
      mr: "auto",
      key: _curriculum_json__WEBPACK_IMPORTED_MODULE_3__["modules"][i].name,
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "curriculum-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Curriculum"), module_components);
};

/* harmony default export */ __webpack_exports__["default"] = (Curriculum);

/***/ }),

/***/ "./components/cirriculum/curriculum.json":
/*!***********************************************!*\
  !*** ./components/cirriculum/curriculum.json ***!
  \***********************************************/
/*! exports provided: modules, default */
/***/ (function(module) {

module.exports = {"modules":[{"name":"Intro to CS & Fundamental Types","presentation":"/static/curriculum/Intro+FundamentalTypes.pdf"},{"name":"Variables & Arithmetic","presentation":"/static/curriculum/Variables+Arithmetic.pdf"},{"name":"Functions","presentation":"/static/curriculum/Functions.pdf"},{"name":"Booleans","presentation":"/static/curriculum/Booleans.pdf"},{"name":"Conditionals","presentation":"/static/curriculum/Conditionals.pdf"},{"name":"Lists","presentation":"/static/curriculum/Lists.pdf"},{"name":"Iteration & Loops","presentation":"/static/curriculum/Iteration.pdf"}]};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar/navbar */ "./components/navbar/navbar.js");
/* harmony import */ var _components_homepage_homepage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/homepage/homepage */ "./components/homepage/homepage.js");
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.css */ "./pages/page.css");
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_mentorship_mentorship__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/mentorship/mentorship */ "./components/mentorship/mentorship.js");
/* harmony import */ var _components_cirriculum_curriculum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/cirriculum/curriculum */ "./components/cirriculum/curriculum.js");
var _jsxFileName = "/Users/rithikjain/Desktop/Remix-CS-Website/pages/index.js";








var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_homepage_homepage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_mentorship_mentorship__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cirriculum_curriculum__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.28aca3805567b8e9eeab.hot-update.js.map