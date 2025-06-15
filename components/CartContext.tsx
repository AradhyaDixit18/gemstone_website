'use client';

import { createContext, useContext, useEffect, useState } from 'react';

/* ---------------------------------  Types -------------------------------- */

type CartItem = {
  name: string;
  img: string;
  dimensions: string;
  /* add other properties if your stone object contains them */
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
}

/* -----------------------------  Implementation --------------------------- */

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  /* -------------------------  Persist to localStorage -------------------- */
  useEffect(() => {
    const stored = localStorage.getItem('gemCart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('gemCart', JSON.stringify(cart));
  }, [cart]);

  /* -----------------------------  API Methods --------------------------- */
  const addToCart = (item: CartItem) => setCart(prev => [...prev, item]);

  const removeFromCart = (index: number) =>
    setCart(prev => prev.filter((_, i) => i !== index));

  /* -----------------------------  Provider ------------------------------ */
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

/* -----------------------------  Convenience ----------------------------- */
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
};
