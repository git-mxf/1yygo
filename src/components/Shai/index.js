import React,{Component} from "react";
import "./index.scss";
import jsonp from "./jsonp.js";

class Shai extends Component {
	constructor(props) {
		super(props);
		this.state={
			currentIndex: 0,
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
			<div id="shai">
				<header>
					<div></div>
				</header>
				<div className="ljp_all">
				<ul onClick={this.handlee.bind(this)}>
					<li data-list="11" 
							className={this.state.currentIndex=='0'?'active1':''}>
							最新
					</li>
					<li data-list="12" 
							className={this.state.currentIndex=='0'?'active1':''}>精华</li>
					<li data-list="13" 
							className={this.state.currentIndex=='0'?'active1':''}>推荐</li>
					<li data-list="14" 
							className={this.state.currentIndex=='0'?'active1':''}>人气</li>
				</ul>
					<span onClick={this.dianji.bind(this)}>全部分类</span>
					<i className="ljp_jiao"></i>
					<div className="ljp_two" id="two">
						<ul onClick={this.handlee.bind(this)}>
							<li data-list="0" 
							className={this.state.currentIndex=='0'?'active':''}>
								全部分类
							</li>
							<li data-list="1" 
							className={this.state.currentIndex=='1'?'active':''}>
								手机数码
							</li>
							<li data-list="2" 
							className={this.state.currentIndex=='2'?'active':''}>
								电脑办公
							</li>
							<li data-list="3" 
							className={this.state.currentIndex=='3'?'active':''}>
								家用电器
							</li>
							<li data-list="4" 
							className={this.state.currentIndex=='4'?'active':''}>
								化妆个护
							</li>
							<li data-list="5" 
							className={this.state.currentIndex=='5'?'active':''}>
								食品饮料
							</li>
							<li data-list="6" 
							className={this.state.currentIndex=='6'?'active':''}>
								家居家纺
							</li>
							<li data-list="7" 
							className={this.state.currentIndex=='7'?'active':''}>
								钟表首饰
							</li>
							<li data-list="8" 
							className={this.state.currentIndex=='8'?'active':''}>
								礼品箱包
							</li>
							<li data-list="9" 
							className={this.state.currentIndex=='9'?'active':''}>
								户外运动
							</li>
							<li data-list="10" 
							className={this.state.currentIndex=='10'?'active':''}>
								其他商品
							</li>
						</ul>
					</div>
				</div>
				{
					this.state.looplist.map((item,index)=>
						<div className="ping" onClick={()=>{
									this.props.history.push(`/detail/123`);
								}} key={item.goodsID}>
						
							<div className="name">
								<a href="#">{item.userName}</a>
								<span>{item.postTime}</span>
							</div>
							<div className="wenzi">
								{item.postTitle}
							</div>
							<div className="tu">
								<ul>
									<li>
									<img src={(function(){
									var img = item.postAllPic;
									return 'https://img.1yyg.net/userpost/small/' + img;
								})()} />
									</li>
									<li>
									<img src={(function(){
									var img = item.postAllPic.split(",",3)[1];
									return 'https://img.1yyg.net/userpost/small/' + img;
								})()} />
									</li>
									<li>
									<img src={(function(){
									var img = item.postAllPic.split(",",3)[2];
									return 'https://img.1yyg.net/userpost/small/' + img;
								})()} />
									</li>
								</ul>
							</div>
							<div className="clear"></div>
							<div className="xiazi">
							  {item.postContent}
							</div>
							<div className="zan">
							<span>{item.postHits}</span>
							</div>
							
						</div>
						)
				}
			
			</div>
			)
	}
	handlee(ev){
		console.log(ev.target.dataset.list)
		this.setState({
			currentIndex : ev.target.dataset.list
		})
	}
	dianji(){
		if(two.style.display=='none'){ // == 判断div.display是否为显示
                    two.style.display='block'; //= 赋值也可了解成改变
                }
                else{
                    two.style.display='none';
                }
	}
}

export default Shai