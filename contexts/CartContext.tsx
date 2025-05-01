'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  vendor: string;
  description?: string;
  category?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  getTotal: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setMounted(true);
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  const addItem = (newItem: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setItems(prev => {
      const existingItem = prev.find(item => item.id === newItem.id);
      const quantity = newItem.quantity || 1;
      
      if (existingItem) {
        // Check if same vendor
        if (existingItem.vendor !== newItem.vendor) {
          toast.error('Items must be from the same vendor');
          return prev;
        }
        
        const updated = prev.map(item => 
          item.id === newItem.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        localStorage.setItem('cart', JSON.stringify(updated));
        toast.success('Updated quantity in cart');
        return updated;
      }
      
      // Check if mixing vendors
      if (prev.length > 0 && prev[0].vendor !== newItem.vendor) {
        toast.error('Cannot mix items from different vendors');
        return prev;
      }
      
      const updated = [...prev, { ...newItem, quantity }];
      localStorage.setItem('cart', JSON.stringify(updated));
      toast.success('Added to cart');
      return updated;
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => {
      const updated = prev.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems(prev => {
      const updated = prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      );
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  const getTotal = () => items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const getTotalItems = () => items.reduce((sum, item) => sum + item.quantity, 0);

  if (!mounted) return null;

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, getTotal, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
