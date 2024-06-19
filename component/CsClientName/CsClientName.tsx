import Link from "next/link";
import React from "react";

const CsClientName = () => {
  return (
    <div>
      <span className="cs-bottom-gray-text">Meet the client</span>
      <div className="cs-bottom-black-text">
        Visit{" "}
        <span>
          <Link href={"#"} className="website_link-style">
            Digilocker
          </Link>
        </span>
      </div>
    </div>
  );
};

export default CsClientName;
