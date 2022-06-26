import React from "react";
import { Link, Outlet } from "react-router-dom"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function SearchResult(props) {
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component='img'
					alt='green iguana'
					height='140'
					image='/static/images/cards/contemplative-reptile.jpg'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{props.repo.Repository_Name}
					</Typography>
					<Typography variant='h5' component='div'>
						{props.repo.Author}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{props.repo.Description}
					</Typography>
				</CardContent>
				<CardActions>
					<Link to='genuine'>
						<Button size='small'>Genuiness</Button>
					</Link>
					<Link to='securityresult'>
						<Button size='small'>Security Result</Button>
					</Link>
				</CardActions>
			</Card>
			<Outlet />
		</>
	);
}

export default SearchResult;
