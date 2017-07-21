import React,{Component} from "react";
import "./index.scss";
import jsonp from "./jsonp.js";



class New extends Component {
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
			<div id="New" >
			<header>
			<div></div>
			</header>
				<div className="ljp_all" onClick={this.dianji.bind(this)}>
					<span>全部分类</span>
					<i className="ljp_jiao"></i>
					<div className="ljp_two" id="two">
						<ul onClick={this.handler.bind(this)}>
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
				
					
					
					<div className="ljp_details">
						{

								this.state.looplist.map((item,index)=>
							<dl onClick={()=>{
										this.props.history.push(`/detail/123`);
									}} key={item.goodsID}>
								<dt>
								<img src={(function(){
									var img = item.goodsPic;
									return 'https://img.1yyg.net/GoodsPic/pic-200-200/' + img;
								})()} />
								</dt>

								<dd>{item.goodsSName}</dd>
								<dd><span>价值：￥</span><em>{item.codePrice}</em></dd>
								<dd>揭晓倒计时：</dd>
								<p id="timer" className="otime"></p>
							</dl>
							)
						}
					</div>
			</div>
			)
	}
	handler(ev){
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
var interval = 1000; 
function ShowCountDown(year,month,day,divname) 
{ 
var now = new Date(); 
var endDate = new Date(year, month-1, day); 
var leftTime=endDate.getTime()-now.getTime(); 
var leftsecond = parseInt(leftTime/1000); 
//var day1=parseInt(leftsecond/(24*60*60*6)); 
var day1=Math.floor(leftsecond/(60*60*24)); 
var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
var cc = document.getElementById(divname); 
	cc.innerHTML = '<em>'+hour+'</em>'+'<span>'+':'+'</span>'+'<em>'+minute+'</em>'+'<span>'+':'+'</span>'+'<em>'+second+'</em>'; 
} 
window.setInterval(function(){ShowCountDown('2017','02','07','timer');}, interval);


 

export default New