export const initialState = {
  // 화원가입 시, 작성한 데이터들을 임시로 저장시켜놓는다
  // 이 값들을 서버로 회원가입 요청을 보낼 때 해당 객체를 보낸다
  userInfo: {
    user_name: "",
    user_sex: "",
    user_id: "",
    user_birthday: "",
    user_password: "",
    userPWcheck: false,
  },
  accessToken: "",

  foodInfo: {
    food_name: "",
    food_category: "",
  },

  weatherInfo: {
    weather: "",
    big_choice_menu: "",
    feeling: "",
  },
};
