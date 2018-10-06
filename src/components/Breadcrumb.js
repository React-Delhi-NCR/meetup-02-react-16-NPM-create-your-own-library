import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = ({ list, activeList, className, ...props }) => {
	return (
		<ul className={`cm-breadcrumb ${className}`} {...props}>
			{list.map(item => {
				let isActive = activeList.find(activeItem => {
					return activeItem == item;
				});
				return (
					<li key={item} className={`${isActive ? 'active' : ''}`}>
						<a href="#">{item}</a>
					</li>
				);
			})}
		</ul>
	);
};

Breadcrumb.defaultProps = {
	list: ['Home', 'Products', 'Electronics', 'Headphones', 'JBL'],
	className: '',
	activeList: ['Electronics', 'Headphones']
};

Breadcrumb.propTypes = {
	list: PropTypes.array,
	activeList: PropTypes.array,
	className: PropTypes.string
};

export default Breadcrumb;
