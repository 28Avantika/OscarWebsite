import { Swiper, SwiperSlide } from 'swiper/react';
import "../../../node_modules/swiper/swiper-bundle.min.css"

const MenuSwiper: React.FC = () => (
  <div className='bg-black text-white'>
    <div className='pt-6 sm:pt-20 md:pt-20 lg:pt-23'>
      <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
        {['/images/Oscar/Menu/Front.png', '/images/Oscar/Menu/Back.png', '/images/Oscar/Menu/Chinese1.png', '/images/Oscar/Menu/Chinese2.png'].map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className='flex items-center justify-center gap-4'>
              <p className="hidden sm:block text-pink-200 ">&larr;  swipe</p>
              <h5 className='hidden sm:block text-center border-b-2 border-pink-200 nline-flex px-4 py-1 font-bold rounded'>Menu {idx + 1}</h5>
              <p className="hidden sm:block text-pink-200 "> swipe &rarr;</p>
            </div>
            <img
              src={`${img}`}
              alt={`Menu ${idx + 1}`}
              className="w-full h-[80vh] px-3 object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  </div>
);

export default MenuSwiper;
