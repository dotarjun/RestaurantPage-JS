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
    createCard({ url: _assets_images_recipes_ratatouille_jpg__WEBPACK_IMPORTED_MODULE_0__, txt: 'Ratatouille', desc: 'An Exquisite dish of stewed vegetables loved by the infamous critique Anton Ego. Includes tomato, garlic, onion, courgette, aubergine, capsicum, and leafy green herbs. Garnished with Ratatouille Sauce. ' })
    createCard({ url: _assets_images_recipes_special_soup_jpg__WEBPACK_IMPORTED_MODULE_1__, txt: 'Special Soup', desc: 'An improvised version of the conventional cream soup altered by Chef Linguini and Chef Remy. Includes Tomato, Cream Cheese, Oregano, Water and other vegetables. ' })
    createCard({ url: _assets_images_recipes_egg_jpeg__WEBPACK_IMPORTED_MODULE_2__, txt: 'Omelette', desc: 'The French omelette with soft texture. Filled with grated cheese, ham, fresh herbs, mushrooms and smoked salmon. Custom toppings to be specified on order. Additional Charges applicable.' })
    createCard({ url: _assets_images_recipes_garbage_jpg__WEBPACK_IMPORTED_MODULE_3__, txt: 'Garbage', desc: 'A cheap Rat classic dish. The go to meal if you are on a budget or happen to be a rat.' })
    createCard({ url: _assets_images_recipes_cheese_jpg__WEBPACK_IMPORTED_MODULE_4__, txt: 'Cheese', desc: 'Cheese. Yes. It\'s just cheese. PLain raw cheese which is just overpriced. An exquisite representation of simplicity by our extremeley talented Chef Collete who believes in Minimalist living thus a minimalist dish fir our most cultured customers. Rat favourite.' })
    createCard({ url: _assets_images_recipes_strawberry_cheese_jpg__WEBPACK_IMPORTED_MODULE_5__, txt: 'Strawberry Cheese', desc: 'If you were surprised with how innovative we are at Ratatouille\'s then this one would surprise you. Adding onto Chef Collete\'s minimalist lifestyle, Chef Remy decided to give it a personal spin by adding a strawbeery. Very clever right? Indeed. All thanks to our highly sophisticated chefs.' })
    createCard({ url: _assets_images_recipes_lightningy_food_png__WEBPACK_IMPORTED_MODULE_6__, txt: 'Lightningy', desc: 'Lighning cooked something lorem ipsum lorem ipsum blah blah blah blah. Some text some more text ' })
    createCard({ url: _assets_images_recipes_carrot_jpg__WEBPACK_IMPORTED_MODULE_7__, txt: 'Boiled Carrot', desc: 'Basically a boiled carrot but over priced. Pls buy you would totally regret it. HAHAHAHAHAHAHAHHA . I dont know what to write here so this is just some filled text. So is this senetence. Maybe another filler senetence would do. Yeah that\'s about it.' })
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

        currentChild.style.display = 'none'

        switch (btn) {
            case homeButton:
                currentChild = homeContent
                break;
            case menuButton:
                currentChild = menuContent
                break;
            case aboutUsButton:
                currentChild = aboutUsContent
                break;
            default:
                homeButton
                break;
        }
        currentChild.style.display = 'initial'
    })
}



tabSwitch(menuButton)
tabSwitch(homeButton)
// tabSwitch(aboutUsButton)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiTG9naWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVU7QUFDZDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q2tFO0FBQ047QUFDVjtBQUNPO0FBQ0Y7QUFDcUI7QUFDUjtBQUNiOztBQUV2RDtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEtBQUssbUVBQVcsME9BQTBPO0FBQzNRLGlCQUFpQixLQUFLLG9FQUFJLGtNQUFrTTtBQUM1TixpQkFBaUIsS0FBSyw0REFBRyxzTkFBc047QUFDL08saUJBQWlCLEtBQUssK0RBQU8sa0hBQWtIO0FBQy9JLGlCQUFpQixLQUFLLDhEQUFNLGdTQUFnUztBQUM1VCxpQkFBaUIsS0FBSyx5RUFBZ0IsMFVBQTBVO0FBQ2hYLGlCQUFpQixLQUFLLHVFQUFVLCtIQUErSDtBQUMvSixpQkFBaUIsS0FBSyw4REFBTSw0UkFBNFI7QUFDeFQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdrRDtBQUNsRCxnRUFBYztBQUNkLENBQWtEO0FBQ2xELGdFQUFjO0FBQ2QsQ0FBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS1qcy8uL3NyYy9hYm91dC11cy1jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLWpzLy4vc3JjL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS1qcy8uL3NyYy9ob21lLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtanMvLi9zcmMvbWVudS1jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLWpzLy4vc3JjL3RhYi1sb2dpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib29rQnV0dG9uKHBhcmVudCkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdib29rLWJ0bicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdCb29rIGEgVGFibGUnXG4gICAgLy8gYnRuLnNldEF0dHJpYnV0ZShcIm9uY2xpY2tcIiwgXCJsb2NhdGlvbi5ocmVmPScvYm9vaydcIilcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYnRuKVxufVxuXG5cbiIsImltcG9ydCBib29rQnV0dG9uIGZyb20gXCIuL2J1dHRvbi5qc1wiO1xuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbmNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtY29udGVudCcpXG4vLyBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuZnVuY3Rpb24gaG9tZVRleHQodGV4dCkge1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYSlcbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3QgaGlnaGxpZ2h0TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGhpZ2hsaWdodExpbmUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0LWxpbmUnKTtcbiAgICBoaWdobGlnaHRMaW5lLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChoaWdobGlnaHRMaW5lKVxufVxuXG5mdW5jdGlvbiBhZGREaXNjbGFpbWVyKHBhcmVudCkge1xuICAgIGNvbnN0IGRpc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkaXNjLmNsYXNzTGlzdC5hZGQoJ2Rpc2NsYWltZXInKVxuICAgIGRpc2MuaW5uZXJIVE1MID0gXCJCeSBib29raW5nIHlvdSBhZGhlcmUgdG8gb3VyIDxhIGhyZWY9XFxcIiNcXFwiPlRlcm1zIGFuZCBDb25kaXRpb25zPC9hPiBhbmQgb3VyIDxhIGhyZWY9XFxcIiNcXFwiPmh5Z2llbmUgcG9saWN5PC9hPlwiXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGRpc2MpXG59XG5cbmZ1bmN0aW9uIGFkZENvdmVyKG1zZykge1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IG1zZztcbiAgICBoMS5jbGFzc0xpc3QuYWRkKCdpbWctdGV4dCcpXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgY29uc3QgdG9wSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdG9wSW1nLmNsYXNzTGlzdC5hZGQoJ3RvcC1pbWcnKTtcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZCh0b3BJbWcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSG9tZUNvbnRlbnQoKSB7XG4gICAgYWRkQ292ZXIoKVxuICAgIGhvbWVUZXh0KCdSZW15IChvdXIgbGVhZCBjaGVmKSBkcmVhbXQgb2YgYmVjb21pbmcgYSBncmVhdCBjaGVmLCBkZXNwaXRlIGJlaW5nIGEgcmF0IGluIGEgcm9kZW50LXBob2JpYyBwcm9mZXNzaW9uLiBMaWZlIGxlZCBoaW0gdG8gUGFyaXMgdG8gZm9sbG93IGhpcyBkcmVhbSwgYW5kIHdpdGggdGhlIGhlbHAgb2YgaGFwbGVzcyBnYXJiYWdlIGJveSBMaW5ndWluaSBoZSBwdXQgaGlzIGN1bGluYXJ5IHNraWxscyB0byB0aGUgdGVzdCBpbiB0aGUga2l0Y2hlbiBidXQgaGUgaGFzIHRvIHN0YXkgaW4gaGlkaW5nIGF0IHRoZSBzYW1lIHRpbWUsIHdpdGggaGlsYXJpb3VzIGNvbnNlcXVlbmNlcy4gUmVteSBldmVudHVhbGx5IGdvdCB0aGUgY2hhbmNlIHRvIHByb3ZlIGhpcyBjdWxpbmFyeSBhYmlsaXRpZXMgdG8gVEhFIEFudG9uIEVnbywgdGhlIGdyZWF0IGZvb2QgY3JpdGljLiBXaXRoIGEgc3VycHJpc2luZ2x5IHBvc2l0aXZlIHJldmlldywgd2UgKGZvcm1lcmx5IGtub3duIGFzIEd1c3RlYXVcXCdzKSB3ZXJlIGFibGUgdG8gcmlzZSBiYWNrIHRvIG91ciBvbGQgZmFtZSBhbmQgcmV3cml0ZSBoaXN0b3J5IGluIEZyZW5jaCBDdWlzaW5lLicpXG4gICAgaG9tZVRleHQoJ0J1dCB0aGF0IHdvdWxkIGNoYW5nZSBzb29uLi4uJylcbiAgICBob21lVGV4dCgnRm9sbG93aW5nIEVnb1xcJ3MgcmV2aWV3LCB3ZSB3ZXJlIH5yYXR0ZWR+IG91dC4gVGh1cyBHdXN0YWV1XFwncyB3YXMgc2h1dCBkb3duIGR1ZSB0byB1bmRpc2Nsb3NhYmxlIHJlYXNvbnMuIEJ1dCBmZWFyIG5vdCwgR3VzdGFldVxcJ3Mgc3Bpcml0IHN0aWxsIGxpdmVzIG9uIHdpdGggb3VyIHRvcCBvZiB0aGUgbm90Y2ggY2hlZnMuIFdpdGggYSBoaWdobHkgZGl2ZXJzZSBzdGFmZiBhbmQgYW4gaW5jbHVzb25hcnkga2l0Y2hlbiBvcGVuIGZvciBpbmRpdmlkdWFscyB3aG8gbG92ZSBjb29raW5nLCB3ZSBoYXZlIGJlZW4gcmF0ZWQgUGFyaXNcXCdzIGJlc3QgcGxhY2UgdG8gZWF0IChhbmQgY29vaykgYXQuIEF0IFJhdGF0b3VpbGxlIHdlIGVtYm9keSBHdXN0YWV1XFwncyBtb3R0byAnKVxuICAgIGhpZ2hsaWdodFRleHQoJ0FueWJvZHkgY2FuIENvb2snKVxuICAgIGhvbWVUZXh0KCdTbyB3aGF0IGFyZSB5b3Ugd2FpdGluZyBmb3I/IEJvb2sgYSB0YWJsZSBhdCBSYXRhdG91aWxsZSBieSBjbGlja2luZyB0aGUgYnV0dG9uIGJlbG93LicpXG4gICAgYm9va0J1dHRvbihtYWluQ29udGVudClcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudClcbn1cbiIsImltcG9ydCByYXRhdG91aWxsZSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JlY2lwZXMvcmF0YXRvdWlsbGUuanBnXCI7XG5pbXBvcnQgc291cCBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JlY2lwZXMvc3BlY2lhbC1zb3VwLmpwZ1wiO1xuaW1wb3J0IGVnZyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JlY2lwZXMvZWdnLmpwZWdcIlxuaW1wb3J0IGdhcmJhZ2UgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9yZWNpcGVzL2dhcmJhZ2UuanBnXCJcbmltcG9ydCBjaGVlc2UgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9yZWNpcGVzL2NoZWVzZS5qcGdcIlxuaW1wb3J0IHN0cmF3YmVycnlDaGVlc2UgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9yZWNpcGVzL3N0cmF3YmVycnktY2hlZXNlLmpwZ1wiXG5pbXBvcnQgbGlnaHRuaW5neSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JlY2lwZXMvbGlnaHRuaW5neS1mb29kLnBuZ1wiXG5pbXBvcnQgY2Fycm90IGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvcmVjaXBlcy9jYXJyb3QuanBnXCJcblxuY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1jb250ZW50JylcbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRNZW51Q29udGVudCgpIHtcbiAgICBjb25zdCBjcmVhdGVDYXJkID0gKG9iaikgPT4ge1xuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG5cbiAgICAgICAgbGV0IGNhcmRDb250ZW50V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNhcmRDb250ZW50V3JhcC5jbGFzc0xpc3QuYWRkKCdjYXJkQ29udGVudFdyYXAnKVxuXG4gICAgICAgIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGZvb2RJbWFnZS5zcmMgPSBvYmoudXJsO1xuICAgICAgICBjYXJkQ29udGVudFdyYXAuYXBwZW5kQ2hpbGQoZm9vZEltYWdlKVxuXG4gICAgICAgIGNvbnN0IGZvb2RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgICAgICBmb29kSGVhZGluZy50ZXh0Q29udGVudCA9IG9iai50eHRcbiAgICAgICAgY2FyZENvbnRlbnRXcmFwLmFwcGVuZENoaWxkKGZvb2RIZWFkaW5nKVxuXG4gICAgICAgIGNvbnN0IGZvb2REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBmb29kRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmouZGVzY1xuICAgICAgICBjYXJkQ29udGVudFdyYXAuYXBwZW5kQ2hpbGQoZm9vZERlc2NyaXB0aW9uKVxuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnRXcmFwKVxuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudClcbiAgICB9XG4gICAgY3JlYXRlQ2FyZCh7IHVybDogcmF0YXRvdWlsbGUsIHR4dDogJ1JhdGF0b3VpbGxlJywgZGVzYzogJ0FuIEV4cXVpc2l0ZSBkaXNoIG9mIHN0ZXdlZCB2ZWdldGFibGVzIGxvdmVkIGJ5IHRoZSBpbmZhbW91cyBjcml0aXF1ZSBBbnRvbiBFZ28uIEluY2x1ZGVzIHRvbWF0bywgZ2FybGljLCBvbmlvbiwgY291cmdldHRlLCBhdWJlcmdpbmUsIGNhcHNpY3VtLCBhbmQgbGVhZnkgZ3JlZW4gaGVyYnMuIEdhcm5pc2hlZCB3aXRoIFJhdGF0b3VpbGxlIFNhdWNlLiAnIH0pXG4gICAgY3JlYXRlQ2FyZCh7IHVybDogc291cCwgdHh0OiAnU3BlY2lhbCBTb3VwJywgZGVzYzogJ0FuIGltcHJvdmlzZWQgdmVyc2lvbiBvZiB0aGUgY29udmVudGlvbmFsIGNyZWFtIHNvdXAgYWx0ZXJlZCBieSBDaGVmIExpbmd1aW5pIGFuZCBDaGVmIFJlbXkuIEluY2x1ZGVzIFRvbWF0bywgQ3JlYW0gQ2hlZXNlLCBPcmVnYW5vLCBXYXRlciBhbmQgb3RoZXIgdmVnZXRhYmxlcy4gJyB9KVxuICAgIGNyZWF0ZUNhcmQoeyB1cmw6IGVnZywgdHh0OiAnT21lbGV0dGUnLCBkZXNjOiAnVGhlIEZyZW5jaCBvbWVsZXR0ZSB3aXRoIHNvZnQgdGV4dHVyZS4gRmlsbGVkIHdpdGggZ3JhdGVkIGNoZWVzZSwgaGFtLCBmcmVzaCBoZXJicywgbXVzaHJvb21zIGFuZCBzbW9rZWQgc2FsbW9uLiBDdXN0b20gdG9wcGluZ3MgdG8gYmUgc3BlY2lmaWVkIG9uIG9yZGVyLiBBZGRpdGlvbmFsIENoYXJnZXMgYXBwbGljYWJsZS4nIH0pXG4gICAgY3JlYXRlQ2FyZCh7IHVybDogZ2FyYmFnZSwgdHh0OiAnR2FyYmFnZScsIGRlc2M6ICdBIGNoZWFwIFJhdCBjbGFzc2ljIGRpc2guIFRoZSBnbyB0byBtZWFsIGlmIHlvdSBhcmUgb24gYSBidWRnZXQgb3IgaGFwcGVuIHRvIGJlIGEgcmF0LicgfSlcbiAgICBjcmVhdGVDYXJkKHsgdXJsOiBjaGVlc2UsIHR4dDogJ0NoZWVzZScsIGRlc2M6ICdDaGVlc2UuIFllcy4gSXRcXCdzIGp1c3QgY2hlZXNlLiBQTGFpbiByYXcgY2hlZXNlIHdoaWNoIGlzIGp1c3Qgb3ZlcnByaWNlZC4gQW4gZXhxdWlzaXRlIHJlcHJlc2VudGF0aW9uIG9mIHNpbXBsaWNpdHkgYnkgb3VyIGV4dHJlbWVsZXkgdGFsZW50ZWQgQ2hlZiBDb2xsZXRlIHdobyBiZWxpZXZlcyBpbiBNaW5pbWFsaXN0IGxpdmluZyB0aHVzIGEgbWluaW1hbGlzdCBkaXNoIGZpciBvdXIgbW9zdCBjdWx0dXJlZCBjdXN0b21lcnMuIFJhdCBmYXZvdXJpdGUuJyB9KVxuICAgIGNyZWF0ZUNhcmQoeyB1cmw6IHN0cmF3YmVycnlDaGVlc2UsIHR4dDogJ1N0cmF3YmVycnkgQ2hlZXNlJywgZGVzYzogJ0lmIHlvdSB3ZXJlIHN1cnByaXNlZCB3aXRoIGhvdyBpbm5vdmF0aXZlIHdlIGFyZSBhdCBSYXRhdG91aWxsZVxcJ3MgdGhlbiB0aGlzIG9uZSB3b3VsZCBzdXJwcmlzZSB5b3UuIEFkZGluZyBvbnRvIENoZWYgQ29sbGV0ZVxcJ3MgbWluaW1hbGlzdCBsaWZlc3R5bGUsIENoZWYgUmVteSBkZWNpZGVkIHRvIGdpdmUgaXQgYSBwZXJzb25hbCBzcGluIGJ5IGFkZGluZyBhIHN0cmF3YmVlcnkuIFZlcnkgY2xldmVyIHJpZ2h0PyBJbmRlZWQuIEFsbCB0aGFua3MgdG8gb3VyIGhpZ2hseSBzb3BoaXN0aWNhdGVkIGNoZWZzLicgfSlcbiAgICBjcmVhdGVDYXJkKHsgdXJsOiBsaWdodG5pbmd5LCB0eHQ6ICdMaWdodG5pbmd5JywgZGVzYzogJ0xpZ2huaW5nIGNvb2tlZCBzb21ldGhpbmcgbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gYmxhaCBibGFoIGJsYWggYmxhaC4gU29tZSB0ZXh0IHNvbWUgbW9yZSB0ZXh0ICcgfSlcbiAgICBjcmVhdGVDYXJkKHsgdXJsOiBjYXJyb3QsIHR4dDogJ0JvaWxlZCBDYXJyb3QnLCBkZXNjOiAnQmFzaWNhbGx5IGEgYm9pbGVkIGNhcnJvdCBidXQgb3ZlciBwcmljZWQuIFBscyBidXkgeW91IHdvdWxkIHRvdGFsbHkgcmVncmV0IGl0LiBIQUhBSEFIQUhBSEFIQUhIQSAuIEkgZG9udCBrbm93IHdoYXQgdG8gd3JpdGUgaGVyZSBzbyB0aGlzIGlzIGp1c3Qgc29tZSBmaWxsZWQgdGV4dC4gU28gaXMgdGhpcyBzZW5ldGVuY2UuIE1heWJlIGFub3RoZXIgZmlsbGVyIHNlbmV0ZW5jZSB3b3VsZCBkby4gWWVhaCB0aGF0XFwncyBhYm91dCBpdC4nIH0pXG59XG4iLCJjb25zdCBzaXRlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXRlLWNvbnRlbnQnKVxuY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1jb250ZW50JylcbmNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtY29udGVudCcpXG5jb25zdCBhYm91dFVzQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dC11cy1jb250ZW50JylcbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKTtcblxuXG5pbXBvcnQgeyBhZGRIb21lQ29udGVudCB9IGZyb20gXCIuL2hvbWUtY29udGVudC5qc1wiXG5hZGRIb21lQ29udGVudCgpXG5pbXBvcnQgeyBhZGRNZW51Q29udGVudCB9IGZyb20gXCIuL21lbnUtY29udGVudC5qc1wiXG5hZGRNZW51Q29udGVudCgpXG5pbXBvcnQgeyBhZGRBYm91dFVzQ29udGVudCB9IGZyb20gXCIuL2Fib3V0LXVzLWNvbnRlbnQuanNcIlxuLy8gYWRkQWJvdXRVc0NvbnRlbnQoKVxuXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKVxuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcbmNvbnN0IGFib3V0VXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQtdXMnKVxuXG5cblxubGV0IGN1cnJlbnRDaGlsZCA9IGhvbWVDb250ZW50XG5cbmZ1bmN0aW9uIHRhYlN3aXRjaChidG4pIHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgY3VycmVudENoaWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgICAgICBzd2l0Y2ggKGJ0bikge1xuICAgICAgICAgICAgY2FzZSBob21lQnV0dG9uOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRDaGlsZCA9IGhvbWVDb250ZW50XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG1lbnVCdXR0b246XG4gICAgICAgICAgICAgICAgY3VycmVudENoaWxkID0gbWVudUNvbnRlbnRcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYWJvdXRVc0J1dHRvbjpcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2hpbGQgPSBhYm91dFVzQ29udGVudFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBob21lQnV0dG9uXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudENoaWxkLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCdcbiAgICB9KVxufVxuXG5cblxudGFiU3dpdGNoKG1lbnVCdXR0b24pXG50YWJTd2l0Y2goaG9tZUJ1dHRvbilcbi8vIHRhYlN3aXRjaChhYm91dFVzQnV0dG9uKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==