import React, { useState } from "react";
import "./MainPage.css";
import Button from "../Button";
import { Link } from "react-router-dom";

function MainPage(props) {
	function handleClick(event) {
		console.log("watch trailer");
	}
	return (
		<div className='hero-container'>
			<h1>grOSS</h1>
			<p>What are you waiting for?</p>
			<div className='hero-btns'>
				<CustomLink to='/search'>
					<button
						onClick={props.onStart}
						className='btn btn-outline-success btn-lg'
						style={{
							borderStyle: "solid",
						}}>
						GET STARTED
					</button>
				</CustomLink>
				<button
					onClick={handleClick}
					className='btn btn-success btn-lg'
					style={{
						borderStyle: "solid",
					}}>
					WATCH TRAILER
				</button>
			</div>
		</div>
	);
}

function CustomLink({ to, children, ...props }) {
	return (
		<Link to={to} {...props}>
			{children}
		</Link>
	);
}

export default MainPage;
