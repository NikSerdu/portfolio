import { FC } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import Container from "../Container";
const servicesData = [
  {
    id: 0,
    icon: <MdComputer />,
    name: "Development",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,cupiditate?",
  },
  {
    id: 1,
    icon: <MdComputer />,
    name: "Support",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,cupiditate?",
  },
  {
    id: 2,
    icon: <MdComputer />,
    name: "Modification",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,cupiditate?",
  },
];

const Services: FC = () => {
  return (
    <div>
      <Container>
        <div className="flex gap-10 items-center mt-44">
          <div className="w-1/2">
            <h1 className="text-6xl font-bold">
              My services<span className="text-red">.</span>
            </h1>
            <p className="text-xl mt-2 leading-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              cupiditate? Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Quis, nam.
            </p>
          </div>
          <div className="flex items-center gap-5">
            {servicesData.map((item) => {
              return (
                <div
                  className="bg-gr flex flex-col w-[200px] h-[300px] justify-between p-4 rounded-xl hover:cursor-pointer hover:scale-[103%] transition-all"
                  key={item.id}
                >
                  <div className="text-red text-5xl">{item.icon}</div>
                  <div className="">
                    <div className="font-bold text-xl">{item.name}</div>
                    <div className="">{item.content}</div>
                  </div>
                  <div className="text-3xl">
                    <BsArrowUpRight />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
