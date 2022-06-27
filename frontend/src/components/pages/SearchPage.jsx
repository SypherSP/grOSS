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
		const response = await axios.post('/api/description', val)
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
