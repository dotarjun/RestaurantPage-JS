"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurantpage_js"] = self["webpackChunkrestaurantpage_js"] || []).push([["navbar"],{

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ bookButton)\n/* harmony export */ });\nfunction bookButton(parent) {\n    const btn = document.createElement('button');\n    btn.classList.add('book-btn');\n    btn.textContent = 'Book a Table'\n    btn.setAttribute(\"onclick\", \"location.href='/book'\")\n    parent.appendChild(btn)\n}\n\n\n\n\n//# sourceURL=webpack://restaurantpage-js/./src/button.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ \"./src/button.js\");\n\n\nconst navbar = document.createElement('nav')\nconst navLinks = document.createElement('ul')\n\nfunction createNavLink(txt, lnk) {\n    const li = document.createElement('li')\n    const link = document.createElement('a')\n    link.textContent = txt\n    link.setAttribute('href', `${lnk}`)\n    li.appendChild(link)\n    navLinks.appendChild(li)\n}\n\ncreateNavLink('Menu', 'menu')\ncreateNavLink('About Us', 'about-us')\ncreateNavLink('Contact', 'contact')\n;(0,_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(navLinks)\nnavbar.appendChild(navLinks)\ncontent.appendChild(navbar)\n\n//# sourceURL=webpack://restaurantpage-js/./src/navbar.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/navbar.js"));
/******/ }
]);