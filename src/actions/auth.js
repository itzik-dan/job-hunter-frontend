import apiInstance from "../utils/api";
import { FETCH_USER } from "./types";

// Load User
export const fetchUser = () => async (dispatch) => {
	const res = await apiInstance.get("/current_user");

	dispatch({
		type: FETCH_USER,
		payload: res.data,
	});
};

