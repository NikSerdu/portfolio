import Image from "next/image";
import { FC } from "react";

const TopLeftImg: FC = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge -z-10">
      <Image
        alt="Top left image"
        src={"/top-left-img.png"}
        width={405}
        height={411}
      />
    </div>
  );
};

export default TopLeftImg;
