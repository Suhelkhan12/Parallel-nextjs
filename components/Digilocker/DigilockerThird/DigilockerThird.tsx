import Image from "next/image";
import React from "react";
import StandardSection from "@/components/StandardSection/StandardSection";
import H2 from "@/components/UI/Headings/H2/H2";

const DigilockerThird = () => {
  return (
    <StandardSection>
      <div className="py-28">
        <div className="flex items-start gap-[8.75rem]">
          <div>
            <H2 classname=" text-[2.25rem]">
              What was the
              <br />
              <span className="bg-span-bg bg-cover font-bold">problem?</span>
            </H2>
          </div>
          <div className="w-full max-w-[46.5rem]">
            <p className=" lh-180 text-[1.25rem] font-light text-[#111]/60">
              Before we got to work on overhauling the app flow and interface,
              we had to identify the problem. <br /> <br /> We ran a{" "}
              <span className="font-bold text-[#111]">Design sprint</span>
              with the Digilocker team, which started with identifying the
              issues and framing the critical problem statements for the team to
              work on.
            </p>
          </div>
        </div>
        <div className=" mt-24 flex items-center justify-between gap-[8.75rem]">
          <div className=" relative h-[252px] w-full max-w-[21.75rem] ">
            <Image
              src={"/casestudyImages/1.png"}
              alt="People sitting and discussing things"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="relative h-[340px] w-full max-w-[18.375rem]">
            <Image
              src={"/casestudyImages/2.png"}
              alt="Parallel team discussing designs with Digilocker team"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="relative h-[284px] w-full max-w-[21.75rem]">
            <Image
              src={"/casestudyImages/3.png"}
              alt="Parallel team discussing designs with Digilocker team"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </StandardSection>
  );
};

export default DigilockerThird;
