import React, { useState } from "react";
import axios from "axios";
import Genuine from "./Genuine";
import SecurityResult from "./SecurityResult";

function SearchResult(props) {
	const url = props.repo.RepoURL;
	const [gencheck, updateGen] = useState({ condition: false, data: "" });
	const [seccheck, updateSec] = useState({ condition: false, data: "" });
	async function checkGenuiness() {
		const response = await axios.post("/api/genuineness_check", { url: url });
		// const data = JSON.parse(response.data)
		// console.log(response.data);
		updateGen((prev) => {
			return {
				condition: true,
				data: response.data,
			};
		});
		updateSec((prev) => {
			return {
				...prev,
				condition: false,
			};
		});
	}
	async function securityResult() {
		const response = await axios.post("/api/repo-sec", { url: url });
		// const data = JSON.parse(response.data)
		// console.log(response.data);
		updateSec((prev) => {
			return {
				condition: true,
				data: response.data,
			};
		});
		updateGen((prev) => {
			return {
				...prev,
				condition: false,
			};
		});
	}
	return (
		<>
			<div className='card' style={{ margin: "5%", marginTop: 56, backgroundColor: "#0d1117"}}>
				<h5 className='card-header'>{props.repo.Repository_Name}</h5>
				<div className='card-body'>
					<h5 className='card-title'>{props.repo.Author}</h5>
					<p className='card-text'>{props.repo.Description}</p>
					<div class='d-grid gap-2 d-md-flex justify-content-md-end'>
						<button
							onClick={checkGenuiness}
							className='btn btn-outline-success'
							style={{
								borderStyle: "solid",
								borderRightWidth: 1,
								borderTopWidth: 1,
							}}>
							Genuiness
						</button>
						<button
							onClick={securityResult}
							className='btn btn-outline-danger'
							style={{
								borderStyle: "solid",
								borderLeftWidth: 1,
								borderTopWidth: 1,
							}}>
							Security Result
						</button>
					</div>
				</div>
			</div>
			{/* <Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component='img'
					alt='green iguana'
					height='140'
					image='/static/images/cards/contemplative-reptile.jpg'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{props.repo.Repository_Name}
					</Typography>
					<Typography variant='h5' component='div'>
						{props.repo.Author}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{props.repo.Description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button onClick={checkGenuiness} size='small'>
						Genuiness
					</Button>
					<Button onClick={securityResult} size='small'>
						Security Result
					</Button>
				</CardActions>
			</Card> */}
			{gencheck.condition && <Genuine data={gencheck.data} />}
			{seccheck.condition && <SecurityResult data={seccheck.data} />}
		</>
	);
}

export default SearchResult;
