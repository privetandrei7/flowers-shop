import { Suspense } from 'react';
import CatalogClient from './CatalogClient';

export default function CatalogPage() {
  return <Suspense fallback={<main className="container catalog"><div className="empty">Загружаем каталог…</div></main>}><CatalogClient /></Suspense>;
}
