"use strict";
(self["webpackChunkrestaurantpage_js"] = self["webpackChunkrestaurantpage_js"] || []).push([["menuContent"],{

/***/ "./src/menu-content.js":
/*!*****************************!*\
  !*** ./src/menu-content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/assets/images/recipes/carrot.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/recipes/carrot.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85eef6f3fdfae7648f90.jpg";

/***/ }),

/***/ "./src/assets/images/recipes/cheese.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/recipes/cheese.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e33d3cfcd6563a9e2fd.jpg";

/***/ }),

/***/ "./src/assets/images/recipes/egg.jpeg":
/*!********************************************!*\
  !*** ./src/assets/images/recipes/egg.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c0569bd4503cac9ae74.jpeg";

/***/ }),

/***/ "./src/assets/images/recipes/garbage.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/recipes/garbage.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa9d9f4bb59b1d916d4b.jpg";

/***/ }),

/***/ "./src/assets/images/recipes/lightningy-food.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/recipes/lightningy-food.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3ae6e9d6677d64b063c.png";

/***/ }),

/***/ "./src/assets/images/recipes/ratatouille.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/recipes/ratatouille.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c9250c15925f4ec709b.jpg";

/***/ }),

/***/ "./src/assets/images/recipes/special-soup.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/recipes/special-soup.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88451276d4366a3bba15.jpg";

/***/ }),

/***/ "./src/assets/images/recipes/strawberry-cheese.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/images/recipes/strawberry-cheese.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a538edcebe69b87a704f.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu-content.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudUNvbnRlbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRTtBQUNOO0FBQ1Y7QUFDTztBQUNGO0FBQ3FCO0FBQ1I7QUFDYjs7QUFFdkQ7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixLQUFLLG1FQUFXLDBPQUEwTztBQUMzUSxpQkFBaUIsS0FBSyxvRUFBSSxrTUFBa007QUFDNU4saUJBQWlCLEtBQUssNERBQUcsc05BQXNOO0FBQy9PLGlCQUFpQixLQUFLLCtEQUFPLGtIQUFrSDtBQUMvSSxpQkFBaUIsS0FBSyw4REFBTSxnU0FBZ1M7QUFDNVQsaUJBQWlCLEtBQUsseUVBQWdCLDBVQUEwVTtBQUNoWCxpQkFBaUIsS0FBSyx1RUFBVSwrSEFBK0g7QUFDL0osaUJBQWlCLEtBQUssOERBQU0sNFJBQTRSO0FBQ3hUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtanMvLi9zcmMvbWVudS1jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByYXRhdG91aWxsZSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JlY2lwZXMvcmF0YXRvdWlsbGUuanBnXCI7XG5pbXBvcnQgc291cCBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JlY2lwZXMvc3BlY2lhbC1zb3VwLmpwZ1wiO1xuaW1wb3J0IGVnZyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JlY2lwZXMvZWdnLmpwZWdcIlxuaW1wb3J0IGdhcmJhZ2UgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9yZWNpcGVzL2dhcmJhZ2UuanBnXCJcbmltcG9ydCBjaGVlc2UgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9yZWNpcGVzL2NoZWVzZS5qcGdcIlxuaW1wb3J0IHN0cmF3YmVycnlDaGVlc2UgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9yZWNpcGVzL3N0cmF3YmVycnktY2hlZXNlLmpwZ1wiXG5pbXBvcnQgbGlnaHRuaW5neSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JlY2lwZXMvbGlnaHRuaW5neS1mb29kLnBuZ1wiXG5pbXBvcnQgY2Fycm90IGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvcmVjaXBlcy9jYXJyb3QuanBnXCJcblxuY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1jb250ZW50JylcbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRNZW51Q29udGVudCgpIHtcbiAgICBjb25zdCBjcmVhdGVDYXJkID0gKG9iaikgPT4ge1xuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG5cbiAgICAgICAgbGV0IGNhcmRDb250ZW50V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNhcmRDb250ZW50V3JhcC5jbGFzc0xpc3QuYWRkKCdjYXJkQ29udGVudFdyYXAnKVxuXG4gICAgICAgIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGZvb2RJbWFnZS5zcmMgPSBvYmoudXJsO1xuICAgICAgICBjYXJkQ29udGVudFdyYXAuYXBwZW5kQ2hpbGQoZm9vZEltYWdlKVxuXG4gICAgICAgIGNvbnN0IGZvb2RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgICAgICBmb29kSGVhZGluZy50ZXh0Q29udGVudCA9IG9iai50eHRcbiAgICAgICAgY2FyZENvbnRlbnRXcmFwLmFwcGVuZENoaWxkKGZvb2RIZWFkaW5nKVxuXG4gICAgICAgIGNvbnN0IGZvb2REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBmb29kRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmouZGVzY1xuICAgICAgICBjYXJkQ29udGVudFdyYXAuYXBwZW5kQ2hpbGQoZm9vZERlc2NyaXB0aW9uKVxuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnRXcmFwKVxuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudClcbiAgICB9XG4gICAgY3JlYXRlQ2FyZCh7IHVybDogcmF0YXRvdWlsbGUsIHR4dDogJ1JhdGF0b3VpbGxlJywgZGVzYzogJ0FuIEV4cXVpc2l0ZSBkaXNoIG9mIHN0ZXdlZCB2ZWdldGFibGVzIGxvdmVkIGJ5IHRoZSBpbmZhbW91cyBjcml0aXF1ZSBBbnRvbiBFZ28uIEluY2x1ZGVzIHRvbWF0bywgZ2FybGljLCBvbmlvbiwgY291cmdldHRlLCBhdWJlcmdpbmUsIGNhcHNpY3VtLCBhbmQgbGVhZnkgZ3JlZW4gaGVyYnMuIEdhcm5pc2hlZCB3aXRoIFJhdGF0b3VpbGxlIFNhdWNlLiAnIH0pXG4gICAgY3JlYXRlQ2FyZCh7IHVybDogc291cCwgdHh0OiAnU3BlY2lhbCBTb3VwJywgZGVzYzogJ0FuIGltcHJvdmlzZWQgdmVyc2lvbiBvZiB0aGUgY29udmVudGlvbmFsIGNyZWFtIHNvdXAgYWx0ZXJlZCBieSBDaGVmIExpbmd1aW5pIGFuZCBDaGVmIFJlbXkuIEluY2x1ZGVzIFRvbWF0bywgQ3JlYW0gQ2hlZXNlLCBPcmVnYW5vLCBXYXRlciBhbmQgb3RoZXIgdmVnZXRhYmxlcy4gJyB9KVxuICAgIGNyZWF0ZUNhcmQoeyB1cmw6IGVnZywgdHh0OiAnT21lbGV0dGUnLCBkZXNjOiAnVGhlIEZyZW5jaCBvbWVsZXR0ZSB3aXRoIHNvZnQgdGV4dHVyZS4gRmlsbGVkIHdpdGggZ3JhdGVkIGNoZWVzZSwgaGFtLCBmcmVzaCBoZXJicywgbXVzaHJvb21zIGFuZCBzbW9rZWQgc2FsbW9uLiBDdXN0b20gdG9wcGluZ3MgdG8gYmUgc3BlY2lmaWVkIG9uIG9yZGVyLiBBZGRpdGlvbmFsIENoYXJnZXMgYXBwbGljYWJsZS4nIH0pXG4gICAgY3JlYXRlQ2FyZCh7IHVybDogZ2FyYmFnZSwgdHh0OiAnR2FyYmFnZScsIGRlc2M6ICdBIGNoZWFwIFJhdCBjbGFzc2ljIGRpc2guIFRoZSBnbyB0byBtZWFsIGlmIHlvdSBhcmUgb24gYSBidWRnZXQgb3IgaGFwcGVuIHRvIGJlIGEgcmF0LicgfSlcbiAgICBjcmVhdGVDYXJkKHsgdXJsOiBjaGVlc2UsIHR4dDogJ0NoZWVzZScsIGRlc2M6ICdDaGVlc2UuIFllcy4gSXRcXCdzIGp1c3QgY2hlZXNlLiBQTGFpbiByYXcgY2hlZXNlIHdoaWNoIGlzIGp1c3Qgb3ZlcnByaWNlZC4gQW4gZXhxdWlzaXRlIHJlcHJlc2VudGF0aW9uIG9mIHNpbXBsaWNpdHkgYnkgb3VyIGV4dHJlbWVsZXkgdGFsZW50ZWQgQ2hlZiBDb2xsZXRlIHdobyBiZWxpZXZlcyBpbiBNaW5pbWFsaXN0IGxpdmluZyB0aHVzIGEgbWluaW1hbGlzdCBkaXNoIGZpciBvdXIgbW9zdCBjdWx0dXJlZCBjdXN0b21lcnMuIFJhdCBmYXZvdXJpdGUuJyB9KVxuICAgIGNyZWF0ZUNhcmQoeyB1cmw6IHN0cmF3YmVycnlDaGVlc2UsIHR4dDogJ1N0cmF3YmVycnkgQ2hlZXNlJywgZGVzYzogJ0lmIHlvdSB3ZXJlIHN1cnByaXNlZCB3aXRoIGhvdyBpbm5vdmF0aXZlIHdlIGFyZSBhdCBSYXRhdG91aWxsZVxcJ3MgdGhlbiB0aGlzIG9uZSB3b3VsZCBzdXJwcmlzZSB5b3UuIEFkZGluZyBvbnRvIENoZWYgQ29sbGV0ZVxcJ3MgbWluaW1hbGlzdCBsaWZlc3R5bGUsIENoZWYgUmVteSBkZWNpZGVkIHRvIGdpdmUgaXQgYSBwZXJzb25hbCBzcGluIGJ5IGFkZGluZyBhIHN0cmF3YmVlcnkuIFZlcnkgY2xldmVyIHJpZ2h0PyBJbmRlZWQuIEFsbCB0aGFua3MgdG8gb3VyIGhpZ2hseSBzb3BoaXN0aWNhdGVkIGNoZWZzLicgfSlcbiAgICBjcmVhdGVDYXJkKHsgdXJsOiBsaWdodG5pbmd5LCB0eHQ6ICdMaWdodG5pbmd5JywgZGVzYzogJ0xpZ2huaW5nIGNvb2tlZCBzb21ldGhpbmcgbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gYmxhaCBibGFoIGJsYWggYmxhaC4gU29tZSB0ZXh0IHNvbWUgbW9yZSB0ZXh0ICcgfSlcbiAgICBjcmVhdGVDYXJkKHsgdXJsOiBjYXJyb3QsIHR4dDogJ0JvaWxlZCBDYXJyb3QnLCBkZXNjOiAnQmFzaWNhbGx5IGEgYm9pbGVkIGNhcnJvdCBidXQgb3ZlciBwcmljZWQuIFBscyBidXkgeW91IHdvdWxkIHRvdGFsbHkgcmVncmV0IGl0LiBIQUhBSEFIQUhBSEFIQUhIQSAuIEkgZG9udCBrbm93IHdoYXQgdG8gd3JpdGUgaGVyZSBzbyB0aGlzIGlzIGp1c3Qgc29tZSBmaWxsZWQgdGV4dC4gU28gaXMgdGhpcyBzZW5ldGVuY2UuIE1heWJlIGFub3RoZXIgZmlsbGVyIHNlbmV0ZW5jZSB3b3VsZCBkby4gWWVhaCB0aGF0XFwncyBhYm91dCBpdC4nIH0pXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=