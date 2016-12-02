var express = require("express");
var app = express();
var db = require("./model/db.js");
app.get("/",function(req,res){
    db.insertOne('student',{'name':'xiaowu','age':29,'sex':'nv'},function(err,result){
        if(err){
            console.log('插入失败!');
        }
        console.log('插入成功');
        res.send(result);
    });
    });
app.listen(3000);
console.log('server start : 3000');
