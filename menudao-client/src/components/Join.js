// 회원가입하는 모달창
import React, { useState, useRef, createRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { checkUserId, checkUserBirth, checkUserPW, checkSamePW } from "../module/validationCheck";
import ReactDOM from "react-dom";

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
          }}>
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
            <input id="join-input" placeholder="이름"/>
            <input id="join-input" className="join-input-id" placeholder="ID" 
              onChange={(e) => {dispatch(checkUserId(e.target.value))}}/> 
            <input id="join-input" className="join-input-birth" 
              placeholder="주민번호 앞자리를 입력해주세요."/>
            <div id="radio-container">
              <label><input name="gener" type="radio" className="join-gender" />      남성</label>
              <label><input name="gener" type="radio" className="join-gender" />      여성</label>
            </div>
            <input id="join-input" className="join-input-pw" placeholder="비밀번호" />
            <input id="join-input" className="join-input-samepw" placeholder="비밀번호 확인" />
          </div>
        </div>
        <button className="join-btn">회원가입</button>
      </div>
    </>
  );
}

export default React.memo(Join);
