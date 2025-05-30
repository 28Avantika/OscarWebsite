import React from "react";

const HomeSec3: React.FC = () => {
    return (
        <section style={{
            backgroundImage: 'url("/images/bg.avif")',

        }}
            className="bg-cover  bg-center bg-no-repeat bg-fixed text-white py-20">
            {/* Title */}
            <div className="text-center mb-12 px-4">
                <h2 className="text-4xl font-bold"> Games & Activities</h2>
                <span className="mt-4 text-3xl">Enjoy top-tier games and fun activities with friends</span>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                {/* Pool Table */}
                <div
                    style={{
                        boxShadow: "0 10px 15px -3px rgba(56, 193, 70, 0.85), 0 4px 6px -4px hsla(276, 3.70%, 26.50%, 0.88)"
                    }}
                    className="relative group bg-gray-800 rounded-lg overflow-hidden">
                    <img src="/images/Pool.jpg" alt="Pool Table" className="w-full h-56 cursor-pointer object-cover group-hover:opacity-30 transition duration-300" />
                    <div className="p-3 bg-black text-center">
                        <h3 className="text-2xl font-semibold mb-2">Pool Table</h3>
                        <h5 className="text-sm">Sink the 8-ball last to win. 1v1 or doubles. Classic fun!</h5>
                    </div>


                </div>

                {/* Snooker Table */}
                <div
                    style={{
                        boxShadow: "0 10px 15px -3px rgba(63, 197, 207, 0.85), 0 4px 6px -4px hsla(276, 3.70%, 26.50%, 0.88)"
                    }}
                    className="relative group bg-gray-800 rounded-lg overflow-hidden">
                    <img src="/images/snooker.jpeg" alt="Snooker" className="w-full h-56 cursor-pointer object-cover group-hover:opacity-30 transition duration-300" />
                    <div className="p-3 bg-black text-center" >
                        <h3 className="text-2xl font-semibold mb-2">Snooker Table</h3>
                        <h5 className="text-sm">Pot red and colored balls in sequence. Strategic and competitive!</h5>
                    </div>
                </div>

                {/* PS5 with Posters */}
                <div
                    style={{
                        boxShadow: "0 10px 15px -3px rgba(193, 63, 207, 0.85), 0 4px 6px -4px hsla(276, 3.70%, 26.50%, 0.88)"
                    }}
                    className="relative group bg-gray-800 rounded-lg overflow-hidden">
                    <img src="/images/Ps5gaming.jpg.crdownload" alt="PS5" className="w-full h-56 cursor-pointer object-cover group-hover:opacity-30 transition duration-300" />
                    <div className="p-3 bg-black text-center">
                        <h3 className="text-2xl font-semibold mb-2">PS5</h3>
                        <h5 className="text-sm">Play FIFA, Mortal Kombat, GTA & more. Plug in and dominate!</h5>
                    </div>
                </div>

                {/* Free Games Section */}
                <div className="col-span-1 mt-15 sm:col-span-2 lg:col-span-3">
                    <h3 className="text-2xl font-bold text-center mb-6">Free Games !!!</h3>
                    <h5 className=" text-center" >Grab your squad and dive into nonstop free gaming fun! </h5>
                    <div className="grid grid-cols-2 mt-10 sm:grid-cols-4 gap-6">
                        {/* Carrom */}
                        <div className="relative group bg-black-700 rounded-lg overflow-hidden">
                            <img src="/images/carrom.jpg" alt="Carrom" className="w-full h-40 object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg" />
                            <div className="p-4 bg-black text-center">
                                <h4 className="text-sm">Flick to pocket your pieces. Queen’s the crown!</h4>
                            </div>
                        </div>

                        {/* Chess */}
                        <div className="relative group bg-black-700 rounded-lg overflow-hidden">
                            <img src="/images/chess.jpg" alt="Chess" className="w-full h-40 object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg" />
                            <div className="p-3 bg-black text-center">
                                <h4 className="text-sm">Checkmate your opponent. The ultimate mind game.</h4>
                            </div>
                        </div>

                        {/* Uno */}
                        <div className="relative group bg-black-700 rounded-lg overflow-hidden">
                            <img src="/images/Uno.jpg" alt="Uno" className="w-full h-40 object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg" />
                            <div className="p-3 bg-black text-center">
                                <h4 className="text-sm">Match cards by color or number. Don’t forget to say UNO!</h4>
                            </div>
                        </div>

                        {/* Jenga */}
                        <div className="relative group bg-black-700 rounded-lg overflow-hidden">
                            <img src="/images/Jenga.jpg" alt="Jenga" className="w-full h-40 object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg" />
                            <div className="p-3 bg-black text-center">
                                <h4 className="text-sm">Pull carefully. Don’t be the one to topple the tower!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HomeSec3;
