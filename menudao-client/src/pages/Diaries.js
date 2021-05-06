// 다이어리들이 나오는 목록 페이지
import React, { useState, useEffect } from "react";
import axios from "axios";
import DiaryCapsule from "../components/DiaryCapsule";
import Nav from "../components/Nav";
import swal from "sweetalert";
import dotenv from "dotenv";
import "../css/diarylist.css";
dotenv.config();
axios.defaults.withCredentials = true;

function Diarylist() {
  const [Diarylist, setDiarylist] = useState([]);

  const handleGetDiarylist = function () {
    axios
      .get(
        `${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/diary-list`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        setDiarylist([...Diarylist, ...res.data.diaries]);
      })
      .catch((err) => {
        console.log(err);
        swal("데이터를 읽어오지 못하였습니다", "", "error");
      });
  };
  useEffect(() => handleGetDiarylist(), []);

  return (
    <>
      <Nav />
      <div id="side-bar">
        <div className="side-title">Diary</div>
      </div>
      <div id="diary-list-container">
        {Diarylist.length === 0 ? (
          <div className="diaries-empty">
            <img alt="empty" src="./folder.png" />
            <div className="diaries-empty-inner">다이어리 목록이 비어있습니다</div>
          </div>
        ) : (
          Diarylist.map((Diary) => (
            <DiaryCapsule
              key={Diary.id}
              id={Diary.id}
              feeling={Diary.feeling}
              weather={Diary.weather}
              big_choice_menu={Diary.big_choice_menu}
              choice_menu={Diary.choice_menu}
              date={new String(new Date(Diary.date).toLocaleString())}
              comment={Diary.comment}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Diarylist;
