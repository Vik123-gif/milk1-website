import React from "react";
import { ProductsData } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useCart } from "../app/CartContext";

const Products = () => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id="Products"
      className="w-full py-20 px-4 bg-white"
    >
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Dairy <span className="text-yellow-600">Products</span>
        </h1>
        <p className="mt-4 text-gray-600 w-[80%] sm:w-full mx-auto text-sm md:text-base">
          We offer a range of fresh, high-quality dairy products made from both
          cow and buffalo milk. From wholesome milk to ghee, paneer, and curd —
          all our items are crafted with care, purity, and traditional methods
          to ensure nutrition and taste in every drop.
        </p>
      </div>

      {/* Swiper Carousel (Mobile View) */}
      <div className="block md:hidden relative">
        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="pb-24"
        >
          {ProductsData.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between min-h-[480px] transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain mb-4 rounded-xl transition-transform duration-300 hover:scale-105"
                />
                <h2 className="text-lg font-bold text-gray-800 mb-1 text-center">
                  {product.name}
                </h2>
                <h3 className="text-md font-semibold text-yellow-600 mb-2 text-center">
                  {product.price}
                </h3>
                <p className="text-sm text-gray-600 text-center px-2 mb-4">
                  {product.description}
                </p>
                <div className="mt-auto">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-yellow-500 text-white font-semibold text-sm px-5 py-2 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out mb-4"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid View (Desktop View) */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ProductsData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-4 transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-4 rounded-xl transition duration-300 hover:scale-105"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              {product.name}
            </h2>
            <h3 className="text-md font-bold text-green-600 mb-2">
              {product.price}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-yellow-500 text-white font-semibold text-sm px-5 py-2 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out mt-auto"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Products;
