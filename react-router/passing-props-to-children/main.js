import React from 'react'
import {render} from 'react-dom'
import {hashHistory, Router, Route, Link, withRouter} from 'react-router'
import './app.css'

const App = withRouter(
	React.createClass({
		getInitialState() {
			return {
				tacos: [
					{name: 'duck confit'},
					{name: 'carne asada'},
					{name: 'shrimp'}
				]
			}
		},
		addTaco() {
			let name = prompt('taco name?')
			this.setState({
				tacos: this.state.tacos.concat({name})
			})
		},
		handleRemoveTaco(removedTaco) {
			this.setState({
				tacos: this.state.tacos.filter(function(taco) {
					return taco.name != removedTaco
				})
			})
			this.props.router.push("/")
		},
		render() {
			let links = this.state.tacos.map(function(taco, i) {
				return (
					<li key={i}>
						<Link to={`/taco/${taco.name}`}>{taco.name}</Link>
					</li>
				)
			})
			return (
				<div className="App">
					<ul className="Master">
						{links}
						<button onClick={this.addTaco}>Add Taco</button>
					</ul>
					<div className="Detail">
						{this.props.children && React.cloneElement(this.props.children, {
							onRemoveTaco: this.handleRemoveTaco
						})}
					</div>
				</div>
			)
		}
	})
)

const Taco = React.createClass({
	remove() {
		this.props.onRemoveTaco(this.props.params.name)
	},
	render() {
		return (
			<div className="Taco">
				<h1>{this.props.params.name}</h1>
				<button onClick={this.remove}>remove</button>
			</div>
		)
	}
})

render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="taco/:name" component={Taco} />
		</Route>
	</Router>
), document.getElementById('app'))