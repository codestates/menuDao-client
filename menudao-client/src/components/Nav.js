// 왼쪽 상단에는 로고(클릭 시 다시 처음부터 선택하는 화면) , 오른쪽 상단에는 마이페이지랑 로그아웃 버튼
// 날씨, 기분, 음식 대분류 선택하는 페이지
import React from "react";
import { useHistory } from "react-router";
import "../css/nav.css";

//  마이페이지, 다이어리, 로그아웃 버튼 생성 (axios 요청 총 3개 구현)
//  initialState에 저장된 accessToken을 가지고 post요청을 보낸다
//  버튼 클릭하면 각각의 페이지로 이동 (Redirect)
function Nav() {
  const history = useHistory();
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
          <button id="logout_btn">Log out</button>
        </div>
      </div>
    </>
  );
}

export default Nav;
