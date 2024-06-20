import Link from "next/link";
import { CasestudyBottomProps } from "@/types";

const CasestudyBottom = (props: CasestudyBottomProps) => {
  return (
    <div className="flex gap-[12.5rem] border-b border-b-black/20 pb-14 pt-24">
      <div>
        <div className=" lh-180 text-[1.25rem] font-medium text-[#111]/40">
          {props.platform?.heading}
        </div>
        <div className=" lh-180 text-[1.25rem] font-medium text-[#111]">
          {props.platform?.subheading}
        </div>
      </div>
      <div>
        <div className=" lh-180 text-[1.25rem] font-medium text-[#111]/40">
          {props.deliverables?.heading}
        </div>
        <div className=" lh-180 text-[1.25rem] font-medium text-[#111]">
          {props.deliverables?.subheading}
        </div>
      </div>
      <div>
        <div className=" lh-180 text-[1.25rem] font-medium text-[#111]/40">
          {props.client?.heading}
        </div>
        <div className=" lh-180 text-[1.25rem] font-medium text-[#111]">
          Visit{" "}
          {typeof props.client?.linkUrl === "string" && (
            <Link
              href={props.client?.linkUrl}
              target="_blank"
              className=" underline underline-offset-8"
            >
              {props.client?.linkText}
            </Link>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CasestudyBottom;
