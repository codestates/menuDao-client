/*
	Types
*/
const JOIN_SHOW_MODAL = "JOIN_SHOW_MODAL";
const JOIN_DROP_MODAL = "JOIN_DROP_MODAL";
/*
	Actions
*/
export const joinshowModal = () => ({
  type: JOIN_SHOW_MODAL,
});
export const joindropModal = () => ({
  type: JOIN_DROP_MODAL,
});
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
export default function JoinReducer(state = initialState, action) {
  switch (action.type) {
    case JOIN_SHOW_MODAL:
      console.log("join modal 열기");
      return {
        ...state,
        joinShow: true,
        joinElement: document.querySelector("#join-container"),
      };
    case JOIN_DROP_MODAL:
      console.log("join modal 닫기");
      return {
        ...state,
        joinShow: false,
      };
    default:
      return state;
  }
}
