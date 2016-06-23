/**
 * @description [combox]
 */
import React from 'react';
import ClassNames from 'classnames';
import '../../less/common.less';
import '../../less/combox.less';
let me = null;
class ComBox extends React.Component{
	constructor(props) {
		super(props);
		me = this;
		this.state = {
			currentValue: {
				name: '',
				value: ''
			}
		}
	};

	//proptypes check
	static propTypes = {
		displayName: React.PropTypes.string,
		displayValue: React.PropTypes.string,
		emptyText: React.PropTypes.string,
		store: React.PropTypes.array,
		getValue: React.PropTypes.func,
		comboxCls: React.PropTypes.string,
		width: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		]),
		height: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		]),
		style: React.PropTypes.object
	};

	//default props
	static defaultProps = {
		displayName: '',
		displayValue: '',
		emptyText: '',
		store: [],
		getValue: (obj)=>{return obj;},
		comboxCls: '',
		width: '',
		height: 40,
		style: {}
	}

	//set value
	static setValue(key,_value){
		me.setState({
			currentValue:{
				name: key,
				value: _value
			}
		},()=>{
			//重写参数方法，抛出数值
			me.props.getValue(me.state.currentValue);
			ComBoxItem.slideToggle();
		});
	};

	//combox view
	_renderComboxView() {
		const {name, value} = this.state.currentValue;
		const {width, height} = this.props;
		const clsNams = ClassNames({
			box: true,
			vbox: true,
			'com-box-container': true
		});
		let cssSty = {
			width: width,
			height: height
		}
		cssSty = Object.assign(cssSty,this.props.style);
		return (
			<div style={cssSty} className={ClassNames(clsNams,this.props.comboxCls)}>
				<div className='combox-content' style={{height:cssSty.height,lineHeight:cssSty.height+'px'}}
					value={value}>{name==''?this.props.emptyText:name}</div>
				<ComboxBtn />
				<ComBoxItem items={this.props} css={cssSty} />
			</div>
		)
	};

	render() {
		return(
			this._renderComboxView()
		)
	}
}

//combox item
let comboxItem = null;
class ComBoxItem extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			status: 'up'
		}
		comboxItem = this;
	};

	//combox item click
	_handlerItem(key,value) {
		ComBox.setValue(key,value);
	};

	//item view
	_renderItem() {
		return this.props.items.store.map((item,index)=>{
			const {displayName, displayValue} = this.props.items;
			return (
				<div key={index} onClick={this._handlerItem.bind(this,item[displayName],item[displayValue])}
					className='combox-item'>
					{item[displayName]}
				</div>
			)
		});
	};

	//combox toggle
	static slideToggle(){
		comboxItem.setState({
			status: comboxItem.state.status === 'up'?'down':'up'
		});
	};

	render() {
		const clsName = ClassNames({
			'combox-item-panel': true,
			'combox-slide-down': this.state.status === 'down'
		});
		return (
			<div style={{top:this.props.css.height}} className={clsName}>
				{this._renderItem()}
			</div>
		)
	}
}

//combox btn
class ComboxBtn extends React.Component{
	constructor(props) {
		super(props);
	};

	//点击收缩展开
	_setStatus() {
		ComBoxItem.slideToggle();
	};

	render() {
		return (
			<span className='combox-select-btn'
				onClick={this._setStatus.bind(this)}></span>
		)
	}
}
export {ComBox};