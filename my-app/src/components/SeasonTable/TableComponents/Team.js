import { TableCell } from "@mui/material";
import React from "react";
import { findQualifier, checkWinLoseDraw } from "../../../helpers";
const Team = (props) => {
	const { data, type, team } = props;
	return (
		<TableCell sx={checkWinLoseDraw(data, team)}>
			{findQualifier(data.sport_event.competitors, type)}
		</TableCell>
	);
};
export default Team;
