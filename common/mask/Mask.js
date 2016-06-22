import React from 'react';
import './mask.less';

/**
 * @description 通用遮罩层
 */
let me = this;
class Mask extends React.Component{
	render() {
		return (
			<section className='mask-layer' style={{display:this.props.isShow?'block':'none'}}></section>
		);
	}
}
export default Mask;