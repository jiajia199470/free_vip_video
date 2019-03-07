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

	module.exports = __webpack_require__(103);


/***/ }),

/***/ 100:
/***/ (function(module, exports) {

	"use strict";

	(function (window, $) {
	  var pagination = {
	    init: function init() {
	      var self = this;
	      self.loadpage();
	    },
	    exeData: function exeData(num, type) {
	      pagination.loadData(num);
	      pagination.loadpage();
	    },
	    loadData: function loadData(num) {
	      $("#PageCount").val(num);
	    },
	    loadpage: function loadpage() {
	      var myPageCount = parseInt($("#PageCount").val());
	      var myPageSize = parseInt($("#PageSize").val());
	      var countindex = parseInt($('#countindex').val());
	      $('#pagination').jqPaginator({
	        totalPages: myPageCount,
	        visiblePages: parseInt($("#visiblePages").val()),
	        currentPage: countindex,
	        first: '<li class="first"><a href="javascript:;">首页</a></li>',
	        prev: '<li class="prev"><a href="javascript:;"><i class="arrow arrow2"></i>上一页</a></li>',
	        next: '<li class="next"><a href="javascript:;">下一页<i class="arrow arrow3"></i></a></li>',
	        last: '<li class="last"><a href="javascript:;">末页(总' + myPageCount + '页)</a></li>',
	        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
	        onPageChange: function onPageChange(num, type) {
	          // console.log(type + ':' + num)
	          if (type == "change") {
	            pagination.exeData(num, type);
	          }
	        }
	      });
	    }
	  };
	  pagination.init();
	})(window, jQuery);

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(100);

/***/ })

/******/ });