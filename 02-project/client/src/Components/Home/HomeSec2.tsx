import React from "react";
import ResponsiveZoneCards from "./Zone";

const HomeSec2: React.FC = () => {
    return (
        <section id="zone-section"
            className="relative text-white p-5 md:p-20 ">

            <h1 className="fontStyle md:text-3xl text-center ">
                Explore Zones
            </h1>
            <p className="fontStyle text-2xl font-bold text-yellow-300 text-justify md:text-xl text-center mt-3 flex flex-col sm: gap-4 sm:text-center" >
                Your All-In-One Spot </p>

            {/* render Zones componet here */}
            <ResponsiveZoneCards />


        </section>
    )
};

export default HomeSec2;