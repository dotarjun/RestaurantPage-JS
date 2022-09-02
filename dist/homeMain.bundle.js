"use strict";
(self["webpackChunkrestaurantpage_js"] = self["webpackChunkrestaurantpage_js"] || []).push([["homeMain"],{

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

/***/ "./src/home-main.js":
/*!**************************!*\
  !*** ./src/home-main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ "./src/button.js");


const homeMainContent = document.createElement('main');

function homeText(text) {
    const para = document.createElement('p');
    para.textContent = text;
    homeMainContent.appendChild(para)
}

function highlightText(text) {
    const highlightLine = document.createElement('p')
    highlightLine.classList.add('highlight-line');
    highlightLine.textContent = text;
    homeMainContent.appendChild(highlightLine)
}

function addDisclaimer(parent) {
    const disc = document.createElement('p')
    disc.classList.add('disclaimer')
    disc.innerHTML = "By booking you adhere to our <a href=\"#\">Terms and Conditions</a> and our <a href=\"#\">hygiene policy</a>"
    parent.appendChild(disc)
}

homeText('Remy (our lead chef) dreamt of becoming a great chef, despite being a rat in a rodent-phobic profession. Life led him to Paris to follow his dream, and with the help of hapless garbage boy Linguini he put his culinary skills to the test in the kitchen but he has to stay in hiding at the same time, with hilarious consequences. Remy eventually got the chance to prove his culinary abilities to THE Anton Ego, the great food critic. With a surprisingly positive review, we (formerly known as Gusteau\'s) were able to rise back to our old fame and rewrite history in French Cuisine.')
homeText('But that would change soon...')
homeText('Following Ego\'s review, we were ~ratted~ out. Thus Gustaeu\'s was shut down due to undisclosable reasons. But fear not, Gustaeu\'s spirit still lives on with our top of the notch chefs. With a highly diverse staff and an inclusonary kitchen open for individuals who love cooking, we have been rated Paris\'s best place to eat (and cook) at. At Ratatouille we embody Gustaeu\'s motto ')
highlightText('Anybody can Cook')
homeText('So what are you waiting for? Book a table at Ratatouille by clicking the button below.')
;(0,_button_js__WEBPACK_IMPORTED_MODULE_0__["default"])(homeMainContent)
// addDisclaimer(homeMainContent)
homeContent.appendChild(homeMainContent)

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home-main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZU1haW4uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTnFDOztBQUVyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFVO0FBQ1Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLWpzLy4vc3JjL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS1qcy8uL3NyYy9ob21lLW1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm9va0J1dHRvbihwYXJlbnQpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnYm9vay1idG4nKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSAnQm9vayBhIFRhYmxlJ1xuICAgIC8vIGJ0bi5zZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIsIFwibG9jYXRpb24uaHJlZj0nL2Jvb2snXCIpXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJ0bilcbn1cblxuXG4iLCJpbXBvcnQgYm9va0J1dHRvbiBmcm9tIFwiLi9idXR0b24uanNcIjtcblxuY29uc3QgaG9tZU1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG5mdW5jdGlvbiBob21lVGV4dCh0ZXh0KSB7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBob21lTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYSlcbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3QgaGlnaGxpZ2h0TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGhpZ2hsaWdodExpbmUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0LWxpbmUnKTtcbiAgICBoaWdobGlnaHRMaW5lLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBob21lTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0TGluZSlcbn1cblxuZnVuY3Rpb24gYWRkRGlzY2xhaW1lcihwYXJlbnQpIHtcbiAgICBjb25zdCBkaXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGlzYy5jbGFzc0xpc3QuYWRkKCdkaXNjbGFpbWVyJylcbiAgICBkaXNjLmlubmVySFRNTCA9IFwiQnkgYm9va2luZyB5b3UgYWRoZXJlIHRvIG91ciA8YSBocmVmPVxcXCIjXFxcIj5UZXJtcyBhbmQgQ29uZGl0aW9uczwvYT4gYW5kIG91ciA8YSBocmVmPVxcXCIjXFxcIj5oeWdpZW5lIHBvbGljeTwvYT5cIlxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChkaXNjKVxufVxuXG5ob21lVGV4dCgnUmVteSAob3VyIGxlYWQgY2hlZikgZHJlYW10IG9mIGJlY29taW5nIGEgZ3JlYXQgY2hlZiwgZGVzcGl0ZSBiZWluZyBhIHJhdCBpbiBhIHJvZGVudC1waG9iaWMgcHJvZmVzc2lvbi4gTGlmZSBsZWQgaGltIHRvIFBhcmlzIHRvIGZvbGxvdyBoaXMgZHJlYW0sIGFuZCB3aXRoIHRoZSBoZWxwIG9mIGhhcGxlc3MgZ2FyYmFnZSBib3kgTGluZ3VpbmkgaGUgcHV0IGhpcyBjdWxpbmFyeSBza2lsbHMgdG8gdGhlIHRlc3QgaW4gdGhlIGtpdGNoZW4gYnV0IGhlIGhhcyB0byBzdGF5IGluIGhpZGluZyBhdCB0aGUgc2FtZSB0aW1lLCB3aXRoIGhpbGFyaW91cyBjb25zZXF1ZW5jZXMuIFJlbXkgZXZlbnR1YWxseSBnb3QgdGhlIGNoYW5jZSB0byBwcm92ZSBoaXMgY3VsaW5hcnkgYWJpbGl0aWVzIHRvIFRIRSBBbnRvbiBFZ28sIHRoZSBncmVhdCBmb29kIGNyaXRpYy4gV2l0aCBhIHN1cnByaXNpbmdseSBwb3NpdGl2ZSByZXZpZXcsIHdlIChmb3JtZXJseSBrbm93biBhcyBHdXN0ZWF1XFwncykgd2VyZSBhYmxlIHRvIHJpc2UgYmFjayB0byBvdXIgb2xkIGZhbWUgYW5kIHJld3JpdGUgaGlzdG9yeSBpbiBGcmVuY2ggQ3Vpc2luZS4nKVxuaG9tZVRleHQoJ0J1dCB0aGF0IHdvdWxkIGNoYW5nZSBzb29uLi4uJylcbmhvbWVUZXh0KCdGb2xsb3dpbmcgRWdvXFwncyByZXZpZXcsIHdlIHdlcmUgfnJhdHRlZH4gb3V0LiBUaHVzIEd1c3RhZXVcXCdzIHdhcyBzaHV0IGRvd24gZHVlIHRvIHVuZGlzY2xvc2FibGUgcmVhc29ucy4gQnV0IGZlYXIgbm90LCBHdXN0YWV1XFwncyBzcGlyaXQgc3RpbGwgbGl2ZXMgb24gd2l0aCBvdXIgdG9wIG9mIHRoZSBub3RjaCBjaGVmcy4gV2l0aCBhIGhpZ2hseSBkaXZlcnNlIHN0YWZmIGFuZCBhbiBpbmNsdXNvbmFyeSBraXRjaGVuIG9wZW4gZm9yIGluZGl2aWR1YWxzIHdobyBsb3ZlIGNvb2tpbmcsIHdlIGhhdmUgYmVlbiByYXRlZCBQYXJpc1xcJ3MgYmVzdCBwbGFjZSB0byBlYXQgKGFuZCBjb29rKSBhdC4gQXQgUmF0YXRvdWlsbGUgd2UgZW1ib2R5IEd1c3RhZXVcXCdzIG1vdHRvICcpXG5oaWdobGlnaHRUZXh0KCdBbnlib2R5IGNhbiBDb29rJylcbmhvbWVUZXh0KCdTbyB3aGF0IGFyZSB5b3Ugd2FpdGluZyBmb3I/IEJvb2sgYSB0YWJsZSBhdCBSYXRhdG91aWxsZSBieSBjbGlja2luZyB0aGUgYnV0dG9uIGJlbG93LicpXG5ib29rQnV0dG9uKGhvbWVNYWluQ29udGVudClcbi8vIGFkZERpc2NsYWltZXIoaG9tZU1haW5Db250ZW50KVxuaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZU1haW5Db250ZW50KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==