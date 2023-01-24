import React, { useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import EventTimelineItem from "../EventTimelineItem/EventTimelineItem";
import { availableEvents } from "../../constants/constants";
import TimelineHeader from "../EventTimelineHeader/EventTimelineHeader";
import API from "../../API/apiProvider";
import { useParams } from "react-router-dom";
import CircularLoader from "../Loader/CircularLoader";
import { Typography, IconButton } from "@mui/material";
import "../../styles/eventTimeline.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Alert, AlertTitle, Box } from "@mui/material";

const EventTimeline = () => {
	const [timelineEvents, setTimelineEvents] = useState(null);
	const [teamsResults, setTeamsResults] = useState(null);
	const [finish, setFinish] = useState(false);
	const apiProvider = new API();
	const { id } = useParams();
	const navigate = useNavigate();

	const getEventInformation = (id) => {
		const timelineEventsIds = Object.keys(availableEvents);
		apiProvider
			.loadTimeline(id)
			.then((resp) => {
				const filteredTeams = resp.sport_event.competitors;
				const filteredScores = resp.sport_event_status;

				if (resp.timeline) {
					setTeamsResults([filteredTeams, filteredScores]);
					const filteredTimeline = resp.timeline.filter((t) =>
						timelineEventsIds.includes(t.type)
					);
					setTimelineEvents(filteredTimeline);
				}
			})
			.finally(() => setFinish(true));
	};

	useEffect(() => {
		getEventInformation(id);
	}, []);

	if (!timelineEvents && !finish) {
		return <CircularLoader />;
	}

	return timelineEvents &&
		teamsResults[1].status !== "postponed" &&
		teamsResults[1].status !== "not_started" ? (
		<>
			<IconButton
				onClick={() => navigate("/")}
				sx={{
					padding: "15px",
					position: "absolute",
					top: "10px",
					left: "15px",
					border: "1px solid gray",
					borderRadius: "50%",
				}}
				size="small"
			>
				<ArrowBackIosNewIcon
					fontSize="medium"
					variant="contained"
				></ArrowBackIosNewIcon>
			</IconButton>

			<TimelineHeader
				teamHome={teamsResults[0][0].name}
				teamAway={teamsResults[0][1].name}
				scoreHome={teamsResults[1].home_score}
				scoreAway={teamsResults[1].away_score}
			/>
			<Timeline
				sx={{
					paddingBottom: "210px;",
				}}
				key={timelineEvents.length}
			>
				{timelineEvents.map((event) => {
					const { players } = event;
					const playersWithoutComma = players.map((player) =>
						player.name.split(",").join("")
					);

					return (
						<EventTimelineItem
							type={event.type}
							key={event.id}
							position={event.competitor === "home" ? "left" : "right"}
							sx={
								event.competitor === "home"
									? {
											display: "flex",
											flexDirection: "row-reverse",
									  }
									: { display: "flex" }
							}
						>
							<Typography className="margin-content" component="span">
								{availableEvents[event.type].icon}
							</Typography>
							<Typography className="margin-content" component="span">
								{event.match_clock}
							</Typography>

							{event.type === "substitution" ? (
								<Typography variant="div">
									<Typography
										className="margin-content"
										component="span"
										sx={{ fontWeight: "bold" }}
									>
										Out:{" "}
									</Typography>
									{playersWithoutComma[0]}
									<Typography
										className="margin-content"
										component="span"
										sx={{ fontWeight: "bold" }}
									>
										In:{" "}
									</Typography>
									{playersWithoutComma[1]}
								</Typography>
							) : (
								<Typography className="margin-content" component="span">
									{playersWithoutComma[0]}
								</Typography>
							)}
						</EventTimelineItem>
					);
				})}
			</Timeline>
		</>
	) : (
		<Box
			sx={{
				width: "80%",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				margin: "0 auto",
			}}
		>
			<Alert
				sx={{
					flex: "0 0 100%",
				}}
				severity="warning"
			>
				<AlertTitle>Warning</AlertTitle>
				Data not found! Go to{" "}
				<strong
					onClick={() => navigate("/")}
					style={{
						fontWeight: "bold",
						cursor: "pointer",
					}}
				>
					home page
				</strong>
			</Alert>
		</Box>
	);
};
export default EventTimeline;
