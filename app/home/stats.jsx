"use client";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  useTransform,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function Stats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: "all" });
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  useEffect(() => {
    if (isInView) {
      containerRef.current.style.pointerEvents = "auto";
    } else {
      containerRef.current.style.pointerEvents = "none";
    }
  }, [isInView]);
  const leftProgress = useTransform(() => scrollYProgress.get() * 50 + "vw");
  return (
    <>
      <div
        className="h-[100vh] w-full overflow-y-scroll no-scrollbar snap-y snap-mandatory relative pointer-events-none hidden md:block"
        ref={containerRef}
      >
        <motion.div
          className="w-[50vw] h-[200vh] absolute top-0 bg-gray-600 flex flex-col"
          style={{ left: leftProgress }}
        >
          <div className="h-1/2 bg-gradient-to-b from-gray-400 to-gray-500 flex justify-center items-center">
            <div className="p-4 text-5xl font-bold rounded-lg gborder gborder-white text-gray-200">
              Registrations.
            </div>
          </div>
          <div className="h-1/2 bg-gradient-to-b from-gray-500 to-gray-600 flex justify-center items-center">
            <div className="p-4 text-5xl font-bold rounded-lg gborder gborder-white text-gray-200">
              Fuck You.
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
            <div className="p-4 text-2xl font-bold rounded-lg gborder gborder-black text-gray-800">
              Content
            </div>
          </div>
          <div className="w-1/2 h-full"></div>
        </div>
      </div>
      <div className="h-[100vh] w-full flex justify-center text-gray-800 text-2xl font-bold items-center md:hidden bg-gray-200">
        [Stats]
      </div>
    </>
  );
}
