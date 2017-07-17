import React,{Component} from "react";
import "./index.scss"


class Goodslist extends Component {
	constructor(props) {
		super(props);
		this.state={
			currentIndex:0
		}
		
	}

	render(){
		return (
			<div id="Goodslist">
			<div id="divSearch">
				<div className="box">

				</div>
			</div>
				<div className="header">
					<ul onClick = {this.handle.bind(this)}>
						<li data-list="0" className={this.state.currentIndex=='0'?'active':''}>

							全部商品
						</li>
						<li data-list="1" className={this.state.currentIndex=='1'?'active':''}>

							手机数码
						</li>
						<li data-list="2" className={this.state.currentIndex=='2'?'active':''}>

							电脑办公
						</li>
						<li data-list="3" className={this.state.currentIndex=='3'?'active':''}>

							家用电器
						</li>
						<li data-list="4" className={this.state.currentIndex=='4'?'active':''}>

							钟表首饰
						</li>
						<li data-list="5" className={this.state.currentIndex=='5'?'active':''}>

							食品饮料
						</li>
						<li data-list="6" className={this.state.currentIndex=='6'?'active':''}>

							化妆个护
						</li>
						<li data-list="7" className={this.state.currentIndex=='7'?'active':''}>

							运动户外
						</li>
						<li data-list="8" className={this.state.currentIndex=='8'?'active':''}>

							家具家纺
						</li>
						<li data-list="9" className={this.state.currentIndex=='9'?'active':''}>

							礼品箱包
						</li>
						<li data-list="10" className={this.state.currentIndex=='10'?'active':''}>

							母婴
						</li>
						<li data-list="11" className={this.state.currentIndex=='11'?'active':''}>

							汽车
						</li>
						<li data-list="12" className={this.state.currentIndex=='12'?'active':''}>

							其它商品
						</li>
						<li data-list="13" className={this.state.currentIndex=='13'?'active':''}>

							限购专区
						</li>
					</ul>
				</div>
				<div className="content">
					<ul className="content-top">
						<li className="content-topin">即将揭晓</li>
						<li className="content-topin">人气</li>
						<li className="content-topin">最新</li>
						<li className="content-topin">价值</li>
					</ul>
					<ul>
						<li id="aaaaa">
							<span className="gList_l">
									<img src="./assets/imgGao/Z.jpg" />
							</span>
							<div className="gList_r">
									<h3 className="gray6">(第1586云)悠骑(JQ)新</h3>
									<em className="gray9">价值:￥2499.00</em>

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
			currentIndex:ev.target.dataset.list
		})
	}
}

export default Goodslist