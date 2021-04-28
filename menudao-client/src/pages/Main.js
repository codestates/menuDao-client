// 접속 시 메인 화면
import React from "react";
import Login from "../components/Login";
import { useSelector, useDispatch } from "react-redux";
import Join from "../components/Join";
import { joinshowModal, joindropModal } from "../module/joinModal";
import { loginshowModal, logindropModal } from "../module/loginModal";

function Main() {
  const dispatch = useDispatch();
  const Joinshow = useSelector((state) => state.JoinReducer.joinShow);
  const Loginshow = useSelector((state) => state.LoginReducer.loginShow);

  const JoinonShowModal = () => dispatch(joinshowModal());
  const JoinonDropModal = () => dispatch(joindropModal());
  const LoginonShowModal = () => dispatch(loginshowModal());
  const LoginonDropModal = () => dispatch(logindropModal());

  return (
    <>
      {/* <div id="main-container"> */}
      <div id="main-btncontainer">
        <div>
          <button className="main-btn" onClick={() => JoinonShowModal()}>
            Join
          </button>
          {Joinshow && <Join JoinonDropModal={JoinonDropModal} />}
          <button className="main-btn" onClick={() => LoginonShowModal()}>
            Login
          </button>
          {Loginshow && <Login LoginonDropModal={LoginonDropModal} />}
        </div>
      </div>
      <div id="main-subcontainer">
        <h1 id="title">MenuDao</h1>
        <div id="subtitle">오늘 뭐 먹을까?</div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Main;
