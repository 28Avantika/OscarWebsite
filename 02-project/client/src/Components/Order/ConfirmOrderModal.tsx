import { useState } from 'react';
import type { CartItem } from '../../context/CartContext';

interface ConfirmOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  userId?: string | null;
  customerName?: string | null;
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

    <div className="fixed shadow-lg inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center m-2">
      <div className="mt-35 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto shadow-[0_0_20px_#fbbf24aa] custom-scrollbar">
        {/* Header */}
        <div className="fontStyle sticky text-yellow-200  top-0 bg-black p-2 border-b border-yellow-200 ">
          <h3 className="text-xl font-bold text-center">Confirm Your Order</h3>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Slider Navigation */}
          <div className="flex mb-4 ">
            <button
              className={`fontStyle flex-1 pb-2 text-sm font-medium ${activeTab === 'order' ? 'text-yellow-200 border-b-2 border-yellow-200' : 'text-gray-500'}`}
              onClick={() => setActiveTab('order')}
            >
              Order Details
            </button>
            <button
              className={`fontStyle flex-1 pb-2 text-sm font-medium ${activeTab === 'address' ? 'text-yellow-200 border-b-2 border-yellow-200' : 'text-gray-500'}`}
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
                              {item.name} <p className="inline text-yellow-200 text-xs">({item.portion})</p>
                            </p>
                            <p className="text-yellow-100 text-xs">Qty: {item.quantity}</p>
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
                      <h6 className='fontStyle text-yellow-200'>Total:</h6>
                      <h6 className='fontStyle'>₹{total.toFixed(2)}</h6>
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
                  className="w-full rounded p-2 border-l-2 border-yellow-200 focus:outline-none text-sm"
                  rows={3}
                  placeholder="Enter your delivery address"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-sm font-meium">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 rounded  border-l-2 border-yellow-200 focus:outline-none text-sm"
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
              className="fontStyle flex-1 py-2.5 text-white bg-red-700/80 hover:bg-red-500 rounded m-1 rounded-md text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="fontStyle flex-1 py-2.5  text-white bg-green-700/80 hover:bg-green-600 rounded m-1 rounded-md text-sm font-medium"
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
          <p className='text-xs pt-2 italic text-center'>
            You’ll be redirected to WhatsApp with a prefilled message. Tap SEND to confirm ✅  your order.</p>
        </div>
      </div>
    </div>
  );
}