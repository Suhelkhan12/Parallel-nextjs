import Link from "next/link";
import React from "react";
import Navlogo from "./Navlogo";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="padding-global">
        <div className="nav_wrapper container-large">
          <Link href={"#"}>
            <Navlogo />
          </Link>
          <div className="nav_wrapper-link-container">
            <Link href={"#"} className="nav-link">
              About
            </Link>
            <Link href={"#"} className="nav-link">
              Work
            </Link>
            <Link href={"#"} className="nav-link">
              Services
            </Link>
            <Link href={"#"} className="nav-link">
              Blog
            </Link>
            <Link href={"#"} className="nav-link">
              Careers
            </Link>
            <Link href={"#"} className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
