import React from "react";
import { Box, CircularProgress } from "@mui/material";

const CircularLoader = () => {
	return (
		<Box
			sx={{
				position: "absolute",
				top: "50%",
				right: "50%",
				transform: "translate(-50%, -50%)",
			}}
		>
			<CircularProgress />
		</Box>
	);
};
export default CircularLoader;
