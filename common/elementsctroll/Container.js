/**
 *@description 页面容器
 *@author  zyh
 *@deprecated  2016-05-09
 */
import React from 'react';
import '../less/common.less';
'use strict';
class Container extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section className='box container'>
				<article className='flex content'>
					{this.props.children}
				</article>
			</section>
		)
	}
}
export default Container;