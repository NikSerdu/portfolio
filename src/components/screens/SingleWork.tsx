"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";
import Container from "../Container";
import { WorkData } from "./Works";

const SingleWork: FC<{ id: number }> = ({ id }) => {
  const [work, setWork] = useState<WorkData>();
  const router = useRouter();

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const { data } = await axios(`/api/works/${id}`);
        setWork(data);
      } catch (error) {
        console.error("Error fetching work:", error);
      }
    };

    fetchWork();
  }, [id]);

  if (!work) {
    return <div>Loading...</div>;
  }

  const handleGoBack = () => {
    router.back();
  };
  return (
    <Container>
      <div
        className="h-8 min-[600px]:w-8 min-[1000px]:absolute min-[1000px]:left-[2%] min-[1000px]:top-[10%]  text-3xl rounded-full border-white border flex justify-center items-center hover:cursor-pointer transition-all hover:bg-white hover:text-bg"
        onClick={() => handleGoBack()}
      >
        <IoMdArrowRoundBack />
      </div>
      <div className="flex gap-4 text-white ml-20 justify-center items-center min-[1000px]:mt-20 mt-4 max-[1000px]:flex-col max-[1000px]:ml-0 max-[1000px]:px-5">
        <div className="w-[55%] max-[1000px]:w-full">
          <Carousel showStatus={false} showThumbs={false} dynamicHeight={true}>
            {work.gallery.map((img) => (
              <div className="" key={img}>
                <Image
                  src={img}
                  width={350}
                  height={250}
                  alt="Test"
                  className=""
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="p-4 w-1/3 max-[1000px]:w-full">
          <h2>
            <span className="font-bold">Title:</span> {work.title}
          </h2>
          {work.desc !== "" && <p className="font-bold">Description:</p>}
          {work.desc !== "" && <p>{work.desc}</p>}
          <p className="font-bold">Stack of technologies:</p>
          <ul className="">
            {work.techStack.map((tech) => (
              <li key={tech}>- {tech}</li>
            ))}
          </ul>
          {work.githubLink !== "" && (
            <a href={work.githubLink} className="flex gap-2" target="_blank">
              <span className="font-bold">Github: </span>
              <AiFillGithub className="text-3xl" />
            </a>
          )}
        </div>
      </div>
    </Container>
  );
};

export default SingleWork;
