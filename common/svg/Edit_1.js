import React from 'react';

class Edit extends React.Component {
	render() {
		let color = this.props.color || "#272636",
			size = (this.props.size || 30) + "px" ;
		return (
			<svg version="1.1" width={size} height={size} viewBox="0 0 200 200" fill={color}> 
				<g transform="scale(0.1953125, 0.1953125)"><path d="M791.419897 274.942933l-73.163323-73.163323c-12.672624-12.672624-32.258705-12.672624-44.934398 0l-57.607022 57.610092 121.55445 121.55445 54.150294-61.066821C804.095591 307.201637 804.095591 287.618627 791.419897 274.942933zM225.12634 646.518716l0 121.55445 121.55752 0 351.986633-355.447455L577.116043 291.072285 225.12634 646.518716zM482.364029 706.785312c-17.759479 0-32.155351 14.395872-32.155351 32.155351 0 17.759479 14.395872 32.155351 32.155351 32.155351 17.759479 0 32.155351-14.395872 32.155351-32.155351C514.51938 721.181183 500.123508 706.785312 482.364029 706.785312zM610.985432 706.785312c-17.759479 0-32.155351 14.395872-32.155351 32.155351 0 17.759479 14.395872 32.155351 32.155351 32.155351s32.155351-14.395872 32.155351-32.155351C643.141806 721.181183 628.744911 706.785312 610.985432 706.785312zM739.607858 706.785312c-17.759479 0-32.155351 14.395872-32.155351 32.155351 0 17.759479 14.395872 32.155351 32.155351 32.155351 17.759479 0 32.155351-14.395872 32.155351-32.155351C771.763209 721.181183 757.367337 706.785312 739.607858 706.785312z"></path></g>
			</svg>
		);
	}
}

export default Edit;