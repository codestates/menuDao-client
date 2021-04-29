// 메인화면에서 로그인 버튼 클릭 시 모달창 생성
import React from "react";
function Login({ LoginonDropModal }) {
  const cilickCloseBtn = function(e) {
    // LoginonShowModal();
    const root = document.querySelector('#root');
    root.style.backgroundColor = "#fff";
    LoginonDropModal();
  }
  return (
    <>
      <div id="login-container">
        <button className="login-close-btn" onClick={() => cilickCloseBtn()}>
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
            <button id="login-to-join">아직 계정이 없으신가요?</button>
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
