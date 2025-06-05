import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs: React.FC = () => {
  const navigate = useNavigate()
  return (
    <section id="about-section" className="relative text-white p-4 md:p-10  ">
      <div className="absolute inset-0 "></div> {/* Overlay */}

      <div className="relative z-10 max-w-4xl mx-auto  space-y-6">
        <h1 className="fontStyle text-3xl md:text-4xl font-bold flex flex-col sm:flex-row gap-4 items-start sm:items-center sm:justify-center ">
          About Us
          {/* About <span className="text-yellow-300">US</span> */}
        </h1>
        <p className="fontStyle text-yellow-300 text-xl text-justify md:text-3xl text-center mt-3 flex flex-col sm:flex-row gap-4 items-start sm:items-center sm:justify-center" >
          With Great Food & Non-Stop Gaming, we're
        </p>
        <h6 className="text-base text-white leading-relaxed tracking-normal  md:text-center text-justify lg:text-center ">
          Pune's ultimate hotspot for foodies, gamers, coffee lovers, and late-night
          chillers. Located at the heart of Hinjewadi, we bring together flavor-packed
          food, an immersive gaming experience, and non-stop entertainment,

          ALL UNDER SINGLE ROOF
          <br /><br />
          From our signature 4-layer jumbo sandwiches to melty pizzas, crispy fries,
          creamy milkshakes, and thick cold coffees — every bite is made to satisfy.
          Try our Oscar Special Dishes, loved by locals and regulars alike!

          <br />
          Dive into our game zone featuring PS5 action, snooker, pool, and classic board games.
        </h6>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center sm:justify-center">
          <button
            onClick={() => navigate("/insights")}
            style={{
              borderRadius: "10px",
              padding: "10px",
            }}
            className="flex flex-row mt-3 px-2 py-2 font-bold rounded text-white border-l-6 border-t border-b-2 border-yellow-500 hover:font-extrabold transition-all">
            Cafe Insights
            <span className="ml-2 text-white animate-slide-arrow">&rarr;</span>
          </button>
        </div>
        <p className="mt-3 text-center md:text-justify lg:pb-20">We don’t just serve food — we serve <div className="inline fontStyle font-bold text-yellow-300">experiences</div> </p>
      </div>
    </section>


  )
};

export default AboutUs;