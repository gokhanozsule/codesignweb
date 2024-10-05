"use client";

import { Carousel } from "@/components/Carousel";
import FooterWorks from "@/components/FooterWorks";
import { backgroundImages } from "@/constants";
import Link from "next/link";

type WorkDetails = {
  title: string;
  year: string;
  size?: string;
  carouselIndex: number;
  links: {
    text: string;
    href: string;
  }[];
};

type ClientComponentProps = {
  workDetails: WorkDetails;
  slug: string;
};

export default function ClientComponent({
  workDetails,
  slug,
}: ClientComponentProps) {
  return (
    <>
      <div
        className="w-full h-[80vh] rounded-3xl bg-cover bg-center custom-shadow z-10 flex flex-col relative box-border"
        style={{
          backgroundImage: `url(${backgroundImages.works})`,
          borderRadius: "24px",
        }}
      >
        <div className="w-full h-full bg-black rounded-3xl opacity-55 absolute left-0 right-0 z-10">
          <div className="absolute text-white z-50 left-[2.5%] bottom-[90%]">
            Year
          </div>
          <div className="absolute text-white z-50 left-[2.5%] bottom-[87%]">
            {workDetails.year}
          </div>
          {workDetails.size && (
            <div className="absolute text-white z-50 left-[14%] bottom-[90%]">
              {workDetails.size}
            </div>
          )}
          {workDetails.links.length > 0 ? (
            <div className="absolute text-white z-50 right-[8%] bottom-[87%] lg:bottom-[80%] p-1 flex flex-row lg:flex-col w-[250px] gap-2">
              {workDetails.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white z-50 p-1 w-28 border border-white rounded-2xl hover:bg-neutral-600 hover:cursor-pointer text-center"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex sm:w-[80%] md:w-[55%] lg:w-[50%] h-[68%] lg:h-[90%] mx-2 sm:mx-0 sm:translate-x-[12.5%] md:translate-x-[40%] lg:translate-x-[50%] translate-y-[30%] lg:translate-y-[2%] justify-center items-center object-center z-50 bg-neutral-900/40 rounded-3xl">
          <Carousel slug={slug} />
        </div>
      </div>
      <FooterWorks />
    </>
  );
}
