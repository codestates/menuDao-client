// 기분이랑 음식 대분류 선텍하는 컨테이너
import React, { useMemo, useState } from "react";
import axios from "axios";

function UserSelect() {
  // const [weather, setWeather] = useState('');
  const [big_choice_menu, setBigMenu] = useState('');
  const [feeling, setfeeling] = useState('');
  const [temp, setTemp] = useState('');
  const [location, setLocation] = useState('');
  const getLocation = () => {
    if (navigator.geolocation) { // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(async function(position) {
        // console.log(position.coords.latitude + ' ' + position.coords.longitude);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const API_KEY = '53d889604b2b0445ebe932a393ee12a7';
          await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          )
            .then(function(response){
            return response.json();
          })
            .then(function(json){
              const temparature = json.main.temp;  //온도
              setTemp(temparature);
              const place = json.name;   // 사용자 위치
              setLocation(place);
              console.log(json);
              const iconcode = json.weather[0].icon;
              const weatherIcon = document.querySelector('.weather-icon-png');
              const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
              weatherIcon.setAttribute('src', iconurl);
            });
      }, function(error) {
        console.error(error);
      }, {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity
      });
    } else {
      alert('GPS를 지원하지 않습니다');
      // Seoul 37.5665° N, 126.9780° E
    }
  }
  getLocation();
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
        alert('select 정보 전송 성공!')
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div id="common-container">
        <div id="weather-container">
          <div className="weather-icon">
            {/* <i className="fas fa-sun"></i> */}
            <img className="weather-icon-png"></img>
          </div>
          <div id="weather-info-container">
            <p className="weather-local">{location}</p>
            <p className="weather-temp">{Math.floor(temp) + '℃'}</p>
          </div>
        </div>
        <div id="select-container">
          {/* 기분 선택 */}
          <div className="select-title">오늘의 기분을 선택해주세요.</div>
          <div id="mood-container">
              <span>나쁨</span>
              <div className="checkboxgroup">
                <label className="category-label"><i className="fas fa-grimace"></i></label><input onChange={(e) => {setfeeling(e.target.value)}} name="gender" type="radio" className="food-category" value="0"></input>
              </div>
              <div className="checkboxgroup">
                <label className="category-label"><i className="fas fa-frown"></i></label><input onChange={(e) => {setfeeling(e.target.value)}} name="gender" type="radio" className="food-category" value="1"></input>
              </div>
              <div className="checkboxgroup">
                <label className="category-label"><i className="fas fa-smile"></i></label><input onChange={(e) => {setfeeling(e.target.value)}} name="gender" type="radio" className="food-category" value="2"></input>
              </div>
              <div className="checkboxgroup">
                <label className="category-label"><i className="fas fa-grin-hearts"></i></label><input onChange={(e) => {setfeeling(e.target.value)}} name="gender" type="radio" className="food-category" value="3"></input>
              </div>
              <span>좋음</span>
          </div>
          {/* 음식 대분류 선택 */}
          <div className="select-title">선호하는 음식 종류를 선택해주세요.</div>
          <div id="category-container">
            <div className="checkboxgroup">
              <img className="food-icon" alt="korean-food" src="./food_icon/bibimbap.png"></img>
              <label className="category-label">한식</label>
              <input
              onChange={(e) => {setBigMenu(e.target.value)}}
                value="한식"
                name="gender"
                type="radio"
                className="food-category-1"
              ></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/nigiri.png"></img>
              <label className="category-label">일식</label>
              <input
                onChange={(e) => {setBigMenu(e.target.value)}}
                value="일식"
                name="gender"
                type="radio"
                className="food-category"
              ></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/chinese.png"></img>
              <label className="category-label">중식</label>
              <input
                onChange={(e) => {setBigMenu(e.target.value)}}
                value="중식"
                name="gender"
                type="radio"
                className="food-category"
              ></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/steak.png"></img>
              <label className="category-label">양식</label>
              <input
                onChange={(e) => {setBigMenu(e.target.value)}}
                value="양식"
                name="gender"
                type="radio"
                className="food-category"
              ></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/fishcake.png"></img>
              <label className="category-label">분식</label>
              <input
                onChange={(e) => {setBigMenu(e.target.value)}}
                value="분식"
                name="gender"
                type="radio"
                className="food-category"
              ></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/soju.png"></img>
              <label className="category-label">안주</label>
              <input
                onChange={(e) => {setBigMenu(e.target.value)}}
                value="안주"
                name="gender"
                type="radio"
                className="food-category"
              ></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/macaron.png"></img>
              <label className="category-label">디저트</label>
              <input
                onChange={(e) => {setBigMenu(e.target.value)}}  
                value="디저트"
                name="gender"
                type="radio"
                className="food-category"
              ></input>
            </div>
          </div>
        </div>
        <button id="select-btn">선택 완료</button>
      </div>
    </>
  );
}

export default UserSelect;
