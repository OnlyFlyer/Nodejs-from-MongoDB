var MongoClient = require('mongodb').MongoClient;

//封装数据库常用增删改查等函数

//内部函数 连接数据库
// Connection URL
var url = 'mongodb://localhost:27017/myproject';

function _connect(callback){
	// Use connect method to connect to the server
	MongoClient.connect(url, function(err, db) {
		callback(err,db);
	});
}
// _connect();


//插入数据
exports.insertOne = function(collectionName, json, callback){
	_connect(function(err,db){
		if(err){
			console.log('数据库连接失败!');
			return;
		}
		//注:db.collection().insertMany();
		db.collection(collectionName).insertOne(json, function(err,result){
			callback(err,result);
			db.close();
		});
	});
};
// insertOne('student',{'name':'xiaoliu','age':29,'sex':'nv'},function(err,result){
// 	if(err){
// 		console.log("插入失败");
// 		return;
// 	}
// 	console.log();
// });


//查找数据
exports.find = function(collectionName, json, args, callback){
	var json = json || {};
	var result = [];  //结果数组
	var skipNumber = args.pageAmount * args.page;
	_connect(function(err,db){
		if(err){
			console.log("连接数据库失败");
			return;
		}
		var cursor = db.collection(collectionName).find(json).limit(args.pageAmount).skip(skipNumber);
		cursor.each(function(err,doc){
			if(doc != null){
				result.push(doc);
			}else{
				//遍历结束
				callback(null,result);
			}
		});
	});

};
// find('student',{'name':'xiaozhang'},function(err,result){
// 	if(err){
// 		console.log("查找失败!");
// 		return;
// 	}
// 	console.log(result);
// });



//更新数据
exports.update = function(collectionName, json, set, callback){
	_connect(function(err,db){
		if(err){
			console.log('数据库连接失败!');
			return;
		}
		//注:此处有类似语法updateOne:只更新一个
		db.collection(collectionName).updateMany(json,set, function(err,result){
			callback(err,result);
			db.close();
		});
	});
};
// update('student',{'sex':'nv',$set:{'sex':'nan'}},function(err,result){
// 	if(err){
// 		console.log("更新失败!");
// 		return;
// 	}
// 	console.log('chenggong');
// 	console.log(result);
// });


//删除数据,语法有错误
exports.remove = function(collectionName, json, callback){
	_connect(function(err,db){
		if(err){
			console.log("数据库连接失败!");
			return;
		}
		//注:此处还有类似语法deleteOne:只删除一个
		db.collection(collectionName).deleteMany(json, function(err,result){
			callback(err,result);
			db.close();
		});
	});
};

// remove('student',{'sex':'nv'},function(err,result){
// 	if(err){
// 		console.log("删除失败!");
// 		return;
// 	}
// 	console.log('删除失败!');
// 	console.log(result);
// });



//语法有错误
function create(collectionName, json, callback){
	_connect(function(err,db){
		if(err){
			console.log('数据库连接失败!');
			return;
		}
		db.collection(collectionName).createIndex(json, function(err,result){
			if(err){
				console.log('创建失败!');
				return;
			}
			callback(err,result);
			db.close();
		});
	});
}
// create('student',{'name':'小刘','sex':'gay'}, function(err,result){
// 	if(err){
// 		console.log('创建失败!');
// 		return;
// 	}
// 	console.log('成功!');
// 	console.log(result);
// });






// function _connectDB(callback){
// 	var url = 'mongodb://localhost:27017/haha';
// 	//连接数据库
// 	MongoClient.connect(url, function(err,db){
// 		callback(err,db);
// 	});
// }
// // _connectDB();
//
// //插入数据
// exports.insertOne = function(collectionName, json, callback){
// 	_connectDB(function(err,db){
// 		if(err){
// 			console.log('连接失败！');
// 		}
// 		db.collections(collectionName).insertOne(json, function(err,result){
// 			callback(err,result);
// 			db.close();
// 		});
// 	});
// };

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
