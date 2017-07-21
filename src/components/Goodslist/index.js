import React,{Component} from "react";
import "./index.scss";
import "../../assets/font/iconfont.css";


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
				<div id="goodsDiv">
					<div className="back"><i className="iconfont icon-zuo backzuo"></i></div>
					<div className="denglu">商品列表</div>
					<div className="homepage"><i className="iconfont icon-shouye homgsy"></i></div>
				</div>
				<div className="searchDiv">
					<div className="goodsInput">
					<div className="search"><i className="iconfont icon-fangdajing"></i></div>
					<input type="text" className="searchInput" placeholder="输入“汽车”试试"/>
				</div>
				</div>
				<div className="all-list-wrapper">
					<div className="speciesList">
						<ul className="spaciesName">
							<li className="liList">全部商品</li>
							<li className="liList">手机数码</li>
							<li className="liList">电脑办公</li>
							<li className="liList">家用电器</li>
							<li className="liList">钟表首饰</li>
							<li className="liList">食品饮料</li>
							<li className="liList">化妆个护</li>
							<li className="liList">运动户外</li>
							<li className="liList">家居家纺</li>
							<li className="liList">礼品箱包</li>
							<li className="liList">母婴</li>
							<li className="liList">汽车</li>
							<li className="liList">其他商品</li>
							<li className="liList">限购专区</li>
						</ul>
					</div>
					<div className="showList">
						<div className="good-menu">
							<ul className="good-menu-list">
								<li className="current">
									<a href="javascript:;" className="aName">即将揭晓</a>
								</li>
								<li className="current">
									<a href="javascript:;" className="aName">人气</a>
								</li>
								<li className="current">
									<a href="javascript:;" className="aName">最新</a>
								</li>
								<li className="current">
									<a href="javascript:;" className="aName">价值</a>
									<span className="i-wrap">
										<i className="up"></i>
										<i className="down"></i>
									</span>
								</li>
							</ul>
						</div>
					</div>
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