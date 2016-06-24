import React, {Component, PropTypes} from 'react'
import ClassNames from 'classnames'
import ClassScore from '../utils/ClassCore'

let me;
class ScrollView extends Component{
	constructor(props){
		super(props)
		this.winW = 0
		this.winH = 0
		this.scrollW = 0
		this.head = null
		this.viewLeft = null
		this.viewRight = null
		this.scrollMain = null
		this.startX = 0
		this.endX = 0
		this.startY = 0
		this.temp = 0
		this.columnLen = 0
		this.count = 0
		this.showColumns = 0
		this.columnWidth = 0
		this.diffX = 0
		this.state = {
			height: 0
		}
		me = this
	}
	_renderHeaderView (){
		return this.props.children.map((item,index)=>{
			const {name, text} = item.props
			return (
				<dd key={index} style={{width: this.columnWidth}} className='header-item'>{text}</dd>
			)
		})
	}
	componentWillMount (){
		this._getWinSize();
		this.columnLen = this.props.children.length
		this.showColumns = this.props.columns
		this.columnWidth = (this.winW - 110)/this.showColumns
		this.scrollW = this.columnWidth * this.props.children.length
	}
	componentDidMount (){
		this.head = this.refs.viewHead
		this.scrollMain = this.refs.viewScroll
		this.viewLeft = this.refs.viewLeft
		this.viewRight = this.refs.viewList
		var itemH = this.viewRight.querySelector('dl').offsetHeight
		this.setState({
			height: itemH
		})
	}
	_getWinSize (){
		let de = document.documentElement
		let db = document.body
		let viewW = de.clientWidth == 0 ?  db.clientWidth : de.clientWidth
		let viewH = de.clientHeight == 0 ?  db.clientHeight : de.clientHeight
		this.winW = viewW
		this.winH = viewH
	}
	_createListView (){
		return this.props.store.map((record, index)=>{
			return (
				<dl key={index} className='box'>
					{this._createItem(record)}
				</dl>
			)
		})
	}
	_createItem (record){
		return this.props.children.map((child, index)=>{
			const {name} = child.props
			return (
				<dd key={index} style={{width: this.columnWidth}} className='box vbox item-sty'>{record.hasOwnProperty(name)?record[name]:null}</dd>
			)
		})
	}
	_createLeftTitle (){
		return this.props.store.map((record, index)=>{
			const keyWord = this.props.keyWord;
			return (
				<dd key={index} style={{height: this.state.height}} className='box vbox l-item-sty' onClick={this._cb.bind(this, record)}>{record.hasOwnProperty(keyWord)?record[keyWord]:null}</dd>
			)
		})
	}

	_cb (record, e) {
		this.props.cb(record);
	}
	_touchStart (e){
		e = e?e:window.event
        let touch = e.targetTouches[0];

        me.startX = touch.pageX;
        me.startY = touch.pageY;
	}
	_touchMove (e){
		e = e?e:window.event
        let touch = e.targetTouches[0]
        
        me.endY = touch.pageY - me.startY
        me.endX = touch.pageX - me.startX + me.temp


        if(Math.abs(me.endY) >= 50) {
        } else {
        	e.preventDefault()
	        if(me.endX > 0) {
	  			me.viewRight.style.transform = "translate3d(" + 0 + "px,0,0)";
		        me.head.style.transform = "translate3d(" + 0 + "px,0,0)";
		        me.endX = 0;
	  		} else if(me.endX < (-(me.columnLen - me.props.columns) * me.columnWidth + 20)) {
	  			me.viewRight.style.transform = "translate3d(" + (-(me.columnLen - me.props.columns) * me.columnWidth + 20) + "px,0,0)";
		        me.head.style.transform = "translate3d(" + (-(me.columnLen - me.props.columns) * me.columnWidth + 20) + "px,0,0)";
		        me.endX = (-(me.columnLen - me.props.columns) * me.columnWidth + 20);
	  		} else {
	  			me.viewRight.style.transform = "translate3d(" + me.endX + "px,0,0)";
	        	me.head.style.transform =  "translate3d(" + me.endX + "px,0,0)";
	  		}
        }
	}
	_touchEnd (e){
		me.temp = me.endX;
	}

	render (){
		return (
			<div ref='viewScroll' className='scroll-container' onTouchStart={this._touchStart} onTouchMove={this._touchMove} onTouchEnd={this._touchEnd} style={{width: this.winW, maxHeight: this.props.height ?  this.props.height + "px" : "300px"}}>
				<div className='box scroll-header'>
					<div className='header-holder'>{this.props.topLeft}</div>
					<div className='flex header-container'>
						<dl style={{width: this.scrollW}} ref='viewHead' className='scroll-wrapper left-easy'>
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
						<div style={{width: this.scrollW}} className='content-scroll-main left-easy' ref='viewList'>
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