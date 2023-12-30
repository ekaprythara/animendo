"use client";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { FaXmark } from "react-icons/fa6";

const VideoPlayer = ({ youtubeId }) => {
  const [isClose, setIsClose] = useState(false);

  const options = {
    width: "300",
    height: "250",
  };

  return (
    <div className={!isClose ? "block" : "hidden"}>
      <div className="fixed bottom-2 right-2">
        <button
          className="absolute -top-3 -left-4 "
          onClick={() => setIsClose(true)}
        >
          <FaXmark size={30} className="rounded-full p-1 bg-white text-black" />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(e) => e.target.pauseVideo()}
          opts={options}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
