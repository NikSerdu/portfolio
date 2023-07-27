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
      <div className="flex gap-4 text-5xl flex-wrap max-[1025px]:justify-center">
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
      <ul className="">
        <li>
          &#62; Entered the TOP 10 at the Crimeweb 2022 Web Programming Olympiad
        </li>
        <li>
          &#62; Took 3rd place in the International English Language Olympiad
          &#34;Ermak&#34;
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
          Higher education in the specialty &#34;Software Engineering&#34; of
          the V.I.Vernadsky KFU
        </p>
      </div>
    ),
  },
];
const About: FC = () => {
  const [aboutIndex, setAboutIndex] = useState(0);
  return (
    <Container>
      <div className="flex gap-20 mt-28 max-[1025px]:flex-col max-[1025px]:justify-center">
        <div className="w-2/5 max-[1025px]:w-full max-[1025px]:text-center">
          <div className="font-bold text-7xl">
            About <span className="text-red">me.</span>
          </div>
          <div className="text-lg leading-10">
            I have been engaged in web development for 1.5 years. The main
            direction is frontend, but there is also experience with backend
            (Nest.js, Prisma, familiar with JWT authorization). At the moment I
            am studying in the IT direction. There is also knowledge in the
            field of computer networks, configuring Cisco equipment.
          </div>
        </div>
        <div className="w-3/5 max-[1025px]:w-full">
          <div className="flex gap-10 text-xl max-[1025px]:justify-center">
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
