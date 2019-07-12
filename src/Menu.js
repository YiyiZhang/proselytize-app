import React, { Component } from 'react';

class Menu extends Component {

	//function that handles updates
	handleUpdate = (evt) => {
		this.props.updater(evt.target.innerText)
	}

	render = () => {
		return (
			//jsx machina that is the actual menu
			<div className="Menu">
				<ul>
					<li onClick={this.handleUpdate}>Proselytize</li>
					<li onClick={this.handleUpdate}>About</li>
					<li onClick={this.handleUpdate}>Projects</li>
				</ul>
			</div>
			)
	}
}

export default Menu;