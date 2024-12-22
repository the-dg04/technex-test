"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform,useMotionValueEvent } from 'framer-motion';

const ScrollAnimationExample = () => {
  // Create refs for the scrollable container and target element
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  // Basic scroll progress for the entire page
  const { scrollYProgress: pageProgress } = useScroll();

  // Scroll progress relative to a specific container
  const { scrollYProgress: containerProgress } = useScroll({
    container: containerRef, // Track scroll within this container
  });

  // Scroll progress relative to when a specific element enters/exits the viewport
  const { scrollYProgress: elementProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"] // Customize when tracking starts/ends
  });

  useMotionValueEvent(elementProgress, "change", (latest) => {
    console.log("scroll : ", latest);
  });

  // Transform scroll progress into other values
  const scale = useTransform(elementProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(elementProgress, [0, 0.5, 1], [0, 1, 0]);
  const rotation = useTransform(elementProgress, [0, 1], [0, 360]);

  return (
    <div className="min-h-screen">
      {/* Progress bar that follows page scroll */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-2 bg-blue-500 origin-left"
        style={{ scaleX: pageProgress }}
      />

      {/* Scrollable container example */}
      <div 
        ref={containerRef} 
        className="h-96 overflow-y-scroll my-8 border rounded"
      >
        <motion.div
          className="h-[200vh] bg-gray-100"
          style={{ opacity: containerProgress }}
        />
      </div>

      {/* Target element with multiple scroll-based animations */}
      <motion.div
        ref={targetRef}
        className="w-32 h-32 bg-purple-500 mx-auto my-32"
        style={{
          scale,
          opacity,
          rotate: rotation
        }}
      />

      {/* Spacer to enable scrolling */}
      <div className="h-screen" />
    </div>
  );
};

export default ScrollAnimationExample;