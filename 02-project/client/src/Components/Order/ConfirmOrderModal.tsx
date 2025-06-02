import { useState } from 'react';
import type { CartItem } from '../../context/CartContext';

interface ConfirmOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  userId?: string | null;  // Add this line
  customerName?: string | null; // Also make sure this exists
  onConfirm: (address: string, phone: string, orderDetails: {
    subtotal: number;
    gst: number;
    total: number;
    items: Array<{
      name: string;
      portion: string;
      quantity: number;
      price: number;
      itemTotal: number
    }>;
  }) => void;
}


export default function ConfirmOrderModal({
  isOpen,
  onClose,

  cart,
}: ConfirmOrderModalProps) {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [activeTab, setActiveTab] = useState('order');

  const subtotal = cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
  const gst = subtotal * 0;
  const total = subtotal + gst;

  const orderItems = cart.map(item => ({
    name: item.name,
    portion: item.portion,
    quantity: item.quantity,
    price: parseFloat(item.price),
    itemTotal: parseFloat(item.price) * item.quantity
  }));


  const [showConfirmModal, setShowConfirmModal] = useState(false);
  showConfirmModal
  const [showConfirmationUI, setShowConfirmationUI] = useState(false);
  showConfirmationUI
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

    //console.log("Order confirmed with:", { address, phone, orderDetails });
    setShowConfirmModal(false);
    setShowConfirmationUI(true);
    setShowConfirmModal(false);
    onClose();


  };

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center m-2">
      <div className="bg-gray-200 mt-35 rounded-lg w-full max-w-md max-h-[90vh] border-2 border-yellow-200 overflow-y-auto custom-scrollbar">
        {/* Header */}
        <div className="sticky top-0 bg-black p-2 border-b border-yellow-200 ml-10 mr-10">
          <h3 className="text-xl font-bold text-center">Confirm Your Order</h3>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Slider Navigation */}
          <div className="flex mb-4 ">
            <button
              className={`flex-1 pb-2 text-sm font-medium ${activeTab === 'order' ? 'text-yellow-200 border-b-2 border-yellow-200' : 'text-gray-500'}`}
              onClick={() => setActiveTab('order')}
            >
              Order Details
            </button>
            <button
              className={`flex-1 pb-2 text-sm font-medium ${activeTab === 'address' ? 'text-yellow-200 border-b-2 border-yellow-200' : 'text-gray-500'}`}
              onClick={() => setActiveTab('address')}
            >
              Delivery Details
            </button>
          </div>

          {/* Order Details Slide */}
          {activeTab === 'order' && (
            <div>
              <div className="mb-2">
                <div className="max-h-[40vh] overflow-y-auto custom-scrollbar">
                  <ul className="divide-y divide-yellow-200 mr-5">
                    {cart.map((item, idx) => (
                      <li key={idx} className="py-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-sm">
                              {item.name} <span className="text-yellow-300 text-xs">({item.portion})</span>
                            </p>
                            <p className="text-yellow-300 text-xs">Qty: {item.quantity}</p>
                          </div>
                          <p className="font-semibold text-sm whitespace-nowrap">₹{(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-yellow-200">
                  <div className="flex flex-col m-auto text-sm w-full px-4 py-2">
                    <div className="flex justify-between font-semibold">
                      <h6 className='text-yellow-200'>Total:</h6>
                      <h6>₹{total.toFixed(2)}</h6>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Address Slide */}
          {activeTab === 'address' && (
            <div className="space-y-4">
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">Delivery Address</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2 bg-black border-l-2 border-yellow-200 focus:outline-none text-sm"
                  rows={3}
                  placeholder="Enter your delivery address"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2  bg-black border-l-2 border-yellow-200 focus:outline-none text-sm"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-black p-4 border-t border-orange-200">

          <div className="flex space-x-3">
            <button
              className="flex-1 py-2.5  text-white bg-red-800 rounded m-1 rounded-md text-sm font-medium"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="flex-1 rounded  bg-gradient-to-r from-amber-700 m-1 via-amber-600 to-amber-700 hover:opacity-80 text-white"
              onClick={() => handleConfirmOrder(address, phone, {
                subtotal,
                gst,
                total,
                items: orderItems
              })}
              disabled={!address || !phone || cart.length === 0}
            >
              Confirm Order
            </button>

          </div>
          <p className='text-xs pt-2 animate-pulse text-center'>After confirming You will be redirected to whatsapp. Do click on <b>Send</b> on WhatsApp </p>
        </div>
      </div>
    </div>
  );
}