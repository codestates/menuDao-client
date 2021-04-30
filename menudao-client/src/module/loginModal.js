/*
	Types
*/
const LOGIN_SHOW_MODAL = "LOGIN_SHOW_MODAL";
const LOGIN_DROP_MODAL = "LOGIN_DROP_MODAL";
/*
	Actions
*/
export const loginshowModal = () => ({
  type: LOGIN_SHOW_MODAL,
});
export const logindropModal = () => ({
  type: LOGIN_DROP_MODAL,
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
        loginShow: true,
        loginElement: document.querySelector("#login-container"),
      };
    case LOGIN_DROP_MODAL:
      console.log("login modal 닫기");
      return {
        ...state,
        loginShow: false,
      };
    default:
      return state;
  }
}
