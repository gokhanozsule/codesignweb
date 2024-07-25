import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

import MixedUse_0_A1 from "../images/MixedUse/01.jpg";
import MixedUse_0_A2 from "../images/MixedUse/02.jpg";
import MixedUse_0_A3 from "../images/MixedUse/03.png";
import MixedUse_0_A4 from "../images/MixedUse/04.png";
import MixedUse_0_A5 from "../images/MixedUse/05.png";
import MixedUse_0_A6 from "../images/MixedUse/06.png";
import MixedUse_0_A7 from "../images/MixedUse/07.png";
import MixedUse_0_A8 from "../images/MixedUse/08.png";
import MixedUse_0_A9 from "../images/MixedUse/09.jpg";
import MixedUse_0_A10 from "../images/MixedUse/10.jpg";
import MixedUse_0_A11 from "../images/MixedUse/11.jpg";
import MixedUse_0_A12 from "../images/MixedUse/12.jpg";
import MixedUse_0_A13 from "../images/MixedUse/13.jpg";
import MixedUse_0_A14 from "../images/MixedUse/14.png";
import MixedUse_1_A1 from "../images/MixedUse/Interiors/01.jpg";
import MixedUse_1_A2 from "../images/MixedUse/Interiors/02.jpg";
import MixedUse_1_A3 from "../images/MixedUse/Interiors/03.jpg";
import MixedUse_1_A4 from "../images/MixedUse/Interiors/04.jpg";
import MixedUse_1_A5 from "../images/MixedUse/Interiors/05.jpg";
import MixedUse_1_A6 from "../images/MixedUse/Interiors/06.jpg";
import MixedUse_1_A7 from "../images/MixedUse/Interiors/07.jpg";
import MixedUse_1_A8 from "../images/MixedUse/Interiors/08.jpg";
import MixedUse_1_A9 from "../images/MixedUse/Interiors/09.jpg";
import MixedUse_1_A10 from "../images/MixedUse/Interiors/10.jpg";
import MixedUse_1_A11 from "../images/MixedUse/Interiors/11.jpg";
import MixedUse_1_A12 from "../images/MixedUse/Interiors/12.jpg";
import MixedUse_1_A13 from "../images/MixedUse/Interiors/13.jpg";
import MixedUse_1_A14 from "../images/MixedUse/Interiors/14.jpg";

import MixedUse_2_A1 from "../images/Villa01/01.jpg";
import MixedUse_2_A2 from "../images/Villa01/02.jpg";

import MixedUse_3_A1 from "../images/Villa01/Interiors/01.jpg";
import MixedUse_3_A2 from "../images/Villa01/Interiors/02.jpg";
import MixedUse_3_A3 from "../images/Villa01/Interiors/03.jpg";
import MixedUse_3_A4 from "../images/Villa01/Interiors/04.jpg";
import MixedUse_3_A5 from "../images/Villa01/Interiors/05.jpg";
import MixedUse_3_A6 from "../images/Villa01/Interiors/06.jpg";
import MixedUse_3_A7 from "../images/Villa01/Interiors/07.jpg";
import MixedUse_3_A8 from "../images/Villa01/Interiors/08.jpg";
import MixedUse_3_A9 from "../images/Villa01/Interiors/09.jpg";
import MixedUse_3_A10 from "../images/Villa01/Interiors/10.jpg";
import MixedUse_3_A11 from "../images/Villa01/Interiors/11.jpg";
import MixedUse_3_A12 from "../images/Villa01/Interiors/12.jpg";

import MixedUse_4_A1 from "../images/Villa02/01.jpg";
import MixedUse_4_A2 from "../images/Villa02/02.jpg";

import MixedUse_5_A1 from "../images/Villa02/Interiors/01.jpg";
import MixedUse_5_A2 from "../images/Villa02/Interiors/02.jpg";
import MixedUse_5_A3 from "../images/Villa02/Interiors/03.jpg";
import MixedUse_5_A4 from "../images/Villa02/Interiors/04.jpg";
import MixedUse_5_A5 from "../images/Villa02/Interiors/08.jpg";
import MixedUse_5_A6 from "../images/Villa02/Interiors/09.jpg";

import MixedUse_6_A1 from "../images/Carport/01.jpg";
import MixedUse_6_A2 from "../images/Carport/02.jpg";
import MixedUse_6_A3 from "../images/Carport/03.jpg";
import MixedUse_6_A4 from "../images/Carport/04.jpg";
import MixedUse_6_A5 from "../images/Carport/05.jpg";

const imgs = [
  [
    MixedUse_0_A1,
    MixedUse_0_A2,
    MixedUse_0_A3,
    MixedUse_0_A4,
    MixedUse_0_A5,
    MixedUse_0_A6,
    MixedUse_0_A7,
    MixedUse_0_A8,
    MixedUse_0_A9,
    MixedUse_0_A10,
    MixedUse_0_A11,
    MixedUse_0_A12,
    MixedUse_0_A13,
    MixedUse_0_A14,
  ],
  [
    MixedUse_1_A1,
    MixedUse_1_A2,
    MixedUse_1_A3,
    MixedUse_1_A4,
    MixedUse_1_A5,
    MixedUse_1_A6,
    MixedUse_1_A7,
    MixedUse_1_A8,
    MixedUse_1_A9,
    MixedUse_1_A10,
    MixedUse_1_A11,
    MixedUse_1_A12,
    MixedUse_1_A13,
    MixedUse_1_A14,
  ],
  [MixedUse_2_A1, MixedUse_2_A2],
  [
    MixedUse_3_A1,
    MixedUse_3_A2,
    MixedUse_3_A3,
    MixedUse_3_A4,
    MixedUse_3_A5,
    MixedUse_3_A6,
    MixedUse_3_A7,
    MixedUse_3_A8,
    MixedUse_3_A9,
    MixedUse_3_A10,
    MixedUse_3_A11,
    MixedUse_3_A12,
  ],
  [MixedUse_4_A1, MixedUse_4_A2],
  [
    MixedUse_5_A1,
    MixedUse_5_A2,
    MixedUse_5_A3,
    MixedUse_5_A4,
    MixedUse_5_A5,
    MixedUse_5_A6,
  ],
  [MixedUse_6_A1, MixedUse_6_A2, MixedUse_6_A3, MixedUse_6_A4, MixedUse_6_A5],
];

const DRAG_BUFFER = 5;

export const Carousel = ({ carouselIndex = 0 }) => {
  const imgs = imgs[carouselIndex];
  const [dragging, setDragging] = useState(false);
  const [imgIndex, setImageIndex] = useState(0);

  const dragX = useMotionValue(0);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImageIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImageIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden border border-white rounded-3xl">
      {imgIndex < imgs.length - 1 && (
        <div
          onClick={() => {
            setImageIndex((pv) => pv + 1);
          }}
          className="absolute cursor-pointer right-2 top-[42%] bg-slate-700/55 z-50 w-10 h-[40px] border rounded-full flex items-center justify-center text-white"
        >
          &#10596;
        </div>
      )}
      {imgIndex > 0 && (
        <div
          onClick={() => {
            setImageIndex((pv) => pv - 1);
          }}
          className="absolute cursor-pointer left-2 top-[42%] bg-slate-700/55 z-50 w-10 h-[40px] border rounded-full flex items-center justify-center text-white"
        >
          &#10594;
        </div>
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
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className="h-[90%] w-full flex  
              text-white justify-start cursor-grab active:cursor-grabbing "
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
      <Dots imgIndex={imgIndex} setImageIndex={setImageIndex} />
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              colorAdjust: "exact",
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
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImageIndex }) => {
  return (
    <div className=" mt-4 flex w-full justify-center gap-2 text-white">
      {imgs.map((img, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImageIndex(idx)}
            className={`h-2 w-2 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            } `}
          />
        );
      })}
    </div>
  );
};
