import React, {Component} from 'react';
import Router, {Link} from 'react-router';

import Authority from '../../common/authority/Authority';

class Example extends Component{
	constructor(props,context) {
		super(props,context);
		this.state = {
			txt: "",
			mobile: "",
		}
	}
	_changeTxt(e) {
		this.setState({txt: e.target.value})
	}
	_changeMobile(e) {
		this.setState({mobile: e.target.value})
	}
	render() {
		let {txt, mobile} = this.state
		return (
			<div>
				<div className="test-control">
					<p style={{"paddingBottom": "5px"}}><label><input type='text' name='txt' value={this.state.txt} onChange={this._changeTxt.bind(this)} placeholder="描述" /></label></p>
					<p><label><input type='text' name='mobile' value={this.state.mobile} onChange={this._changeMobile.bind(this)} placeholder="电话" /></label></p>
				</div>
				<div className="test-show">
					{txt == "" ? <Authority mobile={mobile}/> : <Authority txt={txt} mobile={mobile}/>}
				</div>
			</div>
		)
	}
}
export default Example;