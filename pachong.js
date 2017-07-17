var https = require('https');

var http = require('http');

http.createServer(function(req,res){

	if(req.url=="/favicon.ico"){
		return;
	}


	if(req.url=='/1yyg'){
		spider(function(data){
			console.log(data);

			res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
			res.write(data);
			res.end();
		})

	}


}).listen(3010,function(err){
	if(err){
		console.log("启动失败")
		return;
	}
	console.log("启动成功")
})


function spider(callback){

	var options = {
	  hostname: 'm.1yyg.com',
	  port: 443,
	  path: '/JPData?action=getGoodsPageList&sortID=0&orderFlag=10&FIdx=1&EIdx=60&isCount=1',
	  method: 'GET'
	};


	var req = https.request(options,function(res){

		var data="";
		res.on("data", function(chunk){
			data+=chunk
		})


		res.on("end",function(){
			// console.log(data);
			callback(data);
		})
	})

	req.end();
}