// 메인화면에서 로그인 버튼 클릭 시 모달창 생성
import React from "react";
import { useState } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function Login({ LoginonDropModal, JoinonShowModal, BackgroundWhite, btnFontBlack }) 
{
  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');

  const loginRequestHandler = function () {
    axios
      .post(
        "https://localhost:4000/signin",
        { ID, PW },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        alert('로그인 성공')
      })
      .catch((err) => console.log(err)); 
  }
  return (
    <>
      <div id="login-container">
        <button
          className="login-close-btn"
          onClick={() => {
            LoginonDropModal();
            BackgroundWhite();
            btnFontBlack();
          }}
        >
          X
        </button>
        <div id="login-title">Log in</div>
        <ul className="login-input-list">
          <li className="login-each-input">
            <input className="login-input" placeholder="ID" onChange={(e)=> {console.log(ID); setID(e.target.value)}}></input>
          </li>
          <li className="login-each-input">
            <input className="login-input" placeholder="비밀번호"  onChange={(e)=> { console.log(PW); setPW(e.target.value)}}></input>
          </li>
        </ul>
        <ul className="login-sub-btn">
          <li className="login-each-btn">
            <button id="login-to-join" onClick={() => {JoinonShowModal(); LoginonDropModal();}}>아직 계정이 없으신가요?</button>
          </li>
          <li className="login-each-btn">
          <button id="login-btn" onClick={() => {loginRequestHandler()}}>LOG IN</button>
          </li>
        </ul>
        </div>
    </>
  );
}

export default Login;
