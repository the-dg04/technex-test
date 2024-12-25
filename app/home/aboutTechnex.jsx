"use client";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  useTransform,
  // useInView,
} from "framer-motion";
import { useEffect, useRef,useState } from "react";

export default function AboutTechnex({setLoadNext}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const leftProgress = useTransform(() => scrollYProgress.get() * 50 + "vw");

    useMotionValueEvent(scrollYProgress,"change",(val)=>{
      console.log(val)
      if(val>=0.5){
        setLoadNext(true)
      }
    })

  return (
    <div
      className="h-[100vh] w-full overflow-y-scroll no-scrollbar snap-y snap-mandatory relative hidden md:block snap-start snap-always"
      ref={containerRef}
    >
      <motion.div
        className="w-[50vw] h-[300vh] absolute top-0 bg-gray-600 flex flex-col"
        style={{ left: leftProgress }}
      >
        <div className="h-1/3 bg-gradient-to-b from-gray-400 to-gray-500 flex justify-center items-center">
          <div className="p-4 text-5xl font-bold rounded-lg gborder gborder-white text-gray-200">
            About Technex.
          </div>
        </div>
        <div className="h-1/3 bg-gradient-to-b from-gray-500 to-gray-600 flex justify-center items-center">
          <div className="p-4 text-5xl font-bold rounded-lg gborder gborder-white text-gray-200">
            {/* Fuck You. <br />
            Fuck You. <br />
            Fuck You. <br />
            Fuck You. <br />
            Fuck You. */}
            About
          </div>
        </div>
        <div className="h-1/3 bg-gradient-to-b from-gray-600 to-gray-700 flex justify-center items-center">
          <div className="p-4 text-5xl font-bold rounded-lg gborder gborder-white text-gray-200">
            Content.
          </div>
        </div>
      </motion.div>
      <div className="h-[100vh] snap-start bg-gradient-to-b from-gray-100 to-gray-200 flex">
        <div className="w-1/2 h-full"></div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="p-4 text-2xl font-bold rounded-lg gborder gborder-black text-gray-800">
            Content
          </div>
        </div>
      </div>
      <div className="h-[100vh] snap-start bg-gradient-to-b from-gray-200 to-gray-300 flex">
        <div className="w-1/2 h-full flex justify-center items-center">
          {/* <div className="p-4 text-2xl font-bold rounded-lg gborder gborder-black text-gray-800">
              Content
            </div> */}
        </div>
        <div className="w-1/2 h-full"></div>
      </div>
      <div className="h-[100vh] snap-start bg-gradient-to-b from-gray-300 to-gray-400 flex">
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="p-4 text-2xl font-bold rounded-lg gborder gborder-black text-gray-800">
            Content
          </div>
        </div>
        <div className="w-1/2 h-full"></div>
      </div>
    </div>
  );
}

{
  /* <div className="h-[100vh] w-full flex justify-center text-gray-800 text-2xl font-bold items-center md:hidden bg-gray-200">
        [Stats]
      </div> */
}
