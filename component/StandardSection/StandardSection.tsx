import { ReactNode } from "react";

const StandardSection = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <div className="padding-global">
        <div className="container-large">{children}</div>
      </div>
    </section>
  );
};

export default StandardSection;
