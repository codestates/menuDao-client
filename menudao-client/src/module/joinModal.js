/*
	Types
*/
const JOIN_SHOW_MODAL = "JOIN_SHOW_MODAL";
const JOIN_DROP_MODAL = "JOIN_DROP_MODAL";
/*
	Actions
*/
export const joinshowModal = (element) => ({
  type: JOIN_SHOW_MODAL,
  payload: element,
});
export const joindropModal = () => ({ type: JOIN_DROP_MODAL });
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
      console.log("제바라라라ㅣ아헝리ㅏ허리아허");
      return {
        ...state,
        joinShow: true,
        joinElement: document.querySelector("#join-container"),
      };
    case JOIN_DROP_MODAL:
      return {
        ...state,
        joinShow: false,
      };
    default:
      return state;
  }
}
