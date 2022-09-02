"use strict";
(self["webpackChunkrestaurantpage_js"] = self["webpackChunkrestaurantpage_js"] || []).push([["navbar"],{

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

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ "./src/button.js");


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
homeContent.appendChild(navbar)




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/navbar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05xQzs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxJQUFJO0FBQ3hDLDhCQUE4QixHQUFHO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBVTtBQUNWO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS1qcy8uL3NyYy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtanMvLi9zcmMvbmF2YmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvb2tCdXR0b24ocGFyZW50KSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2Jvb2stYnRuJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gJ0Jvb2sgYSBUYWJsZSdcbiAgICAvLyBidG4uc2V0QXR0cmlidXRlKFwib25jbGlja1wiLCBcImxvY2F0aW9uLmhyZWY9Jy9ib29rJ1wiKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChidG4pXG59XG5cblxuIiwiaW1wb3J0IGJvb2tCdXR0b24gZnJvbSBcIi4vYnV0dG9uLmpzXCI7XG5cbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG5jb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcblxuZnVuY3Rpb24gY3JlYXRlTmF2TGluayh0eHQsIGlkKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidG4udGV4dENvbnRlbnQgPSB0eHRcbiAgICAvLyBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAke2xua31gKVxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aWR9YClcbiAgICBsaS5hcHBlbmRDaGlsZChidG4pXG4gICAgbmF2TGlua3MuYXBwZW5kQ2hpbGQobGkpXG59XG5cbmNyZWF0ZU5hdkxpbmsoJ0hvbWUnLCAnaG9tZScpXG5jcmVhdGVOYXZMaW5rKCdNZW51JywgJ21lbnUnKVxuY3JlYXRlTmF2TGluaygnQWJvdXQgVXMnLCAnYWJvdXQtdXMnKVxuYm9va0J1dHRvbihuYXZMaW5rcylcbm5hdmJhci5hcHBlbmRDaGlsZChuYXZMaW5rcylcbmhvbWVDb250ZW50LmFwcGVuZENoaWxkKG5hdmJhcilcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=