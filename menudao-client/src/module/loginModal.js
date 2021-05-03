import { initialState } from "./initialState";

/*
	Types
*/
const USER_LOGIN = "USER_LOGIN";

/*
	Actions
*/
export const userLogin = (accessToken) => ({
  type: USER_LOGIN,
  payload: accessToken,
});
/*
	Reducer
*/

// 로그인 성공 시, accessToken을 저장한다
export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        accessToken: action.payload,
      };
    default:
      return state;
  }
}
