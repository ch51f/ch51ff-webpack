import React from 'react'
import {render} from 'react-dom'
import {Router, hashHistory} from 'react-router'
import stubbedCourses from './stubs/COURSES'

const rootRoute = {
	component: 'div',
	childRoutes: [{
		path: '/',
		component: require('./components/App'),
		childRoutes: [
			require('./routers/Calendar'),
			require('./routers/Course'),
			require('./routers/Grades'),
			require('./routers/Messages'),
			require('./routers/Profile')
		]
	}]
}

render(
	<Router history={hashHistory} routes={rootRoute} />,
	document.getElementById('app')
)