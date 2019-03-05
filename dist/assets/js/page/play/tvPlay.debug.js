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
      var baseUrl = 'https://www.myxin.top/jx/api/?url=';
      var videoUrl = $('#vplay').attr('data-src');
      var playUrl = '';
      var $vplay = $('#vplay');
      var Tv = {
        init: function init() {
          var self = this;
          console.log($('.api:first'));
          self.changePort();
          self.videoPlay();
        },
        videoPlay: function videoPlay() {
          $('.api:first').trigger('click');
        },
        changePort: function changePort() {
          $(document).on('click', '.api', function () {
            var me = $(this);
            var uid = me.find('input').attr('id');
            if (+uid === 1) {
              baseUrl = 'https://www.myxin.top/jx/api/?url=';
            } else if (+uid === 2) {
              baseUrl = 'https://jx.wslmf.com/?url=';
            } else if (+uid === 3) {
              baseUrl = 'https://api.bbbbbb.me/jx/?url=';
            }
            $vplay.attr('src', baseUrl + videoUrl);
            $('.api').each(function () {
              $(this).removeClass('active');
            });
            me.addClass('active');
          });
        }
      };
      Tv.init();
    })(window, jQuery);
  }, {}], 2: [function (require, module, exports) {
    require('./components/tvPlayIframe');
  }, { "./components/tvPlayIframe": 1 }] }, {}, [2]);