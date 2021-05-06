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

// Diary.js를 사용하여 저장된 목록들만큼 map 함수를 사용하여 랜더링한다
function Diarylist() {
  const [Diarylist, setDiarylist] = useState([
    {
      id: 1,
      feeling: "좋음",
      weather: "눈",
      big_choice_menu: "한식",
      choice_menu: "볶음밥",
      date: "2020/05/05",
      comment: "오늘은 보끔밥을 먹었따",
    },
    {
      id: 2,
      feeling: "나쁨",
      weather: "흐림",
      big_choice_menu: "중식",
      choice_menu: "짬뽕",
      date: "2020/05/05",
      comment: "날씨가 구리구리해서 국물이 땡김...",
    },
    {
      id: 3,
      feeling: "조금나쁨",
      weather: "맑음",
      big_choice_menu: "디저트",
      choice_menu: "마카롱",
      date: "2020/05/05",
      comment: "막하롱 맛있지...",
    },
    {
      id: 4,
      feeling: "조금나쁨",
      weather: "맑음",
      big_choice_menu: "디저트",
      choice_menu: "마카롱",
      date: "2020/05/05",
      comment: "ㅋㅋ",
    },
  ]);

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
        console.log("diary", res.data);
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
          <div>다이어리 목록이 비어있습니다</div>
        ) : (
          Diarylist.map((Diary) => (
            <DiaryCapsule
              key={Diary.id}
              id={Diary.id}
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
