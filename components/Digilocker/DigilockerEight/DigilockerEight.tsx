import dynamic from "next/dynamic";
import Image from "next/image";
import rightImage from "../../../public/casestudyImages/77777.png";
import H2 from "@/components/UI/Headings/H2/H2";
import { Suspense } from "react";
const LottiePlayer = dynamic(() => import("@/components/Lottie/LottiePlayer"));

const DigilockerEight = () => {
  return (
    <section className=" flex items-center">
      <div className=" flex w-full max-w-[50%] justify-end py-20 pl-10 pr-[5.625rem]">
        <div className=" w-full max-w-lg">
          <span className="block font-medium uppercase -tracking-tight text-[#111]/40">
            PROBLEM 2
          </span>
          <H2 classname=" text-[2.25rem] lh-140 mt-4">
            Massive{" "}
            <span className="bg-span-bg bg-cover font-bold text-[#111]">
              user dropoffs
            </span>{" "}
            <br /> during the onboarding
          </H2>
          <div className=" mt-4 w-full max-w-[30.3125rem]">
            <p className=" lh-180 text-[1.125rem] font-light text-[#111]/60">
              The{" "}
              <span className=" font-bold text-[#111]">
                drop-offs during the onboarding process were a high 60%
              </span>{" "}
              and we identified the confusing onboarding process as the primary
              reason for it. There were two ways for the user to onboard:
              <br />
              <br />
              <span className="font-bold text-[#111]">Using Aadhaar:</span>{" "}
              Validating using Aadhaar number was the only way to access
              documents because we needed a robust identity verification before
              letting users fetch all the documents.
              <br /> <br />
              <span className="font-bold text-[#111]">Using Mobile:</span> This
              allowed the users to set up the app without verifying their
              Aadhaar, but they could not access documents which caused all the
              confusion.
            </p>
          </div>
        </div>
      </div>
      <div className=" relative w-full max-w-[50%]">
        <Image
          src={rightImage}
          alt="Woman looking at the phone"
          placeholder="blur"
        />
        <div className=" absolute bottom-4 left-8 right-auto">
          <Suspense fallback={<p>Loading...</p>}>
            <LottiePlayer data="https://cdn.jsdelivr.net/gh/amanunparallel/parallel-web@latest/lottie/Clo.lottie" />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default DigilockerEight;
