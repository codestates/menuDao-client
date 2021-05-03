import { initialState } from "./initialState";

const PUSH_FOOD_NAME = "PUSH_FOOD_NAME";

export const pushFoodName = (foodname) => ({
  type: PUSH_FOOD_NAME,
  payload: foodname,
});

export default function foodNameReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_FOOD_NAME:
      return {
        ...state,
        foodName: action.payload,
      };
    default:
      return state;
  }
}
