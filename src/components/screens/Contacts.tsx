import Link from "next/link";
import { FC } from "react";
import { HiMail } from "react-icons/hi";
import { PiTelegramLogo } from "react-icons/pi";
import Container from "../Container";
const Contacts: FC = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center mt-44">
        <div className="">
          <h1 className="text-8xl">
            Let's <span className="text-red">connect.</span>
          </h1>
        </div>
        <div className="text-3xl mt-5 gap-3">
          <Link
            href="mailto:nik.serdu201584@gmail.com"
            className="flex items-center gap-3"
          >
            <HiMail /> nik.serdu201584@gmail.com
          </Link>
          <Link
            href="https://t.me/nikserdu"
            className="flex items-center gap-3"
          >
            <PiTelegramLogo /> @nikserdu
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
