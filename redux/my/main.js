import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import my from './reducers/my'

const store = createStore(counter)
const rootEl = document.getElementById('app')
const myStore = createStore(my)

function render() {
	ReactDOM.render(
		<Counter my={myStore.getState()} showName={() => myStore.dispatch({type: 'SHOWNAME'})} showAge={() => myStore.dispatch({type: 'SHOWAGE'})} value={store.getState()} onIncrement={() => store.dispatch({type: 'INCREMENT'})} onDecrement={() => store.dispatch({type: 'DECREMENT'})} />, rootEl
	)
}

render()
store.subscribe(render)
myStore.subscribe(render)