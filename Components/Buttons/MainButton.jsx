import Link from "next/link";
import React from "react";

const MainButton = ({ path, content }) => {
  return (
    <button
      className="px-10 py-4 bg-red text-white text-[18px] uppercase font-light"
      style={{ fontFamily: "'Roboto', sans-serif" }}>
      <Link className=" " href={path}>
        {content}
      </Link>
    </button>
  );
};

export default MainButton;
