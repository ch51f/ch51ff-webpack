import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import QuickList from '../../common/quicklist/QuickList';
import QuickListStore from '../store/QuickListStore';

class Quick extends Component{
	constructor(props,context) {
		super(props,context);
		this.state = {
			list: QuickListStore.getList(),
			isLink: true,
			hideBar: false
		}
	}
	_changeLink() {
		this.setState({isLink: !this.state.isLink})
	}
	_changeBar() {
		this.setState({hideBar: !this.state.hideBar})
	}
	render() {
		let {list, isLink, hideBar} = this.state
		return (
			<div>
				<div className="test-control">
					<p><label><input type='checkbox' name='link' checked={this.state.isLink} onChange={this._changeLink.bind(this)} /> 显示链接</label></p>
					<p><label><input type='checkbox' name='bar' checked={this.state.hideBar} onChange={this._changeBar.bind(this)} /> 隐藏快捷导航</label></p>
				</div>
				<div className="test-show">
					<QuickList list={list} isLink={isLink} hideBar={hideBar}/>
				</div>
			</div>
		)
	}
}
export default Quick;