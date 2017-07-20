import React,{Component} from "react";
import "./index.scss";
import img from "../../assets/img/20170302175316313.jpg";
import jsonp from "./jsonp.js";

import {
	NavLink
} from "react-router-dom"


class Detail extends Component {
	constructor(props) {
		super(props);
		
	}

	componentDidMount() {
		
	}

	render(){
		return (
			<div id="detail">
				<header>
					<div className="left" onClick={()=>{
									this.props.history.push(`/CloudShop`)
								}}>
			
					</div>
					<div className="center">商品详情</div>
					<div className="right"></div>
				</header>
				<div className="top">
					<ul>
						<li className="active">第11138云</li>
						<li>第11137云</li>
						<li>第11136云</li>
						<li><i></i></li>
					</ul>
				</div>
				<div className="slider">
					<img src={img} />
				</div>
				<div className="pro_info">
					<h2>(第<em>11138</em>云)小米（MIUI）红米Note 4 32GB 全网通 4G手机<span>十核处理器，4100mAh电池，千元旗舰新标杆！（颜色随机发）</span></h2>
					<p className="price">价值：￥49.00</p>
					<p className="u-progress">
						<span className="pgbar"></span>
					</p>
					<ul className="Pro-bar-li">
						<li className="P-bar01"><em>6402</em>已参与</li>
						<li className="P-bar02"><em>7130</em>总需人次</li>
						<li className="P-bar03"><em>728</em>剩余</li>
					</ul>
				</div>
				<div className="line"></div>
				<div className="ann_btn">
					<a href="#">参与记录<s className="fr"></s></a>
					<a href="#">图文详情<span>(建议WIFI下使用)</span><s className="fr"></s></a>
					<a href="#">商品晒单<s className="fr"></s></a>
				</div>
			</div>
			)
	}
}

export default Detail