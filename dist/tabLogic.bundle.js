(self["webpackChunkrestaurantpage_js"] = self["webpackChunkrestaurantpage_js"] || []).push([["tabLogic"],{

/***/ "./src/tab-logic.js":
/*!**************************!*\
  !*** ./src/tab-logic.js ***!
  \**************************/
/***/ (() => {

const siteContent = document.getElementById('site-content')

const menuButton = document.getElementById('menu')
const homeButton = document.getElementById('home')
const aboutUsButton = document.getElementById('about-us')
let currentChild = homeContent

function tabSwitch(btn) {
    btn.addEventListener('click', () => {
        console.log('CLICK')
        siteContent.removeChild(currentChild)
        currentChild = btn
        siteContent.appendChild(currentChild)
    })
}

tabSwitch(menuButton)
tabSwitch(homeButton)
tabSwitch(aboutUsButton)



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/tab-logic.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiTG9naWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLWpzLy4vc3JjL3RhYi1sb2dpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaXRlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXRlLWNvbnRlbnQnKVxuXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbmNvbnN0IGFib3V0VXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQtdXMnKVxubGV0IGN1cnJlbnRDaGlsZCA9IGhvbWVDb250ZW50XG5cbmZ1bmN0aW9uIHRhYlN3aXRjaChidG4pIHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDTElDSycpXG4gICAgICAgIHNpdGVDb250ZW50LnJlbW92ZUNoaWxkKGN1cnJlbnRDaGlsZClcbiAgICAgICAgY3VycmVudENoaWxkID0gYnRuXG4gICAgICAgIHNpdGVDb250ZW50LmFwcGVuZENoaWxkKGN1cnJlbnRDaGlsZClcbiAgICB9KVxufVxuXG50YWJTd2l0Y2gobWVudUJ1dHRvbilcbnRhYlN3aXRjaChob21lQnV0dG9uKVxudGFiU3dpdGNoKGFib3V0VXNCdXR0b24pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==