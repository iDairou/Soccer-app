import { actions } from "../types/types";

export const tableReducer = (state, action) => {
	switch (action.type) {
		case actions.UPDATE_TABLE_DATA: {
			return {
				...state,
				events: action.payload,
			};
		}
		case actions.GET_SEASONS: {
			return {
				...state,
				seasons: action.payload,
			};
		}
		case actions.UPDATE_PAGE: {
			return {
				...state,
				page: action.payload,
			};
		}
		case actions.UPDATE_ROWS_PER_PAGE:
			return {
				...state,
				rowsPerPage: action.payload,
			};
		case actions.SET_PAGE_TO_0:
			return {
				...state,
				page: action.payload,
			};
		default: {
			return state;
		}
	}
};
