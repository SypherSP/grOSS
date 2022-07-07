import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [searchURL, updateURL] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log("searching");
    props.onClick(searchURL);
  }
  return (
    <div
      className="container-fluid"
      style={{ marginTop: 56, backgroundColor: "#010409", height: "100vh" }}
    >
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
      <div className="container" style={{marginTop: "2em"}}>
        <div className="row mx-auto" style={{width: "60%", height: 70}}>
          <div className="col-2 p-3 mx-auto" style={{backgroundColor: "#42414d", width: "12%", borderRadius: 2}}>
          </div>
          <div className="col-2 p-3 mx-auto" style={{backgroundColor: "#42414d", width: "12%", borderRadius: 2}}>
          </div>
          <div className="col-2 p-3 mx-auto" style={{backgroundColor: "#42414d", width: "12%", borderRadius: 2}}>
          </div>
          <div className="col-2 p-3 mx-auto" style={{backgroundColor: "#42414d", width: "12%", borderRadius: 2}}>
          </div>
          <div className="col-2 p-3 mx-auto" style={{backgroundColor: "#42414d", width: "12%", borderRadius: 2}}>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
