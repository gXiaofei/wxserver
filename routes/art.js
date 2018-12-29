var express = require('express');
var router = express.Router();
var artModel = require('../model/artModel');
var userModel = require('../model/userModel');
var async = require('async');

// 按分页查询
router.get('/info', function(req, res) {
    const params = req.query;
    pageQuery(parseInt(params.pageNo), parseInt(params.pageSize), artModel, '', {}, {
        artCreateTime: 'desc'
    }, function(error, result, next){
        if(error){
            return console.log(error);
        }else{
            // 请求的页数 不能大于总页数
            if(result.pageNumber <= result.pageCount){
                res.send(result);
            }else{
                res.send('请求的页数不对');
            }
        }
    });
})
// 新增
router.post('/write', function(req, res) {
    var data = req.body;
    var _model = new artModel({
        ...data
    });
    // 保存新增的内容
    _model.save(function(err, result){
        if(err) return console.log(err);
        res.send(result);
    })
})

// 分页
var pageQuery = function (page, pageSize, Model, populate, queryParams, sortParams, callback) {
    var start = (page - 1) * pageSize;
    var $page = {
        pageNumber: page
    };
    async.parallel({
        count: function (done) {  // 查询数量
            Model.count(queryParams).exec(function (err, count) {
                done(err, count);
            });
        },
        records: function (done) {   // 查询一页的记录
            Model.find(queryParams).skip(start).limit(pageSize).populate(populate).sort(sortParams).exec(function (err, doc) {
                done(err, doc);
            });
        }
    }, function (err, results) {
        var count = results.count;
        $page.pageCount = Math.ceil(count / pageSize);
        $page.results = results.records;
        callback(err, $page);
    });
};

module.exports = router;
