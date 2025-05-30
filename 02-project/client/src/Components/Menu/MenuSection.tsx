// src/Components/Menu/MenuSection.tsx
import { useState } from 'react';
import MenuItem from './Menutem';
import { type MenuCategory } from '../../data/menuItems';

interface MenuSectionProps {
  category: MenuCategory;
  isActive: boolean;
}

export default function MenuSection({ category, isActive }: MenuSectionProps) {
  const [expandedSubcategory, setExpandedSubcategory] = useState<number | null>(null);

  if (!isActive) return null;

  return (
    <section className="mb-12 animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{category.category_name}</h1>
      
      {category.items.map((subcategory) => (
        <div key={subcategory.subcategory_id} className="mb-8">
          <div 
            className="flex items-center justify-between cursor-pointer py-3"
            onClick={() => setExpandedSubcategory(
              expandedSubcategory === subcategory.subcategory_id 
                ? null 
                : subcategory.subcategory_id
            )}
          >
            <h2 className="text-xl font-semibold text-gray-700">
              {subcategory.subcategory_name}
            </h2>
            <span className="text-gray-500">
              {expandedSubcategory === subcategory.subcategory_id ? '▲' : '▼'}
            </span>
          </div>

          {subcategory.image && (
            <img 
              src={subcategory.image} 
              alt={subcategory.subcategory_name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          )}

          {(expandedSubcategory === null || expandedSubcategory === subcategory.subcategory_id) && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {subcategory.options.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}