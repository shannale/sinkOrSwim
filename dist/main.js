/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\n\n\n\n// set background\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('canvas');\n  const ctx = canvas.getContext('2d');\n  const img = new Image();\n  img.src = 'pictures/pond.png';\n  img.onload = () => {\n    resizeCanvas();\n    window.addEventListener('resize', resizeCanvas);\n    drawImageOnCanvas();\n  };\n  function resizeCanvas() {\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n  }\n  function drawImageOnCanvas() {\n    const scaleFactor = Math.min(canvas.width / img.width, canvas.height / img.height);\n    const scaledWidth = img.width * scaleFactor;\n    const scaledHeight = img.height * scaleFactor;\n    const x = (canvas.width - scaledWidth) / 2;\n    const y = (canvas.height - scaledHeight) / 2;\n    ctx.drawImage(img, x, y, scaledWidth, scaledHeight);\n  }\n});\n\n// for game\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById(\"canvas\");\n  canvasEl.width = _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIM_X;\n  canvasEl.height = _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIM_Y;\n  const ctx = canvasEl.getContext(\"2d\");\n  const game = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  new _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx).start();\n});\n\n// instructions introduction box \ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // let game = new Game();\n\n  let startButton = document.getElementById(\"start-button\");\n  startButton.addEventListener(\"click\", startGame);\n});\nconst startGame = e => {\n  let start = document.getElementById(\"introduction\");\n  start.classList.add(\"hidden\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZS5qc1wiO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL3NjcmlwdHMvZ2FtZV92aWV3LmpzXCI7XG5cbi8vIHNldCBiYWNrZ3JvdW5kXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIFxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSAncGljdHVyZXMvcG9uZC5wbmcnO1xuICBcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzKTtcbiAgICAgIGRyYXdJbWFnZU9uQ2FudmFzKCk7XG4gICAgfTtcbiAgXG4gICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xuICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gZHJhd0ltYWdlT25DYW52YXMoKSB7XG4gICAgICBjb25zdCBzY2FsZUZhY3RvciA9IE1hdGgubWluKGNhbnZhcy53aWR0aCAvIGltZy53aWR0aCwgY2FudmFzLmhlaWdodCAvIGltZy5oZWlnaHQpO1xuICAgICAgY29uc3Qgc2NhbGVkV2lkdGggPSBpbWcud2lkdGggKiBzY2FsZUZhY3RvcjtcbiAgICAgIGNvbnN0IHNjYWxlZEhlaWdodCA9IGltZy5oZWlnaHQgKiBzY2FsZUZhY3RvcjtcbiAgICAgIGNvbnN0IHggPSAoY2FudmFzLndpZHRoIC0gc2NhbGVkV2lkdGgpIC8gMjtcbiAgICAgIGNvbnN0IHkgPSAoY2FudmFzLmhlaWdodCAtIHNjYWxlZEhlaWdodCkgLyAyO1xuICBcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB4LCB5LCBzY2FsZWRXaWR0aCwgc2NhbGVkSGVpZ2h0KTtcbiAgICB9XG4gIH0pO1xuXG4vLyBmb3IgZ2FtZVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjYW52YXNFbC53aWR0aCA9IEdhbWUuRElNX1g7XG4gIGNhbnZhc0VsLmhlaWdodCA9IEdhbWUuRElNX1k7XG4gIFxuICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICBuZXcgR2FtZVZpZXcoZ2FtZSwgY3R4KS5zdGFydCgpO1xufSk7XG5cbi8vIGluc3RydWN0aW9ucyBpbnRyb2R1Y3Rpb24gYm94IFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAvLyBsZXQgZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbiAgbGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1idXR0b25cIik7XG5cbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsc3RhcnRHYW1lKVxuXG59KTtcblxuXG5jb25zdCBzdGFydEdhbWUgPSAoZSkgPT4ge1xuICBsZXQgc3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludHJvZHVjdGlvblwiKTtcbiAgc3RhcnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn1cblxuXG4iXSwibmFtZXMiOlsiR2FtZSIsIkdhbWVWaWV3IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJyZXNpemVDYW52YXMiLCJ3aW5kb3ciLCJkcmF3SW1hZ2VPbkNhbnZhcyIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2NhbGVGYWN0b3IiLCJNYXRoIiwibWluIiwic2NhbGVkV2lkdGgiLCJzY2FsZWRIZWlnaHQiLCJ4IiwieSIsImRyYXdJbWFnZSIsImNhbnZhc0VsIiwiRElNX1giLCJESU1fWSIsImdhbWUiLCJzdGFydCIsInN0YXJ0QnV0dG9uIiwic3RhcnRHYW1lIiwiZSIsImNsYXNzTGlzdCIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {\n    this.fish = fish;\n  }\n  static DIM_X = 500;\n  static DIM_Y = 500;\n  static BG_COLOR = \"#000000\";\n  draw(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.fillStyle = Game.BG_COLOR;\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\n    // this.allObjects().forEach((object) => {\n    //   object.draw(ctx);\n    // });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7RUFDcEI7RUFDQSxPQUFPQyxLQUFLLEdBQUcsR0FBRztFQUNsQixPQUFPQyxLQUFLLEdBQUcsR0FBRztFQUNsQixPQUFPQyxRQUFRLEdBQUcsU0FBUztFQUUzQkMsSUFBSUEsQ0FBQ0MsR0FBRyxFQUFFO0lBQ05BLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVSLElBQUksQ0FBQ0csS0FBSyxFQUFFSCxJQUFJLENBQUNJLEtBQUssQ0FBQztJQUMzQ0csR0FBRyxDQUFDRSxTQUFTLEdBQUdULElBQUksQ0FBQ0ssUUFBUTtJQUM3QkUsR0FBRyxDQUFDRyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRVYsSUFBSSxDQUFDRyxLQUFLLEVBQUVILElBQUksQ0FBQ0ksS0FBSyxDQUFDOztJQUUxQztJQUNBO0lBQ0E7RUFDSjtBQUVKOztBQUVBLCtEQUFlSixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpc2ggPSBmaXNoXG4gICAgfVxuICAgIHN0YXRpYyBESU1fWCA9IDUwMDtcbiAgICBzdGF0aWMgRElNX1kgPSA1MDA7XG4gICAgc3RhdGljIEJHX0NPTE9SID0gXCIjMDAwMDAwXCI7XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIEdhbWUuRElNX1gsIEdhbWUuRElNX1kpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gR2FtZS5CR19DT0xPUjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIEdhbWUuRElNX1gsIEdhbWUuRElNX1kpO1xuICAgIFxuICAgICAgICAvLyB0aGlzLmFsbE9iamVjdHMoKS5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgICAgLy8gICBvYmplY3QuZHJhdyhjdHgpO1xuICAgICAgICAvLyB9KTtcbiAgICB9O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7ICJdLCJuYW1lcyI6WyJHYW1lIiwiY29uc3RydWN0b3IiLCJmaXNoIiwiRElNX1giLCJESU1fWSIsIkJHX0NPTE9SIiwiZHJhdyIsImN0eCIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n  constructor(game, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n  }\n  start() {\n    this.lastTime = 0;\n    // start the animation\n    requestAnimationFrame(this.animate.bind(this));\n  }\n  animate(time) {\n    const timeDelta = time - this.lastTime;\n    this.game.step(timeDelta);\n    this.game.draw(this.ctx);\n    this.lastTime = time;\n\n    // every call to animate requests causes another call to animate\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFFBQVEsQ0FBQztFQUNYQyxXQUFXQSxDQUFFQyxJQUFJLEVBQUVDLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0QsSUFBSSxHQUFHQSxJQUFJO0VBQ3BCO0VBRUFFLEtBQUtBLENBQUEsRUFBRztJQUNKLElBQUksQ0FBQ0MsUUFBUSxHQUFHLENBQUM7SUFDakI7SUFDQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNoRDtFQUVBRCxPQUFPQSxDQUFDRSxJQUFJLEVBQUU7SUFDWixNQUFNQyxTQUFTLEdBQUdELElBQUksR0FBRyxJQUFJLENBQUNKLFFBQVE7SUFFdEMsSUFBSSxDQUFDSCxJQUFJLENBQUNTLElBQUksQ0FBQ0QsU0FBUyxDQUFDO0lBQ3pCLElBQUksQ0FBQ1IsSUFBSSxDQUFDVSxJQUFJLENBQUMsSUFBSSxDQUFDVCxHQUFHLENBQUM7SUFDeEIsSUFBSSxDQUFDRSxRQUFRLEdBQUdJLElBQUk7O0lBRXBCO0lBQ0FILHFCQUFxQixDQUFDLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDaEQ7QUFFTjtBQUVBLCtEQUFlUixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzPzgwZWUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yIChnYW1lLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7IFxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICAgICAgLy8gc3RhcnQgdGhlIGFuaW1hdGlvblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgIFxuICAgICAgYW5pbWF0ZSh0aW1lKSB7XG4gICAgICAgIGNvbnN0IHRpbWVEZWx0YSA9IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgIFxuICAgICAgICB0aGlzLmdhbWUuc3RlcCh0aW1lRGVsdGEpO1xuICAgICAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgIFxuICAgICAgICAvLyBldmVyeSBjYWxsIHRvIGFuaW1hdGUgcmVxdWVzdHMgY2F1c2VzIGFub3RoZXIgY2FsbCB0byBhbmltYXRlXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVZpZXc7Il0sIm5hbWVzIjpbIkdhbWVWaWV3IiwiY29uc3RydWN0b3IiLCJnYW1lIiwiY3R4Iiwic3RhcnQiLCJsYXN0VGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGUiLCJiaW5kIiwidGltZSIsInRpbWVEZWx0YSIsInN0ZXAiLCJkcmF3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3AvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;