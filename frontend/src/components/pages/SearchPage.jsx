import React, { useState } from "react";
import SearchBar from "../SearchBar";
import "./SearchPage.css";
import SearchResult from "./searches/SearchResult";
import axios from "axios";



function SearchPage() {
	const [searched, updateSearched] = useState(false);
	const [Repo, updateRepo] = useState("");
	async function onClick(val){
		const response = await axios.post('/api/description', {'url': val})
		console.log(response.data);
		updateRepo(JSON.parse(response.data));
		updateSearched(true);
	}
	return (
		<>
			{searched ? <SearchResult repo={Repo}/> : <SearchBar onClick={onClick} />}
		</>
	);
}

export default SearchPage;
