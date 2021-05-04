import { combineReducers } from "redux";

import validationReducer from "./validationCheck";
import foodInfoReducer from "./RecommendFood";
import weatherInfoReducer from "./WeatherInfo";
const rootReducer = combineReducers({
  validationReducer,
  foodInfoReducer,
  weatherInfoReducer,
});

export default rootReducer;
