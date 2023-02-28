/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dev/scripts/modules/page-list.js":
/*!******************************************!*\
  !*** ./dev/scripts/modules/page-list.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass moveMovement {\n    constructor() {\n        this.moveMovement();\n    }\n\n    moveMovement(){\n        var section = document.querySelector('.page-list');\n        var cardElms = document.querySelectorAll('.card-page-list');\n\n        cardElms.forEach(element => {\n            element.addEventListener(\"click\", ()=>{\n                cardElms.forEach(element => {\n                  element.classList.remove(\"active\");\n                });\n                element.classList.add('active');\n              });\n        });\n\n        section.addEventListener('mouseenter', function(e) {\n            var direction = \"\",\n            oldx = 0,\n            mousemovemethod = function (e) {\n            \n                if (e.pageY < oldx) {\n                    direction = \"bottom\"\n                    console.log('up');\n                } else if (e.pageY > oldx) {\n                    direction = \"top\"\n                    console.log('down');\n                }\n                cardElms.forEach(element => {\n                    element.classList.remove('top');\n                    element.classList.remove('bottom');\n                    element.classList.add(direction);\n                });\n                oldx = e.pageY;\n                \n        }\n        \n        document.addEventListener('mousemove', mousemovemethod);\n        });\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moveMovement);\nnew moveMovement();\n\n\n//# sourceURL=webpack://webpack-starter-template/./dev/scripts/modules/page-list.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./dev/scripts/modules/page-list.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;