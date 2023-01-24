import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import RectangleIcon from "@mui/icons-material/Rectangle";

export const headColumns = [
	"Team 1 (home)",
	"Team 2 (away)",
	"Result",
	"Match date",
	"Half time score",
	"Stadium name",
];
export const initialState = {
	events: [],
	seasons: [],
	currentSeason: "",
	page: 0,
	rowsPerPage: 5,
};

export const API_CALL_TIMEOUT = 1100;

const iconCardStyles = {
	fillOpacity: "1",
	rotate: "90deg",
};

export const availableEvents = {
	score_change: {
		icon: <SportsSoccerIcon></SportsSoccerIcon>,
	},
	yellow_card: {
		icon: (
			<RectangleIcon
				sx={{
					fill: "yellow",
					...iconCardStyles,
				}}
			></RectangleIcon>
		),
	},
	red_card: {
		icon: (
			<RectangleIcon
				sx={{
					fill: "red",
					...iconCardStyles,
				}}
			></RectangleIcon>
		),
	},
	substitution: {
		icon: <CompareArrowsIcon></CompareArrowsIcon>,
	},
};
