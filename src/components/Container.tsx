import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};

export default Container;
