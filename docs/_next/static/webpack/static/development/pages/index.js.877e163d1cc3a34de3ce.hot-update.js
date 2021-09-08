webpackHotUpdate("static/development/pages/index.js",{

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
var _jsxFileName = "/Users/rithikjain/Desktop/Remix-CS-Website/components/partnerships/partnerships.js";





var Partnerships = function Partnerships() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "partnerships-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "partnerships-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Partnerships"), _partnerships_json__WEBPACK_IMPORTED_MODULE_3__["partners"].map(function (_ref) {
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
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: [0.8, 0.2],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: picture,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: [0.8, 0.7],
      className: "partnerships-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: website,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "School Website \u2192")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, start))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Partnerships);

/***/ }),

/***/ "./components/partnerships/partnerships.json":
/*!***************************************************!*\
  !*** ./components/partnerships/partnerships.json ***!
  \***************************************************/
/*! exports provided: partners, default */
/***/ (function(module) {

module.exports = {"partners":[{"name":"Kipp Sunnyside","website":"https://www.kipp.org/school/kipp-sunnyside-high-school/","start":"Partner since 2018","picture":"../../static/kipp.png"},{"name":"Worthing High School","website":"https://www.houstonisd.org/worthing","start":"Partner since 2019","picture":"../../static/worthing.png"}]};

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
/* harmony import */ var _components_partnerships_partnerships__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/partnerships/partnerships */ "./components/partnerships/partnerships.js");
var _jsxFileName = "/Users/rithikjain/Desktop/Remix-CS-Website/pages/index.js";









var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_homepage_homepage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_mentorship_mentorship__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cirriculum_curriculum__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_partnerships_partnerships__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.877e163d1cc3a34de3ce.hot-update.js.map