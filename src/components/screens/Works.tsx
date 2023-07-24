"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AiFillGithub } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "../Container";
import BasicModal from "../Modal";
import WorkItem from "../WorkItem";
const worksData = [
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
    <div>
      <Container>
        <div className="flex gap-10 items-center mt-28">
          <div className="w-1/3">
            <h1 className="text-6xl font-bold">
              My <span className="text-red">works.</span>
            </h1>
            <p className="text-xl mt-2 leading-10">
              Here are some of my recent works.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {worksData.map((item) => {
              return (
                <BasicModal
                  key={item.id}
                  openBtn={<WorkItem imageLink={item.image} />}
                >
                  <div className="flex gap-4 text-bg">
                    <div className="w-2/3">
                      <Carousel
                        showStatus={false}
                        showThumbs={false}
                        dynamicHeight={true}
                      >
                        {item.gallery.map((img) => (
                          <div className="" key={img}>
                            <Image
                              src={img}
                              width={350}
                              height={250}
                              alt="Test"
                            />
                          </div>
                        ))}
                      </Carousel>
                    </div>

                    <div className="p-4 w-1/3">
                      <h2>
                        <span className="font-bold">Title:</span> {item.title}
                      </h2>
                      {item.desc !== "" && (
                        <p className="font-bold">Description:</p>
                      )}
                      {item.desc !== "" && <p>{item.desc}</p>}
                      <p className="font-bold">Stack of technologies:</p>
                      <ul className="">
                        {item.techStack.map((tech) => (
                          <li key={tech}>- {tech}</li>
                        ))}
                      </ul>
                      {item.githubLink !== "" && (
                        <Link href={item.githubLink} className="flex gap-2">
                          <span className="font-bold">Github: </span>
                          <AiFillGithub className="text-3xl" />
                        </Link>
                      )}
                    </div>
                  </div>
                </BasicModal>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Works;
