import Image from "next/image";
import leftImage from "../../../public/casestudyImages/ddd.png";
import H2 from "@/components/UI/Headings/H2/H2";

const DigilockerSeventh = () => {
  return (
    <section className=" flex items-center">
      <div className=" w-full max-w-[50%]">
        <Image
          src={leftImage}
          alt="User profile image of didilocker app"
          placeholder="blur"
        />
      </div>
      <div className=" flex w-full max-w-[50%] items-center py-20 pl-[90px] pr-8">
        <div>
          <span className="block font-medium uppercase -tracking-tight text-[#111]/40">
            2/2
          </span>
          <H2 classname=" text-[2.25rem] lh-140 mt-4">
            <span className="font-bold text-[#111]">Verification badge</span> as
            a trust marker
          </H2>
          <div className=" mt-4 w-full">
            <p className=" lh-180 text-[1.125rem] font-light text-[#111]/60">
              We added a prominent verification mark to{" "}
              <span className=" font-bold text-[#111]">
                help both users and authorities distinguish
              </span>{" "}
              between verified and self-uploaded non-verified documents. to the
              user.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigilockerSeventh;
