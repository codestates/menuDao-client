import React from "react";

function Userinfo({ MypageInfo, setIsClick }) {
  return (
    <>
      <div id="side-bar">
        <div className="side-title">MY PAGE</div>
      </div>
      <div id="mypageContents-container">
        <button id="mypage-edit-btn" onClick={() => {setIsClick(true)}}><i className="fas fa-pencil-alt"></i></button>
        <div className="mypage-title">USER INFOMATION</div>
        <div id="mypage-main-container">
          <div id="userinfo-subtitle">
            <div className="mypage-id">ID</div>
            <div className="mypage-name">이름</div>
            <div className="mypage-birth">생년월일</div>
            <div className="mypage-sex">성별</div>
          </div>
          <div id="userinfo-container">
            <div className="user-id">{MypageInfo.user_id}</div>
            <div className="user-name">{MypageInfo.user_name}</div>
            <div className="user-birth">{MypageInfo.user_birthday}</div>
            <div className="user-sex">{MypageInfo.user_sex}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userinfo;
