import React from "react";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "./ImageCarouselHeroSec";

const HomeSec1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative font-bold pt-30 sm:py-16 pb-10 md:py-40 lg:pt-30 pb-30 px-10 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto md:flex md:items-center">
        {/* Left side - Your existing content (unchanged) */}
        <div className="px-3 md:w-2/3 lg:w-1/2">
          <h1 className="fontStyle text-5xl sm:text-4xl md:text-5xl lg:text-left lg:pt-7 font-extrabold text-white mb-2">
            Welcome to Oscar
          </h1>

          <p className="text-xl fontStyle sm:text-2xl sm:text-center md:text-3xl lg:text-left text-yellow-300">
            <div className=" inline font-bold animate-pulse">24/7</div> Cafe & Gaming Zone
          </p>
          <p className="fontStyle sm:pb-0 italic text-gray-200 sm:text-center md:pb-10 lg:text-left lg:spb-20"> 
            Tasty bites, top-tier games, and a vibe you won’t forget <br></br> — welcome to your new 
            favorite spot. </p>

          <div className="flex flex-row sm:flex-row gap-4 items-start sm:items-center">
            {/* <button
              className="inline-flex px-2 py-2  rounded border-l-4 border-b-2 border-purple-500 hover:font-bold transition-all"
              onClick={() => navigate("/games")}
            >
              Book your Game Slot
              <span className="ml-2 text-white animate-slide-arrow">&rarr;</span>
            </button> */}

            <button
              className="relative flex items-center justify-center px-2 py-2 sm:px-6 sm:py-3 rounded text-white border-l-6 border-t border-b-2 border-yellow-500 hover:font-extrabold transition-all overflow-hidden"
              onClick={() => navigate("/menuItems")}
            >
              Order Now <span className="ml-2 text-white ">&rarr;</span>
            </button>
            

          </div>
        </div>

        {/* Right side - New image container */}
        <ImageCarousel />
        {/* <div className="hidden md:block md:w-1/3 lg:w-1/2 md:pl-10 lg:pl-20">
          <img
            src="/images/food8.png"
            alt="Oscar Cafe & Gaming Zone"
            className="w-full h-auto rounded-lg"
          />
        </div> */}
      </div>
    </section>
  );
};

export default HomeSec1;
