import React from "react";
import Img1 from "../../assets/Hero/women.png";
import Img2 from "../../assets/woman/women2.jpg";
import Img3 from "../../assets/woman/women3.jpg";
import Img4 from "../../assets/woman/women4.jpg";
import Star from "../Star";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Western Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Peddy Cat",
    rating: 4.7,
    color: "black",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Western Sigma",
    rating: 4.9,
    color: "white",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Alfa Ethnic",
    rating: 4.1,
    color: "white",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img4,
    title: "Eastern Cr7",
    rating: 3.7,
    color: "white",
    aosDelay: "800",
  },
];
const Products = () => {
  return (
    <div className="pt-14 pb-12 dark:bg-slate-800 dark:text-white">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-full w-full sm:h-[220px] sm:w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    {/* <Star rating={data.rating}/> */}
                    <span>{data.rating}⭐</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
