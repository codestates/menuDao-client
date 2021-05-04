import { initialState } from "./initialState";

const PUSH_FOOD_INFO = "PUSH_FOOD_INFO";

export const pushFoodInfo = (food_name, food_category) => ({
  type: PUSH_FOOD_INFO,
  payload: {
    food_name: food_name,
    food_category: food_category,
  },
});

export default function foodInfoReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_FOOD_INFO:
      return {
        ...state,
        foodInfo: {
          food_name: action.payload.food_name,
          food_category: action.payload.food_category,
        },
      };
    default:
      return state;
  }
}
