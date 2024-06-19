import StandardSection from "@/component/StandardSection/StandardSection";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <StandardSection>
        <div className="">
          <div className=" py-[8.75rem]">
            <h1 className="text-[5.625rem] font-extrabold">
              Work that matters.
            </h1>
          </div>
          <div className="mt-">
            <Link href="/work/digilocker" className=" underline text-blue-500">
              <span>Digilocker</span>
            </Link>
          </div>
        </div>
      </StandardSection>
    </main>
  );
};

export default page;
