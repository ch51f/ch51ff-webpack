/**
 * @description 消息提示
 */
import React from 'react';
import './tooltip.less';
import className from 'classnames';
let me = null;
class ToolTip extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
		this.timeH = null;
		this.TimeF = null;
		me = this;
		this.state = {
			curCls: this._stateChange('init')
		}
	};

	//弹出提示窗
	show() {
		me.setState({
			curCls: me._stateChange('init')
		});
		if(me.TimeF != null)
			clearInterval(me.TimeF);
		if(me.timeH != null)
			clearInterval(me.timeH);
		me.TimeF = setTimeout(function(){
			me.setState({
				curCls: me._stateChange('in')
			});
			me.timeH = setTimeout(function(){
				me.setState({
					curCls: me._stateChange('out')
				});
			},2000);
		},0);
	};

	//设置tooltip状态
	_stateChange(type) {
		return className({
			box: true,
			hbox: true,
			'tool-wrapper': true,
			'tip-pos-init': type === 'init',
			'tip-scroll-in': type === 'in',
			'tip-scroll-out': type === 'out'
		});
	};

	//动画结束执行回调函数
	_isAnimateEnd(target,fn) {
		var anim = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		target.bind(anim,function(){
			target.unbind(anim);
			fn();
		});
	};

	render(){
		const {children} = this.props;
		return (
			<section className={this.state.curCls}>
				<p className='tool-conent'>{children}</p>
			</section>
		)
	}
}
export default ToolTip;