/**
 *@description  Tab切换
 */
import React from 'react';
import className from 'classnames';
class TabView extends React.Component{
	constructor(props) {
		super(props);
		this.count = 0;
		this.copW = 0;
		this.copH = 0;
		this.maxW = 0;
		this.scrollView = null;
		this.state = {
			currentIndex: 0
		}
	};


	//tab menu click
	_handlerChange(fn,index) {
		if(index === this.state.currentIndex)
			return;
		this._tabChange(index);
		fn();
	};

	//scroll action
	_tabChange(index) {
		this.setState({
			currentIndex: index
		});
		this.scrollView.style.left = -(index * this.copW) + 'px';
	}

	//tab heaader title
	_renderTabTitle() {
		//取到tab页数
		let count = React.Children.count(this.props.children);
		return React.Children.map(this.props.children, (element,index)=>{
			const {title, handler} = element.props;
			const {headerHeight, headerColor, headerBorder, headerCls} = this.props;
			const cssSty = {
				height: headerHeight,
				lineHeight: headerHeight + 'px'
			};
			let clsName = className({
				'flex': true,
				'clear-bg': true,
				'tab-header-item': true,
				'tab-cur-menu': index == this.state.currentIndex,
				'tab-fir-menu': index == 0,
				'tab-last-menu': index == count - 1
			});
			return(
				<div key={index} style={cssSty} className={[clsName,headerCls].join(' ')} onClick={this._handlerChange.bind(this,handler,index)}>{title}</div>
			)
		});
	};

	//tab heaader content
	_renderTabContent() {
		return React.Children.map(this.props.children, (element,index)=>{
			return(
				element
			)
		});
	};

	//tab animate
	_tabTranslateX() {
		this.scrollView
	};

	//组件挂载后
	componentDidMount() {
		let count = React.Children.count(this.props.children);
		let elMain = this.refs.tabMain;
		let scrollMain = this.scrollView = this.refs.tabScrollMain;
		this.copW = elMain.offsetWidth;
		this.copH = elMain.offsetHeight;
		this.maxW = count * this.copW;
		scrollMain.style.width = this.maxW + 'px';
		let DOM = scrollMain.getElementsByTagName('div');
		for(var i=0,el; el=DOM[i]; i++){
			if(el.className == 'tab-panel'){
				el.style.width = this.copW + 'px';
			}
		}
	};

	render() {
		return (
			<div ref='tabMain' className='tab-container'>
				<header style={{border:this.props.headerBorder}} className='box tab-header'>
					{this._renderTabTitle()}
				</header>
				<div className='box tab-scroll-main' ref='tabScrollMain'>
					{this._renderTabContent()}
				</div>
			</div>
		)
	}
}

//PropTypes check
	TabView.propTypes = {
		headerHeight: React.PropTypes.number,
		headerBorder: React.PropTypes.string,
		headerCls: React.PropTypes.string
	};

	TabView.defaultProps = {
		headerHeight: 40,
		headerBorder: '#2ea7e0 1px solid',
		headerCls: ''
	}

//tab panel
class TabPanel extends React.Component{
	constructor(props) {
		super(props);
	};
	render() {
		return (
			<div className='tab-panel'>
				{this.props.children}
			</div>
		)
	}
}
//参数验证
	TabPanel.propTypes = {
		handler: React.PropTypes.func
	};

	//默认参数
	TabPanel.defaultProps = {
		handler: function(){
			return;
		}
	};
export{TabView, TabPanel};