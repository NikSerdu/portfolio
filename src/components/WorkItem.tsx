"use client";
import { FC } from "react";
type TypeData = {
  imageLink: string;
};

const WorkItem: FC<TypeData> = ({ imageLink }) => {
  return (
    <div className="">
      <div
        className="rounded-lg hover:scale-[102%] transition-all w-[300px] h-[150px] bg-cover max-[800px]:w-[90vw] max-[800px]:h-[50vw]"
        style={{ backgroundImage: `url('${imageLink}')` }}
      >
        <div className="rounded-lg font-bold bg-[#b835f4] opacity-0 bg-opacity-0 hover:bg-opacity-30 hover:opacity-100 transition-all h-full w-full flex justify-center items-center text-4xl">
          Click me
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
