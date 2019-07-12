import React, { Component } from 'react';

class About extends Component{

state = {
	color: 'std'
}

	changeColor = () => {
		if(this.state.color === 'std'){
			this.setState({color: 'alt'})			
		} else {
			this.setState({color: 'std'})
		}
	}

	render = () => {
		return (
			<div className="About" onClick={this.changeColor}>
				<h2 className={this.state.color}>This is about us.</h2>
			</div>
		)
	}

}

export default About;