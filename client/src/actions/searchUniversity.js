import axios from "axios";

import { GET_UNIVERSITY, GET_ERRORS } from "./types";

// Register User
export const searchUniversity = payload => dispatch => {
  axios
    .get(
      `http://universities.hipolabs.com/search?name=${
        payload.universityName
      }&country=${payload.countryName}`
    )
    .then(res => {
      dispatch({
        type: GET_UNIVERSITY,
        university: res.data,
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      })
    );
};
