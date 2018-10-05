import React, { Component } from 'react';
import PropTypes from 'prop-types';

const HeaderContext = React.createContext(),
	getType = type => {
		switch (type) {
			case 'primary':
				return 'primary';
			case 'inverted':
				return 'inverted';
		}
		return type;
	};

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	static Logo({ className = '', ...props }) {
		return (
			<HeaderContext.Consumer>
				{context => (
					<div className={`cm-logo cm-text-large ${className}`} {...props}>
						{props.children}
					</div>
				)}
			</HeaderContext.Consumer>
		);
	}

	static Navigation({ className = '', ...props }) {
		return (
			<HeaderContext.Consumer>
				{context => {
					return props.nav && props.nav.length ? (
						<div className={`cm-nav ${className}`} {...props}>
							<ul>
								{props.nav.map((v, k) => {
									return <li key={k}>{v.link ? <a href={`${v.link}`}>{v.label}</a> : v.label}</li>;
								})}
							</ul>
						</div>
					) : null;
				}}
			</HeaderContext.Consumer>
		);
	}

	render() {
		const { className, ...props } = this.props,
			headerType = getType(type);
		return (
			<HeaderContext.Provider value={this.state}>
				<div className={`cm-header ${headerType} ${className}`} {...props}>
					{props.children}
				</div>
			</HeaderContext.Provider>
		);
	}
}

Header.defaultProps = {
	className: ''
};

Header.propTypes = {
	type: PropTypes.string.isRequired
};

export default Header;
