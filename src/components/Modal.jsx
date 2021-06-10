import React, { useEffect } from "react";
import close from "../assets/close.svg";
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
        <div>{props.children}</div>
        <div className="carouselDiv">
          {props.data.map((video, index) => (
            <div key={index}>
              <button
                style={{
                  border: "none",
                  backgroundColor: "none",
                  cursor: "pointer",
                  margin: "25px 8px",
                  padding: "0px",
                  backgroundColor: "#2e2e2e",
                }}
                type="button"
                onClick={() => onCarouselClick(video.url, video.id)}
              >
                {video.id == props.id ? (
                  <div style={{ position: "relative", top: "0", left: "0" }}>
                    <img
                      style={{
                        height: "112px",
                        width: "200px",
                        position: "relative",
                        top: "0",
                        left: "0",
                      }}
                      src={`${video.thumbnail}`}
                    />
                    <img
                      style={{
                        position: "absolute",
                        top: "34%",
                        left: "25%",
                      }}
                      src={timePlaying}
                    />
                  </div>
                ) : (
                  <img
                    style={{ height: "112px", width: "200px" }}
                    src={`${video.thumbnail}`}
                  />
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
