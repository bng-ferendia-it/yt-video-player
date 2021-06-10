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

  const size = useWindowSize();

  const showModal = (video) => {
    setUrl(video.url);
    setId(video.id);
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
  return (
    <div className="App">
      {data.map((video, index) => (
        <div key={index}>
          <button
            className="imageButton"
            type="button"
            onClick={() => showModal(video)}
          >
            <img src={`${video.thumbnail}`} />
          </button>
        </div>
      ))}
      <Modal
        show={show}
        handleClose={hideModal}
        data={data}
        id={id}
        urlChange={handleUrlChange}
        idChange={handleIdChange}
      >
        <RenderPlayer show={show} videoId={id} url={url} size={size} />
      </Modal>
    </div>
  );
}

export default App;
