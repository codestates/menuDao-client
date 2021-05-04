// 왼쪽 상단에는 로고(클릭 시 다시 처음부터 선택하는 화면) , 오른쪽 상단에는 마이페이지랑 로그아웃 버튼
import axios from "axios";
import React from "react";
import { useHistory } from "react-router";
import { useCookies } from "react-cookie";
import swal from "sweetalert";
import "../css/nav.css";

//  마이페이지, 다이어리, 로그아웃 버튼 생성 (axios 요청 총 3개 구현)
//  버튼 클릭하면 각각의 페이지로 이동 (Redirect)
function Nav() {
  const history = useHistory();

  const [cookies, removeCookie] = useCookies(["accessToken"]);

  function handleRemoveCookie() {
    removeCookie("accessToken");
    swal("로그아웃 되었습니다", "", "success");
    history.push("/");
  }

  // 로그아웃 함수
  // const handlelogOut = () => {
  //   axios
  //     .post("http://localhost:4000/signout", {
  //       headers: { "Content-Type": "application/json" },
  //       withCredentials: true,
  //     })
  //     .then(() => {
  //       swal("로그아웃 되었습니다", "", "success");
  //       history.push("/");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       swal("로그아웃 실패", "", "error");
  //     });
  // };

  return (
    <>
      <div id="nav-container">
        <span id="logo">
          <img
            className="nav-logo"
            src="./main-logo.png"
            onClick={() => {
              history.push("/select");
            }}
          ></img>
        </span>
        <div id="nav-btn-container">
          <button
            id="mypage_btn"
            onClick={() => {
              history.push("/mypage");
            }}
          >
            My page
          </button>
          <button
            id="diary_btn"
            onClick={() => {
              history.push("/diarylist");
            }}
          >
            Diary
          </button>
          <button id="logout_btn" onClick={() => handleRemoveCookie()}>
            Log out
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;
