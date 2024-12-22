"use client";
import { useScroll, motion, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Content() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 50,damping:10 });

  return (
    <>
      <div
        className="w-full h-fit relative overflow-x-clip bg-gray-200"
        ref={containerRef}
      >
        <motion.div
          className="sticky top-0 h-[20px] w-screen bg-[#131341] origin-left z-[1]"
          style={{ scaleX: springScroll }}
        ></motion.div>
        <div className="w-full flex max-[500px]:flex-col bg-gradient-to-b from-gray-300 to-gray-800 relative">
          <div className="sticky top-0 max-[500px]:h-[50px] max-[500px]:w-full h-[100vh] w-[40vw] flex justify-center items-center bg-transparent max-[500px]:bg-gray-800 max-[500px]:opacity-70 max-[500px]:rounded-b-2xl">
            <div className="text-white text-2xl font-bold">About Technex</div>
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
    </>
  );
}
