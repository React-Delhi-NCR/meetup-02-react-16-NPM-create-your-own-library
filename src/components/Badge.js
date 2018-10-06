import React from 'react';
import PropTypes from 'prop-types';

const getType = type => {
		switch (type) {
			case 'primary':
				return 'primary';
			case 'success':
				return 'success';
			case 'warning':
				return 'warning';
			case 'error':
				return 'error';
		}
	},
	Badge = ({ type, rounded, className, ...props }) => {
		const btnType = getType(type);
		return (
			<span className={`cm-badge ${btnType} ${rounded ? 'rounded' : ''} ${className}`} {...props}>
				{props.children}
			</span>
		);
	};

Badge.defaultProps = {
	rounded: false,
	className: ''
};

Badge.propTypes = {
	type: PropTypes.string.isRequired,
	rounded: PropTypes.bool,
	className: PropTypes.string
};

export default Badge;
