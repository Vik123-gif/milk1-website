import React from "react";

const Home = () => {
  return (
    <div
      id="Home"
      className="  min-h-screen bg-cover bg-center flex items-center justify-center w-full relative"
      style={{ backgroundImage: "url('/header_img.jpg')" }}
    >
      <div className="bg-black/40 absolute inset-0" />
      <div className="relative z-10 text-white text-center px-6 md:px-20 lg:px-32 py-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Desi Cow. <br /> <span className="text-yellow-400">Sudh Dudh</span>
        </h1>
        <h2 className="text-xl md:text-2xl mt-4 font-semibold">
          Fresh. Pure. Organic Milk
        </h2>
        <p className="mt-2 text-md md:text-lg max-w-2xl w-[80%] m-auto">
          Straight from our farm to your doorstep - Taste the Difference!
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#Products"
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow-md hover:bg-yellow-500 transition-all duration-300"
          >
            Our Products
          </a>
          <a
            href="#Contact"
            className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
