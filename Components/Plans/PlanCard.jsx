"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const PlanCard = ({ data }) => {
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
      className="border border-gray p-4 py-6 w-[300px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-extraLarge">{data?.planName}</h2>
            <span className="text-xl">
              $<span className="font-bold text-main">{data?.price}</span>/month
            </span>
          </div>
          {/* <h2 className="text-center mt-10 font-bold text-main">
            Most Popular
          </h2> */}
        </div>
        <div className="my-6">
          <h2>Features:</h2>
          <ul>
            {data?.plans.map((plan, index) => (
              <li className="my-2 flex gap-2" key={index}>
                {" "}
                <FaCheck size={20} className="mt-1 text-orange" />
                <span>{plan.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default PlanCard;
