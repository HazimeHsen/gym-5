"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const SubHead = ({ color, title }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 1, // Percentage of the element in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div ref={ref} className="flex items-center">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, width: 100 },
          hidden: { opacity: 0, width: 0 },
        }}
        transition={{ duration: 0.2, delay: 0.15 }}
        className="h-[2px] w-[100px] bg-main"></motion.div>
      <motion.p
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{ duration: 0.3, delay: 0.37 }}
        className={`text-${color} pl-4   text-sm font-poppins font-semibold`}>
        {title}
      </motion.p>
    </motion.div>
  );
};

export default SubHead;
