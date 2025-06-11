import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { GiBlackball } from "react-icons/gi";
import { FaGamepad, FaCrown } from "react-icons/fa";
//import BookingModal from "../Components/Game/BookingModal";

// Media carousel data
const gamingMedia = [
  {
    id: 1,
    type: "image",
    src: "/images/PS5.jpg",
    title: "PS5",
    subtitle:
      "Join us dominate online in FIFA, swing through the city in Spider-Man, or survive the apocalypse in The Last of Us.",
  },
  {
    id: 2,
    type: "image",
    src: "/images/poolTable.jpg",
    title: "8 BALL POOL",
    subtitle:
      "Whether you're calling the corner pocket or going for a trick shot, 8 Ball Pool is the ultimate test of angles and focus.",
  },
  {
    id: 3,
    type: "image",
    src: "/images/snooker.webp",
    title: "SNOOKER",
    subtitle:
      "Snooker tables with smooth cloth, polished cues, and a calm atmosphere — it's time to line up your shot.",
  },
];

const Games: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const openModal = (game: string) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGame(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (current: number) => setActiveSlide(current),
  };

  return (
    <div id="gaming-section" className="bg-black pt-15 text-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center bg-gradient-to-r from-purple-900 via-violet-700 to-sky-500 py-12 px-4"
      >
        <h1 className="fontStyle text-5xl md:text-7xl font-extrabold mb-4">Level Up Your Fun!</h1>
        <p className="text-xl italic text-white/80">Pune’s Ultimate Gaming Arena</p>
      </motion.section>

      {/* Carousel */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-3/5">
          <Slider {...settings}>
            {gamingMedia.map((item) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                className="relative group"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </Slider>
        </div>

        <div className="w-full md:w-2/5 flex flex-col justify-center">
          <h2 className="fontStyle text-4xl font-bold mb-4">{gamingMedia[activeSlide]?.title}</h2>
          <p className="text-m text-white mb-6">{gamingMedia[activeSlide]?.subtitle}</p>
        </div>
      </div>

      {/* Game Cards */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Snooker */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111] border-l-4 border-t border-blue-500 rounded-xl p-6 hover:shadow-blue-400/40 hover:shadow-lg transition-all"
        >
          <div className="fontStyle text-2xl mb-4 text-blue-400 animate-pulse">
            <FaCrown className="inline mr-2" /> Snooker
          </div>
          <p className="text-blue-200 mb-4">
            Step into the world of Snooker – a game of skill, strategy, and smooth style.
          </p>
          <p className="text-blue-100">₹200/hr per person</p>
          <button
            //onClick={() => openModal("Snooker")}
            onClick={ ()=> alert("In Progress !! For any bookings visit our Contact Section. Thank you !")}
            className="mt-2 px-4 py-2 border-r-4 border-b border-blue-500 rounded hover:font-bold"
          >
            Book my Slot
          </button>
        </motion.div>

        {/* 8 Ball Pool */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111] border-l-4 border-t border-green-500 rounded-xl p-6 hover:shadow-green-400/40 hover:shadow-lg transition-all"
        >
          <div className="fontStyle text-2xl mb-4 text-green-300 animate-pulse">
            <GiBlackball className="inline mr-2" /> 8 Ball Pool
          </div>
          <p className="text-green-200 mb-4">
            Fast-paced, competitive, and always fun — welcome to the world of Pool!
          </p>
          <p className="text-blue-100">₹100/hr per person</p>
          <button
            //onClick={() => openModal("8 BALL POOL")}
            onClick={ ()=> alert("In Progress !! For any bookings visit our Contact Section. Thank you !")}
            className="mt-2 px-4 py-2 border-r-4 border-b border-green-500 rounded hover:font-bold"
          >
            Book my Slot
          </button>
        </motion.div>

        {/* PlayStation 5 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#111] border-l-4 border-t border-purple-500 rounded-xl p-6 hover:shadow-purple-400/40 hover:shadow-lg transition-all"
        >
          <div className="fontStyle text-2xl mb-4 text-purple-300 animate-pulse">
            <FaGamepad className="inline mr-2" /> PlayStation 5
          </div>
          <p className="text-purple-200 mb-4">
            Dive into stunning visuals, lightning-fast load times, and epic gameplay.
          </p>
          <p className="text-blue-100">₹100/hr per person</p>
          <button
            //onClick={() => openModal("PlayStation 5")}
            onClick={ ()=> alert("In Progress !! For any bookings visit our Contact Section. Thank you !")}
            className="mt-2 px-4 py-2 border-r-4 border-b border-purple-500 rounded hover:font-bold"
          >
            Book my Slot
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {/* <BookingModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        game={selectedGame}
      /> */}
    </div>
  );
};

export default Games;
