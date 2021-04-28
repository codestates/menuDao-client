/*
	Types
*/
const LOGIN_SHOW_MODAL = "LOGIN_SHOW_MODAL";
const LOGIN_DROP_MODAL = "LOGIN_DROP_MODAL";
/*
	Actions
*/
export const loginshowModal = (element) => ({
  type: LOGIN_SHOW_MODAL,
  payload: element,
});
export const logindropModal = () => ({ type: LOGIN_DROP_MODAL });
/*
	InitialState
*/
const initialState = {
  joinStatus: {
    joinShow: false,
    joinElement: null,
  },
  loginStatus: {
    loginShow: false,
    loginElement: null,
  },
};
/*
	Reducer
*/
export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SHOW_MODAL:
      return {
        ...state,
        loginShow: true,
        loginElement: document.querySelector("#login-container"),
      };
    case LOGIN_DROP_MODAL:
      return {
        ...state,
        loginShow: false,
      };
    default:
      return state;
  }
}
