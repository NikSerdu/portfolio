import { FC } from "react";
import Container from "../Container";

const Works: FC = () => {
  return (
    <div>
      <Container>
        <div className="flex gap-10 items-center mt-28">
          <div className="w-1/3">
            <h1 className="text-6xl font-bold">
              My works<span className="text-red">.</span>
            </h1>
            <p className="text-xl mt-2 leading-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              cupiditate?Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Quis, nam.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-[400px] h-[200px] bg-[url('/project-1.jpg')] bg-cover bg-center rounded-lg">
              <div className="bg-[#b835f4] opacity-0 bg-opacity-0 hover:bg-opacity-30 hover:opacity-100 transition-all h-full w-full flex justify-center items-center text-4xl">
                Info
              </div>
            </div>
            <div className="w-[400px] h-[200px] bg-[url('/project-1.jpg')] bg-cover bg-center rounded-lg">
              <div className="bg-[#b835f4] opacity-0 bg-opacity-0 hover:bg-opacity-30 hover:opacity-100 transition-all h-full w-full flex justify-center items-center text-4xl">
                Info
              </div>
            </div>
            <div className="w-[400px] h-[200px] bg-[url('/project-1.jpg')] bg-cover bg-center rounded-lg">
              <div className="bg-[#b835f4] opacity-0 bg-opacity-0 hover:bg-opacity-30 hover:opacity-100 transition-all h-full w-full flex justify-center items-center text-4xl">
                Info
              </div>
            </div>
            <div className="w-[400px] h-[200px] bg-[url('/project-1.jpg')] bg-cover bg-center rounded-lg">
              <div className="bg-[#b835f4] opacity-0 bg-opacity-0 hover:bg-opacity-30 hover:opacity-100 transition-all h-full w-full flex justify-center items-center text-4xl">
                Info
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Works;
