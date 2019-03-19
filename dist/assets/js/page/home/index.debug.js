(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function($, window){
  var movieList = []
  var tvList = []
  var isSearch = false
  var Search = {
    init: function() {
      var self = this
      self.eventHandler()
    },
    eventHandler: function() {
      $('#url').keyup(function (e) {
          if(e.keyCode == 13){
              var searchValue = $(this).val();
              location.href = '/page/list/search?value='+searchValue;
          }
      })
      $(document).on('click', '#doplayers', function() {

        var searchValue = $('#url').val()
        location.href = '/page/list/search?value='+searchValue;
        // if(searchValue.match('//')) {
        //   window.location.href = '/page/play/index?url=' + searchValue
        // } else {
        //   $.ajax({
        //     url: '/api/search?value=' + searchValue,
        //     dataType: 'json',
        //     beforeSend: function() {
        //       isSearch = true
        //       $('.fa-search').hide()
        //       $('.fa-spinner').show()
        //     },
        //     success: function(res){
        //       $('.fa-search').show()
        //       $('.fa-spinner').hide()
        //       isSearch = false;
        //       movieList = res.data.movie ? res.data.movie : []
        //       tvList = res.data.tv ? res.data.tv : []
        //     }
        //   })
        // }
      })
    },
    
  }
  Search.init()

})(jQuery, window)
},{}],2:[function(require,module,exports){
require('./components/search.js')
},{"./components/search.js":1}]},{},[2]);
