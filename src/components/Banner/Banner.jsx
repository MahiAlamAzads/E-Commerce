import React from "react";
import Img from "../../assets/woman/women2.jpg"; // Adjust the path as necessary
import { GrSecure } from "react-icons/gr"; // Importing the secure icon
const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
          {/* image section */}
          <div data-aos="fade-right">
            <img
              data-aos="zoom-in"
              src={Img}
              alt=""
              className="max-w-[500px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.9)] object-cover"
            />
          </div>

          {/* text details section */}
          <div    data-aos="fade-up" className="flex flex-col items-start justify-center gap-6 text-left sm:pt-0">
            <h1 
               data-aos="fade-up"
            className="text-3xl sm:text-4xl font-bold">
              Winter Sale upto 50% off
            </h1>
            <p
            data-aos="fade-up"
            className="text-sm text-gray-500 tracking-wide leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              doloremque. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
            <div className="flex flex-col  items-start gap-4">
                <div className="flex items-center gap-4">
                    <GrSecure className="text-4xl h-12 w-12 rounded-full shadow-sm p-4 bg-violet-100 dark:bg-violet-500 dark:text-white" />
                    <p>Quality Products</p>
                </div>
                 <div className="flex items-center gap-4">
                    <GrSecure className="text-4xl h-12 w-12 rounded-full shadow-sm p-4 bg-yellow-100 dark:bg-yellow-500 dark:text-white" />
                    <p>Fast Delivery</p>
                </div>
                 <div className="flex items-center gap-4">
                    <GrSecure className="text-4xl h-12 w-12 rounded-full shadow-sm p-4 bg-lime-100 dark:bg-lime-500 dark:text-white" />
                    <p>Get Offers</p>
                </div>
                 <div className="flex items-center gap-4">
                    <GrSecure className="text-4xl h-12 w-12 rounded-full shadow-sm p-4 bg-cyan-100 dark:bg-violet-500 dark:text-white" />
                    <p>Easy Payment method</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
