/**
 * @description 加载中
 */
import React from 'react';
let me = this;
class Loading extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isShow: false
		}
		me = this;
	}

	show(){
		me.setState({isShow:true});
	}

	hide(){
		me.setState({isShow:false});
	}

	render() {
		let {isShow} = this.props;
		return(
			<div className="spinner-wrapper box box-center" style={{display:isShow?'block':'none'}}>
				<div className="spinner-body">
					<div className="spinner">
					  <div className="spinner-container container1">
					    <div className="circle1"></div>
					    <div className="circle2"></div>
					    <div className="circle3"></div>
					    <div className="circle4"></div>
					  </div>
					  <div className="spinner-container container2">
					    <div className="circle1"></div>
					    <div className="circle2"></div>
					    <div className="circle3"></div>
					    <div className="circle4"></div>
					  </div>
					  <div className="spinner-container container3">
					    <div className="circle1"></div>
					    <div className="circle2"></div>
					    <div className="circle3"></div>
					    <div className="circle4"></div>
					  </div>
					</div>
					<div className='spinner-text'>{this.props.title}</div>
				</div>
			</div>
		)
	}
}

Loading.propTypes = {
	title: React.PropTypes.string,
	isShow: React.PropTypes.bool
};

Loading.defaultProps = {
 	title: '数据加载中',
 	isShow: false
};

export default Loading;