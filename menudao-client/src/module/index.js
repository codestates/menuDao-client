import { combineReducers } from "redux";
import JoinReducer from "./joinModal";
import LoginReducer from "./loginModal";
import validationReducer from "./validationCheck"
const rootReducer = combineReducers({
  JoinReducer,
  LoginReducer,
  validationReducer,
});

export default rootReducer;
