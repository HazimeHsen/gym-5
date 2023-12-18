import Link from "next/link";
import React from "react";

const SecondButton = ({ path, content }) => {
  return (
    <Link
      href="/"
      //   className="my-6 px-10 py-4 bg-red text-white text-[18px] uppercase font-light"
      className="  bg-red text-white text-[18px] uppercase py-2"
      style={{ fontFamily: "'Roboto', sans-serif" }}>
      Hello
      {/* <Link className=" " to={path}>
        {content}
      </Link> */}
    </Link>
  );
};

export default SecondButton;
