"use client";
import { useScroll, useMotionValueEvent, motion, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const linksRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  const linkOpacityProgress=useTransform(scrollYProgress,[0.9,1],[0,1])
  const heightProgress=useTransform(()=>scrollYProgress.get()*window.innerHeight + "px")
  const topProgress=useTransform(()=>(1-scrollYProgress.get())*window.innerHeight/2 + "px")

  return (
    <>
      <div className="w-screen h-screen relative top-0 left-0 overflow-y-scroll overflow-x-clip no-scrollbar ">
        <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-gray-800 text-gray-200 flex items-center justify-center text-[200px] font-[1000]">
          Technex.
          <div className="absolute z-[-1] bottom-10 w-full text-center pointer-events-none text-sm font-light">
            [Scroll to explore]
          </div>
        </div>
        <div
          className="h-screen w-screen overflow-y-scroll no-scrollbar"
          ref={containerRef}
        >
          <motion.div
            className="sticky top-0 w-full bg-gray-200 text-gray-800 flex items-center justify-center  h-0 overflow-hidden"
            ref={heroRef}
            style={{
              height:heightProgress,
              top:topProgress
            }}
          >
            <span className="bg-[url('/technexBg3.jpg')] bg-cover bg-center bg-clip-text text-transparent text-[200px] font-[1000]">
              Technex.
            </span>
            <motion.div className="" style={{opacity:linkOpacityProgress}} ref={linksRef}>
              <a href="/login" className="absolute left-10 translate-y-[-20px]">
                login
              </a>
              <a href="/signup" className="absolute left-10 translate-y-[20px]">
                signup
              </a>
              <a href="/CA" className="absolute right-10 translate-y-[-20px]">
                CA
              </a>
              <a href="/team" className="absolute right-10 translate-y-[20px]">
                team
              </a>
            </motion.div>
          </motion.div>
          <div className="h-[200vh]" />
        </div>
      </div>
    </>
  );
}
