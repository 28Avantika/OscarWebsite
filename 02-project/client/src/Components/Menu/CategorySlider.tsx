// src/Components/Menu/CategorySlider.tsx
import { useEffect, useRef } from 'react';

interface CategorySliderProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export default function CategorySlider({ 
  categories, 
  activeCategory, 
  onSelect 
}: CategorySliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active category
  useEffect(() => {
    if (containerRef.current) {
      const activeElement = containerRef.current.querySelector('.active');
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeCategory]);

  return (
    <div 
      ref={containerRef}
      className="flex overflow-x-auto scrollbar-hide py-4 px-4 gap-2"
    >
      {categories.map((category) => (
        <button
          key={category}
          className={`whitespace-nowrap px-6 py-2 rounded-full font-medium text-sm transition-colors ${
            activeCategory === category
              ? 'bg-amber-600 text-white active shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}