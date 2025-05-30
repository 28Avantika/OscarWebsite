export interface CartItem {
  id: string;
  name: string;
  price: string;
  portion: string;
  quantity: number;
}

export interface ConfirmOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  userId: string | null;
  customerName: string | null;
}

export interface OrderData {
  userId: string;
  orderNumber: string;
  cart: CartItem[];
  subtotal: number;
  gst: number;
  total: number;
  address: string;
  phone: string;
  customerName: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  timestamp: any;
}