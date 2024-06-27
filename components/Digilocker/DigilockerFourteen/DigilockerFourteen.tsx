import StandardSection from "@/components/StandardSection/StandardSection";
import H2 from "@/components/UI/Headings/H2/H2";
import React, { Suspense } from "react";
import rightLottie from "../../../public/mobile.json";
import cofettie from "../../../public/confetti.json";
import LottiePlayer from "@/components/Lottie/LottiePlayer";

const DigilockerFourteen = () => {
  return (
    <StandardSection>
      <div className="flex items-center justify-between">
        <div className=" w-full max-w-[50%]">
          <div className=" w-full max-w-[35rem]">
            <H2 classname=" text-[2rem] lh-140 font-semibold">
              How much difference did all the changes make?
            </H2>
            <div className=" mt-6">
              <h3 className=" text-[1.5rem] ">
                <span className=" font-bold">280%</span> increase
              </h3>
              <p className=" mt-1 text-[1.125rem] text-[#111]/60">
                in 30- day user retention (18% to 68%)
              </p>
            </div>
            <div className=" mt-6">
              <h3 className=" text-[1.5rem] ">
                <span className=" font-bold">66%</span> Aadhaar verified
              </h3>
              <p className=" mt-1 text-[1.125rem] text-[#111]/60">
                up from 54%
              </p>
            </div>
          </div>
        </div>
        <div className=" relative w-full max-w-[40%]">
          <Suspense fallback={<p>Loading...</p>}>
            <LottiePlayer data={rightLottie} />
          </Suspense>
          <div className=" absolute inset-x-auto top-12 size-60">
            <Suspense fallback={<p>Loading...</p>}>
              <LottiePlayer data={cofettie} />
            </Suspense>
          </div>
        </div>
      </div>
    </StandardSection>
  );
};

export default DigilockerFourteen;
