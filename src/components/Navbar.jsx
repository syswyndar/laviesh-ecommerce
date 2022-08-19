import React, { useState, useRef } from "react";
import Logo from "../assets/logo.png";
import { Search, User, ShoppingCart, AlignRight, X } from "react-feather";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      <nav className="navbar relative">
        <div className="navpad">
          <div className="logo">
            <img src={Logo} alt="Logo" className="h-full" />
          </div>
          <div className="sm:hidden md:block">
            <ul className="flex items-center lg:gap-[3rem] md:gap-[1.7rem] poppins text-black font-400 lg:text-sm xl:text-lg">
              <li>Home</li>
              <li>Products</li>
              <li>Sale</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="sm:hidden md:flex items-center lg:gap-[2rem] md:gap-[1.2rem] text-brown">
            <Search />
            <User />
            <ShoppingCart />
          </div>
          <button className="text-brown md:hidden">
            <AlignRight size={35} onClick={() => setOpenMobileMenu(true)} />
          </button>
        </div>

        {/* mobile & tablet */}
        <div
          className={`bg-brown sm:w-[12rem] sm:h-screen absolute top-0 right-0 animation-slideLeft duration-300 md:hidden ${
            openMobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="close-button text-white sm:p-[1rem] z-10"
            onClick={() => setOpenMobileMenu(false)}
          >
            <X size={35} />
          </button>
          <div>
            <ul className="flex flex-col items-center gap-[2rem] poppins text-white font-400 text-lg sm:py-[1rem] sm:px-[2rem]">
              <li>Home</li>
              <li>Products</li>
              <li>Sale</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        {/* mobile & tablet */}
      </nav>
    </>
  );
};

export default Navbar;
