import React, { useState } from "react";
import axios from "axios";
import Genuine from "./Genuine";
import SecurityResult from "./SecurityResult";
import { ResultPlaceHolder } from "../../PlaceHolder";

function SearchResult(props) {
	const url = props.repo.RepoURL;
	const [check, setCheck] = useState(0);
	const [gencheck, updateGen] = useState({data: "" });
	const [seccheck, updateSec] = useState({data: "" });
	async function checkGenuiness() {
		setCheck(0)
		setCheck(1)
		const response = await axios.post("/api/genuineness_check", { url: url });
		updateGen(() => {
			return {
				data: response.data,
			};
		});
		setCheck(2)
	}
	async function securityResult() {
		setCheck(0)
		setCheck(1)
		const response = await axios.post("/api/repo-sec", { url: url });
		updateSec((prev) => {
			return {
				data: response.data,
			};
		});
		setCheck(3)
	}
	return (
		<>
			<div className='card' style={{ margin: "5%", marginTop: "5em", backgroundColor: "#0d1117", border: "1px #30363d solid"}}>
				<h5 className='card-header'>{props.repo.Repository_Name}</h5>
				<div className='card-body'>
					<h5 className='card-title'>{props.repo.Author}</h5>
					<p className='card-text'>{props.repo.Description}</p>
					<div class='d-grid gap-2 d-md-flex justify-content-md-end'>
						<button
							onClick={checkGenuiness}
							className='btn btn-success'
							style={{
								borderStyle: "solid"
							}}>
							Genuiness
						</button>
						<button
							onClick={securityResult}
							className='btn btn-success'
							style={{
								borderStyle: "solid"
							}}>
							Security Result
						</button>
					</div>
				</div>
			</div>
			{check===1 && <ResultPlaceHolder/>}
			{check===2 && <Genuine data={gencheck.data} />}
			{check===3 && <SecurityResult data={seccheck.data} />}
		</>
	);
}

export default SearchResult;
