import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";


const menuItems = [
  { title: "Pizza", img: "/images/menuItems/pizza.png" },
  { title: "Burger", img: "/images/menuItems/burger.png" },
  { title: "Coffee", img: "/images/menuItems/coldCoffee.png" },
  { title: "Mojito", img: "/images/menuItems/mojito.png" },
  { title: "Chinese", img: "/images/menuItems/chickenLollipop.png" },
  { title: "Pasta", img: "/images/menuItems/pasta.png" },
  { title: "Sandwich", img: "/images/menuItems/sandwich.png" },
  { title: "Fries", img: "/images/menuItems/fries.png" },
  { title: "Hot Coffee", img: "/images/menuItems/hotCoffee.png" },
  { title: "Egg Rice", img: "/images/menuItems/eggRice.png" },
  { title: "Noodles", img: "/images/menuItems/noodles.png" },
  { title: "Toast", img: "/images/menuItems/toast.png" },



];

const MenuPage: React.FC = () => {
  const navigate = useNavigate();
  

  return (

    <div className="bg-black text-white">
      {/* Hero Text */}
      <section className="text-center bg-gradient-to-r from-orange-700 via-pink-700 to-yellow-500 pt-35">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300">
          Food that fuels your Game Nights!
        </h1>
        <h5 className="pb-18 text-center">With Every Bite Level-Up Your Energy!
        </h5>
      </section>

      {/* Carousel in Between */}
      <div className="w-full pb-5 py-6 px-4">
        
        <Slider
          infinite={true}
          speed={3000}
          slidesToShow={5}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2000}
          pauseOnHover={false}
          arrows={false}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 3,
                centerMode: true,
                centerPadding: "0"
              }
            }
          ]}
        >       
          {menuItems.map((item, index) => (
            <div key={index} className="px-2 text-center group">
              <div className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full overflow-visible shadow-lg relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover origin-center transition-all duration-300 group-hover:scale-125"
                  style={{
                    position:"absolute",
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%) scale(1.1)",
                    minHeight: "130%",
                    objectPosition: "center center" 
                  }}
                />
              </div>
              <p className="mt-2 pt-5 text-sm md:text-base font-style:italic font-medium transition-colors">
                {item.title}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      <section className="flex justify-center pb-10 px-5 gap-5 md:gap-8 lg:gap-30">
  <button
    className="inline-flex px-4 py-2 font-bold rounded bg-gradient-to-r from-orange-700 via-amber-500 to-amber-300 hover:opacity-80 transition-all"
    onClick={() => navigate("/menuFlipbook")}
  >
    Explore Menu
    <span className="ml-2 text-white animate-slide-arrow">&rarr;</span>
  </button>

  <button
    className="inline-flex px-4 py-2 font-bold rounded bg-gradient-to-r from-orange-700 via-amber-500 to-amber-300 hover:opacity-80 transition-all"
    onClick={() => navigate("/menuItems")}
  >
    Order Now
    <span className="ml-2 text-white animate-slide-arrow">&rarr;</span>
  </button>
</section>


    </div>

  )
}

export default MenuPage;