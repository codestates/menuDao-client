// 접속 시 메인 화면
import React from "react";
import Login from "./components/Login";
//import "./App.css";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <div id="main-container">
          <div id="main-btncontainer">
            <div>
              <button className="main-btn" onClick={this.openModal}>
                Login
              </button>
              <Login isOpen={this.state.isModalOpen} close={this.closeModal} />
            </div>
            <button className="main-btn">Join</button>
          </div>
          <div id="main-subcontainer">
            <h1 id="title">MenuDao</h1>
            <div id="subtitle">오늘 뭐 먹을까?</div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
