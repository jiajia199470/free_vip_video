'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _config = require('../config.js');

var _config2 = _interopRequireDefault(_config);

var _tool = require('../utils/tool.js');

var _tvlist = require('../../services/tengxun/tvlist');

var _tvlist2 = _interopRequireDefault(_tvlist);

var _index = require('../../controllers/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var models = require('../../models');
var Tv = require('../../models').Tv;
var async = require('async');
var cheerio = require('cheerio');
var rp = require('request-promise');
var offset = 0;
var allPage = 30;
var charge = 1; //腾讯会员包月vip
var lists = [];
var isEnd = false;
var getTvList = function getTvList() {
  var options = {
    uri: _config2.default.tengxun.tv + '&offset=' + offset,
    headers: _config2.default.headers,
    transform: function transform(body) {
      return cheerio.load(body);
    }
  };
  if (isEnd) {
    return;
  }
  rp(options).then(function ($) {
    var $figures_list = $('.figures_list');
    var list = $figures_list.find('.list_item');
    allPage = $('._items').find('a').eq(-1).text();
    isEnd = !$figures_list.length;
    list.each(function () {
      var $item = $(this);
      var roles = [];
      $item.find('.figure_desc').find('a').each(function () {
        var me = $(this);
        roles.push(me.text());
      });
      _tvlist2.default.createTv({
        url: $item.find('.figure').attr('href'),
        name: $item.find('.figure').find('img').eq(0).attr('alt'),
        imgUrl: $item.find('.figure').find('img').eq(0).attr('r-lazyload'),
        nums: $item.find('.figure_info').text(),
        score: $item.find('.score_l').text() + $item.find('.score_s').text(),
        desc: $item.find('.figure_info').text(),
        roles: roles.join(',')
      }).catch(function () {});
    });
    offset = offset + 30;
    (0, _tool.sleep)(1000);
    getTvList();
    return null;
  }).catch(function (e) {
    console.log(e);
  });
};

// https://v.qq.com/detail/b/brq7blajvjhrcit.html 从详情页获取全部视频 \/([\w]+)\.html 匹配/brq7blajvjhrcit.html
var getTvDetail = function getTvDetail(item, callback) {
  var options = {
    uri: _config2.default.tengxun.tvDetail + item.url.match(/\/([\w]+)\.html/)[0],
    headers: _config2.default.headers,
    transform: function transform(body) {
      return cheerio.load(body);
    }
  };
  rp(options).then(function ($) {
    var $scroll_wrap = $('._playsrc_series');
    var title = $('.video_title_cn').find('a').text();
    var list = $scroll_wrap.find('.mod_episode').find('.item');
    list.each(function () {
      var $item = $(this);
      var roles = [];

      Tv.findOne({ //还有find、findAll等方法
        where: {
          tvListId: item.id, //查询条件
          content: $item.find('a span').text().trim()
        }
      }).then(function (result) {
        console.log(result); //空时为null

        var data = {
          tvListId: +item.id,
          title: title,
          url: $item.find('a').attr('href'),
          content: $item.find('a span').text().trim()
        };

        if (result) {
          // 更新数据
          console.log('更新数据更新数据更新数据更新数据更新数据更新数据更新数据更新数据');
          _tvlist2.default.updateTvDetail(data);
        } else {
          _tvlist2.default.createTvDetail(data).catch(function () {});
        }
      });
    });
    callback(null, 'successful');
    return null;
  }).catch(function (e) {
    console.log(e);
  });
};
var getTV = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
    var tvLists, searchResult;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return models.TvList.findOne({
              where: {
                id: 4
              }
            });

          case 2:
            tvLists = _context.sent;
            searchResult = [];

            searchResult.push(tvLists.dataValues);

            if (!searchResult.length) {
              _context.next = 10;
              break;
            }

            // 使用async控制异步抓取   
            // mapLimit(arr, limit, iterator, [callback])
            async.mapLimit(searchResult, 1, function (item, callback) {
              (0, _tool.sleep)(1000);
              getTvDetail(item, callback);
            }, function (err, result) {
              if (err) {
                console.log(err);
              } else {
                console.log(result);
              }
            });
            getTV({
              page: page += 1,
              pagesize: 20
            });
            _context.next = 11;
            break;

          case 10:
            return _context.abrupt('return', false);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getTV(_x) {
    return _ref.apply(this, arguments);
  };
}();
module.exports = {
  getTvList: getTvList,
  getTV: getTV
};