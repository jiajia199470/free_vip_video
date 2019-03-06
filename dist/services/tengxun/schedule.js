'use strict';

var _tengxun = require('../../crawl/movie/tengxun.js');

var _tengxun2 = _interopRequireDefault(_tengxun);

var _tengxun3 = require('../../crawl/tv/tengxun.js');

var _tengxun4 = _interopRequireDefault(_tengxun3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 定时任务
var schedule = require('node-schedule');
// 电影
var movieRule = new schedule.RecurrenceRule();

movieRule.dayOfWeek = [0, new schedule.Range(1, 6)];
//
movieRule.hour = 15;

movieRule.minute = 35;

// 一个星期中的某些天的某个时刻执行:周一到周日的15点执行
var TvListRule = new schedule.RecurrenceRule();

TvListRule.dayOfWeek = [0, new schedule.Range(1, 6)];

TvListRule.hour = 15;

TvListRule.minute = 30;

var TvRule = new schedule.RecurrenceRule();

TvRule.dayOfWeek = [0, new schedule.Range(1, 6)];
//
TvRule.hour = 15;

TvRule.minute = 30;

var l = schedule.scheduleJob(TvRule, function () {
    _tengxun4.default.getTV();
});

var j = schedule.scheduleJob(movieRule, function () {
    _tengxun2.default.getMovie();
});

var k = schedule.scheduleJob(TvListRule, function () {
    _tengxun4.default.getTvList();
});