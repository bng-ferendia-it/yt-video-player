import "./App.css";
import datayt from "./data";
import Modal from "./components/Modal";
import React, { useState, useEffect } from "react";
import RenderPlayer from "./components/RenderPlayer";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(datayt);
  const [url, setUrl] = useState();
  const [id, setId] = useState();
  const [videoIndex, setVideoIndex] = useState();
  const [videoName, setVideoName] = useState();
  const [viewsNumber, setViewsNumber] = useState();

  const size = useWindowSize();
  console.log(size);
  const showModal = (video, index) => {
    setVideoIndex(index);
    setUrl(video.url);
    setId(video.id);
    setVideoName(video.videoName);
    setViewsNumber(video.viewsNumber);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  function handleUrlChange(newValue) {
    setUrl(newValue);
  }
  function handleIdChange(newValue) {
    setId(newValue);
  }
  function handleIndexChange(newValue) {
    setVideoIndex(newValue);
  }
  function handleNameChange(newValue) {
    setVideoName(newValue);
  }
  function handleViewsChange(newValue) {
    setViewsNumber(newValue);
  }
  return (
    <div className="App">
      {data.map((video, index) => (
        <div>
          <button
            className="imageButton"
            type="button"
            onClick={() => showModal(video, index)}
          >
            <img alt="thumbnail" src={`${video.thumbnail}`} />
          </button>
        </div>
      ))}
      <Modal
        show={show}
        handleClose={hideModal}
        data={data}
        id={id}
        vidIndex={videoIndex}
        changeVidIndex={handleIndexChange}
        urlChange={handleUrlChange}
        nameChange={handleNameChange}
        idChange={handleIdChange}
        viewsChange={setViewsNumber}
        size={size}
      >
        <RenderPlayer
          show={show}
          videoId={id}
          url={url}
          size={size}
          name={videoName}
          views={viewsNumber}
        />
      </Modal>
    </div>
  );
}

export default App;
