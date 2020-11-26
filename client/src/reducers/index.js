import { combineReducers } from "redux";
import authReducer from "./authReducer";
import searchUniversity from "./searchUniversity";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  search: searchUniversity,
});
