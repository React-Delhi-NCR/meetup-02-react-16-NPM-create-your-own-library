import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({ className, title, imageSrc, ...props }) => {
	return (
		<div className={`cm-thumbnail ${className}`} {...props}>
			<img src={imageSrc} />
			<div className="cm-thumbnail-title">{title}</div>
		</div>
	);
};

Thumbnail.defaultProps = {
	title: `Hi! I'm default`
};

Thumbnail.propTypes = {
	title: PropTypes.string,
	imageSrc: PropTypes.string.isRequired,
	className: PropTypes.string
};

export default Thumbnail;
