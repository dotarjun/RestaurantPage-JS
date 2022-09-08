"use strict";
(self["webpackChunkrestaurantpage_js"] = self["webpackChunkrestaurantpage_js"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/blackchancery.ttf */ "./src/assets/fonts/blackchancery.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/StruckBase.otf */ "./src/assets/fonts/StruckBase.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Copperplate.otf */ "./src/assets/fonts/Copperplate.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/eiffel-tower-view.jpg */ "./src/assets/images/eiffel-tower-view.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/github.svg */ "./src/assets/images/github.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/twitter.svg */ "./src/assets/images/twitter.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --red-60: #3c0008;\n  --red-orange: #521008;\n  --orange-30-dark: #5d1808;\n  --orange-30: #683510;\n  --orange-30-light: #e77e01;\n  --orange-30-ultra-light: #f8dfc1;\n  --yellow-10: #fdda16;\n  --yellow-10-light: #ffee82;\n}\n\n::selection {\n  background: var(--orange-30-light);\n  color: var(--red-60);\n}\n@font-face {\n  font-family: \"BlackChancery\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-family: \"StruckBase\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-family: \"Copperplate\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\nbody {\n  margin: 0;\n  background-color: var(--red-60);\n  color: var(--orange-30-light);\n}\n\n#site-content {\n  margin-inline: 2.5vw;\n}\n\n.top-img {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  height: 90vh;\n  width: 95vw;\n  /* margin-block: 5vh; */\n  /* margin-top: 8vh; */\n  margin-bottom: 2vh;\n  /* margin-inline: 2.5vw; */\n  position: relative;\n  z-index: -5;\n  border: 0.2rem solid var(--orange-30-light);\n  border-radius: 2rem;\n  object-fit: cover;\n}\n\n.img-text {\n  position: absolute;\n  z-index: 2;\n  left: 50%;\n  top: 20%;\n  transform: translate(-50%, -50%);\n  color: white;\n  /* opacity: 80%; */\n  font-size: 4rem;\n  margin: 0;\n}\n\nmain {\n  font-family: sans-serif;\n}\n\n#home-content main {\n  margin-inline: 20vw;\n}\n\n.highlight-line {\n  font-weight: 900;\n  font-family: \"Copperplate\";\n  font-size: 2.5rem;\n  text-transform: capitalize;\n  padding: 1rem;\n  margin-inline: auto;\n  /* width: 60%; */\n  text-align: center;\n  border-radius: 0.5rem;\n  margin-block: 0;\n  color: var(--orange-30-light);\n  font-style: italic;\n}\n\nnav {\n  padding: 0;\n  margin: 0;\n  position: sticky;\n  top: 0px;\n  width: 100vw;\n  /* margin-inline: 20vw; */\n  display: flex;\n  justify-content: center;\n  z-index: 5;\n}\nnav ul {\n  background-color: white;\n  /* border-inline: 5px solid var(--orange-30);\n  border-bottom: 5px solid var(--orange-30);\n  border-inline: 5px solid black;\n  border-bottom: 5px solid black; */\n  border-radius: 0rem 0rem 1rem 1rem;\n  width: 55vw;\n  transform: translateX(-2.5vw);\n  padding: 0;\n  margin: 0;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  list-style: none;\n  height: 8vh;\n  font-size: 1.2rem;\n  background-color: var(--red-60);\n}\n\nnav ul li button {\n  text-decoration: none;\n  font-family: \"blackchancery\";\n  color: var(--orange-30-light);\n  font-weight: 600;\n  background: none;\n  outline: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n.book-btn {\n  font-size: 1.2rem;\n  font-weight: 600;\n  background: none;\n  border: none;\n  outline: none;\n  text-transform: uppercase;\n\n  padding-inline: 1rem;\n  padding-block: 0.25rem;\n  background-color: var(--orange-30-light);\n  color: var(--orange-30-ultra-light);\n  border-radius: 0.25rem;\n  /* border: 0.15rem solid var(--red-60); */\n  cursor: pointer;\n  font-family: \"blackchancery\";\n  /* box-shadow: var(--yellow-10) 0px 0px 1px; */\n}\n\nmain .book-btn {\n  position: relative;\n  left: 50%;\n  margin-top: 2rem;\n  padding-inline: 5rem;\n  padding-block: 1rem;\n  transform: translateX(-50%);\n  font-size: 1.5rem;\n  /* font-weight: 900; */\n}\n\nfooter {\n  height: 20vh;\n  background-color: black;\n  margin-top: 5rem;\n}\n\nfooter .socials {\n  display: flex;\n  flex-direction: row-reverse;\n  /* justify-content: space-between; */\n  align-items: center;\n  height: 100%;\n}\nfooter .socials img {\n  width: 4rem;\n  margin: 1rem;\n  cursor: pointer;\n  filter: invert(47%) sepia(56%) saturate(1829%) hue-rotate(8deg)\n    brightness(99%) contrast(99%);\n}\n\nfooter .socials #Github {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\nfooter .socials #Twitter {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n\n#menu-content main {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));\n  gap: 4rem;\n}\n\n.card {\n  background-color: var(--orange-30-dark);\n  /* margin-block: 3rem; */\n  border-radius: 1rem;\n  width: 100%;\n}\n\n.card ::selection {\n  color: var(--orange-30-dark);\n}\n\n.cardContentWrap {\n  padding: 2rem;\n}\n\n.cardContentWrap img {\n  border-radius: 1rem;\n  width: 100%;\n  height: 20rem;\n  object-fit: cover;\n}\n\n.cardContentWrap h3 {\n  font-family: \"Cooperplate\";\n  font-size: 2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,yBAAyB;EACzB,oBAAoB;EACpB,0BAA0B;EAC1B,gCAAgC;EAChC,oBAAoB;EACpB,0BAA0B;AAC5B;;AAEA;EACE,kCAAkC;EAClC,oBAAoB;AACtB;AACA;EACE,4BAA4B;EAC5B,4CAA0C;EAC1C,yBAAyB;EACzB,4CAAuC;EACvC,0BAA0B;EAC1B,4CAAwC;AAC1C;;AAEA;EACE,SAAS;EACT,+BAA+B;EAC/B,6BAA6B;AAC/B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,gDAAmD;EACnD,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,qBAAqB;EACrB,kBAAkB;EAClB,0BAA0B;EAC1B,kBAAkB;EAClB,WAAW;EACX,2CAA2C;EAC3C,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,0BAA0B;EAC1B,iBAAiB;EACjB,0BAA0B;EAC1B,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,QAAQ;EACR,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;AACA;EACE,uBAAuB;EACvB;;;mCAGiC;EACjC,kCAAkC;EAClC,WAAW;EACX,6BAA6B;EAC7B,UAAU;EACV,SAAS;EACT,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,iBAAiB;EACjB,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;EACrB,4BAA4B;EAC5B,6BAA6B;EAC7B,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,yBAAyB;;EAEzB,oBAAoB;EACpB,sBAAsB;EACtB,wCAAwC;EACxC,mCAAmC;EACnC,sBAAsB;EACtB,yCAAyC;EACzC,eAAe;EACf,4BAA4B;EAC5B,8CAA8C;AAChD;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;EACnB,2BAA2B;EAC3B,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,oCAAoC;EACpC,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf;iCAC+B;AACjC;;AAEA;EACE,gDAAwC;AAC1C;;AAEA;EACE,gDAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,4DAA4D;EAC5D,SAAS;AACX;;AAEA;EACE,uCAAuC;EACvC,wBAAwB;EACxB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;EAC1B,eAAe;AACjB","sourcesContent":[":root {\n  --red-60: #3c0008;\n  --red-orange: #521008;\n  --orange-30-dark: #5d1808;\n  --orange-30: #683510;\n  --orange-30-light: #e77e01;\n  --orange-30-ultra-light: #f8dfc1;\n  --yellow-10: #fdda16;\n  --yellow-10-light: #ffee82;\n}\n\n::selection {\n  background: var(--orange-30-light);\n  color: var(--red-60);\n}\n@font-face {\n  font-family: \"BlackChancery\";\n  src: url(./assets/fonts/blackchancery.ttf);\n  font-family: \"StruckBase\";\n  src: url(./assets/fonts/StruckBase.otf);\n  font-family: \"Copperplate\";\n  src: url(./assets/fonts/Copperplate.otf);\n}\n\nbody {\n  margin: 0;\n  background-color: var(--red-60);\n  color: var(--orange-30-light);\n}\n\n#site-content {\n  margin-inline: 2.5vw;\n}\n\n.top-img {\n  content: url(./assets/images/eiffel-tower-view.jpg);\n  height: 90vh;\n  width: 95vw;\n  /* margin-block: 5vh; */\n  /* margin-top: 8vh; */\n  margin-bottom: 2vh;\n  /* margin-inline: 2.5vw; */\n  position: relative;\n  z-index: -5;\n  border: 0.2rem solid var(--orange-30-light);\n  border-radius: 2rem;\n  object-fit: cover;\n}\n\n.img-text {\n  position: absolute;\n  z-index: 2;\n  left: 50%;\n  top: 20%;\n  transform: translate(-50%, -50%);\n  color: white;\n  /* opacity: 80%; */\n  font-size: 4rem;\n  margin: 0;\n}\n\nmain {\n  font-family: sans-serif;\n}\n\n#home-content main {\n  margin-inline: 20vw;\n}\n\n.highlight-line {\n  font-weight: 900;\n  font-family: \"Copperplate\";\n  font-size: 2.5rem;\n  text-transform: capitalize;\n  padding: 1rem;\n  margin-inline: auto;\n  /* width: 60%; */\n  text-align: center;\n  border-radius: 0.5rem;\n  margin-block: 0;\n  color: var(--orange-30-light);\n  font-style: italic;\n}\n\nnav {\n  padding: 0;\n  margin: 0;\n  position: sticky;\n  top: 0px;\n  width: 100vw;\n  /* margin-inline: 20vw; */\n  display: flex;\n  justify-content: center;\n  z-index: 5;\n}\nnav ul {\n  background-color: white;\n  /* border-inline: 5px solid var(--orange-30);\n  border-bottom: 5px solid var(--orange-30);\n  border-inline: 5px solid black;\n  border-bottom: 5px solid black; */\n  border-radius: 0rem 0rem 1rem 1rem;\n  width: 55vw;\n  transform: translateX(-2.5vw);\n  padding: 0;\n  margin: 0;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  list-style: none;\n  height: 8vh;\n  font-size: 1.2rem;\n  background-color: var(--red-60);\n}\n\nnav ul li button {\n  text-decoration: none;\n  font-family: \"blackchancery\";\n  color: var(--orange-30-light);\n  font-weight: 600;\n  background: none;\n  outline: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n.book-btn {\n  font-size: 1.2rem;\n  font-weight: 600;\n  background: none;\n  border: none;\n  outline: none;\n  text-transform: uppercase;\n\n  padding-inline: 1rem;\n  padding-block: 0.25rem;\n  background-color: var(--orange-30-light);\n  color: var(--orange-30-ultra-light);\n  border-radius: 0.25rem;\n  /* border: 0.15rem solid var(--red-60); */\n  cursor: pointer;\n  font-family: \"blackchancery\";\n  /* box-shadow: var(--yellow-10) 0px 0px 1px; */\n}\n\nmain .book-btn {\n  position: relative;\n  left: 50%;\n  margin-top: 2rem;\n  padding-inline: 5rem;\n  padding-block: 1rem;\n  transform: translateX(-50%);\n  font-size: 1.5rem;\n  /* font-weight: 900; */\n}\n\nfooter {\n  height: 20vh;\n  background-color: black;\n  margin-top: 5rem;\n}\n\nfooter .socials {\n  display: flex;\n  flex-direction: row-reverse;\n  /* justify-content: space-between; */\n  align-items: center;\n  height: 100%;\n}\nfooter .socials img {\n  width: 4rem;\n  margin: 1rem;\n  cursor: pointer;\n  filter: invert(47%) sepia(56%) saturate(1829%) hue-rotate(8deg)\n    brightness(99%) contrast(99%);\n}\n\nfooter .socials #Github {\n  content: url(./assets/images/github.svg);\n}\n\nfooter .socials #Twitter {\n  content: url(./assets/images/twitter.svg);\n}\n\n#menu-content main {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));\n  gap: 4rem;\n}\n\n.card {\n  background-color: var(--orange-30-dark);\n  /* margin-block: 3rem; */\n  border-radius: 1rem;\n  width: 100%;\n}\n\n.card ::selection {\n  color: var(--orange-30-dark);\n}\n\n.cardContentWrap {\n  padding: 2rem;\n}\n\n.cardContentWrap img {\n  border-radius: 1rem;\n  width: 100%;\n  height: 20rem;\n  object-fit: cover;\n}\n\n.cardContentWrap h3 {\n  font-family: \"Cooperplate\";\n  font-size: 2rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bookButton)
/* harmony export */ });
function bookButton(parent) {
    const btn = document.createElement('button');
    btn.classList.add('book-btn');
    btn.textContent = 'Book a Table'
    // btn.setAttribute("onclick", "location.href='/book'")
    parent.appendChild(btn)
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.js */ "./src/navbar.js");



const siteContent = document.createElement('div')
siteContent.setAttribute('id', 'site-content')

const homeContent = document.createElement('div')
homeContent.setAttribute('id', 'home-content')

const menuContent = document.createElement('div')
menuContent.setAttribute('id', 'menu-content')

const aboutUsContent = document.createElement('div')
aboutUsContent.setAttribute('id', 'about-us-content')


;(0,_navbar_js__WEBPACK_IMPORTED_MODULE_1__.addNavbar)(siteContent)

siteContent.appendChild(homeContent)
siteContent.appendChild(menuContent)
siteContent.appendChild(aboutUsContent)

menuContent.style.display = 'none'
aboutUsContent.style.display = 'none'

document.body.appendChild(siteContent);













// footer
const footer = document.createElement('footer')
const socials = document.createElement('div')
socials.classList.add('socials')
function addSocial(id) {
    const icons = document.createElement('img')
    icons.setAttribute('id', id)
    const link = document.createElement('a')
    link.setAttribute('href', `https://www.${id}.com/dotarjun`)
    link.appendChild(icons)
    socials.appendChild(link)
}
addSocial('Github')
addSocial('Twitter')
footer.appendChild(socials)
document.body.appendChild(footer)


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNavbar": () => (/* binding */ addNavbar)
/* harmony export */ });
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ "./src/button.js");



function addNavbar(parentEle) {
    // const homeContent = document.getElementById('home-content')

    const navbar = document.createElement('nav')
    const navLinks = document.createElement('ul')

    function createNavLink(txt, id) {
        const li = document.createElement('li')
        const btn = document.createElement('button')
        btn.textContent = txt
        // link.setAttribute('href', `${lnk}`)
        btn.setAttribute('id', `${id}`)
        li.appendChild(btn)
        navLinks.appendChild(li)
    }

    createNavLink('Home', 'home')
    createNavLink('Menu', 'menu')
    createNavLink('About Us', 'about-us')
    ;(0,_button_js__WEBPACK_IMPORTED_MODULE_0__["default"])(navLinks)
    navbar.appendChild(navLinks)
    parentEle.appendChild(navbar)
}





/***/ }),

/***/ "./src/assets/fonts/Copperplate.otf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Copperplate.otf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06d92876f6b4f12f51a3.otf";

/***/ }),

/***/ "./src/assets/fonts/StruckBase.otf":
/*!*****************************************!*\
  !*** ./src/assets/fonts/StruckBase.otf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8483aed846799c755123.otf";

/***/ }),

/***/ "./src/assets/fonts/blackchancery.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/blackchancery.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d521baec2350e17620c.ttf";

/***/ }),

/***/ "./src/assets/images/eiffel-tower-view.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/eiffel-tower-view.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "528a333bb15e8927306f.jpg";

/***/ }),

/***/ "./src/assets/images/github.svg":
/*!**************************************!*\
  !*** ./src/assets/images/github.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "015a78b3d05600d250b7.svg";

/***/ }),

/***/ "./src/assets/images/twitter.svg":
/*!***************************************!*\
  !*** ./src/assets/images/twitter.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1800e6ae67d3b3f4ed3c.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2tCOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxzREFBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLEdBQUc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRxQzs7QUFFOUI7QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLElBQUk7QUFDNUMsa0NBQWtDLEdBQUc7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVU7QUFDZDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS1qcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLWpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS1qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLWpzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtanMvLi9zcmMvYnV0dG9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLWpzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLWpzLy4vc3JjL25hdmJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvYmxhY2tjaGFuY2VyeS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9TdHJ1Y2tCYXNlLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0NvcHBlcnBsYXRlLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9laWZmZWwtdG93ZXItdmlldy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvZ2l0aHViLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy90d2l0dGVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1yZWQtNjA6ICMzYzAwMDg7XFxuICAtLXJlZC1vcmFuZ2U6ICM1MjEwMDg7XFxuICAtLW9yYW5nZS0zMC1kYXJrOiAjNWQxODA4O1xcbiAgLS1vcmFuZ2UtMzA6ICM2ODM1MTA7XFxuICAtLW9yYW5nZS0zMC1saWdodDogI2U3N2UwMTtcXG4gIC0tb3JhbmdlLTMwLXVsdHJhLWxpZ2h0OiAjZjhkZmMxO1xcbiAgLS15ZWxsb3ctMTA6ICNmZGRhMTY7XFxuICAtLXllbGxvdy0xMC1saWdodDogI2ZmZWU4MjtcXG59XFxuXFxuOjpzZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLTMwLWxpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1yZWQtNjApO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmxhY2tDaGFuY2VyeVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LWZhbWlseTogXFxcIlN0cnVja0Jhc2VcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3BwZXJwbGF0ZVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTYwKTtcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UtMzAtbGlnaHQpO1xcbn1cXG5cXG4jc2l0ZS1jb250ZW50IHtcXG4gIG1hcmdpbi1pbmxpbmU6IDIuNXZ3O1xcbn1cXG5cXG4udG9wLWltZyB7XFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgd2lkdGg6IDk1dnc7XFxuICAvKiBtYXJnaW4tYmxvY2s6IDV2aDsgKi9cXG4gIC8qIG1hcmdpbi10b3A6IDh2aDsgKi9cXG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gIC8qIG1hcmdpbi1pbmxpbmU6IDIuNXZ3OyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogLTU7XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCB2YXIoLS1vcmFuZ2UtMzAtbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uaW1nLXRleHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogMjAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICAvKiBvcGFjaXR5OiA4MCU7ICovXFxuICBmb250LXNpemU6IDRyZW07XFxuICBtYXJnaW46IDA7XFxufVxcblxcbm1haW4ge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiNob21lLWNvbnRlbnQgbWFpbiB7XFxuICBtYXJnaW4taW5saW5lOiAyMHZ3O1xcbn1cXG5cXG4uaGlnaGxpZ2h0LWxpbmUge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ29wcGVycGxhdGVcXFwiO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgLyogd2lkdGg6IDYwJTsgKi9cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIG1hcmdpbi1ibG9jazogMDtcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UtMzAtbGlnaHQpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5uYXYge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDBweDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIC8qIG1hcmdpbi1pbmxpbmU6IDIwdnc7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiA1O1xcbn1cXG5uYXYgdWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAvKiBib3JkZXItaW5saW5lOiA1cHggc29saWQgdmFyKC0tb3JhbmdlLTMwKTtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1vcmFuZ2UtMzApO1xcbiAgYm9yZGVyLWlubGluZTogNXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMHJlbSAwcmVtIDFyZW0gMXJlbTtcXG4gIHdpZHRoOiA1NXZ3O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yLjV2dyk7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IDh2aDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLTYwKTtcXG59XFxuXFxubmF2IHVsIGxpIGJ1dHRvbiB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcImJsYWNrY2hhbmNlcnlcXFwiO1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS0zMC1saWdodCk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5ib29rLWJ0biB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG4gIHBhZGRpbmctYmxvY2s6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtMzAtbGlnaHQpO1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS0zMC11bHRyYS1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgLyogYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXJlZC02MCk7ICovXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcImJsYWNrY2hhbmNlcnlcXFwiO1xcbiAgLyogYm94LXNoYWRvdzogdmFyKC0teWVsbG93LTEwKSAwcHggMHB4IDFweDsgKi9cXG59XFxuXFxubWFpbiAuYm9vay1idG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIHBhZGRpbmctaW5saW5lOiA1cmVtO1xcbiAgcGFkZGluZy1ibG9jazogMXJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgLyogZm9udC13ZWlnaHQ6IDkwMDsgKi9cXG59XFxuXFxuZm9vdGVyIHtcXG4gIGhlaWdodDogMjB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG59XFxuXFxuZm9vdGVyIC5zb2NpYWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5mb290ZXIgLnNvY2lhbHMgaW1nIHtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsdGVyOiBpbnZlcnQoNDclKSBzZXBpYSg1NiUpIHNhdHVyYXRlKDE4MjklKSBodWUtcm90YXRlKDhkZWcpXFxuICAgIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCg5OSUpO1xcbn1cXG5cXG5mb290ZXIgLnNvY2lhbHMgI0dpdGh1YiB7XFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbn1cXG5cXG5mb290ZXIgLnNvY2lhbHMgI1R3aXR0ZXIge1xcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG59XFxuXFxuI21lbnUtY29udGVudCBtYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg1MDBweCwgMWZyKSk7XFxuICBnYXA6IDRyZW07XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS0zMC1kYXJrKTtcXG4gIC8qIG1hcmdpbi1ibG9jazogM3JlbTsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQgOjpzZWxlY3Rpb24ge1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS0zMC1kYXJrKTtcXG59XFxuXFxuLmNhcmRDb250ZW50V3JhcCB7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uY2FyZENvbnRlbnRXcmFwIGltZyB7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5jYXJkQ29udGVudFdyYXAgaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb29wZXJwbGF0ZVxcXCI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFw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LHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tcmVkLTYwOiAjM2MwMDA4O1xcbiAgLS1yZWQtb3JhbmdlOiAjNTIxMDA4O1xcbiAgLS1vcmFuZ2UtMzAtZGFyazogIzVkMTgwODtcXG4gIC0tb3JhbmdlLTMwOiAjNjgzNTEwO1xcbiAgLS1vcmFuZ2UtMzAtbGlnaHQ6ICNlNzdlMDE7XFxuICAtLW9yYW5nZS0zMC11bHRyYS1saWdodDogI2Y4ZGZjMTtcXG4gIC0teWVsbG93LTEwOiAjZmRkYTE2O1xcbiAgLS15ZWxsb3ctMTAtbGlnaHQ6ICNmZmVlODI7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW9yYW5nZS0zMC1saWdodCk7XFxuICBjb2xvcjogdmFyKC0tcmVkLTYwKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJsYWNrQ2hhbmNlcnlcXFwiO1xcbiAgc3JjOiB1cmwoLi9hc3NldHMvZm9udHMvYmxhY2tjaGFuY2VyeS50dGYpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdHJ1Y2tCYXNlXFxcIjtcXG4gIHNyYzogdXJsKC4vYXNzZXRzL2ZvbnRzL1N0cnVja0Jhc2Uub3RmKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ29wcGVycGxhdGVcXFwiO1xcbiAgc3JjOiB1cmwoLi9hc3NldHMvZm9udHMvQ29wcGVycGxhdGUub3RmKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtNjApO1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS0zMC1saWdodCk7XFxufVxcblxcbiNzaXRlLWNvbnRlbnQge1xcbiAgbWFyZ2luLWlubGluZTogMi41dnc7XFxufVxcblxcbi50b3AtaW1nIHtcXG4gIGNvbnRlbnQ6IHVybCguL2Fzc2V0cy9pbWFnZXMvZWlmZmVsLXRvd2VyLXZpZXcuanBnKTtcXG4gIGhlaWdodDogOTB2aDtcXG4gIHdpZHRoOiA5NXZ3O1xcbiAgLyogbWFyZ2luLWJsb2NrOiA1dmg7ICovXFxuICAvKiBtYXJnaW4tdG9wOiA4dmg7ICovXFxuICBtYXJnaW4tYm90dG9tOiAydmg7XFxuICAvKiBtYXJnaW4taW5saW5lOiAyLjV2dzsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IC01O1xcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgdmFyKC0tb3JhbmdlLTMwLWxpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmltZy10ZXh0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDI7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDIwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLyogb3BhY2l0eTogODAlOyAqL1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jaG9tZS1jb250ZW50IG1haW4ge1xcbiAgbWFyZ2luLWlubGluZTogMjB2dztcXG59XFxuXFxuLmhpZ2hsaWdodC1saW5lIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LWZhbWlseTogXFxcIkNvcHBlcnBsYXRlXFxcIjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIC8qIHdpZHRoOiA2MCU7ICovXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBtYXJnaW4tYmxvY2s6IDA7XFxuICBjb2xvcjogdmFyKC0tb3JhbmdlLTMwLWxpZ2h0KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxubmF2IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwcHg7XFxuICB3aWR0aDogMTAwdnc7XFxuICAvKiBtYXJnaW4taW5saW5lOiAyMHZ3OyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogNTtcXG59XFxubmF2IHVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLyogYm9yZGVyLWlubGluZTogNXB4IHNvbGlkIHZhcigtLW9yYW5nZS0zMCk7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tb3JhbmdlLTMwKTtcXG4gIGJvcmRlci1pbmxpbmU6IDVweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBibGFjazsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDByZW0gMHJlbSAxcmVtIDFyZW07XFxuICB3aWR0aDogNTV2dztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMi41dncpO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgaGVpZ2h0OiA4dmg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC02MCk7XFxufVxcblxcbm5hdiB1bCBsaSBidXR0b24ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJibGFja2NoYW5jZXJ5XFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UtMzAtbGlnaHQpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uYm9vay1idG4ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICBwYWRkaW5nLWJsb2NrOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLTMwLWxpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UtMzAtdWx0cmEtbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIC8qIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1yZWQtNjApOyAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJibGFja2NoYW5jZXJ5XFxcIjtcXG4gIC8qIGJveC1zaGFkb3c6IHZhcigtLXllbGxvdy0xMCkgMHB4IDBweCAxcHg7ICovXFxufVxcblxcbm1haW4gLmJvb2stYnRuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBwYWRkaW5nLWlubGluZTogNXJlbTtcXG4gIHBhZGRpbmctYmxvY2s6IDFyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIC8qIGZvbnQtd2VpZ2h0OiA5MDA7ICovXFxufVxcblxcbmZvb3RlciB7XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxufVxcblxcbmZvb3RlciAuc29jaWFscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuZm9vdGVyIC5zb2NpYWxzIGltZyB7XFxuICB3aWR0aDogNHJlbTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZpbHRlcjogaW52ZXJ0KDQ3JSkgc2VwaWEoNTYlKSBzYXR1cmF0ZSgxODI5JSkgaHVlLXJvdGF0ZSg4ZGVnKVxcbiAgICBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoOTklKTtcXG59XFxuXFxuZm9vdGVyIC5zb2NpYWxzICNHaXRodWIge1xcbiAgY29udGVudDogdXJsKC4vYXNzZXRzL2ltYWdlcy9naXRodWIuc3ZnKTtcXG59XFxuXFxuZm9vdGVyIC5zb2NpYWxzICNUd2l0dGVyIHtcXG4gIGNvbnRlbnQ6IHVybCguL2Fzc2V0cy9pbWFnZXMvdHdpdHRlci5zdmcpO1xcbn1cXG5cXG4jbWVudS1jb250ZW50IG1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcXG4gIGdhcDogNHJlbTtcXG59XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLTMwLWRhcmspO1xcbiAgLyogbWFyZ2luLWJsb2NrOiAzcmVtOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZCA6OnNlbGVjdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tb3JhbmdlLTMwLWRhcmspO1xcbn1cXG5cXG4uY2FyZENvbnRlbnRXcmFwIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5jYXJkQ29udGVudFdyYXAgaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjByZW07XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmNhcmRDb250ZW50V3JhcCBoMyB7XFxuICBmb250LWZhbWlseTogXFxcIkNvb3BlcnBsYXRlXFxcIjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvb2tCdXR0b24ocGFyZW50KSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2Jvb2stYnRuJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gJ0Jvb2sgYSBUYWJsZSdcbiAgICAvLyBidG4uc2V0QXR0cmlidXRlKFwib25jbGlja1wiLCBcImxvY2F0aW9uLmhyZWY9Jy9ib29rJ1wiKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChidG4pXG59XG5cblxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBhZGROYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXIuanNcIlxuXG5jb25zdCBzaXRlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5zaXRlQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NpdGUtY29udGVudCcpXG5cbmNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmhvbWVDb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1jb250ZW50JylcblxuY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxubWVudUNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWNvbnRlbnQnKVxuXG5jb25zdCBhYm91dFVzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5hYm91dFVzQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LXVzLWNvbnRlbnQnKVxuXG5cbmFkZE5hdmJhcihzaXRlQ29udGVudClcblxuc2l0ZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpXG5zaXRlQ29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGVudClcbnNpdGVDb250ZW50LmFwcGVuZENoaWxkKGFib3V0VXNDb250ZW50KVxuXG5tZW51Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5hYm91dFVzQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2l0ZUNvbnRlbnQpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBmb290ZXJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG5jb25zdCBzb2NpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnNvY2lhbHMuY2xhc3NMaXN0LmFkZCgnc29jaWFscycpXG5mdW5jdGlvbiBhZGRTb2NpYWwoaWQpIHtcbiAgICBjb25zdCBpY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaWNvbnMuc2V0QXR0cmlidXRlKCdpZCcsIGlkKVxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGBodHRwczovL3d3dy4ke2lkfS5jb20vZG90YXJqdW5gKVxuICAgIGxpbmsuYXBwZW5kQ2hpbGQoaWNvbnMpXG4gICAgc29jaWFscy5hcHBlbmRDaGlsZChsaW5rKVxufVxuYWRkU29jaWFsKCdHaXRodWInKVxuYWRkU29jaWFsKCdUd2l0dGVyJylcbmZvb3Rlci5hcHBlbmRDaGlsZChzb2NpYWxzKVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpXG4iLCJcbmltcG9ydCBib29rQnV0dG9uIGZyb20gXCIuL2J1dHRvbi5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmF2YmFyKHBhcmVudEVsZSkge1xuICAgIC8vIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtY29udGVudCcpXG5cbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTmF2TGluayh0eHQsIGlkKSB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidG4udGV4dENvbnRlbnQgPSB0eHRcbiAgICAgICAgLy8gbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgJHtsbmt9YClcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpZH1gKVxuICAgICAgICBsaS5hcHBlbmRDaGlsZChidG4pXG4gICAgICAgIG5hdkxpbmtzLmFwcGVuZENoaWxkKGxpKVxuICAgIH1cblxuICAgIGNyZWF0ZU5hdkxpbmsoJ0hvbWUnLCAnaG9tZScpXG4gICAgY3JlYXRlTmF2TGluaygnTWVudScsICdtZW51JylcbiAgICBjcmVhdGVOYXZMaW5rKCdBYm91dCBVcycsICdhYm91dC11cycpXG4gICAgYm9va0J1dHRvbihuYXZMaW5rcylcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2TGlua3MpXG4gICAgcGFyZW50RWxlLmFwcGVuZENoaWxkKG5hdmJhcilcbn1cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==