import { ReactNode } from "react";

const StandardSection = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <div className="mx-auto px-10">
        <div className="mx-auto w-full max-w-[90rem]">{children}</div>
      </div>
    </section>
  );
};

export default StandardSection;
