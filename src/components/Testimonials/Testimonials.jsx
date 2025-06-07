import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
const Testimonials = () => {
  return (
    <div
      data-aos="fade-up"
      className="py-10 dark:bg-slate-800 dark:text-white"
    >
      <div className="container">
        {/* Header section */}
     <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers say
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* Testimonials content */}
        <div>
            <Slider {...settings}>
              {TestimonialData.map((item) => (
                <div
                  key={item.id}
                  className="p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.text}
                  </p>
                </div>
              ))}

            </Slider>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonials;
