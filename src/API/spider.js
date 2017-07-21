var http = require('http'); 

function spider(hostname,path,callback){

	var options = {
	  hostname: hostname,
	  port: 80,
	  path: path,
	  method: 'GET',

	  headers:{
	  		Referer:"https://m.1yyg.com/v46/lottery/",
	  		"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
	  		"Host":"api.1yyg.com",
	  		"Cookie":"UM_distinctid=15d4dd52964219-08450bc30dd355-62101875-fa000-15d4dd52965321; _AppDownLoadShow=1; _CartDataSel=12590325%7C1; _CartData_0=1%7C1%7C12590325%2C232893%2C1; _wxSiteFlag=tm"
	  }
	};


	var req = http.request(options,function(res){

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

module.exports = spider;