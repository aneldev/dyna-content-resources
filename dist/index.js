(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("dyna-fetch"), require("jsdom"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-content-resources", ["dyna-fetch", "jsdom"], factory);
	else if(typeof exports === 'object')
		exports["dyna-content-resources"] = factory(require("dyna-fetch"), require("jsdom"));
	else
		root["dyna-content-resources"] = factory(root["dyna-fetch"], root["jsdom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fetchPublishedGoogleDoc_1 = __webpack_require__(1);
exports.fetchPublishedGoogleDoc = fetchPublishedGoogleDoc_1.fetchPublishedGoogleDoc;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var dyna_fetch_1 = __webpack_require__(2);
var jsdom_1 = __webpack_require__(3);
exports.fetchPublishedGoogleDoc = function (publicUrl) {
    return dyna_fetch_1.dynaFetch(publicUrl)
        .then(function (response) { return response.text(); })
        .then(function (htmlText) {
        var dom = new jsdom_1.JSDOM(htmlText);
        var contentElement = dom.window.document.querySelector('#contents');
        if (contentElement) {
            clearContent(contentElement);
            return Promise.resolve(contentElement.innerHTML);
        }
        else {
            return Promise.reject({
                section: "dyna-content-resources/fetchPublishedGoogleDoc",
                code: "1809070950",
                message: "Resource is no longer compatible, #contents cannot be found",
            });
        }
    });
};
var clearContent = function (contentElement) {
    var pElements = [];
    Array(12).fill(null)
        .forEach(function (value, index) {
        pElements = pElements.concat(Array.apply(_this, contentElement.querySelectorAll("p.c" + index)));
    });
    pElements.forEach(function (element) {
        element.style.marginRight = "0";
        element.style.paddingRight = "0";
    });
    var imageElements = Array.apply(_this, contentElement.querySelectorAll('img'));
    imageElements.forEach(function (imageElement) {
        // image
        imageElement.style.height = "";
        imageElement.style.maxWidth = "100%";
        // span
        imageElement.parentElement.style.maxWidth = "100%";
        imageElement.parentElement.style.textIndent = "0";
        imageElement.parentElement.style.height = "";
        // p
        imageElement.parentElement.parentElement.style.textIndent = "0";
    });
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("dyna-fetch");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("jsdom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});