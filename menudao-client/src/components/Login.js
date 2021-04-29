// 메인화면에서 로그인 버튼 클릭 시 모달창 생성
import React from "react";
function Login({ LoginonDropModal, JoinonShowModal, BackgroundWhite, btnFontBlack }) 
{
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
            <input className="login-input" placeholder="ID"></input>
          </li>
          <li className="login-each-input">
            <input className="login-input" placeholder="비밀번호"></input>
          </li>
        </ul>
        <ul className="login-sub-btn">
          <li className="login-each-btn">
            <button id="login-to-join" onClick={() => {JoinonShowModal(); LoginonDropModal();}}>아직 계정이 없으신가요?</button>
          </li>
          <li className="login-each-btn">
          <button id="login-btn">LOG IN</button>
          </li>
        </ul>
        </div>
    </>
  );
}

export default Login;
