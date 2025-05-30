import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs: React.FC = () => {
  const navigate = useNavigate()
  return (
    <section className="relative bg-[url('/images/bg-aboutpng')] bg-cover bg-center bg-no-repeat text-white p-4 md:p-10  ">
      <div className="absolute inset-0 bg-black/60"></div> {/* Overlay */}

      <div className="relative z-10 max-w-4xl mx-auto  space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold flex flex-col sm:flex-row gap-4 items-start sm:items-center sm:justify-center ">
           About Us
          {/* About <span className="text-yellow-300">US</span> */}
        </h1>
        <span className="text-xl text-justify md:text-3xl text-center mt-3 flex flex-col sm:flex-row gap-4 items-start sm:items-center sm:justify-center" >Great Food. Non-Stop Gaming</span>
        <p className="text-base text-white leading-relaxed tracking-normal font-poppins md:text-center text-justify lg:text-center ">
          Pune's ultimate hotspot for foodies, gamers, coffee lovers, and late-night
          chillers. Located at the heart of Hinjewadi, we bring together flavor-packed
          food, an immersive gaming experience, and non-stop entertainment, 

          <b> ALL UNDER SINGLE ROOF</b>
          <br /><br />
          From our signature 4-layer jumbo sandwiches to melty pizzas, crispy fries,
          creamy milkshakes, and thick cold coffees — every bite is made to satisfy.
          Try our Oscar Special Dishes, loved by locals and regulars alike!

          <br />
          Dive into our game zone featuring PS5 action, snooker, pool, and classic board games.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center sm:justify-center">
        <button
          onClick={() => navigate("/insights")}
          style={{
            borderRadius: "10px",
            padding: "10px",
          }}
          className="flex flex-row px-2 py-2  font-bold rounded bg-gradient-to-r from-orange-700 via-amber-500 to-amber-300 hover:opacity-80 transition-all">
          Cafe Insights
          <span className="ml-2 text-white animate-slide-arrow">&rarr;</span>
        </button>
        </div>
        <p className="mt-3 text-center md:text-justify lg:pb-20">We don’t just serve food — we serve <span>experiences</span> </p>
      </div>
    </section>


  )
};

export default AboutUs;