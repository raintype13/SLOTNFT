import React from "react";
import ReactPlayer from "react-player";

const Player: React.FC = () => {
  return (
    <ReactPlayer
      controls={true}
      pip={false}
      url="https://niftyapp.s3.amazonaws.com/videos/hls_1.m3u8"
      height="100%"
      width="100%"
      scale
      muted
    />
  );
};

export default Player;
