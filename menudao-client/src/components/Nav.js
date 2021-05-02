// 왼쪽 상단에는 로고(클릭 시 다시 처음부터 선택하는 화면) , 오른쪽 상단에는 마이페이지랑 로그아웃 버튼
// 날씨, 기분, 음식 대분류 선택하는 페이지
import React from "react";
import { useSelector, useDispatch } from "react-redux";

//  마이페이지, 다이어리, 로그아웃 버튼 생성
//  버튼 클릭하면 각각의 페이지로 이동 (Redirect)
function Nav() {
  return (
    <>
      <div id="nav-container">
        <span id="logo">MenuDao</span>
        <div id="nav-btn-container">
          <button id="mypage_btn">마이 페이지</button>
          <button id="diary_btn">다이어리</button>
          <button id="logout_btn">Log out</button>
        </div>
      </div>
    </>
  );
}

export default Nav;
