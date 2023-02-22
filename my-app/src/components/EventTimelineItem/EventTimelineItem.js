import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import React from "react";

const EventTimelineItem = (props) => {
	const { position, id, children, type, sx } = props;
	return (
		<TimelineItem
			sx={{ minHeight: "6 0px" }}
			type={type}
			key={id}
			position={position}
		>
			<TimelineSeparator>
				<TimelineDot />
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent sx={sx}>{children}</TimelineContent>
		</TimelineItem>
	);
};
export default EventTimelineItem;
