/**
 * Created by 吴涛 on 2016/12/4.
 */
var express = require('express');
var app = express();
var db = require('./model/db.js');

app.get('/', function(req,res){
    // db.find('student',{}, function(err,result){
    //     var page = parseInt(req.query.page);
    //     // console.log(typeof page);
    //     var a = [];
    //     if(err){
    //         console.log('查找失败!');
    //         return;
    //     }
    //     for(var i=0; i<10*page; i++){
    //         a.push(result[i]);
    //     }
    //     res.send(a);
    // });
    var page = parseInt(req.query.page);
    db.find('student',{},{'pageAmount':10,'page':page},function(err,result){
        if(err){
            console.log('查找失败!');
            return;
        }
        res.send(result);
    });
});
app.listen(80);
console.log('server start for 80');
app.listen(80);