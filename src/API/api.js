var express = require("express");
var router = express.Router();

var apider = require("spider.js");


router.get("/" , function(req,res){
	spider(function(data){
		res.send(data);
	})
})

module.exports = router;