import React from "react";
import Image from "next/image";
import dummyImage from "/public/casestudyImages/4.png";
import VideoComponent from "../VideoComponent/VideoComponent";

const CasestudyVideo = () => {
  return (
    <div>
      {/* <VideoComponent /> */}
      <Image src={dummyImage} alt="nsk" className=" w-full"></Image>
    </div>
  );
};

export default CasestudyVideo;
