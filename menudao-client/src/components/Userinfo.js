import React from "react";
import "../css/mypage.css";

function Userinfo() {
  return (
    <>
      <div id="#mypageLogo-container">
        <div>마이페이지</div>
      </div>
      <div id="#mypageContents-container">
        <div>
          <div>
            <div id="#mypage-id">ID</div>
          </div>
          <div id="#mypage-name">이름</div>
          <div id="#mypage-sex">성별</div>
        </div>
        <button>Edit</button>
      </div>
    </>
  );
}

export default Userinfo;