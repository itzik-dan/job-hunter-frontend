import {
  PROFILE_ERROR,
  GET_PROFILES,
  CLEAR_PROFILES,
  SET_LOADING,
} from "../actions/types";

const initialState = {
  profiles: [],
  loading: true,
  error: {},
};

export const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false,
      };
    case CLEAR_PROFILES:
      return {
        ...state,
        profiles: null,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        profile: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
