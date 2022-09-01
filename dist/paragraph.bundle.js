"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurantpage_js"] = self["webpackChunkrestaurantpage_js"] || []).push([["paragraph"],{

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ bookButton)\n/* harmony export */ });\nfunction bookButton(parent) {\n    const btn = document.createElement('button');\n    btn.classList.add('book-btn');\n    btn.textContent = 'Book a Table'\n    btn.setAttribute(\"onclick\", \"location.href='/book'\")\n    parent.appendChild(btn)\n}\n\n\n\n\n//# sourceURL=webpack://restaurantpage-js/./src/button.js?");

/***/ }),

/***/ "./src/paragraph.js":
/*!**************************!*\
  !*** ./src/paragraph.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ \"./src/button.js\");\n\n\nconst homeContent = document.createElement('div');\nhomeContent.classList.add('home-content');\n\nfunction homeText(text) {\n    const para = document.createElement('p');\n    para.textContent = text;\n    homeContent.appendChild(para)\n}\n\nfunction highlightText(text) {\n    const highlightLine = document.createElement('p')\n    highlightLine.classList.add('highlight-line');\n    highlightLine.textContent = text;\n    homeContent.appendChild(highlightLine)\n}\n\nfunction addDisclaimer(parent) {\n    const disc = document.createElement('p')\n    disc.classList.add('disclaimer')\n    disc.innerHTML = \"By booking you adhere to our <a href=\\\"#\\\">Terms and Conditions</a> and our <a href=\\\"#\\\">hygiene policy</a>\"\n    parent.appendChild(disc)\n}\n\nhomeText('Remy (our lead chef) dreamt of becoming a great chef, despite being a rat in a rodent-phobic profession. Life led him to Paris to follow his dream, and with the help of hapless garbage boy Linguini he put his culinary skills to the test in the kitchen but he has to stay in hiding at the same time, with hilarious consequences. Remy eventually got the chance to prove his culinary abilities to THE Anton Ego, the great food critic. With a surprisingly positive review, we (formerly known as Gusteau\\'s) were able to rise back to our old fame and rewrite history in French Cuisine.')\nhomeText('But that would change soon...')\nhomeText('Following Ego\\'s review, we were ~ratted~ out.Thus Gustaeu\\'s was shut down due to undisclosable reasons. But fear not, Gustaeu\\'s spirit still lives on with our top of the notch chefs. With a highly diverse staff and an inclusonary kitchen open for individuals who love cooking, we have been rated Paris\\'s best place to eat (and cook) at. At Ratatouille we embody Gustaeu\\'s motto ')\nhighlightText('Anybody can Cook')\nhomeText('So what are you waiting for? Book a table at Ratatouille by clicking the button below.')\n;(0,_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(homeContent)\n// addDisclaimer(homeContent)\ncontent.appendChild(homeContent)\n\n//# sourceURL=webpack://restaurantpage-js/./src/paragraph.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/paragraph.js"));
/******/ }
]);