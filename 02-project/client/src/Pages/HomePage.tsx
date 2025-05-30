import React from "react";
import "../index.css";
import HomeSec1 from "../Components/Home/HomeSec1";
import HomeSec2 from "../Components/Home/HomeSec2";
import AboutUs from "../Components/Home/About";
import BackToTopButton from "../Components/BackToTopButton";
import ContactForm from "../Components/ContactForm";
const HomePage: React.FC = () => {
    return (
        <div className="bg-black text-white">
            {/* 1st Section Hero */}
            <HomeSec1 />

             {/* 4th section About */}
            <AboutUs />
           
            {/* 2nd section Explore Zones  */}
            <HomeSec2 />

            {/* 3rd section Games and activities */}
            <ContactForm />
            {/* <HomeSec3 /> */}
            <BackToTopButton />
            
            
        </div>
    );
};

export default HomePage;
