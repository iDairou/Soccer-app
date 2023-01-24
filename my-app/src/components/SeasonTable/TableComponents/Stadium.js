import React from "react";
import { TableCell } from "@mui/material";

const Stadium = (props) => {
	const { data } = props;
	return <TableCell>{data.sport_event.venue.name}</TableCell>;
};
export default Stadium;
