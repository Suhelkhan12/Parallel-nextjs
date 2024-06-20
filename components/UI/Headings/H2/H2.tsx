import React from "react";

interface H2Props {
  children: React.ReactNode;
  classname: string;
}

const H1 = (props: H2Props) => {
  return <h2 className={`${props.classname}`}>{props.children}</h2>;
};

export default H1;
