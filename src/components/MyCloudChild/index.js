import React,{Component} from "react";
import "./index.scss"
import {
	NavLink
} from "react-router-dom"


class MyCloud extends Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		return (

			<div id="MyCloud">
				<header><div></div></header>

				<div className="head">
					<img src="../src/assets/img/head.jpg" className="userface"/>
					<div className="news">
						<p className="person">USER.1016976 <span className="number">(ID:1016976)</span ></p>
						<div className="person-small"><span className="star"></span> 云购小将</div>
					</div>
					<NavLink to="/logout"><div className="set"></div></NavLink>
				</div>
				<div className="top-up">
					<div className="fortune">
					<a href="javascript:;"><span className="money">20</span><span className="usable">可用福分</span></a>
					</div>
					<div className="rental">
					<a href="javascript:;"><span className="money">￥0.00</span><span className="usable">账户总额</span></a>
						
					</div>
					<div className="pay">
						<a href="javascript:;"className="gopay" >去充值</a>
					</div>
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

export default MyCloud