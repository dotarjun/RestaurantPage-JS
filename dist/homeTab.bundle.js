/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurantpage_js"] = self["webpackChunkrestaurantpage_js"] || []).push([["homeTab"],{

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ (() => {

eval("function appendImg(msg) {\n    const h1 = document.createElement('h1');\n    h1.textContent = msg;\n    h1.classList.add('img-text')\n    content.appendChild(h1);\n\n    const topImg = document.createElement('img');\n    topImg.classList.add('top-img');\n    content.appendChild(topImg);\n\n    const scroll = document.createElement('img');\n    scroll.classList.add('scroll')\n    content.appendChild(scroll)\n}\n\nappendImg('Ratatouille Restaurant')\n\n//# sourceURL=webpack://restaurantpage-js/./src/homeTab.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/homeTab.js"));
/******/ }
]);