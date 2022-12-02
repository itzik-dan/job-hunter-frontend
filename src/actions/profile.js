// import { setAlert } from "./alert";
import M from "materialize-css/dist/js/materialize.min.js";
import apiInstance from "../utils/api";

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  SET_LOADING,
} from "./types";

// Fetch logged in user profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });
    const res = await apiInstance.get("/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or update profile
export const AddProfile = (profileData) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });
    const res = await apiInstance.post("/profile", profileData);
    M.toast({ html: "Profile Updated" });

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get all profiles
export const getAllProfiles = () => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });
    const res = await apiInstance.get("/profile");

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete profile
export const deleteProfile = () => async (dispatch) => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
      dispatch({ type: SET_LOADING });
      await apiInstance.delete("/profile");

      dispatch({ type: CLEAR_PROFILE });
      M.toast({ html: "Profile Deleted" });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
