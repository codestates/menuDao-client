/*
	Types
*/
const SHOW_MODAL = 'modal/SHOW_MODAL';
const DROP_MODAL = 'modal/DROP_MODAL';
/*
	Actions
*/
export const showModal = (element)=> ({ type: SHOW_MODAL, payload: element });
export const dropModal = ()=> ({ type: DROP_MODAL});
/*
	InitialState
*/
const initialState = {
  show: false,			// 모달 표시 여부
  element: null			// 모달 Component
};
/*
	Reducer
*/
export default function modalReducer(state = initialState, action) {
  switch(action.type) {
    case SHOW_MODAL:
      return {
        show: true,
        element: document.querySelector('.join-container') 
      }
    case DROP_MODAL:
      return {
        ...state,
        show: false
      }
    default:
      return state;
  }
}