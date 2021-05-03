import { combineReducers } from "redux";
import LoginReducer from "./loginModal";
import validationReducer from "./validationCheck";
const rootReducer = combineReducers({
  LoginReducer,
  validationReducer,
});

export default rootReducer;
