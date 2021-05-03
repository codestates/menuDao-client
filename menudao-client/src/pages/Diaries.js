// 다이어리들이 나오는 목록 페이지
import React from "react";
import Nav from "../components/Nav";

// Diary.js를 사용하여 저장된 목록들만큼 map 함수를 사용하여 랜더링한다
function Diarylist() {
  return (
    <>
      <Nav />
      <h1>여긴 다이어리 목록들이 나옴</h1>
    </>
  );
}

export default Diarylist;
