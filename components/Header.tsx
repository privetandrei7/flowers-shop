'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from './CartProvider';

export default function Header() {
  const { count } = useCart(); const [open, setOpen] = useState(false);
  return <>
    <div className="topbar"><div>Доставка по Киеву и области</div><div>Ежедневно 08:00–22:00 · +380 67 000 00 00</div></div>
    <header className="header"><Link className="logo" href="/">Lumière <span>FLOWERS</span></Link>
      <div className="desktop-search"><input placeholder="Поиск цветов и подарков" /><span>⌕</span></div>
      <div className="head-actions"><Link href="/catalog">Каталог</Link><Link href="/cart">Корзина <b>{count}</b></Link><button className="hamb" onClick={() => setOpen(!open)}>☰</button></div>
    </header>
    <nav className="nav">{[['Акции','/catalog?sort=sale'],['Новинки','/catalog?sort=new'],['Хиты продаж','/catalog?sort=popular'],['Букеты','/catalog?category=Букеты'],['Розы','/catalog?category=Розы'],['Цветы в коробке','/catalog?category=Цветы%20в%20коробке'],['Подарки','/catalog']].map(([t,h])=><Link key={t} href={h}>{t}</Link>)}</nav>
    {open && <div className="mobile-nav">{[['Каталог','/catalog'],['Акции','/catalog?sort=sale'],['Новинки','/catalog?sort=new'],['Букеты','/catalog?category=Букеты'],['Розы','/catalog?category=Розы'],['Корзина','/cart']].map(([t,h])=><Link onClick={()=>setOpen(false)} key={t} href={h}>{t}</Link>)}</div>}
  </>;
}
