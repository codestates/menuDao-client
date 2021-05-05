// 기분이랑 음식 대분류 선텍하는 컨테이너
import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { pushFoodInfo } from "../module/RecommendFood";
import { pushWeatherInfo } from "../module/WeatherInfo";
import "../css/select.css";
import dotenv from "dotenv";
dotenv.config();

function UserSelect() {
  const dispatch = useDispatch();

  const history = useHistory();

  const [weather, setWeather] = useState("");
  const [big_choice_menu, setBigMenu] = useState("");
  const [feeling, setfeeling] = useState("");
  const [weatherInfo = {}, setweatherInfo] = useState({
    temp: "",
    icon: "",
    loading: true,
    location: "",
  });
  const getLocation = function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const API_KEY = "4d8822288b7fb34e914b976fab096207";
          await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${API_KEY}&units=metric`
          )
            .then(function (response) {
              return response.json();
            })
            .then(function (json) {
              console.log(json);
              setweatherInfo({
                temp: json.main.temp,
                icon: json.weather[0].icon,
                loading: false,
                location: json.name,
              });
            })
            .then(function () {
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
  useEffect(() => getLocation(), []);
  const WeathersValues = function () {
    const weatherIcon = document.querySelector(".weather-icon-png");
    if (weatherInfo.icon === "13d" || weatherInfo.icon === "13n") {
      setWeather("눈");
      weatherIcon.setAttribute("src", "./weather_icon/snowman.png");
    } else if (
      weatherInfo.icon === "09d" ||
      weatherInfo.icon === "09n" ||
      weatherInfo.icon === "10d" ||
      weatherInfo.icon === "10n" ||
      weatherInfo.icon === "11d" ||
      weatherInfo.icon === "11n"
    ) {
      setWeather("비");
      weatherIcon.setAttribute("src", "./weather_icon/raining.png");
    } else if (
      weatherInfo.icon === "03d" ||
      weatherInfo.icon === "03n" ||
      weatherInfo.icon === "04d" ||
      weatherInfo.icon === "04n" ||
      weatherInfo.icon === "50d" ||
      weatherInfo.icon === "50n"
    ) {
      setWeather("흐림");
      weatherIcon.setAttribute("src", "./weather_icon/clouds.png");
    } else {
      setWeather("맑음");
      weatherIcon.setAttribute("src", "./weather_icon/sun.png");
    }
  };

  const selectRequestHandler = function () {
    axios
      .post(
        `${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/menu-choice`,
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
        dispatch(pushFoodInfo(res.data.menu, res.data.big_choice_menu));
        swal("정보 전송 완료", "", "success");
        dispatch(pushWeatherInfo(weather, big_choice_menu, feeling));
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
            {weatherInfo.loading ? (
              <i className="fas fa-spinner"></i>
            ) : (
              <img className="weather-icon-png"></img>
            )}
          </div>
          {!weatherInfo.loading && (
            <div id="weather-info-container">
              <p className="weather-local">
                {weatherInfo.location.toUpperCase()}
              </p>
              <p className="weather-temp">
                {Math.floor(weatherInfo.temp) + "℃"}
              </p>
            </div>
          )}
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
          <div className="select-food-title">
            선호하는 음식 종류를 선택해주세요.
          </div>
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
                value="분식&패스트푸드"
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
                value="야식&안주"
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
          }}
        >
          SUBMIT
        </button>
      </div>
    </>
  );
}

export default UserSelect;
