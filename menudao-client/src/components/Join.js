// 회원가입하는 모달창
import React from 'react';
import { useSelector } from 'react-redux';

function Join({ onDropModal }) {

  return(
    <>
      <div id="join-container"> 
        <button className="join-close-btn" onClick={() => onDropModal()}>X</button>
        <div id="join-title">Join</div>
        <ul className="input-list">
          <li className="each-input">
            <input className="join-input" placeholder="이름"/>  
          </li>
          <li className="each-input">
            <input className="join-input" placeholder="ID"/> 
          </li>
          <li className="each-input">
            <span className="join-subtitle">생년월일</span>
            <input className="join-input" placeholder="주민번호 앞자리를 입력해주세요."/>
          </li>
          <li className="each-input">
            <span className="join-subtitle">성별</span>
            <input name="gener" type="radio" className="join-gender" /> 남성
            <input name="gener" type="radio" className="join-gender" /> 여성
          </li>
          <li className="each-input">
          <input className="join-input" placeholder="비밀번호" />
          </li>
          <li className="each-input">
            <input className="join-input" placeholder="비밀번호 확인" />
          </li>
        </ul>
        <button className="join-btn">회원가입</button>
      </div>
    </>
  )
}

export default Join;