import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ text, src, to = null }) => {
  const content = (
    <>
      <img src={src} className="w-full rounded-3xl custom-shadow " />
      <div className="absolute left-0 bottom-[20%] w-full h-10 bg-slate-200/70 flex text-center items-center justify-center  ">
        {text}
      </div>
    </>
  );

  if (to == null) {
    return content;
  }

  return (
    <Link
      className="max-w-[90%] rounded-3xl custom-shadow opacity-90 text-[12px] sm:text-lg
    hover:opacity-100 hover:scale-[1.02] hover:border-[2px] hover:border-[#e5e4e2] transition-all cursor-pointer relative"
      to={to}
    >
      {content}
    </Link>
  );
};

export default ProjectCard;
