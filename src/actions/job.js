import M from "materialize-css/dist/js/materialize.min.js";
import apiInstance from "../utils/api";
import {
  GET_JOBS,
  JOB_ERROR,
  DELETE_JOB,
  ADD_JOB,
  SET_LOADING_JOB,
} from "./types";

export const getJobs = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SET_LOADING_JOB });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await apiInstance.get("/jobs", config);

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
export const addJob = (formData) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    dispatch({ type: SET_LOADING_JOB });
    const res = await apiInstance.post("/jobs", formData, config);
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
export const deleteJob = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    dispatch({ type: SET_LOADING_JOB });
    await apiInstance.delete(`/jobs/${id}`, config);
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
