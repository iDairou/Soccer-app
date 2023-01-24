import React from "react";
import { StyledTimelineHeader } from "./EventTimelineHeader.styled";

const TimelineHeader = (props) => {
	const { teamHome, teamAway, scoreHome, scoreAway } = props;
	return (
		<StyledTimelineHeader>
			<div>
				<h2>{teamHome}</h2>
				<p>{scoreHome}</p>
			</div>

			<div>
				<h2>{teamAway}</h2>
				<p>{scoreAway}</p>
			</div>
		</StyledTimelineHeader>
	);
};
export default TimelineHeader;
