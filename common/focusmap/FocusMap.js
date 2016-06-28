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
		}

		this.auto = true;
		this.count = 0;
		this.startX = 0;
		this.endX = 0;
		this.itemW = 0;
		this.wrapW = 0;
		this.curIndex = 0;

		this._touchStart = this._touchStart.bind(this);
		this._touchMove = this._touchMove.bind(this);
		this._touchEnd = this._touchEnd.bind(this);
		// this._click = this._click.bind(this);
	};

	_renderMapImgView() {
		return Children.map(this.props.children, (item,index)=>{
			return (
				item
			)
		});
	};

	componentDidMount() {
		let {children} = this.props;
		let {mapContainer, scrollWrapper} = this.refs;

		this.count = Children.count(children);
		this.itemW = mapContainer.offsetWidth;
		this.wrapW = this.count * this.itemW;

		scrollWrapper.style.width = (this.wrapW) + 'px';
		ClassCore.addClass(scrollWrapper, 'focus-map-easy');

		if(this.count > 0) {
			this.setState({
				showLoading: false
			});
			if(this.auto) {
				this._startTimer();
			}
		}
	};

	_touchStart(e, t) {
		e = e?e:window.event;
		e.preventDefault();
		let touch = e.targetTouches[0];
		if(this.auto) {
			this._stopTimer();
		}
		this.startX = touch.pageX;
	};

	_touchMove(e) {
		let {scrollWrapper} = this.refs;
		ClassCore.removeClass(scrollWrapper,'focus-map-easy');
		e = e?e:window.event;
		e.preventDefault();
		let touch = e.targetTouches[0];
		this.endX = touch.pageX - this.startX;
		let _sLeft = -this.curIndex * this.itemW + this.endX;
		let maxW = -(this.count - 1) * this.itemW;

		if(this.endX < 0) {
			_sLeft = Math.max(_sLeft, maxW);
		} else {
			_sLeft = Math.min(0, _sLeft);
		}

		scrollWrapper.style.transform = 'translate3d(' + _sLeft + 'px, 0, 0)';
	};

	_touchEnd(e) {
		let {scrollWrapper} = this.refs;
		e = e?e:window.event;
		e.preventDefault();
		let touch = e.targetTouches[0];
		if(this.endX >= 100){
			if(this.curIndex !=0) this.curIndex--;
		}else if(this.endX <= -100){
			if(this.curIndex != this.count - 1) this.curIndex++;
		}
		ClassCore.addClass(scrollWrapper,'focus-map-easy');
		let _scrWidth = -this.curIndex * this.itemW;
		scrollWrapper.style.transform = 'translate3d(' + _scrWidth + 'px, 0, 0)';
		this._changeCur();
		if(this.auto) {
			this._startTimer();
		}
	};

	_renderMapIndexView() {
		const {curIndex} = this.state;
		const {children} = this.props;
		return React.Children.map(children,(item,index)=>{
			let clsName = ClassNames({
				'map-index-sty': true,
				'active-index-sty': index == curIndex
			});
			return (
				<span className={clsName}></span>
			)
		})
	};


	_changeCur() {
		this.setState({curIndex: this.curIndex});
	}

	_startTimer() {
		let that = this;
		let {scrollWrapper} = this.refs;
		this._stopTimer();
		this.timer = setInterval(function(){
			that.curIndex ++;
			if(that.curIndex == that.count){
				that.curIndex = 0;
			}
			let _scrWidth = -that.curIndex * that.itemW;
			scrollWrapper.style.transform = 'translate3d(' + _scrWidth + 'px, 0, 0)';
			that._changeCur();
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
		const {showLoading} = this.state
		const {curIndex} = this;
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
					<div className='map-index-pos'>
						{this._renderMapIndexView()}
					</div>
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