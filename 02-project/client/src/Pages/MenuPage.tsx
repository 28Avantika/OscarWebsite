import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMotorcycle, FaStore, FaUtensils, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { GiCoffeeCup, GiPartyPopper } from "react-icons/gi";

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
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center bg-gradient-to-r from-orange-700 via-pink-700 to-yellow-500 pt-35">
        <h1 className=" fontStyle text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300">
          Food that fuels your Game Nights!
        </h1>
        <h5 className="pb-18 italic text-center">With Every Bite Level-Up Your Energy!
        </h5>
      </motion.section>

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
            <div key={index} className="px-2  text-center group">
              <div className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full overflow-visible shadow-lg relative">
                <img
                  src={item.img}
                  alt={item.title}
                  loading='lazy'
                  className="w-full h-full object-cover origin-center transition-all duration-300 group-hover:scale-125"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%) scale(1.1)",
                    minHeight: "130%",
                    objectPosition: "center center"
                  }}
                />
              </div>
              <p className="mt-2 pt-5 text-sm md:text-base  font-medium transition-colors">
                {item.title}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      <section className="flex justify-center pb-10 px-5 gap-5 md:gap-8 lg:gap-30">
        <button
          className="inline-flex px-4 py-2 font-bold hover:font-extrabold rounded border-l-4 border-b-2 border-t border-pink-400  transition-all"
          onClick={() => navigate("/menuFlipbook")}
        >
          Explore Menu
          <span className="ml-2 text-white animate-slide-arrow">&rarr;</span>
        </button>

        <button
          className="inline-flex px-4 py-2 font-bold hover:font-extrabold rounded border-l-4 border-b-2 border-t border-orange-400  transition-all"
          onClick={() => navigate("/menuItems")}
        >
          Order Now
          <span className="ml-2 text-white animate-slide-arrow">&rarr;</span>
        </button>
      </section>

      {/* Highlights Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-12 px-4 md:px-8 bg-gradient-to-b from-yellow-900 to-black"
      >
        {/* Service Type Indicators */}
        <div className="flex justify-center mb-12 gap-4 md:gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-4 border-2 border-pink-400 rounded-lg bg-black bg-opacity-60 cursor-pointer"
          >
            <FaMotorcycle className="text-3xl text-yellow-400 mb-2" />
            <span className="font-bold text-pink-300">Delivery</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-4 border-2 border-orange-400 rounded-full bg-black bg-opacity-60 cursor-pointer"
          >
            <FaStore className="text-3xl text-yellow-400 mb-2" />
            <span className="font-bold text-orange-300">Take Away</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-4 border-2 border-purple-400 rounded-lg bg-black bg-opacity-60 cursor-pointer"
          >
            <FaUtensils className="text-3xl text-yellow-400 mb-2" />
            <span className="font-bold text-purple-300">Dine In</span>
          </motion.div>
        </div>

        {/* Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Delivery Highlight */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-900 to-black p-6 rounded-xl border-l-4 border-b-2 border-pink-400 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <FaMotorcycle className="text-4xl text-yellow-400 mr-4" />
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-yellow-200">
                Lightning Fast Delivery
              </h3>
            </div>
            <p className="text-gray-200">
              <GiPartyPopper className="inline mr-2 text-yellow-300" />
              <span className="font-semibold text-pink-200">Free delivery</span> within 1km!
              Enjoy our delicious food without any extra charges when you're nearby.
            </p>
            <p className="mt-3 text-gray-200">
              <FaMapMarkerAlt className="inline mr-2 text-yellow-300" />
              We cover <span className="font-semibold text-yellow-300">up to 6km</span> from our cafe.
              Your gaming fuel is just a few taps away!
            </p>
          </motion.div>

          {/* Quality Highlight */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-900 to-black p-6 rounded-xl border-l-4 border-b-2 border-orange-400 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <GiCoffeeCup className="text-4xl text-yellow-400 mr-4" />
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-yellow-200">
                Game Night Essentials
              </h3>
            </div>
            <p className="text-gray-200">
              Every bite is crafted to keep your energy high and your focus sharp
              during those intense gaming sessions.
            </p>
            <p className="mt-3 text-gray-200">
              <span className="font-semibold text-orange-300">Pro tip:</span> Try our
              Energy Boost Combo - the perfect companion for marathon gaming!
            </p>
          </motion.div>

          {/* Visit Us Highlight */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900 to-black p-6 rounded-xl border-l-4 border-b-2 border-purple-400 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <FaRegClock className="text-4xl text-yellow-400 mr-4" />
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-yellow-200">
                Ultimate Gaming Hangout
              </h3>
            </div>
            <p className="text-gray-200">
              Beyond 6km? Come visit our <span className="font-semibold text-purple-300">gamer-friendly cafe</span>
              with cozy seating, great vibes, and screens to catch the latest esports!
            </p>
            <p className="mt-3 text-gray-200">
              Special discounts for in-house gamers - your perfect spot for food, fun, and fragging!
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
            Ready to Level Up Your Dining Experience?
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Whether you're fueling up at home or joining us in-store, every meal comes with
            that extra <span className="text-yellow-300 font-bold">gamer's touch</span>!
          </p>
        </motion.div>
      </motion.section>

    </div>

  )
}

export default MenuPage;