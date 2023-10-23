import "../styles/AppHero.min.css";
import React from "react";
import { Container, OverlayTrigger, Popover, Row } from "react-bootstrap";

const pop = (
	<Popover id='popover' className=' mt-2'>
		<Popover.Body id='popover-body'>
			Credits to{" "}
			<a
				className=' text-decoration-none text-info interactable'
				href='https://www.spriters-resource.com/submitter/JoeyTheRabbit/'
			>
				JoeyTheRabbit
			</a>
		</Popover.Body>
	</Popover>
);
const react = { title: `React`, link: `hhttps://react.dev/`, color: `info` };
const ecosystems = [
	{
		id: 1,
		title: `Redux,`,
		link: `https://redux.js.org/`,
		color: `danger`,
	},
	{
		id: 2,
		title: `Redux-Thunk,`,
		link: `https://github.com/reduxjs/redux-thunk`,
		color: `primary`,
	},
	{
		id: 3,
		title: `Redux-Toolkit.`,
		link: `https://redux-toolkit.js.org/`,
		color: `success`,
	},
];

const AppHero = function () {
	return (
		<main id='home'>
			<Container className=' position-relative'>
				<Row>
					<div id='hero-body'>
						<div className='d-flex'>
							<h1 className='fs-4 text-uppercase'>Hello there, I'm Ahmad</h1>
							<OverlayTrigger trigger='click' placement='bottom' overlay={pop}>
								<span id='char' className='interactable'></span>
							</OverlayTrigger>
						</div>
						<p>
							A front-end enthusiast specializing in{" "}
							<a href={react.link} className={`text-${react.color} interactable react`}>
								{react.title}
							</a>{" "}
							and it's ecosystem such as{" "}
							<span id='pixel' className='interactable'>
								{ecosystems.map((e) => (
									<a href={e.link} className={`text-${e.color}`} key={e.id}>
										{e.title}{" "}
									</a>
								))}
							</span>
							<br />I bring ideas to life through dynamic and interactive web experiences.
							<br />
							Don’t worry, I won’t bore you with the basics of HTML, CSS, and JavaScript because, well, that’s a given!
							<br />
							Let’s work together and make your ideas come to life!
						</p>
					</div>
				</Row>
			</Container>
		</main>
	);
};

export default AppHero;
