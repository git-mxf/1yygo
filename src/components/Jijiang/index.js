import React,{Component} from "react";
import "./index.scss"
import jsonp from "./jsonp.js";

class Jijiang extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			looplist:[]
		}
	}

	componentDidMount() {
		jsonp(res=>{
			console.log(res.listItems);
			this.setState({
				looplist:res.listItems
			})
		})
	}

	render(){
		return (
			<div>
				<div className="product">
					<ul>
					
					{
					this.state.looplist.map((item,index)=>
						<li onClick={()=>{
									this.props.history.push(`/detail/${item.goodsID}`);
								}} key={item.goodsID}>

							<img src={(function(){
								var img = item.goodsPic;
								return 'https://img.1yyg.net/GoodsPic/pic-200-200/' + img;
							})()} />
							<p className="duc">{item.goodsSName}</p>
							<span className="price">价值：￥{item.codePrice}</span>
							<p className="u-progress">
								<span className="pgbar"></span>
							</p>
							<div className="bot">
								<a className="left" href="javascipt:;">立即一元云购</a>
								<a className="right" href="javascipt:;"><i></i></a>
							</div>
						</li>
						)
						
					}
					</ul>
				</div>
			</div>
			)
	}
}

export default Jijiang