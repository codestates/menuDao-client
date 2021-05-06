import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushFoodInfo } from "../module/RecommendFood";
import { useHistory } from "react-router";
import "../css/recommendation.css";
import swal from "sweetalert";
import dotenv from "dotenv";
dotenv.config();

// "이 메뉴로 할래요" 버튼 클릭 시 다이어리에 추가되고 alert창이 뜬다 (axios요청)
function Recommendation() {
  const dispatch = useDispatch();
  const history = useHistory();

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
  const Category_Icon = function () {
    const categoryIcon = document.querySelector(".food-category-icon");
    if (Recommend_Category === "한식") {
      categoryIcon.setAttribute("src", "./food_icon/bibimbap.png");
    } else if (Recommend_Category === "일식") {
      categoryIcon.setAttribute("src", "./food_icon/nigiri.png");
    } else if (Recommend_Category === "중식") {
      categoryIcon.setAttribute("src", "./food_icon/chinese.png");
    } else if (Recommend_Category === "양식") {
      categoryIcon.setAttribute("src", "./food_icon/steak.png");
    } else if (Recommend_Category === "분식&패스트푸드") {
      categoryIcon.setAttribute("src", "./food_icon/fishcake.png");
    } else if (Recommend_Category === "야식&안주") {
      categoryIcon.setAttribute("src", "./food_icon/soju.png");
    } else if (Recommend_Category === "디저트") {
      categoryIcon.setAttribute("src", "./food_icon/macaron.png");
    }
  };

  useEffect(() => Category_Icon(), []);

  // 만약, 다른 메뉴를 추천받고 싶으면 다시 POST요청
  const getAnotherFood = function () {
    axios
      .post(
        `${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/menu-choice`,
        {
          /* Body값: weahter,big_choice_menu,feeling*/
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
        dispatch(pushFoodInfo(res.data.menu, res.data.big_choice_menu));
      })
      .catch((err) => {
        console.log(err);
        swal("Error", "", "error");
      });
  };

  //"이 메뉴로 할래요" 버튼 클릭 시 axios 요청을 보내는 함수 작성 (데이터가 Diary list에 추가된다)
  // diary POST 요청 (날짜도 같이 보내줘야함)
  const addDiarylist = function () {
    axios
      .post(
        `${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/diary`,
        {
          weather: weather,
          choice_menu: Recommend_Food.slice(3, Recommend_Food.length),
          big_choice_menu: big_choice_menu,
          feeling: feeling,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(() => {
        swal("Diary에 저장되었습니다", "", "success");
      })
      .then(() => {
        window.setTimeout(window.location.replace("/diarylist"), 1000);
      })
      .catch((err) => {
        console.log(err);
        swal("로그인 세션이 만료되었습니다", "", "error");
        history.push("/");
      });
  };

  return (
    <>
      <div id="common-container">
        <div id="food-icon-container">
          <img className="food-category-icon" alt="big-choice-menu-icon" />
          <div className="food-name">
            "{Recommend_Food.slice(3, Recommend_Food.length)}"
          </div>
        </div>
        <div id="recommend-container">
          <p className="recommend-subtitle">
            오늘은 {Recommend_Food.slice(3, Recommend_Food.length)} 어떤가요?
          </p>
          <div className="rec-btn-container">
            <button
              className="positive-btn"
              onClick={() => {
                addDiarylist();
              }}
            >
              이 메뉴로 할래요
            </button>
            <button className="negative-btn" onClick={() => getAnotherFood()}>
              다른 메뉴는요?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Recommendation;
