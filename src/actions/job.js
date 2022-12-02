import M from "materialize-css/dist/js/materialize.min.js";
import {
  GET_JOBS,
  JOB_ERROR,
  DELETE_JOB,
  ADD_JOB,
  SET_LOADING_JOB,
} from "./types";
import axios from "axios";
import { API_URL } from "../utils/api";

axios.defaults.withCredentials = true;

export const getJobs = () => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING_JOB });
    const res = await axios.get(`${API_URL}/jobs`);

    dispatch({
      type: GET_JOBS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: JOB_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

// Add post
export const addJob = (formData) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING_JOB });
    const res = await axios.post(`${API_URL}/jobs`, formData);
    M.toast({ html: "Job Added" });

    dispatch({
      type: ADD_JOB,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: JOB_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete a job post
export const deleteJob = (id) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING_JOB });
    await axios.delete(`${API_URL}/jobs/${id}`);
    M.toast({ html: "Job Deleted" });

    dispatch({
      type: DELETE_JOB,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: JOB_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
