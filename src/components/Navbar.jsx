import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showMobileMenu]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md rounded-3xl">
      <div className="container mx-auto flex justify-between items-center py-4 px-10 md:px-20">
        <h1 className="text-2xl font-bold text-blue-800 hover:text-red-500 cursor-pointer">
          GM DAIRY
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-blue-800 font-bold text-lg gap-7">
          <a href="#Home" className="cursor-pointer hover:text-red-600">
            Home
          </a>
          <a href="#Aim" className="cursor-pointer hover:text-red-600">
            Our Aim
          </a>
          <a href="#Products" className="cursor-pointer hover:text-red-600">
            Products
          </a>
          <a href="#Contact" className="cursor-pointer hover:text-red-600">
            Contact
          </a>
        </ul>

        <button className="hidden md:block font-bold bg-white shadow-2xl px-8 py-2 rounded-full text-blue-800">
          Sign up
        </button>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden cursor-pointer w-8 "
          alt="menu"
        />
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center pt-10 md:hidden">
          <div className="absolute top-4 right-4">
            <img
              onClick={() => setShowMobileMenu(false)}
              src={assets.cross_icon}
              className="w-6 cursor-pointer"
              alt="close"
            />
          </div>
          <ul className="flex flex-col items-center gap-6 text-lg font-bold text-blue-800">
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Home"
              className="hover:text-red-600"
            >
              Home
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Aim"
              className="hover:text-red-600"
            >
              Our Aim
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Products"
              className="hover:text-red-600"
            >
              Products
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Contact"
              className="hover:text-red-600"
            >
              Contact
            </a>
            <button className="bg-white border border-blue-800 px-8 py-2 rounded-full text-blue-800">
              Sign up
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
