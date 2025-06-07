import React from 'react'
import Banner from '../../assets/website/orange-pattern.jpg'

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Subscribe = () => {
  return (
    <div data-aos="fade-up" className=" flex justify-center items-center py-6 sm:py-0 bg-cover bg-center"
         style={BannerImg}>
        <div className="container bg-transparent p-2  sm:p-8 rounded-lg flex flex-col items-center justify-center sm:max-w-xl w-full">
            <h2 className="text-center text-white text-2xl sm:text-4xl font-bold mb-4">Get Notified About New Products</h2>

            <input type="email" placeholder="Enter your email" className="p-2 sm:p-5 border text-2xl h-full w-full border-gray-300 rounded-lg mb-4" />

            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe