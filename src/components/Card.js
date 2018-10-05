import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CardContext = React.createContext();

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	static Header({ className = '', ...props }) {
		return (
			<CardContext.Consumer>
				{context => (
					<div className={`cm-card-header ${className}`} {...props}>
						{props.children}
					</div>
				)}
			</CardContext.Consumer>
		);
	}
	static Body({ className = '', ...props }) {
		return (
			<CardContext.Consumer>
				{context => (
					<div className={`cm-card-body ${className}`} {...props}>
						{props.children}
					</div>
				)}
			</CardContext.Consumer>
		);
	}
	static Footer({ className = '', ...props }) {
		return (
			<CardContext.Consumer>
				{context => (
					<div className={`cm-card-footer ${className}`} {...props}>
						{props.children}
					</div>
				)}
			</CardContext.Consumer>
		);
	}

	render() {
		const { className, ...props } = this.props;
		return (
			<CardContext.Provider value={this.state}>
				<div className={`cm-card ${className}`} {...props}>
					{props.children}
				</div>
			</CardContext.Provider>
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
