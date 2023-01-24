import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles/reset.css";
import ViewContainer from "./components/ViewContainer/ViewContainer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<ViewContainer>
			<App />
		</ViewContainer>
	</Router>
);
