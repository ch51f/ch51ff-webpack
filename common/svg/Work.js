import React from 'react';

class Work extends React.Component {
	render() {
		let color = this.props.color || "#22A7FB",
			size = (this.props.size || 30) + "px" ;
		return (
			<svg version="1.1" width={size} height={size} viewBox="0 0 212.5 200" fill={color}>
				<g transform="scale(0.1953125, 0.1953125)"><path d="M960 384l-64 0L896 369.088c0-168.512-131.392-305.152-293.376-305.152L549.312 63.936C387.328 63.936 256 200.576 256 369.088L256 384 192 384C121.28 384 64 441.28 64 511.936L64 896c0 70.656 57.28 127.936 128 127.936l768 0c70.656 0 128-57.344 128-127.936L1088 511.936C1088 441.28 1030.656 384 960 384zM789.312 384 362.688 384 362.688 369.088c0-107.264 83.584-194.176 186.688-194.176l53.312 0c103.104 0 186.688 86.912 186.688 194.176L789.376 384z"></path></g>
			</svg>
		);
	}
}

export default Work;