import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import OurAim from "./components/OurAim";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <OurAim />
              <Products />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
