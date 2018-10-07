import React from 'react';
import ReactDOM from 'react-dom';
import demoImage from '../assets/tech.jpg';
import { Card, Badge, Button, Header, Input, Alert, Thumbnail, Breadcrumb, Pagination, Text } from '../../src/index';

ReactDOM.render(
	<div style={{ maxWidth: '960px', margin: '0 auto 50px' }}>
		<Header style={{ marginBottom: 50 + 'px', padding: 30 + 'px', fontSize: '1.3em' }} type="inverted" className="">
			<Header.Logo>
				<a href="../index.html">React CSS Mint</a>
			</Header.Logo>
			<Header.Navigation
				nav={[
					{
						label: 'Docs',
						link: 'http://arunmichaeldsouza.github.io/CSS-Mint/'
					},
					{
						label: 'Github',
						link: 'https://github.com/React-Delhi-NCR/meetup-02-react-16-NPM-create-your-own-library'
					}
				]}
			/>
		</Header>

		{/***Card Component***/}
		<Text className="cm-text-success cm-text-bold mb-10">Card</Text>
		<Card className="mb-20">
			<Card.Header>Header Content</Card.Header>
			<Card.Body>Body Content</Card.Body>
			<Card.Footer>Footer Content</Card.Footer>
		</Card>

		{/***Badge Component***/}
		<Text className="cm-text-success cm-text-bold mb-10">Badge</Text>
		<Badge type="primary" className="mb-20">
			Hello, Badge here
		</Badge>

		{/***Button Component***/}
		<Text className="cm-text-success cm-text-bold mb-10 mt-20">Button</Text>
		<Button type="primary" line className="mb-20">
			Primary Button
		</Button>

		{/***Header Component***/}
		<Text className="cm-text-success cm-text-bold mb-10">Header</Text>
		<Header type="inverted" className="mb-20">
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
		<Text className="cm-text-success cm-text-bold mb-10">Input</Text>
		<Input type="text" placeholder="Enter data here" className="mb-20" />

		{/***Alert Component***/}
		<Text className="cm-text-success cm-text-bold mb-10">Alert</Text>
		<Alert type="primary" className="mb-20">
			Primary
		</Alert>

		{/***Thumbnail Component***/}
		<Text className="cm-text-success cm-text-bold mb-10">Thumbnail</Text>
		<Thumbnail imageSrc={demoImage} title="This is the title" className="mb-20" />

		{/***BreadCrumb Component***/}
		<Text className="cm-text-success cm-text-bold">BreadCrumb</Text>
		<Breadcrumb
			list={['Home', 'Products', 'Electronics', 'Headphones', 'JBL']}
			activeList={['JBL']}
			className="mb-20"
		/>

		{/***Pagination Component***/}
		<Text className="cm-text-success cm-text-bold mb-10">Pagination</Text>
		<Pagination className="mb-20">
			<Pagination.Previous>Prev</Pagination.Previous>
			<Pagination.Body list={[1, 2, 3, 4, 5]} activeItem="4" />
			<Pagination.Next>Next</Pagination.Next>
		</Pagination>

		{/***Text Component***/}
		<Text className="cm-text-success cm-text-bold mb-10">Text</Text>
		<Text className="cm-text-primary cm-text-bold">Some bold text here</Text>
	</div>,
	document.getElementById('root')
);
