var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');

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
              if(err) return console.log(err);
            })
        }
    })

})

module.exports = router;
