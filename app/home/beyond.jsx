"use client";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Beyond() {
  const containerRef = useRef(null);
  const beyondRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scaleProgress=useTransform(scrollYProgress,[0,1],[1,1.5])
  const opacityProgress=useTransform(scrollYProgress,[0,0.8],[1,0])
  const opacityProgress2=useTransform(scrollYProgress,[0.4,1],[0,1])

  return (
    <>
      <div className="h-[400vh] w-full overflow-x-clip relative" ref={containerRef}>
        <motion.div
          className="sticky top-0 h-[100vh] w-full bg-gray-800 bg-[url('/bg1.jpg')] bg-cover flex items-center justify-center text-[200px] font-[1000] z-[1]"
          style={{ scale: scaleProgress,opacity:opacityProgress }}
          ref={beyondRef}
          ><span className="backdrop-blur-md rounded-lg p-2 text-gray-900">Beyond.</span></motion.div>
          <motion.div className="sticky top-0 w-full h-[100vh] bg-gray-800 flex items-center justify-center" style={{opacity:opacityProgress2}}>
            <div className="h-[250px] w-[450px] bg-[url('/monkey.jpg')] bg-cover flex items-center justify-center text-4xl font-extrabold rounded-lg">You are Nigga.</div>
          </motion.div>
      </div>
    </>
  );
}
