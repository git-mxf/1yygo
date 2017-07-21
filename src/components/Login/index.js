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

			// <div id="denglupage">
			// 	<div id="login">
			// 		<div className="back"><i className="iconfont icon-zuo backzuo"></i></div>
			// 		<div className="denglu">登录</div>
			// 		<div className="homepage"><i className="iconfont icon-shouye homgsy"></i></div>
			// 	</div>
			// 	<div className="inputs">
			// 		<div className="input1">
			// 			<i className="iconfont icon-wode"></i>
			// 			<input type="text"  placeholder="请输入您的手机号码/邮箱" className="email"/>
			// 			<div className="del"></div>
			// 		</div>
			// 		<div className="input2">
			// 			<i className="iconfont icon-iconfontsuotou"></i>
			// 			<input type="password"  placeholder="密码" className="psw"/>
			// 		</div>
			// 		<a href="javascript:;" className="login-go">登录</a>					<div className="helps">
			// 		<a href="javascript:;" className="forget">忘记密码？</a><span className="stick">|</span> <a href="javascript:;" className="newUser">新用户注册</a>
			// 		</div>
			// 	</div>
			// </div>
			<div id="login">

				<div className="datu"></div>
				<form>	
					<div className="yi">
						<label>手机号码
						<input type="tel" placeholder="请输入手机号码" ref="username" maxLength="11" className="shouji" onBlur={this.chkvalue.bind(this)}/>
						</label>
						<p className="ts1">请填写用户名</p>
					</div>
					<div className="si">
						<label>登录密码
						<input type="password" placeholder="请输入登录密码" ref="psw" maxLength="11" className="denglu"  onBlur={this.chkvalue1.bind(this)}/>
						</label>
						<p className="ts2">请填写密码</p>
					</div>
					<div className="anniu">
						<button onClick = {this.login}>登录</button>
					</div>
				</form>	
				<div className="wangji">
					<span><NavLink to="/register" activeClassName="suiyi">去注册</NavLink></span>
				</div>
				<div className="wenzi">
					*买房宝用户请用绑定的手机号作为用户名登录。
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