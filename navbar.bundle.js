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





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/navbar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMcUM7O0FBRTlCO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxJQUFJO0FBQzVDLGtDQUFrQyxHQUFHO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFVO0FBQ2Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtanMvLi9zcmMvYnV0dG9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLWpzLy4vc3JjL25hdmJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib29rQnV0dG9uKHBhcmVudCkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdib29rLWJ0bicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdCb29rIGEgVGFibGUnXG4gICAgLy8gYnRuLnNldEF0dHJpYnV0ZShcIm9uY2xpY2tcIiwgXCJsb2NhdGlvbi5ocmVmPScvYm9vaydcIilcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnRuKVxufVxuXG5cbiIsIlxuaW1wb3J0IGJvb2tCdXR0b24gZnJvbSBcIi4vYnV0dG9uLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROYXZiYXIocGFyZW50RWxlKSB7XG4gICAgLy8gY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1jb250ZW50JylcblxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOYXZMaW5rKHR4dCwgaWQpIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IHR4dFxuICAgICAgICAvLyBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAke2xua31gKVxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdpZCcsIGAke2lkfWApXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ0bilcbiAgICAgICAgbmF2TGlua3MuYXBwZW5kQ2hpbGQobGkpXG4gICAgfVxuXG4gICAgY3JlYXRlTmF2TGluaygnSG9tZScsICdob21lJylcbiAgICBjcmVhdGVOYXZMaW5rKCdNZW51JywgJ21lbnUnKVxuICAgIGNyZWF0ZU5hdkxpbmsoJ0Fib3V0IFVzJywgJ2Fib3V0LXVzJylcbiAgICBib29rQnV0dG9uKG5hdkxpbmtzKVxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChuYXZMaW5rcylcbiAgICBwYXJlbnRFbGUuYXBwZW5kQ2hpbGQobmF2YmFyKVxufVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9