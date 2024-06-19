import React from "react";

const VideoComponent = () => {
  return (
    <video width="100%" height="auto" autoPlay loop>
      <source
        src="https://cdn.prod.website-files.com/654b1d09f45e7fa434ed24ef/654b1d09f45e7fa434ed30bb_Digilocker%20Animation_Final%20(1)-transcode.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
