// 기분이랑 음식 대분류 선텍하는 컨테이너
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { checkUserId, checkUserBirth, checkUserPW, checkSamePW } from "../module/validationCheck";
import { initialState } from "../module/initialState"

function UserSelect() {


  return(
    <>
      <div id="common-container">
        <div id="weather-container">
          <div className="weather-icon">
            <i className="fas fa-sun"></i>
          </div>
          <div id='weather-info-container'>
          <p className="weather-local">
            서울 특별시, 송파구
          </p>
          <p className="weather-temp">
            23°C
          </p>
          </div>
        </div>
        <div id="select-container">
          {/* 기분 선택 */}
          <div className="select-title">오늘의 기분을 선택해주세요.</div>
          <div id="mood-container">
              <span>나쁨</span>
              <div className="checkboxgroup">
                <label className="category-label"><i className="fas fa-grimace"></i></label><input value="한식" name="gender" type="radio" className="food-category" value="1"></input>
              </div>
              <div className="checkboxgroup">
                <label className="category-label"><i className="fas fa-frown"></i></label><input value="한식" name="gender" type="radio" className="food-category" value="2"></input>
              </div>
              <div className="checkboxgroup">
                <label className="category-label"><i className="fas fa-smile"></i></label><input value="한식" name="gender" type="radio" className="food-category" value="5"></input>
              </div>
              <div className="checkboxgroup">
                <label className="category-label"><i className="fas fa-grin-hearts"></i></label><input value="한식" name="gender" type="radio" className="food-category" value="7"></input>
              </div>
              <span>좋음</span>
          </div>
          {/* 음식 대분류 선택 */}
          <div className="select-title">선호하는 음식 종류를 선택해주세요.</div>
          <div id="category-container">
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/bibimbap.png"></img><label className="category-label">한식</label><input value="한식" name="gender" type="radio" className="food-category-1" value="한식"></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/nigiri.png"></img><label className="category-label">일식</label><input value="한식" name="gender" type="radio" className="food-category" value="한식"></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/chinese.png"></img><label className="category-label">중식</label><input value="한식" name="gender" type="radio" className="food-category" value="한식"></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/steak.png"></img><label className="category-label">양식</label><input value="한식" name="gender" type="radio" className="food-category" value="한식"></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/fishcake.png"></img><label className="category-label">분식</label><input value="한식" name="gender" type="radio" className="food-category" value="한식"></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/soju.png"></img><label className="category-label">안주</label><input value="한식" name="gender" type="radio" className="food-category" value="한식"></input>
            </div>
            <div className="checkboxgroup">
              <img className="food-icon" src="./food_icon/macaron.png"></img><label className="category-label">디저트</label><input value="한식" name="gender" type="radio" className="food-category" value="한식"></input>
            </div>
          </div>
        </div>
        <button id="select-btn">선택 완료</button>
      </div>
    </>
  )
}

export default UserSelect;