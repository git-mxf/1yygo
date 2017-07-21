import React,{Component} from "react";
import "./index.scss"
import ReactSwipe from "react-swipe";
import images1 from "../../assets/img/20170609151005929.jpg"
import images2 from "../../assets/img/20170605084728556.jpg"
import images3 from "../../assets/img/20170629175309381.jpg"
import "../../assets/font/iconfont.css"

import {
	NavLink
} from "react-router-dom"
class CloudShop extends Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		return (
			<div id="cloudshop">
				<header>
					<div></div>
				</header>
				<ReactSwipe className="carousel" swipeOptions={{continuous: true,auto: 3000}}>
					<div>
						<img src={images1} />
					</div>
	                <div>
	                	<img src={images2} />
	                </div>
	                <div>
	                	<img src={images3} />
	                </div>
				</ReactSwipe>
				<section className="list">
					<ul>
						<li>
							<NavLink to="/Goodslist">
								<span></span>
								新品
							</NavLink>
						</li>
						<li>
							<NavLink to="/Chongzhi">
								<span></span>
								充值
							</NavLink>
						</li>
						<li>
							<NavLink to="/Xiangou">
								<span></span>
								限购
							</NavLink>
						</li>
						<li>
							<NavLink to="/Xiazai">
								<span></span>
								下载APP
							</NavLink>
						</li>
						<li>
							<NavLink to="/Goodslist">
								<span></span>
								全部分类
							</NavLink>
						</li>
					</ul>
				</section>
				<div className="line"></div>
				<div className="tab">
					<ul className="left">
						<li><NavLink to="/CloudShop/jijiang" activeClassName='select' >即将揭晓</NavLink></li>
						<li><NavLink to="/CloudShop/Person" activeClassName='select' >人气</NavLink></li>
						<li><NavLink to="/CloudShop/newshop" activeClassName='select' >最新</NavLink></li>
						<li><NavLink to="/CloudShop/value" activeClassName='select' >价值</NavLink></li>
					</ul>
					<div className="right">
					<NavLink to="/Search">
						<i className="iconfont icon-fangdajing"></i>
						<span>搜索</span>
					</NavLink>
					</div>	
				</div>
				{
					this.props.children
				}
				
			</div>
			)
	}

		
	
	
}

export default CloudShop