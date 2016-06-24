/**
 * @description  焦点图轮播
 */

import React, {Component, PropTypes, Children} from 'react';
import ClassNames from 'classnames';

import ClassCore from '../utils/ClassCore';

class FocusMapView extends Component{
	constructor(props) {
		super(props);
		this.state = {
			showLoading: true,
			curIndex: 0,
			count: 0,
			s_x: 0,
			e_x: 0,
			auto: true,
			w_i: 0,
			w_a: 0
		}

		this._touchStart = this._touchStart.bind(this);
		this._touchMove = this._touchMove.bind(this);
		this._touchEnd = this._touchEnd.bind(this);
	};

	_renderMapImgView() {
		return Children.map(this.props.children, (item,index)=>{
			return (
				item
			)
		});
	};

	componentWillMount() {
	};

	componentDidMount() {
		let {children} = this.props;
		let {mapContainer, scrollWrapper} = this.refs;
		let {auto} = this.state;
		let w_i = mapContainer.offsetWidth,
			count = Children.count(children);
		this.setState({
			count: count,
			w_i: w_i,
			w_a: w_i * count
		});
		scrollWrapper.style.width = (count * w_i) + 'px';
		ClassCore.addClass(scrollWrapper, 'focus-map-easy');

		if(count > 0) {
			this.setState({
				showLoading: false
			});
			if(auto) {
				this._startTimer();
			}
		}
	};

	componentWillUnmount() {};

	_touchStart(e, t) {
		let {auto} = this.state;
		e = e?e:window.event;
		e.preventDefault();
		let touch = e.targetTouches[0];
		if(auto) {
			this._stopTimer();
		}
		this.setState({s_x: touch.pageX});
	};

	_touchMove(e) {
		let {s_x, curIndex, w_i, count} = this.state;
		let {scrollWrapper} = this.refs;
		ClassCore.removeClass(scrollWrapper,'focus-map-easy');
		e = e?e:window.event;
		e.preventDefault();
		let touch = e.targetTouches[0];
		let e_x = touch.pageX - s_x;
		this.setState({e_x: e_x});
		let _sLeft = -curIndex * w_i + e_x;
		let maxW = -(count - 1) * w_i;

		if(e_x < 0) {
			_sLeft = Math.max(_sLeft, maxW);
		} else {
			_sLeft = Math.min(0, _sLeft);
		}

		scrollWrapper.style.left = _sLeft + 'px';
	};

	_touchEnd(e) {
		let {e_x, curIndex, count, auto, w_i} = this.state;
		let {scrollWrapper} = this.refs;
		e = e?e:window.event;
		e.preventDefault();
		let touch = e.targetTouches[0];
		if(e_x >= 100){
			if(curIndex !=0) curIndex--;
		}else if(e_x <= -100){
			if(curIndex != count - 1) curIndex++;
		}
		this.setState({curIndex: curIndex})
		ClassCore.addClass(scrollWrapper,'focus-map-easy');
		let _scrWidth = -curIndex * w_i;
		scrollWrapper.style.left = _scrWidth + 'px';
		if(auto) {
			this._startTimer();
		}
	};

	_startTimer() {
		let {curIndex, count, w_i} = this.state;
		let that = this;
		let {scrollWrapper} = this.refs;
		this._stopTimer();
		this.timer = setInterval(function(){
			curIndex ++;
			if(curIndex == count){
				curIndex = 0;
			}
			that.setState({curIndex: curIndex})
			let _scrWidth = -curIndex * w_i;
			console.log(_scrWidth);
			scrollWrapper.style.left = _scrWidth + 'px';
		},this.props.speed);
	};
	_stopTimer() {
		clearInterval(this.timer);
	};


	_addEvent(target, evtName, func) {
		if(target.addEventListener){
			target.addEventListener(evtName,func,false);
		}else if(target.attachEvent){
			target.attachEvent('on' + evtName,func);
		}else{
			target['on' + evtName] = func;
		}
	};
	_removeEvent(target, evtName, func) {
		if(target.addEventListener){
			target.removeEventListener(evtName,func,false);
		}else if(target.attachEvent){
			target.detachEvent('on' + evtName,func);
		}else{
			delete target['on' + evtName];
		}
	};
	render() {
		const {height, children} = this.props;
		const {curIndex, showLoading} = this.state;
		return (
			<div ref='mapContainer' style={{height:height}} className='focus-map-container'>
				{showLoading ? 
					<div className='focus-map-loading'>
						<div className='box box-center map-loading-content'>正在加载图片...</div>
					</div> : null
				}
				<div ref='scrollWrapper' onTouchStart={this._touchStart} onTouchMove={this._touchMove} onTouchEnd={this._touchEnd} className='box focus-map-scroll'>
					{this._renderMapImgView()}
				</div>
				<div className='box box-center focus-index-wrapper'>
					<FoucsMapIndex child={children} curIndex={this.state.curIndex} />
				</div>
			</div>
		)
	}
}

FocusMapView.propTypes = {
	speed: React.PropTypes.number, 
	height: React.PropTypes.oneOfType([
		React.PropTypes.number, 
		React.PropTypes.string 
	]) 
};

FocusMapView.defaultProps = {
	speed: 4000, 
	height: ''
};

/**
 * @description [焦点图下标]
 */
class FoucsMapIndex extends React.Component{
	constructor(props) {
		super(props);
	};
	_renderMapIndexView() {
		const {child, curIndex} = this.props;
		return React.Children.map(child,(item,index)=>{
			let clsName = ClassNames({
				'map-index-sty': true,
				'active-index-sty': index == curIndex
			});
			return (
				<span className={clsName}></span>
			)
		})
	};
	render() {
		return (
			<div className='map-index-pos'>
				{this._renderMapIndexView()}
			</div>
		)
	}
}

/**
 * @description [焦点图片区域]
 */
class MapItem extends Component{
	constructor(props) {
		super(props);
	};
	render() {
		const {imgUrl, children} = this.props;
		return(
			<div style={{background:'url('+imgUrl+') no-repeat center 0', 'backgroundSize':'cover'}} className='flex focus-map-item'>
				{children}
			</div>
		)
	}
}

export {FocusMapView, MapItem};