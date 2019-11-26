/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Controller = /** @class */ (function () {\r\n    function Controller() {\r\n        this.listeners = [];\r\n        this.events();\r\n    }\r\n    Controller.prototype.addListener = function (listener) {\r\n        this.listeners.push(listener);\r\n    };\r\n    Controller.prototype.events = function () {\r\n        var _this = this;\r\n        window.addEventListener('keydown', function (event) {\r\n            switch (event.code) {\r\n                case 'ArrowUp': {\r\n                    _this.listeners.forEach(function (listener) { return listener.up(); });\r\n                    break;\r\n                }\r\n                case 'ArrowRight': {\r\n                    _this.listeners.forEach(function (listener) { return listener.right(); });\r\n                    break;\r\n                }\r\n                case 'ArrowDown': {\r\n                    _this.listeners.forEach(function (listener) { return listener.down(); });\r\n                    break;\r\n                }\r\n                case 'ArrowLeft': {\r\n                    _this.listeners.forEach(function (listener) { return listener.left(); });\r\n                    break;\r\n                }\r\n                case 'Space': {\r\n                    _this.listeners.forEach(function (listener) {\r\n                        if (listener.gameover) {\r\n                            listener.restart();\r\n                        }\r\n                        else if (listener.gamePaused) {\r\n                            listener.resume();\r\n                        }\r\n                        else {\r\n                            listener.pause();\r\n                        }\r\n                    });\r\n                    break;\r\n                }\r\n                default:\r\n                    break;\r\n            }\r\n        });\r\n    };\r\n    return Controller;\r\n}());\r\nexports.default = Controller;\r\n\n\n//# sourceURL=webpack:///./src/controller.ts?");

/***/ }),

/***/ "./src/food.ts":
/*!*********************!*\
  !*** ./src/food.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar node_1 = __webpack_require__(/*! ./node */ \"./src/node.ts\");\r\nvar Food = /** @class */ (function (_super) {\r\n    __extends(Food, _super);\r\n    function Food(game) {\r\n        var _this = _super.call(this) || this;\r\n        _this.game = game;\r\n        _this.new();\r\n        return _this;\r\n    }\r\n    Food.prototype.new = function () {\r\n        var _a = this.newPosition(), x = _a.x, y = _a.y;\r\n        this.x = x;\r\n        this.y = y;\r\n    };\r\n    Food.prototype.newPosition = function () {\r\n        var _this = this;\r\n        var blanks = this.game.size * this.game.size - this.game.snake.body.length;\r\n        var index = Math.floor(Math.random() * blanks);\r\n        var gridArr = Array.from(new Array(this.game.size), function () { return Array.from(new Array(_this.game.size), function () { return 0; }); });\r\n        this.game.snake.body.forEach(function (node) {\r\n            gridArr[node.y][node.x] = 1;\r\n        });\r\n        var i, j;\r\n        for (i = 0; i < this.game.size; i++) {\r\n            for (j = 0; j < this.game.size; j++) {\r\n                if (gridArr[i][j] === 0) {\r\n                    index--;\r\n                    if (index === 0) {\r\n                        return { x: j, y: i };\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    };\r\n    return Food;\r\n}(node_1.default));\r\nexports.default = Food;\r\n\n\n//# sourceURL=webpack:///./src/food.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar snake_1 = __webpack_require__(/*! ./snake */ \"./src/snake.ts\");\r\nvar food_1 = __webpack_require__(/*! ./food */ \"./src/food.ts\");\r\nvar grid_1 = __webpack_require__(/*! ./grid */ \"./src/grid.ts\");\r\nvar Game = /** @class */ (function () {\r\n    function Game(size) {\r\n        if (size === void 0) { size = 32; }\r\n        this.size = size;\r\n        this.nodeSize = 10;\r\n        this.snake = new snake_1.default();\r\n        this.food = new food_1.default(this);\r\n        this.grid = new grid_1.default(this);\r\n        this.gameover = false;\r\n        this.gamePaused = false;\r\n        this.tick = null;\r\n        this.speed = 200;\r\n        this.start();\r\n    }\r\n    // Update scenes to next tick\r\n    Game.prototype.update = function () {\r\n        var nextPosition = this.snake.nextPosition(); // The position of snake head on the next tick\r\n        // Wall impact checking\r\n        if (nextPosition.x < 0\r\n            || nextPosition.x > this.size - 1\r\n            || nextPosition.y < 0\r\n            || nextPosition.y > this.size - 1) {\r\n            this.stop();\r\n            return;\r\n        }\r\n        // Self impact checking\r\n        if (this.snake.body.length > 4) {\r\n            for (var i = 4; i < this.snake.body.length; i++) {\r\n                var node = this.snake.body[i];\r\n                if (nextPosition.x === node.x && nextPosition.y === node.y) {\r\n                    this.stop();\r\n                    return;\r\n                }\r\n            }\r\n        }\r\n        // Food impact detecting\r\n        if (nextPosition.x === this.food.x && nextPosition.y === this.food.y) {\r\n            this.snake.eat(this.food);\r\n            this.food.new();\r\n        }\r\n        // update snake position for each node\r\n        this.snake.update();\r\n        // render all\r\n        this.grid.render();\r\n    };\r\n    // Add controller for game\r\n    Game.prototype.addController = function (controller) {\r\n        controller.addListener(this);\r\n    };\r\n    // Start game\r\n    Game.prototype.start = function () {\r\n        var _this = this;\r\n        this.grid.render();\r\n        this.tick = setInterval(function () {\r\n            _this.update();\r\n        }, this.speed);\r\n    };\r\n    // Game over\r\n    Game.prototype.stop = function () {\r\n        clearInterval(this.tick);\r\n        this.gameover = true;\r\n    };\r\n    // Pause game\r\n    Game.prototype.pause = function () {\r\n        this.gamePaused = true;\r\n        clearInterval(this.tick);\r\n    };\r\n    // Resume game\r\n    Game.prototype.resume = function () {\r\n        var _this = this;\r\n        this.gamePaused = false;\r\n        this.tick = setInterval(function () {\r\n            _this.update();\r\n        }, this.speed);\r\n    };\r\n    // Restart game\r\n    Game.prototype.restart = function () {\r\n        clearInterval(this.tick);\r\n        this.snake = new snake_1.default();\r\n        this.food = new food_1.default(this);\r\n        this.grid = new grid_1.default(this);\r\n        this.gameover = false;\r\n        this.start();\r\n    };\r\n    Game.prototype.up = function () {\r\n        this.snake.up();\r\n    };\r\n    Game.prototype.right = function () {\r\n        this.snake.right();\r\n    };\r\n    Game.prototype.down = function () {\r\n        this.snake.down();\r\n    };\r\n    Game.prototype.left = function () {\r\n        this.snake.left();\r\n    };\r\n    return Game;\r\n}());\r\nexports.default = Game;\r\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/grid.ts":
/*!*********************!*\
  !*** ./src/grid.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Grid = /** @class */ (function () {\r\n    function Grid(game) {\r\n        this.game = game;\r\n        this.canvas = document.body.querySelector(\"#container\");\r\n        this.canvas.height = this.game.size * this.game.nodeSize;\r\n        this.canvas.width = this.game.size * this.game.nodeSize;\r\n        this.ctx = this.canvas.getContext('2d');\r\n        this.clear();\r\n    }\r\n    Grid.prototype.render = function () {\r\n        this.clear();\r\n        this.renderSnake();\r\n        this.renderFood();\r\n    };\r\n    Grid.prototype.clear = function () {\r\n        var ctx = this.ctx;\r\n        ctx.save();\r\n        ctx.fillStyle = '#FFFFFF';\r\n        ctx.fillRect(0, 0, this.game.size * this.game.nodeSize, this.game.size * this.game.nodeSize);\r\n        ctx.restore();\r\n    };\r\n    Grid.prototype.renderSnake = function () {\r\n        var ctx = this.ctx;\r\n        ctx.save();\r\n        ctx.fillStyle = '#000000';\r\n        for (var _i = 0, _a = this.game.snake.body; _i < _a.length; _i++) {\r\n            var node = _a[_i];\r\n            ctx.fillRect(node.x * this.game.nodeSize, node.y * this.game.nodeSize, this.game.nodeSize, this.game.nodeSize);\r\n        }\r\n        ctx.restore();\r\n    };\r\n    Grid.prototype.renderFood = function () {\r\n        var food = this.game.food;\r\n        var ctx = this.ctx;\r\n        ctx.save();\r\n        ctx.fillStyle = '#000000';\r\n        ctx.fillRect(food.x * this.game.nodeSize, food.y * this.game.nodeSize, this.game.nodeSize, this.game.nodeSize);\r\n        ctx.restore();\r\n    };\r\n    return Grid;\r\n}());\r\nexports.default = Grid;\r\n\n\n//# sourceURL=webpack:///./src/grid.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar controller_1 = __webpack_require__(/*! ./controller */ \"./src/controller.ts\");\r\nvar game_1 = __webpack_require__(/*! ./game */ \"./src/game.ts\");\r\nvar controller = new controller_1.default();\r\nvar game = new game_1.default();\r\ngame.addController(controller);\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/node.ts":
/*!*********************!*\
  !*** ./src/node.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Node = /** @class */ (function () {\r\n    function Node(x, y) {\r\n        if (x === void 0) { x = 0; }\r\n        if (y === void 0) { y = 0; }\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    return Node;\r\n}());\r\nexports.default = Node;\r\n\n\n//# sourceURL=webpack:///./src/node.ts?");

/***/ }),

/***/ "./src/snake.ts":
/*!**********************!*\
  !*** ./src/snake.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar node_1 = __webpack_require__(/*! ./node */ \"./src/node.ts\");\r\nvar Direction;\r\n(function (Direction) {\r\n    Direction[Direction[\"Up\"] = 0] = \"Up\";\r\n    Direction[Direction[\"Right\"] = 1] = \"Right\";\r\n    Direction[Direction[\"Down\"] = 2] = \"Down\";\r\n    Direction[Direction[\"Left\"] = 3] = \"Left\";\r\n})(Direction || (Direction = {}));\r\nvar Snake = /** @class */ (function () {\r\n    function Snake() {\r\n        this.body = [];\r\n        this.direction = Direction.Right;\r\n        this.nextDirection = this.direction;\r\n        this.born();\r\n    }\r\n    Snake.prototype.born = function () {\r\n        var headX = 4;\r\n        var headY = 4;\r\n        this.body.push(new node_1.default(headX, headY));\r\n        for (var i = 0; i < 2; i++) {\r\n            var _a = this.d(this.direction >= 2 ? this.direction - 2 : this.direction + 2), dx = _a[0], dy = _a[1];\r\n            headX += dx;\r\n            headY += dy;\r\n            this.body.push(new node_1.default(headX, headY));\r\n        }\r\n    };\r\n    Snake.prototype.nextPosition = function () {\r\n        var _a = this.d(this.nextDirection), dx = _a[0], dy = _a[1];\r\n        var head = this.body[0];\r\n        return {\r\n            x: head.x + dx,\r\n            y: head.y + dy,\r\n        };\r\n    };\r\n    Snake.prototype.eat = function (food) {\r\n        this.body.unshift(new node_1.default(food.x, food.y));\r\n    };\r\n    Snake.prototype.setDirection = function (direction) {\r\n        if (direction !== (this.direction >= 2 ? this.direction - 2 : this.direction + 2)) {\r\n            this.nextDirection = direction;\r\n        }\r\n    };\r\n    Snake.prototype.d = function (direction) {\r\n        if (direction === Direction.Up) {\r\n            return [0, -1];\r\n        }\r\n        ;\r\n        if (direction === Direction.Right) {\r\n            return [1, 0];\r\n        }\r\n        ;\r\n        if (direction === Direction.Down) {\r\n            return [0, 1];\r\n        }\r\n        ;\r\n        return [-1, 0];\r\n    };\r\n    Snake.prototype.up = function () {\r\n        this.setDirection(Direction.Up);\r\n    };\r\n    Snake.prototype.right = function () {\r\n        this.setDirection(Direction.Right);\r\n    };\r\n    Snake.prototype.down = function () {\r\n        this.setDirection(Direction.Down);\r\n    };\r\n    Snake.prototype.left = function () {\r\n        this.setDirection(Direction.Left);\r\n    };\r\n    Snake.prototype.update = function () {\r\n        this.direction = this.nextDirection;\r\n        var _a = this.d(this.direction), dx = _a[0], dy = _a[1];\r\n        for (var i = this.body.length - 1; i >= 0; i--) {\r\n            var node = this.body[i];\r\n            if (i === 0) {\r\n                node.x += dx;\r\n                node.y += dy;\r\n            }\r\n            else {\r\n                node.x = this.body[i - 1].x;\r\n                node.y = this.body[i - 1].y;\r\n            }\r\n        }\r\n    };\r\n    return Snake;\r\n}());\r\nexports.default = Snake;\r\n\n\n//# sourceURL=webpack:///./src/snake.ts?");

/***/ })

/******/ });