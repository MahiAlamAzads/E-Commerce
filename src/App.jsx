import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProduct from "./components/TopProduct/TopProduct";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 50, // offset (in px) from the original trigger point
      delay: 200, // values from 0 to 3000, step 50ms
      duration: 500, // values from 0 to 3000, step 50ms
      easing: "ease", // default easing
    });
  });
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProduct handleOrderPopup={handleOrderPopup} />
      <Banner/>
      <Subscribe/>
      <Testimonials/>
      {orderPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Order Now</h2>
            <p className="mb-4">Your order has been placed successfully!</p>
            <button
              className="bg-primary text-white px-4 py-2 rounded"
              onClick={handleOrderPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
