/**
 * @description [from表单]
 * @author [zyh]
 * @date  2016-05-17
 */
import React from 'react';
import ClassNames from 'classnames';
import ReactDom from 'react-dom';
class Form extends React.Component{
	constructor(props){
		super(props);
		this.form = null;
	}

	static mixins = [];

	//获取表单字段
	getValue() {
		let elements = Array.from(this.form.elements);
		let params = {};
		elements.map((el)=>{
			if(el.name){
				params[el.name] = el.value;
			}
		});
		return params;
	};

	//表单装载数据
	loadData(params) {
		let elements = Array.from(this.form.elements);
		elements.map((el)=>{
			if(params[el.name]){
				for(let v in params){
					if(v = el.name){
						el.value = params[v];
						continue;
					}
				}
			}
		});
	};

	//component loaded
	componentDidMount() {
		this.form = ReactDom.findDOMNode(this);
	};

	render() {
		const {name, children} = this.props;
		return (
			<form ref='form' name={name}>
				{children}
			</form>
		)
	}
}

export default Form;

