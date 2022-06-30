import React, { useEffect, useState } from "react";
import { gen } from "../../VulnResults";
function Genuine(props){
    const [repos,setRepos] = useState([])
    useEffect(() => {
        setRepos(props.data)
    },[])
    console.log(repos)
    return (
        <>
        </>
    )
}

export default Genuine;