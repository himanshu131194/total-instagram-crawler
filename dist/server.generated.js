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

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_InstagramCrawler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/InstagramCrawler */ \"./server/src/InstagramCrawler.js\");\n\nvar instagram = new _src_InstagramCrawler__WEBPACK_IMPORTED_MODULE_0__.default();\ninstagram.auth('naptunesailor', 'naptune123#sailor').then(function (user) {\n  console.log(user);\n})[\"catch\"](function (error) {\n  return console.error(error);\n});\n\n//# sourceURL=webpack://dev/./server/server.js?");

/***/ }),

/***/ "./server/src/ApiRoutes.js":
/*!*********************************!*\
  !*** ./server/src/ApiRoutes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar baseUrl = 'instagram.com';\nvar host = 'https://' + baseUrl + '/';\nvar routes = {\n  home: '',\n  login: 'accounts/login/ajax/',\n  graphql: 'graphql/query/',\n  exploreTag: 'explore/tags/'\n};\n\nvar _default = /*#__PURE__*/function () {\n  function _default() {\n    _classCallCheck(this, _default);\n  }\n\n  _createClass(_default, null, [{\n    key: \"get\",\n    value: function get(route) {\n      if (!route in routes) {\n        throw \"Route \".concat(route, \" doesn't exist!\");\n      }\n\n      return host + routes[route];\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack://dev/./server/src/ApiRoutes.js?");

/***/ }),

/***/ "./server/src/InstagramAuth.js":
/*!*************************************!*\
  !*** ./server/src/InstagramAuth.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\n/* harmony import */ var set_cookie_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! set-cookie-parser */ \"set-cookie-parser\");\n/* harmony import */ var set_cookie_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(set_cookie_parser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! querystring */ \"querystring\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ApiRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ApiRoutes */ \"./server/src/ApiRoutes.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default(username, password) {\n    _classCallCheck(this, _default);\n\n    this.credentials = {\n      username: username,\n      password: password\n    };\n    this.cookies = {\n      username: username\n    };\n    this.baseHeaders = {\n      'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13E238 Instagram 10.28.0 (iPhone6,1; iPhone OS 9_3_1; en_US; en; scale=2.00; gamut=normal; 640x1136)',\n      'origin': 'https://www.instagram.com',\n      'referer': 'https://www.instagram.com/'\n    };\n  }\n\n  _createClass(_default, [{\n    key: \"login\",\n    value: function login() {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        _this.getCsrfToken().then(function (token) {\n          _this.cookies.csrftoken = token;\n          return _this.getSessionId();\n        }).then(function (sessionId) {\n          _this.cookies.sessionid = sessionId;\n          return _this.saveCookies();\n        }).then(function () {\n          resolve({\n            cookies: _this.cookies\n          });\n        })[\"catch\"](function (error) {\n          return reject(error);\n        });\n      });\n    }\n  }, {\n    key: \"getCsrfToken\",\n    value: function getCsrfToken() {\n      var _this2 = this;\n\n      return new Promise(function (resolve, reject) {\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(_ApiRoutes__WEBPACK_IMPORTED_MODULE_4__.default.get('home'), _this2.config).then(function (response) {\n          var cookies = set_cookie_parser__WEBPACK_IMPORTED_MODULE_0___default().parse(response);\n          var token = cookies.find(function (cookie) {\n            return cookie.name === 'csrftoken';\n          }).value;\n          resolve(token);\n        })[\"catch\"](function (error) {\n          return reject(error);\n        });\n      });\n    }\n  }, {\n    key: \"getSessionId\",\n    value: function getSessionId() {\n      var _this3 = this;\n\n      var config = {\n        headers: Object.assign({\n          'cookie': 'csrftoken=' + this.cookies.csrftoken + ';ig_pr=2;rur=ATN;',\n          'x-csrftoken': this.cookies.csrftoken,\n          'x-instagram-ajax': '1',\n          'x-requested-with': 'XMLHttpRequest',\n          'content-type': 'application/x-www-form-urlencoded'\n        }, this.baseHeaders)\n      };\n      return new Promise(function (resolve, reject) {\n        axios__WEBPACK_IMPORTED_MODULE_1___default().post(_ApiRoutes__WEBPACK_IMPORTED_MODULE_4__.default.get('login'), querystring__WEBPACK_IMPORTED_MODULE_2___default().stringify(_this3.credentials), config).then(function (response) {\n          _this3.cookies.userid = response.data.userId;\n          var cookies = set_cookie_parser__WEBPACK_IMPORTED_MODULE_0___default().parse(response);\n          var sessionId = cookies.find(function (cookie) {\n            return cookie.name === 'sessionid';\n          }).value;\n          resolve(sessionId);\n        })[\"catch\"](function (error) {\n          return reject(error);\n        });\n      });\n    }\n  }, {\n    key: \"saveCookies\",\n    value: function saveCookies() {\n      var filePath = __dirname + '/../cookies.json';\n      var content = JSON.stringify(this.cookies);\n      return new Promise(function (resolve, reject) {\n        fs__WEBPACK_IMPORTED_MODULE_3___default().writeFile(filePath, content, {\n          flag: 'w'\n        }, function (error) {\n          if (error) {\n            reject(error);\n          }\n\n          resolve();\n        });\n      });\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack://dev/./server/src/InstagramAuth.js?");

/***/ }),

/***/ "./server/src/InstagramCrawler.js":
/*!****************************************!*\
  !*** ./server/src/InstagramCrawler.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\n/* harmony import */ var _InstagramAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InstagramAuth */ \"./server/src/InstagramAuth.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n // import ProfileData from './ProfileData'\n\nvar _default = /*#__PURE__*/function () {\n  function _default() {\n    _classCallCheck(this, _default);\n  }\n\n  _createClass(_default, [{\n    key: \"auth\",\n    value: function auth(username, password) {\n      var _this = this;\n\n      this.auth = new _InstagramAuth__WEBPACK_IMPORTED_MODULE_0__.default(username, password);\n      return this.auth.login().then(function (session) {\n        return _this.session = session;\n      });\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack://dev/./server/src/InstagramCrawler.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");;

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("babel-polyfill");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");;

/***/ }),

/***/ "set-cookie-parser":
/*!************************************!*\
  !*** external "set-cookie-parser" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("set-cookie-parser");;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	__webpack_require__("babel-polyfill");
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;