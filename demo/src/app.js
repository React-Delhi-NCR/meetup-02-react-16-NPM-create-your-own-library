import React from 'react';
import ReactDOM from 'react-dom';
import demoImage from '../assets/tech.jpg';
import { Card, Badge, Button, Header, Input, Alert, Thumbnail, Breadcrumb, Pagination } from '../../src/index';

ReactDOM.render(
	<div style={{ width: '500px', margin: '50px auto' }}>
		<Card className="mb-20">
			<Card.Header>Header Content</Card.Header>
			<Card.Body>Body Content</Card.Body>
			<Card.Footer>Footer Content</Card.Footer>
		</Card>
		<Pagination className="mb-20">
			<Pagination.Previous>Prev</Pagination.Previous>
			<Pagination.Body list={[1, 2, 3, 4, 5]} activeItem="4" />
			<Pagination.Next>Next</Pagination.Next>
		</Pagination>
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
		<Alert type="primary" className="mt-20">
			Primary
		</Alert>
		<Thumbnail imageSrc={demoImage} title="This is the title" className="mt-20" />
		<Breadcrumb />
	</div>,
	document.getElementById('root')
);
