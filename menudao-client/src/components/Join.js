// 회원가입하는 모달창
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  checkUserId,
  checkUserBirth,
  checkUserPW,
  checkSamePW,
  pushUserName,
  pushUserGender,
} from "../module/validationCheck";

function Join({
  JoinonDropModal,
  LoginonShowModal,
  BackgroundWhite,
  btnFontBlack,
}) {
  const dispatch = useDispatch();
  const Join_UserInfo = useSelector(
    (status) => status.validationReducer.userInfo
  );
  const isCorrectUserInfo = function (Join_UserInfo) {
    const valueArr = Object.values(Join_UserInfo);
    for (let value of valueArr) {
      if (value === "" || value === false) {
        alert("작성하신 회원가입 목록을 다시 한번 확인해주세요");
        return;
      }
    }
    alert("화원가입이 완료되었습니다");
    console.log("회원가입을 완료한 유저정보:", Join_UserInfo);
    LoginonShowModal();
    JoinonDropModal();
  };
  return (
    <>
      <div id="join-container">
        <button
          className="join-close-btn"
          onClick={() => {
            JoinonDropModal();
            BackgroundWhite();
            btnFontBlack();
          }}
        >
          X
        </button>
        <div id="join-title">Join</div>
        <div className="join-list-container">
          <div className="join-span-container">
            <p className="join-subtitle">이름</p>
            <p className="join-subtitle">아이디</p>
            <p className="join-subtitle">생년월일</p>
            <p className="join-subtitle">성별</p>
            <p className="join-subtitle">비밀번호</p>
            <p className="join-subtitle">비밀번호 확인</p>
          </div>
          <div className="join-input-container">
            <input
              id="join-input"
              placeholder="이름"
              onChange={(e) => {
                dispatch(pushUserName(e.target.value));
              }}
            />
            <input
              id="join-input"
              className="join-input-id"
              placeholder="4자이상 12자 이하의 숫자와 영어로 조합해주세요"
              onChange={(e) => {
                dispatch(checkUserId(e.target.value));
              }}
            />
            <input
              id="join-input"
              className="join-input-birth"
              placeholder="주민번호 앞자리를 입력해주세요."
              onChange={(e) => {
                dispatch(checkUserBirth(e.target.value));
              }}
            />
            <div id="radio-container">
              <label>
                <input
                  value="men"
                  name="gender"
                  type="radio"
                  className="join-gender"
                  onChange={(e) => {
                    dispatch(pushUserGender(e.target.value));
                  }}
                />{" "}
                남성
              </label>
              <label>
                <input
                  value="women"
                  name="gender"
                  type="radio"
                  className="join-gender"
                  onChange={(e) => {
                    dispatch(pushUserGender(e.target.value));
                  }}
                />{" "}
                여성
              </label>
            </div>
            <input
              id="join-input"
              className="join-input-pw"
              placeholder="최소 8자 이상, 알파벳과 숫자 및 특수문자(@$!%*#?&) 하나 이상 포함"
              onChange={(e) => {
                dispatch(checkUserPW(e.target.value));
              }}
            />
            <input
              id="join-input"
              className="join-input-samepw"
              placeholder="비밀번호 확인"
              onChange={(e) => {
                dispatch(checkSamePW(e.target.value));
              }}
            />
          </div>
        </div>
        <button
          className="join-btn"
          onClick={() => {
            isCorrectUserInfo(Join_UserInfo);
          }}
        >
          회원가입
        </button>
      </div>
    </>
  );
}

export default React.memo(Join);
