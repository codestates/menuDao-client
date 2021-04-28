// 회원가입하는 모달창
import React from 'react';

function Join({ joinRef }) {
  const today = new Date();
  const thisYear = today.getFullYear();
  return(
    <>
      <div id="join-container"> 
        <div id="join-title">Join</div>
        <input className="join-input" placeholder="이름"/>
        <input className="join-input" placeholder="ID"/>
        <span className="join-subtitle">생년월일</span>
        <input className="join-input" placeholder="주민번호 앞자리를 입력해주세요."/>
        <span className="join-subtitle">성별</span>
        <input name="gener" type="radio" className="join-gender" /> 남성
        <input name="gener" type="radio" className="join-gender" /> 여성
        <input className="join-input" placeholder="비밀번호" />
        <input className="join-input" placeholder="비밀번호 확인" />
        <button className="join-btn">회원가입</button>
      </div>
    </>
  )
}

export default Join;