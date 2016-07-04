import React, {Component, PropTypes} from 'react'
import ClassNames from 'classnames'
import ClassScore from '../utils/ClassCore'

class ScrollView extends Component{
	constructor(props){
		super(props);
		const {children, columns, height} = this.props;
		const de = document.documentElement
		const db = document.body
		let viewW = de.clientWidth == 0 ?  db.clientWidth : de.clientWidth;
		let columnWidth = (viewW - 110) / columns;
		let scrollW = columnWidth * children.length;
		let winH = height ? height : 300;
		this.state = {
			winW: viewW,
			winH: winH,
			scrollW: scrollW,
			columnLen: children.length,
			showColumns: columns,
			columnWidth: columnWidth,
			height: 0,
		}
		this.vertical = true;
		this.startX = 0;
		this.endX = 0;
		this.startY = 0;
		this.endY = 0;
		this.transformX = 0;
		this._touchStart = this._touchStart.bind(this);
		this._touchMove = this._touchMove.bind(this);
		this._touchEnd = this._touchEnd.bind(this);
	}
	componentDidMount (){
		const {viewScroll, viewList} = this.refs;
		let itemH = viewList.querySelector('dl').offsetHeight;
		this.setState({
			height: itemH
		})

		this._addEvent(viewScroll,'touchstart', this._touchStart);
		this._addEvent(viewScroll,'touchmove', this._touchMove);
		this._addEvent(viewScroll,'touchend', this._touchEnd);
	}

	componentWillUpdate() {
		const {viewScroll} = this.refs;
		this._addEvent(viewScroll,'touchstart', this._touchStart);
		this._addEvent(viewScroll,'touchmove', this._touchMove);
		this._addEvent(viewScroll,'touchend', this._touchEnd);
	}

	componentWillUnmount() {
		const {viewScroll} = this.refs;
		this._removeEvent(viewScroll,'touchstart', this._touchStart);
		this._removeEvent(viewScroll,'touchmove', this._touchMove);
		this._removeEvent(viewScroll,'touchend', this._touchEnd);
	}

	_renderHeaderView (){
		const {children} = this.props;
		const {columnWidth} = this.state;
		return children.map((item,index)=>{
			const {name, text} = item.props;
			return (
				<dd key={index} style={{width: columnWidth}} className='header-item'>{text}</dd>
			)
		})
	}

	_createLeftTitle (){
		const {store, keyWord} = this.props;
		const {height} = this.state;
		return store.map((record, index)=>{
			return (
				<dd key={index} style={{height: height}} className='box vbox l-item-sty' onClick={this._cb.bind(this, record)}>{record.hasOwnProperty(keyWord)?record[keyWord]:null}</dd>
			)
		})
	}

	_cb (record, e) {
		const {cb} = this.props;
		if(cb) {
			cb(record);
		} else {
			return false;
		}
	}

	_createListView (){
		const {store} = this.props;
		return store.map((record, index)=>{
			return (
				<dl key={index} className='box'>
					{this._createItem(record)}
				</dl>
			)
		})
	}

	_createItem (record){
		const {children} = this.props;
		const {columnWidth} = this.state;
		return children.map((child, index)=>{
			const {name} = child.props
			return (
				<dd key={index} style={{width: columnWidth}} className='box vbox item-sty'>{record.hasOwnProperty(name)?record[name]:null}</dd>
			)
		})
	}

	_touchStart (e){
		e = e?e:window.event; 
		let touch = e.targetTouches[0]; 
		this.startX = touch.pageX;
		this.startY = touch.pageY;
	}
	_touchMove (e){
		e = e?e:window.event; 
		let touch = e.targetTouches[0] 
		this.endY = touch.pageY - this.startY;
		this.endX = touch.pageX - this.startX + this.transformX;
		let angle = Math.atan2(Math.abs(touch.pageY - this.startY), Math.abs(touch.pageX - this.startX)) * 180 / Math.PI;
		if(angle > 45) {
			this.vertical = true;
		} else {
			this.vertical = false;
		} 

		const {viewHead, viewList} = this.refs;
		if(this.vertical) {
			viewList.style.transform = "translate3d(" + this.transformX + "px,0,0)"; 
			viewHead.style.transform = "translate3d(" + this.transformX + "px,0,0)"; 

			viewList.style.webkitTransform = "translate3d(" + this.transformX + "px,0,0)"; 
			viewHead.style.webkitTransform = "translate3d(" + this.transformX + "px,0,0)"; 
			this.endX = this.transformX;
		} else {
			e.preventDefault();
			let max = (-(this.state.columnLen - this.props.columns) * this.state.columnWidth + 20);
			if(this.endX > 0) {
				viewList.style.transform = "translate3d(" + 0 + "px,0,0)"; 
				viewHead.style.transform = "translate3d(" + 0 + "px,0,0)"; 

				viewList.style.webkitTransform = "translate3d(" + 0 + "px,0,0)"; 
				viewHead.style.webkitTransform = "translate3d(" + 0 + "px,0,0)"; 
				this.endX = 0;
			} else if(this.endX < max) {
				viewList.style.transform = "translate3d(" + max + "px,0,0)"; 
				viewHead.style.transform = "translate3d(" + max + "px,0,0)";

				viewList.style.webkitTransform = "translate3d(" + max + "px,0,0)"; 
				viewHead.style.webkitTransform = "translate3d(" + max + "px,0,0)"; 
				this.endX = max;
			} else {
				viewList.style.transform = "translate3d(" + this.endX + "px,0,0)"; 
				viewHead.style.transform = "translate3d(" + this.endX + "px,0,0)"; 

				viewList.style.webkitTransform = "translate3d(" + this.endX + "px,0,0)"; 
				viewHead.style.webkitTransform = "translate3d(" + this.endX + "px,0,0)"; 
			} 
		} 
	}
	_touchEnd (e){
		this.vertical = true;
		this.transformX = this.endX;
	}

	/**
	 * [绑定事件]
	 * @param  {[type]} target   [目标对象]
	 * @param  {[type]} evtName  [事件名]
	 * @param  {[type]} func     [绑定函数]
	 */
	_addEvent(target, evtName, func) {
		if(target.addEventListener){
			target.addEventListener(evtName,func,false);
		}else if(target.attachEvent){
			target.attachEvent('on' + evtName,func);
		}else{
			target['on' + evtName] = func;
		}
	};

	/**
	 * [移除事件]
	 * @param  {[type]} target   [目标对象]
	 * @param  {[type]} evtName  [事件名]
	 * @param  {[type]} func     [要移除的函数]
	 */
	_removeEvent(target, evtName, func) {
		if(target.addEventListener){
			target.removeEventListener(evtName,func,false);
		}else if(target.attachEvent){
			target.detachEvent('on' + evtName,func);
		}else{
			delete target['on' + evtName];
		}
	}

	render (){
		const {winW, winH, scrollW} = this.state;
		const {topLeft} = this.props;
		return (
			<div ref='viewScroll' className='scroll-container' style={{width: winW, maxHeight: winH}}>
				<div className='box scroll-header'>
					<div className='header-holder'>{topLeft}</div>
					<div className='flex header-container'>
						<dl style={{width: scrollW}} ref='viewHead' className='scroll-wrapper left-easy'>
							{this._renderHeaderView()}
						</dl>
					</div>
				</div>
				<div className='box scroll-con' ref='viewLeft'>
					<div className='left-panel'>
						<dl className='box vertical left-item-wrapper'>
							{this._createLeftTitle()}
						</dl>
					</div>
					<div className='flex right-panel'>
						<div style={{width: scrollW}} className='content-scroll-main left-easy' ref='viewList'>
							{this._createListView()}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

ScrollView.propTypes = {
	store: PropTypes.array,
	keyWord: PropTypes.string,
	columns: PropTypes.number,
	topLeft: PropTypes.string
};
ScrollView.defaultProps = {
	store: [] 
}

class Column extends React.Component{
	constructor(props){
		super(props)
	}
	render (){
		return null
	}
}

Column.propTypes = {
	name: PropTypes.string, 
	text: PropTypes.string 
}; 
Column.defaultProps = {
	name: '', 
	text: ''
}

export {ScrollView, Column}