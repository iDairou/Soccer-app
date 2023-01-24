import React from "react";
import { TableCell } from "@mui/material";

const MatchDate = (props) =>{
    const {data} = props
    const dateFormat = new Date(data.sport_event.start_time).toLocaleString();
	return data.sport_event.start_time_confirmed ? (
		<TableCell>{dateFormat}</TableCell>
	) : (
		<TableCell>Match time not confirmed</TableCell>
	);
}
export default MatchDate