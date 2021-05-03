import { combineReducers } from "redux";
import LoginReducer from "./loginModal";
import validationReducer from "./validationCheck";
import foodNameReducer from "./RecommendFood";
const rootReducer = combineReducers({
  LoginReducer,
  validationReducer,
  foodNameReducer,
});

export default rootReducer;
