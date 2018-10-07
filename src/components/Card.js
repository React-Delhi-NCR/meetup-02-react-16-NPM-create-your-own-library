import React, { Component } from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = React.createContext();
class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subHeading: '<p style={{ color: "grey", marginTop: "0px" }}>Sub-heading here</p>'
		};
	}

	static Header({ className, ...props }) {
		return (
			<Consumer>
				{context => (
					<div className={`cm-card-header ${className}`} {...props}>
						{props.children}
					</div>
				)}
			</Consumer>
		);
	}

	static Body({ className, ...props }) {
		return (
			<Consumer>
				{context => (
					<div className={`cm-card-body ${className}`} {...props}>
						{props.children}
					</div>
				)}
			</Consumer>
		);
	}

	static Footer({ className, ...props }) {
		return (
			<Consumer>
				{context => (
					<div className={`cm-card-footer ${className}`} {...props}>
						{props.children}
					</div>
				)}
			</Consumer>
		);
	}

	render() {
		const { className, ...props } = this.props;
		return (
			<Provider value={this.state}>
				<div className={`cm-card ${className}`} {...props}>
					{props.children}
				</div>
			</Provider>
		);
	}
}

Card.defaultProps = {
	className: ''
};

Card.propTypes = {
	className: PropTypes.string
};

export default Card;
