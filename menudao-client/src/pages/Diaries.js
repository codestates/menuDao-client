// 다이어리들이 나오는 목록 페이지
import React, { useState, useEffect } from "react";
import axios from "axios";
import DiaryCapsule from "../components/DiaryCapsule";
import Nav from "../components/Nav";
import swal from "sweetalert";
import dotenv from "dotenv";
import "../css/diarylist.css";
dotenv.config();

// Diary.js를 사용하여 저장된 목록들만큼 map 함수를 사용하여 랜더링한다
function Diarylist() {
  const [Diarylist, setDiarylist] = useState([]);

  const handleGetDiarylist = function () {
    axios
      .post(
        `${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/signin`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        setDiarylist(res.data.diaries);
      })
      .catch((err) => {
        console.log(err);
        swal("데이터를 읽어오지 못하였습니다", "", "error");
      });
  };
  useEffect(() => handleGetDiarylist(), [Diarylist]);

  return (
    <>
      <Nav />
      <div id="diary-list-container">
        {Diarylist.length === 0 ? (
          <div>다이어리 목록이 비어있습니다</div>
        ) : (
          Diarylist.map((Diary) => (
            <DiaryCapsule
              key={Diary.id}
              feeling={Diary.feeling}
              weather={Diary.weather}
              big_choice_menu={Diary.big_choice_menu}
              choice_menu={Diary.choice_menu}
              date={Diary.date}
              comment={Diary.comment}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Diarylist;
