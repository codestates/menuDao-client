// 기분이랑 음식 대분류 선텍하는 컨테이너
import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { pushFoodName } from "../module/RecommendFood";
import "../css/select.css"

function UserSelect() {
  const dispatch = useDispatch();

  const history = useHistory();

  const [weather, setWeather] = useState("");
  const [big_choice_menu, setBigMenu] = useState("");
  const [feeling, setfeeling] = useState("");
  const [temp, setTemp] = useState("");
  const [location, setLocation] = useState("");
  const [icon, setIcon] = useState(""); //weahter icon의 code 상태값

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          // console.log(position.coords.latitude + ' ' + position.coords.longitude);
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const API_KEY = "4d8822288b7fb34e914b976fab096207";
          await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          )
            .then(function (response) {
              return response.json();
            })
            .then(function (json) {
              console.log(json);
              const temparature = json.main.temp; //온도
              setTemp(temparature);
              const place = json.name; // 사용자 위치
              setLocation(place);
              const iconcode = json.weather[0].icon;
              setIcon(iconcode);
              const weatherIcon = document.querySelector(".weather-icon-png");
              if (weather === "눈") {
                weatherIcon.setAttribute("src", "./weather_icon/snowman.png");
              } else if (weather === "비") {
                weatherIcon.setAttribute("src", "./weather_icon/raining.png");
              } else if (weather === "흐림") {
                weatherIcon.setAttribute("src", "./weather_icon/clouds.png");
              } else {
                weatherIcon.setAttribute("src", "./weather_icon/sun.png");
              }
              WeathersValues();
            });
        },
        function (error) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    } else {
      swal("GPS를 지원하지 않습니다", "", "warning");
      // Seoul 37.5665° N, 126.9780° E
    }
  };
  // Rerendering 방지
  useEffect(() => getLocation());

  const WeathersValues = () => {
    if (icon === "13d" || icon === "13n") {
      setWeather("눈");
    } else if (
      icon === "09d" ||
      icon === "09n" ||
      icon === "10d" ||
      icon === "10n" ||
      icon === "11d" ||
      icon === "11n"
    ) {
      setWeather("비");
    } else if (
      icon === "03d" ||
      icon === "03n" ||
      icon === "04d" ||
      icon === "04n" ||
      icon === "50d" ||
      icon === "50n"
    ) {
      setWeather("흐림");
    } else {
      setWeather("맑음");
    }
  };

  const selectRequestHandler = function () {
    axios
      .post(
        "http://localhost:4000/menu-choice",
        {
          weather: weather,
          big_choice_menu: big_choice_menu,
          feeling: feeling,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(pushFoodName(res.data.food_name));
        swal("선택한 정보 전송", "", "success");
        history.push("/recommend");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div id="common-select-container">
        <div id="weather-container">
          <div className="weather-icon">
            <img className="weather-icon-png"></img>
          </div>
          <div id="weather-info-container">
            <p className="weather-local">{location}</p>
            <p className="weather-temp">{Math.floor(temp) + "℃"}</p>
          </div>
        </div>
        <div id="select-container">
          {/* 기분 선택 */}
          <div className="select-title">오늘의 기분을 선택해주세요.</div>
          <div id="mood-container">
            <span>나쁨</span>
            <div className="checkboxgroup-1">
              <label className="category-label">
                <i className="fas fa-grimace"></i>
              </label>
              <input
                onChange={(e) => {
                  setfeeling(e.target.value);
                }}
                name="gender"
                type="radio"
                className="mood-category"
                value="나쁨"
              ></input>
            </div>
            <div className="checkboxgroup-1">
              <label className="category-label">
                <i className="fas fa-frown"></i>
              </label>
              <input
                onChange={(e) => {
                  setfeeling(e.target.value);
                }}
                name="gender"
                type="radio"
                className="mood-category"
                value="조금나쁨"
              ></input>
            </div>
            <div className="checkboxgroup-1">
              <label className="category-label">
                <i className="fas fa-smile"></i>
              </label>
              <input
                onChange={(e) => {
                  setfeeling(e.target.value);
                }}
                name="gender"
                type="radio"
                className="mood-category"
                value="평범"
              ></input>
            </div>
            <div className="checkboxgroup-1">
              <label className="category-label">
                <i className="fas fa-grin-hearts"></i>
              </label>
              <input
                onChange={(e) => {
                  setfeeling(e.target.value);
                }}
                name="gender"
                type="radio"
                className="mood-category"
                value="좋음"
              ></input>
            </div>
            <span>좋음</span>
          </div>
          {/* 음식 대분류 선택 */}
          <div className="select-food-title">선호하는 음식 종류를 선택해주세요.</div>
          <div id="category-container">
            <div className="checkboxgroup">
              <img
                className="food-icon"
                alt="korean-food"
                src="./food_icon/bibimbap.png"
              ></img>
              <label className="category-label">한식</label>
              <input
                onChange={(e) => {
                  setBigMenu(e.target.value);
                }}
                value="한식"
                name="food"
                type="radio"
                className="food-category"
              ></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/nigiri.png"></img>
              <label className="category-label">일식</label>
              <input
                onChange={(e) => {
                  setBigMenu(e.target.value);
                }}
                value="일식"
                name="food"
                type="radio"
                className="food-category"
              ></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/chinese.png"></img>
              <label className="category-label">중식</label>
              <input
                onChange={(e) => {
                  setBigMenu(e.target.value);
                }}
                value="중식"
                name="food"
                type="radio"
                className="food-category"
              ></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/steak.png"></img>
              <label className="category-label">양식</label>
              <input
                onChange={(e) => {
                  setBigMenu(e.target.value);
                }}
                value="양식"
                name="food"
                type="radio"
                className="food-category"
              ></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/fishcake.png"></img>
              <label className="category-label">분식</label>
              <input
                onChange={(e) => {
                  setBigMenu(e.target.value);
                }}
                value="분식"
                name="food"
                type="radio"
                className="food-category"
              ></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/soju.png"></img>
              <label className="category-label">안주</label>
              <input
                onChange={(e) => {
                  setBigMenu(e.target.value);
                }}
                value="안주"
                name="food"
                type="radio"
                className="food-category"
              ></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/macaron.png"></img>
              <label className="category-label">디저트</label>
              <input
                onChange={(e) => {
                  setBigMenu(e.target.value);
                }}
                value="디저트"
                name="food"
                type="radio"
                className="food-category"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button
          id="select-btn"
          onClick={() => {
            if (weather !== "" && big_choice_menu !== "" && feeling !== "") {
              selectRequestHandler();
            } else {
              swal("모든 항목을 선택해주세요", "", "error");
            }
          }}>
          SUBMIT
        </button>
      </div>
    </>
  );
}

export default UserSelect;
