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
  const gst = subtotal * 0.18;
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
    const message = `Thank you for your order! 🎉\n\n` +
      `*Order Summary:*\n${orderSummary}\n\n` +
      `*Subtotal:* ₹${orderDetails.subtotal.toFixed(2)}\n` +
      `*GST (18%):* ₹${orderDetails.gst.toFixed(2)}\n` +
      `*Total:* ₹${orderDetails.total.toFixed(2)}\n\n` +
      `*Delivery Address:* ${address}\n` +
      `*Contact Number:* ${phone}\n\n` +
      `Please confirm this order and proceed with payment. ` +
      `Our team will contact you shortly for delivery details.`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/9762837188?text=${encodedMessage}`, '_blank');

    console.log("Order confirmed with:", { address, phone, orderDetails });
    setShowConfirmModal(false);
    setShowConfirmationUI(true);

    setShowConfirmModal(false);
    onClose();


  };

  if (!isOpen) return null;

  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white mt-35  rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white  p-2 border-b">
          <h3 className="text-xl font-bold text-center">Confirm Your Order</h3>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Slider Navigation */}
          <div className="flex mb-4 border-b">
            <button
              className={`flex-1 pb-2 text-sm font-medium ${activeTab === 'order' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('order')}
            >
              Order Details
            </button>
            <button
              className={`flex-1 pb-2 text-sm font-medium ${activeTab === 'address' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('address')}
            >
              Delivery Info
            </button>
          </div>

          {/* Order Details Slide */}
          {activeTab === 'order' && (
            <div>
              <div className="mb-2">
                <div className="max-h-[40vh] overflow-y-auto custom-scrollbar">
                  <ul className="divide-y divide-amber-100">
                    {cart.map((item, idx) => (
                      <li key={idx} className="py-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-sm">
                              {item.name} <span className="text-gray-500 text-xs">({item.portion})</span>
                            </p>
                            <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
                          </div>
                          <p className="font-semibold text-sm whitespace-nowrap">₹{(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200">
                  <div className="flex flex-col text-sm ">
                    <p>Subtotal:  ₹{subtotal.toFixed(2)}</p>
                    <p>GST (18%): ₹{gst.toFixed(2)}</p>
                    <p>Total: ₹{total.toFixed(2)}</p>
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
                  className="w-full p-2 border rounded-md text-sm"
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
                  className="w-full p-2 border rounded-md text-sm"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white p-4 border-t">

          <div className="flex space-x-3">
            <button
              className="flex-1 py-2.5 bg-gray-100 text-gray-800 rounded-md text-sm font-medium"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="flex-1 py-2.5 bg-amber-600 text-white rounded-md text-sm font-medium"
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
          <p className='text-xs text-center'>After confirming You will be redirected to whatapp chat with the Owner for Payment </p>
        </div>
      </div>
    </div>
  );
}