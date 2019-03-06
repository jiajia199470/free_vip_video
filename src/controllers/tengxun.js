const TvList = require('../models').TvList
const Tv = require('../models').Tv
const Movie = require('../models').Movie

const {getTotalPageNum} = require('../crawl/utils/tool')

export let getMovieList = async function(data) {
  var page = data && data.page || 0;
  var pagesize = data && data.pagesize || 20;
  var MovieList = await Movie.findAll({
    offset: page * pagesize,
    limit: pagesize
  })
  return JSON.parse(JSON.stringify(MovieList))
}

export let getTvs = async function(data) {
  var page = data && data.page || 0;
  var pagesize = data && data.pagesize || 20;
  var Tvs = await TvList.findAll({
    offset: page * pagesize,
    limit: pagesize
  })
  return JSON.parse(JSON.stringify(Tvs))
}

export let createTv = async function (data) { 
  await TvList.create({
    imgUrl: data.imgUrl,
    name: data.name,
    desc: data.desc,
    url: data.url,
    nums: data.num,
    score: data.score,
    roles: data.roles
  });
  return true; // 返回数据
};
export let getTvList = async function(data) {
  const page = data && data.page || 0;
  const page_size =  data && +data.pagesize || 20;
  var tvLists = await TvList.findAndCountAll({
    offset: page * page_size,
    limit: page_size
  }).then((res)=>{
      let result = {};
      var pager = {};
      result.list = res.rows;
      pager.pageCount = Math.floor(getTotalPageNum(res.count,page_size));// 总页数
      pager.countindex = page+1;// 当前页
      pager.pageSize = page_size;// 页数
      result.pager = pager;
      return result;
  });
  return JSON.parse(JSON.stringify(tvLists))
}
export let getTvDetail = async function(data) {
  const tvId = parseInt(data.id) || 1;
  var tvDetail = await Tv.findAll({
    where: {
      tvListId: tvId
    }
  })
  return JSON.parse(JSON.stringify(tvDetail))
  ctx.body = {
    success: true,
    msg: 'ok',
    data: tvDetail
  };
}