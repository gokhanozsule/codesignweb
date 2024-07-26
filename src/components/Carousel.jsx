import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const DRAG_BUFFER = 5;

const MixedUse_0_A1 = "01_eeawce";
const MixedUse_0_A2 = "02_xymtfe";
const MixedUse_0_A3 = "03_xt9bya";
const MixedUse_0_A4 = "04_kjzdrf";
const MixedUse_0_A5 = "05_v0rakv";
const MixedUse_0_A6 = "06_drlbsl";
const MixedUse_0_A7 = "07_c6b709";
const MixedUse_0_A8 = "08_lkepdd";
const MixedUse_0_A9 = "09_jku5ky";
const MixedUse_0_A10 = "10_kjk4jm";
const MixedUse_0_A11 = "11_i0kqvs";
const MixedUse_0_A12 = "12_kg0lku";
const MixedUse_0_A13 = "13_iwpr2m";
const MixedUse_0_A14 = "14_ttfjta";
const MixedUse_1_A1 = "01_jgcdmc";
const MixedUse_1_A2 = "02_g791wd";
const MixedUse_1_A3 = "03_tc2n8q";
const MixedUse_1_A4 = "04_fbi5ex";
const MixedUse_1_A5 = "05_a4oj2e";
const MixedUse_1_A6 = "06_angqvg";
const MixedUse_1_A7 = "07_yjurnu";
const MixedUse_1_A8 = "08_tyqp51";
const MixedUse_1_A9 = "09_qih6jl";
const MixedUse_1_A10 = "10_nf18qr";
const MixedUse_1_A11 = "11_ooib8e";
const MixedUse_1_A12 = "12_bu7fcm";
const MixedUse_1_A13 = "13_t6tcrk";
const MixedUse_1_A14 = "14_abndqv";

const MixedUse_2_A1 = "01_jbrka2";
const MixedUse_2_A2 = "02_ecagfl";

const MixedUse_3_A1 = "01_qvs6o6";
const MixedUse_3_A2 = "02_unf9bn";
const MixedUse_3_A3 = "03_thddbt";
const MixedUse_3_A4 = "04_lzdmla";
const MixedUse_3_A5 = "05_xt5x99";
const MixedUse_3_A6 = "06_pxkbhy";
const MixedUse_3_A7 = "07_lqv66x";
const MixedUse_3_A8 = "08_fnshdd";
const MixedUse_3_A9 = "09_vcjuaa";
const MixedUse_3_A10 = "10_j9znbd";
const MixedUse_3_A11 = "11_f5exxr";
const MixedUse_3_A12 = "12_neutjg";

const MixedUse_4_A1 = "01_fqdknk";
const MixedUse_4_A2 = "02_cgg764";

const MixedUse_5_A1 = "01_jnhttt";
const MixedUse_5_A2 = "02_lh8pio";
const MixedUse_5_A3 = "03_joff6o";
const MixedUse_5_A4 = "04_f2nvvy";
const MixedUse_5_A5 = "08_zjs868";
const MixedUse_5_A6 = "09_rnsqk8";

const MixedUse_6_A1 = "01_mdair3";
const MixedUse_6_A2 = "02_zpdcqp";
const MixedUse_6_A3 = "03_rrylxv";
const MixedUse_6_A4 = "04_fjtups";
const MixedUse_6_A5 = "05_mdfjwp";

const CarouselImages = [
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

export const Carousel = ({ cloudinaryUrl, carouselIndex = 0 }) => {
  const imgs = CarouselImages[carouselIndex];
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
        <Images imgs={imgs} cloudinaryUrl={cloudinaryUrl} imgIndex={imgIndex} />
      </motion.div>
      <Dots imgs={imgs} imgIndex={imgIndex} setImageIndex={setImageIndex} />
    </div>
  );
};

const Images = ({ imgs, cloudinaryUrl, imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${cloudinaryUrl}/${imgSrc})`,
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

const Dots = ({ imgs, imgIndex, setImageIndex }) => {
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
