import { Suspense } from "react";
import CasestudyBottom from "@/components/CasestudyBottom/CasestudyBottom";
import CasestudyDetails from "@/components/CasestudyDetails/CasestudyDetails";
import CasestudyVideoFallback from "@/components/CasestudyVideoFallback/CasestudyVideoFallback";
import DigilockerSecond from "@/components/Digilocker/DigilockerSecond/DigilockerSecond";
import DigilockerThird from "@/components/Digilocker/DigilockerThird/DigilockerThird";
import StandardSection from "@/components/StandardSection/StandardSection";
import {
  digilockerDetails,
  digilockerBottomDetails,
} from "@/constants/casestudydata/data";
import DigilockerFourth from "@/components/Digilocker/DigilockerFourth/DigilockerFourth";
import DigilockerFifth from "@/components/Digilocker/DigilockerFifth/DigilockerFifth";
import DigilockerSixth from "@/components/Digilocker/DigilockerSixth/DigilockerSixth";
import DigilockerNinth from "@/components/Digilocker/DigilockerNine/DigilockerNinth";
import DigilockerTenth from "@/components/Digilocker/DigilockerTenth/DigilockerTenth";
import DigilockerEleven from "@/components/Digilocker/DigilockerEleven/DigilockerEleven";
import DigilockerTwelfth from "@/components/Digilocker/DigilockerTwelft/DigilockerTwelft";
import DigilockerEight from "@/components/Digilocker/DigilockerEight/DigilockerEight";
import DigilockerSeventh from "@/components/Digilocker/DigilockerSeventh/DigilockerSeventh";
import DigilockerThirteen from "@/components/Digilocker/DigilockerThirteen/DigilockerThirteen";
import DigilockerFourteen from "@/components/Digilocker/DigilockerFourteen/DigilockerFourteen";

const page = () => {
  return (
    <>
      <>
        <StandardSection>
          <div className=" mt-[5.25rem]">
            <div className=" pb-14 pt-8">
              <CasestudyDetails {...digilockerDetails} />
            </div>
          </div>
        </StandardSection>
        <div className=" h-screen">
          <Suspense fallback={<CasestudyVideoFallback />}>
            <video autoPlay loop className="w-full">
              <source
                src="https://cdn.prod.website-files.com/654b1d09f45e7fa434ed24ef/654b1d09f45e7fa434ed30bb_Digilocker%20Animation_Final%20(1)-transcode.mp4"
                type="video/mp4"
              />
            </video>
          </Suspense>
        </div>
        <StandardSection>
          <CasestudyBottom {...digilockerBottomDetails} />
        </StandardSection>
      </>
      <DigilockerSecond />
      <DigilockerThird />
      <DigilockerFourth />
      <DigilockerFifth />
      <DigilockerSixth />
      <DigilockerSeventh />
      <DigilockerEight />
      <DigilockerNinth />
      <DigilockerTenth />
      <DigilockerEleven />
      <DigilockerTwelfth />
      <DigilockerThirteen />
      <DigilockerFourteen />
    </>
  );
};

export default page;
