import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const categories = ['День рождения', 'Для любимой', 'Для мамы', 'Просто так', 'Спасибо'];

export default function Home() {
  return <>
    <Header />
    <main>
      <section className="hero"><div className="container"><div className="hero-card"><div className="hero-copy"><div className="eyebrow">Lumière flowers</div><h1>Цветы, которые говорят за вас</h1><p>Свежие букеты от флористов. Соберём заказ сегодня и бережно доставим получателю.</p><a className="btn light" href="/catalog">Выбрать букет</a></div></div></div></section>
      <section><div className="container"><div className="section-head"><h2>Выбирайте по поводу</h2></div><div className="chips">{categories.map((x) => <a className="chip" href="/catalog" key={x}>{x} <span>→</span></a>)}</div></div></section>
      <section id="catalog"><div className="container"><div className="section-head"><h2>Хиты продаж</h2><a href="/catalog">Смотреть все →</a></div><div className="products">{products.slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)}</div></div></section>
      <div className="trust"><div className="container trust-grid"><div className="trust-item"><div className="trust-icon">✿</div><div><strong>Свежие цветы</strong><span>Получаем поставки несколько раз в неделю</span></div></div><div className="trust-item"><div className="trust-icon">⏱</div><div><strong>Доставка от 2 часов</strong><span>Выберите удобный интервал при оформлении</span></div></div><div className="trust-item"><div className="trust-icon">♡</div><div><strong>Фото перед доставкой</strong><span>Покажем готовый букет перед отправкой</span></div></div><div className="trust-item"><div className="trust-icon">✓</div><div><strong>Гарантия качества</strong><span>Если что-то не так — обязательно исправим</span></div></div></div></div>
      <section id="delivery"><div className="container delivery"><div><h2>Подарок сегодня — без лишних хлопот</h2><p>Оформите заказ онлайн, укажите адрес и время. Флорист соберёт букет вручную, а курьер аккуратно доставит его получателю.</p><p><b>Доставка по Киеву</b> · с 9:00 до 22:00</p><a className="btn" href="/catalog">Заказать доставку</a></div><img src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=85" alt="Букет цветов" /></div></section>
      <section><div className="container"><div className="section-head"><h2>Нас выбирают за эмоции</h2></div><div className="reviews"><div className="review"><div className="stars">★★★★★</div><p>«Букет оказался даже красивее, чем на фото. Доставили вовремя, всё очень аккуратно.»</p><strong>Анна · Киев</strong></div><div className="review"><div className="stars">★★★★★</div><p>«Заказывал сюрприз утром — уже после обеда получатель прислал фото. Отличный сервис.»</p><strong>Максим · Львов</strong></div><div className="review"><div className="stars">★★★★★</div><p>«Понравилось, что перед отправкой показали букет. Цветы свежие, упаковка стильная.»</p><strong>Ольга · Одесса</strong></div></div></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-grid"><div><h3>Lumière<span>•</span></h3><p>Цветы и подарки с доставкой. Создаём красивые поводы каждый день.</p></div><div><h4>Каталог</h4><a href="/catalog">Букеты</a><a href="/catalog?category=Розы">Розы</a><a href="/catalog">Новинки</a><a href="/catalog?category=Цветы%20в%20коробке">Подарки</a></div><div><h4>Помощь</h4><a href="#delivery">Доставка</a><a href="/checkout">Оплата</a><a href="#delivery">Гарантия</a><a href="#delivery">Контакты</a></div><div><h4>Города</h4><span>Киев</span><span>Львов</span><span>Одесса</span><span>Днепр</span></div></div><div className="bottom">© 2026 Lumière Flowers · Сделано с любовью к цветам</div></div></footer>
  </>;
}
