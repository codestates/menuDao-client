// 왼쪽 상단에는 로고(클릭 시 다시 처음부터 선택하는 화면) , 오른쪽 상단에는 마이페이지랑 로그아웃 버튼
// 날씨, 기분, 음식 대분류 선택하는 페이지
import React from "react";
import { useSelector, useDispatch } from "react-redux";

//  마이페이지, 다이어리, 로그아웃 버튼 생성
//  버튼 클릭하면 각각의 페이지로 이동 (history 사용하기)
function Nav() {
  return (
    <>
      <h1>여기는 페이지 상단의 네비게이터임</h1>
    </>
  );
}

export default Nav;
