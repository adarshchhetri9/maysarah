import React from "react";
import { arrowdown, flag, logo, search } from "../assets";
import { navLinks, navLogo } from "../constants";

const Navbar = () => {
  return (
    <nav className="">
      <div className="h-[98px] flex w-auto py-4 my-2 px-[55px]">
        <img className="mx-auto h-[79px] w-[309px]" src={logo} alt="festive" />
        <div className="flex flex-col gap-3 ">
          <div className="flex h-[35px]  justify-end items-center py-2 gap-2">
            <img src={flag} alt="flag" />
            <p className="">AED</p>
            <img src={arrowdown} alt="arrowdown" />
          </div>
          <div className="flex gap-8 ">
            {navLogo.map((nav, index) => (
              <img key={nav.id} src={nav.icon} alt="" />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] flex justify-between px-[55px] ">
        <ul className="flex gap-5  my-2 py-2 text-[14px] font-medium">
          {navLinks.map((nav, index) => (
            <li key={nav.id}>{nav.title}</li>
          ))}
        </ul>
        <div className="bg-[#EBEBEB] items-center flex gap-2 p-2 my-2 w-[301px] rounded-full">
          <img className="h-5" src={search} alt="search" />
          <input
            type="text"
            className="bg-[#EBEBEB]"
            placeholder="Search the store"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
