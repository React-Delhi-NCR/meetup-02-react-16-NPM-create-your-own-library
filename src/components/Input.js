import React from 'react';
import PropTypes from 'prop-types';

const allowedValueGroupOne = ['text', 'email', 'password', 'number', 'search', 'url', 'radio', 'checkbox'];

const Input = ({ type, className, ...props }) => {
	return <input {...props} type={type} className={className} />;
};

Input.defaultProps = {
	className: ''
};

Input.propTypes = {
	type: (props, propName, componentName) => {
		if (!allowedValueGroupOne.includes(props[propName])) {
			return new Error(
				'Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.'
			);
		}
	}
};

export default Input;
