"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const ServiceCard = ({
  icon: IconComponent,
  title,
  description,
  path,
  content,
  status,
}) => {
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
      className="bg-sky text-center p-5 relative max-w-sm mx-3 ">
      <div className={`felx justify-center mx-auto w-full text-gray my-4 `}>
        <IconComponent className="mx-auto text-orange" size={30} />
      </div>
      <div className="my-6">
        <div className="uppercase text-large font-semibold ">{title}</div>
      </div>
      <p className="text-sm text-blackGray px-10 my-6">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
