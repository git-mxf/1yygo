import React,{Component} from "react";
import "./index.scss"
import ReactSwipe from "react-swipe";
import images1 from "../../assets/img/20170609151005929.jpg"
import images2 from "../../assets/img/20170605084728556.jpg"
import images3 from "../../assets/img/20170629175309381.jpg"
import "../../assets/mxf-fonts1/iconfont.css"
import img from "../../assets/img/20150703172947616.jpg"
import {
	NavLink
} from "react-router-dom"
class CloudShop extends Component {
	constructor(props) {
		super(props);
		this.state={
			currentIndex: 0
		}
	}

	render(){
		return (
			<div id="cloudshop">
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
					<ul className="left" onClick={this.handle.bind(this)}>
						<li data-list="0" 
						className={this.state.currentIndex=='0'?'active':''} >即将揭晓</li>
						<li data-list='1' 
						className={this.state.currentIndex=='1'?'active':''}>人气</li>
						<li data-list='2'
							className={this.state.currentIndex=='2'?'active':''}>最新</li>
						<li data-list='3'
							className={this.state.currentIndex=='3'?'active':''}>价值</li>
					</ul>
					<div className="right">
						<i className="iconfont icon-sousuo"></i>
						<span>搜索</span>
					</div>	
				</div>
				<div className="product">
					<ul>
						<li onClick={()=>{
									this.props.history.push(`/detail/123`);
								}}>
							<img src={img} />
							<p className="duc">(第<em>1234</em>云)蓝月亮 亮白增艳洗衣液（自然清香）3kg/瓶</p>
							<span className="price">价值：￥50.00</span>
							<p className="u-progress">
								<span className="pgbar"></span>
							</p>
							<div className="bot">
								<a className="left" href="javascipt:;">立即一元云购</a>
								<a className="right" href="javascipt:;"><i></i></a>
							</div>
						</li>
					</ul>
				</div>
			</div>
			)
	}

	handle(ev){
		console.log(ev.target.dataset.list)
		this.setState({
			currentIndex : ev.target.dataset.list
		})
	}
	
}

export default CloudShop