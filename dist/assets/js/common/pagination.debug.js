"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
        }var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];return o(n || r);
        }, p, p.exports, r, e, n, t);
      }return n[i].exports;
    }for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }return o;
  }return r;
})()({ 1: [function (require, module, exports) {
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
          var countindex = myPageCount % myPageSize > 0 ? myPageCount / myPageSize + 1 : myPageCount / myPageSize;
          $('#pagination').jqPaginator({
            totalPages: 2,
            visiblePages: parseInt($("#visiblePages").val()),
            currentPage: 1,
            first: '<li class="first"><a href="javascript:;">首页</a></li>',
            prev: '<li class="prev"><a href="javascript:;"><i class="arrow arrow2"></i>上一页</a></li>',
            next: '<li class="next"><a href="javascript:;">下一页<i class="arrow arrow3"></i></a></li>',
            last: '<li class="last"><a href="javascript:;">末页</a></li>',
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
  }, {}] }, {}, [1]);