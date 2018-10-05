import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Badge } from '../../src/index';

ReactDOM.render(
	<div style={{ width: '500px', margin: '50px auto' }}>
		<Card>
			<Card.Header className="mb-20">!Header Content</Card.Header>
			<Card.Body>Body Content</Card.Body>
			<Card.Footer>Footer Content</Card.Footer>
		</Card>
	</div>,
	document.getElementById('root')
);
