/**
 * @description 快速查询list封装
 * @params data [{id:'', name:'', data: [{id:'', name: ''}]}] 显示数据 默认 []
 * @params isLink 是否是链接 默认 flase
 * @params hideBar 是否显示快速导航 默认 false
 */

import React, {Component} from 'react';
import Router, {Link} from 'react-router';

class QuickList extends Component{
	constructor(props,context) {
		super(props,context);
		this.state = {
			list: [],
			isLink:false,
			hideBar: false
		}
	}

	_renderCell(item, key) {
		return (
			<div key={key} className="ql-list" ref={item.name}>
				<div className="first">{item.name}</div>
				{item.data.length > 0 ? item.data.map((item, key)=>{return this._renderSubCell(item, key)}):null}
			</div>
		)
	}

	_renderSubCell(item, key) {
		let isLink = this.props.isLink || this.state.isLink,
			url = item.url || this.state.url;
		return (
			<span key={key}>
				{isLink ? (
					<Link className="second" to={url} >{item.name}</Link>
				) : (
					<span className="second">{item.name}</span>
				)}
			</span>
		)
	}

	_readerShortcut(item, key) {
		return (
			<a key={key} onClick={this._shortcutTo.bind(this, item.name)}>{item.name}</a>
		)
	}

	_shortcutTo(name) {
		window.scrollTo(0, this.refs[name].offsetTop);
	}

	render() {
		let list = this.props.list || this.state.list,
			hideBar = this.props.hideBar || this.state.hideBar;
		return (
			<section>
				{list.map((item, key)=>{return this._renderCell(item, key)})}
				{!hideBar ? (
					<div className="ql-bar">
						<div>
							{list.map((item, key)=>{return this._readerShortcut(item, key)})}
						</div>
					</div>
				) : null}
			</section>
		);
	}
}
export default QuickList;