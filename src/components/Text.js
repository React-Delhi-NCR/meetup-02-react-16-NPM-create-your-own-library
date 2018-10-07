import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ className, ...props }) => {
	return (
		<div className={className} {...props}>
			{props.children}
		</div>
	);
};

Text.defaultProps = {
	className: ''
};

Text.propTypes = {
	className: PropTypes.string.isRequired
};

export default Text;
