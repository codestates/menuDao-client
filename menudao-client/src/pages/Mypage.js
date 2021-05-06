import React, { useState, useEffect } from "react";
import "../css/mypage.css";
import Nav from "../components/Nav";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router";
import Userinfo from "../components/Userinfo";
import UserEdit from "../components/UserEdit";
import dotenv from "dotenv";
dotenv.config();

function Mypage() {
  const [isClick, setIsClick] = useState(false);
  const history = useHistory();

  const [MypageInfo, setMypageInfo] = useState({
    user_id: "",
    user_name: "",
    user_sex: "",
    user_birthday: "",
  });

  const getMypageInfo = function () {
    axios
      .get(
        `${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/mypage`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        setMypageInfo({
          user_id: res.data.user_id,
          user_name: res.data.user_name,
          user_sex: res.data.user_sex,
          user_birthday: res.data.user_birthday,
        });
        console.log("mypage 데이터 성공적으로 받아옴");
      })
      .catch((err) => {
        console.log(err);
        swal("로그인 세션이 만료되었습니다", "", "error");
        history.push("/");
      });
  };

  useEffect(() => {
    getMypageInfo();
  });

  return (
    <>
      <Nav />
      {isClick ? (
        <UserEdit isClick={isClick} setIsClick={setIsClick} />
      ) : (
        <Userinfo
          isClick={isClick}
          MypageInfo={MypageInfo}
          setIsClick={setIsClick}
        />
      )}
    </>
  );
}

export default Mypage;
