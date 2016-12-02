var MongoClient = require('mongodb').MongoClient;
//封装数据库常用增删改查等函数
//内部函数 连接数据库
function _connectDB(callback){
	var url = 'mongodb://localhost:27017/haha';
	//连接数据库
	MongoClient.connect(url, function(err,db){
		callback(err,db);
	});
}
// _connectDB();

//插入数据
exports.insertOne = function(collectionName, json, callback){
	_connectDB(function(err,db){
		if(err){
			console.log('连接失败！');
		}
		db.collections(collectionName).insertOne(json, function(err,result){
			callback(err,result);
			db.close();
		});
	});
};





















































// function _connectDB(callback){
// 	var url = 'mongodb://localhost:27017/myproject';
// 	//连接数据库
// 	MongoClient.connect(url, function(err, db) {
// 	  if(err){
// 	  	console.log("连接数据库失败!");
// 	  	return;
// 	  }
// 	  callback(err,db);
// 	  console.log("连接数据库成功!");
// });
// }
// _connectDB(function(err,db){
// 	db.close();
// });
//
// //插入一条数据
// exports.insertOne = function(collectionName,json,callback){
// 	_connectDB(function(err,db){
// 		db.collection(collectionName).insertOne(json,function(err,result){
// 			callback(err,result);
// 			db.close();
// 		});
// 	});
// };
//
// //查找数据
// exports.find = function(collectionName,json,callback){
// 	var a = [];
// 	_connectDB(function(err,db){
// 		if(err){
// 			console.log("连接失败!");
// 		}
// 		db.collection(collectionName).find(json).toArray(function(err,docs){
// 			if(err) {
// 				console.log(">=<");
// 			}
// 			a.push(docs);
// 		});
// 		callback(a);
// 	});
// };
