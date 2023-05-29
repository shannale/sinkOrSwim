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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\n\n\n\n// set background\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('canvas');\n  const ctx = canvas.getContext('2d');\n  const img = new Image();\n  img.onload = () => {\n    resizeCanvas();\n    window.addEventListener('resize', resizeCanvas);\n    drawImageOnCanvas();\n  };\n  img.src = 'pictures/pond.png';\n  function resizeCanvas() {\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n  }\n  function drawImageOnCanvas() {\n    const scaleFactor = Math.min(canvas.width / img.width, canvas.height / img.height);\n    const scaledWidth = img.width * scaleFactor;\n    const scaledHeight = img.height * scaleFactor;\n    const x = (canvas.width - scaledWidth) / 2;\n    const y = (canvas.height - scaledHeight) / 2;\n    ctx.drawImage(img, x, y, scaledWidth, scaledHeight);\n  }\n\n  // logic for starting game\n  const startGame = e => {\n    // hide introduction\n    let introduction = document.getElementById(\"introduction\");\n    introduction.classList.add(\"hidden\");\n\n    // starting a new game\n    const game = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height);\n    new _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx).start();\n  };\n  let startButton = document.getElementById(\"start-button\");\n  startButton.addEventListener(\"click\", startGame);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXFDO0FBQ1M7O0FBRTlDO0FBQ0FFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUNoRCxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUVuQyxNQUFNQyxHQUFHLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7RUFDdkJELEdBQUcsQ0FBQ0UsTUFBTSxHQUFHLE1BQU07SUFDakJDLFlBQVksQ0FBQyxDQUFDO0lBQ2RDLE1BQU0sQ0FBQ1QsZ0JBQWdCLENBQUMsUUFBUSxFQUFFUSxZQUFZLENBQUM7SUFDL0NFLGlCQUFpQixDQUFDLENBQUM7RUFDckIsQ0FBQztFQUNETCxHQUFHLENBQUNNLEdBQUcsR0FBRyxtQkFBbUI7RUFFN0IsU0FBU0gsWUFBWUEsQ0FBQSxFQUFHO0lBQ3RCUCxNQUFNLENBQUNXLEtBQUssR0FBR0gsTUFBTSxDQUFDSSxVQUFVO0lBQ2hDWixNQUFNLENBQUNhLE1BQU0sR0FBR0wsTUFBTSxDQUFDTSxXQUFXO0VBQ3BDO0VBRUEsU0FBU0wsaUJBQWlCQSxDQUFBLEVBQUc7SUFDM0IsTUFBTU0sV0FBVyxHQUFHQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ2pCLE1BQU0sQ0FBQ1csS0FBSyxHQUFHUCxHQUFHLENBQUNPLEtBQUssRUFBRVgsTUFBTSxDQUFDYSxNQUFNLEdBQUdULEdBQUcsQ0FBQ1MsTUFBTSxDQUFDO0lBQ2xGLE1BQU1LLFdBQVcsR0FBR2QsR0FBRyxDQUFDTyxLQUFLLEdBQUdJLFdBQVc7SUFDM0MsTUFBTUksWUFBWSxHQUFHZixHQUFHLENBQUNTLE1BQU0sR0FBR0UsV0FBVztJQUM3QyxNQUFNSyxDQUFDLEdBQUcsQ0FBQ3BCLE1BQU0sQ0FBQ1csS0FBSyxHQUFHTyxXQUFXLElBQUksQ0FBQztJQUMxQyxNQUFNRyxDQUFDLEdBQUcsQ0FBQ3JCLE1BQU0sQ0FBQ2EsTUFBTSxHQUFHTSxZQUFZLElBQUksQ0FBQztJQUU1Q2pCLEdBQUcsQ0FBQ29CLFNBQVMsQ0FBQ2xCLEdBQUcsRUFBRWdCLENBQUMsRUFBRUMsQ0FBQyxFQUFFSCxXQUFXLEVBQUVDLFlBQVksQ0FBQztFQUNyRDs7RUFFQTtFQUNBLE1BQU1JLFNBQVMsR0FBSUMsQ0FBQyxJQUFLO0lBQ3ZCO0lBQ0EsSUFBSUMsWUFBWSxHQUFHM0IsUUFBUSxDQUFDRyxjQUFjLENBQUMsY0FBYyxDQUFDO0lBQzFEd0IsWUFBWSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7O0lBRXBDO0lBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUloQyx3REFBSSxDQUFDSSxNQUFNLENBQUNXLEtBQUssRUFBRVgsTUFBTSxDQUFDYSxNQUFNLENBQUM7SUFDbEQsSUFBSWhCLDZEQUFRLENBQUMrQixJQUFJLEVBQUUxQixHQUFHLENBQUMsQ0FBQzJCLEtBQUssQ0FBQyxDQUFDO0VBQ2pDLENBQUM7RUFFRCxJQUFJQyxXQUFXLEdBQUdoQyxRQUFRLENBQUNHLGNBQWMsQ0FBQyxjQUFjLENBQUM7RUFDekQ2QixXQUFXLENBQUMvQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUV3QixTQUFTLENBQUM7QUFDbEQsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lLmpzXCI7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vc2NyaXB0cy9nYW1lX3ZpZXcuanNcIjtcblxuLy8gc2V0IGJhY2tncm91bmRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcyk7XG4gICAgICBkcmF3SW1hZ2VPbkNhbnZhcygpO1xuICAgIH07XG4gICAgaW1nLnNyYyA9ICdwaWN0dXJlcy9wb25kLnBuZyc7XG4gICAgXG4gICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xuICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gZHJhd0ltYWdlT25DYW52YXMoKSB7XG4gICAgICBjb25zdCBzY2FsZUZhY3RvciA9IE1hdGgubWluKGNhbnZhcy53aWR0aCAvIGltZy53aWR0aCwgY2FudmFzLmhlaWdodCAvIGltZy5oZWlnaHQpO1xuICAgICAgY29uc3Qgc2NhbGVkV2lkdGggPSBpbWcud2lkdGggKiBzY2FsZUZhY3RvcjtcbiAgICAgIGNvbnN0IHNjYWxlZEhlaWdodCA9IGltZy5oZWlnaHQgKiBzY2FsZUZhY3RvcjtcbiAgICAgIGNvbnN0IHggPSAoY2FudmFzLndpZHRoIC0gc2NhbGVkV2lkdGgpIC8gMjtcbiAgICAgIGNvbnN0IHkgPSAoY2FudmFzLmhlaWdodCAtIHNjYWxlZEhlaWdodCkgLyAyO1xuICBcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB4LCB5LCBzY2FsZWRXaWR0aCwgc2NhbGVkSGVpZ2h0KTtcbiAgICB9XG5cbiAgICAvLyBsb2dpYyBmb3Igc3RhcnRpbmcgZ2FtZVxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IChlKSA9PiB7XG4gICAgICAvLyBoaWRlIGludHJvZHVjdGlvblxuICAgICAgbGV0IGludHJvZHVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50cm9kdWN0aW9uXCIpO1xuICAgICAgaW50cm9kdWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBcbiAgICAgIC8vIHN0YXJ0aW5nIGEgbmV3IGdhbWVcbiAgICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgbmV3IEdhbWVWaWV3KGdhbWUsIGN0eCkuc3RhcnQoKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1idXR0b25cIik7XG4gICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSk7XG4gIH0pO1xuIl0sIm5hbWVzIjpbIkdhbWUiLCJHYW1lVmlldyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImltZyIsIkltYWdlIiwib25sb2FkIiwicmVzaXplQ2FudmFzIiwid2luZG93IiwiZHJhd0ltYWdlT25DYW52YXMiLCJzcmMiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInNjYWxlRmFjdG9yIiwiTWF0aCIsIm1pbiIsInNjYWxlZFdpZHRoIiwic2NhbGVkSGVpZ2h0IiwieCIsInkiLCJkcmF3SW1hZ2UiLCJzdGFydEdhbWUiLCJlIiwiaW50cm9kdWN0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2FtZSIsInN0YXJ0Iiwic3RhcnRCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor(canvasWidth, canvasHeight) {\n    this.pondTop = 0.2 * canvasHeight;\n    this.pondBot = 0.8 * canvasHeight;\n    this.pondLeft = 0.3 * canvasWidth;\n    this.pondRight = 0.7 * canvasWidth;\n  }\n  draw(ctx) {\n    this.drawRipples(ctx);\n  }\n  randomLocation() {\n    const randY = Math.random() * (this.pondBot - this.pondTop) + this.pondTop;\n    const randX = Math.random() * (this.pondRight - this.pondLeft) + this.pondLeft;\n    return [randX, randY];\n  }\n  drawRipples(ctx) {\n    ctx.strokeStyle = \"white\";\n    ctx.beginPath();\n    const position = this.randomLocation();\n    ctx.arc(position[0], position[1], 50, 0, 2 * Math.PI, true);\n    ctx.stroke();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBV0EsQ0FBQ0MsV0FBVyxFQUFFQyxZQUFZLEVBQUU7SUFDbkMsSUFBSSxDQUFDQyxPQUFPLEdBQUcsR0FBRyxHQUFHRCxZQUFZO0lBQ2pDLElBQUksQ0FBQ0UsT0FBTyxHQUFHLEdBQUcsR0FBR0YsWUFBWTtJQUNqQyxJQUFJLENBQUNHLFFBQVEsR0FBRyxHQUFHLEdBQUdKLFdBQVc7SUFDakMsSUFBSSxDQUFDSyxTQUFTLEdBQUcsR0FBRyxHQUFHTCxXQUFXO0VBQ3RDO0VBRUFNLElBQUlBLENBQUNDLEdBQUcsRUFBRTtJQUNOLElBQUksQ0FBQ0MsV0FBVyxDQUFDRCxHQUFHLENBQUM7RUFDekI7RUFFQUUsY0FBY0EsQ0FBQSxFQUFHO0lBQ2IsTUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDVCxPQUFPLEdBQUcsSUFBSSxDQUFDRCxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUNBLE9BQU87SUFDMUUsTUFBTVcsS0FBSyxHQUFHRixJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDUCxTQUFTLEdBQUcsSUFBSSxDQUFDRCxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUNBLFFBQVE7SUFFOUUsT0FBTyxDQUFDUyxLQUFLLEVBQUVILEtBQUssQ0FBQztFQUN6QjtFQUVBRixXQUFXQSxDQUFDRCxHQUFHLEVBQUU7SUFDYkEsR0FBRyxDQUFDTyxXQUFXLEdBQUcsT0FBTztJQUN6QlAsR0FBRyxDQUFDUSxTQUFTLENBQUMsQ0FBQztJQUNmLE1BQU1DLFFBQVEsR0FBRyxJQUFJLENBQUNQLGNBQWMsQ0FBQyxDQUFDO0lBQ3RDRixHQUFHLENBQUNVLEdBQUcsQ0FDTEQsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFQSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUdMLElBQUksQ0FBQ08sRUFBRSxFQUFFLElBQ2hELENBQUM7SUFDRFgsR0FBRyxDQUFDWSxNQUFNLENBQUMsQ0FBQztFQUNoQjtBQUlKO0FBRUEsK0RBQWVyQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5wb25kVG9wID0gMC4yICogY2FudmFzSGVpZ2h0O1xuICAgICAgICB0aGlzLnBvbmRCb3QgPSAwLjggKiBjYW52YXNIZWlnaHQ7XG4gICAgICAgIHRoaXMucG9uZExlZnQgPSAwLjMgKiBjYW52YXNXaWR0aDsgXG4gICAgICAgIHRoaXMucG9uZFJpZ2h0ID0gMC43ICogY2FudmFzV2lkdGg7XG4gICAgfTtcblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd1JpcHBsZXMoY3R4KTtcbiAgICB9O1xuXG4gICAgcmFuZG9tTG9jYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHJhbmRZID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLnBvbmRCb3QgLSB0aGlzLnBvbmRUb3ApICsgdGhpcy5wb25kVG9wO1xuICAgICAgICBjb25zdCByYW5kWCA9IE1hdGgucmFuZG9tKCkgKiAodGhpcy5wb25kUmlnaHQgLSB0aGlzLnBvbmRMZWZ0KSArIHRoaXMucG9uZExlZnQ7IFxuXG4gICAgICAgIHJldHVybiBbcmFuZFgsIHJhbmRZXTtcbiAgICB9XG5cbiAgICBkcmF3UmlwcGxlcyhjdHgpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5yYW5kb21Mb2NhdGlvbigpOyBcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICBwb3NpdGlvblswXSwgcG9zaXRpb25bMV0sIDUwLCAwLCAyICogTWF0aC5QSSwgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyAiXSwibmFtZXMiOlsiR2FtZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJwb25kVG9wIiwicG9uZEJvdCIsInBvbmRMZWZ0IiwicG9uZFJpZ2h0IiwiZHJhdyIsImN0eCIsImRyYXdSaXBwbGVzIiwicmFuZG9tTG9jYXRpb24iLCJyYW5kWSIsIk1hdGgiLCJyYW5kb20iLCJyYW5kWCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwicG9zaXRpb24iLCJhcmMiLCJQSSIsInN0cm9rZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n  constructor(game, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n  }\n  start() {\n    this.lastTime = 0;\n    // start the animation\n    requestAnimationFrame(this.animate.bind(this));\n  }\n  animate(time) {\n    const timeDelta = time - this.lastTime;\n\n    // this.game.step(timeDelta);\n    if (timeDelta > 3000) {\n      this.game.draw(this.ctx);\n      this.lastTime = time;\n    }\n\n    // every call to animate requests causes another call to animate\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFFBQVEsQ0FBQztFQUNYQyxXQUFXQSxDQUFFQyxJQUFJLEVBQUVDLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0QsSUFBSSxHQUFHQSxJQUFJO0VBQ3BCO0VBRUFFLEtBQUtBLENBQUEsRUFBRztJQUNKLElBQUksQ0FBQ0MsUUFBUSxHQUFHLENBQUM7SUFDakI7SUFDQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNsRDtFQUVBRCxPQUFPQSxDQUFDRSxJQUFJLEVBQUU7SUFDVixNQUFNQyxTQUFTLEdBQUdELElBQUksR0FBRyxJQUFJLENBQUNKLFFBQVE7O0lBRXRDO0lBQ0EsSUFBSUssU0FBUyxHQUFHLElBQUksRUFBRTtNQUNsQixJQUFJLENBQUNSLElBQUksQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQ1IsR0FBRyxDQUFDO01BQ3hCLElBQUksQ0FBQ0UsUUFBUSxHQUFHSSxJQUFJO0lBQ3hCOztJQUVBO0lBQ0FILHFCQUFxQixDQUFDLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDbEQ7QUFFSjtBQUVBLCtEQUFlUixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzPzgwZWUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yIChnYW1lLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7IFxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICAgICAgLy8gc3RhcnQgdGhlIGFuaW1hdGlvblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBcbiAgICBhbmltYXRlKHRpbWUpIHtcbiAgICAgICAgY29uc3QgdGltZURlbHRhID0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG5cbiAgICAgICAgLy8gdGhpcy5nYW1lLnN0ZXAodGltZURlbHRhKTtcbiAgICAgICAgaWYgKHRpbWVEZWx0YSA+IDMwMDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXZlcnkgY2FsbCB0byBhbmltYXRlIHJlcXVlc3RzIGNhdXNlcyBhbm90aGVyIGNhbGwgdG8gYW5pbWF0ZVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldzsiXSwibmFtZXMiOlsiR2FtZVZpZXciLCJjb25zdHJ1Y3RvciIsImdhbWUiLCJjdHgiLCJzdGFydCIsImxhc3RUaW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0ZSIsImJpbmQiLCJ0aW1lIiwidGltZURlbHRhIiwiZHJhdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

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