// src/context/CartContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';
import type { MenuOption } from '../data/menuItems';



export interface CartItem {
  id: string;
  name: string;
  price: string;
  portion: 'half' | 'full';
  subcategory: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuOption, portion: 'half' | 'full', subcategory: string) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: {
    subtotal: number;
    gst: number;
    total: number;
  };
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const cartTotal = {
    subtotal: cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0),
    gst: cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity * 0.18), 0),
    total: cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity * 1.18), 0)
  };

  const addToCart = (item: MenuOption, portion: 'half' | 'full', subcategory: string) => {
    const price = portion === 'half' ? item.half! : item.full;
    setCart(prev => {
      const existingItem = prev.find(cartItem => 
        cartItem.name === item.name && 
        cartItem.portion === portion &&
        cartItem.subcategory === subcategory
      );
      
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === existingItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      
      return [...prev, {
        id: `${Date.now()}-${item.id}`,
        name: item.name,
        price,
        portion,
        subcategory,
        quantity: 1
      }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};