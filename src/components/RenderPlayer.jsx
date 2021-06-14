import React from "react";
import ReactPlayer from "react-player/youtube";

function RenderPlayer(props) {
  var videoHeight = 1064;
  var videoWidth = 504;
  if (props.size.width >= 1440) {
    videoWidth = 1064;
    videoHeight = 504;
  }
  if (props.size.width >= 1024 && props.size.width < 1440) {
    videoWidth = 784;
    videoHeight = 442;
  }
  if (props.size.width >= 768 && props.size.width < 1024) {
    videoWidth = 688;
    videoHeight = 376;
  }
  if (props.size.width >= 375 && props.size.width < 768) {
    videoWidth = 375;
    videoHeight = 210;
  }
  return (
    <div>
      <ReactPlayer
        id={props.videoId}
        url={`${props.url}`}
        height={`${videoHeight}px`}
        width={`${videoWidth}px`}
        playing={props.show}
        controls
      />
      <div
        style={{
          display: "flex",
          height: "88px",
          width: `${videoWidth}px`,
          backgroundColor: "white",
          color: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "50%",
            flexDirection: "column",
            alignItems: "flex-start",
            fontSize: "large",
            margin: "24px",
          }}
        >
          <div style={{ fontWeight: "bold" }}>{props.name}</div>
          <div style={{ color: "grey", fontSize: "small" }}>
            Channelname • 1 year ago
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "50%",
            flexDirection: "column",
            alignItems: "flex-end",
            fontSize: "small",
            margin: "24px",
          }}
        >
          <div>
            <span style={{ fontWeight: "bold", fontSize: "large" }}>
              {props.views}
            </span>{" "}
            views
          </div>
          <div>
            <span style={{ fontWeight: "bold", fontSize: "large" }}>12</span>{" "}
            likes
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderPlayer;
