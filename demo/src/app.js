import React from 'react';
import ReactDOM from 'react-dom';
import demoImage from '../assets/tech.jpg';
import { Card, Badge, Button, Header, Input, Alert, Thumbnail, Breadcrumb, Pagination } from '../../src/index';

ReactDOM.render(
	<div style={{ width: '500px', margin: '50px auto' }}>
		{/* Card Example 1 */}
		<Card className="mb-20">
			<Card.Header>Header Content</Card.Header>
			<Card.Body>Body Content</Card.Body>
			<Card.Footer>Footer Content</Card.Footer>
		</Card>

		{/* Card Example 2 */}
		{/* <Card className="mb-20">
			<Card.Header>About React</Card.Header>
			<Card.Body>
				<img
					src="http://xpgraph.com/wp-content/uploads/2017/12/reactjs.jpg"
					alt="React JS"
					style={{ width: '100%' }}
				/>
				<p style={{ marginBottom: '0' }}>
					In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user
					interfaces. It is maintained by Facebook and a community of individual developers and companies.
					React can be used as a base in the development of single-page or mobile applications. Complex React
					applications usually require the use of additional libraries for state management, routing, and
					interaction with an API.
				</p>
			</Card.Body>
			<Card.Footer>
				<a
					href="https://reactjs.org/"
					style={{ textDecoration: 'underline', fontWeight: 'bold', color: '#7f8c8d' }}
				>
					Show me more
				</a>
			</Card.Footer>
		</Card> */}

		{/* <Pagination className="mb-20">
			<Pagination.Previous>Prev</Pagination.Previous>
			<Pagination.Body list={[1, 2, 3, 4, 5]} activeItem="4" />
			<Pagination.Next>Next</Pagination.Next>
		</Pagination> */}

		{/* <Badge type="primary" className="mr-20">
			Hello, Badge here
		</Badge> */}

		{/* <Button type="primary" line>
			Primary Button
		</Button> */}

		{/* <Header type="inverted" className="mt-20">
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
		</Header> */}

		{/* <Input type="text" placeholder="Enter data here" className="mt-20" /> */}

		{/* <Alert type="primary" className="mt-20">
			Primary
		</Alert> */}

		{/* <Thumbnail imageSrc={demoImage} title="This is the title" className="mt-20" /> */}

		{/* <Breadcrumb /> */}
	</div>,
	document.getElementById('root')
);
