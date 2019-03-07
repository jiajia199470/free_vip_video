/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(102);


/***/ }),

/***/ 101:
/***/ (function(module, exports) {

	'use strict';

	(function ($, window) {
	  var movieList = [];
	  var tvList = [];
	  var isSearch = false;
	  var Search = {
	    init: function init() {
	      var self = this;
	      self.eventHandler();
	    },
	    eventHandler: function eventHandler() {
	      $(document).on('click', '#doplayers', function () {
	        var searchValue = $('#url').val();
	        if (searchValue.match('//')) {
	          window.location.href = '/page/play/index?url=' + searchValue;
	        } else {
	          $.ajax({
	            url: '/api/search?value=' + searchValue,
	            dataType: 'json',
	            beforeSend: function beforeSend() {
	              isSearch = true;
	              $('.fa-search').hide();
	              $('.fa-spinner').show();
	            },
	            success: function success(res) {
	              $('.fa-search').show();
	              $('.fa-spinner').hide();
	              isSearch = false;
	              movieList = res.data.movie ? res.data.movie : [];
	              tvList = res.data.tv ? res.data.tv : [];
	            }
	          });
	        }
	      });
	    }

	  };
	  Search.init();
	})(jQuery, window);

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(101);

/***/ })

/******/ });