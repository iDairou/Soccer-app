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
import CircularLoader from "../Loader/CircularLoader";
import { useSeasonTable } from "../../hooks/useSeasonTable";
import BodyData from "./TableComponents/BodyData";

const SeasonTable = () => {
	const { tableState, changePage, changeSeason, handleChangeRowsPerPage } =
		useSeasonTable();


	const handleChangePage = (event, newPage) => {
		changePage(newPage);
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
							<BodyData tableState={tableState}/>
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
