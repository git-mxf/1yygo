import React,{Component} from "react";
import "./index.scss"
import "./xian";

class Shai extends Component {
	constructor(props) {
		super(props);
		this.state={
			currentIndex: 0
		}
		
	}

	render(){
		return (
			<div id="shai">
				<div className="ljp_all">
				<ul onClick={this.handle.bind(this)}>
					<li data-list="11" 
							className={this.state.currentIndex=='0'?'active1':''}>
							最新
					</li>
					<li data-list="12" 
							className={this.state.currentIndex=='0'?'active1':''}>精华</li>
					<li data-list="13" 
							className={this.state.currentIndex=='0'?'active1':''}>推荐</li>
					<li data-list="14" 
							className={this.state.currentIndex=='0'?'active1':''}>人气</li>
				</ul>
					<span id="dianji">全部分类</span>
					<i className="ljp_jiao"></i>
					<div className="ljp_two" id="two">
						<ul onClick={this.handle.bind(this)}>
							<li data-list="0" 
							className={this.state.currentIndex=='0'?'active':''}>
								全部分类
							</li>
							<li data-list="1" 
							className={this.state.currentIndex=='1'?'active':''}>
								手机数码
							</li>
							<li data-list="2" 
							className={this.state.currentIndex=='2'?'active':''}>
								电脑办公
							</li>
							<li data-list="3" 
							className={this.state.currentIndex=='3'?'active':''}>
								家用电器
							</li>
							<li data-list="4" 
							className={this.state.currentIndex=='4'?'active':''}>
								化妆个护
							</li>
							<li data-list="5" 
							className={this.state.currentIndex=='5'?'active':''}>
								食品饮料
							</li>
							<li data-list="6" 
							className={this.state.currentIndex=='6'?'active':''}>
								家居家纺
							</li>
							<li data-list="7" 
							className={this.state.currentIndex=='7'?'active':''}>
								钟表首饰
							</li>
							<li data-list="8" 
							className={this.state.currentIndex=='8'?'active':''}>
								礼品箱包
							</li>
							<li data-list="9" 
							className={this.state.currentIndex=='9'?'active':''}>
								户外运动
							</li>
							<li data-list="10" 
							className={this.state.currentIndex=='10'?'active':''}>
								其他商品
							</li>
						</ul>
					</div>
				</div>
				<div className="ping">
					<div className="name">
					<a href="#">YG颖宝遛着林狗去取车</a>
					<span>昨天 17:59</span>
					</div>
					<div className="wenzi">
					收到空调啦！好吧。运气挺好的。好大好重的移动空调。
					5块钱带来的好运。家里刚好缺一台。满足了。感谢一元云购。
					时不时的给我惊喜。坚信自己下一次可以中个55寸大电视。
					哈。祝云购越做越好。我也会一直支持，一直中大奖。谢谢
					</div>
					<div className="tu">
					<ul>
					<li></li>
					<li></li>
					<li></li>
					</ul>
					</div>
					<div className="zan">
					
					</div>
					<div className="tiao"></div>
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

export default Shai