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





var History = function History() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "history",
    style: {
      backgroundImage: 'url(../../static/background.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'left bottom',
      backgroundAttachment: 'fixed'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "history-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "History"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
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
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
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
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: picture,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: [0.8, 0.7],
      className: "schools-info",
      mr: "10px",
      ml: "10px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: website,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "School Website \u2192")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, start))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (History);

/***/ })

})
//# sourceMappingURL=index.js.6d5b4f81ed4b58b920b2.hot-update.js.map