import React,{Component} from "react";
import "./index.scss";
import "../../assets/font/iconfont.css";
import {
	NavLink
}from "react-router-dom";

class Register extends Component {
	constructor(prop){
		super(prop)
		this.regist = this.regist.bind(this);

	}

	regist(){
			var zj=/^1[34578]\d{9}$/;
			var mm=/^[a-zA-Z0-9]{6,}$/;
			var username=document.querySelector(".shouji").value;
			// var tuxing=document.querySelector(".tuxing").value;
			var denglu=document.querySelector(".denglu").value;
			var queren=document.querySelector(".queren").value;

			if(username==""||zj.test(username)==false){
			   document.querySelector(".ts1").style.display='block';
			}else if(denglu==""||mm.test(denglu)==false){
	 	   		document.querySelector(".ts4").style.display='block';
	 		}else if(denglu!==queren){
	 	   		document.querySelector(".ts5").style.display='block';
	 		}else{
	 				fetch('/index/index/regist4ajax', {
			headers: {
			    'Content-Type': 'application/x-www-form-urlencoded'
			  },
		  method: 'POST',
		  body: "username=" + username +"&psw="+ denglu
		}).then(function(res){
			return res.json();
		}).then((data)=>{
			console.log(data);
			if(data.code){
					this.props.history.push('/login');
				}else{
					alert("请检查")
				}
		})
	 	}
	}

	render(){
		return (
		
				<div id="regist">

						<div id="registDiv">
							<div className="backs"><i className="iconfont icon-zuo backzuo"></i></div>
					 		<div className="zhuces">注册</div>
							<div className="homepages"><i className="iconfont icon-shouye homgsy"></i></div>
						</div>

					<div className="all">

						<div className="zho">
							<div className="datu"></div>
							<form>	
								<div className="yi">
									<label>
									<input type="tel" ref="username" placeholder="请输入手机号码" maxLength="11" className="shouji" ref="username" onBlur={this.chkvalue.bind(this)}/>
									</label>
									<p className="ts1">请输入手机号码</p>
								</div>
								
								<div className="anniu">
									<button onClick = {this.regist}  className="nexts">下一步</button>
								</div>

								<div className="agreement"><div className="choose"></div>我已阅读并同意<a href="javascript:;" className="xieyi">1元云购用户服务协议</a></div>
							</form>	
							
					</div>
				</div>
			</div>
			)
	}

	 chkvalue() {
	 	var zj=/^1[34578]\d{9}$/;
	 	var username=document.querySelector(".shouji").value;
	 		 	
	 	if(username==""||zj.test(username)==false){
	 	   document.querySelector(".ts1").style.display='block';
	 	}else{
	 	    document.querySelector(".ts1").style.display='block';
	 	    document.querySelector(".ts1").innerHTML='输入正确'
	 	}
	}

	 chkvalue1() {
	 	var mm=/^[a-zA-Z0-9]{6,}$/;
	 	var tuxing=document.querySelector(".tuxing").value;
	
	 	if(tuxing==""||mm.test(tuxing)==false){
	 	    document.querySelector(".ts2").style.display='block';
	 	}else{
	 	    document.querySelector(".ts2").style.display='block';
	 	    document.querySelector(".ts2").innerHTML='输入正确'
	 	}
	}

	 chkvalue2() {
	 	var zj=/^1[0-9]{10}$/;
	 	var yanzheng=document.querySelector(".yanzheng").value;


	 	if(yanzheng==""||zj.test(yanzheng)==false){
	 	   document.querySelector(".ts3").style.display='block';
	 	}else{
	 	    document.querySelector(".ts3").style.display='block';
	 	    document.querySelector(".ts3").innerHTML='输入正确'
	 	}
	}

	chkvalue3() {
	 	var mm=/^[a-zA-Z0-9]{6,}$/;
	 	var denglu=document.querySelector(".denglu").value;
	 	
	 	if(denglu==""||mm.test(denglu)==false){
	 	   document.querySelector(".ts4").style.display='block';
	 	}else{
	 	    document.querySelector(".ts4").style.display='block';
	 	    document.querySelector(".ts4").innerHTML='输入正确'
	 	}
	}

	chkvalue4() {
	 	var mm=/^[a-zA-Z0-9]{6,}$/;
	 	var queren=document.querySelector(".queren").value;
	 	
	 	if(queren==""||mm.test(queren)==false){
	 	   document.querySelector(".ts5").style.display='block';}
	 	// }else{
	 	//     document.querySelector(".ts5").style.display='block';
	 	//     document.querySelector(".ts5").innerHTML='输入正确'
	 	// }
	}
}

export default Register