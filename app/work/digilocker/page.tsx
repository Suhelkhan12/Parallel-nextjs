import CasestudyBottom from "@/components/CasestudyBottom/CasestudyBottom";
import CasestudyDetails from "@/components/CasestudyDetails/CasestudyDetails";
import StandardSection from "@/components/StandardSection/StandardSection";
import {
  digilockerDetails,
  digilockerBottomDetails,
} from "@/constants/casestudydata/data";

const page = () => {
  return (
    <>
      <div className=" mb-40">
        <StandardSection>
          <div className=" mt-[5.25rem]">
            <div className=" pb-14 pt-8">
              <CasestudyDetails {...digilockerDetails} />
            </div>
          </div>
        </StandardSection>
        <div className=" h-screen">
          <video
            autoPlay
            loop
            className="w-full"
            poster="/casestudyImages/digi-video-poster.png"
          >
            <source
              src="https://cdn.prod.website-files.com/654b1d09f45e7fa434ed24ef/654b1d09f45e7fa434ed30bb_Digilocker%20Animation_Final%20(1)-transcode.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <StandardSection>
          <CasestudyBottom {...digilockerBottomDetails} />
        </StandardSection>
      </div>
    </>
  );
};

export default page;
