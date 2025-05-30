import React from "react";
import ResponsiveZoneCards from "./Zone";

const HomeSec2: React.FC = () => {
    return (
        <section id="zone-section"
            className="relative bg-[url('/images/zonebgjpg')] bg-cover bg-center bg-no-repeat bg- text-white p-4 md:p-20 ">

            <h1 className="text-3xl md:text-4xl font-bold text-center ">
                Explore Zones
            </h1>
            <span className="text-xl text-justify md:text-3xl text-center mt-3 flex flex-col sm: gap-4 sm:text-center" >Your All-In-One Place !!</span>

            {/* render Zones componet here */}
            <ResponsiveZoneCards />


        </section>
    )
};

export default HomeSec2;