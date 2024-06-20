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
import { Suspense } from "react";

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
    </>
  );
};

export default page;
