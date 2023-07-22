import { FC } from "react";
import Container from "./Container";
import Logo from "./Logo";
import Socials from "./Socials";

const Header: FC = () => {
  return (
    <Container>
      <div className="flex justify-between py-6">
        <Logo />
        <Socials />
      </div>
    </Container>
  );
};

export default Header;
