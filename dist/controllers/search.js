'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TvList = require('../models').TvList;
var Movie = require('../models').Movie;
var Sequelize = require('sequelize');
var Op = Sequelize.Op;

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

var getVideo = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx) {
        var searchValue, movieSearchResult, tvSearchResult, data;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        searchValue = ctx.query.value;
                        _context2.next = 3;
                        return Movie.findOne({
                            where: {
                                // name: searchValue
                                name: (0, _defineProperty3.default)({}, Op.like, '%' + searchValue + '%') // 模糊搜索
                            }
                        });

                    case 3:
                        movieSearchResult = _context2.sent;
                        _context2.next = 6;
                        return TvList.findOne({
                            where: {
                                name: (0, _defineProperty3.default)({}, Op.like, '%' + searchValue + '%') // 模糊搜索
                            }
                        });

                    case 6:
                        tvSearchResult = _context2.sent;
                        data = [];

                        if (tvSearchResult) {
                            data.push({
                                list: tvSearchResult ? [tvSearchResult] : [],
                                type: 2
                            });
                        }
                        if (movieSearchResult) {
                            data.push({
                                list: movieSearchResult ? [movieSearchResult] : [],
                                type: 1
                            });
                        }

                        return _context2.abrupt('return', JSON.parse((0, _stringify2.default)(data)));

                    case 11:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function getVideo(_x2) {
        return _ref2.apply(this, arguments);
    };
}();
module.exports = {
    videoSearch: videoSearch,
    getVideo: getVideo
};