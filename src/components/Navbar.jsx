import React, { useEffect, useState } from "react";
import logo from "../assets/images/Codesign_Logo.png";
import menu from "../assets/images/icons8-menu-50.png";
import close from "../assets/images/icons8-close-64.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const [isMenu, setIsMenu] = useState(false);

  const location = useLocation();

  // Close the menu when the route changes
  useEffect(() => {
    setIsMenu(false);  // Reset menu to closed state
  }, [location]);

  return (
    <div className="w-full h-10 text-white flex justify-between border border-gray-400 items-center rounded-3xl z-30 custom-shadow relative">
      <Link to="/Welcome">
        <div className="flex justify-center items-center text-sm sm:text-base gap-4 cursor-pointer hover:scale-90 hover:pl-[2px] ml-0 origin-left transition-all">
          <img
            src={logo}
            className="w-10 h-10 p-1 rounded-full border border-black invert hover:scale-90 hover:bg-[#525253] transition-all"
          />
          Interactive Model
        </div>
      </Link>
      <Link to="/">
        <div className="w-60 flex mr-4 sm:ml-10 items-center justify-center cursor-pointer">
          <div className="flex items-end justify-center rounded-xl p-1 cursor-pointer hover:scale-90 hover:bg-[#525253] transition-all">
            CoDeSiGn
          </div>
        </div>
      </Link>
      <div className="mx-4 hidden sm:flex justify-center items-start gap-2">
        <Link to="/Works">
          <button className="rounded-xl p-1 cursor-pointer hover:scale-90 hover:bg-[#525253] transition-all">
            Works
          </button>
        </Link>
        <Link to="/About">
          <button className="rounded-xl p-1 cursor-pointer hover:scale-90 hover:bg-[#525253] transition-all">
            About
          </button>
        </Link>
        <Link to="/Contact">
          <button className="rounded-xl p-1 cursor-pointer hover:scale-90 hover:bg-[#525253] transition-all">
            Contact
          </button>
        </Link>
      </div>
      <div className="flex sm:hidden">
          {!isMenu && 
          <img
            src={menu}
            className="w-6 h-6 mr-4 p-1 cursor-pointer rounded-full border border-black invert hover:scale-90 hover:bg-[#525253] transition-all"
            onClick={() => setIsMenu(!isMenu)}
          />}
          {isMenu && 
          <img
            src={close}
            className="w-6 h-6 mr-4 p-1 cursor-pointer rounded-full border border-black invert hover:scale-90 hover:bg-[#525253] transition-all"
            onClick={() => setIsMenu(!isMenu)}
          />}
      </div>
      {isMenu &&
      <div className="w-full h-[270px] absolute sm:hidden top-[100%] left-0 bg-gray-950/75 border border-gray-400 items-center rounded-3xl ">
        <div className="mx-4 my-16 flex flex-col justify-center items-center gap-2 text-lg">
        <Link to="/Works">
          <button className="rounded-xl p-1 cursor-pointer hover:scale-90 hover:bg-[#525253] transition-all">
            Works
          </button>
        </Link>
        <Link to="/About">
          <button className="rounded-xl p-1 cursor-pointer hover:scale-90 hover:bg-[#525253] transition-all">
            About
          </button>
        </Link>
        <Link to="/Contact">
          <button className="rounded-xl p-1 cursor-pointer hover:scale-90 hover:bg-[#525253] transition-all">
            Contact
          </button>
        </Link>
      </div>
      </div>}
    </div>
  );
};

export default Navbar;
