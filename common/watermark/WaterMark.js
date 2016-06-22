/**
 * @description 水印
 * @params text 水印内容 默认 "房心科技 房心科技"
 */

import React, {Component} from 'react';
import './watermark.less'

class WaterMark extends Component{
	constructor(props,context) {
		super(props,context);
		this.state = {
			text: "房心科技 房心科技",
		}
	}

	componentDidMount() {
		let text = this.props.text || this.state.text;

		let el = document.getElementsByTagName('body')[0];

		let ctx = this.refs.canvas.getContext('2d');
		ctx.font="10px Arial"; 
		ctx.fillStyle = "#e1e1e1";
		ctx.rotate(20 * Math.PI / 180);
		ctx.fillText(text, 10, 10); 

		var img = this.convertCanvasToImage(this.refs.canvas);
		el.style.backgroundImage = "url(" + img.src + ")";
	}

	convertCanvasToImage(canvas) {
		var image = new Image(); 
		image.src = canvas.toDataURL("image/png"); 
		return image; 
	}


	render() {
		return (
			<section>
				<canvas className="canvas" width="200" height="80" ref="canvas">
					Your browser does not support the HTML5 canvas tag.
				</canvas>
			</section>
		);
	}
}
export default WaterMark;