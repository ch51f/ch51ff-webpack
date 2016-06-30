import React, {Component, PropTypes} from 'react'

import ClassCore from '../utils/ClassCore'

export default class Scroll extends Component{
	constructor(props, context) {
		super(props, context);
		let {height, width} = this.props;
		this.coord = {
			startX: 0,
			startY: 0,
			endX: 0,
			endY: 0,
			angle: 0,
			translateX: 0,
			translateY: 0,
			maxX: 0,
			maxY: 0,
		}
	}

	componentDidMount() {
		let {scroll} = this.refs;
		this.coord.maxY = scroll.scrollHeight - scroll.offsetHeight;
		this.coord.maxX = scroll.scrollWidth - scroll.offsetWidth;
	}

	_touchStart(e) {
        e.preventDefault()
		let touch = e.targetTouches[0]; 
		this.coord.startX = touch.pageX; 
		this.coord.startY = touch.pageY;
		this.touchStartTime = new Date();
		let {el} = this.refs;
		ClassCore.removeClass(el, 'ease');
	}

	_touchMove(e) {
		let {vertical, horizontal} = this.props;
		let touch = e.targetTouches[0]; 
		let {el} = this.refs;

		this.coord.endX = touch.pageX - this.coord.startX + this.coord.translateX; 
		this.coord.endY = touch.pageY - this.coord.startY + this.coord.translateY; 
		this.coord.angle = Math.atan2(Math.abs(this.coord.endY), Math.abs(this.coord.endX)) * 180 / Math.PI; 

		if(this.coord.endY > 0) {
			this.coord.endY = 0;
		}
		if(this.coord.endY < -this.coord.maxY) {
			this.coord.endY = -this.coord.maxY;
		}

		el.style.transform = "translate3d(0," + this.coord.endY + "px,0)";
	}

	_touchEnd(e) {
		this.touchEndTime = new Date();
		let timeDif = this.touchEndTime - this.touchStartTime;
		if(timeDif < 300) {
			let more = (300 - timeDif) / 50  * (this.coord.endY - this.coord.translateY);
			this.coord.endY = this.coord.endY + more;
			if(this.coord.endY > 0) {
				this.coord.endY = 0;
			}
			if(this.coord.endY < -this.coord.maxY) {
				this.coord.endY = -this.coord.maxY;
			}
		}
		let {el} = this.refs;
		ClassCore.addClass(el, 'ease');
		el.style.transform = "translate3d(0," + this.coord.endY + "px,0)";
		this.coord.translateY = this.coord.endY;
	}

	render() {
		let {children, height, width} = this.props;
		if(!height) {
			height = document.documentElement.offsetHeight;
		}
		if(!width) {
			width = document.documentElement.offsetWidth;
		}
		let style = {
			height: height,
			width: width
		}
		return (
			<div ref="scroll" style={style} className="fch-scroll" onTouchStart={this._touchStart.bind(this)} onTouchMove={this._touchMove.bind(this)} onTouchEnd={this._touchEnd.bind(this)}>
				<div ref="el" className="con">
					{children}
				</div>
			</div>
		)
	}
}
