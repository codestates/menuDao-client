// 다이어리들이 나오는 목록 페이지
import axios from "axios";
import React from "react";
import { useHistory } from "react-router";
import swal from "sweetalert";
import "../css/diarylist.css";
import dotenv from "dotenv";
dotenv.config();

function DiaryCapsule({
  id,
  feeling,
  weather,
  big_choice_menu,
  choice_menu,
  date,
  comment,
}) {
  const history = useHistory();

  // sweetAlert창을 이용하여 삭제버튼 클릭 시 한번 더 물어본다
  const deleteDiary = function (id) {
    axios
      .delete(
        `${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/diary-list`,
        {
          data: { diary_id: id },
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(() => {
        swal("삭제되었습니다", "", "success");
        window.location.replace("/diarylist");
      })
      .catch((err) => {
        console.log(err);
        swal("삭제실패", "", "error");
      });
  };
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

  return (
    <>
      <div id="diaries-each-container">
        <button id="diaries-btn" onClick={() => checkDeleteAlert(id)}>
          <i className="fas fa-window-close"></i>
        </button>
        <div
          className="diary"
          onClick={() => history.push({ pathname: "/diary", state: id })}
        >
          <div className="diary-menuName">{choice_menu}</div>
          <div className="diary-date">{date}</div>
          <div id="diaries-icon-container">
            <label className="diary-weather">
              {weather === "눈" && (
                <img
                  alt="눈 아이콘"
                  className="weather-icon"
                  src="./weather_icon/snowman.png"
                />
              )}
              {weather === "비" && (
                <img
                  alt="비 아이콘"
                  className="weather-icon"
                  src="./weather_icon/raining.png"
                />
              )}
              {weather === "흐림" && (
                <img
                  alt="흐림 아이콘"
                  className="weather-icon"
                  src="./weather_icon/clouds.png"
                />
              )}
              {weather === "맑음" && (
                <img
                  alt="맑음 아이콘"
                  className="weather-icon"
                  src="./weather_icon/sun.png"
                />
              )}
            </label>
            {big_choice_menu === "한식" && (
              <img
                alt="한식 아이콘"
                className="diary-food-icon"
                src="./food_icon/bibimbap.png"
              />
            )}
            {big_choice_menu === "일식" && (
              <img
                alt="일식 아이콘"
                className="diary-food-icon"
                src="./food_icon/nigiri.png"
              />
            )}
            {big_choice_menu === "중식" && (
              <img
                alt="중식 아이콘"
                className="diary-food-icon"
                src="./food_icon/chinese.png"
              />
            )}
            {big_choice_menu === "양식" && (
              <img
                alt="양식 아이콘"
                className="diary-food-icon"
                src="./food_icon/steak.png"
              />
            )}
            {big_choice_menu === "분식&패스트푸드" && (
              <img
                alt="분식&패스트푸드 아이콘"
                className="diary-food-icon"
                src="./food_icon/fishcake.png"
              />
            )}
            {big_choice_menu === "야식&안주" && (
              <img
                alt="아식&안주 아이콘"
                className="diary-food-icon"
                src="./food_icon/soju.png"
              />
            )}
            {big_choice_menu === "디저트" && (
              <img
                alt="디저트 아이콘"
                className="diary-food-icon"
                src="./food_icon/macaron.png"
              />
            )}
            <label className="diary-feeling">
              {feeling === "나쁨" && <i className="fas fa-grimace" />}
              {feeling === "조금나쁨" && <i className="fas fa-frown" />}
              {feeling === "평범" && <i className="fas fa-smile" />}
              {feeling === "좋음" && <i className="fas fa-grin-hearts" />}
            </label>
          </div>
          <div className="diary-comment">{comment}</div>
        </div>
      </div>
    </>
  );
}

export default DiaryCapsule;
