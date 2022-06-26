import React, { useState } from "react";
import "./MainPage.css";
import Button from "../Button";
import { Link } from "react-router-dom";

function MainPage(props) {
	return (
		<div className='hero-container'>
			<h1>Vulnfinder</h1>
			<p>What are you waiting for?</p>
			<div className='hero-btns'>
				<CustomLink to='/search'>
					<Button
						className='btns'
						buttonStyle='btn--outline'
						buttonSize='btn--large'
						onStart={props.onStart}>
						GET STARTED
					</Button>
				</CustomLink>
				<Button
					className='btns'
					buttonStyle='btn--primary'
					buttonSize='btn--large'
					onClick={console.log("hey")}>
					WATCH TRAILER <i className='far fa-play-circle' />
				</Button>
			</div>
		</div>
	);
}

function CustomLink({ to, children, ...props }) {
	return <Link to={to} {...props}>{children}</Link>;
}

export default MainPage;
