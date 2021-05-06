// 다이어리들이 나오는 목록 페이지
import axios from "axios";
import React, { useEffect } from "react";
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
  console.log(big_choice_menu, weather, feeling);

  const Category_Icon = function () {
    const categoryIcon = document.querySelector(".diary-food-icon");
    categoryIcon.setAttribute("src", big_choice_menu);
  };

  const Weather_Icon = function () {
    const weatherIcon = document.querySelector(".weather-icon");
    weatherIcon.setAttribute("src", weather);
  };

  const Feeling_Icon = function () {
    const feelingIcon = document.querySelector("i");
    feelingIcon.className = feeling;
  };

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

  // !!!!!!!!!!!!!!!!빈테그로 감싸놓은거 div로 감싸야한다!!!!!!!!!!!!!1
  return (
    <>
      <button onClick={() => checkDeleteAlert(id)}> 삭제 </button>
      <div
        className="diary"
        onClick={() => history.push({ pathname: "/diary", state: id })}
      >
        <div className="diary-menuName">{choice_menu}</div>
        <label className="diary-weather">
          <img className="weather-icon" alt="날씨 아이콘" />
        </label>
        <label className="diary-feeling">
          <i />
        </label>
        <img className="diary-food-icon" alt="음식 대분류 아이콘" />
        <div className="diary-comment">{comment}</div>
        <div className="diary-date">{date}</div>
      </div>
    </>
  );
}

export default DiaryCapsule;
