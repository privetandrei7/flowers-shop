'use client';
import Link from 'next/link';
import type { Product } from '@/data/products';
import { formatPrice } from '@/data/products';
import { useCart } from './CartProvider';
export default function ProductCard({ product }: { product: Product }) { const { add } = useCart(); return <article className="product-card"><Link href={`/product/${product.id}`}><img src={product.image} alt={product.name}/></Link><div className="product-body"><Link href={`/product/${product.id}`}><h3>{product.name}</h3></Link><p>{product.composition}</p><div className="product-bottom"><strong>{formatPrice(product.price)}</strong>{product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}<button onClick={()=>add(product)}>+</button></div></div></article>; }
