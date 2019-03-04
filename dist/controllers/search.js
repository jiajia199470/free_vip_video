'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TvList = require('../models').TvList;
var Movie = require('../models').Movie;

var videoSearch = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
    var searchValue, movieSearchResult, tvSearchResult;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            searchValue = ctx.query.value;

            console.log(searchValue);
            _context.next = 4;
            return Movie.findOne({
              where: {
                name: searchValue
              }
            });

          case 4:
            movieSearchResult = _context.sent;
            _context.next = 7;
            return TvList.findOne({
              where: {
                name: searchValue
              }
            });

          case 7:
            tvSearchResult = _context.sent;

            ctx.body = {
              message: '成功',
              success: true,
              data: {
                tv: tvSearchResult,
                movie: movieSearchResult
              }
            };

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function videoSearch(_x) {
    return _ref.apply(this, arguments);
  };
}();
module.exports = {
  videoSearch: videoSearch
};