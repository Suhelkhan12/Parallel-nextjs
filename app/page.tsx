import StandardSection from "@/components/StandardSection/StandardSection";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <StandardSection>
        <div>
          <div className=" py-[8.75rem]">
            <h1 className="text-[5.625rem] font-extrabold">
              Work that matters.
            </h1>
          </div>
          <div className="">
            <Link href="/work/digilocker" className=" text-blue-500 underline">
              <span>Digilocker</span>
            </Link>
          </div>
        </div>
      </StandardSection>
    </main>
  );
};

export default page;
