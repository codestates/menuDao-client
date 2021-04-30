// 접속 시 메인 화면
import React from "react";
import Login from "../components/Login";
import { useSelector, useDispatch } from "react-redux";
import Join from "../components/Join";
import { joinshowModal, joindropModal } from "../module/joinModal";
import { loginshowModal, logindropModal } from "../module/loginModal";

function Main() {
  const dispatch = useDispatch();
  const Joinshow = useSelector(
    (state) => state.JoinReducer.joinStatus.joinShow
  );
  const Loginshow = useSelector(
    (state) => state.LoginReducer.loginStatus.loginShow
  );

  const JoinonShowModal = () => dispatch(joinshowModal());
  const JoinonDropModal = () => dispatch(joindropModal());
  const LoginonShowModal = () => dispatch(loginshowModal());
  const LoginonDropModal = () => dispatch(logindropModal());

  // Modal 창이 실행돨 경우, 주변 바탕화면 색이 흐려진다
  const BackgroundGray = function () {
    const root = document.querySelector("#root");
    root.style.animationName = "fadeIn";
    root.style.cssText =
      "animation: fadeIn 0.6s; animation-fill-mode: forwards;";
  };

  // Modal창의 닫기 버튼을 눌렀을 경우, 다시 원래대로 바탕화면 색이 돌아온다
  const BackgroundWhite = function () {
    const root = document.querySelector("#root");
    root.style.cssText =
      "animation: fadeOut 0.6s; animation-fill-mode: forwards;";
  };

  // 바탕화면 색이 흐려지는 동시에 메인 화면 오른쪽 상단의 버튼 2개도 함께 색상이 바뀐다
  const btnFontWhite = function () {
    const mainbtn = document.querySelectorAll(".main-btn");
    for (let btn of mainbtn) {
      // btn.style.background = "none";
      btn.style.color = "#fff";
    }
  };

  // Modal 창 닫기 버튼을 누르면 메인 화면 버튼들도 다시 원래대로 색상이 돌아온다
  const btnFontBlack = function () {
    const mainbtn = document.querySelectorAll(".main-btn");
    for (let btn of mainbtn) {
      // btn.style.background = "none";
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
              JoinonShowModal();
              LoginonDropModal();
              BackgroundGray();
              btnFontWhite();
            }}
          >
            Join
          </button>
          {Joinshow && (
            <Join
              JoinonDropModal={JoinonDropModal}
              BackgroundWhite={BackgroundWhite}
              btnFontBlack={btnFontBlack}
              LoginonShowModal={LoginonShowModal}
            />
          )}
          <button
            className="main-btn"
            onClick={() => {
              LoginonShowModal();
              JoinonDropModal();
              BackgroundGray();
              btnFontWhite();
            }}
          >
            Login
          </button>
          {Loginshow && (
            <Login
              BackgroundWhite={BackgroundWhite}
              LoginonDropModal={LoginonDropModal}
              JoinonShowModal={JoinonShowModal}
              btnFontBlack={btnFontBlack}
            />
          )}
        </div>
      </div>
      <div id="main-subcontainer">
        <h1 id="title">
          <img src="./main-logo.png"></img>
        </h1>
        <div id="subtitle">오늘 뭐 먹을까?</div>
      </div>
    </>
  );
}

export default React.memo(Main);
