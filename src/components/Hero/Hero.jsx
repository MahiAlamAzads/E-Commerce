import image1 from "../../assets/Hero/women.png";
import image2 from "../../assets/Hero/shopping.png";
import image3 from "../../assets/Hero/sale.png";
import Slider from "react-slick";
const ImageList = [
  {
    id: 1,
    img: image1,
    title: "Upto 50% off on all Women's Wear",
    desription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reiciendis architecto rerum repudiandae soluta minima? Animi amet dolorum.",
  },
  {
    id: 2,
    img: image2,
    title: "Upto 50% off on all Men's Wear",
    desription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reiciendis architecto rerum repudiandae soluta minima? Animi amet dolorum.",
  },
  {
    id: 3,
    img: image3,
    title: "Upto 70% off on all Products's Wear",
    desription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reiciendis architecto rerum repudiandae soluta minima? Animi amet dolorum.",
  },
];
const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div
      className="relative overflow-hidden
    min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-900 duration-200"
    >
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((item) => (
            <div 
            data-aos="fade-up"
            data-aos-delay='200'
            key={item.id} className="container pb-2 sm:pb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center  gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative dark:text-white">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl">
                    {item.title}
                  </h1>
                  <p className="text-sm">{item.desription}</p>
                  <div>
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-4 px-4 rounded-full">
                      Order Now
                    </button>
                  </div>
                </div>

                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div>
                    <img
                      src={item.img}
                      alt="woemen"
                      className="w-[300px] h-[300px] sm:h-[300px] sm:w-[450px] sm:scale-120 object-contain mx-auto "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
