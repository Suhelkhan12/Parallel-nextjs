import React from "react";
import leftImage from "../../../public/casestudyImages/ddd.png";
import H2 from "@/components/UI/Headings/H2/H2";
import Image from "next/image";

const DigilockerThirteen = () => {
  return (
    <section className=" mt-[8.75rem] flex items-center">
      <div className=" w-full max-w-[50%]">
        <Image
          src={leftImage}
          alt="User profile image of didilocker app"
          placeholder="blur"
          loading="lazy"
        />
      </div>
      <div className=" flex w-full max-w-[50%] items-center py-20 pl-[90px] pr-8">
        <div>
          <div className=" mt-4 w-full max-w-[35rem]">
            <p className=" lh-180 text-[1.125rem] font-light text-[#111]/60">
              We revamped the home screen to serve the users{" "}
              <span className=" font-bold text-[#111]">
                categorically with different types of documents
              </span>{" "}
              they could access though Digilocker and even{" "}
              <span className=" font-bold text-[#111]">added the samples</span>{" "}
              to what these documents would look like. <br /> <br /> As a
              result, the average documents fetched per user went from
            </p>
          </div>
          <H2 classname=" text-[2.25rem] lh-140 mt-4">
            <span className="font-bold text-[#111]">2.7 to 3.4</span> in just a
            matter of weeks.
          </H2>
        </div>
      </div>
    </section>
  );
};

export default DigilockerThirteen;
