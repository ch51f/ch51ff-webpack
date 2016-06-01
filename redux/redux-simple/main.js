import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('app')

function render() {
	ReactDOM.render(
		<Counter value={store.getState()} age={() => store.dispatch({type: 'SHOWAGE'})} onIncrement={() => store.dispatch({type: 'INCREMENT'})} onDecrement={() => store.dispatch({type: 'DECREMENT'})} />,
		rootEl
	)
}

render()
store.subscribe(render)