import React from 'react';

class ListIcon extends React.Component {
	render() {
		let color = this.props.color || "#22A7FB",
			size = (this.props.size || 30) + "px" ;
		return (
			<svg version="1.1" width={size} height={size} viewBox="-197 320.9 200 200" fill={color}> 
				<g><path d="M-3.6,421.3l-74.6,17.6L-96.9,514l-17.6-74.7l-75.2-18.5l74.7-17.6l18.5-75.3l17.6,74.8L-3.6,421.3z M-101.6,420.6l-13.2-13l-57.3,13H-101.6z M-97.3,495.7v-70.5l-13,13.2L-97.3,495.7z M-82.9,403.6l-12.9-57.3v70.5L-82.9,403.6z M-21.2,421.5h-70.4l13.1,13L-21.2,421.5z"/> </g>
			</svg>
		);
	}
}

export default ListIcon;