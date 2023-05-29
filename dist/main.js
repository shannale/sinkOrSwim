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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\n\n\n\n// set background\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('canvas');\n  const ctx = canvas.getContext('2d');\n  const img = new Image();\n  img.onload = () => {\n    resizeCanvas();\n    window.addEventListener('resize', resizeCanvas);\n    drawImageOnCanvas();\n  };\n  img.src = 'pictures/pond.png';\n  function resizeCanvas() {\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n  }\n  function drawImageOnCanvas() {\n    const scaleFactor = Math.min(canvas.width / img.width, canvas.height / img.height);\n    const scaledWidth = img.width * scaleFactor;\n    const scaledHeight = img.height * scaleFactor;\n    const x = (canvas.width - scaledWidth) / 2;\n    const y = (canvas.height - scaledHeight) / 2;\n    ctx.drawImage(img, x, y, scaledWidth, scaledHeight);\n  }\n\n  // logic for starting game\n  const startGame = e => {\n    // hide introduction\n    let introduction = document.getElementById(\"introduction\");\n    introduction.classList.add(\"hidden\");\n\n    // starting a new game\n    const game = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    new _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx).start();\n  };\n  let startButton = document.getElementById(\"start-button\");\n  startButton.addEventListener(\"click\", startGame);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXFDO0FBQ1M7O0FBRTlDO0FBQ0FFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUNoRCxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUVuQyxNQUFNQyxHQUFHLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7RUFDdkJELEdBQUcsQ0FBQ0UsTUFBTSxHQUFHLE1BQU07SUFDakJDLFlBQVksQ0FBQyxDQUFDO0lBQ2RDLE1BQU0sQ0FBQ1QsZ0JBQWdCLENBQUMsUUFBUSxFQUFFUSxZQUFZLENBQUM7SUFDL0NFLGlCQUFpQixDQUFDLENBQUM7RUFDckIsQ0FBQztFQUNETCxHQUFHLENBQUNNLEdBQUcsR0FBRyxtQkFBbUI7RUFFN0IsU0FBU0gsWUFBWUEsQ0FBQSxFQUFHO0lBQ3RCUCxNQUFNLENBQUNXLEtBQUssR0FBR0gsTUFBTSxDQUFDSSxVQUFVO0lBQ2hDWixNQUFNLENBQUNhLE1BQU0sR0FBR0wsTUFBTSxDQUFDTSxXQUFXO0VBQ3BDO0VBRUEsU0FBU0wsaUJBQWlCQSxDQUFBLEVBQUc7SUFDM0IsTUFBTU0sV0FBVyxHQUFHQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ2pCLE1BQU0sQ0FBQ1csS0FBSyxHQUFHUCxHQUFHLENBQUNPLEtBQUssRUFBRVgsTUFBTSxDQUFDYSxNQUFNLEdBQUdULEdBQUcsQ0FBQ1MsTUFBTSxDQUFDO0lBQ2xGLE1BQU1LLFdBQVcsR0FBR2QsR0FBRyxDQUFDTyxLQUFLLEdBQUdJLFdBQVc7SUFDM0MsTUFBTUksWUFBWSxHQUFHZixHQUFHLENBQUNTLE1BQU0sR0FBR0UsV0FBVztJQUM3QyxNQUFNSyxDQUFDLEdBQUcsQ0FBQ3BCLE1BQU0sQ0FBQ1csS0FBSyxHQUFHTyxXQUFXLElBQUksQ0FBQztJQUMxQyxNQUFNRyxDQUFDLEdBQUcsQ0FBQ3JCLE1BQU0sQ0FBQ2EsTUFBTSxHQUFHTSxZQUFZLElBQUksQ0FBQztJQUU1Q2pCLEdBQUcsQ0FBQ29CLFNBQVMsQ0FBQ2xCLEdBQUcsRUFBRWdCLENBQUMsRUFBRUMsQ0FBQyxFQUFFSCxXQUFXLEVBQUVDLFlBQVksQ0FBQztFQUNyRDs7RUFFQTtFQUNBLE1BQU1JLFNBQVMsR0FBSUMsQ0FBQyxJQUFLO0lBQ3ZCO0lBQ0EsSUFBSUMsWUFBWSxHQUFHM0IsUUFBUSxDQUFDRyxjQUFjLENBQUMsY0FBYyxDQUFDO0lBQzFEd0IsWUFBWSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7O0lBRXBDO0lBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUloQyx3REFBSSxDQUFDLENBQUM7SUFDdkIsSUFBSUMsNkRBQVEsQ0FBQytCLElBQUksRUFBRTFCLEdBQUcsQ0FBQyxDQUFDMkIsS0FBSyxDQUFDLENBQUM7RUFDakMsQ0FBQztFQUVELElBQUlDLFdBQVcsR0FBR2hDLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUN6RDZCLFdBQVcsQ0FBQy9CLGdCQUFnQixDQUFDLE9BQU8sRUFBRXdCLFNBQVMsQ0FBQztBQUNsRCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3AvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWUuanNcIjtcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9zY3JpcHRzL2dhbWVfdmlldy5qc1wiO1xuXG4vLyBzZXQgYmFja2dyb3VuZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgcmVzaXplQ2FudmFzKCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzKTtcbiAgICAgIGRyYXdJbWFnZU9uQ2FudmFzKCk7XG4gICAgfTtcbiAgICBpbWcuc3JjID0gJ3BpY3R1cmVzL3BvbmQucG5nJztcbiAgICBcbiAgICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBkcmF3SW1hZ2VPbkNhbnZhcygpIHtcbiAgICAgIGNvbnN0IHNjYWxlRmFjdG9yID0gTWF0aC5taW4oY2FudmFzLndpZHRoIC8gaW1nLndpZHRoLCBjYW52YXMuaGVpZ2h0IC8gaW1nLmhlaWdodCk7XG4gICAgICBjb25zdCBzY2FsZWRXaWR0aCA9IGltZy53aWR0aCAqIHNjYWxlRmFjdG9yO1xuICAgICAgY29uc3Qgc2NhbGVkSGVpZ2h0ID0gaW1nLmhlaWdodCAqIHNjYWxlRmFjdG9yO1xuICAgICAgY29uc3QgeCA9IChjYW52YXMud2lkdGggLSBzY2FsZWRXaWR0aCkgLyAyO1xuICAgICAgY29uc3QgeSA9IChjYW52YXMuaGVpZ2h0IC0gc2NhbGVkSGVpZ2h0KSAvIDI7XG4gIFxuICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIHNjYWxlZFdpZHRoLCBzY2FsZWRIZWlnaHQpO1xuICAgIH1cblxuICAgIC8vIGxvZ2ljIGZvciBzdGFydGluZyBnYW1lXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKGUpID0+IHtcbiAgICAgIC8vIGhpZGUgaW50cm9kdWN0aW9uXG4gICAgICBsZXQgaW50cm9kdWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRyb2R1Y3Rpb25cIik7XG4gICAgICBpbnRyb2R1Y3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIFxuICAgICAgLy8gc3RhcnRpbmcgYSBuZXcgZ2FtZVxuICAgICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgICBuZXcgR2FtZVZpZXcoZ2FtZSwgY3R4KS5zdGFydCgpO1xuICAgIH1cbiAgICBcbiAgICBsZXQgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWJ1dHRvblwiKTtcbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRHYW1lKTtcbiAgfSk7XG4iXSwibmFtZXMiOlsiR2FtZSIsIkdhbWVWaWV3IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJyZXNpemVDYW52YXMiLCJ3aW5kb3ciLCJkcmF3SW1hZ2VPbkNhbnZhcyIsInNyYyIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2NhbGVGYWN0b3IiLCJNYXRoIiwibWluIiwic2NhbGVkV2lkdGgiLCJzY2FsZWRIZWlnaHQiLCJ4IiwieSIsImRyYXdJbWFnZSIsInN0YXJ0R2FtZSIsImUiLCJpbnRyb2R1Y3Rpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJnYW1lIiwic3RhcnQiLCJzdGFydEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor(canvasWidth, canvasHeight) {\n    this.pondTop = 0.2 * canvasHeight;\n    this.pondBot = 0.8 * canvasHeight;\n    this.pondLeft = 0.3 * canvasWidth;\n    this.pondRight = 0.7 * canvasWidth;\n  }\n  draw(ctx) {\n    this.drawRipples(ctx);\n  }\n  randomLocation() {\n    const randX = Math.random(this.pond);\n  }\n  drawRipples(ctx) {\n    ctx.strokeStyle = \"white\";\n    ctx.beginPath();\n    ctx.arc(700, 650, 50, 0, 2 * Math.PI, true);\n    ctx.stroke();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBV0EsQ0FBQ0MsV0FBVyxFQUFFQyxZQUFZLEVBQUU7SUFDbkMsSUFBSSxDQUFDQyxPQUFPLEdBQUcsR0FBRyxHQUFHRCxZQUFZO0lBQ2pDLElBQUksQ0FBQ0UsT0FBTyxHQUFHLEdBQUcsR0FBR0YsWUFBWTtJQUNqQyxJQUFJLENBQUNHLFFBQVEsR0FBRyxHQUFHLEdBQUdKLFdBQVc7SUFDakMsSUFBSSxDQUFDSyxTQUFTLEdBQUcsR0FBRyxHQUFHTCxXQUFXO0VBQ3RDO0VBRUFNLElBQUlBLENBQUNDLEdBQUcsRUFBRTtJQUNOLElBQUksQ0FBQ0MsV0FBVyxDQUFDRCxHQUFHLENBQUM7RUFDekI7RUFFQUUsY0FBY0EsQ0FBQSxFQUFHO0lBQ2IsTUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUNDLElBQUksQ0FBQztFQUN4QztFQUVBTCxXQUFXQSxDQUFDRCxHQUFHLEVBQUU7SUFDYkEsR0FBRyxDQUFDTyxXQUFXLEdBQUcsT0FBTztJQUV6QlAsR0FBRyxDQUFDUSxTQUFTLENBQUMsQ0FBQztJQUNmUixHQUFHLENBQUNTLEdBQUcsQ0FDTCxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHTCxJQUFJLENBQUNNLEVBQUUsRUFBRSxJQUNoQyxDQUFDO0lBQ0RWLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLENBQUM7RUFDaEI7QUFJSjtBQUVBLCtEQUFlcEIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KSB7XG4gICAgICAgIHRoaXMucG9uZFRvcCA9IDAuMiAqIGNhbnZhc0hlaWdodDtcbiAgICAgICAgdGhpcy5wb25kQm90ID0gMC44ICogY2FudmFzSGVpZ2h0O1xuICAgICAgICB0aGlzLnBvbmRMZWZ0ID0gMC4zICogY2FudmFzV2lkdGg7IFxuICAgICAgICB0aGlzLnBvbmRSaWdodCA9IDAuNyAqIGNhbnZhc1dpZHRoO1xuICAgIH07XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdSaXBwbGVzKGN0eCk7XG4gICAgfTtcblxuICAgIHJhbmRvbUxvY2F0aW9uKCkge1xuICAgICAgICBjb25zdCByYW5kWCA9IE1hdGgucmFuZG9tKHRoaXMucG9uZClcbiAgICB9XG5cbiAgICBkcmF3UmlwcGxlcyhjdHgpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICA3MDAsIDY1MCwgNTAsIDAsIDIgKiBNYXRoLlBJLCB0cnVlXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7ICJdLCJuYW1lcyI6WyJHYW1lIiwiY29uc3RydWN0b3IiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsInBvbmRUb3AiLCJwb25kQm90IiwicG9uZExlZnQiLCJwb25kUmlnaHQiLCJkcmF3IiwiY3R4IiwiZHJhd1JpcHBsZXMiLCJyYW5kb21Mb2NhdGlvbiIsInJhbmRYIiwiTWF0aCIsInJhbmRvbSIsInBvbmQiLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwic3Ryb2tlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n  constructor(game, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n  }\n  start() {\n    this.lastTime = 0;\n    // start the animation\n    requestAnimationFrame(this.animate.bind(this));\n  }\n  animate(time) {\n    const timeDelta = time - this.lastTime;\n\n    // this.game.step(timeDelta);\n    this.game.draw(this.ctx);\n    this.lastTime = time;\n\n    // every call to animate requests causes another call to animate\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFFBQVEsQ0FBQztFQUNYQyxXQUFXQSxDQUFFQyxJQUFJLEVBQUVDLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0QsSUFBSSxHQUFHQSxJQUFJO0VBQ3BCO0VBRUFFLEtBQUtBLENBQUEsRUFBRztJQUNKLElBQUksQ0FBQ0MsUUFBUSxHQUFHLENBQUM7SUFDakI7SUFDQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNsRDtFQUVBRCxPQUFPQSxDQUFDRSxJQUFJLEVBQUU7SUFDVixNQUFNQyxTQUFTLEdBQUdELElBQUksR0FBRyxJQUFJLENBQUNKLFFBQVE7O0lBRXRDO0lBQ0EsSUFBSSxDQUFDSCxJQUFJLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUNSLEdBQUcsQ0FBQztJQUN4QixJQUFJLENBQUNFLFFBQVEsR0FBR0ksSUFBSTs7SUFFcEI7SUFDQUgscUJBQXFCLENBQUMsSUFBSSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNsRDtBQUVKO0FBRUEsK0RBQWVSLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3AvLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanM/ODBlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IgKGdhbWUsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDsgXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgICAgICAvLyBzdGFydCB0aGUgYW5pbWF0aW9uXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIFxuICAgIGFuaW1hdGUodGltZSkge1xuICAgICAgICBjb25zdCB0aW1lRGVsdGEgPSB0aW1lIC0gdGhpcy5sYXN0VGltZTtcblxuICAgICAgICAvLyB0aGlzLmdhbWUuc3RlcCh0aW1lRGVsdGEpO1xuICAgICAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuXG4gICAgICAgIC8vIGV2ZXJ5IGNhbGwgdG8gYW5pbWF0ZSByZXF1ZXN0cyBjYXVzZXMgYW5vdGhlciBjYWxsIHRvIGFuaW1hdGVcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVZpZXc7Il0sIm5hbWVzIjpbIkdhbWVWaWV3IiwiY29uc3RydWN0b3IiLCJnYW1lIiwiY3R4Iiwic3RhcnQiLCJsYXN0VGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGUiLCJiaW5kIiwidGltZSIsInRpbWVEZWx0YSIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

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