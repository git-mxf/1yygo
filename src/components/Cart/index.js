import React,{Component} from "react";
import "./index.scss";
import "../../assets/cart/font/iconfont.css";


class Cart extends Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		return (
			<div id="all">
				<ul className="shopping">
					<li className="goods1">
						<a href="javascript:;" className="picture"><img src="../src/assets/img/buy1.jpg"  className="pingan"/></a>
						<div className="presentation">
							<a href="javascript" className="update">(第1276云)平安银行 平安祥云福禄金条 Au9999 100g</a>
							<span>剩余29860人次</span>
							<div></div>
							<a href="javascripe:;"></a>
						</div>

					</li>
				</ul>
				<div className="payfor">
					<div className="ques">
					<i className="iconfont icon-xuanzhong yes"></i><span className="chinese">如被抢光自动参与最新一云</span>
						<i className="iconfont icon-question questions"></i>
					</div>
					<div className="last">
						<div className="total">
							<div className="one">合计<span className="yuan">￥1.00</span></div>
							<div className="sum">共1个商品</div>
						</div>
						<div className="settlement">去结算</div>
					</div>
				</div>
			)
	}
}

export default Cart