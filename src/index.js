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
import All from "./components/All/index.js";
import Login from "./components/Login/index.js";
import Register from "./components/Register/index.js";
import Search from "./components/Search/index.js"
import Logout from "./components/Logout/index.js"
import Cartin from "./components/Cartin/index.js"
import Jijiang from "./components/Jijiang/index.js"
import Person from "./components/Person/index.js"
import Newshop from "./components/Newshop/index.js"
import Value from "./components/Value/index.js"
import Wangyin from "./components/Wangyin/index.js"
import Kachong from "./components/Kachong/index.js"
import MyCloudChild from "./components/MyCloudChild/index.js"

 
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";


ReactDOM.render(
	<Router>
		<All>
			<Switch>

			<Route path="/Login" component={Login} />
			<Route path="/Register" component={Register} />
			<Route path="/Logout" component={Logout} />
			<Route path="/Search" component={Search} />
			<Route path="/Detail/:myID" component={Detail} />
			<Redirect from="/Detail" to="/Detail/:myID" />
			<Route path="/Chongzhi" render={()=>
				<Chongzhi>
					<Switch>
						<Route path="/Chongzhi/Wangyin" component={Wangyin} />
						<Route path="/Chongzhi/Kachong" component={Kachong} />
						<Redirect from="/Chongzhi" to="/Chongzhi/Wangyin" />
					</Switch>
				</Chongzhi>
			} />
			<Route path="/" render={()=>
					<App>
						<Route path="/CloudShop" render={()=>
							<CloudShop>
								<Switch>
									<Route path='/CloudShop/jijiang' component={Jijiang} />
									<Route path='/CloudShop/person' component={Person} />
									<Route path='/CloudShop/newshop' component={Newshop} />
									<Route path='/CloudShop/value' component={Value} />
									<Redirect from="/CloudShop" to="/CloudShop/jijiang" />
								</Switch>
							</CloudShop>
						} />
						
						<Route path="/New" component={New} />
						<Route path="/Shai" component={Shai} />
						<Route path="/Cart" component={Cart} />
						<Route path="/Cartin" component={Cartin} />
						<Route path="/MyCloud" component={MyCloud} />
						<Route path="/MyCloudChild" component={MyCloudChild} />
						<Route path="/Goodslist" component={Goodslist} />
						
						<Route path="/Xiangou" component={Xiangou} />
						<Route path="/Xiazai" component={Xiazai} />

						<Redirect from="/" to="/CloudShop/jijiang" />
					</App>
				}/>

			
			</Switch>
		</All>
	</Router>
	,document.getElementById("box"));