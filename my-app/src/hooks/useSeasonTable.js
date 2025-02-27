import { useEffect, useReducer } from "react";
import { initialState } from "../constants/constants";
import API from "../API/apiProvider";
import { tableReducer } from "../reducers/tableReducer";
import { actions } from "../types/types";
import { API_CALL_TIMEOUT } from "../constants/constants";

export const useSeasonTable = () => {
	const apiProvider = new API();
	const [tableState, dispatch] = useReducer(tableReducer, initialState);

	const getSeasonDataFromApi = (currentSeason) => {
		apiProvider.loadData(currentSeason).then((resp) => {
			dispatch({
				type: actions.UPDATE_TABLE_DATA,
				payload: resp.schedules,
			});
		});
	};
	const getSeasonsFromApi = () => {
		apiProvider.loadSeasons().then((resp) => {
			dispatch({
				type: actions.GET_SEASONS,
				payload: resp.seasons,
			});
		});
	};
	const changePage = (newPage) => {
		dispatch({
			type: actions.UPDATE_PAGE,
			payload: newPage,
		});
	};
	const handleChangeRowsPerPage = (rows) => {
		setPageTo0();
		dispatch({
			type: actions.UPDATE_ROWS_PER_PAGE,
			payload: rows,
		});
	};
	const setPageTo0 = () => {
		dispatch({
			type: actions.SET_PAGE_TO_0,
			payload: 0,
		});
	};

	const changeSeason = (event) => {
		getSeasonDataFromApi(event);
		setPageTo0();
	};

	useEffect(() => {
		getSeasonDataFromApi("sr:season:94031");
		setTimeout(() => {
			//Api limit call is 1 call per 1s so i made custom delay for one of the calls to make all content loaded at the beggining, otherwise user would need to refresh the page once to get data
			getSeasonsFromApi();
		}, API_CALL_TIMEOUT);
	}, []);

	return {
		tableState,
		getSeasonDataFromApi,
		changePage,
		setPageTo0,
		handleChangeRowsPerPage,
		changeSeason,
	};
};
