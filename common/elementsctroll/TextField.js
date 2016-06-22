/**
 * @description input组件
 * @author  zyh
 * @date  201605-11
 */
import React from 'react';
import classNames from 'classnames';
import '../../less/common.less';
import '../../less/textfield.less';
class TextField extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			a:1
		}
	}

	//propType check
	static propTypes = {
		width: React.PropTypes.oneOfType([
			React.PropTypes.string,
     		React.PropTypes.number
		]),
		height: React.PropTypes.oneOfType([
			React.PropTypes.string,
     		React.PropTypes.number
		]),
		type: React.PropTypes.string,
		disabled: React.PropTypes.string,
		readonly: React.PropTypes.string,
		radius: React.PropTypes.number,
		color: React.PropTypes.string,
		fontSize: React.PropTypes.number,
		placeholder: React.PropTypes.string,
		boredr: React.PropTypes.string,
		backgroundColor: React.PropTypes.string,
		textFieldCls: React.PropTypes.string,
		defaultValue: React.PropTypes.string,
		layout: React.PropTypes.string,
		disabledCls: React.PropTypes.string,
		listeners: React.PropTypes.object,
		style: React.PropTypes.object
	};

	//default propTypes
	static defaultProps = {
		width: '',
		height: '',
		type: 'text',
		disabled: '',
		readonly: '',
		radius: null,
		color: '',
		fontSize: null,
		placeholder: '',
		border: '',
		backgroundColor: '',
		textFieldCls: '',
		defaultValue: '',
		layout: '',
		disabledCls: 'text-field-disabled',
		listeners: {},
		style: {}
	};

	static notify() {
		debugger;
	};
	notifys(){

	}

	//evt style set
	_renderInput() {
		const {
			width, height, type, radius, color, fontSize, border, backgroundColor, disabledCls,
			textFieldCls, layout, defaultValue, listeners, style, ...other} = this.props; 
		let cssSty = {
			width: layout=='flex'?'100%':width,
			height: layout=='flex'?'100%':height,
			type: type,
			borderRadius: radius,
			color: color,
			fontSize: fontSize,
			border: border,
			backgroundColor: backgroundColor
		}
		cssSty = Object.assign(cssSty,style);
		let clsName = classNames({
			'default-text-field': true,
			'clear-bg': true
		});
		return (
			<input {...listeners} style={cssSty} defaultValue={defaultValue}
				className={classNames(clsName,textFieldCls,this.props.disabled?disabledCls:null)} {...other} />
		)
	}
	
	render() {
		return(
			this._renderInput()
		)
	}
}
export default TextField;