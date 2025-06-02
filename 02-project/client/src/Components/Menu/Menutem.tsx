// src/Components/Menu/MenuItem.tsx
import { type MenuOption } from '../../data/menuItems';

export default function MenuItem({ item }: { item: MenuOption }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-4 last:mb-0 hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 >{item.name}</h3>
            {item.description && (
              <p className="text-gray-500 text-sm mt-1">{item.description}</p>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              {item.full && (
                <span className="block font-semibold text-gray-900">Rs {item.full}</span>
              )}
              {item.half && item.half !== '-' && (
                <span className="block text-sm text-gray-500">Half: Rs{item.half}</span>
              )}
            </div>
            
            <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-medium transition-colors whitespace-nowrap">
              Add item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}