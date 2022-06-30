import React, { useEffect, useState } from "react";
function Genuine(props){
    const [repos,setRepos] = useState([])
    useEffect(() => {
        setRepos(props.data.result)
    },[])
    console.log(repos)
    return (
        <>
            {repos.length>0 && (
                <div id="genuineness">
                    <h2>Matched Repos</h2>
                    <ul>
                        {repos.map(res => (
                            <div href={res.Repo_Link}>
                                <li>Repo Name: {res.Repo_Link}</li>
                                <li>Followers: {res.Followers}</li>
                                <li>Contributors: {res.Contributor}</li>
                                <li>Created: {res.Created} </li>
                                <li>Forks: {res.Forks} </li>
                                <li>Stars: {res.Stars} </li>
                                <li>Watchers: {res.Watchers}</li>
                                <li>Commits: {res.Commits} </li>
                                <li>Issues: {res.Issues} </li>
                                <li>Genuineness: {res.Genuineness} </li>
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Genuine;