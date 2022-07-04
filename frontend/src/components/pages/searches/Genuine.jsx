import React, { useEffect, useState } from "react";
function Genuine(props) {
	const [repos, setRepos] = useState([]);
	useEffect(() => {
		setRepos(props.data.result);
	}, []);
	console.log(repos);
	return (
		<>
			{repos.length > 0 && (
				<div
					className='card'
					style={{
						margin: "5%",
						backgroundColor: "#0d1117",
						border: "1px #30363d solid",
					}}
					id='genuineness'>
					<h2 className='card-header'>Matched Repos</h2>
						{repos.map((res) => (
							<div>
								<p>Repo Name: <a href={res.repo_link} >{res.repo_name}</a></p>
								<p>Followers: {res.followers}</p>
								<p>Contributors: {res.contributor}</p>
								<p>Created: {res.created} </p>
								<p>Forks: {res.forks} </p>
								<p>Stars: {res.stars} </p>
								<p>Watchers: {res.watchers}</p>
								<p>Commits: {res.commits} </p>
								<p>Issues: {res.issues} </p>
								<p>Genuineness: {res.Genuineness} </p>
							</div>
						))}
				</div>
			)}
		</>
	);
}

export default Genuine;
