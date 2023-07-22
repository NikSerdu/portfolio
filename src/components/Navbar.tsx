"use client";
import cn from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import {
  HiHome,
  HiMail,
  HiUser,
  HiViewBoards,
  HiViewGrid,
} from "react-icons/hi";
const icons = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "About", path: "/about", icon: <HiUser /> },
  { name: "Services", path: "/services", icon: <HiViewGrid /> },
  { name: "Works", path: "/works", icon: <HiViewBoards /> },
  { name: "Contacts", path: "/contacts", icon: <HiMail /> },
];

const Navbar: FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 text-white text-3xl bg-white bg-opacity-25 rounded-full fixed right-[2%] top-[30%] py-2">
      {icons.map((item) => {
        return (
          <Link
            href={item.path}
            className={cn("p-2", {
              "text-red": item.path === pathname,
            })}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
