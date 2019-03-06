import config from '../config.js'
import {sleep} from '../utils/tool.js'
import Tvlist from '../../services/tengxun/tvlist'
import controllers from '../../controllers/index.js'
const models = require('../../models')
const async = require('async')
var cheerio = require('cheerio')
var rp = require('request-promise')
var offset = 0
var allPage = 30;
var charge = 1;//腾讯会员包月vip
var lists = []
var isEnd = false
const getTvList = function() {
  var options = {
    uri: config.tengxun.tv + '&offset=' + offset,
    headers: config.headers,
    transform: function (body) {
      return cheerio.load(body)
    }
  }
  if(isEnd) {
    return;
  }
  rp(options).then(function ($) {
    var $figures_list = $('.figures_list')
    var list = $figures_list.find('.list_item')
    allPage = $('._items').find('a').eq(-1).text()
    isEnd = !$figures_list.length
    list.each(function() {
      let $item = $(this)
      var roles = []
      $item.find('.figure_desc').find('a').each(function() {
        var me = $(this);
        roles.push(me.text())
      })
      Tvlist.createTv({
        url: $item.find('.figure').attr('href'),
        name: $item.find('.figure').find('img').eq(0).attr('alt'),
        imgUrl: $item.find('.figure').find('img').eq(0).attr('r-lazyload'),
        nums:$item.find('.figure_info').text(),
        score:$item.find('.score_l').text() + $item.find('.score_s').text(),
        desc: $item.find('.figure_info').text(),
        roles: roles.join(',')
      }).catch(() => { })
    })
    offset = offset + 30;
    sleep(1000)
    getTvList()
    return null;
  }).catch(function (e) {
    console.log(e)
  })
}

// https://v.qq.com/detail/b/brq7blajvjhrcit.html 从详情页获取全部视频 \/([\w]+)\.html 匹配/brq7blajvjhrcit.html
const getTvDetail = function (item, callback) {
    var options = {
        uri: config.tengxun.tvDetail+item.url.match(/\/([\w]+)\.html/)[0],
        headers: config.headers,
        transform: function (body) {
            return cheerio.load(body)
        }
    }
    rp(options).then(function ($) {
        var $scroll_wrap = $('._playsrc_series')
        const title = $('.video_title_cn').find('a').text()
        var list = $scroll_wrap.find('.mod_episode').find('.item')
        list.each(function() {
            let $item = $(this)
            var roles = []
            Tvlist.createTvDetail({
                tvListId: +item.id,
                title: title,
                url: $item.find('a').attr('href'),
                content: $item.find('a span').text().trim(),
            }).catch(() => { })
        })
        callback(null, 'successful')
        return null;
    }).catch(function (e) {
        console.log(e)
    })
}
const getTV = async function(data) {
  var page = data && data.page || 0;
  var pagesize = data && data.pagesize || 20;
  var tvLists = await models.TvList.findAll({
    offset: page*pagesize,
    limit: pagesize
  })
  var searchResult = JSON.parse(JSON.stringify(tvLists))

   /*
   //更新特定一部电视剧的全集
   var tvLists = await  models.TvList.findOne({
        where: {
            id: 4
        }
    });
    var searchResult =[];
    searchResult.push(tvLists.dataValues);*/

  if(searchResult.length) {
    // 使用async控制异步抓取   
    // mapLimit(arr, limit, iterator, [callback])
    async.mapLimit(searchResult, 1, function (item, callback) {
      sleep(1000)
      getTvDetail(item, callback);
    }, function (err, result) {
      if(err) {
        console.log(err)
      } else {
        console.log(result)
      }
    });
    getTV({
      page: page +=1,
      pagesize: 20
    })
  } else {
    return false;
  }
}
module.exports = {
  getTvList,
  getTV
}
