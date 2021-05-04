import React, { useState } from "react";
import "../css/mypage.css";
import Nav from "../components/Nav";
import Userinfo from "../components/Userinfo";
import UserEdit from "../components/UserEdit";
// Userinfo 컴포넌트를 불러와서 렌더링한다

function Mypage() {
  const [isClick, setIsClick] = useState(false);
  // 초기값은 GET 요청으로 받아온 원래 PW
  return (
    <>
      <Nav />
      {isClick ? <UserEdit 
      isClick={isClick} 
      setIsClick={setIsClick} 
      /> 
      :  <Userinfo isClick={isClick} setIsClick={setIsClick} />}

    </>
  );
}

export default Mypage;
