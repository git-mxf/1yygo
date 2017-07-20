import $ from "../../assets/jquery-1.11.0.js";


var jsonp = function(callback){
	
		$.ajax({
			
			url : 'https://m.1yyg.com/JPData?action=getGoodsPageList&sortID=0&orderFlag=50&FIdx=1&EIdx=60&isCount=1&_reffer=wx',
			type : 'GET',
			dataType :'jsonp',
			jsonp : "fun",
			success:function (data){
					// console.log(data);
                    callback(data);
                } 
		})
}

export default jsonp;