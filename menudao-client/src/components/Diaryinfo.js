import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";
import "../css/diary.css";
import dotenv from "dotenv";
dotenv.config();

function Diaryinfo({ key, feeling, weather, big_choice_menu, choice_menu, date, comment}) {
  const [fileUrl, setFileUrl] = useState(null);
  const [isClick, setIsClick] = useState(false);
  console.log(comment);
  function processImage(event){
    const imageFile = event.target.files[0];
    if(imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setFileUrl(imageUrl)
    }else {
      setFileUrl(null);
    }
  }
  const changeComment = function (e) {
    comment = e.target.value;
  }
  const diaryEditHandler = function () {
    axios
      .patch(
        `${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/diary`,
        {
            comment: comment,
            diary_id: key,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        swal("코멘트가 수정 되었습니다.", "", "success", {
          buttons: false,
          timer: 2000,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Category_Icon = function () {
    const categoryIcon = document.querySelector(".food-icon");
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
    const FeelingLabel = document.querySelector("i");
    if (feeling === "나쁨") {
      FeelingLabel.className = "fas fa-grimace";
    } else if (feeling === "조금나쁨") {
      FeelingLabel.className = "fas fa-frown";
    } else if (feeling === "평범") {
      FeelingLabel.className = "fas fa-smile";
    } else if (feeling === "좋음") {
      FeelingLabel.className = "fas fa-grin-hearts";
    }
  };

  useEffect(() => Category_Icon(), []);
  useEffect(() => Weather_Icon(), []);
  useEffect(() => Feeling_Icon(), []);

  
  return (
    <>
      <div id="side-bar">
        <div className="side-title">Diary</div>
      </div>
      <div id="diaryinfo-container">
        <div className="diaryinfo-title">MY DAIRY</div>
        <div id="diaryinfo-upper-container">
          <div id="diaryinfo-subtitle">
            <span className="diaryinfo-food-name">{choice_menu}</span>
            <span className="daryinfo-date">{date}</span>
            {/* 기분: 아이콘, 음식대분류: 이미지 */}
            
              <i className="fas fa-grin-hearts"></i>
              <img className="food-icon" src="./food_icon/bibimbap.png"></img>
              <img className="weather-icon" src="./weather_icon/sun.png"></img>    
          </div>
          <div id="diary-img-container">
          {fileUrl 
          ? <img className="upload-img" src={fileUrl}></img>
          : <div className="upload-img-thum"></div>
          }
          <label className="upload-btn" htmlFor="input-file">PHOTO UPLOAD</label>
          <input type="file" id="input-file" accept="image/*" onChange={processImage}></input>
          </div>
        </div>
        <div id="diaryinfo-lower-container">
        <div className="comment-container">
          <div className="diaryinfo-title">COMMENT</div>
            { !isClick 
              ? <button id="diary-edit-btn" onClick={() => {setIsClick(true)}}>EDIT</button>
              : <button id="diary-save-btn" onClick={() => {setIsClick(false); diaryEditHandler()}}>SAVE</button>
            }
        </div>
          {!isClick
            ? <div className="diaryinfo-comment">{comment}</div>
            : <input className="diaryinfo-comment-input" onChange={(e) => {changeComment(e)}}></input>
          }
        </div>
      </div>
    </>
  );
}

export default Diaryinfo;
