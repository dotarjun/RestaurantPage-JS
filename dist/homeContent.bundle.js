"use strict";
(self["webpackChunkrestaurantpage_js"] = self["webpackChunkrestaurantpage_js"] || []).push([["homeContent"],{

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

/***/ "./src/home-content.js":
/*!*****************************!*\
  !*** ./src/home-content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addHomeContent": () => (/* binding */ addHomeContent)
/* harmony export */ });
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ "./src/button.js");

const mainContent = document.createElement('main');

const homeContent = document.getElementById('home-content')
// const mainContent = document.querySelector('main');

function homeText(text) {
    const para = document.createElement('p');
    para.textContent = text;
    mainContent.appendChild(para)
}

function highlightText(text) {
    const highlightLine = document.createElement('p')
    highlightLine.classList.add('highlight-line');
    highlightLine.textContent = text;
    mainContent.appendChild(highlightLine)
}

function addDisclaimer(parent) {
    const disc = document.createElement('p')
    disc.classList.add('disclaimer')
    disc.innerHTML = "By booking you adhere to our <a href=\"#\">Terms and Conditions</a> and our <a href=\"#\">hygiene policy</a>"
    parent.appendChild(disc)
}

function addCover(msg) {
    const h1 = document.createElement('h1');
    h1.textContent = msg;
    h1.classList.add('img-text')
    homeContent.appendChild(h1);

    const topImg = document.createElement('img');
    topImg.classList.add('top-img');
    homeContent.appendChild(topImg);
}

function addHomeContent() {
    addCover()
    homeText('Remy (our lead chef) dreamt of becoming a great chef, despite being a rat in a rodent-phobic profession. Life led him to Paris to follow his dream, and with the help of hapless garbage boy Linguini he put his culinary skills to the test in the kitchen but he has to stay in hiding at the same time, with hilarious consequences. Remy eventually got the chance to prove his culinary abilities to THE Anton Ego, the great food critic. With a surprisingly positive review, we (formerly known as Gusteau\'s) were able to rise back to our old fame and rewrite history in French Cuisine.')
    homeText('But that would change soon...')
    homeText('Following Ego\'s review, we were ~ratted~ out. Thus Gustaeu\'s was shut down due to undisclosable reasons. But fear not, Gustaeu\'s spirit still lives on with our top of the notch chefs. With a highly diverse staff and an inclusonary kitchen open for individuals who love cooking, we have been rated Paris\'s best place to eat (and cook) at. At Ratatouille we embody Gustaeu\'s motto ')
    highlightText('Anybody can Cook')
    homeText('So what are you waiting for? Book a table at Ratatouille by clicking the button below.')
    ;(0,_button_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainContent)
    homeContent.appendChild(mainContent)
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home-content.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZUNvbnRlbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFVO0FBQ2Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLWpzLy4vc3JjL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS1qcy8uL3NyYy9ob21lLWNvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm9va0J1dHRvbihwYXJlbnQpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnYm9vay1idG4nKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSAnQm9vayBhIFRhYmxlJ1xuICAgIC8vIGJ0bi5zZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIsIFwibG9jYXRpb24uaHJlZj0nL2Jvb2snXCIpXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJ0bilcbn1cblxuXG4iLCJpbXBvcnQgYm9va0J1dHRvbiBmcm9tIFwiLi9idXR0b24uanNcIjtcbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG5jb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLWNvbnRlbnQnKVxuLy8gY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmZ1bmN0aW9uIGhvbWVUZXh0KHRleHQpIHtcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHBhcmEpXG59XG5cbmZ1bmN0aW9uIGhpZ2hsaWdodFRleHQodGV4dCkge1xuICAgIGNvbnN0IGhpZ2hsaWdodExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBoaWdobGlnaHRMaW5lLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodC1saW5lJyk7XG4gICAgaGlnaGxpZ2h0TGluZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0TGluZSlcbn1cblxuZnVuY3Rpb24gYWRkRGlzY2xhaW1lcihwYXJlbnQpIHtcbiAgICBjb25zdCBkaXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGlzYy5jbGFzc0xpc3QuYWRkKCdkaXNjbGFpbWVyJylcbiAgICBkaXNjLmlubmVySFRNTCA9IFwiQnkgYm9va2luZyB5b3UgYWRoZXJlIHRvIG91ciA8YSBocmVmPVxcXCIjXFxcIj5UZXJtcyBhbmQgQ29uZGl0aW9uczwvYT4gYW5kIG91ciA8YSBocmVmPVxcXCIjXFxcIj5oeWdpZW5lIHBvbGljeTwvYT5cIlxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChkaXNjKVxufVxuXG5mdW5jdGlvbiBhZGRDb3Zlcihtc2cpIHtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSBtc2c7XG4gICAgaDEuY2xhc3NMaXN0LmFkZCgnaW1nLXRleHQnKVxuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGgxKTtcblxuICAgIGNvbnN0IHRvcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRvcEltZy5jbGFzc0xpc3QuYWRkKCd0b3AtaW1nJyk7XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQodG9wSW1nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhvbWVDb250ZW50KCkge1xuICAgIGFkZENvdmVyKClcbiAgICBob21lVGV4dCgnUmVteSAob3VyIGxlYWQgY2hlZikgZHJlYW10IG9mIGJlY29taW5nIGEgZ3JlYXQgY2hlZiwgZGVzcGl0ZSBiZWluZyBhIHJhdCBpbiBhIHJvZGVudC1waG9iaWMgcHJvZmVzc2lvbi4gTGlmZSBsZWQgaGltIHRvIFBhcmlzIHRvIGZvbGxvdyBoaXMgZHJlYW0sIGFuZCB3aXRoIHRoZSBoZWxwIG9mIGhhcGxlc3MgZ2FyYmFnZSBib3kgTGluZ3VpbmkgaGUgcHV0IGhpcyBjdWxpbmFyeSBza2lsbHMgdG8gdGhlIHRlc3QgaW4gdGhlIGtpdGNoZW4gYnV0IGhlIGhhcyB0byBzdGF5IGluIGhpZGluZyBhdCB0aGUgc2FtZSB0aW1lLCB3aXRoIGhpbGFyaW91cyBjb25zZXF1ZW5jZXMuIFJlbXkgZXZlbnR1YWxseSBnb3QgdGhlIGNoYW5jZSB0byBwcm92ZSBoaXMgY3VsaW5hcnkgYWJpbGl0aWVzIHRvIFRIRSBBbnRvbiBFZ28sIHRoZSBncmVhdCBmb29kIGNyaXRpYy4gV2l0aCBhIHN1cnByaXNpbmdseSBwb3NpdGl2ZSByZXZpZXcsIHdlIChmb3JtZXJseSBrbm93biBhcyBHdXN0ZWF1XFwncykgd2VyZSBhYmxlIHRvIHJpc2UgYmFjayB0byBvdXIgb2xkIGZhbWUgYW5kIHJld3JpdGUgaGlzdG9yeSBpbiBGcmVuY2ggQ3Vpc2luZS4nKVxuICAgIGhvbWVUZXh0KCdCdXQgdGhhdCB3b3VsZCBjaGFuZ2Ugc29vbi4uLicpXG4gICAgaG9tZVRleHQoJ0ZvbGxvd2luZyBFZ29cXCdzIHJldmlldywgd2Ugd2VyZSB+cmF0dGVkfiBvdXQuIFRodXMgR3VzdGFldVxcJ3Mgd2FzIHNodXQgZG93biBkdWUgdG8gdW5kaXNjbG9zYWJsZSByZWFzb25zLiBCdXQgZmVhciBub3QsIEd1c3RhZXVcXCdzIHNwaXJpdCBzdGlsbCBsaXZlcyBvbiB3aXRoIG91ciB0b3Agb2YgdGhlIG5vdGNoIGNoZWZzLiBXaXRoIGEgaGlnaGx5IGRpdmVyc2Ugc3RhZmYgYW5kIGFuIGluY2x1c29uYXJ5IGtpdGNoZW4gb3BlbiBmb3IgaW5kaXZpZHVhbHMgd2hvIGxvdmUgY29va2luZywgd2UgaGF2ZSBiZWVuIHJhdGVkIFBhcmlzXFwncyBiZXN0IHBsYWNlIHRvIGVhdCAoYW5kIGNvb2spIGF0LiBBdCBSYXRhdG91aWxsZSB3ZSBlbWJvZHkgR3VzdGFldVxcJ3MgbW90dG8gJylcbiAgICBoaWdobGlnaHRUZXh0KCdBbnlib2R5IGNhbiBDb29rJylcbiAgICBob21lVGV4dCgnU28gd2hhdCBhcmUgeW91IHdhaXRpbmcgZm9yPyBCb29rIGEgdGFibGUgYXQgUmF0YXRvdWlsbGUgYnkgY2xpY2tpbmcgdGhlIGJ1dHRvbiBiZWxvdy4nKVxuICAgIGJvb2tCdXR0b24obWFpbkNvbnRlbnQpXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=