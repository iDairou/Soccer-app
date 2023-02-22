import React from "react";
import { TableCell } from "@mui/material";
import { checkIfPostponed } from "../../../helpers";

const MatchResult = ({data}) =>{
	return !checkIfPostponed(data.sport_event_status.match_status) ? (
		<TableCell key={data.sport_event.competitors[0].name}>
			<span>{data.sport_event_status.home_score}</span>-
			<span>{data.sport_event_status.away_score}</span>
		</TableCell>
	) : (
		<TableCell>Postponed</TableCell>
	);
}
export default MatchResult