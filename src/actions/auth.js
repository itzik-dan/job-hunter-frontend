import apiInstance from "../utils/api";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "./types";
import M from "materialize-css/dist/js/materialize.min.js";

// Login a user
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const { data } = await apiInstance.post("/signin", { email, password });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    M.toast({ html: "Signed up successfully" });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    M.toast({ html: error.response.data.message });
  }
};

// Load User
export const register =
  (name, email, password, company, position, university, contact) =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });

      const { data } = await apiInstance.post("/signup", {
        name,
        email,
        password,
        company,
        position,
        university,
        contact,
      });

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
      M.toast({ html: "Signed up successfully" });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      M.toast({ html: error.response.data.message });
    }
  };

//   Logout user
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  // dispatch({ type: USER_DETAILS_RESET });
  // document.location.href = "/signin";
};
