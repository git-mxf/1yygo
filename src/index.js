import React,{Component} from "react";
import ReactDOM from "react-dom";
import App from "./components/App/index.js";
import CloudShop from "./components/CloudShop/index.js";
import New from "./components/New/index.js";
import Shai from "./components/Shai/index.js";
import Cart from "./components/Cart/index.js";
import MyCloud from "./components/MyCloud/index.js";
import Goodslist from "./components/Goodslist/index.js";
import Detail from "./components/Detail/index.js";
import Chongzhi from "./components/Chongzhi/index.js";
import Xiangou from "./components/Xiangou/index.js";
import Xiazai from "./components/Xiazai/index.js";
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";


ReactDOM.render(
	<Router>
	
		<App>
			<Switch>
				<Route path="/CloudShop" component={CloudShop} />
				<Route path="/New" component={New} />
				<Route path="/Shai" component={Shai} />
				<Route path="/Cart" component={Cart} />
				<Route path="/MyCloud" component={MyCloud} />
				<Route path="/Goodslist" component={Goodslist} />
				<Route path="/Chongzhi" component={Chongzhi} />
				<Route path="/Xiangou" component={Xiangou} />
				<Route path="/Xiazai" component={Xiazai} />
				<Route path="/Detail/:myID" component={Detail} />
				<Redirect from="/" to="/CloudShop" />
			</Switch>
		</App>
	</Router>
	,document.getElementById("box"));