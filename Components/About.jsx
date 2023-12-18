// About.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import SectionHead from "./Heading/SectionHead";
import SubHead from "./Heading/SubHead";
import Button from "./Buttons/Button";
import Link from "next/link";

const ImageComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
      }}
      transition={{ duration: 0.3 }}
      className="px-5 lg:w-1/2">
      <Image
        width={300}
        height={300}
        className="block w-full md:w-fit max-w-[300px] md:max-w-[500px] mx-auto"
        src="/assets/gallery/about.png"
        alt="Fitness one About"
      />
    </motion.div>
  );
};

const TextComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="py-10 px-4 md:px-10 lg:w-1/2">
      <SubHead color="main" title="About our gym" />
      <SectionHead
        color="black"
        title="Build Perfect Body Shape For Good And Healthy Life."></SectionHead>
      <motion.p
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-base text-blackGray">
        Brook presents your services with flexible, convenient and cdpose
        layouts. You can select your favorite layouts & elements for cular ts
        with unlimited ustomization possibilities. Pixel-perfect replication of
        the designers is intended.
      </motion.p>
      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-base text-blackGray my-6">
        Brook presents your services with flexible, convefnient and chient
        anipurpose layouts. You can select your favorite layouts.
      </motion.p>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="my-10">
        <Button>
          <Link href="/dashboard" className="md:px-2">
            Become A Member
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <motion.div
      id="about"
      className="my-10 lg:flex items-center justify-between xl:my-40">
      <ImageComponent />
      <TextComponent />
    </motion.div>
  );
};

export default About;
