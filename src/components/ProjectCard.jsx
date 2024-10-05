import React from "react";
import Link from "next/link";

const ProjectCard = ({ text, src, year, slug = "" }) => {
  const content = (
    <>
      <img src={src} className="w-full rounded-3xl custom-shadow " />
      <div className="absolute left-0 bottom-[20%] w-full h-10 bg-slate-200/70 flex text-center items-center justify-center">
        {text}
      </div>
    </>
  );

  if (slug == null) {
    return content;
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center border rounded-3xl border-white">
      <Link
        className="max-w-[80%] max-h-[85%] rounded-3xl custom-shadow opacity-90 text-[12px] sm:text-lg
      hover:opacity-100 hover:scale-[1.02] hover:border-[2px] hover:border-[#e5e4e2] transition-all cursor-pointer relative"
        href={`works/${slug}`}
      >
        {content}
      </Link>
      <div className="text-white">{year}</div>
    </div>
  );
};

export default ProjectCard;
