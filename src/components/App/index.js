import React,{Component} from "react";
import "./index.scss"
import {
	NavLink
} from "react-router-dom"


class App extends Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		return (
			<div id="app">
				<header>
					<div></div>
				</header>

				<section>
					{this.props.children}
				</section>

				<footer>
					<ul>
						<li>
							<NavLink to="/CloudShop" activeClassName="myselected">
								<span></span>
								云购
							</NavLink>
						</li>
						<li>
							<NavLink to="/New" activeClassName="myselected">
								<span></span>
								最新揭晓
							</NavLink>
						</li>
						<li>
							<NavLink to="/Shai" activeClassName="myselected">
								<span></span>
								晒单
							</NavLink>
						</li>
						<li>
							<NavLink to="/Cart" activeClassName="myselected">
								<span></span>
								购物车
							</NavLink>
						</li>
						<li>
							<NavLink to="/MyCloud" activeClassName="myselected">
								<span></span>
								我的云购
							</NavLink>
						</li>
					</ul>
				</footer>
			</div>
			)
	}
}

export default App