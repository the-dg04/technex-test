"use client";
import { useScroll, motion, useSpring, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

export default function AboutTechnex_old({setLoadNext}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    // offset: ["start start", "end end"],
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 10,
  });

  useMotionValueEvent(scrollYProgress,"change",(val)=>{
    if(val>=1){
      setLoadNext(true)
    }
  })

  return (
      <div
        className="w-full h-[100vh] overflow-y-scroll no-scrollbar relative overflow-x-clip bg-gray-800 snap-start snap-always"
        ref={containerRef}
      >
        <motion.div
          className="sticky top-0 h-[20px] w-screen bg-[#131341] origin-left z-[2] translate-y-[20px]"
          style={{ scaleX: springScroll }}
        ></motion.div>
        <div className="w-full flex max-[500px]:flex-col bg-gradient-to-b from-gray-300 to-gray-800 relative">
          <div className="sticky top-0 max-[500px]:h-[50px] max-[500px]:w-full h-[100vh] w-[40vw] flex justify-center items-center bg-transparent max-[500px]:bg-gray-800 max-[500px]:opacity-70 max-[500px]:rounded-b-2xl">
            <div className="text-white text-2xl font-bold">IDK.</div>
          </div>
          <div className="w-full">
            <div className="h-[100vh] max-[500px]:h-[50vh] w-full gborder gborder-white flex justify-center items-center big-red-500">
              <span className="gborder gborder-gray-400 p-4">Content</span>
            </div>
            <div className="h-[100vh] max-[500px]:h-[50vh] w-full gborder gborder-white flex justify-center items-center big-yellow-500">
              <span className="gborder gborder-gray-400 p-4">Content</span>
            </div>
            <div className="h-[100vh] max-[500px]:h-[50vh] w-full gborder gborder-white flex justify-center items-center big-red-500">
              <span className="gborder gborder-gray-400 p-4">Content</span>
            </div>
            <div className="h-[100vh] max-[500px]:h-[50vh] w-full gborder gborder-white flex justify-center items-center big-yellow-500">
              <span className="gborder gborder-gray-400 p-4">Content</span>
            </div>
          </div>
        </div>
      </div>
  );
}
