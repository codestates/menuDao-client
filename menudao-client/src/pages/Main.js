// 접속 시 메인 화면
import React, { useState } from "react";
import Login from "../components/Login";
import Join from "../components/Join";

// 굳이 joinModal 과 loginModal Reducer를 구현해야하나??? -> Hook을 이용하여 true,false 값으로 하면 되지 않을까?
// Main.js을 간소화하고 Nav.js에서 조건부 렌더링하면 좋을것 같다.
// 그럼 accessToken로 Nav.js에서 조건을 걸어서 랜더랑 하면 될것 같다
function Main() {
  // Modal 창을 On,Off 상태값
  const [JoinModal, setJoinModal] = useState(false);
  const [LoginModal, setLoginModal] = useState(false);

  // Modal 창을 켰을 경우, 주변 바탕화면 색이 흐려지면서 메인 화면 오른쪽 상단의 버튼 2개도 함께 색상이 바뀐다
  const turnOnModal_CSS = function () {
    const root = document.querySelector("#root");
    root.style.animationName = "fadeIn";
    root.style.cssText =
      "animation: fadeIn 0.6s; animation-fill-mode: forwards;";

    const mainbtn = document.querySelectorAll(".main-btn");
    for (let btn of mainbtn) {
      btn.style.color = "#fff";
    }
  };

  // Modal창의 닫기 버튼을 눌렀을 경우, 바탕화면 색과 메인 화면 버튼들이 원래 색상으로 돌아온다
  const turnOffModal_CSS = function () {
    const root = document.querySelector("#root");
    root.style.cssText =
      "animation: fadeOut 0.6s; animation-fill-mode: forwards;";

    const mainbtn = document.querySelectorAll(".main-btn");
    for (let btn of mainbtn) {
      btn.style.color = "#424242";
    }
  };

  return (
    <>
      <div id="main-btncontainer">
        <div>
          <button
            className="main-btn"
            onClick={() => {
              setJoinModal(true);
              setLoginModal(false);
              turnOnModal_CSS();
            }}
          >
            Join
          </button>
          {JoinModal && (
            <Join
              setJoinModal={setJoinModal}
              setLoginModal={setLoginModal}
              turnOffModal_CSS={turnOffModal_CSS}
            />
          )}
          <button
            className="main-btn"
            onClick={() => {
              setLoginModal(true);
              setJoinModal(false);
              turnOnModal_CSS();
            }}
          >
            Login
          </button>
          {LoginModal && (
            <Login
              setLoginModal={setLoginModal}
              setJoinModal={setJoinModal}
              turnOffModal_CSS={turnOffModal_CSS}
            />
          )}
        </div>
      </div>
      <div id="main-subcontainer">
        <h1 id="title">
          <img src="./main-logo.png" alt="logo-img"></img>
        </h1>
        <div id="subtitle">오늘 뭐 먹을까?</div>
      </div>
    </>
  );
}

export default React.memo(Main);
