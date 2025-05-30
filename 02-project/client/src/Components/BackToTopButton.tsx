import { useEffect, useState } from 'react';
import ControllerImage from '../assets/backToTopButton.png';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 cursor-pointer transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        hover:scale-105 active:scale-95  // Adds subtle interactivity
        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20`}
    >
      <img
        src={ControllerImage}
        alt="Back to top"
        className="w-full h-full object-contain"  // Ensures image scales properly
      />
    </button>
  );
};

export default BackToTopButton;