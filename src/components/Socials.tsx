import { FC } from "react";
import { AiFillGithub } from "react-icons/ai";
import { PiTelegramLogoLight } from "react-icons/pi";
import { SlSocialVkontakte } from "react-icons/sl";
type TypeSocials = {
  id: number;
  name: string;
  link: string;
};

const socials: TypeSocials[] = [
  { id: 1, name: "Telegram", link: "" },
  { id: 2, name: "VK", link: "" },
  { id: 3, name: "GitHub", link: "" },
];

const Social: FC = () => {
  return (
    <>
      <ul className="flex gap-8 text-3xl text-white">
        <li className="hover:cursor-pointer">
          <PiTelegramLogoLight />
        </li>
        <li className="hover:cursor-pointer">
          <SlSocialVkontakte />
        </li>
        <li className="hover:cursor-pointer">
          <AiFillGithub />
        </li>
      </ul>
    </>
  );
};

export default Social;
