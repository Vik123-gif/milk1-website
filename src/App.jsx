import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import OurAim from "./components/OurAim";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Navbar />
      <Home />
      <OurAim />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
