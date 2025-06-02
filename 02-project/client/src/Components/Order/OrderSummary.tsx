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
  const gst = subtotal * 0;
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
    <div className="w-full md:w-80 bg-black mt-20 p-4 rounded-lg shadow-md border-l border-yellow-200">
      <h3 className="text-xl font-bold mb-4">Your Order</h3>
      
      {cart.length === 0 ? (
        <p className="text-yellow-200">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
            {cart.map(item => (
              <div key={item.id} className="border-b border-orange-200 pb-3">
                <div className="flex justify-between">
                  <div>
                    <h6 className="font-medium">{item.name}</h6>
                    <p className="text-sm text-yellow-200">
                      {item.portion === 'half' ? 'Half' : 'Full'} • {item.subcategory}
                    </p>
                  </div>
                  <h6 className="text-yellow-200">₹{item.price}</h6>
                </div>
                
                <div className="flex text-xs items-center justify-between mt-2">
                  <div className="flex items-center rounded-md">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 text-yellow-200 hover:font-extrabold"
                    >
                      -
                    </button>
                    <span className="text-yellow-200 text-xs px-2">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 text-yellow-200 hover:font-extrabold"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => onRemove(item.id)}
                    className=" text-red-300 text-xs hover:font-bold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-yellow-200 pt-4">
      
            <div className="flex justify-between font-bold mt-3">
              <h6>Total:</h6>
              <h6>₹{total.toFixed(2)}</h6>
            </div>

            <button
              onClick={handleProceedToPay}
              className="w-full mt-4 rounded font-semibold bg-gradient-to-r from-orange-700 via-amber-500 to-amber-500 hover:opacity-80 text-white px-3 py-2"
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