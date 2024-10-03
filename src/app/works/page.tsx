import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects, backgroundImages } from "@/constants";

export default function Works() {
  return (
    <div
      className="w-full h-full rounded-3xl bg-cover bg-center custom-shadow z-10 flex flex-col relative"
      style={{
        backgroundImage: `url(${backgroundImages.works})`,
        borderRadius: "24px",
      }}
    >
      <div className="w-full h-full bg-black rounded-3xl opacity-55 absolute left-0 right-0 pointer-events-none" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 h-full w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            text={project.text}
            year={project.year}
            src={project.src}
          />
        ))}
      </div>
    </div>
  );
}
