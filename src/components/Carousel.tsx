"use client";

import React, { useState } from "react";
import { motion, useMotionValue, PanInfo } from "framer-motion";
import { cloudinaryUrl, carouselImages } from "@/constants";

const DRAG_BUFFER = 5;

type CarouselImage = string;

type CarouselProps = {
  slug: string;
};

export const Carousel: React.FC<CarouselProps> = ({ slug }) => {
  const imgs = carouselImages[slug] || [];
  const [imgIndex, setImageIndex] = useState(0);

  const dragX = useMotionValue(0);

  const onDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const x = info.offset.x;

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImageIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImageIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden border border-white rounded-3xl">
      {imgIndex < imgs.length - 1 && (
        <button
          onClick={() => setImageIndex((pv) => pv + 1)}
          className="absolute cursor-pointer right-2 top-[42%] bg-slate-700/55 z-50 w-10 h-[40px] border rounded-full flex items-center justify-center text-white"
        >
          &#10596;
        </button>
      )}
      {imgIndex > 0 && (
        <button
          onClick={() => setImageIndex((pv) => pv - 1)}
          className="absolute cursor-pointer left-2 top-[42%] bg-slate-700/55 z-50 w-10 h-[40px] border rounded-full flex items-center justify-center text-white"
        >
          &#10594;
        </button>
      )}
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={{
          type: "ease-in",
          mass: 3,
          stiffness: 500,
          damping: 50,
        }}
        onDragEnd={onDragEnd}
        className="h-[90%] w-full flex text-white justify-start cursor-grab active:cursor-grabbing"
      >
        <Images imgs={imgs} imgIndex={imgIndex} />
      </motion.div>
      <Dots imgs={imgs} imgIndex={imgIndex} setImageIndex={setImageIndex} />
    </div>
  );
};

type ImagesProps = {
  imgs: CarouselImage[];
  imgIndex: number;
};

const Images: React.FC<ImagesProps> = ({ imgs, imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => (
        <motion.div
          key={idx}
          style={{
            backgroundImage: `url(${cloudinaryUrl}/${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            scale: imgIndex === idx ? 0.99 : 0.8,
          }}
          transition={{
            type: "ease-in",
            mass: 3,
            stiffness: 500,
            damping: 50,
          }}
          className="aspect-video min-w-full max-h-full border border-white rounded-3xl mt-[1px] object-center object-cover z-[150]"
        />
      ))}
    </>
  );
};

type DotsProps = {
  imgs: CarouselImage[];
  imgIndex: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Dots: React.FC<DotsProps> = ({ imgs, imgIndex, setImageIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2 text-white">
      {imgs.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImageIndex(idx)}
          className={`h-2 w-2 rounded-full transition-colors ${
            idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
          }`}
        />
      ))}
    </div>
  );
};
