'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '@/data/products';

type CartItem = Product & { quantity: number };
type CartContextType = { items: CartItem[]; count: number; total: number; add: (p: Product) => void; remove: (id: string) => void; setQuantity: (id: string, q: number) => void; clear: () => void };
const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => { try { setItems(JSON.parse(localStorage.getItem('lumiere-cart') || '[]')); } catch {} }, []);
  useEffect(() => { localStorage.setItem('lumiere-cart', JSON.stringify(items)); }, [items]);
  const value = useMemo(() => ({
    items, count: items.reduce((s, i) => s + i.quantity, 0), total: items.reduce((s, i) => s + i.price * i.quantity, 0),
    add: (p: Product) => setItems(cur => { const found = cur.find(i => i.id === p.id); return found ? cur.map(i => i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i) : [...cur, { ...p, quantity: 1 }]; }),
    remove: (id: string) => setItems(cur => cur.filter(i => i.id !== id)),
    setQuantity: (id: string, q: number) => setItems(cur => q < 1 ? cur.filter(i => i.id !== id) : cur.map(i => i.id === id ? { ...i, quantity: q } : i)),
    clear: () => setItems([]),
  }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export const useCart = () => { const ctx = useContext(CartContext); if (!ctx) throw new Error('useCart must be inside CartProvider'); return ctx; };
