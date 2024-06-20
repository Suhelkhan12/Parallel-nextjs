import React from "react";

interface H1Props {
  children: React.ReactNode;
  classname: string;
}

const H1 = (props: H1Props) => {
  return <h1 className={`${props.classname}`}>{props.children}</h1>;
};

export default H1;
