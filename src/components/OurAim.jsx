import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const OurAim = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg-px-20 w-full overflow-hidden"
      id="OurAim"
    >
      <div className="flex flex-col lg:flex-row items-center gap-5">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={assets.Our_Aim}
            alt="Our Aim"
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Our Aim
          </h2>
          <p className="text-lg text-gray-700 w-[80%] sm:w-full m-auto mb-4">
            At <span className="font-semibold text-green-600">[GM DAIRY]</span>,
            our mission is simple — bring pure, fresh, and healthy milk straight
            from our farm to your family’s table.
          </p>
          <p className="text-lg text-gray-700 w-[80%] m-auto">
            We practice ethical dairy farming, ensure animal welfare, and follow
            strict hygiene protocols. Every drop of our milk is a promise of
            nutrition, purity, and care — just the way nature intended.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default OurAim;
