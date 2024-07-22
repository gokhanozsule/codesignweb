import React, { useState, useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import A1 from "../images/MixedUse/Interiors/01.jpg"
import A2 from "../images/MixedUse/Interiors/02.jpg"
import A3 from "../images/MixedUse/Interiors/03.jpg"
import A4 from "../images/MixedUse/Interiors/04.jpg"
import A5 from "../images/MixedUse/Interiors/05.jpg"
import A6 from "../images/MixedUse/Interiors/06.jpg"
import A7 from "../images/MixedUse/Interiors/07.jpg"
import A8 from "../images/MixedUse/Interiors/08.jpg"
import A9 from "../images/MixedUse/Interiors/09.jpg"
import A10 from "../images/MixedUse/Interiors/10.jpg"
import A11 from "../images/MixedUse/Interiors/11.jpg"
import A12 from "../images/MixedUse/Interiors/12.jpg"
import A13 from "../images/MixedUse/Interiors/13.jpg"
import A14 from "../images/MixedUse/Interiors/14.jpg"

const imgs = [
    A1,
    A2,
    A3,
    A4,
    A5,
    A6,
    A7,
    A8,
    A9,
    A10,
    A11,
    A12,
    A13,
    A14,
];

const DRAG_BUFFER = 5;

export const Carousel02 = () => {
    const [dragging, setDragging] = useState(false);
    const [imgIndex, setImageIndex] = useState(0);

    const dragX = useMotionValue(0);

    const onDragStart = () => {
        setDragging(true);
    }

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
    <div className='relative w-full h-full overflow-hidden border border-white rounded-3xl'>
    {imgIndex < imgs.length - 1 && <div onClick={() => {setImageIndex((pv) => pv + 1)}} className='absolute cursor-pointer right-2 top-[42%] bg-slate-700/55 z-50 w-10 h-[40px] border rounded-full flex items-center justify-center text-white'>&#10596;</div>}
    {imgIndex > 0 && <div onClick={() => {setImageIndex((pv) => pv - 1)}} className='absolute cursor-pointer left-2 top-[42%] bg-slate-700/55 z-50 w-10 h-[40px] border rounded-full flex items-center justify-center text-white'>&#10594;</div>}
    
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
    className="h-[90%] w-[90] flex  
             text-white justify-start cursor-grab active:cursor-grabbing ">
            <Images imgIndex={imgIndex} />
    </motion.div>
    <Dots imgIndex={imgIndex} setImageIndex={setImageIndex}/>
    </div>

  );

};

const Images = ({imgIndex}) => {

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

const Dots = ({imgIndex, setImageIndex}) => {
    return <div className=' mt-4 flex w-full justify-center gap-2 text-white'>
        {imgs.map((img, idx) => {
            return <button 
            key={idx}
            onClick={() => setImageIndex(idx)}
            className= {`h-2 w-2 rounded-full transition-colors ${idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"} `}
            />
        })}
    </div>
}
