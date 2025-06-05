import React, { useState } from "react";
import BackToTopButton from "../Components/BackToTopButton";
import { motion } from "framer-motion";
//import { useNavigate } from "react-router-dom";
const CafeInsights: React.FC = () => {
    //const navigate = useNavigate();

    const slides = [
        { src: "/images/main1.jpeg", alt: "" },
        { src: "/images/Oscar/t1.jpg", alt: "" },
        { src: "/images/C9.jpg", alt: "" },
        { src: "/images/C5.jpg", alt: "" },
        { src: "/images/a2.jpeg", alt: "" },
        { src: "/images/a3.jpeg", alt: "" },
        { src: "/images/C1.jpg", alt: "" },
        { src: "/images/8.mp4", alt: "" },
        { src: "/images/a5.jpeg", alt: "" },
        { src: "/images/10.mp4", alt: "" },
        { src: "/images/C7.jpg", alt: "" },
    ];
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((current + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((current - 1 + slides.length) % slides.length);
    };

    return (
        <div id="about-section" className="min-h-screen bg-black text-white">
            <div className="pt-24 sm:pt-0 md:pt-5"> {/* Added padding-top for mobile */}
                {/* Hero Section */}
                {/* <section className="md:hidden  relative h-[50vh] md:h-[100vh] bg-cover bg-center flex items-center justify-center text-center">
                    <video
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        src="/images/HeroVideo.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    ></video>
                </section> */}

                {/* Meet Founders Section */}
                <section className="w-full pt-3 bg-gradient-to-t from-black to-pink-800  md:py-20 px-4">
                    <h2 className="fontStyle md:text-4xl md:pt-10 lg:pt-20 font-bold text-center">
                        Cafe Insights</h2>
                    <div className="container pt-15 mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="space-y-6">
                                <h4 className="fontStyle text-3xl md:text-4xl font-bold">
                                    Our story
                                </h4>
                                <p className="text-base md:text-l text-gray-300">
                                    Founded in 2021 by brothers Aditya & Avishkar, OSCAR was born from a simple dream:
                                    to create a space where people could eat, play, work, and chill — anytime, any day.
                                    Located in the heart of Hinjewadi, we’re more than a cafe; we’re a round-the-clock
                                    experience where every bite fuels your game and every game sparks new connections
                                </p>

                            </div>
                            <div className="flex justify-center lg:pl-15 md:justify-start space-x-4">
                                <div className="founder-card text-center group">
                                    <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-l-6 border-pink-700 overflow-hidden mx-auto">
                                        <img
                                            src="/images/aditya.jpg"
                                            alt="Aditya"
                                            className="w-full h-full object-cover group-hover:scale-110 transition"
                                        />
                                    </div>
                                    <p className="fontStyle mt-2">Aditya</p>
                                </div>
                                <div className="founder-card text-center group">
                                    <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-l-6 border-pink-700 overflow-hidden mx-auto">
                                        <img
                                            src="/images/avishkar.jpg"
                                            alt="Avishkar"
                                            className="w-full h-full object-cover group-hover:scale-110 transition"
                                        />
                                    </div>
                                    <p className="fontStyle mt-2">Avishkar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Photo Gallery / Virtual Tour */}
                <section className="container mx-auto px-4 py-10">
                    <h2 className="fontStyle text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
                        Moments from Our Cafe and Gaming Zone
                    </h2>
                    <div className="relative w-full md:w-3/4 mx-auto my-6 md:my-10">
                        <div className="relative h-64 md:h-80">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${index === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-90 z-0'
                                        }`}
                                >
                                    {slide.src.endsWith(".mp4") ? (
                                        <video
                                            src={slide.src}
                                            autoPlay
                                            muted
                                            loop
                                            className="w-full h-full object-cover rounded-xl shadow-lg"
                                        />
                                    ) : (
                                        <img
                                            src={slide.src}
                                            alt={slide.alt}
                                            className="w-full h-full object-cover rounded-xl shadow-lg"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute inset-y-0 -left-8 sm:-left-12 md:-left-28 lg:-left-32 xl:-left-40 flex items-center z-10">
                            <button
                                onClick={prevSlide}
                                className="cursor-pointer w-12 h-24 sm:w-16 sm:h-32 md:w-24 md:h-48 lg:w-32 lg:h-64 xl:w-40 xl:h-80 hover:scale-110 transition-transform duration-200 focus:outline-none"
                            >
                                <img
                                    src="/images/lb.png"
                                    alt="Previous Slide"
                                    className="w-full h-full object-contain drop-shadow-lg hover:drop-shadow-xl transition-all"
                                />
                            </button>
                        </div>

                        <div className="absolute inset-y-0 -right-8 sm:-right-12 md:-right-28 lg:-right-32 xl:-right-40 flex items-center z-10">
                            <button
                                onClick={nextSlide}
                                className="cursor-pointer w-12 h-24 sm:w-16 sm:h-32 md:w-24 md:h-48 lg:w-32 lg:h-64 xl:w-40 xl:h-80 hover:scale-110 transition-transform duration-200 focus:outline-none"
                            >
                                <img
                                    src="/images/rb.png"
                                    alt="Next Slide"
                                    className="w-full h-full object-contain drop-shadow-lg hover:drop-shadow-xl transition-all"
                                />
                            </button>
                        </div>
                    </div>
                    <h6 className="text-center"> Click to see more of <div className="fontStyle inline text-xl md:text-2xl text-pink-500 mb-4 pl-1 md:mb-6"> our zones </div></h6>
                    {/* <button
                        onClick={() => navigate("/gallary")}
                        className="flex flex-row px-4 py-2 font-bold rounded bg-gradient-to-r from-orange-700 via-amber-500 to-amber-300 hover:opacity-80 transition-all mx-auto my-4"
                    >
                        Gallery
                        <span className="ml-2 text-white animate-slide-arrow">&rarr;</span>
                    </button> */}
                </section>

                {/* Stats / Highlights */}
                <section className="w-full py-10 md:py-20 px-4 relative">
                    <div className="container mx-auto px-4">
                        <h2 className="fontStyle text-xl pb-30 md:text-3xl font-bold py-4 md:py-6 text-center">
                            Our Journey in Numbers
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 text-center">
                            {[
                                { value: "3000+", label: "Games Played" },
                                { value: "1000+", label: "Happy Customers" },
                                { value: "24/7", label: "Open Since Day 1" }
                            ].map((item, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    key={index}
                                    className="py-3 px-4 md:py-4 focus:border-none rounded border-b-3 border-l border-pink-600 bg-gray-900/50"
                                >
                                    <p className="text-2xl md:text-4xl font-bold hover:cursor-pointer  hover:font-extrabold ">
                                        {item.value}
                                    </p>
                                    <p className="mt-1 text-xs md:text-sm text-gray-400">
                                        {item.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section: Visit Us */}

            </div>
            <BackToTopButton />
        </div>
    );
};

export default CafeInsights;