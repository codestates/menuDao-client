// 추천한 음식을 보여주는 페이지
import React from "react";
import Nav from "../components/Nav";
import Recommendation from "../components/Recommendation";

//Recommendation 에서 initialState에 저장한 food name을 useSelector 하여 사용한다
function Recommend() {
  return (
    <>
      <Nav />
      <Recommendation />
    </>
  );
}
export default Recommend;
