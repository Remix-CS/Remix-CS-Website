webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/mentees/mentees.js":
/*!***************************************!*\
  !*** ./components/mentees/mentees.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mentees_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mentees.css */ "./components/mentees/mentees.css");
/* harmony import */ var _mentees_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mentees_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mentees_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mentees.json */ "./components/mentees/mentees.json");
var _mentees_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mentees.json */ "./components/mentees/mentees.json", 1);
var _jsxFileName = "/Users/rithikjain/Desktop/Remix-CS-Website/components/mentees/mentees.js";





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
  }, "Mentees"), _mentees_json__WEBPACK_IMPORTED_MODULE_3__["partners"].map(function (_ref) {
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
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
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
      className: "schools-info",
      mr: "10px",
      ml: "10px",
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
      target: "_blank",
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

/* harmony default export */ __webpack_exports__["default"] = (Mentees);

/***/ }),

/***/ "./components/mentees/mentees.json":
/*!*****************************************!*\
  !*** ./components/mentees/mentees.json ***!
  \*****************************************/
/*! exports provided: partners, default */
/***/ (function(module) {

module.exports = {"partners":[{"name":"Kipp Sunnyside","website":"https://www.kipp.org/school/kipp-sunnyside-high-school/","start":"Partner since 2018","picture":"../../static/kipp.png"},{"name":"Worthing High School","website":"https://www.houstonisd.org/worthing","start":"Partner since 2019","picture":"../../static/worthing.png"}]};

/***/ }),

/***/ "./components/partnerships/partnerships.js":
false,

/***/ "./components/partnerships/partnerships.json":
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
/* harmony import */ var _components_mentorship_mentorship__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/mentorship/mentorship */ "./components/mentorship/mentorship.js");
/* harmony import */ var _components_tracks_tracks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tracks/tracks */ "./components/tracks/tracks.js");
/* harmony import */ var _components_mentees_mentees__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/mentees/mentees */ "./components/mentees/mentees.js");
/* harmony import */ var _components_resources_resources__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/resources/resources */ "./components/resources/resources.js");
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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_mentorship_mentorship__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_mentees_mentees__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_resources_resources__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
//# sourceMappingURL=index.js.5737596a86e09c013063.hot-update.js.map