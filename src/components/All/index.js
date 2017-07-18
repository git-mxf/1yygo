import React,{Component} from "react";
import "./index.scss"
import {
	NavLink
} from "react-router-dom"


class All extends Component {
	constructor(props) {
		super(props);
		
	}

	render(){
		return (
			<div id="All">
					{this.props.children}			
			</div>
			)
	}
}

export default All