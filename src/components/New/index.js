import React,{Component} from "react";
import "./index.scss";
import "./xian";



class New extends Component {
	constructor(props) {
		super(props);
		this.state={
			currentIndex: 0
		}
	}
 

	render(){
		return (
			<div id="New">
				<div className="ljp_all" id="dianji">
					<span>全部分类</span>
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
				
					
					
					<div className="ljp_details">
						<dl>
						<dt>
							
						</dt>
						<dd>(第85142云) 苹果（Apple）iPhone 6s Plus 32G版 4G手机</dd>
						<dd><span>价值：￥</span><em>7130.00</em></dd>
						<dd>揭晓倒计时：</dd>
						<p>
							<em></em>
							<span>:</span>
							<em></em>
							<span>:</span>
							<em></em>
						</p>
						</dl>
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

/*var All=document.getElementsByClassName('ljp_all');
All.onclick = function(){
	All.style.display="block";
}*/

export default New