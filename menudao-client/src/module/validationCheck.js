import { initialState } from "./initialState";

/*
	Types
*/
/*
id : 4자리 이상 10자리 이하 영어와 숫자만 조합
생년월일 : 숫자 6자리
비밀번호 : 8자 이상, 영어 또는 숫자 또는 특수문자 하나 이상 포함
비밀번호 확인 : 비밀번호와 일치하는지 확인 
*/
const PUSH_USER_NAME = "PUSH_USER_NAME";
const PUSH_USER_GENDER = "PUSH_USER_GENDER";
const CHECK_USER_ID = "CHECK_USER_ID";
const CHECK_USER_BIRTH = "CHECK_USER_BIRTH";
const CHECK_USER_PW = "CHECK_USER_PW";
const CHECK_SAME_PW = "CHECK_SAME_PW";

/*
유효성 검사 함수
*/
// 입력한 ID 유효성 체크: 4자리 이상 10자리 이하 영어와 숫자만 조합
const isRightId = function (str) {
  const id = /^[A-Za-z0-9]{4,12}$/;
  return id.test(str);
};

// 입력한 문자의 길이 체크: 숫자 및 6자리
const isRightBirth = function (num_str) {
  const num_check = /^[0-9]{6}$/;
  return num_check.test(num_str);
};

//비밀번호 : 8자 이상, 영어 또는 숫자 또는 특수문자(@$!%*#?&) 하나 이상 포함
const isRightPW = function (pw) {
  const pw_check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return pw_check.test(pw);
};

/*
	Actions
*/
export const pushUserName = (username) => ({
  type: PUSH_USER_NAME,
  payload: username,
});
export const pushUserGender = (usergender) => ({
  type: PUSH_USER_GENDER,
  payload: usergender,
});
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
    case PUSH_USER_NAME:
      console.log("user 이름", action.payload);
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          user_name: action.payload,
        },
      };
    case CHECK_USER_ID:
      const idInput = document.querySelector(".join-input-id");
      if (isRightId(action.payload)) {
        idInput.style.border = "1px solid blue";
        console.log("입력한 ID:", action.payload);
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            user_id: action.payload,
          },
        };
      } else {
        idInput.style.border = "1px solid red";
        console.log("ID 형식에 맞추어주세요.");
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            user_id: "",
          },
        };
      }
    case CHECK_USER_BIRTH:
      const birthInput = document.querySelector(".join-input-birth");
      if (isRightBirth(action.payload)) {
        console.log("입력한 생년월일:", action.payload);
        birthInput.style.border = "1px solid blue";
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            user_birthday: action.payload,
          },
        };
      } else {
        birthInput.style.border = "1px solid red";
        console.log("생년월일 형식에 맞추어주세요.");
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            user_birthday: "",
          },
        };
      }
    case PUSH_USER_GENDER:
      console.log("user 성별", action.payload);
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          user_sex: action.payload,
        },
      };
    case CHECK_USER_PW:
      const pwInput = document.querySelector(".join-input-pw");
      if (isRightPW(action.payload)) {
        console.log("입력한 패스워드:", action.payload);
        pwInput.style.border = "1px solid blue";
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            user_password: action.payload,
          },
        };
      } else {
        pwInput.style.border = "1px solid red";
        console.log("패스워드 형식에 맞추어주세요.");
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            user_password: "",
          },
        };
      }
    case CHECK_SAME_PW:
      console.log("user 패스워드", state.userInfo.userPW);
      console.log("user 패스워드 확인", action.payload);
      const pwcheckInput = document.querySelector(".join-input-samepw");
      if (state.userInfo.userPW === action.payload) {
        pwcheckInput.style.border = "1px solid blue";
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            userPWcheck: true,
          },
        };
      } else {
        pwcheckInput.style.border = "1px solid red";
        console.log("패스워드가 일치하는지 확인해주세요");
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            userPWcheck: false,
          },
        };
      }

    default:
      return state;
  }
}
