import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./SearchBar.css";


function SearchBar(props) {
    const [searchURL, updateURL] = useState("");
    function handleSubmit(event){
        event.preventDefault();
        console.log("searching");
        props.onClick(searchURL);
    }
  return (
    <div className="container-fluid" style={{marginTop: 56,backgroundColor: "#010409",height: "100vh"}}>
    <form onSubmit={handleSubmit}>
    <input 
        onChange={(event) => {
            const val = event.target.value;
            updateURL(val);
        }} 
        className="search__input"
        value={searchURL} 
        type="text" 
        placeholder="Search"
        />
        </form>
        <Outlet />
</div>
  );
}

export default SearchBar;
