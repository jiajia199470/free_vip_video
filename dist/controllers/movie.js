'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMovieList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Movie = require('../models').Movie;

var _require = require('../crawl/utils/tool'),
    getTotalPageNum = _require.getTotalPageNum;

var getMovieList = exports.getMovieList = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
    var page, pagesize, MovieList;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = data && data.page - 1 || 0;
            pagesize = data && data.pagesize || 20;
            _context.next = 4;
            return Movie.findAndCountAll({
              offset: page * pagesize,
              limit: pagesize
            }).then(function (res) {
              var result = {};
              var pager = {};
              result.list = res.rows;
              pager.pageCount = Math.floor(getTotalPageNum(res.count, pagesize)); // 总页数
              pager.countindex = page + 1; // 当前页
              pager.pageSize = pagesize; // 页数
              result.pager = pager;
              return result;
            });

          case 4:
            MovieList = _context.sent;
            return _context.abrupt('return', JSON.parse((0, _stringify2.default)(MovieList)));

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getMovieList(_x) {
    return _ref.apply(this, arguments);
  };
}();