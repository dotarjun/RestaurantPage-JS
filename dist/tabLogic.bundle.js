(self["webpackChunkrestaurantpage_js"] = self["webpackChunkrestaurantpage_js"] || []).push([["tabLogic"],{

/***/ "./src/about-us-content.js":
/*!*********************************!*\
  !*** ./src/about-us-content.js ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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


/***/ }),

/***/ "./src/menu-content.js":
/*!*****************************!*\
  !*** ./src/menu-content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMenuContent": () => (/* binding */ addMenuContent)
/* harmony export */ });
/* harmony import */ var _assets_images_recipes_ratatouille_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/recipes/ratatouille.jpg */ "./src/assets/images/recipes/ratatouille.jpg");
/* harmony import */ var _assets_images_recipes_special_soup_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/recipes/special-soup.jpg */ "./src/assets/images/recipes/special-soup.jpg");
/* harmony import */ var _assets_images_recipes_egg_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/recipes/egg.jpeg */ "./src/assets/images/recipes/egg.jpeg");
/* harmony import */ var _assets_images_recipes_garbage_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/recipes/garbage.jpg */ "./src/assets/images/recipes/garbage.jpg");
/* harmony import */ var _assets_images_recipes_cheese_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/recipes/cheese.jpg */ "./src/assets/images/recipes/cheese.jpg");
/* harmony import */ var _assets_images_recipes_strawberry_cheese_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/recipes/strawberry-cheese.jpg */ "./src/assets/images/recipes/strawberry-cheese.jpg");
/* harmony import */ var _assets_images_recipes_lightningy_food_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/recipes/lightningy-food.png */ "./src/assets/images/recipes/lightningy-food.png");
/* harmony import */ var _assets_images_recipes_carrot_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/recipes/carrot.jpg */ "./src/assets/images/recipes/carrot.jpg");









const menuContent = document.getElementById('menu-content')
const mainContent = document.createElement('main');


function addMenuContent() {
    const createCard = (obj) => {
        let card = document.createElement('div')
        card.classList.add('card')

        let cardContentWrap = document.createElement('div')
        cardContentWrap.classList.add('cardContentWrap')

        const foodImage = document.createElement('img')
        foodImage.src = obj.url;
        cardContentWrap.appendChild(foodImage)

        const foodHeading = document.createElement('h3')
        foodHeading.textContent = obj.txt
        cardContentWrap.appendChild(foodHeading)

        const foodDescription = document.createElement('p')
        foodDescription.textContent = obj.desc
        cardContentWrap.appendChild(foodDescription)

        card.appendChild(cardContentWrap)
        mainContent.appendChild(card)
        menuContent.appendChild(mainContent)
    }
    createCard({ url: _assets_images_recipes_ratatouille_jpg__WEBPACK_IMPORTED_MODULE_0__, txt: 'Ratatouille', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })
    createCard({ url: _assets_images_recipes_special_soup_jpg__WEBPACK_IMPORTED_MODULE_1__, txt: 'Special Soup', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })
    createCard({ url: _assets_images_recipes_egg_jpeg__WEBPACK_IMPORTED_MODULE_2__, txt: 'Egg', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })
    createCard({ url: _assets_images_recipes_garbage_jpg__WEBPACK_IMPORTED_MODULE_3__, txt: 'Garbage', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })
    createCard({ url: _assets_images_recipes_cheese_jpg__WEBPACK_IMPORTED_MODULE_4__, txt: 'Cheese', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })
    createCard({ url: _assets_images_recipes_strawberry_cheese_jpg__WEBPACK_IMPORTED_MODULE_5__, txt: 'Strawberry Cheese', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })
    createCard({ url: _assets_images_recipes_lightningy_food_png__WEBPACK_IMPORTED_MODULE_6__, txt: 'Lightningy', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })
    createCard({ url: _assets_images_recipes_carrot_jpg__WEBPACK_IMPORTED_MODULE_7__, txt: 'Boiled Carrot', desc: 'BRUHHHHHHn lorem ipsum nfjdsnsijn ij dnqwij dij wqn i oiun yes bruh LOrem ipsum' })
}


/***/ }),

/***/ "./src/tab-logic.js":
/*!**************************!*\
  !*** ./src/tab-logic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-content.js */ "./src/home-content.js");
/* harmony import */ var _menu_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-content.js */ "./src/menu-content.js");
/* harmony import */ var _about_us_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us-content.js */ "./src/about-us-content.js");
/* harmony import */ var _about_us_content_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_about_us_content_js__WEBPACK_IMPORTED_MODULE_2__);
const siteContent = document.getElementById('site-content')
const homeContent = document.getElementById('home-content')
const menuContent = document.getElementById('menu-content')
const aboutUsContent = document.getElementById('about-us-content')
const mainContent = document.getElementsByTagName('main');



(0,_home_content_js__WEBPACK_IMPORTED_MODULE_0__.addHomeContent)()
;
(0,_menu_content_js__WEBPACK_IMPORTED_MODULE_1__.addMenuContent)()
;
// addAboutUsContent()

const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')
const aboutUsButton = document.getElementById('about-us')



let currentChild = homeContent

function tabSwitch(btn) {
    btn.addEventListener('click', () => {
        const currentButton = btn
        if (currentButton == homeButton) {
            if (currentChild !== homeContent) {
                (0,_home_content_js__WEBPACK_IMPORTED_MODULE_0__.addHomeContent)();
                siteContent.appendChild(currentChild)
                currentChild = homeContent
            }
        }
        if (currentButton == menuButton) {
            currentChild.style.display = 'none'
            currentChild = menuContent
            currentChild.style.display = 'initial'
            siteContent.appendChild(currentChild)
        }
    })
}



tabSwitch(homeButton)
tabSwitch(menuButton)
tabSwitch(aboutUsButton)

/***/ }),

/***/ "./src/assets/images/recipes/carrot.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/recipes/carrot.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "85eef6f3fdfae7648f90.jpg";

/***/ }),

/***/ "./src/assets/images/recipes/cheese.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/recipes/cheese.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2e33d3cfcd6563a9e2fd.jpg";

/***/ }),

/***/ "./src/assets/images/recipes/egg.jpeg":
/*!********************************************!*\
  !*** ./src/assets/images/recipes/egg.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3c0569bd4503cac9ae74.jpeg";

/***/ }),

/***/ "./src/assets/images/recipes/garbage.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/recipes/garbage.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "aa9d9f4bb59b1d916d4b.jpg";

/***/ }),

/***/ "./src/assets/images/recipes/lightningy-food.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/recipes/lightningy-food.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b3ae6e9d6677d64b063c.png";

/***/ }),

/***/ "./src/assets/images/recipes/ratatouille.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/recipes/ratatouille.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2c9250c15925f4ec709b.jpg";

/***/ }),

/***/ "./src/assets/images/recipes/special-soup.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/recipes/special-soup.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "88451276d4366a3bba15.jpg";

/***/ }),

/***/ "./src/assets/images/recipes/strawberry-cheese.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/images/recipes/strawberry-cheese.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a538edcebe69b87a704f.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/tab-logic.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiTG9naWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVU7QUFDZDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q2tFO0FBQ047QUFDVjtBQUNPO0FBQ0Y7QUFDcUI7QUFDUjtBQUNiOztBQUV2RDtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEtBQUssbUVBQVcsK0dBQStHO0FBQ2hKLGlCQUFpQixLQUFLLG9FQUFJLGdIQUFnSDtBQUMxSSxpQkFBaUIsS0FBSyw0REFBRyx1R0FBdUc7QUFDaEksaUJBQWlCLEtBQUssK0RBQU8sMkdBQTJHO0FBQ3hJLGlCQUFpQixLQUFLLDhEQUFNLDBHQUEwRztBQUN0SSxpQkFBaUIsS0FBSyx5RUFBZ0IscUhBQXFIO0FBQzNKLGlCQUFpQixLQUFLLHVFQUFVLDhHQUE4RztBQUM5SSxpQkFBaUIsS0FBSyw4REFBTSxpSEFBaUg7QUFDN0k7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdrRDtBQUNsRCxnRUFBYztBQUNkLENBQWtEO0FBQ2xELGdFQUFjO0FBQ2QsQ0FBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnRUFBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7OztBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLWpzLy4vc3JjL2Fib3V0LXVzLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtanMvLi9zcmMvYnV0dG9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLWpzLy4vc3JjL2hvbWUtY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS1qcy8uL3NyYy9tZW51LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtanMvLi9zcmMvdGFiLWxvZ2ljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvb2tCdXR0b24ocGFyZW50KSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2Jvb2stYnRuJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gJ0Jvb2sgYSBUYWJsZSdcbiAgICAvLyBidG4uc2V0QXR0cmlidXRlKFwib25jbGlja1wiLCBcImxvY2F0aW9uLmhyZWY9Jy9ib29rJ1wiKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChidG4pXG59XG5cblxuIiwiaW1wb3J0IGJvb2tCdXR0b24gZnJvbSBcIi4vYnV0dG9uLmpzXCI7XG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1jb250ZW50Jylcbi8vIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG5mdW5jdGlvbiBob21lVGV4dCh0ZXh0KSB7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChwYXJhKVxufVxuXG5mdW5jdGlvbiBoaWdobGlnaHRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBoaWdobGlnaHRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaGlnaGxpZ2h0TGluZS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQtbGluZScpO1xuICAgIGhpZ2hsaWdodExpbmUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGhpZ2hsaWdodExpbmUpXG59XG5cbmZ1bmN0aW9uIGFkZERpc2NsYWltZXIocGFyZW50KSB7XG4gICAgY29uc3QgZGlzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRpc2MuY2xhc3NMaXN0LmFkZCgnZGlzY2xhaW1lcicpXG4gICAgZGlzYy5pbm5lckhUTUwgPSBcIkJ5IGJvb2tpbmcgeW91IGFkaGVyZSB0byBvdXIgPGEgaHJlZj1cXFwiI1xcXCI+VGVybXMgYW5kIENvbmRpdGlvbnM8L2E+IGFuZCBvdXIgPGEgaHJlZj1cXFwiI1xcXCI+aHlnaWVuZSBwb2xpY3k8L2E+XCJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGlzYylcbn1cblxuZnVuY3Rpb24gYWRkQ292ZXIobXNnKSB7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gbXNnO1xuICAgIGgxLmNsYXNzTGlzdC5hZGQoJ2ltZy10ZXh0JylcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChoMSk7XG5cbiAgICBjb25zdCB0b3BJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0b3BJbWcuY2xhc3NMaXN0LmFkZCgndG9wLWltZycpO1xuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKHRvcEltZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRIb21lQ29udGVudCgpIHtcbiAgICBhZGRDb3ZlcigpXG4gICAgaG9tZVRleHQoJ1JlbXkgKG91ciBsZWFkIGNoZWYpIGRyZWFtdCBvZiBiZWNvbWluZyBhIGdyZWF0IGNoZWYsIGRlc3BpdGUgYmVpbmcgYSByYXQgaW4gYSByb2RlbnQtcGhvYmljIHByb2Zlc3Npb24uIExpZmUgbGVkIGhpbSB0byBQYXJpcyB0byBmb2xsb3cgaGlzIGRyZWFtLCBhbmQgd2l0aCB0aGUgaGVscCBvZiBoYXBsZXNzIGdhcmJhZ2UgYm95IExpbmd1aW5pIGhlIHB1dCBoaXMgY3VsaW5hcnkgc2tpbGxzIHRvIHRoZSB0ZXN0IGluIHRoZSBraXRjaGVuIGJ1dCBoZSBoYXMgdG8gc3RheSBpbiBoaWRpbmcgYXQgdGhlIHNhbWUgdGltZSwgd2l0aCBoaWxhcmlvdXMgY29uc2VxdWVuY2VzLiBSZW15IGV2ZW50dWFsbHkgZ290IHRoZSBjaGFuY2UgdG8gcHJvdmUgaGlzIGN1bGluYXJ5IGFiaWxpdGllcyB0byBUSEUgQW50b24gRWdvLCB0aGUgZ3JlYXQgZm9vZCBjcml0aWMuIFdpdGggYSBzdXJwcmlzaW5nbHkgcG9zaXRpdmUgcmV2aWV3LCB3ZSAoZm9ybWVybHkga25vd24gYXMgR3VzdGVhdVxcJ3MpIHdlcmUgYWJsZSB0byByaXNlIGJhY2sgdG8gb3VyIG9sZCBmYW1lIGFuZCByZXdyaXRlIGhpc3RvcnkgaW4gRnJlbmNoIEN1aXNpbmUuJylcbiAgICBob21lVGV4dCgnQnV0IHRoYXQgd291bGQgY2hhbmdlIHNvb24uLi4nKVxuICAgIGhvbWVUZXh0KCdGb2xsb3dpbmcgRWdvXFwncyByZXZpZXcsIHdlIHdlcmUgfnJhdHRlZH4gb3V0LiBUaHVzIEd1c3RhZXVcXCdzIHdhcyBzaHV0IGRvd24gZHVlIHRvIHVuZGlzY2xvc2FibGUgcmVhc29ucy4gQnV0IGZlYXIgbm90LCBHdXN0YWV1XFwncyBzcGlyaXQgc3RpbGwgbGl2ZXMgb24gd2l0aCBvdXIgdG9wIG9mIHRoZSBub3RjaCBjaGVmcy4gV2l0aCBhIGhpZ2hseSBkaXZlcnNlIHN0YWZmIGFuZCBhbiBpbmNsdXNvbmFyeSBraXRjaGVuIG9wZW4gZm9yIGluZGl2aWR1YWxzIHdobyBsb3ZlIGNvb2tpbmcsIHdlIGhhdmUgYmVlbiByYXRlZCBQYXJpc1xcJ3MgYmVzdCBwbGFjZSB0byBlYXQgKGFuZCBjb29rKSBhdC4gQXQgUmF0YXRvdWlsbGUgd2UgZW1ib2R5IEd1c3RhZXVcXCdzIG1vdHRvICcpXG4gICAgaGlnaGxpZ2h0VGV4dCgnQW55Ym9keSBjYW4gQ29vaycpXG4gICAgaG9tZVRleHQoJ1NvIHdoYXQgYXJlIHlvdSB3YWl0aW5nIGZvcj8gQm9vayBhIHRhYmxlIGF0IFJhdGF0b3VpbGxlIGJ5IGNsaWNraW5nIHRoZSBidXR0b24gYmVsb3cuJylcbiAgICBib29rQnV0dG9uKG1haW5Db250ZW50KVxuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50KVxufVxuIiwiaW1wb3J0IHJhdGF0b3VpbGxlIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvcmVjaXBlcy9yYXRhdG91aWxsZS5qcGdcIjtcbmltcG9ydCBzb3VwIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvcmVjaXBlcy9zcGVjaWFsLXNvdXAuanBnXCI7XG5pbXBvcnQgZWdnIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvcmVjaXBlcy9lZ2cuanBlZ1wiXG5pbXBvcnQgZ2FyYmFnZSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JlY2lwZXMvZ2FyYmFnZS5qcGdcIlxuaW1wb3J0IGNoZWVzZSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JlY2lwZXMvY2hlZXNlLmpwZ1wiXG5pbXBvcnQgc3RyYXdiZXJyeUNoZWVzZSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JlY2lwZXMvc3RyYXdiZXJyeS1jaGVlc2UuanBnXCJcbmltcG9ydCBsaWdodG5pbmd5IGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvcmVjaXBlcy9saWdodG5pbmd5LWZvb2QucG5nXCJcbmltcG9ydCBjYXJyb3QgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9yZWNpcGVzL2NhcnJvdC5qcGdcIlxuXG5jb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWNvbnRlbnQnKVxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1lbnVDb250ZW50KCkge1xuICAgIGNvbnN0IGNyZWF0ZUNhcmQgPSAob2JqKSA9PiB7XG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcblxuICAgICAgICBsZXQgY2FyZENvbnRlbnRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2FyZENvbnRlbnRXcmFwLmNsYXNzTGlzdC5hZGQoJ2NhcmRDb250ZW50V3JhcCcpXG5cbiAgICAgICAgY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgZm9vZEltYWdlLnNyYyA9IG9iai51cmw7XG4gICAgICAgIGNhcmRDb250ZW50V3JhcC5hcHBlbmRDaGlsZChmb29kSW1hZ2UpXG5cbiAgICAgICAgY29uc3QgZm9vZEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgICAgIGZvb2RIZWFkaW5nLnRleHRDb250ZW50ID0gb2JqLnR4dFxuICAgICAgICBjYXJkQ29udGVudFdyYXAuYXBwZW5kQ2hpbGQoZm9vZEhlYWRpbmcpXG5cbiAgICAgICAgY29uc3QgZm9vZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGZvb2REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG9iai5kZXNjXG4gICAgICAgIGNhcmRDb250ZW50V3JhcC5hcHBlbmRDaGlsZChmb29kRGVzY3JpcHRpb24pXG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ29udGVudFdyYXApXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50KVxuICAgIH1cbiAgICBjcmVhdGVDYXJkKHsgdXJsOiByYXRhdG91aWxsZSwgdHh0OiAnUmF0YXRvdWlsbGUnLCBkZXNjOiAnQlJVSEhISEhIbiBsb3JlbSBpcHN1bSBuZmpkc25zaWpuIGlqIGRucXdpaiBkaWogd3FuIGkgb2l1biB5ZXMgYnJ1aCBMT3JlbSBpcHN1bScgfSlcbiAgICBjcmVhdGVDYXJkKHsgdXJsOiBzb3VwLCB0eHQ6ICdTcGVjaWFsIFNvdXAnLCBkZXNjOiAnQlJVSEhISEhIbiBsb3JlbSBpcHN1bSBuZmpkc25zaWpuIGlqIGRucXdpaiBkaWogd3FuIGkgb2l1biB5ZXMgYnJ1aCBMT3JlbSBpcHN1bScgfSlcbiAgICBjcmVhdGVDYXJkKHsgdXJsOiBlZ2csIHR4dDogJ0VnZycsIGRlc2M6ICdCUlVISEhISEhuIGxvcmVtIGlwc3VtIG5mamRzbnNpam4gaWogZG5xd2lqIGRpaiB3cW4gaSBvaXVuIHllcyBicnVoIExPcmVtIGlwc3VtJyB9KVxuICAgIGNyZWF0ZUNhcmQoeyB1cmw6IGdhcmJhZ2UsIHR4dDogJ0dhcmJhZ2UnLCBkZXNjOiAnQlJVSEhISEhIbiBsb3JlbSBpcHN1bSBuZmpkc25zaWpuIGlqIGRucXdpaiBkaWogd3FuIGkgb2l1biB5ZXMgYnJ1aCBMT3JlbSBpcHN1bScgfSlcbiAgICBjcmVhdGVDYXJkKHsgdXJsOiBjaGVlc2UsIHR4dDogJ0NoZWVzZScsIGRlc2M6ICdCUlVISEhISEhuIGxvcmVtIGlwc3VtIG5mamRzbnNpam4gaWogZG5xd2lqIGRpaiB3cW4gaSBvaXVuIHllcyBicnVoIExPcmVtIGlwc3VtJyB9KVxuICAgIGNyZWF0ZUNhcmQoeyB1cmw6IHN0cmF3YmVycnlDaGVlc2UsIHR4dDogJ1N0cmF3YmVycnkgQ2hlZXNlJywgZGVzYzogJ0JSVUhISEhISG4gbG9yZW0gaXBzdW0gbmZqZHNuc2lqbiBpaiBkbnF3aWogZGlqIHdxbiBpIG9pdW4geWVzIGJydWggTE9yZW0gaXBzdW0nIH0pXG4gICAgY3JlYXRlQ2FyZCh7IHVybDogbGlnaHRuaW5neSwgdHh0OiAnTGlnaHRuaW5neScsIGRlc2M6ICdCUlVISEhISEhuIGxvcmVtIGlwc3VtIG5mamRzbnNpam4gaWogZG5xd2lqIGRpaiB3cW4gaSBvaXVuIHllcyBicnVoIExPcmVtIGlwc3VtJyB9KVxuICAgIGNyZWF0ZUNhcmQoeyB1cmw6IGNhcnJvdCwgdHh0OiAnQm9pbGVkIENhcnJvdCcsIGRlc2M6ICdCUlVISEhISEhuIGxvcmVtIGlwc3VtIG5mamRzbnNpam4gaWogZG5xd2lqIGRpaiB3cW4gaSBvaXVuIHllcyBicnVoIExPcmVtIGlwc3VtJyB9KVxufVxuIiwiY29uc3Qgc2l0ZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS1jb250ZW50JylcbmNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtY29udGVudCcpXG5jb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWNvbnRlbnQnKVxuY29uc3QgYWJvdXRVc0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQtdXMtY29udGVudCcpXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJyk7XG5cblxuaW1wb3J0IHsgYWRkSG9tZUNvbnRlbnQgfSBmcm9tIFwiLi9ob21lLWNvbnRlbnQuanNcIlxuYWRkSG9tZUNvbnRlbnQoKVxuaW1wb3J0IHsgYWRkTWVudUNvbnRlbnQgfSBmcm9tIFwiLi9tZW51LWNvbnRlbnQuanNcIlxuYWRkTWVudUNvbnRlbnQoKVxuaW1wb3J0IHsgYWRkQWJvdXRVc0NvbnRlbnQgfSBmcm9tIFwiLi9hYm91dC11cy1jb250ZW50LmpzXCJcbi8vIGFkZEFib3V0VXNDb250ZW50KClcblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXG5jb25zdCBhYm91dFVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0LXVzJylcblxuXG5cbmxldCBjdXJyZW50Q2hpbGQgPSBob21lQ29udGVudFxuXG5mdW5jdGlvbiB0YWJTd2l0Y2goYnRuKSB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gYnRuXG4gICAgICAgIGlmIChjdXJyZW50QnV0dG9uID09IGhvbWVCdXR0b24pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q2hpbGQgIT09IGhvbWVDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgYWRkSG9tZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICBzaXRlQ29udGVudC5hcHBlbmRDaGlsZChjdXJyZW50Q2hpbGQpXG4gICAgICAgICAgICAgICAgY3VycmVudENoaWxkID0gaG9tZUNvbnRlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEJ1dHRvbiA9PSBtZW51QnV0dG9uKSB7XG4gICAgICAgICAgICBjdXJyZW50Q2hpbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgY3VycmVudENoaWxkID0gbWVudUNvbnRlbnRcbiAgICAgICAgICAgIGN1cnJlbnRDaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnXG4gICAgICAgICAgICBzaXRlQ29udGVudC5hcHBlbmRDaGlsZChjdXJyZW50Q2hpbGQpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5cblxudGFiU3dpdGNoKGhvbWVCdXR0b24pXG50YWJTd2l0Y2gobWVudUJ1dHRvbilcbnRhYlN3aXRjaChhYm91dFVzQnV0dG9uKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==