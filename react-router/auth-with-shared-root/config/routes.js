import auth from '../utils/auth.js'	

import App from '../components/App';

function redirectToLogin(nextState, replace) {
	if(!auth.loggedIn()) {
		replace({
			pathname: '/login',
			state: {nextPathname: nextState.location.pathname}
		})
	}
}

function redirectToDashboard(nextState, replace) {
	if(auth.loggedIn()) {
		replace('/')
	}
}

export default {
	component: App,
	childRoutes: [
		{
			path: '/logout',
			getComponent: (nextState, cb) => {
				require.ensure([], (require) => {
					cb(null, require('../components/Logout'))
				})
			}
		},
		{
			path: '/about',
			getComponent: (nextState, cb) => {
				require.ensure([], (require) => {
					cb(null, require('../components/About'))
				})
			}
		},
		{
			onEnter: redirectToDashboard,
			childRoutes: [
				{
					path: '/login',
					getComponent: (nextState, cb) => {
						require.ensure([], (require) => {
							cb(null, require('../components/Login'))
						})
					}
				}
			]
		},
		{
			onEnter: redirectToLogin,
			childRoutes: [
				{
					path: '/user/:id',
					getComponent: (nextState, cb) => {
						require.ensure([], (require) => {
							cb(null, require('../components/User'))
						})
					}
				}
			]
		},
		{
			path: '/',
			getComponent: (nextState, cb) => {
				if(auth.loggedIn()) {
					return require.ensure([], (require) => {
						cb(null, require('../components/Dashboard'))
					})
				}
				return require.ensure([], (require) => {
					cb(null, require('../components/Landing'))
				})
			},
			indexRoute: {
				getComponent: (nextState, cb) => {
					if(auth.loggedIn()) {
						return require.ensure([], (require) => {
							cb(null, require('../components/PageOne'))
						})
					}
					return cb()
				}
			},
			childRoutes: [
				{
					onEnter: redirectToLogin,
					childRoutes: [
						{
							path: '/page2',
							getComponent: (nextState, cb) => {
								require.ensure([], (require) => {
									cb(null, require('../components/PageTwo'))
								})
							}
						}
					]
				}
			]
		}
	]
} 