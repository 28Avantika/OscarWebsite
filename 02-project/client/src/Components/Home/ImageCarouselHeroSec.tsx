import { useEffect, useState } from 'react';

const ImageCarousel = () => {
    const images = [
        '/images/food8.png',
        '/images/gaming6.png',
        '/images/playing4.png'
    ];



    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="hidden md:block md:w-1/3 lg:w-1/2 md:pl-10 lg:pl-20 relative overflow-hidden rounded-lg">
            <div className="lg:w-full lg:h-90 md:h-70 md:w-90 transition-opacity duration-1000 ease-in-out">
                {images.map((img, index) => (
                    <img
                    
                        key={index}
                        src={img}
                        alt={`Oscar Cafe & Gaming Zone ${index + 1}`}
                        className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out rounded-lg ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    />
        
                ))}
                </div>
                
        </div>
    );
};

export default ImageCarousel;
