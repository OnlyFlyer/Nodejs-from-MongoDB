var express = require("express");
var app = express();
var db = require("./model/db.js");
app.get("/",function(req,res){

    //增添数据
    // db.insertOne('student',{'name':'xiaozhang','age':parseInt(Math.random() * 100),'sex':'nv'},function(err,result){
    //     if(err){
    //         console.log('插入失败!');
    //     }
    //     console.log('插入成功');
    //     res.send(result);
    // });

        //查找数据
    // db.find('student',{'name':'xiaozhang'},function(err,result){
    //     if(err){
    //         console.log('查找失败!');
    //         return;
    //     }
    //     res.send(result);
    //     // console.log(result);
    // });

    //更新语法 错误
    db.update('student',{'sex':'nv',$set:{'sex':'nan'}}, function(err,result){
        if(err){
            console.log("更新失败");
            return;
        }
        res.send(result);
        console.log(result);
    });

    //删除数据
    // db.remove('student',{'sex':'nv'},function(err,result){
    //     if(err){
    //         console.log("删除失败!");
    //         return;
    //     }
    //     console.log(result);
    //     res.send(result);
    // });
    });
app.listen(3000);
console.log('server start : 3000');