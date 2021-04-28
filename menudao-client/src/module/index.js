import { combineReducers } from "redux";
import JoinReducer from "./joinModal";
import LoginReducer from "./loginModal";
const rootReducer = combineReducers({
  JoinReducer,
  LoginReducer,
});

export default rootReducer;
