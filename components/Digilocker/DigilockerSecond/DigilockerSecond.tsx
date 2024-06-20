import StandardSection from "@/components/StandardSection/StandardSection";
import H2 from "@/components/UI/Headings/H2/H2";
import React from "react";

const DigilockerSecond = () => {
  return (
    <StandardSection>
      <div className="py-28">
        <H2 classname=" text-[2.25rem]">
          A great idea <br />
          <span className=" font-bold">that wasn’t working</span>
        </H2>
        <div className=" mt-4">
          <p className=" lh-180 text-[1.25rem] text-[#111]/60">
            Digilocker was a massive step towards India’s paperless governance.
            The platform{" "}
            <span className=" font-bold text-[#111]">
              enables millions to issue and verify government documents &
              certificates digitally,
            </span>{" "}
            thus eliminating the use of physical documents.
            <br />
            <br />
            As great as the idea was, enough people were still not using it
            pertaining to high drop-offs and uninstall rates.
          </p>
        </div>
      </div>
    </StandardSection>
  );
};

export default DigilockerSecond;
