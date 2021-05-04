import { combineReducers } from "redux";
import LoginReducer from "./loginModal";
import validationReducer from "./validationCheck";
import foodInfoReducer from "./RecommendFood";
import weatherInfoReducer from "./WeatherInfo";
const rootReducer = combineReducers({
  LoginReducer,
  validationReducer,
  foodInfoReducer,
  weatherInfoReducer,
});

export default rootReducer;
