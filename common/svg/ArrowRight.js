import React from 'react';

class Arrow extends React.Component {
	render() {
		let color = this.props.color || "#272636",
			size = (this.props.size || 30) + "px" ;
		return (
			<svg viewBox="0 0 200 200" version="1.1" width={size} height={size} fill={color}> 
				<g transform="scale(0.1953125, 0.1953125)"><path d="M344.376817 863.278505c-7.953136 0.001023-15.900132-3.070942-21.911032-9.195429-11.876492-12.099572-11.695367-31.53625 0.405229-43.412742l309.435515-303.706023-312.709071-312.710095c-11.989055-11.988032-11.989055-31.425733 0-43.414789 11.988032-11.989055 31.426757-11.989055 43.414789 0l334.621127 334.621127c5.792936 5.791913 9.029654 13.660114 8.991792 21.851681-0.038886 8.191566-3.348258 16.028045-9.195429 21.766746l-331.551208 325.410348C359.903441 860.353896 352.136547 863.278505 344.376817 863.278505z"></path></g> 
			</svg>
		);
	}
}

export default Arrow;