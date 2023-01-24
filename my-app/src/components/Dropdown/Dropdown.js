import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/material";

const Dropdown = (props) => {
	const { seasons, changeSeason, value } = props;

	return seasons.length > 0 ? (
		<FormControl>
			<InputLabel id="dropdown">Season</InputLabel>
			<Select
				labelId="dropdown"
				id="dropdown-select"
				value={value}
				label="Season"
				defaultValue="sr:season:77453"
				onChange={changeSeason}
			>
				{seasons.map((season) => {
					return (
						<MenuItem value={season.id} key={season.id}>
							{season.name}
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	) : (
		<Box
			sx={{
				width: "10%",
			}}
		>
			<LinearProgress />
		</Box>
	);
};
export default Dropdown;
