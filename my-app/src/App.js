import React from "react";
import SeasonTable from "./components/SeasonTable/SeasonTable";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import EventTimeline from "./components/EventTimeline/EventTimeline";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Routes, useLocation } from "react-router-dom";
import './styles/routingTransition.css'

const App = () => {
	const location = useLocation();
	return (
		<TransitionGroup component={null}>
			<CSSTransition key={location.key} classNames="fade" timeout={300}>
				<Routes location={location}>
					<Route exact path="/" element={<SeasonTable />} />
					<Route path="/timelines/:id" element={<EventTimeline />} />
					<Route path="/onas" element={<div>O NAS</div>} />
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default App;
