import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import VulnResults from "../../VulnResults";

function SecurityResult() {
    return (
	<TableContainer
		sx={{ maxWidth: 1550, marginTop: 10 }}
		component={Paper}
		className='tablediv'>
		<Table sx={{ minWidth: 650 }} aria-label='simple table'>
			<TableHead>
				<TableRow>
					<TableCell>Vulnerable Library</TableCell>
					<TableCell align='right'>Vulnerability</TableCell>
					<TableCell align='right'>Description</TableCell>
					<TableCell align='right'>URL</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{VulnResults.map((row) => (
					<TableRow
						key={row.mod_name}
						sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
						<TableCell component='th' scope='row'>
							{row.mod_name}
						</TableCell>
						<TableCell align='right'>{row.vul_name}</TableCell>
						<TableCell align='right'>{row.desc}</TableCell>
						<TableCell align='right'>{row.url}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</TableContainer>
    );
}

export default SecurityResult;
