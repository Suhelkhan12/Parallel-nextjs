import Image from "next/image";
import H2 from "@/components/UI/Headings/H2/H2";
import img1 from "../../../public/casestudyImages/4.png";

const DigilockerFourth = () => {
  return (
    <section className=" mb-14 flex">
      <div className=" flex w-full max-w-[50%] justify-end py-20 pl-10 pr-[5.75rem] ">
        <div className=" w-full max-w-[31.875rem]">
          <span className="block font-medium uppercase -tracking-tight text-[#111]/40">
            Problem 1
          </span>
          <H2 classname=" text-[2.25rem] lh-140 mt-4">
            Users didn’t really <br />{" "}
            <span className="bg-span-bg bg-cover font-bold text-[#111]">
              understand
            </span>{" "}
            <br /> what Digilocker was
          </H2>
          <div className=" mt-4 w-full max-w-[30.3125rem]">
            <p className=" lh-180 text-[1.125rem] font-light text-[#111]/60">
              People were confusing Digilocker{" "}
              <span className="font-bold text-[#111]">
                for a drive where they could upload documents.
              </span>
              <br />
              <br />
              This was causing a major trust problem because user-uploaded
              documents were not considered valid for official purposes and were
              rejected by government officials when presented by the users.{" "}
              <br /> <br />
              Moreover, users were misusing the drive space provided to upload
              images, music and movies.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex w-full max-w-[50%] flex-col justify-center">
        <Image
          src={img1}
          alt="Parallel team discussing designs with Digilocker team"
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default DigilockerFourth;
