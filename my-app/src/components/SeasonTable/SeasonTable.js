import React from "react";
import TablePagination from "@mui/material/TablePagination";
import { renderEmptyRows } from "../../helpers";
import {
	TableContainer,
	Table,
	TableBody,
	TableRow,
	Paper,
	TableCell,
	Box,
} from "@mui/material";
import TableHeader from "../TableHeader/TableHeader";
import Dropdown from "../Dropdown/Dropdown";
import Team from "./TableComponents/Team";
import Result from "./TableComponents/Result";
import MatchDate from "./TableComponents/MatchDate";
import HalftimeScore from "./TableComponents/HalftimeScore";
import Stadium from "./TableComponents/Stadium";
import CircularLoader from "../Loader/CircularLoader";
import { useSeasonTable } from "../../hooks/useSeasonTable";
import { useNavigate } from "react-router-dom";

const SeasonTable = () => {
	const { tableState, changePage, changeSeason, handleChangeRowsPerPage } =
		useSeasonTable();
	const navigate = useNavigate();

	const handleChangePage = (event, newPage) => {
		changePage(newPage);
	};

	const renderBodyData = (data) => {
		return data
			.slice(
				tableState.page * tableState.rowsPerPage,
				tableState.page * tableState.rowsPerPage + tableState.rowsPerPage
			)
			.map((item) => (
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

	return (
		<Box
			sx={{
				width: "80%",
				margin: "0 auto",
				padding: "30px",
		
			}}
		>
			<TableContainer
				sx={{
					backgroundColor: 'rgb(246,246,246)'
				}}
				component={Paper}
			>
				<Table aria-label="table">
					<TableHeader />
					<TableBody
						sx={{
							position: "relative",
						}}
					>
						{tableState.events && tableState.events.length > 0 ? (
							renderBodyData(tableState.events)
						) : (
							<TableRow>
								<TableCell>
									<CircularLoader />
								</TableCell>
							</TableRow>
						)}
						{renderEmptyRows(
							tableState.events.length,
							tableState.page,
							tableState.rowsPerPage
						)}
					</TableBody>
				</Table>
				<Box
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						margin: "15px",
					}}
				>
					<Dropdown
						changeSeason={(e) => changeSeason(e.target.value)}
						seasons={tableState.seasons}
					/>
					<TablePagination
						rowsPerPageOptions={[5, 10, 15, 20]}
						component="div"
						count={tableState.events.length}
						page={tableState.page}
						onPageChange={handleChangePage}
						rowsPerPage={tableState.rowsPerPage}
						onRowsPerPageChange={(e) => handleChangeRowsPerPage(e.target.value)}
					/>
				</Box>
			</TableContainer>
		</Box>
	);
};
export default SeasonTable;
