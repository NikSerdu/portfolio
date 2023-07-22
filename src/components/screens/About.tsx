"use client";
import cn from "clsx";
import { FC, useState } from "react";
import {
  BiLogoCss3,
  BiLogoDocker,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import Container from "../Container";
const aboutData = [
  {
    id: 0,
    name: "Skills",
    content: (
      <div className="flex gap-4 text-5xl">
        <BiLogoHtml5 />
        <BiLogoCss3 />
        <BiLogoJavascript />
        <BiLogoReact />
        <BiLogoRedux />
        <TbBrandNextjs />
        <BiLogoDocker />
        <BiLogoTailwindCss />
      </div>
    ),
  },
  {
    id: 1,
    name: "Awards",
    content: (
      <ul className="list-disc">
        <li>
          Вошёл в ТОП-10 на олимпиаде по web-программироваю CrimeaWeb 2022
        </li>
        <li>
          Занял 3 место в международной олимпиаде по анлийскому языку "Ермак"
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    name: "Education",
    content: (
      <div>
        <p>
          Высшее образование по специальности "Программная инженерия" КФУ
          им.В.И.Вернадского
        </p>
      </div>
    ),
  },
];
const About: FC = () => {
  const [aboutIndex, setAboutIndex] = useState(0);
  return (
    <Container>
      <div className="flex gap-20 mt-44">
        <div className="max-w-2xl">
          <div className="font-bold text-7xl">
            Lorem ipsum <span className="text-red">dolor</span> sit amet.
          </div>
          <div className="text-lg leading-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            natus quo ipsa eveniet tenetur molestiae quaerat unde facilis
            quisquam rem.
          </div>
        </div>
        <div className="w-[480px]">
          <div className="flex gap-10 text-xl">
            {aboutData.map((item) => {
              return (
                <div
                  key={item.id}
                  className={cn(
                    "hover:cursor-pointer relative after:h-1 after:w-8 after:absolute after:-bottom-1 after:left-0 transition-all duration-[0.5s] after:transition-all after:duration-[0.5s]",
                    {
                      "text-red after:bg-red after:w-[100%]":
                        aboutIndex === item.id,
                      " after:bg-white": aboutIndex !== item.id,
                    }
                  )}
                  onClick={() => setAboutIndex(item.id)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-2xl">{aboutData[aboutIndex].content}</div>
        </div>
      </div>
    </Container>
  );
};

export default About;
