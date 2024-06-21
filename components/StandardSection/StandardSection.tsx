import { ReactNode } from "react";

type StandardSectionProps = {
  children: ReactNode;
  classname?: string;
};

const StandardSection = (props: StandardSectionProps) => {
  return (
    <section className={props.classname}>
      <div className="mx-auto px-10">
        <div className="mx-auto w-full max-w-7xl">{props.children}</div>
      </div>
    </section>
  );
};

export default StandardSection;
