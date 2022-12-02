import axios from "axios";
import { API_URL } from "../utils/api";
import { FETCH_USER } from "./types";

axios.defaults.withCredentials = true;
// Load User
export const fetchUser = () => async (dispatch) => {
	const res = await axios.get(`${API_URL}/current_user`);

	dispatch({
		type: FETCH_USER,
		payload: res.data,
	});
};

