import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, line, className, ...props }) => {
	return (
		<button className={`cm-btn ${type} ${line ? 'line' : ''} ${className}`} {...props}>
			{props.children}
		</button>
	);
};

Button.defaultProps = {
	line: false,
	className: ''
};

Button.propTypes = {
	type: PropTypes.string.isRequired,
	line: PropTypes.bool,
	className: PropTypes.string
};

export default Button;
