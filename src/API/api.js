var express = require("express");
var router = express.Router();
var https = require('https'); 
var spider = require("./spider");


router.get("/new" , function(req,res){
	spider("m.1yyg.com","/JPData?action=getGoodsPageList&sortID=0&orderFlag=10&FIdx=1&EIdx=60&isCount=1",function(data){
		res.send(data);
	})
})

router.get("/lottery" , function(req,res){
	spider("api.1yyg.com","/JPData?action=GetStartRaffleAllList&time=0&fun=jQuery190008524238513061477_1500465867916&_=1500465867917",function(data){
		res.send(data);
	})
})
module.exports = router;