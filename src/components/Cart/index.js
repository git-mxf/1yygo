import React,{Component} from "react";
import "./index.scss";
import "../../assets/font/iconfont.css";

class Cart extends Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		return (
			<div id="cart">
				<header><div></div></header>
				<ul className="shopping">
					<li className="goods1">
						<a href="javascript:;" className="picture"><img src="../src/assets/img/buy1.jpg"  className="pingan"/></a>
						<div className="presentation">
							<a href="javascript" className="update">(第1276云)平安银行 平安祥云福禄金条 Au9999 100g</a>
							<span className="surplus">剩余8171人次</span>
							<div className="num-opt">
								<div className="magnitude">
									<div className="jian" onClick={this.jian.bind(this)}><i className="iconfont icon-jianhao"></i></div>
									<div id="shu" className="yi">1</div>
									<div className="jia" onClick={this.jia.bind(this)}><i className="iconfont icon-jiahao"></i></div>
								</div>
								<a href="javascript;:" className="rubbish"><i className="iconfont icon-huishouzhan"></i></a>
							</div>
							
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
							<div className="one">合计<span className="yuan" id="qian">5</span></div>
							<div className="sum">共1个商品</div>
						</div>
						<div className="settlement">去结算</div>
					</div>
				</div>
			</div>
			)
	}
	jia(ev){
		var shu = document.getElementById("shu").innerHTML;
			document.getElementById("shu").innerHTML = parseInt(document.getElementById("shu").innerHTML)+1
			document.getElementById("qian").innerHTML= parseInt(document.getElementById("shu").innerHTML) * 5;
		
		}
		jian(ev){
		var shu = document.getElementById("shu").innerHTML;
		if(parseInt(document.getElementById("shu").innerHTML)>0){
			document.getElementById("shu").innerHTML = parseInt(document.getElementById("shu").innerHTML)-1
			document.getElementById("qian").innerHTML= parseInt(document.getElementById("shu").innerHTML) * 5;
		}
		
		}
}

export default Cart