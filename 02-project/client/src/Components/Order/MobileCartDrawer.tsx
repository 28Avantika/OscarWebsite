import { AnimatePresence, motion } from "framer-motion";
import type { CartItem } from "../../context/CartContext";
import OrderSummary from "./OrderSummary";
import { useState } from "react";
import ConfirmOrderModal from "./ConfirmOrderModal";

type Props = {
  isOpen: boolean;
  cart: CartItem[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onProceedToPay: () => void; // Add this line
  isAuthenticated: boolean;
  cafeLocation: { lat: number; lng: number };
};

const MobileCartDrawer: React.FC<Props> = ({
  isOpen,
  cart,
  onClose,
  onRemove,
  onUpdateQuantity,
  onProceedToPay, // Add this line
  isAuthenticated,
  cafeLocation
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showConfirmationUI, setShowConfirmationUI] = useState(false); // Add this line


  const handleProceedToPay = () => {
    setShowConfirmModal(true);
    onProceedToPay
  };

  const handleConfirmOrder = (address: string, phone: string, orderDetails: {
    subtotal: number;
    gst: number;
    total: number;
    items: Array<{
      name: string;
      portion: string;
      quantity: number;
      price: number;
      itemTotal: number;
    }>;
  }) => {
    console.log("Order confirmed with:", { address, phone });
    // Create order summary message
    const orderSummary = orderDetails.items.map(item =>
      `${item.name} (${item.portion}) x ${item.quantity} - ₹${item.itemTotal.toFixed(2)}`
    ).join('\n');

    // Create WhatsApp message
    const message = `My Order at *Oscar cafe and Gaming Zone*\n\n` +
      `*Order Summary:*\n${orderSummary}\n\n` +
      `*Total:* ₹${orderDetails.total.toFixed(2)}\n\n` +
      `*Delivery Address:* \n ${address}\n\n` +
      `*Contact Number:*\n ${phone}\n\n` +
      `My Order is confirmed. Guide me with Payment Process`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/9226547545?text=${encodedMessage}`, '_blank');

    console.log("Order confirmed with:", { address, phone, orderDetails });
    setShowConfirmModal(false);
    setShowConfirmationUI(true);

    setShowConfirmModal(false);
    onClose();


  };


  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={onClose}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-black z-50 shadow-xl"
            >
              <div className="absolute top-4 right-4">
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="h-full overflow-y-auto p-4">
                <OrderSummary
                  cart={cart}
                  onRemove={onRemove}
                  onUpdateQuantity={onUpdateQuantity}
                  isAuthenticated={isAuthenticated}
                  cafeLocation={cafeLocation}
                  onProceedToPay={handleProceedToPay}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ConfirmOrderModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        cart={cart}
        onConfirm={handleConfirmOrder}
      />

      {showConfirmationUI && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 max-w-sm mx-4"
          >
            <div className="text-center">
              <div className="text-green-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Order Confirmed!</h3>
              <p className="text-gray-600 mb-4">
                We've sent the order details to your WhatsApp. Please check your messages
                and confirm the order with payment details there.
              </p>
              <button
                onClick={() => {
                  setShowConfirmationUI(false);
                  cart.forEach(item => onRemove(item.id));
                  onClose();
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default MobileCartDrawer;