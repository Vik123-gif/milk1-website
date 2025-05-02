import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showMobileMenu]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md rounded-3xl">
      <div className="container mx-auto flex justify-between items-center py-4 px-10 md:px-20">
        <motion.h1
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="text-2xl font-bold text-blue-800 hover:text-red-500 cursor-pointer"
        >
          GM DAIRY
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-blue-800 font-bold text-lg gap-7">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            href="#Home"
            className="cursor-pointer hover:text-red-600"
          >
            Home
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            href="#Aim"
            className="cursor-pointer hover:text-red-600"
          >
            Our Aim
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            href="#Products"
            className="cursor-pointer hover:text-red-600"
          >
            Products
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            href="#Contact"
            className="cursor-pointer hover:text-red-600"
          >
            Contact
          </motion.a>
        </ul>

        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="hidden md:block font-bold bg-white shadow-2xl px-8 py-2 rounded-full text-blue-800"
        >
          Sign up
        </motion.button>

        {/* Mobile Menu Icon */}
        <motion.img
          whileHover={{ scale: 1.7 }}
          whileTap={{ scale: 1 }}
          onHoverStart={() => console.log("hover started!")}
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
            <motion.a
              whileHover={{ scale: 1.7 }}
              whileTap={{ scale: 1 }}
              onHoverStart={() => console.log("hover started!")}
              onClick={() => setShowMobileMenu(false)}
              href="#Home"
              className="hover:text-red-600"
            >
              Home
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.7 }}
              whileTap={{ scale: 1 }}
              onHoverStart={() => console.log("hover started!")}
              onClick={() => setShowMobileMenu(false)}
              href="#Aim"
              className="hover:text-red-600"
            >
              Our Aim
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.7 }}
              whileTap={{ scale: 1 }}
              onHoverStart={() => console.log("hover started!")}
              onClick={() => setShowMobileMenu(false)}
              href="#Products"
              className="hover:text-red-600"
            >
              Products
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.7 }}
              whileTap={{ scale: 1 }}
              onHoverStart={() => console.log("hover started!")}
              onClick={() => setShowMobileMenu(false)}
              href="#Contact"
              className="hover:text-red-600"
            >
              Contact
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.7 }}
              whileTap={{ scale: 1 }}
              onHoverStart={() => console.log("hover started!")}
              className="bg-white border border-blue-800 px-8 py-2 rounded-full text-blue-800"
            >
              Sign up
            </motion.button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
