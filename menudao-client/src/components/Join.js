// 회원가입하는 모달창
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  checkUserId,
  checkUserBirth,
  checkUserPWcheckSamePW,
} from "../module/validationCheck";

function Join({ JoinonDropModal, BackgroundWhite, btnFontBlack }) {
  const dispatch = useDispatch();
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
        <ul className="join-input-list">
          <li className="join-each-input">
            <span className="join-subtitle">이름</span>
            <input className="join-input" placeholder="이름을 작성해주세요" />
          </li>
          <li className="join-each-input">
            <span className="join-subtitle">아이디</span>
            <input
              className="join-input-id"
              placeholder="영어 또는 숫자만 가능합니다"
              onChange={(e) => dispatch(checkUserId(e.target.value))}
            />
          </li>
          <li className="join-each-input">
            <span className="join-subtitle">생년월일</span>
            <input
              className="join-input"
              placeholder="주민번호 앞자리를 입력해주세요"
            />
          </li>
          <li className="join-each-input">
            <span className="join-subtitle">성별</span>
            <div id="radio-container">
              <label>
                <input name="gener" type="radio" className="join-gender" /> 남성
              </label>
              <label>
                <input name="gener" type="radio" className="join-gender" /> 여성
              </label>
            </div>
          </li>
          <li className="join-each-input">
            <span className="join-subtitle">비밀번호</span>
            <input
              className="join-input"
              placeholder="8자 이상, 영어 또는 숫자 또는 특수문자 하나 이상 포함"
            />
          </li>
          <li className="join-each-input">
            <span className="join-subtitle">비밀번호 확인</span>
            <input
              className="join-input"
              placeholder="비밀번호를 확인해주세요"
            />
          </li>
        </ul>
        <button className="join-btn">회원가입</button>
      </div>
    </>
  );
}

export default Join;
