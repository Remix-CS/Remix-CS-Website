webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/tracks/tracks.js":
/*!*************************************!*\
  !*** ./components/tracks/tracks.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tracks_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracks.css */ "./components/tracks/tracks.css");
/* harmony import */ var _tracks_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tracks_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tracks_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracks.json */ "./components/tracks/tracks.json");
var _tracks_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./tracks.json */ "./components/tracks/tracks.json", 1);
var _jsxFileName = "/Users/rithikjain/Desktop/Remix-CS-Website/components/tracks/tracks.js";




var Tracks = function Tracks() {
  var trackComponents = [];

  for (var i = 0; i < _tracks_json__WEBPACK_IMPORTED_MODULE_2__["tracks"].length; i++) {
    console.log(_tracks_json__WEBPACK_IMPORTED_MODULE_2__["tracks"]);
    trackComponents.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
      className: "track",
      width: [0.8, 0.7, 0.6, 0.5],
      ml: "auto",
      mr: "auto",
      key: i,
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
    }, _tracks_json__WEBPACK_IMPORTED_MODULE_2__["tracks"][i].title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, _tracks_json__WEBPACK_IMPORTED_MODULE_2__["tracks"][i].experience), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, _tracks_json__WEBPACK_IMPORTED_MODULE_2__["tracks"][i].desscription)));
  }

  console.log(_tracks_json__WEBPACK_IMPORTED_MODULE_2__["tracks"][0]);
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
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "curriculum-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Curriculum"), trackComponents);
};

/* harmony default export */ __webpack_exports__["default"] = (Tracks);

/***/ })

})
//# sourceMappingURL=index.js.96a91b8ed94c84010389.hot-update.js.map