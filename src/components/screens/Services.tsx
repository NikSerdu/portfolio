import Link from "next/link";
import { FC } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { GiAutoRepair } from "react-icons/gi";
import { MdComputer, MdSupport } from "react-icons/md";
import Container from "../Container";
const servicesData = [
  {
    id: 0,
    icon: <MdComputer />,
    name: "Development",
    content: "Development of multi-page websites, landings, web-applications.",
  },
  {
    id: 1,
    icon: <MdSupport />,
    name: "Support",
    content: "Support for your sites.",
  },
  {
    id: 2,
    icon: <GiAutoRepair />,
    name: "Modification",
    content: "Completion of your sites or their modification.",
  },
];

const Services: FC = () => {
  return (
    <div>
      <Container>
        <div className="flex gap-10 items-center mt-44">
          <div className="w-1/2">
            <h1 className="text-6xl font-bold">
              My <span className="text-red">services.</span>
            </h1>
            <p className="text-xl mt-2 leading-10">
              I provide various services in web development. Choose and contact
              me.
            </p>
          </div>
          <div className="flex items-center gap-5">
            {servicesData.map((item) => {
              return (
                <Link
                  href={"/contacts"}
                  className="bg-gr flex flex-col w-[200px] h-[300px] justify-between p-4 rounded-xl hover:cursor-pointer hover:scale-[103%] transition-all"
                  key={item.id}
                >
                  <div className="text-red text-5xl">{item.icon}</div>
                  <div className="flex flex-col mb-auto mt-5">
                    <div className="font-bold text-xl">{item.name}</div>
                    <div className="">{item.content}</div>
                  </div>
                  <div className="text-3xl">
                    <BsArrowUpRight />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
