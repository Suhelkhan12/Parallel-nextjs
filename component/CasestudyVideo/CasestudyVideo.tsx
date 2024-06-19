import React from "react";
import Image from "next/image";
import dummyImage from "/public/casestudyImages/3.png";
import VideoComponent from "../VideoComponent/VideoComponent";

const CasestudyVideo = () => {
  return (
    <div>
      <Image
        src={dummyImage}
        alt="nsk"
        quality={5}
        className=" w-full"
        priority
      ></Image>
    </div>
  );
};

export default CasestudyVideo;
