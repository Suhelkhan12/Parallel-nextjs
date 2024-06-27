import H2 from "@/components/UI/Headings/H2/H2";
import React, { Suspense } from "react";
import LottiePlayer from "@/components/Lottie/LottiePlayer";
import lottieData from "../../../public/mobilescreen.json";

const DigilockerTenth = () => {
  return (
    <section className=" flex">
      <div className=" flex w-full max-w-[50%] items-center py-20 pl-10 pr-[5.625rem]">
        <div>
          <H2 classname=" text-[2.25rem] lh-140 ">
            <span className=" font-bold ">Keeping it simple</span> for our users
          </H2>
          <div className=" mt-4 w-full max-w-[28.75rem]">
            <p
              className=" lh-180 text-[1.125rem] font-light text-[#111]/60
            "
            >
              We revamped the onboarding and nudged the users to add their
              Aadhaar by educating them about the{" "}
              <span className=" font-bold text-[#111]">
                benefits of adding their Aadhaar
              </span>{" "}
              and the drawbacks of not doing so through the onboarding process
              itself. <br />
              <br /> Now when the users completed their onboarding using
              Aadhaar,{" "}
              <span className="font-bold text-[#111]">
                they already had their Aadhaar fetched and ready to use,
              </span>{" "}
              thus taking them one step further in the journey without any
              hassle.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex min-h-[800px] w-full max-w-[50%] items-center bg-digi-ten-bg bg-center bg-no-repeat">
        <Suspense fallback={<p>Loading</p>}>
          <LottiePlayer data={lottieData} />
        </Suspense>
      </div>
    </section>
  );
};

export default DigilockerTenth;