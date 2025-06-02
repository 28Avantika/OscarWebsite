// src/Pages/MenuPage.tsx

import { useState } from 'react';
import { menuData, type MenuOption } from '../../data/menuItems';
import PortionSelectionModal from './PortionSelectionModal';
import MobileCartDrawer from '../Order/MobileCartDrawer';
import OrderSummary from '../Order/OrderSummary';
import ConfirmOrderModal from '../Order/ConfirmOrderModal';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

export default function MenuItems() {
  const { user } = useAuth();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState(menuData[0].category_name);
  const [showPortionModal, setShowPortionModal] = useState(false);
  const [showMobileCart, setShowMobileCart] = useState(false);
  const [expandedSubcategories, setExpandedSubcategories] = useState<Record<string, boolean>>({});
  const [selectedItem, setSelectedItem] = useState<null | {
    item: MenuOption;
    subcategory: string;
  }>(null);

  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const handleAddClick = (item: MenuOption, subcategory: string) => {
    if (item.half && item.half !== '-') {
      setSelectedItem({ item, subcategory });
      setShowPortionModal(true);
    } else {
      addToCart(item, 'full', subcategory);
    }
  };

  const handleConfirmOrder = async () => { };

  return (
    <>
      <div className="min-h-screen py-30 bg-black text-white">
        {/* Category Slider */}
        <div className="flex overflow-x-auto custom-scrollbar gap-2 pb-2 px-4">
          {menuData.map(category => (
            <button
              key={category.category_id}
              className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${activeCategory === category.category_name
                ? 'rounded text-semobold bg-gradient-to-r from-orange-700 via-amber-500 to-amber-500 hover:opacity-80'
                : 'bg-black text-white hover:bg-gray-200'
                }`}
              onClick={() => setActiveCategory(category.category_name)}
            >
              {category.category_name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto  px-4 py-6 flex flex-col md:flex-row gap-6">
          {/* Menu Items */}
          <div className="flex-1">
            {menuData.map(category => (
              <div
                key={category.category_id}
                className={`${activeCategory === category.category_name ? 'block' : 'hidden'}`}
              >
                <h2 className="text-xl font-bold text-gray-200 mb-4">
                  <span className="mr-2">{category.icon}</span>
                  {category.category_name}
                </h2>

                {category.items.map(subcategory => (
                  <div key={subcategory.subcategory_id} className="mb-8">
                    {category.items.length > 1 ? (
                      <>
                        {/* Expandable Section */}
                        <button
                          onClick={() => {
                            const newExpanded = { ...expandedSubcategories };
                            newExpanded[subcategory.subcategory_id] = !newExpanded[subcategory.subcategory_id];
                            setExpandedSubcategories(newExpanded);
                          }}
                          className="text-m font-semibold text-gray-300 mb-3 flex items-center"
                        >
                          {subcategory.subcategory_name}
                          
                        </button>

                        {expandedSubcategories[subcategory.subcategory_id] && (
                          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {subcategory.options.map(item => (
                              <div
                                key={item.id}
                                className="bg-[#1a1a1a] flex flex-col justify-between rounded-lg shadow-sm p-4"
                              >
                                <div>
                                  <p className="text-yellow-500">{item.name}</p>
                                  <div className="flex gap-4 mt-1 text-gray-300">
                                    {item.full && <p className="text-sm">Full ₹{item.full}</p>}
                                    {item.half && item.half !== '-' && <p className="text-sm">Half ₹{item.half}</p>}
                                  </div>
                                </div>
                                <button
                                  onClick={() => handleAddClick(item, subcategory.subcategory_name)}
                                  className="mt-4 rounded font-semibold bg-gradient-to-r from-orange-700 via-amber-500 to-amber-500 hover:opacity-80 text-white px-3 py-2"
                                >
                                  Add
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        {/* Direct Grid Display */}
                        <h3 className="text-m font-semibold text-gray-300 mb-3">
                          {subcategory.subcategory_name}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {subcategory.options.map(item => (
                            <div
                              key={item.id}
                              className="bg-[#1a1a1a] flex flex-col justify-between rounded-lg shadow-sm p-4"
                            >
                              <div>
                                <h5 className="font-medium text-white">{item.name}</h5>
                                <div className="flex gap-4 mt-1 text-yellow-100">
                                  {item.full && <p className="text-sm">Full ₹<b>{item.full}</b></p>}
                                  {item.half && item.half !== '-' && <p className="text-sm">Half ₹<b>{item.half}</b></p>}
                                </div>
                              </div>
                              <button
                                onClick={() => handleAddClick(item, subcategory.subcategory_name)}
                                className="mt-4 rounded font-semibold bg-gradient-to-r from-orange-700 via-amber-500 to-amber-500 hover:opacity-80 text-white px-3 py-2"
                              >
                                Add
                              </button>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>


          {/* Order Summary */}
          <div className="hidden md:block md:w-80">
            <OrderSummary
              cart={cart}
              onRemove={removeFromCart}
              onUpdateQuantity={updateQuantity}
              onProceedToPay={() => {
                setShowConfirmModal(true);
              }}
              isAuthenticated={false}
              cafeLocation={{ lat: 0, lng: 0 }}
            />
          </div>
        </div>

        {/* Mobile Cart Button */}
        <div className="fixed bottom-4 right-4 md:hidden">
          <button
            onClick={() => setShowMobileCart(true)}
            className="bg-amber-600 text-white p-3 rounded-full shadow-lg relative"
          >
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Cart Drawer */}
        <MobileCartDrawer
          isOpen={showMobileCart}
          cart={cart}
          onClose={() => setShowMobileCart(false)}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onProceedToPay={() => {
            setShowMobileCart(false);
            setShowConfirmModal(true);
          }}
          isAuthenticated={false}
          cafeLocation={{ lat: 0, lng: 0 }}
        />

        {/* Portion Selection Modal */}
        {selectedItem && (
          <PortionSelectionModal
            isOpen={showPortionModal}
            itemName={selectedItem.item.name}
            fullPrice={selectedItem.item.full || ''}
            halfPrice={selectedItem.item.half || '-'}
            onSelect={(portion) => {
              addToCart(selectedItem.item, portion, selectedItem.subcategory);
              setShowPortionModal(false);
            }}
            onClose={() => setShowPortionModal(false)}
          />
        )}

        {/* Confirm Order Modal */}
        <ConfirmOrderModal
          isOpen={showConfirmModal}
          onClose={() => setShowConfirmModal(false)}
          cart={cart}
          onConfirm={handleConfirmOrder}
          userId={user?.uid || null}
          customerName={user?.displayName || user?.email || null}
        />
      </div>
    </>
  );
}
