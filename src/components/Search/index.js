import React,{Component} from "react";
import "./index.scss";
import "../../assets/font/iconfont.css"


class Search extends Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		return (
			<div id="Search">
				<header>
					<div className="left" onClick={()=>{
									this.props.history.push(`/CloudShop`)
								}}>
			
					</div>
					<div className="center">搜索</div>
					<div className="right"></div>
				</header>
				<section>
					<div className="top">
						<span><i className="iconfont icon-fangdajing"></i></span>
						<input type="text" placeholder="输入“汽车”试一试" />
					</div>
					<div className="sear">搜索</div>
				</section>
			</div>
			)
	}
}

export default Search