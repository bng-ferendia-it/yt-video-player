import React from "react";
import close from "../assets/close.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import timePlaying from "../assets/timeplaying.svg";
import "./Modal.css";

const Modal = (props) => {
  const showHideClassName = props.show
    ? "modal displayBlock"
    : "modal displayNone";

  function onCarouselClick(video, id) {
    props.urlChange(video);
    props.idChange(id);
  }

  return (
    <div className={showHideClassName}>
      <section className="modalMain">
        <div className="closeButtonDiv">
          <button
            className="closeButton"
            type="button"
            onClick={props.handleClose}
          >
            <img src={close} />
          </button>
        </div>
        <div className="videoContainer">
          <button className="navButton">
            <img src={left} />
          </button>
          {props.children}
          <button className="navButton">
            <img src={right} />
          </button>
        </div>
        <div className="carouselDiv">
          {props.data.map((video, index) => (
            <div key={index}>
              <button
                className="carouselDivButton"
                type="button"
                onClick={() => onCarouselClick(video.url, video.id)}
              >
                {video.id == props.id ? (
                  <div className="carouselImageContainer">
                    <img
                      className="carouselImageRelative"
                      src={`${video.thumbnail}`}
                    />
                    <img className="carouselImageAbsolete" src={timePlaying} />
                  </div>
                ) : (
                  <img className="carouselImage" src={`${video.thumbnail}`} />
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
