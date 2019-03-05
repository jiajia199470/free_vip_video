// 定时任务
import MovieencentCrawl from '../../crawl/movie/tengxun.js';
import tvTencentCrawl from '../../crawl/tv/tengxun.js';

var schedule = require('node-schedule');
// 电影
var movieRule = new schedule.RecurrenceRule();

movieRule.dayOfWeek = [0, new schedule.Range(1, 6)];

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

    tvTencentCrawl.getTV();
});

var j = schedule.scheduleJob(movieRule, function () {
    MovieencentCrawl.getMovie();
});

var k = schedule.scheduleJob(TvListRule, function () {
    tvTencentCrawl.getTvList();
});