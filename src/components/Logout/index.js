import React,{Component} from "react";
import "./index.scss"

class Logout extends Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		return (

			<div>
				<div id="logotDiv">
					<div className="back"><i className="iconfont icon-zuo backzuo"></i></div>
					<div className="denglu">设置</div>
					<div className="homepage"><i className="iconfont icon-shouye homgsy"></i></div>
				</div>
				<a href="javascript:;" className="personalData">
					<div className="zl">个人资料</div>
					<div className="rightjt"></div>
				</a>
				<a href="javascript:;" className="securitySettings">
					<div className="sz">安全设置</div>
					<div className="rightjt"></div>
				</a>
				<a href="javascript:;" className="shareMoney">
					<div className="zq">分享赚钱</div>
					<div className="rightjt"></div>
				</a>
				<a href="javascript:;"  className="outLogin">退出登录</a>
			</div>
			)
	}
}

export default Logout