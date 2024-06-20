import { CasestudyDetailProps, CasestudyBottomProps } from "@/types";

// for case study top section
export const digilockerDetails: CasestudyDetailProps = {
  image: "/casestudyImages/digi.svg",
  heading: "Every document, all at once",
  subheading: "Reimagining digital documents for a billion Indians",
};

// for case study bottom section
export const digilockerBottomDetails: CasestudyBottomProps = {
  platform: {
    heading: "Platform",
    subheading: "Mobile",
  },
  deliverables: {
    heading: "Deliverables",
    subheading: "Design sprint, Testing & Interface design",
  },
  client: {
    heading: "Meet the client",
    linkText: "Digilocker",
    linkUrl: "https://www.digilocker.gov.in/",
  },
};
