"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import SubHead from "./Heading/SubHead";
import SectionHead from "./Heading/SectionHead";
import ClientReviewCard from "./ClientReviewCard/ClientReviewCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Testemonials = () => {
  const testimonials = [
    {
      name: "Sarah Turner",
      feedback:
        "I love this gym! The trainers are knowledgeable and motivating, the equipment is top-notch, and the atmosphere is always welcoming. I've seen fantastic results since I joined.",
      title: " Fitness Enthusiast",
    },
    {
      name: "David Rodriguez",
      feedback:
        "I've been a member of this gym for a year, and I couldn't be happier. The cleanliness and hygiene standards are excellent, and the staff is friendly and helpful.",
      title: "Loyal Member",
    },
    {
      name: "Emily Foster",
      feedback:
        "The group fitness classes at this gym are outstanding. The instructors are passionate and energetic, and the variety of classes keeps me engaged and motivated to work out regularly. ",
      title: "Group Fitness Fanatic",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex + 1) % testimonials.length
    );
  };

  const previousTestimonial = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length
    );
  };
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
    <div
      id="testemoials"
      className="mt-20 lg:flex items-center justify-between ">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.3 }}
        className="px-5 lg:w-1/2">
        <Image
          className="block w-full md:w-fit max-w-[300px] md:max-w-[500px] mx-auto"
          src="/assets/gallery/feedback.png"
          alt="Fitness one Feedback"
          height={300}
          width={300}
        />
      </motion.div>
      <div className="py-10 px-4 md:px-10 lg:w-1/2">
        <div className="flex items-center flex-col text-center">
          <SubHead color="main" title="Client Feedback" />

          <SectionHead
            color="black"
            title="What Our Client Think About Our Gym"></SectionHead>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.3 }}>
          <ClientReviewCard
            {...testimonials[currentTestimonialIndex]}></ClientReviewCard>
          <div className="flex  space-x-4 mt-10">
            <button onClick={previousTestimonial}>
              <FaArrowLeft size={25} color="#f04e3c" />
            </button>
            <button onClick={nextTestimonial}>
              <FaArrowRight size={25} color="#f04e3c" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testemonials;
