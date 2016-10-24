(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("easylogs", [], factory);
	else if(typeof exports === 'object')
		exports["easylogs"] = factory();
	else
		root["easylogs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EasyLogs = function () {
	  function EasyLogs(level) {
	    _classCallCheck(this, EasyLogs);
	
	    // Logging levels:
	    this.LOG = {
	      INFO: 4,
	      DEBUG: 3,
	      WARN: 2,
	      ERROR: 1,
	      DISABLED: 0
	    };
	    this.setLevel(level);
	  }
	
	  _createClass(EasyLogs, [{
	    key: 'getLevel',
	    value: function getLevel() {
	      return this.level;
	    }
	  }, {
	    key: 'setLevel',
	    value: function setLevel() {
	      var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.LOG.INFO;
	
	      if (typeof level !== 'number') {
	        throw new Error('SetLevel method expected a Number as argument but got ' + (typeof level === 'undefined' ? 'undefined' : _typeof(level)) + ' instead');
	      }
	      this.level = level;
	    }
	  }, {
	    key: 'getConsole',
	    value: function getConsole(method) {
	      return console[method] ? console[method] : console.log;
	    }
	  }, {
	    key: 'shouldLog',
	    value: function shouldLog(logLevel) {
	      return this.level > 0 && this.level <= logLevel;
	    }
	  }, {
	    key: 'beautify',
	    value: function beautify(value) {
	      return JSON.stringify(value, null, 2);
	    }
	  }, {
	    key: 'info',
	    value: function info(message) {
	      if (this.shouldLog(this.LOG.INFO)) {
	        var _console = this.getConsole('info');
	        _console('INFO: ' + message);
	      }
	    }
	  }, {
	    key: 'debug',
	    value: function debug(message) {
	      if (this.shouldLog(this.LOG.DEBUG)) {
	        var _console2 = this.getConsole('log'); // Yeah, stupid AF, but for consistency...
	        _console2('DEBUG: ' + message);
	      }
	    }
	  }, {
	    key: 'warn',
	    value: function warn(message) {
	      if (this.shouldLog(this.LOG.WARN)) {
	        var _console3 = this.getConsole('warn');
	        _console3('WARNING: ' + message);
	      }
	    }
	  }, {
	    key: 'error',
	    value: function error(message) {
	      if (this.shouldLog(this.LOG.ERROR)) {
	        var _console4 = this.getConsole('error');
	        _console4('ERROR: ' + message);
	      }
	    }
	  }]);
	
	  return EasyLogs;
	}();
	
	exports.default = EasyLogs;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=easylogs.js.map