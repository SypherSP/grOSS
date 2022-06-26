import React, { useState } from "react";
import SearchBar from "../SearchBar";
import "./SearchPage.css";
import SearchResult from "./searches/SearchResult";
import axios from "axios";
// import { Repo } from "../VulnResults";



function SearchPage() {
	const [searched, updateSearched] = useState(false);
	const [Repo, updateRepo] = useState("");
	async function onClick(val){
		const response = await axios('http://echo.jsontest.com/Repository_Name/"p1xxxel_vulnlauncher"/Author/"p1xxxel"/Description/"Launch vulnhub machines through a web interface"/Stars/1/Watchers/1/')
		console.log(response.data);
		updateRepo(response.data);
		updateSearched(true);
	}
	return (
		<>
			{searched ? <SearchResult repo={Repo}/> : <SearchBar onClick={onClick} />}
		</>
	);
}

export default SearchPage;
