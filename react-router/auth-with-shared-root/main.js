import React from 'react'
import {render} from 'react-dom'
import {hashHistory, Router} from 'react-router'
import routes from './config/routes'

render(<Router history={hashHistory} routes={routes} />, document.getElementById('app'))