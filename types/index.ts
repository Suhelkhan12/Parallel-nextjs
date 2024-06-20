// for case study top part
export interface CasestudyDetailProps {
  image: string;
  heading: string;
  subheading: string;
}

// for case study bottom part
export interface CasestudyBottomProps {
  platform?: {
    heading: string;
    subheading: string;
  };
  deliverables?: {
    heading: string;
    subheading: string;
  };
  client?: {
    heading: string;
    linkText: string;
    linkUrl: string;
  };
}
