'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import { products, formatPrice } from '@/data/products';
import { useCart } from '@/components/CartProvider';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((item) => item.id === id);
  const { add } = useCart();

  if (!product) {
    return (
      <>
        <Header />
        <main className="container product-page">
          <div className="empty-state">
            <h1>Товар не найден</h1>
            <p>Возможно, букет уже закончился.</p>
            <Link className="primary-btn" href="/catalog">Вернуться в каталог</Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container product-page">
        <div className="breadcrumb">
          <Link href="/">Главная</Link> / <Link href="/catalog">Каталог</Link> / {product.name}
        </div>
        <div className="product-detail">
          <div><img src={product.image} alt={product.name} /></div>
          <div className="product-info">
            <span className="eyebrow">LUMIÈRE FLOWERS</span>
            <h1>{product.name}</h1>
            <div className="price-big">
              {formatPrice(product.price)} {product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}
            </div>
            <p className="lead">{product.description}</p>
            <div className="detail-box"><b>Состав</b><span>{product.composition}</span></div>
            <div className="detail-box"><b>Доставка</b><span>Сегодня по Киеву · от 150 ₴</span></div>
            <button className="primary-btn" onClick={() => add(product)}>Добавить в корзину</button>
            <Link className="secondary-btn" href="/checkout">Перейти к оформлению</Link>
          </div>
        </div>
      </main>
    </>
  );
}
