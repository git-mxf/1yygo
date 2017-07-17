var express = require("express");
var router = express.Router();
var https = require("https");

router.get("/" , function(req,res){
	spider(function(data){
		res.send(data);
	})
})

module.exports = router;


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