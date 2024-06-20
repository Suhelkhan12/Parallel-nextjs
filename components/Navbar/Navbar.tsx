import Link from "next/link";
import StandardSection from "../StandardSection/StandardSection";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[999] w-full bg-white">
      <StandardSection>
        <div className=" flex items-center justify-between py-3">
          <Link href={"/"} className=" text-[2.5rem] italic">
            Parallel
          </Link>
          <div className=" flex items-center gap-10">
            <Link href={"#"} className=" text-[.875rem]">
              About
            </Link>
            <Link href={"#"} className=" text-[.875rem]">
              Word
            </Link>
            <Link href={"#"} className=" text-[.875rem]">
              Services
            </Link>
            <Link href={"#"} className=" text-[.875rem]">
              Careers
            </Link>
            <Link href={"#"} className=" text-[.875rem]">
              Contact Us
            </Link>
          </div>
        </div>
      </StandardSection>
    </nav>
  );
};

export default Navbar;
