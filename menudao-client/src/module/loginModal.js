import { initialState } from "./initialState";
/*
	Types
*/
const LOGIN_SHOW_MODAL = "LOGIN_SHOW_MODAL";
const LOGIN_DROP_MODAL = "LOGIN_DROP_MODAL";
const USER_LOGIN = "USER_LOGIN";
/*
	Actions
*/
export const loginshowModal = () => ({
  type: LOGIN_SHOW_MODAL,
});
export const logindropModal = () => ({
  type: LOGIN_DROP_MODAL,
});
export const userLogin = (accessToken) => ({
  type: USER_LOGIN,
  payload: accessToken,
});
/*
	Reducer
*/
export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SHOW_MODAL:
      console.log("login modal 열기");
      return {
        ...state,
        loginStatus: {
          loginShow: true,
          loginElement: document.querySelector("#login-container"),
        },
      };
    case LOGIN_DROP_MODAL:
      console.log("login modal 닫기");
      return {
        ...state,
        loginStatus: {
          loginShow: false,
          loginElement: null,
        },
      };
    case USER_LOGIN:
      return {
        ...state,
        accessToken: action.payload,
      };
    default:
      return state;
  }
}
