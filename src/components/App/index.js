import React,{Component} from "react";
import "./index.scss"

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

			</div>
			)
	}
}

export default App