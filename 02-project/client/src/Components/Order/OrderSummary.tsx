import { type CartItem } from "../../context/CartContext";
import { getAuth } from 'firebase/auth';
import '../../index.css'

interface OrderSummaryProps {
  cart: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  isAuthenticated: boolean;
  cafeLocation: { lat: number; lng: number };
  onProceedToPay?: () => void;
}

export default function OrderSummary({ 
  cart, 
  onRemove, 
  onUpdateQuantity,
  onProceedToPay
}: OrderSummaryProps) {
  const subtotal = cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  const handleProceedToPay = () => {
    const user = getAuth().currentUser;

    if (!user) {
      alert('Please login to proceed with payment');
      return;
    }

    if (onProceedToPay) {
      onProceedToPay();
    }
  };

  return (
    <div className="w-full md:w-80 bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-bold mb-4">Your Order</h3>
      
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
            {cart.map(item => (
              <div key={item.id} className="border-b border-gray-100 pb-3">
                <div className="flex justify-between">
                  <div>
                    <h6 className="font-medium">{item.name}</h6>
                    <p className="text-sm text-gray-500">
                      {item.portion === 'half' ? 'Half' : 'Full'} • {item.subcategory}
                    </p>
                  </div>
                  <h6 className="font-bold">₹{item.price}</h6>
                </div>
                
                <div className="flex text-xs items-center justify-between mt-2">
                  <div className="flex items-center border border-gray-200 rounded-md">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="text-black text-xs px-2">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => onRemove(item.id)}
                    className="text-red-500 text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-black border-t border-gray-200 pt-4">
            <div className="flex text-black justify-between mb-1">
              <h6>Subtotal:</h6>
              <h6>₹{subtotal.toFixed(2)}</h6>
            </div>
            <div className="flex text-black justify-between mb-1">
              <h6>GST (18%):</h6>
              <h6>₹{gst.toFixed(2)}</h6>
            </div>
            <div className="flex justify-between font-bold mt-3">
              <h6>Total:</h6>
              <h6>₹{total.toFixed(2)}</h6>
            </div>

            <button
              onClick={handleProceedToPay}
              className="w-full mt-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium"
              disabled={cart.length === 0}
            >
              Proceed to Pay
            </button>
          </div>
        </>
      )}

      
    </div>
  );
}