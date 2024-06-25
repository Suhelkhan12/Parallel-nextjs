import Image from "next/image";
import StandardSection from "@/components/StandardSection/StandardSection";
import H2 from "@/components/UI/Headings/H2/H2";
import leftBottomImg from "../../../public/casestudyImages/g2.png";
import rightTopImg from "../../../public/casestudyImages/g1.png";

const DigilockerFifth = () => {
  return (
    <>
      <StandardSection classname="bg-[#323235] text-white pt-[18.75rem] relative">
        <div className=" flex flex-col items-center justify-center">
          <H2 classname="text-[2.25rem] lh-140">
            <span className=" font-bold">showing them</span> all that was
            possible
          </H2>
          <div className=" mt-[3.75rem] h-[18.75rem] w-px bg-white"></div>
        </div>

        <div className=" absolute bottom-auto left-auto right-0 top-0 w-full max-w-[23rem] translate-y-24">
          <Image
            src={rightTopImg}
            alt="Parallel team discussing designs with Digilocker team"
          />
        </div>

        <div className=" absolute bottom-0 left-0 right-auto top-auto w-full max-w-[25rem] translate-x-24 translate-y-5 shadow-md ">
          <Image
            src={leftBottomImg}
            alt="Parallel team discussing designs with Digilocker team"
          />
        </div>

        <div className=" absolute bottom-0 left-auto right-0  top-auto -translate-x-16 -translate-y-16">
          <div className=" flex flex-col gap-1 rounded-lg bg-[#f3f1ff] px-8 py-6 text-[#111]">
            <span className="block text-[.75rem] font-medium uppercase tracking-wide text-[#111]/40">
              Did you know?
            </span>
            <p className=" w-full max-w-[21rem] text-[1.125rem]">
              Traffic police across India now accept Driving License from
              Digilocker
            </p>
          </div>
        </div>
      </StandardSection>
    </>
  );
};

export default DigilockerFifth;
