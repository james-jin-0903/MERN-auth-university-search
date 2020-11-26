import { GET_UNIVERSITY } from "../actions/types";

const initialState = {
  university: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_UNIVERSITY:
      return {
        university: [...action.university],
      };
    default:
      return state;
  }
}
