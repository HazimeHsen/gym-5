"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ServiceCard from "./ServiceCard/ServiceCard";
import ClientReviewCard from "./ClientReviewCard/ClientReviewCard";
import TrainnerCard from "./TrainnerCard/TrainnerCard";
import SubHead from "./Heading/SubHead";
import Button from "./Buttons/Button";
import PlanCard from "./Plans/PlanCard";
import SectionHead from "./Heading/SectionHead";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChessRook,
  FaDumbbell,
  FaNotesMedical,
} from "react-icons/fa";
import Services from "./Services";
import Testemonials from "./Testemonials";
import Plans from "./Plans";
import Team from "./Team";
import { TextGenerateEffect } from "./TextAnimation";
import About from "./About";
const Landing = () => {
  // Handle Our Plans
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Percentage of the element in view
  });

  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-fixed h-screen bg-cover bg-center md:bg-center pt-40 pb-6 md:pb-40 xl:h-screen md:flex items-center justify-between"
        style={{ backgroundImage: `url(/assets/hero/h1_hero.png)` }}>
        <div className="px-4 md:px-10 text-center flex flex-col items-center">
          {/* <motion.div ref={ref} className="flex items-center">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, width: 100 },
                hidden: { opacity: 0, width: 0 },
              }}
              transition={{ duration: 0.2 }}
              className="h-[2px] w-[100px] bg-main"></motion.div>
            <motion.p
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              transition={{ duration: 0.3, delay: 0.22 }}
              className={`text-white pl-4   text-sm font-poppins font-semibold`}>
              With Patric Potter{" "}
            </motion.p>
          </motion.div>{" "} */}
          <motion.h2
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.3 }}
            className="text-white text-extraLarge md:text-[50px] md:leading-none md:w-[80%] xl:w-[70%] font-bold uppercase py-16"
            style={{ fontFamily: "'Teko', sans-serif" }}>
            <TextGenerateEffect words="Build Perfect body Shape for good and Healthy life." />
          </motion.h2>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.3, delay: 1 }}>
            <Button>
              <Link href="/dashboard" className="md:px-2">
                Become A Member
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <About />
      {/* Service Section */}
      <Services />
      {/* Feedback Section */}
      <Testemonials />
      {/* Our Plans */}
      <Plans />
      {/* Team Members */}
      <Team />
      {/* Time Schedule */}
      {/* <div className="bg-white pt-20 pb-10">
        <div className="px-5 text-center ">
          <div className="flex items-center justify-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="main" title="Our Time Schedule" />
          </div>
          <div className="w-full lg:w-[60%] mx-auto">
            <SectionHead
              color="black"
              title="Select The Perfect Time You Need Now "
            ></SectionHead>
          </div>
        </div>
        <div className="my-20 font-popins">
          <ul className="bg-sky px-4 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:px-20 gap-4">
            <li className="px-6 py-2 text-[24px]  text-center">Suturday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Sunday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Monday</li>
            <li className="px-6 py-2 text-[24px] bg-main text-white text-center">
              Tuesday
            </li>
            <li className="px-6 py-2 text-[24px]  text-center">Wednesday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Thursday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Friday</li>
          </ul>
          <ul className="bg-sky px-4 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:px-20 gap-4">
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center bg-main ">
              <div className="text-white">
                <h5 className="bg-white text-black px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Landing;
