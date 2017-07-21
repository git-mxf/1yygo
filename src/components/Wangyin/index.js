import React,{Component} from "react";
import "./index.scss"

class Wangyin extends Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		return (
			<div id="wangyin">
				<h4>
					您当前账户总额：<em>￥0.00</em>
				</h4>
				<p>系统维护中。。。</p>
			</div>
			)
	}
}

export default Wangyin