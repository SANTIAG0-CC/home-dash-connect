import { useState, useCallback } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
  unit?: string;
}

export interface CartState {
  items: CartItem[];
  total: number;
  totalItems: number;
}

export function useCart() {
  const [cart, setCart] = useState<CartState>({
    items: [],
    total: 0,
    totalItems: 0
  });

  const addToCart = useCallback((product: Omit<CartItem, 'quantity'>) => {
    setCart(prev => {
      const existingItem = prev.items.find(item => item.id === product.id);
      
      let newItems;
      if (existingItem) {
        newItems = prev.items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...prev.items, { ...product, quantity: 1 }];
      }
      
      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return { items: newItems, total, totalItems };
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart(prev => {
      const newItems = prev.items.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [] as CartItem[]);
      
      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return { items: newItems, total, totalItems };
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart({ items: [], total: 0, totalItems: 0 });
  }, []);

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart
  };
}