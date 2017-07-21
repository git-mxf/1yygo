import React,{Component} from "react";
import ReactDOM from 'react-dom';
import "./index.scss";
import "../../assets/font/iconfont.css";
import {
	NavLink
}from "react-router-dom";
import {Link,browserHistory} from "react-router";




class Login extends Component {
	constructor(props){
		super(props);
		this.login = this.login.bind(this);
	}

	login(){
		var zj=/^1[34578]\d{9}$/;
		var mm=/^[a-zA-Z0-9]{6,}$/;
		var username=document.querySelector(".shouji").value;
		var psw=document.querySelector(".denglu").value;

		if (username==""||zj.test(username)==false){
			document.querySelector(".ts1").style.display='block';
		} else if ( psw==""||mm.test(psw)==false){
			document.querySelector(".ts2").style.display='block';
		}else{
			fetch('/index/index/login4ajax', {
				headers: {
				    'Content-Type': 'application/x-www-form-urlencoded'
				  },
				credentials: 'include',
			  method: 'POST',
			  body: "username=" + username + "&psw=" + psw
			}).then(function(res){
				return res.json();
			}).then((data)=>{
				console.log(data);
				if(data.code){
					this.props.history.push('/cart');
				}else{
					alert("请检查")
				}
			})
		}
	}

	render(){
		return (

			
			<div id="login">

				<div id="loginHeader">
				<div className="back"><i className="iconfont icon-zuo backzuo"></i></div>
					<div className="denglu">登录</div>
			 		<div className="homepage"><i className="iconfont icon-shouye homgsy"></i></div>
				</div>

				<div className="datu"></div>
				<form>	
					<div className="yi">
						<label>
						<input type="tel" placeholder="请输入手机号码或邮箱" ref="username" maxLength="11" className="shouji" onBlur={this.chkvalue.bind(this)}/>
						</label>
						<p className="ts1">请填写用户名</p>
					</div>
					<div className="si">
						<label>
						<input type="password" placeholder="请输入登录密码" ref="psw" maxLength="11" className="denglu pww"  onBlur={this.chkvalue1.bind(this)}/>
						</label>
						<p className="ts2">请填写密码</p>
					</div>
					<div className="anniu">
						<button onClick = {this.login} className="goLogin">登录</button>
					</div>
				</form>	
				<div className="wangji">
					<span  className="zhuce"><NavLink to="/register" activeClassName="suiyi">新用户注册</NavLink></span>
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
	 	    document.querySelector(".ts1").innerHTML='true'
	 	}
	}
	 chkvalue1() {
	 	var mm=/^[a-zA-Z0-9]{6,}$/;
	 	var psw=document.querySelector(".denglu").value;
	 	
	 	if(psw==""||mm.test(psw)==false){
	 	    document.querySelector(".ts2").style.display='block';
	 	}else{
	 	    document.querySelector(".ts2").style.display='block';
	 	    document.querySelector(".ts2").innerHTML='true'
	 	}
	}
}

export default Login