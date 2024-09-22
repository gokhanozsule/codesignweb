import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "./Carousel";
import FooterWorks from "./FooterWorks";

const Works_V02_Int = ({ cloudinaryUrl }) => {
  const bg = `${cloudinaryUrl}/08_ujpych`;
  return (
    <>
      <div
        className="w-full h-[80vh] rounded-3xl bg-cover bg-center custom-shadow z-10 flex flex-col relative  box-border"
        style={{ backgroundImage: `url(${bg})`, borderRadius: "24 px" }}
      >
        <div className="w-full h-full bg-black rounded-3xl opacity-55 absolute left-0 right-0 z-10">
          <div className="absolute text-white z-50 left-[2.5%] bottom-[90%]">
            Year
          </div>
          <div className="absolute text-white z-50 left-[2.5%] bottom-[87%]">
            2022
          </div>
          <Link to="/V02">
            <div
              className="absolute text-white z-50 right-[8%] bottom-[88%] p-1 w-28
                        border border-white rounded-2xl hover:bg-neutral-600 hover:cursor-pointer "
            >
              Exteriors
            </div>
          </Link>
        </div>

        <div className="flex w-[80%] md:w-[55%] lg:w-[50%] h-[68%] lg:h-[90%] translate-x-[12.5%] md:translate-x-[40%] lg:translate-x-[50%] translate-y-[30%] lg:translate-y-[2%] justify-center items-center object-center z-50 bg-neutral-900/40  rounded-3xl">
          {/* <img src={Ana} alt="AnaPers" className=' max-h-full border border-white rounded-3xl '/> */}

          <Carousel cloudinaryUrl={cloudinaryUrl} carouselIndex={5} />
        </div>
      </div>
      <FooterWorks />
    </>
  );
};

export default Works_V02_Int;
