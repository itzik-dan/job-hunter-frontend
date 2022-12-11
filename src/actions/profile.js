// import { setAlert } from "./alert";
import M from "materialize-css/dist/js/materialize.min.js";
import apiInstance from "../utils/api";

import {
  GET_PROFILES,
  PROFILE_ERROR,
  SET_LOADING,
  USER_LOGOUT,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "./types";

// Update user profile
export const editProfile = (profileData) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    dispatch({ type: USER_UPDATE_REQUEST });
    const res = await apiInstance.patch("/profile", profileData, config);

    // Getting current value from local storage
    const userInfoFromStorage = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    // console.log({ ...userInfoFromStorage });
    // console.log(res);

    // Updating the profile fields in localStorage
    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        ...userInfoFromStorage,
        name: res.data.updatedUser.name,
        company: res.data.updatedUser.company,
        university: res.data.updatedUser.university,
        position: res.data.updatedUser.position,
        contact: res.data.updatedUser.contact,
      })
    );

    // Updating user info in redux store
    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: res.data,
    });

    M.toast({ html: "Profile Updated" });
  } catch (err) {
    dispatch({
      type: USER_UPDATE_FAIL,
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
export const deleteProfile = () => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
      dispatch({ type: SET_LOADING });
      await apiInstance.delete("/profile", config);
      localStorage.removeItem("userInfo");

      dispatch({ type: USER_LOGOUT });
      M.toast({ html: "Profile Deleted" });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
