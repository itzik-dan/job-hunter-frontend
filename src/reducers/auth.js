import { FETCH_USER } from "../actions/types";

const initialState = {
	loading: true,
	user: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER:
			return {
				...state,
				loading: false,
				user: action.payload || false,
			};
		default:
			return state;
	}
};
