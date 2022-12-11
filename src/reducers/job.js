import {
  GET_JOBS,
  JOB_ERROR,
  DELETE_JOB,
  ADD_JOB,
  SET_LOADING_JOB,
} from "../actions/types";

const initialState = {
  jobs: [],
  loading: true,
  error: {},
};

//Reducer for createing a post
export const jobPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    case JOB_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [action.payload, ...state.jobs],
        loading: false,
      };
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job._id !== action.payload),
        loading: false,
      };
    case SET_LOADING_JOB:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
