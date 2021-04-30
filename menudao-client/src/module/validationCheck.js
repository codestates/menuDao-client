import { initialState } from './initialState';

/*
	Types
*/
/*
id : 영어 또는 숫자
생년월일 : 숫자 6자리
비밀번호 : 8자 이상, 영어 또는 숫자 또는 특수문자 하나 이상 포함
비밀번호 확인 : 비밀번호와 일치하는지 확인 
*/
const CHECK_USER_ID = "CHECK_USER_ID";
const CHECK_USER_BIRTH = "CHECK_USER_BIRTH";
const CHECK_USER_PW = "CHECK_USER_PW";
const CHECK_SAME_PW = "CHECK_SAME_PW";
/*
	Actions
*/
const isRightId = function(str) {
  const id = /^[A-Za-z][A-Za-z0-9]*$/

  return id.test(str);
};
export const checkUserId = (userid) => ({
  type: CHECK_USER_ID,
  payload: userid,
});
export const checkUserBirth = (userbirth) => ({
  type: CHECK_USER_BIRTH,
  payload: userbirth,
});
export const checkUserPW = (userpw) => ({
  type: CHECK_USER_PW,
  payload: userpw,
});
export const checkSamePW = (samepw) => ({
  type: CHECK_SAME_PW,
  payload: samepw,
});
/*
	Reducer
*/
// Main.js : join-input에 onchange 이벤트로 state를 입력값으로 변경한다.
export default function validationReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_USER_ID:
      // [유효성 검증 함수] 
      // 아이디 입력문자는 영어 또는 숫자만 가능
      const idInput = document.querySelector(".join-input-id");
      if(isRightId(action.payload)) {
        idInput.style.border = "1px solid blue";
        return {
          ...state,
          userID: action.payload,
        }
      }else {
        console.log('id check2');
        idInput.style.border = "1px solid red";
        console.log('형식에 맞추어주세요.')
      }
    case CHECK_USER_BIRTH:
      console.log("join modal 닫기");
      return {
        ...state,
        joinShow: false,
      };
    case CHECK_USER_PW:
    console.log("join modal 닫기");
    return {
      ...state,
      joinShow: false,
    };
    case CHECK_SAME_PW:
      console.log("join modal 닫기");
      return {
        ...state,
        joinShow: false,
    };
    default:
      return state;
  }
}
