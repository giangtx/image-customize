import React, { Component } from 'react';

class Scrollbar extends Component {
	renderTrack = props => <div {...props} className="rde-track-vertical" />;

	render() {
		return <div>{this.props.children}</div>;
	}
}

export default Scrollbar;
