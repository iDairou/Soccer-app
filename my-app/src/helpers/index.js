import { TableCell, TableRow } from "@mui/material";

export const checkIfPostponed = (status) => {
	return status === "postponed";
};
export const checkIfCanceled = (status) => {
	return status === "cancelled";
};
export const checkIfStarted = (status) => {
	return status === "not_started";
};
export const checkWinLoseDraw = (data, team) => {
	return data.sport_event.competitors[team].id ===
		data.sport_event_status.winner_id
		? { background: "#4caf50" }
		: { background: "#ff5252" } && data.sport_event_status.match_tie
		? { background: "#fb8c00" }
		: { background: "#ff5252" };
};

// Below function i made in case in Api "home" and "away" qualifier of competitors would be set in random order.
// Currently 'home' is always first and 'away' second so let's say it's not neccesary to have it but imho always better to be sure.
export const findQualifier = (competitors, qualifier) =>
	competitors.find((comptetitor) => comptetitor.qualifier === qualifier).name;

export const renderError = (message) => {
	return (
		<div>{message}</div>
	);
};

export const renderEmptyRows = (length, page, rows) => {
	const emptyRows = rows - Math.min(rows, length - page * rows);
	return (
		emptyRows > 0 && (
			<TableRow style={{ height: 53 * emptyRows }}>
				<TableCell colSpan={6} />
			</TableRow>
		)
	);
};

