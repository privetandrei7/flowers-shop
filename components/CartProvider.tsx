'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '@/data/products';

type CartItem = Product & { quantity: number };
type CartContextType = { items: CartItem[]; count: number; total: number; add: (p: Product) => void; remove: (id: string) => void; setQuantity: (id: string, q: number) => void; clear: () => void };
const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      setItems(JSON.parse(localStorage.getItem('lumiere-cart') || '[]'));
    } catch {
      setItems([]);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem('lumiere-cart', JSON.stringify(items));
  }, [items, hydrated]);

  const value = useMemo(() => ({
    items,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    add: (p: Product) => setItems((cur) => {
      const found = cur.find((item) => item.id === p.id);
      return found
        ? cur.map((item) => item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...cur, { ...p, quantity: 1 }];
    }),
    remove: (id: string) => setItems((cur) => cur.filter((item) => item.id !== id)),
    setQuantity: (id: string, q: number) => setItems((cur) => q < 1
      ? cur.filter((item) => item.id !== id)
      : cur.map((item) => item.id === id ? { ...item, quantity: q } : item)),
    clear: () => setItems([]),
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
};
