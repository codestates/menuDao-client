// 다이어리들이 나오는 목록 페이지
import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import swal from "sweetalert";
import "../css/diarylist.css";
import dotenv from "dotenv";
dotenv.config();

// GET: /diary (다이어리 목록 중 하나 클릭 시 하나의 다이어리 정보를 받음)
// DELETE: /diary-list (다이어리 목록 중 클릭한 것들을 삭제하고 id값들을 배열형태로 넘겨준다)
// comment 필요
function DiaryCapsule({
  key,
  feeling,
  weather,
  big_choice_menu,
  choice_menu,
  date,
  comment,
}) {
  const history = useHistory();

  const Category_Icon = function () {
    const categoryIcon = document.querySelector(".diary-food-icon");
    if (big_choice_menu === "한식") {
      categoryIcon.setAttribute("src", "./food_icon/bibimbap.png");
    } else if (big_choice_menu === "일식") {
      categoryIcon.setAttribute("src", "./food_icon/nigiri.png");
    } else if (big_choice_menu === "중식") {
      categoryIcon.setAttribute("src", "./food_icon/chinese.png");
    } else if (big_choice_menu === "양식") {
      categoryIcon.setAttribute("src", "./food_icon/steak.png");
    } else if (big_choice_menu === "분식") {
      categoryIcon.setAttribute("src", "./food_icon/fishcake.png");
    } else if (big_choice_menu === "안주") {
      categoryIcon.setAttribute("src", "./food_icon/soju.png");
    } else {
      //디저트
      categoryIcon.setAttribute("src", "./food_icon/macaron.png");
    }
  };

  const Weather_Icon = function () {
    const weatherIcon = document.querySelector(".weather-icon");
    if (weather === "눈") {
      weatherIcon.setAttribute("src", "./weather_icon/snowman.png");
    } else if (weather === "비") {
      weatherIcon.setAttribute("src", "./weather_icon/raining.png");
    } else if (weather === "흐림") {
      weatherIcon.setAttribute("src", "./weather_icon/clouds.png");
    } else {
      //맑음
      weatherIcon.setAttribute("src", "./weather_icon/sun.png");
    }
  };

  const Feeling_Icon = function () {
    //   i테그를 create하여 className을 할당하고 appendchild시켜준다
    const feelingIcon = document.createElement("i");
    if (feeling === "나쁨") {
      feelingIcon.classList.add("fas fa-grimace");
    } else if (feeling === "조금나쁨") {
      feelingIcon.classList.add("fas fa-frown");
    } else if (feeling === "평범") {
      feelingIcon.classList.add("fas fa-smile");
    } else if (feeling === "좋음") {
      feelingIcon.classList.add("fas fa-grin-hearts");
    }
    const FeelingLabel = document.querySelector(".diary-feeling");
    FeelingLabel.appendChild(feelingIcon);
  };

  // sweetAlert창을 이용하여 삭제버튼 클릭 시 한번 더 물어본다
  const deleteDiary = function (id) {
    axios
      .delete(
        `${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/diary-list`,
        {
          diary_id: [id],
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(() => {
        swal("삭제되었습니다", "", "success");
      })
      .catch((err) => {
        console.log(err);
        swal("삭제실패", "", "error");
      });
  };

  useEffect(() => Category_Icon(), []);
  useEffect(() => Weather_Icon(), []);
  useEffect(() => Feeling_Icon(), []);

  const checkDeleteAlert = function (id) {
    swal({
      title: "정말 삭제하시겠습니까?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      closeOnClickOutside: false,
    }).then((willDelete) => {
      if (willDelete) {
        deleteDiary(id);
      }
    });
  };

  // 날씨랑 기분,음식 대분류 값에 따른 아이콘을 조건식에 따라 넣어준다
  return (
    <>
      <div
        className="diary"
        onClick={() => history.push({ pathname: "/diary", state: key })}
      >
        <button onClick={() => checkDeleteAlert(key)}> 삭제 </button>
        <div className="diary-menuName">{choice_menu}</div>
        <label className="diary-weather">
          <img className="weather-icon">{/*날씨 아이콘 들어감*/}</img>
        </label>
        <label className="diary-feeling">
          {/* 여기에 기분 아이콘이 들어간다 */}
        </label>
        <img className="diary-food-icon">
          음식 대분류 아이콘인데 얘는 좀 커야함(맨 오른쪽 배치)
        </img>
        <div className="diary-comment">{comment}</div>
        <div className="diary-date">{date}</div>
      </div>
    </>
  );
}

export default DiaryCapsule;
