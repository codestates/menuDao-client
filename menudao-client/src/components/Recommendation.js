import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushFoodInfo } from "../module/RecommendFood";
import { useHistory } from "react-router";
import moment from "moment";
import "../css/recommendation.css";
import swal from "sweetalert";

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
  // diary POST 요청 (날짜도 같이 보내줘야함)
  const addDiarylist = function () {
    axios
      .post(
        "http://localhost:4000/diary",
        {
          weather: weather,
          choice_menu: Recommend_Food,
          big_choice_menu: big_choice_menu,
          feeling: feeling,
          date: moment().format("LLL"),
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(() => {
        swal("Diary에 저장되었습니다", "", "success");
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
        {/* menu-choice에서 food-name이랑 카테고리도 서버에서 받아 와야할 것 같다! */}
        <div id="food-icon-container">
          {/* 아이콘은 public에 있슴다, 경로는 Nav.js 로고 가져온 거 확인 해주세요! */}
          {/* 서버에서 받아온 카테고리에 따라 다른 아이콘이 뜨도록 조건문 필요할 것 같슴다! */}
          <img className="food-category-icon"></img>
          {/* span font-size 크게! */}
          <div className="food-name">{Recommend_Food}"마카롱"</div>
        </div>
        <div id="recommend-container">
          <p className="recommend-subtitle">
            오늘은 {Recommend_Food}마카롱 어떤가요?
          </p>
          <div className="rec-btn-container">
            <button className="positive-btn" onClick={() => addDiarylist()}>
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
