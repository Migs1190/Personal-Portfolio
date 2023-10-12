import React, { useState } from "react";
import { Navbar, Nav, Tooltip, OverlayTrigger } from "react-bootstrap";
import "../styles/appNav.min.css";

export default function AppNav() {
	return (
		<>
			<nav>
				<Navbar
					id='navbar'
					className='
                    flex-column
                    justify-content-between
                    text-center position-fixed 
                    translate-middle 
                    top-50 
                    rounded-pill 
                    d-md-flex 
                    d-none'
				>
					<Nav id='nav-nav' className=''>
						<Nav.Item id='nav-item'>
							<Nav.Link className='nav-link rounded-circle' href='#home'>
								<i class='fa-solid fa-moon'></i>
							</Nav.Link>

							<i className='nav-link-dot fa-solid fa-circle fa-xs'></i>

							<OverlayTrigger placement='right' overlay={<Tooltip className='position-absolute'>Home</Tooltip>}>
								<Nav.Link className='nav-link rounded-circle' href='#home'>
									<i className='fa-solid fa-house-chimney'></i>
								</Nav.Link>
							</OverlayTrigger>

							<i className='nav-link-dot fa-solid fa-circle fa-xs'></i>

							<OverlayTrigger placement='right' overlay={<Tooltip className='position-absolute '>Projects</Tooltip>}>
								<Nav.Link className='nav-link rounded-circle' href='#projects'>
									<i className='fa-solid fa-code-commit'></i>
								</Nav.Link>
							</OverlayTrigger>

							<i className='nav-link-dot fa-solid fa-circle fa-xs'></i>

							<OverlayTrigger
								placement='right'
								overlay={<Tooltip className='position-absolute '>Skills & Tools</Tooltip>}
							>
								<Nav.Link className='nav-link rounded-circle' href='#skills'>
									<i className='fa-solid fa-screwdriver-wrench'></i>
								</Nav.Link>
							</OverlayTrigger>

							<i className='nav-link-dot fa-solid fa-circle fa-xs'></i>

							<OverlayTrigger
								placement='right'
								overlay={<Tooltip className='position-absolute '>Contact Info</Tooltip>}
							>
								<Nav.Link id='nav1' className='nav-link rounded-circle' href='#contact'>
									<i className='fa-solid fa-address-book'></i>
								</Nav.Link>
							</OverlayTrigger>
						</Nav.Item>
					</Nav>
				</Navbar>
			</nav>
		</>
	);
}
