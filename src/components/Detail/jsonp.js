import $ from "../../assets/jquery-1.11.0.js";


var jsonp = function(callback){
	
		$.ajax({
			
			url : 'https://m.1yyg.com/v46/products/24009.do',
			type : 'GET',
			dataType :'jsonp',
			jsonp : "fun",
			success:function (data){
					callback(data);
                } 
		})
}

export default jsonp;