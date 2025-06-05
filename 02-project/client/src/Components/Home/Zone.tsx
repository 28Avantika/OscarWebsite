import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface CardProps {
  title: string;
  img: string;
  desc: string;
  onClick: () => void;
}

const ResponsiveZoneCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Food",
      img: "/images/food8.png",
      desc: "Coffee, Pasta, Burger , Pizza...",
      onClick: () => navigate("/menu"),
    },
    {
      title: "Gaming",
      img: "/images/gaming6.png",
      desc: "PS5, PoolTable, Snooker",
      onClick: () => {navigate("/games")},
    },
    {
      title: "Lounge",
      img: "/images/playing4.png",
      desc: "Chess, Carrom, Jenga, Uno Cards",
      onClick: () => {},
    },
  ];

  const Card: React.FC<CardProps> = ({ title, img, desc, onClick }) => (
    <div className="flex flex-col items-center text-center bg-black/20 p-4 rounded-lg shadow-md w-full mx-auto">
      <h3 className="text-lg mb-3 fontStyle">{title}</h3>
      <img
        src={img}
        alt={title}
        className="w-40 h-40 sm:w-60 sm:h-60 md:w-70 md:h-70 lg:w-70 lg:h-60 xl:w-95 xl:h-75 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
      />
      <p className="mt-4 text-yellow-200 font-italic text-l">{desc}</p>
      <button
        onClick={onClick}
        className="flex items-center justify-center font-bold pl-2 py-2 mt-4 border-l-6 border-t border-b-2 border-yellow-300 text-white rounded  hover:font-extrabold transition-all"
        style={{ borderRadius: "10px" }}
      >
        {title} zone
        <div className="ml-2 inline  text-yellow-300 animate-slide-arrow">&rarr;</div>
      </button>
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    swipeToSlide: true,
  };

  return (
    <>
      {/* Mobile: Carousel */}
      <div className="block lg:hidden px-4 py-">
        <Slider {...sliderSettings}>
          {cards.map((card, idx) => (
            <div key={idx}>
              <Card {...card} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop: Static Row */}
      <div className="hidden lg:flex justify-center gap-4 px-4 py-6">
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </>
  );
};

export default ResponsiveZoneCards;
