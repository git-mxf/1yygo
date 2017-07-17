import React,{Component} from "react";
import "./index.scss"
import "../assets/login/font/iconfont.css"

class Login extends Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		return (
			<div>
				<div>
					<div><i class="iconfont icon-zuo"></i></div>
					<div>登录</div>
					<div><i class="iconfont icon-shouye"></i></div>
				</div>
				<div>
					<i class="iconfont icon-wode"></i>
					<input type="text"  placeholder="请输入您的手机号码/邮箱"/>
				</div>
				<div>
					<i class="iconfont icon-iconfontsuotou"></i>
					<input type="password"  placeholder="密码"/>
				</div>
				<div>登录</div>
				<div>
					忘记密码？| 新用户注册
				</div>
			</div>
			)
	}
}

export default Login