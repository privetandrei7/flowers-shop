import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lumière Flowers — доставка цветов',
  description: 'Современный сервис доставки букетов и подарков.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}