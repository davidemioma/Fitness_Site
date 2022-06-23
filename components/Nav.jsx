import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex justify-around mt-5 sm:space-x-11 lg:space-x-32 lg:w-[40%]">
      <Link href="/">
        <img
          className="w-12 h-12 cursor-pointer"
          src="/assets/images/Logo.png"
          alt=""
        />
      </Link>

      <div className="flex items-end space-x-10 text-[#3a1212]">
        <Link href="/">
          <p className="border-b-[3px] border-[#ff2625] cursor-pointer">Home</p>
        </Link>

        <a href="#exercises">Exercises</a>
      </div>
    </div>
  );
};

export default Nav;
