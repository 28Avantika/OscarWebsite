import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; 



const HeroVideoComp: React.FC = () => {

    const images = [
        '/images/carrom.jpg',
        '/images/chess.jpg',
        '/images/Jenga.jpg',
        '/images/Uno.jpg',
    ];

    return (
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index}`}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>

    )
};


export default HeroVideoComp;
