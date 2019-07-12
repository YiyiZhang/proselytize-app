import React, { Component } from 'react';

class Menu extends Component {

	render = () => {
		return (
			//jsx machina that is the actual menu
			<div className="Menu">
				<ul>
					<li>Proselytize</li>
					<li>About</li>
					<li>Projects</li>
				</ul>
			</div>
			)
	}
}

export default Menu;