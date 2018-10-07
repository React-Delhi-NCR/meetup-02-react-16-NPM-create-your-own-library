import React from 'react';
import ReactDOM from 'react-dom';
import demoImage from '../assets/tech.jpg';
import { Card, Badge, Button, Header, Input, Alert, Thumbnail, Breadcrumb, Pagination } from '../../src/index';

ReactDOM.render(
	<div style={{ width: '500px', margin: '50px auto' }}>
		{/***Card Component***/}
		<Card className="mb-20">
			<Card.Header>Header Content</Card.Header>
			<Card.Body>Body Content</Card.Body>
			<Card.Footer>Footer Content</Card.Footer>
		</Card>

		{/***Badge Component***/}
		<Badge type="primary" className="mr-20">
			Hello, Badge here
		</Badge>

		{/***Button Component***/}
		<Button type="primary" line>
			Primary Button
		</Button>

		{/***Header Component***/}
		<Header type="inverted" className="mt-20 mb-20">
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

		{/***Input Component***/}
		<Input type="text" placeholder="Enter data here" className="mb-20" />

		{/***Alert Component***/}
		<Alert type="primary" className="mb-20">
			Primary
		</Alert>

		{/***Thumbnail Component***/}
		<Thumbnail imageSrc={demoImage} title="This is the title" className="mb-20" />

		{/***BreadCrumb Component***/}
		<Breadcrumb
			list={['Home', 'Products', 'Electronics', 'Headphones', 'JBL']}
			activeList={['JBL']}
			className="mb-20"
		/>

		{/***Pagination Component***/}
		<Pagination className="mb-20">
			<Pagination.Previous>Prev</Pagination.Previous>
			<Pagination.Body list={[1, 2, 3, 4, 5]} activeItem="4" />
			<Pagination.Next>Next</Pagination.Next>
		</Pagination>
	</div>,
	document.getElementById('root')
);
