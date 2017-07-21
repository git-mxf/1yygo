import React,{Component} from "react";
import "./index.scss"
import {
	NavLink
} from "react-router-dom"


class MyCloudChild extends Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		return (

			<div id="MyCloud">
				<header><div></div></header>

				<div className="shangbian">
				<p>^_^ 欢迎来到1元云购</p>
				<NavLink to="/login"><div className="log">登录</div></NavLink>
				</div>

				
				<div className="myrecord">
				<a href="javascript:;" className="lists"><span className="jilu"></span>我的云购记录<span className="you" ></span></a>
					<a href="javascript:;" className="lists"><span className="goods"></span>获得的商品<span className="you"></span></a>
					<a href="javascript:;" className="lists"><span className="show"></span>我的晒单<span className="you"></span></a>
					<a href="javascript:;" className="lists"><span className="purse"></span>我的钱包<span className="you"></span></a>
					<a href="javascript:;" className="lists-help"><span className="help"></span>帮助与反馈<span className="you"></span></a>
					<p className="tel">客服热线：4000-588-688  (工作时间9:00-21:00)</p>
				</div>

				
			</div>
			)
	}
}

export default MyCloudChild