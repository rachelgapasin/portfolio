import React, { useState, useRef } from "react";

import "./Settings.css";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioPlayer = useRef();

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  return (
    <div className="Settings">
      <audio
        ref={audioPlayer}
        src="./assets/enchanted-taylor-swift.mp3"
        preload="metadata"
      ></audio>
      <button className="btn" onClick={togglePlayPause}>
        {isPlaying ? (
          <i className="fa-solid fa-pause"></i>
        ) : (
          <i className="fa-solid fa-play"></i>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
