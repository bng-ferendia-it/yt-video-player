import React, { useState } from "react";
import close from "../assets/close.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import timePlaying from "../assets/timeplaying.svg";
import leftArrow from "../assets/leftArrow.svg";
import playButton from "../assets/playButton.svg";
import "./Modal.css";

const Modal = (props) => {
  const showHideClassName = props.show
    ? "modal displayBlock"
    : "modal displayNone";

  let data = props.data;

  function onCarouselClick(video, id, name, number, index) {
    props.urlChange(video);
    props.idChange(id);
    props.nameChange(name);
    props.viewsChange(number);
    props.changeVidIndex(index);
  }
  const mobileSize = 375;

  const leftArrowClick = () => {
    let videoIndex = props.vidIndex - 1;
    let elementByIndex = data[videoIndex];
    props.idChange(elementByIndex.id);
    props.urlChange(elementByIndex.url);
    props.nameChange(elementByIndex.videoName);
    props.viewsChange(elementByIndex.viewsNumber);
    props.changeVidIndex(videoIndex)
  };

  const rightArrowClick = () => {
    let videoIndex = props.vidIndex+1;
    let elementByIndex = data[videoIndex];
    props.idChange(elementByIndex.id);
    props.urlChange(elementByIndex.url);
    props.nameChange(elementByIndex.videoName);
    props.viewsChange(elementByIndex.viewsNumber);
    props.changeVidIndex(videoIndex)

  };


  return (
    <div className={showHideClassName}>
      <section
        className={`${
          props.size.width > mobileSize ? "modalMain" : "mobileModalMain"
        }`}
      >
        <div
          className={`${
            props.size.width > mobileSize ? "modalMain" : "mobileModalMain"
          }`}
        >
          <button
            className="closeButton"
            type="button"
            onClick={props.handleClose}
          >
            <img alt="closeBtn" src={close} />
          </button>
        </div>
        <div className="videoContainer">
          <button onClick={leftArrowClick} className="navButton">
            <img alt="leftBtn" src={left} />
          </button>
          {props.children}
          {props.size.width >= 1440 ? (
            <button onClick={rightArrowClick} className="navButton">
              <img alt="rightBtn" src={right} />
            </button>
          ) : (
            <button onClick={rightArrowClick} className="leftArrow">
              <img alt="leftBtn" src={leftArrow} />
            </button>
          )}
        </div>
        <div className="carouselDiv">
          {props.data.map((video, index) => (
            <div key={index}>
              <button
                className="carouselDivButton"
                type="button"
                onClick={() =>
                  onCarouselClick(
                    video.url,
                    video.id,
                    video.videoName,
                    video.viewsNumber,
                    index
                  )
                }
              >
                {video.id === props.id ? (
                  <div className="carouselImageContainer">
                    <img
                      alt="thumbnail"
                      className="carouselImageRelative"
                      src={`${video.thumbnail}`}
                    />
                    <img
                      alt="playing"
                      className="carouselImageTimeAbsolete"
                      src={timePlaying}
                    />
                  </div>
                ) : (
                  <div className="carouselImageContainer">
                    <img
                      alt="thumbnail"
                      className="carouselImageRelative"
                      src={`${video.thumbnail}`}
                    />
                    <img
                      alt="play"
                      className="carouselImagePlayAbsolete"
                      src={playButton}
                    />
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Modal;
