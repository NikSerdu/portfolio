"use client";
import Link from "next/link";
import { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "../Container";
import WorkItem from "../WorkItem";

export type WorkData = {
  id: number;
  title: string;
  desc: string;
  image: string;
  gallery: string[];
  githubLink: string;
  techStack: string[];
};

export const worksData: WorkData[] = [
  {
    id: 0,
    title: "Onlime cinema",
    desc: "A web application for watching your favorite movies and TV shows.",
    image: "/pr1/1.svg",
    gallery: ["/pr1/1.svg", "/pr1/2.svg", "/pr1/3.svg"],
    githubLink: "https://github.com/NikSerdu/online-cinema-frontend",
    techStack: [
      "Next.js",
      "Redux Toolkit",
      "TailwindCSS",
      "Nest.js",
      "Prisma",
      "TypeScript",
    ],
  },
  {
    id: 1,
    title: "Basic landing",
    desc: "",
    image: "/pr2/1.svg",
    gallery: ["/pr2/1.svg"],
    githubLink: "",
    techStack: ["HTML", "CSS"],
  },
  {
    id: 2,
    title: "Application for learn of English words",
    desc: "An application for learning English words, which has 5 modes, different sets of words, as well as favorite words and the ability to add your own.",
    image: "/pr3/1.svg",
    gallery: ["/pr3/1.svg", "/pr3/2.svg", "/pr3/3.svg", "/pr3/4.svg"],
    githubLink: "https://github.com/NikSerdu/Learn-English-Words",
    techStack: ["React", "Redux"],
  },
  {
    id: 3,
    title: "Lorem",
    desc: "Here are some of my recent works.",
    image: "/pr4/1.svg",
    gallery: ["/pr4/1.svg", "/pr4/2.svg", "/pr4/3.svg", "/pr4/4.svg"],
    githubLink: "",
    techStack: ["HTML", "CSS"],
  },
];

const Works: FC = () => {
  return (
    <Container>
      <div className="flex gap-10 items-center mt-36 max-[1050px]:flex-col">
        <div className="w-1/3 max-[1200px]:w-1/4 text-center max-[800px]:w-full">
          <h1 className="text-6xl font-bold">
            My <span className="text-red">works.</span>
          </h1>
          <p className="text-xl mt-2 leading-10">
            Here are some of my recent works.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 max-[775px]:flex-col  justify-center">
          {worksData.map((item) => {
            return (
              <Link href={`works/${item.id.toString()}`} key={item.id}>
                <WorkItem imageLink={item.image} />
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Works;
