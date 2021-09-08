webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/history/history.js":
/*!***************************************!*\
  !*** ./components/history/history.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _history_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.css */ "./components/history/history.css");
/* harmony import */ var _history_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_history_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _history_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.json */ "./components/history/history.json");
var _history_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./history.json */ "./components/history/history.json", 1);
var _jsxFileName = "/Users/rithikjain/Desktop/Remix-CS-Website/components/history/history.js";





var Mentees = function Mentees() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "mentees",
    style: {
      backgroundColor: '#f2fffa'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "mentees-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "History"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Affiliated Schools"), _history_json__WEBPACK_IMPORTED_MODULE_3__["partners"].map(function (_ref) {
    var name = _ref.name,
        website = _ref.website,
        start = _ref.start,
        picture = _ref.picture;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: [0.8, 0.7, 0.6, 0.5],
      ml: "auto",
      mr: "auto",
      mt: 20,
      mb: 40,
      className: "schools",
      key: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: [0.8, 0.2],
      mr: "10px",
      ml: "10px",
      mb: "10px",
      className: "schools-img",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: picture,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: [0.8, 0.7],
      className: "schools-info",
      mr: "10px",
      ml: "10px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: website,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "School Website \u2192")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, start))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Mentees);

/***/ }),

/***/ "./components/history/history.json":
/*!*****************************************!*\
  !*** ./components/history/history.json ***!
  \*****************************************/
/*! exports provided: partners, default */
/***/ (function(module) {

module.exports = {"partners":[{"name":"Kipp Sunnyside","website":"https://www.kipp.org/school/kipp-sunnyside-high-school/","start":"Partner since 2018","picture":"../../static/kipp.png"},{"name":"Worthing High School","website":"https://www.houstonisd.org/worthing","start":"Partner since 2019","picture":"../../static/worthing.png"}]};

/***/ }),

/***/ "./components/mentees/mentees.js":
false,

/***/ "./components/mentees/mentees.json":
false,

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
/* harmony import */ var _components_program_program__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/program/program */ "./components/program/program.js");
/* harmony import */ var _components_tracks_tracks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tracks/tracks */ "./components/tracks/tracks.js");
/* harmony import */ var _components_history_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/history/history */ "./components/history/history.js");
/* harmony import */ var _components_mentors_mentors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/mentors/mentors */ "./components/mentors/mentors.js");
/* harmony import */ var _components_contact_contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/contact/contact */ "./components/contact/contact.js");
var _jsxFileName = "/Users/rithikjain/Desktop/Remix-CS-Website/pages/index.js";











var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_homepage_homepage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_program_program__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tracks_tracks__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_history_history__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_mentors_mentors__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contact_contact__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.67e2cfd2c4c9cd56c645.hot-update.js.map