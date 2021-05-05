// 다이어리 목록에서 클릭 했을 때 나오는 상세 페이지
import React, { useState, useEffect } from "react";
import Diaryinfo from "../components/Diaryinfo"
import Nav from "../components/Nav"
import axios from "axios";

// GET: /diary (다이어리 목록 중 하나 클릭 시 하나의 다이어리 정보를 받음)
// DELETE: /diary-list (다이어리 목록 중 클릭한 것들을 삭제하고 id값들을 배열형태로 넘겨준다)
// comment 필요
function Diary() {

  return (
    <>
      <Nav />
      <Diaryinfo />
    </>
  );
}

export default Diary;
