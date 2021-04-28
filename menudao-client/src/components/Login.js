// 메인화면에서 로그인 버튼 클릭 시 모달창 생성
import React from "react";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      password: "",
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    return (
      <>
        <div id="login_container">
          <div id="login_title">Log in</div>
          <input
            className="login_input"
            placeholder="ID"
            type="ID"
            onChange={this.handleInputValue("ID")}
          ></input>
          <input
            className="login_input"
            placeholder="비밀번호"
            type="password"
            onChange={this.handleInputValue("password")}
          ></input>
          <div>
            <button id="login_to_join">아직 계정이 없으신가요?</button>
            <button id="login_btn">Log in</button>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
