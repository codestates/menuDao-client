import React from "react";
import { useHistory } from "react-router";
import "../css/recommendation.css";

function Recommendation () {

  return(
    <>
      <div id="common-container">
      {/* menu-choice에서 food-name이랑 카테고리도 서버에서 받아 와야할 것 같다! */}
        <div className="food-icon-container">
        {/* 아이콘은 public에 있슴다, 경로는 Nav.js 로고 가져온 거 확인 해주세요! */}
        {/* 서버에서 받아온 카테고리에 따라 다른 아이콘이 뜨도록 조건문 필요할 것 같슴다! */}
          <img className=""></img>
          {/* span font-size 크게! */}
          <p className="food-name">부대찌개</p>
        </div>
        <div id="recommend-container">
          <p className="recommend-subtitle">오늘은 "food-name" 어때?</p>
          <button className="positive-btn">이 메뉴로 할래요</button>
          <button className="negative-btn">다른 메뉴는요?</button>
        </div>
      </div>
    </>
  )
}
export default Recommendation;