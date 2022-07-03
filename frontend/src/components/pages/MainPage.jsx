import React, { useState } from "react";
import "./MainPage.css";
import Button from "../Button";
import { Link } from "react-router-dom";

function MainPage(props) {
	return (
		<div className='hero-container'>
			<h1>SecureHub</h1>
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
					onClick={console.log("watch trailer")}
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
