import Image from "next/image";
import imgleft from "../../../public/casestudyImages/girl.png";
import lottieData from "../../../public/Problem2_TextAnimation.json";
import H2 from "@/components/UI/Headings/H2/H2";
import dynamic from "next/dynamic";
const LottiePlayer = dynamic(() => import("@/components/Lottie/LottiePlayer"));
const DigilockerEleven = () => {
  return (
    <section className="flex">
      <div className="relative w-full max-w-[50%]">
        <div className="absolute left-auto right-8 top-8 w-full max-w-[380px]">
          <LottiePlayer data={lottieData} />
        </div>
        <Image src={imgleft} placeholder="blur" alt="Girl with phone in hand" />
      </div>
      <div className=" flex w-full max-w-[50%] items-center py-20 pl-[5.625rem]">
        <div className=" w-full max-w-lg">
          <span className="block font-medium uppercase -tracking-tight text-[#111]/40">
            PROBLEM 3
          </span>
          <H2 classname=" text-[2.25rem] lh-140 mt-4">
            Usage was{" "}
            <span className="bg-span-bg bg-cover font-bold text-[#111]">
              restricted
            </span>{" "}
            <br /> to identification documents
          </H2>
          <div className=" mt-4 w-full max-w-[30.3125rem]">
            <p className=" lh-180 text-[1.125rem] font-light text-[#111]/60">
              The idea behind Digilocker was to minimise the usage of physical
              documents by making it a place for people to access all official
              documents. However, due to lack of awareness, users were using it
              just{" "}
              <span className=" font-bold text-[#111]">
                to download their identification documents
              </span>{" "}
              like Aadhaar and driving license.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigilockerEleven;
