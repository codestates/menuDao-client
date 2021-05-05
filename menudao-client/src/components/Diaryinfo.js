import React, { useState } from "react";
import "../css/diary.css";

function Diaryinfo() {
  const [fileUrl, setFileUrl] = useState(null);
  const [isClick, setIsClick] = useState(false);
  const [comment, setComment] = useState('');
  console.log(comment);
  function processImage(event){
    const imageFile = event.target.files[0];
    if(imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setFileUrl(imageUrl)
    }else {
      setFileUrl(null);
    }
  }
  
  return (
    <>
      <div id="side-bar">
        <div className="side-title">Diary</div>
      </div>
      <div id="diaryinfo-container">
        <div className="diaryinfo-title">MY DAIRY</div>
        <div id="diaryinfo-upper-container">
          <div id="diaryinfo-subtitle">
            <span className="diaryinfo-food-name">돼지 국밥</span>
            <span className="daryinfo-date">2021.05.05</span>
            {/* 기분: 아이콘, 음식대분류: 이미지 */}
            
              <i className="fas fa-grin-hearts"></i>
              <img className="food-icon" src="./food_icon/bibimbap.png"></img>
              <img className="weather-icon" src="./weather_icon/sun.png"></img>    
          </div>
          <div id="diary-img-container">
          {fileUrl 
          ? <img className="upload-img" src={fileUrl}></img>
          : <div className="upload-img-thum"></div>
          }
          <label className="upload-btn" htmlFor="input-file">PHOTO UPLOAD</label>
          <input type="file" id="input-file" accept="image/*" onChange={processImage}></input>
          </div>
        </div>
        <div id="diaryinfo-lower-container">
        <div className="comment-container">
          <div className="diaryinfo-title">COMMENT</div>
            { !isClick 
              ? <button id="diary-edit-btn" onClick={() => {setIsClick(true)}}><i id="feel-good" className="fas fa-pencil-alt"></i></button>
              : <button id="diary-save-btn" onClick={() => {setIsClick(false)}}>SAVE</button>
            }
        </div>
          {!isClick
            ? <div className="diaryinfo-comment">{comment}</div>
            : <input className="diaryinfo-comment-input" value={comment} onChange={(e) => {setComment(e.target.value)}}></input>
          }
        </div>
      </div>
    </>
  );
}

export default Diaryinfo;
