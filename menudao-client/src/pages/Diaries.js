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
      weather: "흐림",
      big_choice_menu: "양식",
      choice_menu: "스파게티",
      date: "2021.05.06",
      comment: "제발 끝내줘....",
    },
    {
      id: 2,
      feeling: "나쁨",
      weather: "맑음",
      big_choice_menu: "일식",
      choice_menu: "텐동",
      date: "2021.05.06",
      comment: "재워줘....",
    },
    {
      id: 3,
      feeling: "평범",
      weather: "눈",
      big_choice_menu: "중식",
      choice_menu: "짜장면",
      date: "2021.05.06",
      comment: "힘도러....",
    },
  ]);

  const [feelingIcon, setfeelingIcon] = useState("");
  const [weatherIcon, setweatherIcon] = useState("");
  const [bigchoiceicon, setbigchoiceicon] = useState("");

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

  const Category_IconClassName = function () {
    if (Diarylist.big_choice_menu === "한식") {
      setbigchoiceicon("./food_icon/bibimbap.png");
    } else if (Diarylist.big_choice_menu === "일식") {
      setbigchoiceicon("./food_icon/nigiri.png");
    } else if (Diarylist.big_choice_menu === "중식") {
      setbigchoiceicon("./food_icon/chinese.png");
    } else if (Diarylist.big_choice_menu === "양식") {
      setbigchoiceicon("./food_icon/steak.png");
    } else if (Diarylist.big_choice_menu === "분식&패스트푸드") {
      setbigchoiceicon("./food_icon/fishcake.png");
    } else if (Diarylist.big_choice_menu === "야식&안주") {
      setbigchoiceicon("./food_icon/soju.png");
    } else if (Diarylist.big_choice_menu === "디저트") {
      setbigchoiceicon("./food_icon/macaron.png");
    }
  };

  const Weather_IconClassName = function () {
    if (Diarylist.weather === "눈") {
      setweatherIcon("./weather_icon/snowman.png");
    } else if (Diarylist.weather === "비") {
      setweatherIcon("./weather_icon/raining.png");
    } else if (Diarylist.weather === "흐림") {
      setweatherIcon("./weather_icon/clouds.png");
    } else if (Diarylist.weather === "맑음") {
      setweatherIcon("./weather_icon/sun.png");
    }
  };

  const Feeling_IconClassName = function () {
    if (Diarylist.feeling === "나쁨") {
      setfeelingIcon("fas fa-grimace");
    } else if (Diarylist.feeling === "조금나쁨") {
      setfeelingIcon("fas fa-frown");
    } else if (Diarylist.feeling === "평범") {
      setfeelingIcon("fas fa-smile");
    } else if (Diarylist.feeling === "좋음") {
      setfeelingIcon("fas fa-grin-hearts");
    }
  };

  useEffect(() => Category_IconClassName(), []);
  useEffect(() => Weather_IconClassName(), []);
  useEffect(() => Feeling_IconClassName(), []);

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
              id={Diary.id}
              feeling={feelingIcon}
              weather={weatherIcon}
              big_choice_menu={bigchoiceicon}
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
