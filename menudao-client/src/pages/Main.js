// 접속 시 메인 화면
import React from "react";
import Login from "../components/Login";
import { useSelector, useDispatch } from 'react-redux';
import Join from "../components/Join";
import { showModal, dropModal} from "../module/modal"

//import "./App.css";
function Main() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.modalReducer.show);

  // openModal = () => {
  //   dispatchEvent
  // };

  // closeModal = () => {
  //   this.setState({ isModalOpen: false });
  // };

  const onShowModal = () => dispatch(showModal());
  const onDropModal = () => dispatch(dropModal());

    return (
      <>
        {/* <div id="main-container"> */}
          <div id="main-btncontainer">
            <div>
            <button className="main-btn" onClick={() => onShowModal()}>Join</button>
            { show && <Join onDropModal={onDropModal}/>}
              <button className="main-btn">
                Login
              </button>
            </div>
          </div>
          <div id="main-subcontainer">
            <h1 id="title">MenuDao</h1>
            <div id="subtitle">오늘 뭐 먹을까?</div>
          </div>
        {/* </div> */}
      </>
    );
  }

export default Main;
