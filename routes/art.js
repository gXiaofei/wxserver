var express = require('express');
var router = express.Router();
var artModel = require('../model/artModel');
var userModel = require('../model/userModel');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('123');
});


router.post('/login', function(req, res) {
    var data = req.body;
    userModel.findOne({nickName: data.nickName}, function(err, info) {
        if(err) return console.log(err);
        var _model = null;
        if(info){
            res.send(info);
        }else{
            _model = new userModel(data)
            _model.save(function(err, value) {
                console.log(12333,value);
            })
        }
        console.log('info', info);
    })

})

module.exports = router;
