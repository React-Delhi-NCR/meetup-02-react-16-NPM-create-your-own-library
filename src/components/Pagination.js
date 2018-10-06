import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PaginationContext = React.createContext();
class Pagination extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	static Previous({ className = '', ...props }) {
		return (
			<PaginationContext.Consumer>
				{context => (
					<li className={`prev ${className}`} {...props}>
						<a href="#">{props.children}</a>
					</li>
				)}
			</PaginationContext.Consumer>
		);
	}
	static Body({ list, activeItem }) {
		const renderItems = list.map(item => {
			let isActive = !!(Number(activeItem) === Number(item));

			return (
				<li key={item} className={`${isActive ? 'active' : ''}`}>
					<a href="#">{item}</a>
				</li>
			);
		});

		return <PaginationContext.Consumer>{context => renderItems}</PaginationContext.Consumer>;
	}
	static Next({ className = '', ...props }) {
		return (
			<PaginationContext.Consumer>
				{context => (
					<li className={`next ${className}`} {...props}>
						<a href="#">{props.children}</a>
					</li>
				)}
			</PaginationContext.Consumer>
		);
	}

	render() {
		const { className, ...props } = this.props;
		return (
			<PaginationContext.Provider value={this.state}>
				<ul className={`cm-pagination ${className}`} {...props}>
					{props.children}
				</ul>
			</PaginationContext.Provider>
		);
	}
}

Pagination.defaultProps = {
	className: ''
};

Pagination.propTypes = {
	className: PropTypes.string
};

export default Pagination;
