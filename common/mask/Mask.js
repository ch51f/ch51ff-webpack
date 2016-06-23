/**
 * @description 通用遮罩层
 */
import React, {Component, PropTypes} from 'react';

class Mask extends Component {
	render() {
		const {isShow} = this.props;
		return (
			<section className='mask-layer' style={{display:isShow?'block':'none'}}></section>
		);
	}
}

Mask.propTypes = {
	isShow: PropTypes.bool.isRequired
}

Mask.defaultProps = {
	isShow: false
}

export default Mask;