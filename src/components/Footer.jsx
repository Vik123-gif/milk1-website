import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 text-white px-12 py-10 text-center overflow-hidden">
      {/* Branding */}
      <h2 className="text-xl sm:text-2xl font-bold mb-2">GM Dairy Farm</h2>
      <p className="max-w-md mx-auto text-sm">
        Fresh, organic, and hygienic milk and dairy products straight from our
        farm to your home. Trusted by families, loved by all.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-6 text-xl sm:text-2xl my-6">
        <a
          href="https://wa.me/6204147201"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/vkmishra220/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/share/166vtGueuS/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 transition"
        >
          <FaFacebookF />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs sm:text-sm opacity-80">
        &copy; {new Date().getFullYear()} GM Dairy. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
