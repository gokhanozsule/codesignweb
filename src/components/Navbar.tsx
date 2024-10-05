"use client";

import logo from "@/images/Codesign_Logo.png";
import close from "@/images/icons8-close-64.png";
import menu from "@/images/icons8-menu-50.png";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  // const pathname = usePathname(); // TODO: use pathname to highlight the current page in the navbar

  return (
    <div className="absolute w-full h-10 text-white flex justify-between border border-gray-400 items-center rounded-3xl z-30 custom-shadow">
      <Link href="welcome">
        <span className="flex justify-center items-center text-sm sm:text-base gap-4 hover:scale-90 hover:pl-[2px] ml-0 origin-left transition-all">
          <img
            src={logo.src}
            className="w-10 h-10 p-1 rounded-full border border-black invert hover:scale-90 hover:bg-[#525253] transition-all"
          />
          Interactive Model
        </span>
      </Link>
      <Link
        href="/"
        className="w-60 flex mr-4 sm:ml-10 items-center justify-center "
      >
        <span className="flex items-end justify-center rounded-xl p-1 hover:scale-90 hover:bg-[#525253] transition-all">
          CoDeSiGn
        </span>
      </Link>
      <div className="mx-4 hidden sm:flex justify-center items-start gap-2">
        <Link
          href="/works"
          prefetch
          className="rounded-xl p-1 hover:scale-90 hover:bg-[#525253] transition-all"
        >
          Works
        </Link>
        <Link
          href="/about"
          prefetch
          className="rounded-xl p-1 hover:scale-90 hover:bg-[#525253] transition-all"
        >
          About
        </Link>
        <Link
          href="/contact"
          prefetch
          className="rounded-xl p-1 hover:scale-90 hover:bg-[#525253] transition-all"
        >
          Contact
        </Link>
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
            <Link href="/works">
              <span className="rounded-xl p-1 hover:scale-90 hover:bg-[#525253] transition-all">
                Works
              </span>
            </Link>
            <Link href="/about">
              <span className="rounded-xl p-1 hover:scale-90 hover:bg-[#525253] transition-all">
                About
              </span>
            </Link>
            <Link href="/contact">
              <span className="rounded-xl p-1 hover:scale-90 hover:bg-[#525253] transition-all">
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

Navbar.displayName = "Navbar";
