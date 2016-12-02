var express = require("express");
var app = express();
var MongoClient = require('mongodb').MongoClient;
app.get("/",function(req,res){
    var url = 'mongodb://127.0.0.1:27017/myproject';
    MongoClient.connect(url, function(err,db){
        if(err){
            console.log('连接失败');
            return;
        }
        console.log("连接成功");
        db.collection("student").insertOne({"name":"xiaowu","age":29,"sex":"nv"},function(err,result){
            if(err){
                console.log("插入失败");
                return;
            }
            console.log("插入成功");
            res.send(result);
        });

    });
    });
app.listen(3000);
console.log('server start : 3000');
