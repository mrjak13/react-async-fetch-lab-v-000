// create your App component here
import React, { Component } from 'react'

class App extends Component {

	state = {
		peepsInSpace: []
	}

	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
		.then(res => res.json())
		.then(data => {
			this.setState({
				peepsInSpace: data.people
			})
		})
	}

	render(){
		return(
			<div>
				{this.state.peepsInSpace.map(peep => <p>{peep.name}</p>)}
			</div>
		)
	}

}

export default App;
