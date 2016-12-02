var express = require("express");
var app = express();
var db = require("./model/db.js");
app.get("/",function(req,res){

    // db.insertOne('student',{'name':'xiaozhang','age':parseInt(Math.random() * 100),'sex':'nv'},function(err,result){
    //     if(err){
    //         console.log('插入失败!');
    //     }
    //     console.log('插入成功');
    //     res.send(result);
    // });

    // db.find('student',{'name':'xiaozhang'},function(err,result){
    //     if(err){
    //         console.log('查找失败!');
    //         return;
    //     }
    //     res.send(result);
    //     // console.log(result);
    // });

    db.updateOne('student',{'sex':'nv',$set:'nan'}, function(err,result){
        if(err){
            console.log("更新失败");
            return;
        }
        res.send(result);
        console.log(result);
    });
    });
app.listen(3000);
console.log('server start : 3000');