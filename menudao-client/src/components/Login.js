// 메인화면에서 로그인 버튼 클릭 시 모달창 생성
import swal from "sweetalert";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import dotenv from "dotenv";
dotenv.config();

function Login({ turnOffModal_CSS, setLoginModal, setJoinModal }) {
  const history = useHistory();

  const [user_id, setUserID] = useState("");
  const [user_password, setUserPW] = useState("");

  const loginRequestHandler = function () {
    axios
      .post(
        `${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/signin`,
        { user_id: user_id, user_password: user_password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        swal("로그인되었습니다", "", "success");
        turnOffModal_CSS();
        history.push("/select");
      })
      .catch((err) => {
        console.log(err);
        swal("ID와 Password가 일치하지 않습니다", "", "error");
      });
  };
  return (
    <>
      <div id="login-container">
        <button
          className="login-close-btn"
          onClick={() => {
            setLoginModal(false);
            turnOffModal_CSS();
          }}
        >
          <i className="far fa-times-circle"></i>
        </button>
        <div id="login-title">Log in</div>
        <ul className="login-input-list">
          <li className="login-each-input">
            <input
              className="login-input"
              placeholder="ID"
              onChange={(e) => {
                setUserID(e.target.value);
              }}
            ></input>
          </li>
          <li className="login-each-input">
            <input
              className="login-input"
              placeholder="비밀번호"
              onChange={(e) => {
                setUserPW(e.target.value);
              }}
            ></input>
          </li>
        </ul>
        <ul className="login-sub-btn">
          <li className="login-each-btn">
            <button
              id="login-to-join"
              onClick={() => {
                setJoinModal(true);
                setLoginModal(false);
              }}
            >
              아직 계정이 없으신가요?
            </button>
          </li>
          <li className="login-each-btn">
            <button
              id="login-btn"
              onClick={() => {
                loginRequestHandler();
              }}
            >
              LOG IN
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Login;
