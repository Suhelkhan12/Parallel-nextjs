import StandardSection from "@/components/StandardSection/StandardSection";
import H2 from "@/components/UI/Headings/H2/H2";
import Image from "next/image";
import confetti from "@/public/lotties/digilocker/confetti.gif";
import lottieData from "@/public/lotties/digilocker/mobile.json";
import dynamic from "next/dynamic";
const LottiePlayer = dynamic(() => import("@/components/Lottie/LottiePlayer"));

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
          <LottiePlayer animationData={lottieData} />
          <div className=" absolute inset-x-auto top-12">
            <Image src={confetti} alt="Confetti gif" />
          </div>
        </div>
      </div>
    </StandardSection>
  );
};

export default DigilockerFourteen;
