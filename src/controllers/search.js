const TvList = require('../models').TvList;
const Movie = require('../models').Movie;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const videoSearch = async function (ctx) {
    var searchValue = ctx.query.value;
    console.log(searchValue);
    var movieSearchResult = await Movie.findOne({
        where: {
            name: searchValue
        }
    });
    var tvSearchResult = await TvList.findOne({
        where: {
            name: searchValue
        }
    });
    ctx.body = {
        message: '成功',
        success: true,
        data: {
            tv: tvSearchResult,
            movie: movieSearchResult
        }
    };
};

const getVideo = async function (ctx) {
    var searchValue = ctx.query.value;
    var movieSearchResult = await Movie.findOne({
        where: {
            // name: searchValue
            name: {
                [Op.like]: '%' + searchValue + '%'
            },// 模糊搜索
        }
    });
    var tvSearchResult = await TvList.findOne({
        where: {
            name: {
                [Op.like]: '%' + searchValue + '%'
            },// 模糊搜索
        }
    });
    let data = [];
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

    return JSON.parse(JSON.stringify(data));
};
module.exports = {
    videoSearch,
    getVideo
};