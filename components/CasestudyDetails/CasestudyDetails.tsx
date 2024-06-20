import { CasestudyDetailProps } from "@/types";
import H1 from "../UI/Headings/H1/H1";
import Image from "next/image";

const CasestudyDetails = (props: CasestudyDetailProps) => {
  return (
    <>
      <div className=" relative h-8 max-w-32">
        <Image src={props.image} alt="Digilcoker logo" fill priority />
      </div>
      <H1 classname=" text-[4.5rem] font-bold mt-4">{props.heading}</H1>
      <p className=" mt-2 text-[1.75rem]">
        Reimagining digital documents for a billion Indians
      </p>
    </>
  );
};

export default CasestudyDetails;
