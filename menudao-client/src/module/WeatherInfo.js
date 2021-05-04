import { initialState } from "./initialState";

const PUSH_WEATHER_INFO = "PUSH_WEATHER_INFO";

export const pushWeatherInfo = (weather, big_choice_menu, feeling) => ({
  type: PUSH_WEATHER_INFO,
  payload: {
    weather: weather,
    big_choice_menu: big_choice_menu,
    feeling: feeling,
  },
});

export default function weatherInfoReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_WEATHER_INFO:
      return {
        ...state,
        weatherInfo: {
          weather: action.payload.weather,
          big_choice_menu: action.payload.big_choice_menu,
          feeling: action.payload.feeling,
        },
      };
    default:
      return state;
  }
}
