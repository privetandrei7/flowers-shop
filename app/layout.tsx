import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/components/CartProvider';
export const metadata: Metadata = { title: 'Lumière Flowers — доставка цветов', description: 'Современный сервис доставки букетов и подарков.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru"><body><CartProvider>{children}</CartProvider></body></html>; }
