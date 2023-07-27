import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Container from "../Container";
const Home: FC = () => {
  return (
    <div className="mt-28">
      <Image
        src={"/right-bottom-img.png"}
        alt="Home bg"
        width={1439}
        height={847}
        className="mix-blend-color-dodge absolute max-[760px]:hidden bottom-0 right-0 -z-10"
      />
      <Container>
        <div className=" text-white max-w-2xl max-[760px]:text-center">
          <div className="text-6xl font-bold">
            <p>Nikolay Serduchenko</p>
            <p className="text-red ">frontend developer</p>
          </div>
          <p className="text-xl mt-3">
            It&#39;s good when work intersects with hobbies.
          </p>
        </div>
        <div className="mt-10  hover:cursor-pointer ">
          <Link
            href={"/works"}
            className="relative w-40 h-40 flex justify-center items-center max-[760px]:mx-auto"
          >
            <Image
              alt="My projects"
              src={"/my-projects.svg"}
              width={313}
              height={313}
              className="animate-spin-slow h-full w-full"
            />
            <FaLongArrowAltRight className="absolute text-4xl" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
