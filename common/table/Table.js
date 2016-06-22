/**
 * @description [table数据填充]
 * @author [zyh]
 * @date  2016-05-17
 */
import React from 'react';
import '../base.less';
import './tabel.less';
class Tabel extends React.Component{
	constructor(pops){
		super(pops);
	};

	//表头
	renderTableHeader() {
		return this.props.children.map((item,index)=>{
			const {title} = item.props;
			return (
				<th key={index}>{title}</th>
			)
		})
	};

	//表格体
	renderTableBody(){
		return this.props.store.map((item,index)=>{
			return (
				<tr key={index}>
					{this.createTabField(item)}
				</tr>
			)
		})
	};

	//表格字段
	createTabField(fieldStore) {
		return this.props.children.map((field,index)=>{
			const {name, children, itemClick} = field.props;
			return (
				<td key={index}>
					{fieldStore[name]?fieldStore[name]:children}
				</td>
			)
		});
	};

	render() {
		return (
			<table className='data-table'>
				<thead>
					<tr>
						{this.renderTableHeader()}
					</tr>
				</thead>
				<tbody>
					{this.renderTableBody()}
				</tbody>
			</table>
		)
	};
}

Tabel.propTypes = {
	store: React.PropTypes.array
};

Tabel.defaultProps = {
	store: []
};

//tabel column
class Column extends React.Component{
	constructor(pops){
		super(pops);
	};

	render() {
		return (
			this
		)
	}
}

Column.propTypes = {
	name: React.PropTypes.string,
	title: React.PropTypes.string
};

Column.defaultProps = {
	name: '',
	title: ''
};

export {Tabel, Column};