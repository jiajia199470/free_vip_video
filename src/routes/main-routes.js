import KoaRouter from 'koa-router'

import controllers from '../controllers/index.js'

import { handleLess, handleJs } from './jscss-handler'
var env = process.env.NODE_ENV || 'development'

const router = new KoaRouter()

router
  .get('/', (ctx, next) => {
    ctx.redirect('/page/home/index')
  })
  .get('/public/get', function (ctx, next) {
    ctx.body = '禁止访问！'
  }) // 以/public开头则不用经过权限认证
  .all('/upload', controllers.upload.default)
  .get('/page/home/index', async (ctx, next) => {
    await Promise.all([controllers.tengxun.getMovieList(), controllers.tengxun.getTvs()]).then(function(res) {
      var movie = res[0]
      var tv = res[1]
      ctx.render('page/home/index', {
        title: '首页',
        movie: movie && movie.length ? movie.slice(0, 6) : [],
        tv: tv && tv.length ? tv.slice(0, 6) : []
      })
    })
  })
  .get('/page/play/index', async (ctx, next) => {
    var url = ctx.query.url;
    var title = ctx.query.title;

    ctx.render('page/play/commonPlay', {
      title: '播放页' || title,
      url: url,
      type:4,
    })
  })
  .get('/page/play/tv', async (ctx, next) => {
    var url = ctx.query.url;
    var title = ctx.query.title;
    var id = ctx.query.id;
    var tv = await controllers.tengxun.getTvDetail({id: id})
    ctx.render('page/play/tvPlay', {
      url: url,
      title: title?title:'播放页',
      tv: tv
    })
  })
    .get('/page/list/search', async (ctx, next)=>{
        var  title ='search';
        var lists = await controllers.search.getVideo(ctx);
        ctx.render('page/list/searchResult', {
            title: title,
            lists:lists,
            key:ctx.query.value
        })
    })
    .get('/movie/list', async (ctx, next) => {
        let { list, pager } = await controllers.movie.getMovieList();
        ctx.render('page/list/index', {
            title: '电影列表',
            type:1,
            lists: list,
            params: pager
        });
    })
    .get('/tv/list', async (ctx, next) => {
        let { list, pager } = await controllers.tengxun.getTvList();
        ctx.render('page/list/index', {
            title: '电视剧列表',
            type:2,
            lists: list,
            params: pager
        });
    })
  .get('/page/list/:type', async (ctx, next) => {
    var type = ctx.query.type || ctx.params.type;
    var page = ctx.query.page || 0;
    var pagesize = ctx.query.pagesize || 20;
    var lists = [];
    var title = '列表页';
    var params = {page: page, pagesize: pagesize}
    if(type == 1) { // 电影
        title = '电影'+title;
      lists = await controllers.movie.getMovieList(params)
    } else if(type == 2){ // 电视剧
        title = '电视剧'+title;
      lists = await controllers.tengxun.getTvList(params)
    }
      ctx.render('page/list/index', {
          title: title,
          type: type,
          lists: lists.list,
          params: lists.pager
      })
  })
  .get('/api/tv/tvlist', controllers.tengxun.getTvList) // 获取电视剧列表
  .get('/api/tv/detail/:id', controllers.tengxun.getTvDetail) // 获取电视剧详情
  .get('/api/tv/detail/:id', controllers.tengxun.getTvDetail) // 获取电视剧详情
  .get('/api/search', controllers.search.videoSearch)//


if(env === 'development') {
  router.get('/assets/js/**/*.js', (ctx, next)=>{
    handleJs.do(ctx, next)
  })
  .get('/assets/less/**/*.less', (ctx, next)=>{
    handleLess.do(ctx, next)
  })
}

module.exports = router
