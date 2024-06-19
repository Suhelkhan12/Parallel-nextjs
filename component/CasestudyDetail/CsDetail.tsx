import React from "react";
import Image from "next/image";
import StandardSection from "../StandardSection/StandardSection";

const CsDetail = () => {
  return (
    <div className="casestudy_details">
      <StandardSection>
        <div className="">
          <Image
            src={"/casestudyImages/digi.svg"}
            alt="Digilocker logo"
            width={128}
            height={100}
            className=""
          />
        </div>
        <div className="casestudy_detail-heading-wrapper">
          <h1 className="casestudy_detail-heading">
            Every document, all at once
          </h1>
        </div>
        <div className="casestudy_detail-subheading-wrapper">
          <p>Reimagining digital documents for a billion Indians</p>
        </div>
      </StandardSection>
    </div>
  );
};

export default CsDetail;
