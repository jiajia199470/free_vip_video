'use strict';

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _index = require('../controllers/index.js');

var _index2 = _interopRequireDefault(_index);

var _jscssHandler = require('./jscss-handler');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV || 'development';

var router = new _koaRouter2.default();

router.get('/', function (ctx, next) {
  ctx.redirect('/page/home/index');
}).get('/public/get', function (ctx, next) {
  ctx.body = '禁止访问！';
}) // 以/public开头则不用经过权限认证
.all('/upload', _index2.default.upload.default).get('/page/home/index', function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _promise2.default.all([_index2.default.tengxun.getMovieList(), _index2.default.tengxun.getTvs()]).then(function (res) {
              var movie = res[0];
              var tv = res[1];
              ctx.render('page/home/index', {
                title: '首页',
                movie: movie && movie.length ? movie.slice(0, 6) : [],
                tv: tv && tv.length ? tv.slice(0, 6) : []
              });
            });

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()).get('/page/play/index', function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx, next) {
    var url, title;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = ctx.query.url;
            title = ctx.query.title;


            ctx.render('page/play/commonPlay', (0, _defineProperty3.default)({
              title: '播放页',
              url: url
            }, 'title', title));

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()).get('/page/play/tv', function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(ctx, next) {
    var url, title, id, tv;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = ctx.query.url;
            title = ctx.query.title;
            id = ctx.query.id;
            _context3.next = 5;
            return _index2.default.tengxun.getTvDetail({ id: id });

          case 5:
            tv = _context3.sent;

            ctx.render('page/play/tvPlay', {
              url: url,
              title: title ? title : '播放页',
              tv: tv
            });

          case 7:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}()).get('/movie/list', function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(ctx, next) {
    var _ref5, list, pager;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _index2.default.movie.getMovieList();

          case 2:
            _ref5 = _context4.sent;
            list = _ref5.list;
            pager = _ref5.pager;

            ctx.render('page/list/index', {
              title: '电影列表',
              type: 1,
              lists: list,
              params: pager
            });

          case 6:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}()).get('/tv/list', function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(ctx, next) {
    var _ref7, list, pager;

    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _index2.default.tengxun.getTvList();

          case 2:
            _ref7 = _context5.sent;
            list = _ref7.list;
            pager = _ref7.pager;

            ctx.render('page/list/index', {
              title: '电视剧列表',
              type: 2,
              lists: list,
              params: pager
            });

          case 6:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function (_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}()).get('/page/list/:type', function () {
  var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(ctx, next) {
    var type, page, pagesize, lists, params;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            type = ctx.query.type;
            page = ctx.query.page || 0;
            pagesize = ctx.query.pagesize || 20;
            lists = [];
            params = { page: page, pagesize: pagesize };

            if (!(type === 1)) {
              _context6.next = 11;
              break;
            }

            _context6.next = 8;
            return _index2.default.movie.getMovieList(params);

          case 8:
            lists = _context6.sent;
            _context6.next = 14;
            break;

          case 11:
            _context6.next = 13;
            return _index2.default.tengxun.getTvList(params);

          case 13:
            lists = _context6.sent;

          case 14:
            ctx.render('page/list/index', {
              title: '列表页',
              type: type,
              list: lists,
              params: {
                pageCount: '',
                pageSize: '',
                countindex: ''
              }
            });

          case 15:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  }));

  return function (_x11, _x12) {
    return _ref8.apply(this, arguments);
  };
}()).get('/api/tv/tvlist', _index2.default.tengxun.getTvList) // 获取电视剧列表
.get('/api/tv/detail/:id', _index2.default.tengxun.getTvDetail) // 获取电视剧详情
.get('/api/tv/detail/:id', _index2.default.tengxun.getTvDetail) // 获取电视剧详情
.get('/api/search', _index2.default.search.videoSearch); //


if (env === 'development') {
  router.get('/assets/js/**/*.js', function (ctx, next) {
    _jscssHandler.handleJs.do(ctx, next);
  }).get('/assets/less/**/*.less', function (ctx, next) {
    _jscssHandler.handleLess.do(ctx, next);
  });
}

module.exports = router;