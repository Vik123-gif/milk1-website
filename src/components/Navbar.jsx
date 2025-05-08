import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useCart } from "../app/CartContext";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showMobileMenu]);

  return (
    <div className="fixed top-0 left-0 w-full z-50   ">
      <div className="flex justify-between items-center px-4 py-3 sm:px-6 md:px-10 lg:px-20">
        {/* Mobile Menu Icon */}
        <motion.img
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 1 }}
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="w-10 cursor-pointer md:hidden"
          alt="menu"
        />

        {/* Center Logo */}
        <motion.h1
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl sm:text-2xl font-bold text-blue-800 hover:text-red-500 
                     absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          <Link to="/">GM DAIRY</Link>
        </motion.h1>

        {/* Mobile Cart Icon */}
        <Link to="/cart" className="relative md:hidden">
          <img src={assets.cart_icon} className="w-6 sm:w-8" alt="cart" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-7 h-5 rounded-full flex items-center justify-center font-bold">
            {totalItems}
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-blue-800 font-bold text-lg items-center ml-auto mr-auto">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="hover:text-red-600">
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#OurAim" className="hover:text-red-600">
              Our Aim
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#Products" className="hover:text-red-600">
              Products
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#Contact" className="hover:text-red-600">
              Contact
            </a>
          </motion.div>
        </ul>

        {/* Desktop Cart and Signup */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-6 sm:w-8" alt="cart" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {totalItems}
            </span>
          </Link>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="font-bold bg-white shadow-lg px-6 py-1.5 rounded-full text-blue-800 text-sm"
          >
            Sign up
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
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

          <ul className="flex flex-col items-center gap-6 text-lg font-bold text-blue-800 mt-8">
            <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 1 }}>
              <Link
                to="/"
                onClick={() => setShowMobileMenu(false)}
                className="hover:text-red-600"
              >
                Home
              </Link>
            </motion.div>
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 1 }}
              onClick={() => setShowMobileMenu(false)}
              href="#OurAim"
              className="hover:text-red-600"
            >
              Our Aim
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 1 }}
              onClick={() => setShowMobileMenu(false)}
              href="#Products"
              className="hover:text-red-600"
            >
              Products
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 1 }}
              onClick={() => setShowMobileMenu(false)}
              href="#Contact"
              className="hover:text-red-600"
            >
              Contact
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1 }}
              className="mt-4 bg-white border border-blue-800 px-8 py-2 rounded-full text-blue-800"
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
