"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TrainnerCard = ({ name, title, image }) => {
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
      className="relative team overflow-hidden group transition duration-500 mx-auto my-10"
      style={{ backgroundImage: `url(${image})` }}>
      <img src={image} alt="" className="mx-auto" />
      <div className="font-popins absolute text-white -bottom-20 group-hover:bottom-0 group-hover:bg-main w-full py-10 px-5 transition duration-500  ">
        <div className="flex items-center">
          <div className="h-[2px] w-[50px] bg-white"></div>
          <p className=" pl-4 uppercase text-white text-[14px]">{title}</p>
        </div>
        <h2 className="text-[30px] ">{name}</h2>
        <div className="flex  space-x-4 my-4">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookF className="text-white text-[1rem] hover:text-black" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaXTwitter className="text-white text-[1rem] hover:text-black" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaInstagram className="text-white text-[1rem] hover:text-black" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaGlobe className="text-white text-[1rem] hover:text-black" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TrainnerCard;
