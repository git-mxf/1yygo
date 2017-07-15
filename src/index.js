import React,{Component} from "react";
import ReactDOM from "react-dom";
import App from "./components/App/index.js";
import CloudShop from "./components/CloudShop/index.js";
import New from "./components/New/index.js";
import Shai from "./components/Shai/index.js";
import Cart from "./components/Cart/index.js";
import MyCloud from "./components/MyCloud/index.js";
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
				<Redirect from="/" to="/CloudShop" />
			</Switch>
		</App>
	</Router>
	,document.getElementById("box"));