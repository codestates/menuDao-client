import React from "react";
import Nav from "../components/Nav";
import Userinfo from "../components/Userinfo";
import { useSelector, useDispatch } from "react-redux";
// Userinfo 컴포넌트를 불러와서 렌더링한다

function Mypage() {
  return (
    <>
      <Nav />
      <Userinfo />
    </>
  );
}

export default Mypage;
