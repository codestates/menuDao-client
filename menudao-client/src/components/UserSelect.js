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
            날씨 아이콘
          </div>
          <div className="weather-local">
            서울 특별시, 송파구
          </div>
          <div className="weather-temp">
            23
          </div>
        </div>
        <div id="select-container">
          {/* 기분 선택 */}
          <div id="mood-container">
            <div className="mood-title">오늘의 기분을 선택해주세요.</div>
              <span>나쁨</span>
              <input value="한식" name="gender" type="radio" className="food-category" value="한식"></input><label className="category-label"><i class="fas fa-grimace"></i></label>
              <input value="한식" name="gender" type="radio" className="food-category" value="한식"></input><label className="category-label"><i class="fas fa-frown"></i></label>
              <input value="한식" name="gender" type="radio" className="food-category" value="한식"></input><label className="category-label"><i class="fas fa-meh-blank"></i></label>
              <input value="한식" name="gender" type="radio" className="food-category" value="한식"></input><label className="category-label"><i class="fas fa-meh-rolling-eyes"></i></label>
              <input value="한식" name="gender" type="radio" className="food-category" value="한식"></input><label className="category-label"><i class="fas fa-smile"></i></label>
              <input value="한식" name="gender" type="radio" className="food-category" value="한식"></input><label className="category-label"><i class="fas fa-grin-beam"></i></label>
              <input value="한식" name="gender" type="radio" className="food-category" value="한식"></input><label className="category-label"><i class="fas fa-grin-hearts"></i></label>
              <span>좋음</span>
          </div>
          {/* 음식 대분류 선택 */}
          <div id="category-container">
            <input value="한식" name="gender" type="radio" className="food-category" value="한식"></input><label className="category-label">한식</label>
            <input value="한식" name="gender" type="radio" className="food-category" value="한식"></input><label className="category-label">일식</label>
            <input value="한식" name="gender" type="radio" className="food-category" value="한식"></input><label className="category-label">중식</label>
            <input value="한식" name="gender" type="radio" className="food-category" value="한식"></input><label className="category-label">양식</label>
            <input value="한식" name="gender" type="radio" className="food-category" value="한식"></input><label className="category-label">안주</label>
            <input value="한식" name="gender" type="radio" className="food-category" value="한식"></input><label className="category-label">디저트</label>
          </div>
        </div>
        <button id="select-btn"></button>
      </div>
    </>
  )
}

export default UserSelect;