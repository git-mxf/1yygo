import $ from "../../assets/jquery-1.11.0.js";


var jsonp = function(callback){
	
		$.ajax({
			
			url : 'https://m.1yyg.com/JPData?action=getPostPageList&FIdx=1&EIdx=40&isCount=1&order=10&sortID=0&_reffer=wx',
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