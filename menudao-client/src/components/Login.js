// 메인화면에서 로그인 버튼 클릭 시 모달창 생성
import React from "react";
function Login({ LoginonDropModal }) {
  return (
    <>
      <div id="login-container">
        <button className="login-close-btn" onClick={() => LoginonDropModal()}>
          X
        </button>
        <div id="login-title">Log in</div>
        <input className="login-input" placeholder="ID"></input>
        <input className="login-input" placeholder="비밀번호"></input>
        <div>
          <button id="login-to-join">아직 계정이 없으신가요?</button>
          <button id="login-btn">Log in</button>
        </div>
      </div>
    </>
  );
}

export default Login;
