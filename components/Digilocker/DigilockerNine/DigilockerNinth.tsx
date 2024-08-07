import H2 from "@/components/UI/Headings/H2/H2";
import lottieData from "@/public/lotties/digilocker/fetchaadhar.json";
import dynamic from "next/dynamic";
const LottiePlayer = dynamic(() => import("@/components/Lottie/LottiePlayer"));

const DigilockerNinth = () => {
  return (
    <section className=" bg-[#323235] pt-[18.75rem]">
      <div className="mx-auto w-full max-w-[25rem] rounded-3xl border border-white p-2">
        <LottiePlayer animationData={lottieData} />
      </div>
      <div className=" flex flex-col items-center">
        <H2 classname=" text-[2.25rem] lh-140 text-white mt-4">
          <span className=" font-bold">helping them choose better</span> with
          the power of defaults
        </H2>
        <div className=" mt-14 h-[18.75rem] w-px bg-white"></div>
      </div>
    </section>
  );
};

export default DigilockerNinth;
