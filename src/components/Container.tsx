import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto max-[1315px]:px-4 max-[1450px]:pr-16 mb">
      {children}
    </div>
  );
};

export default Container;
