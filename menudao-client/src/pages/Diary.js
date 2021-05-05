// 다이어리 목록에서 클릭 했을 때 나오는 상세 페이지
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Diaryinfo from "../components/Diaryinfo";
import axios from "axios";
import { useLocation } from "react-router";
import dotenv from "dotenv";
dotenv.config();

// GET: /diary (다이어리 목록 중 하나 클릭 시 하나의 다이어리 정보를 받음)
// DELETE: /diary-list (다이어리 목록 중 클릭한 것들을 삭제하고 id값들을 배열형태로 넘겨준다)
// comment 필요
function Diary() {
  const location = useLocation();
  const choiceID = location.state;
  const [DiaryInfo, setDiaryInfo] = useState({});

  const handleGetDiaryInfo = function () {
    axios
      .get(
        `${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/diary`,
        {
          id: choiceID,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        setDiaryInfo(res.data.diarydata);
        console.log("정보전송 성공");
      })
      .catch((err) => {
        console.log(err);
        swal("데이터 불러오기 실패", "", "error");
      });
  };

  useEffect(() => handleGetDiaryInfo(), [choiceID]);

  return (
    <>
      <Nav />
      <Diaryinfo
        key={DiaryInfo.id}
        feeling={DiaryInfo.feeling}
        weather={DiaryInfo.weather}
        big_choice_menu={DiaryInfo.big_choice_menu}
        choice_menu={DiaryInfo.choice_menu}
        date={DiaryInfo.date}
        comment={DiaryInfo.comment}
      />
    </>
  );
}

export default Diary;
