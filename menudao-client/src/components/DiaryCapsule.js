// 다이어리들이 나오는 목록 페이지
import React, { useState } from "react";
import axios from "axios";

// GET: /diary (다이어리 목록 중 하나 클릭 시 하나의 다이어리 정보를 받음)
// DELETE: /diary-list (다이어리 목록 중 클릭한 것들을 삭제하고 id값들을 배열형태로 넘겨준다)
// comment 필요
function DiaryCapsule({ key, feeling, weather, big_choice_menu, choice_menu }) {
  const [isClick, setisClick] = useState("false");
  return (
    <>
      <div className="diary"></div>
    </>
  );
}

export default DiaryCapsule;
