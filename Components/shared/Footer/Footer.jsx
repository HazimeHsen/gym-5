"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  // styles
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
  const footerHead = "text-[18px] font-semibold my-[18px]";
  const footerList = "font-[16px] text-black my-4";
  return (
    <div
      className="bg-fixed bg-cover bg-center  flex items-center pt-20 lg:px-20"
      // style={{ backgroundImage: `url(/assets/footer/footer.png)` }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.3 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="mx-4 my-2">
            <h2 className={footerHead}>COMPANY</h2>
            <ul className="">
              <li className={footerList}>
                <Link href="/about">About Us</Link>
              </li>
              <li className={footerList}>
                <Link href="/">Privecy & policy</Link>
              </li>
              <li className={footerList}>
                <Link href="/">Contact</Link>
              </li>
              <li className={footerList}>
                <Link href="/">Company</Link>
              </li>
            </ul>
          </div>
          <div className="mx-4 my-2">
            <h2 className={footerHead}>OPEN HOUR</h2>
            <ul className="">
              <li className={footerList}>Monda-Thursday (11am-7pm)</li>
              <li className={footerList}>Sunday (close)</li>
              <li className={footerList}>Saturday (11am-7pm)</li>
            </ul>
          </div>
          <div className="mx-4 my-2">
            <h2 className={footerHead}>Resources</h2>
            <ul className="">
              <li className={footerList}>Protien Insurance</li>
              <li className={footerList}>Trainners</li>
              <li className={footerList}>Car</li>
            </ul>
          </div>
          <div className="mx-4 my-2">
            <img src="/assets/logo/logo2_footer.png" alt="" />
            <p className="font-[14px] text-black my-10">
              {" "}
              GThe trade war currently ensuing between te US anfd several
              natxions around thdhe globe, most fiercely with.
            </p>
            <div className="flex  space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer">
                <FaFacebookF className="text-black text-[1.3rem] hover:text-main" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer">
                <FaXTwitter className="text-black text-[1.3rem] hover:text-main" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer">
                <FaInstagram className="text-black text-[1.3rem] hover:text-main" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer">
                <FaGlobe className="text-black text-[1.3rem] hover:text-main" />
              </a>
            </div>
          </div>
        </div>
        <div className="my-10  border-t-2 border-gray md:mx-0 mx-4">
          <p className="text-center p-4">
            Copyright &copy; All rights reserved by fitness one
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
