import Image from "next/image";
import React from "react";
import StandardSection from "@/components/StandardSection/StandardSection";
import H2 from "@/components/UI/Headings/H2/H2";
import img1 from "../../../public/casestudyImages/1.png";
import img2 from "../../../public/casestudyImages/2.png";
import img3 from "../../../public/casestudyImages/3.png";

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
          <Image src={img1} alt="People sitting and discussing things" />
          <Image
            src={img2}
            alt="Parallel team discussing designs with Digilocker team"
          />
          <Image
            src={img3}
            alt="Parallel team discussing designs with Digilocker team"
          />
        </div>
      </div>
    </StandardSection>
  );
};

export default DigilockerThird;
