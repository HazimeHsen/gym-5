"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const SectionHead = ({ color, title }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Percentage of the element in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.3 }}
      className={`text-${color} text-[29px] sm:text-[44px] md:text-[50px] md:leading-none  font-bold   py-6  `}
      style={{ fontFamily: "'Teko', sans-serif" }}>
      {title}
    </motion.div>
  );
};

export default SectionHead;
