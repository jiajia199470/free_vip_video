const Movie = require('../models').Movie
const {getTotalPageNum} = require('../crawl/utils/tool');

export let getMovieList = async function(data) {
  var page = data &&( data.page -1)|| 0;
  var pagesize = data && data.pagesize || 20;
  var MovieList = await Movie.findAndCountAll({
    offset: page * pagesize,
    limit: pagesize
  }).then((res)=>{
      let result = {};
      var pager = {};
      result.list = res.rows;
      pager.pageCount = Math.floor(getTotalPageNum(res.count,pagesize));// 总页数
      pager.countindex = page+1;// 当前页
      pager.pageSize = pagesize;// 页数
      result.pager = pager;
      return result;
  });

  return JSON.parse(JSON.stringify(MovieList))
}
