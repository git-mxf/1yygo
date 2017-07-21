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
			
			var username=document.querySelector(".shouji").value;
			

			if(username==""||zj.test(username)==false){
			   document.querySelector(".ts1").style.display='block';
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
						<NavLink to="/login"><div className="backs"><i className="iconfont icon-zuo backzuo"></i></div></NavLink>
					 		<div className="zhuces">注册</div>
					 		<NavLink to='/cloudshop' ><div className="homepages"><i className="iconfont icon-shouye homgsy"></i></div></NavLink>
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
	regist(){
		var zj=/^1[34578]\d{9}$/;
		var username=document.querySelector(".shouji").value;
		if(username!==""&&zj.test(username)==true){
			location.href="http://localhost:8088/?#/login"
		}
	}
			
	


	 
}

export default Register