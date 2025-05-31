import React, { useState } from "react";
import NavBarComp from "../Components/Nav";
import BackToTopButton from "../Components/BackToTopButton";
import { useNavigate } from "react-router-dom";
const CafeInsights: React.FC = () => {
    const navigate = useNavigate();

    const slides = [
        { src: "/images/main1.jpeg", alt: "" },
        { src: "/images/2.mp4", alt: "" },
        { src: "/images/3.mp4", alt: "" },
        { src: "/images/a1.jpeg", alt: "" },
        { src: "/images/a2.jpeg", alt: "" },
        { src: "/images/a3.jpeg", alt: "" },
        { src: "/images/a4.jpeg", alt: "" },
        { src: "/images/8.mp4", alt: "" },
        { src: "/images/a5.jpeg", alt: "" },
        { src: "/images/10.mp4", alt: "" },
        { src: "/images/11.mp4", alt: "" },
    ];
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((current + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((current - 1 + slides.length) % slides.length);
    };

    return (
        <div id="about-section" className="min-h-screen pt-15 bg-black text-white overflow-x-hidden">
            <NavBarComp />
            <div className="pt-24 sm:pt-0 md:pt-5"> {/* Added padding-top for mobile */}
                <h3 className="font-roboto md:text-4xl sm:pb-5 md:pt-10 lg:pt-12 font-bold text-center">Cafe Insights</h3>

                {/* Hero Section */}
                <section className="md:hidden relative h-[50vh] md:h-[100vh] bg-cover bg-center flex items-center justify-center text-center">
                    <video
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        src="/images/HeroVideo.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    ></video>
                </section>

                {/* Meet Founders Section */}
                <section className="w-full pt-3 bg-gradient-to-b from-black to-pink-900  md:py-20 px-4">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#d9dc32]">
                                    We're Aditya & Avishkar
                                </h2>
                                <p className="text-base md:text-lg text-gray-300">
                                    Founded in 2021 by brothers Aditya & Avishkar, OSCAR was born from a simple dream: 
                                    to create a space where people could eat, play, work, and chill — anytime, any day.
                                     Located in the heart of Hinjewadi, we’re more than a cafe; we’re a round-the-clock 
                                     experience where every bite fuels your game and every game sparks new connections
                                </p>
                                
                            </div>
                            <div className="flex justify-center  md:justify-start space-x-4">
                                    <div className="founder-card text-center group">
                                        <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-2 border-[#d9dc32] overflow-hidden mx-auto">
                                            <img
                                                src="/images/aditya.jpg"
                                                alt="Aditya"
                                                className="w-full h-full object-cover group-hover:scale-110 transition"
                                            />
                                        </div>
                                        <p className="mt-2 text-[#d9dc32]">Aditya</p>
                                    </div>
                                    <div className="founder-card text-center group">
                                        <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-2 border-[#d9dc32] overflow-hidden mx-auto">
                                            <img
                                                src="/images/avishkar.jpg"
                                                alt="Avishkar"
                                                className="w-full h-full object-cover group-hover:scale-110 transition"
                                            />
                                        </div>
                                        <p className="mt-2 text-[#d9dc32]">Avishkar</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>

                {/* Photo Gallery / Virtual Tour */}
                <section className="container mx-auto px-4 py-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
                        Moments from Our Zone
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
                    <h6 className="text-center"> Click to see more of <span className="text-xl md:text-2xl font-bold mb-4 md:mb-6"> Oscar's Cafe </span></h6>
                    <button
                        onClick={() => navigate("/gallary")}
                        className="flex flex-row px-4 py-2 font-bold rounded bg-gradient-to-r from-orange-700 via-amber-500 to-amber-300 hover:opacity-80 transition-all mx-auto my-4"
                    >
                        Gallery
                        <span className="ml-2 text-white animate-slide-arrow">&rarr;</span>
                    </button>
                </section>

                {/* Stats / Highlights */}
                <section className="w-full py-10 md:py-20 px-4 relative">
                    <div className="container mx-auto px-4">
                        <h2 className="text-xl md:text-3xl font-bold py-4 md:py-6 text-center text-gray-200">
                            Our Journey in Numbers
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 text-center">
                            {[
                                { value: "3000+", label: "Games Played" },
                                { value: "1000+", label: "Happy Customers" },
                                { value: "24/7", label: "Open Since Day 1" }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="py-3 px-4 md:py-4 hover:bg-pink-900/50 hover:scale-[1.02] cursor-pointer  rounded-md transition-all duration-300 hover:border-yellow-400"
                                >
                                    <p className="text-2xl md:text-4xl font-extrabold text-yellow-400">
                                        {item.value}
                                    </p>
                                    <p className="mt-1 text-xs md:text-sm text-gray-300">
                                        {item.label}
                                    </p>
                                </div>
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