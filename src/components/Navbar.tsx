"use client";

import logo from "@/images/Codesign_Logo.png";
import close from "@/images/icons8-close-64.png";
import menu from "@/images/icons8-menu-50.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      prefetch
      className={`rounded-xl p-1 hover:scale-90 hover:bg-[#525253] transition-all ${
        isActive ? "bg-[#525253]" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="absolute w-full h-10 text-white flex justify-between border border-gray-400 items-center rounded-3xl z-30 custom-shadow">
      <NavLink href="welcome">
        <span className="flex justify-center items-center text-sm sm:text-base gap-4 hover:scale-90 hover:pl-[2px] ml-0 origin-left transition-all">
          <img
            src={logo.src}
            className="w-10 h-10 p-1 rounded-full border border-black invert hover:scale-90 hover:bg-[#525253] transition-all"
          />
          Interactive Model
        </span>
      </NavLink>
      <NavLink href="/">
        <span className="flex items-end justify-center rounded-xl p-1 hover:scale-90 hover:bg-[#525253] transition-all">
          CoDeSiGn
        </span>
      </NavLink>
      <div className="mx-4 hidden sm:flex justify-center items-start gap-2">
        <NavLink href="/works">Works</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
      <div className="flex sm:hidden">
        {!isMenu && (
          <img
            src={menu.src}
            className="w-6 h-6 mr-4 p-1  rounded-full border border-black invert hover:scale-90 hover:bg-[#525253] transition-all"
            onClick={() => setIsMenu(!isMenu)}
          />
        )}
        {isMenu && (
          <img
            src={close.src}
            className="w-6 h-6 mr-4 p-1  rounded-full border border-black invert hover:scale-90 hover:bg-[#525253] transition-all"
            onClick={() => setIsMenu(!isMenu)}
          />
        )}
      </div>
      {isMenu && (
        <div className="w-full h-[270px] absolute sm:hidden top-[100%] left-0 bg-gray-950/75 border border-gray-400 items-center rounded-3xl ">
          <div className="mx-4 my-16 flex flex-col justify-center items-center gap-2 text-lg">
            <NavLink href="/works">Works</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

Navbar.displayName = "Navbar";
