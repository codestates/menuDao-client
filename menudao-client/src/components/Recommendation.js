import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushFoodInfo } from "../module/RecommendFood";
import "../css/recommendation.css";

// "이 메뉴로 할래요" 버튼 클릭 시 다이어리에 추가되고 alert창이 뜬다 (axios요청)
function Recommendation() {
  const dispatch = useDispatch();

  // UserSelect로 initialState에 저장한 사용자 선택정보를 가져온다
  const weather = useSelector(
    (status) => status.weatherInfoReducer.weatherInfo.weather
  );
  const big_choice_menu = useSelector(
    (status) => status.weatherInfoReducer.weatherInfo.big_choice_menu
  );
  const feeling = useSelector(
    (status) => status.weatherInfoReducer.weatherInfo.feeling
  );

  // UserSelect로 initialState에 저장한 음식 이름과 카테고리를 가져온다
  const Recommend_Food = useSelector(
    (status) => status.foodInfoReducer.foodInfo.food_name
  );

  const Recommend_Category = useSelector(
    (status) => status.foodInfoReducer.foodInfo.food_category
  );

  // UserSelect에서 initialState에 저장한 food category을 가져와서 조건식에 따라 아이콘을 바꿔준다
  const Category_Inco = () => {
    const categoryIcon = document.querySelector(".food-category-icon");
    if (Recommend_Category === "한식") {
      categoryIcon.setAttribute("src", "./food_icon/bibimbap.png");
    } else if (Recommend_Category === "일식") {
      categoryIcon.setAttribute("src", "./food_icon/nigiri.png");
    } else if (Recommend_Category === "중식") {
      categoryIcon.setAttribute("src", "./food_icon/chinese.png");
    } else if (Recommend_Category === "양식") {
      categoryIcon.setAttribute("src", "./food_icon/steak.png");
    } else if (Recommend_Category === "분식") {
      categoryIcon.setAttribute("src", "./food_icon/fishcake.png");
    } else if (Recommend_Category === "안주") {
      categoryIcon.setAttribute("src", "./food_icon/soju.png");
    } else {
      //디저트
      categoryIcon.setAttribute("src", "./food_icon/macaron.png");
    }
  };

  useEffect(() => Category_Inco(), [Recommend_Category]);

  // 만약, 다른 메뉴를 추천받고 싶으면 다시 POST요청
  const getAnotherFood = function () {
    axios
      .post(
        "http://localhost:4000/menu-choice",
        {
          /* PATCH요청시 보내야할 Body값: weahter,big_choice_menu,feeling*/
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
        console.log(
          "추천받은 다른 메뉴 및 카테고리:",
          res.data.food_name,
          res.data.food_category
        );
        dispatch(pushFoodInfo(res.data.food_name, res.data.food_category));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //"이 메뉴로 할래요" 버튼 클릭 시 axios 요청을 보내는 함수 작성 (데이터가 Diary list에 추가된다)
  // diary POST 요청

  return (
    <>
      <div id="common-container">
        {/* menu-choice에서 food-name이랑 카테고리도 서버에서 받아 와야할 것 같다! */}
        <div className="food-icon-container">
          {/* 아이콘은 public에 있슴다, 경로는 Nav.js 로고 가져온 거 확인 해주세요! */}
          {/* 서버에서 받아온 카테고리에 따라 다른 아이콘이 뜨도록 조건문 필요할 것 같슴다! */}
          <img className="food-category-icon"></img>
          {/* span font-size 크게! */}
          <p className="food-name"></p>
        </div>
        <div id="recommend-container">
          <p className="recommend-subtitle">오늘은 {Recommend_Food} 어때?</p>
          <button className="positive-btn">이 메뉴로 할래요</button>
          <button className="negative-btn" onClick={() => getAnotherFood()}>
            다른 메뉴는요?
          </button>
        </div>
      </div>
    </>
  );
}
export default Recommendation;
