import Link from "next/link";
import { FC } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoGmail, BiLogoTelegram } from "react-icons/bi";

const socials = [
  { id: 0, icon: <BiLogoTelegram />, link: "https://t.me/nikserdu" },
  { id: 1, icon: <BiLogoGmail />, link: "mailto:nik.serdu201584@gmail.com" },
  { id: 2, icon: <AiFillGithub />, link: "https://github.com/NikSerdu" },
];

const Social: FC = () => {
  return (
    <>
      <ul className="flex gap-8 text-3xl text-white">
        {socials.map((item) => {
          return (
            <Link
              href={item.link}
              className="hover:cursor-pointer"
              key={item.id}
            >
              {item.icon}
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Social;
