"use client";
// Import necessary modules
import React, { useState } from "react";
import Icon from "../../Buttons/Icon";
import Button from "../../Buttons/Button";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  // Mobile Menu State
  const [mobileMenu, setMobileMenu] = useState(false);
  // Menus List as an array of objects
  const menus = [
    { title: "Home", url: "/" },
    { title: "About", url: "/#about" },
    { title: "Services", url: "/#services" },
    { title: "Testemoials", url: "/#testemoials" },
    { title: "Plans", url: "/#plans" },
    { title: "Team", url: "/#team" },
  ];

  return (
    <div className="bg-[#00000080] py-4 fixed top-0 z-50 w-full">
      {/* Mobile Menu */}
      <div className="flex items-center justify-between mx-2 sm:mx-6 md:mx-10  lg:hidden ">
        <Link href="/">
          <Image
            width={160}
            height={70}
            src="/assets/logo/logo.png"
            alt="Fitness one Logo"
          />
        </Link>
        <div className="mx-4">
          {mobileMenu ? (
            <button onClick={() => setMobileMenu(false)}>
              <FaXmark color="#fff" size={30} />
            </button>
          ) : (
            <button onClick={() => setMobileMenu(true)}>
              <FaBars color="#fff" size={30} />
            </button>
          )}
        </div>
        {mobileMenu && (
          <ul className="absolute bg-white w-[90%] top-20 -left-[20px] px-2 mx-10 pb-4">
            {menus.map((menuItem, index) => (
              <a
                href={menuItem.url}
                key={index}
                className="font-roboto block px-4 py-2 mt-2 text-black hover:text-main text-xl font-light transition duration-300">
                <li>{menuItem.title}</li>
              </a>
            ))}
          </ul>
        )}
      </div>
      {/* Mobile Menu */}
      {/* Desktop Menu */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between lg:mx-10 xl:mx-20">
          <div>
            <Link href="/">
              <Image
                width={170}
                height={70}
                src="/assets/logo/logo.png"
                alt="Fitness one Logo"
              />
            </Link>
          </div>
          <div className="flex items-center">
            {/* Menus */}
            <ul className="flex">
              {menus.map((menuItem, index) => (
                <a
                  href={menuItem.url}
                  key={index}
                  className="font-roboto font-medium block px-4 py-2 mt-2 text-white hover:text-main text-xl transition duration-300">
                  <li>{menuItem.title}</li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Desktop Menu */}
    </div>
  );
};

export default Navbar;
