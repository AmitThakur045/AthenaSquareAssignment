import React from "react";

const VideoPlayer = ({ videoRef }) => {
  return (
    <div className="w-[50rem] top-0 right-0 fixed object-cover h-[30rem] overflow-hidden flex flex-row items-center justify-center">
      <video autoPlay loop muted ref={videoRef} />

    </div>
  );
};

export default VideoPlayer;
