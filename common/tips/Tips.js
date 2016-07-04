import React, {Component, PropTypes} from 'react'

export default class Tips extends Component{
	constructor(props, context) {
		super(props, context);
	}

	render() {
		let {children, isShow} = this.props;
		let cls = "fch-tips";
		let that = this;
		if(isShow) {
			cls += " show" ;
		}
		return (
			<div className={cls}>
				<div className="con">
					{children}
				</div>
			</div>
		)
	}
}