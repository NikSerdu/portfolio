import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
export default function Home() {
  return (
    <div className="mt-40 ">
      <Container>
        <div className=" text-white max-w-2xl">
          <div className="text-6xl font-bold">
            <p>Nikolay Serduchenko</p>
            <p className="text-red ">frontend developer</p>
          </div>
          <p className="text-xl mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit
            itaque deserunt harum modi, iure perferendis esse voluptatem
            accusantium excepturi ullam labore consequuntur nulla culpa facere
            necessitatibus deleniti iusto saepe.
          </p>
        </div>
        <div className="mt-10  hover:cursor-pointer ">
          <Link
            href={"/works"}
            className="relative w-56 h-56 flex justify-center items-center"
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
      {/* <Image
        src={"/my-photo.png"}
        alt="My photo"
        width={706}
        height={1080}
        className="absolute right-0 bottom-0 h-full"
      /> */}
    </div>
  );
}
