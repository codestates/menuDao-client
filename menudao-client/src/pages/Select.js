// 날씨, 기분, 음식 대분류 선택하는 페이지
import React from "react";
import "../css/select.css";
import Nav from "../components/Nav";
import UserSelect from "../components/UserSelect";
import { useSelector, useDispatch } from "react-redux";

function Select() {
  return (
    <>
      <UserSelect />
    </>
  );
}

export default Select;
