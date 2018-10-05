import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Badge, Button, Header, Input } from '../../src/index';

ReactDOM.render(
	<div style={{ width: '500px', margin: '50px auto' }}>
		<Card className="mb-20">
			<Card.Header>Header Content</Card.Header>
			<Card.Body>Body Content</Card.Body>
			<Card.Footer>Footer Content</Card.Footer>
		</Card>
		<Badge type="primary" className="mr-20">
			Hello, Badge here
		</Badge>
		<Button type="primary" line>
			Primary Button
		</Button>
		<Header type="inverted" className="mt-20">
			<Header.Logo>
				<a href="#">Logo</a>
			</Header.Logo>
			<Header.Navigation
				nav={[
					{
						label: 'Link 1',
						link: '#'
					},
					{
						label: 'Link 2',
						link: '#'
					}
				]}
			/>
		</Header>
		<Input type="text" placeholder="Enter data here" className="mt-20" />
	</div>,
	document.getElementById('root')
);
