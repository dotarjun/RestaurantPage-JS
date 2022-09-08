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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudUNvbnRlbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRTtBQUNOO0FBQ1Y7QUFDTztBQUNGO0FBQ3FCO0FBQ1I7QUFDYjs7QUFFdkQ7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixLQUFLLG1FQUFXLCtHQUErRztBQUNoSixpQkFBaUIsS0FBSyxvRUFBSSxnSEFBZ0g7QUFDMUksaUJBQWlCLEtBQUssNERBQUcsdUdBQXVHO0FBQ2hJLGlCQUFpQixLQUFLLCtEQUFPLDJHQUEyRztBQUN4SSxpQkFBaUIsS0FBSyw4REFBTSwwR0FBMEc7QUFDdEksaUJBQWlCLEtBQUsseUVBQWdCLHFIQUFxSDtBQUMzSixpQkFBaUIsS0FBSyx1RUFBVSw4R0FBOEc7QUFDOUksaUJBQWlCLEtBQUssOERBQU0saUhBQWlIO0FBQzdJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtanMvLi9zcmMvbWVudS1jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByYXRhdG91aWxsZSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JlY2lwZXMvcmF0YXRvdWlsbGUuanBnXCI7XG5pbXBvcnQgc291cCBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JlY2lwZXMvc3BlY2lhbC1zb3VwLmpwZ1wiO1xuaW1wb3J0IGVnZyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JlY2lwZXMvZWdnLmpwZWdcIlxuaW1wb3J0IGdhcmJhZ2UgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9yZWNpcGVzL2dhcmJhZ2UuanBnXCJcbmltcG9ydCBjaGVlc2UgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9yZWNpcGVzL2NoZWVzZS5qcGdcIlxuaW1wb3J0IHN0cmF3YmVycnlDaGVlc2UgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9yZWNpcGVzL3N0cmF3YmVycnktY2hlZXNlLmpwZ1wiXG5pbXBvcnQgbGlnaHRuaW5neSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3JlY2lwZXMvbGlnaHRuaW5neS1mb29kLnBuZ1wiXG5pbXBvcnQgY2Fycm90IGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvcmVjaXBlcy9jYXJyb3QuanBnXCJcblxuY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1jb250ZW50JylcbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRNZW51Q29udGVudCgpIHtcbiAgICBjb25zdCBjcmVhdGVDYXJkID0gKG9iaikgPT4ge1xuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG5cbiAgICAgICAgbGV0IGNhcmRDb250ZW50V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNhcmRDb250ZW50V3JhcC5jbGFzc0xpc3QuYWRkKCdjYXJkQ29udGVudFdyYXAnKVxuXG4gICAgICAgIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGZvb2RJbWFnZS5zcmMgPSBvYmoudXJsO1xuICAgICAgICBjYXJkQ29udGVudFdyYXAuYXBwZW5kQ2hpbGQoZm9vZEltYWdlKVxuXG4gICAgICAgIGNvbnN0IGZvb2RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgICAgICBmb29kSGVhZGluZy50ZXh0Q29udGVudCA9IG9iai50eHRcbiAgICAgICAgY2FyZENvbnRlbnRXcmFwLmFwcGVuZENoaWxkKGZvb2RIZWFkaW5nKVxuXG4gICAgICAgIGNvbnN0IGZvb2REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBmb29kRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmouZGVzY1xuICAgICAgICBjYXJkQ29udGVudFdyYXAuYXBwZW5kQ2hpbGQoZm9vZERlc2NyaXB0aW9uKVxuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnRXcmFwKVxuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudClcbiAgICB9XG4gICAgY3JlYXRlQ2FyZCh7IHVybDogcmF0YXRvdWlsbGUsIHR4dDogJ1JhdGF0b3VpbGxlJywgZGVzYzogJ0JSVUhISEhISG4gbG9yZW0gaXBzdW0gbmZqZHNuc2lqbiBpaiBkbnF3aWogZGlqIHdxbiBpIG9pdW4geWVzIGJydWggTE9yZW0gaXBzdW0nIH0pXG4gICAgY3JlYXRlQ2FyZCh7IHVybDogc291cCwgdHh0OiAnU3BlY2lhbCBTb3VwJywgZGVzYzogJ0JSVUhISEhISG4gbG9yZW0gaXBzdW0gbmZqZHNuc2lqbiBpaiBkbnF3aWogZGlqIHdxbiBpIG9pdW4geWVzIGJydWggTE9yZW0gaXBzdW0nIH0pXG4gICAgY3JlYXRlQ2FyZCh7IHVybDogZWdnLCB0eHQ6ICdFZ2cnLCBkZXNjOiAnQlJVSEhISEhIbiBsb3JlbSBpcHN1bSBuZmpkc25zaWpuIGlqIGRucXdpaiBkaWogd3FuIGkgb2l1biB5ZXMgYnJ1aCBMT3JlbSBpcHN1bScgfSlcbiAgICBjcmVhdGVDYXJkKHsgdXJsOiBnYXJiYWdlLCB0eHQ6ICdHYXJiYWdlJywgZGVzYzogJ0JSVUhISEhISG4gbG9yZW0gaXBzdW0gbmZqZHNuc2lqbiBpaiBkbnF3aWogZGlqIHdxbiBpIG9pdW4geWVzIGJydWggTE9yZW0gaXBzdW0nIH0pXG4gICAgY3JlYXRlQ2FyZCh7IHVybDogY2hlZXNlLCB0eHQ6ICdDaGVlc2UnLCBkZXNjOiAnQlJVSEhISEhIbiBsb3JlbSBpcHN1bSBuZmpkc25zaWpuIGlqIGRucXdpaiBkaWogd3FuIGkgb2l1biB5ZXMgYnJ1aCBMT3JlbSBpcHN1bScgfSlcbiAgICBjcmVhdGVDYXJkKHsgdXJsOiBzdHJhd2JlcnJ5Q2hlZXNlLCB0eHQ6ICdTdHJhd2JlcnJ5IENoZWVzZScsIGRlc2M6ICdCUlVISEhISEhuIGxvcmVtIGlwc3VtIG5mamRzbnNpam4gaWogZG5xd2lqIGRpaiB3cW4gaSBvaXVuIHllcyBicnVoIExPcmVtIGlwc3VtJyB9KVxuICAgIGNyZWF0ZUNhcmQoeyB1cmw6IGxpZ2h0bmluZ3ksIHR4dDogJ0xpZ2h0bmluZ3knLCBkZXNjOiAnQlJVSEhISEhIbiBsb3JlbSBpcHN1bSBuZmpkc25zaWpuIGlqIGRucXdpaiBkaWogd3FuIGkgb2l1biB5ZXMgYnJ1aCBMT3JlbSBpcHN1bScgfSlcbiAgICBjcmVhdGVDYXJkKHsgdXJsOiBjYXJyb3QsIHR4dDogJ0JvaWxlZCBDYXJyb3QnLCBkZXNjOiAnQlJVSEhISEhIbiBsb3JlbSBpcHN1bSBuZmpkc25zaWpuIGlqIGRucXdpaiBkaWogd3FuIGkgb2l1biB5ZXMgYnJ1aCBMT3JlbSBpcHN1bScgfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==