import React from "react";

import Team from "./Team";
import MatchDate from "./MatchDate";
import Result from "./MatchResult";
import Stadium from "./Stadium";
import HalftimeScore from "./HalftimeScore";
import { useNavigate } from "react-router-dom";
import { TableRow } from "@mui/material";

const BodyData = ({ tableState }) => {
	const navigate = useNavigate();

	const filteredData = tableState.events.slice(
		tableState.page * tableState.rowsPerPage,
		tableState.page * tableState.rowsPerPage + tableState.rowsPerPage
	);
	return filteredData.map((item) => (
		<TableRow
			onClick={() => navigate(`/timelines/${item.sport_event.id}`)}
			hover
			key={item.sport_event.id}
		>
			<Team data={item} type="home" team={0} />
			<Team data={item} type="away" team={1} />
			<Result data={item} />
			<MatchDate data={item} />
			<HalftimeScore data={item} />
			<Stadium data={item} />
		</TableRow>
	));
};
export default BodyData;
