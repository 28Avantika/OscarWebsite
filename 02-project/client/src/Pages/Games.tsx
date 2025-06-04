import React, { useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

// Media data for the carousel
const gamingMedia = [
    {
        id: 1,
        type: "video",
        src: "/images/Videos/b1.mp4",
        title: "Astro Bot",
        subtitle: "Play Astro bot",
    },
    {
        id: 2,
        type: "image",
        src: "/images/Videos/giphy-downsized.gif",
        title: "POOL TABLE",
        subtitle: "₹120/hr • Lowest rates in Pune!",
    },
    {
        id: 3,
        type: "image",
        src: "/images/Videos/godofwar.gif",
        title: "SNOOKER",
        subtitle: "Pro-level cues & ambiance!",
    },
];

// Game slot data
const gameSlots = [
    {
        name: "PS5 Gaming",
        price: "₹150/hr",
        icon: "🎮",
        desc: "Latest titles | 4K HDR",
    },
    {
        name: "Pool Table",
        price: "₹120/hr",
        icon: "🎱",
        desc: "Challenge your friends!",
    },
    {
        name: "Snooker Table",
        price: "₹200/hr",
        icon: "",
        desc: "Premium green baize",
    },
];

const Games: React.FC = () => {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    // Carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        afterChange: (current: number) => setActiveSlide(current),
    };

    return (
        <div id="gaming-section" className="bg-black pt-15 text-white min-h-screen">
            {/* Hero Section */}
            <section className="text-center bg-black py-12 px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-900 via-violet-700 to-sky-500 bg-clip-text text-transparent mb-4">
                    Level Up Your Fun!
                </h1>
                <p className="text-xl text-white/80">Pune’s Ultimate Gaming Arena</p>
            </section>


            {/* Game Slot Cards bg-gradient-to-r from-sky-600 via-sky-900 to-black  */}
            <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border-l-4 border-t border-blue-500 rounded-xl p-6 hover:border-l-6 hover:border-t-2  transition-all group">
                    <div className="text-2xl mb-4">Snooker</div>
                    <h4 className="font-bold mb-2">Precision. Focus. Thrill.</h4>
                    <p className="text-l text-blue-200 mb-4">
                        Step into the world of Snooker – a game of skill, strategy, and
                        smooth style.
                    </p>
                    <p className="mb-6">
                        Are you a seasoned pro or just picking up the cue? our
                        snooker table offer the perfect setup for a friendly challenge or a
                        fierce match. Smooth cloth, polished cues, and a calm atmosphere —
                        it's time to line up your shot and sink the black.
                    </p>
                    <button
                        onClick={() => navigate("/bookslot")}
                        className="px-4 py-2 border-r-4 border-b border-blue-500 rounded hover:font-bold transition-all"
                    >
                        Book your Slot Now
                    </button>
                </div>
                <div className="border-l-4 border-t border-green-500 rounded-xl p-6  hover:border-l-6 hover:border-t-2 transition-all group">
                    <div className="text-2xl mb-4"> 8 Ball Pool </div>
                    <h4 className="text-xl font-bold mb-2">Rack ’em Up and Break!</h4>
                    <p className="text-l text-green-200 mb-4">
                        Fast-paced, competitive, and always fun — welcome to the world of 8
                        Ball Pool!
                    </p>
                    <p className="mb-6">
                        Whether you're calling the corner pocket or going for a trick shot,
                        8 Ball Pool is the ultimate test of angles, focus, and flair. Grab a
                        cue, challenge your friends, and enjoy the thrill of the game in a
                        vibrant, welcoming atmosphere.
                    </p>
                    <button
                        onClick={() => navigate("/bookslot")}
                        className="px-4 py-2 border-r-4 border-b border-green-500 hover:font-bold  transition-all"
                    >
                        Book your Slot Now
                    </button>
                </div>
                <div className="border-l-4 border-t border-purple-500 rounded-xl p-6  hover:border-l-6 hover:border-t-2  transition-all group">
                    <div className="text-xl mb-4">PlayStation 5</div>
                    <h4 className="text-xl font-bold mb-2">Next-Gen Gaming!</h4>
                    <p className="text-l text-purple-300 mb-4">
                        Dive into stunning visuals, lightning-fast load times, and epic
                        gameplay.
                    </p>
                    <p className="mb-6">
                        Join us dominate online in FIFA, swinging through the city in
                        Spider-Man, or surviving the apocalypse in The Last of Us, the PS5
                        delivers unmatched performance and unforgettable gaming experiences.
                        Grab a controller and step into another world.
                    </p>
                    <button
                        onClick={() => navigate("/bookslot")}
                        className="px-4 py-2 border-r-4 border-b border-purple-500  hover:font-bold transition-all"
                    >
                        Book your Slot Now
                    </button>
                </div>
            </div>
            {/* // Caraosel */}
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
                {/* Left: Media Carousel (60% width) */}
                <div className="w-full md:w-3/5">
                    <Slider {...settings}>
                        {gamingMedia.map((item) => (
                            <div key={item.id} className="relative group">
                                {item.type === "video" ? (
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        className="w-full h-96 object-cover rounded-xl shadow-lg group-hover:shadow-neon-purple transition-all"
                                    >
                                        <source src={item.src} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-96 object-cover rounded-xl shadow-lg group-hover:shadow-neon-purple transition-all"
                                    />
                                )}
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Right: Synced Text (40% width) */}
                <div className="w-full md:w-2/5 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500 mb-4">
                        {gamingMedia[activeSlide]?.title}
                    </h2>
                    <p className="text-xl text-white/80 mb-6">
                        {gamingMedia[activeSlide]?.subtitle}
                    </p>
                    <button className="self-start px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full hover:scale-105 transition-transform">
                        Book Now →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Games;
