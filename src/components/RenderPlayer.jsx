import React, { useState, useEffect, useLayoutEffect } from "react";
import ReactPlayer from "react-player/youtube";

function RenderPlayer(props) {
  const [play, setPlay] = useState(props.show);

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
    <ReactPlayer
      id={props.videoId}
      url={`${props.url}`}
      height={`${videoHeight}px`}
      width={`${videoWidth}px`}
      playing={props.show}
      controls
    />
  );
}

export default RenderPlayer;
