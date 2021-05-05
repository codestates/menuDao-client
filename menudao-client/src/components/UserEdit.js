import React, { useEffect, useState } from "react";
import "../css/mypage.css";
import swal from "sweetalert";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

function UserEdit({ setIsClick }) {
  const [user_password, setNewPW] = useState("");
  console.log(user_password);
  const isRightPW = function (pw) {
    const pw_check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return pw_check.test(pw);
  };
  const checkingPW = (e) => {
    const warning = document.querySelector(".warning-message");
    const inputarea = document.querySelector("input");
    if (!isRightPW(e.target.value)) {
      inputarea.style.border = "1px solid red";
      warning.textContent =
        "8자 이상, 알파벳과 숫자 및 특수문자(@$!%*#?&) 하나 이상 포함";
    } else {
      setNewPW(e.target.value);
      inputarea.style.border = "1px solid blue";
      warning.textContent = "";
    }
  };
  // 모든 조건에 다 통과된다면 요청, edit -> mypage로 다시 렌더
  const PwInputChecking = function () {
    if (!user_password) {
      console.log(user_password);
      swal("변경할 비밀번호를 입력해주세요.", "", "error");
    } else {
      swal("비밀번호가 변경되었습니다.", "", "success", {
        buttons: false,
        timer: 1500,
      });
      editRequestHandler();
      setIsClick(false);
    }
  };
  // axios 요청
  const editRequestHandler = function () {
    axios
      .patch(
        `${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/mypage`,
        {
          user_password: user_password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        swal("비밀번호가 변경되었습니다.", "", "success", {
          buttons: false,
          timer: 2000,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div id="side-bar">
        <div className="side-title">MY PAGE</div>
      </div>
      <div id="mypageContents-container">
        <button
          id="mypage-save-btn"
          onClick={() => {
            PwInputChecking();
          }}
        >
          SAVE
        </button>
        <button
          id="mypage-cancle-btn"
          onClick={() => {
            setIsClick(false);
          }}
        >
          CANCEL
        </button>
        <div className="mypage-title">USER INFOMATION EDIT</div>
        <div id="mypage-main-container">
          <div id="userinfo-subtitle">
            <div className="mypage-pw">PASSWORD</div>
          </div>
          <div id="userinfo-container">
            <div className="password-changer">
              <input onChange={(e) => checkingPW(e)}></input>
            </div>
            <div className="warning-message"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserEdit;
