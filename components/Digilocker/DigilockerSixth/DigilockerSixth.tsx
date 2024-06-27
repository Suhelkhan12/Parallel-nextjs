import H2 from "@/components/UI/Headings/H2/H2";
import Image from "next/image";
import leftImage from "../../../public/casestudyImages/lala.png";

const DigilockerSixth = () => {
  return (
    <section className=" pt-[8.75rem] ">
      <div className=" flex items-center">
        <div className=" flex w-full max-w-[50%] justify-end py-20 pl-10 pr-[5.5rem]">
          <div className=" w-full max-w-lg">
            <span className="block font-medium uppercase -tracking-tight text-[#111]/40">
              1/2
            </span>
            <H2 classname=" text-[2.25rem] lh-140 mt-4">
              <span className="font-bold text-[#111]">
                Facilitating discovery
              </span>{" "}
              before a user signs up
            </H2>
            <div className=" mt-4 w-full">
              <p className=" lh-180 text-[1.125rem] font-light text-[#111]/60">
                Realising how crucial it was to educate the users on the usage
                of the Digilocker, we added introductory screens as a part of
                the pre-onboarding so{" "}
                <span className=" font-bold text-[#111]">
                  users understood what they could do
                </span>{" "}
                with the app and how to do it{" "}
                <span className=" font-bold text-[#111]">
                  even before signing up.
                </span>{" "}
                <br />
                <br />
                Now, information like uploaded documents are not considered
                valid for official purposes and Digilocker’s documents are
                legally valid under the IT Act were{" "}
                <span className="font-bold text-[#111]">
                  clearly communicated
                </span>{" "}
                to the user.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[50%]">
          <Image
            src={leftImage}
            alt="Person hand holding phone which shows digilocker screen."
            priority
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default DigilockerSixth;
