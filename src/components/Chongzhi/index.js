import React,{Component} from "react";
import "./index.scss"
import {
	NavLink
} from "react-router-dom"

class Chongzhi extends Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		return (
			<div id="chongzhi">
				<div className="header">
					<NavLink to="/Cloudshop">
					<div className="left">
						
					</div>
					</NavLink>
					<div className="center">网银充值</div>
					<NavLink to="/Cloudshop"><div className="right"></div></NavLink>
				</div>
				<ul className="lis">

					<li>
						<NavLink to="/chongzhi/wangyin" activeClassName="selec">网银充值</NavLink>
					</li>
					<li>
						<NavLink to="/chongzhi/kachong" activeClassName="selec">充值卡充值</NavLink>
					</li>
				</ul>
				{
					this.props.children
				}
				
			</div>
			)
	}
}

export default Chongzhi