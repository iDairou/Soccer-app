import React from "react";
import { checkIfCanceled, checkIfPostponed, checkIfStarted } from "../../../helpers";
import { TableCell } from "@mui/material";

const HalftimeScore = (props) =>{
    const {data} = props


    if (checkIfPostponed(data.sport_event_status.status)) {
		return <TableCell>Postponed</TableCell>;
	} else if (checkIfCanceled(data.sport_event_status.status)) {
		return <TableCell>Cancelled</TableCell>;
	} else if (checkIfStarted(data.sport_event_status.status)) {
		return <TableCell>Not started</TableCell>;
	}

	return (
		<TableCell>
			<span>{data.sport_event_status.period_scores[0].home_score}</span>-
			<span>{data.sport_event_status.period_scores[0].away_score}</span>
		</TableCell>
	);
}
export default HalftimeScore