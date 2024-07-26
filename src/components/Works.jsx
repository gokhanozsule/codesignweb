import React from "react";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

const Works = ({ cloudinaryUrl }) => {
  const bg = `${cloudinaryUrl}/08_ujpych`;
  const render01 = `${cloudinaryUrl}/01AnaPerspektif_binjqw`;
  const render02 = `${cloudinaryUrl}/Image01_a3wraq`;
  const render03 = `${cloudinaryUrl}/05_gtdpby`;
  const render04 = `${cloudinaryUrl}/03_nkgusl`;

  return (
    <>
      <div
        className="w-full h-full rounded-3xl bg-cover bg-center custom-shadow z-10 flex flex-col relative"
        style={{ backgroundImage: `url(${bg})`, borderRadius: "24 px" }}
      >
        <div className="w-full h-full bg-black rounded-3xl opacity-55 absolute left-0 right-0"></div>

        <div className="flex flex-col h-full w-full justify-between ">
          <div className="w-full flex h-full">
            <div className="w-1/2 h-1/2 ">
              <div className="flex flex-col h-full justify-center items-center text-center w-full border rounded-3xl border-white">
                <ProjectCard
                  to={"/MixedUse"}
                  text={"MIXED USE DEVELOPMENT"}
                  src={render01}
                />
                <div className="text-white">2022</div>
              </div>
              <div className="flex flex-col h-full justify-center items-center text-center w-full border rounded-3xl border-white">
                <ProjectCard
                  to={"/V01"}
                  text={"PRIVATE VILLA"}
                  src={render02}
                />
                <div className="text-white">2024</div>
              </div>
            </div>
            <div className="w-1/2 h-1/2 ">
              <div className="flex flex-col h-full justify-center items-center text-center w-full border rounded-3xl border-white">
                <ProjectCard to={"/V02"} text={"VILLA 02"} src={render03} />
                <div className="text-white">2023</div>
              </div>
              <div className="flex flex-col h-full justify-center items-center text-center w-full border rounded-3xl border-white">
                <ProjectCard to={"/Carport"} text={"CARPORT"} src={render04} />
                <div className="text-white">2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <FooterWorks/> */}
    </>
  );
};

export default Works;
