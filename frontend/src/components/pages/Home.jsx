import React, { useState } from "react";
import '../../App.css';
import MainPage from "./MainPage";
import SearchPage from './SearchPage'

function Home(){
    const [started, updateStarted] = useState(false);
    function gettingStarted(event){
        updateStarted(true);
    }
    return (
        <div>
            {started ? <SearchPage/> : <MainPage onStart={gettingStarted} /> }
        </div>
    );
}

export default Home;