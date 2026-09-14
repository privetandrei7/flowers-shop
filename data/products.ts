export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  tags: string[];
  description: string;
  composition: string;
};

const img = (url: string) => `${url}?auto=format&fit=crop&w=1200&q=90`;

export const products: Product[] = [
  { id: 'blush-roses', name: 'Blush Roses', price: 2490, oldPrice: 2990, image: img('https://images.unsplash.com/photo-1579664872746-55e2a805d705'), category: 'Букеты', tags: ['Для любимой', 'Хиты', 'Розы'], description: 'Нежный букет в пудровых оттенках для особенного момента.', composition: 'Розы, эвкалипт, сезонная зелень' },
  { id: 'peony-dream', name: 'Peony Dream', price: 3290, image: img('https://images.unsplash.com/photo-1618239265038-9e4c865fbd10'), category: 'Букеты', tags: ['Для любимой', 'Новинки'], description: 'Воздушная композиция с выразительными пионами.', composition: 'Пионы, кустовые розы, зелень' },
  { id: 'white-cloud', name: 'White Cloud', price: 2790, image: img('https://images.unsplash.com/photo-1521052424247-a1a47c7de691'), category: 'Букеты', tags: ['Для мамы', 'Спасибо'], description: 'Чистая белая композиция с лёгким, элегантным характером.', composition: 'Белые розы, хризантемы, эвкалипт' },
  { id: 'sunny-mood', name: 'Sunny Mood', price: 2190, oldPrice: 2590, image: img('https://images.unsplash.com/photo-1719477498569-2d6e69cad50b'), category: 'Букеты', tags: ['День рождения', 'Хиты'], description: 'Солнечный букет, который сразу создаёт настроение праздника.', composition: 'Альстромерии, розы, хризантемы' },
  { id: 'red-passion', name: 'Red Passion', price: 3890, image: img('https://images.unsplash.com/photo-1611784460482-f9a181cf3f91'), category: 'Розы', tags: ['Для любимой', 'Розы'], description: 'Классическая композиция из насыщенных красных роз.', composition: 'Красные розы, зелень' },
  { id: 'garden-box', name: 'Garden Box', price: 2990, image: img('https://images.unsplash.com/photo-1591529787628-4ed43078e9e6'), category: 'Цветы в коробке', tags: ['Спасибо', 'Новинки'], description: 'Стильная коробка с сезонными цветами и премиальной подачей.', composition: 'Розы, ранункулюсы, сезонные цветы' },
  { id: 'mini-lumiere', name: 'Mini Lumière', price: 1690, image: img('https://images.unsplash.com/photo-1705807070861-1cf5591bd567'), category: 'Букеты', tags: ['Просто так'], description: 'Небольшой комплимент без повода — просто чтобы порадовать.', composition: 'Сезонные цветы, зелень' },
  { id: 'royal-roses', name: 'Royal Roses', price: 4490, image: img('https://images.unsplash.com/photo-1710505235775-fe00c617d95a'), category: 'Розы', tags: ['Хиты', 'Розы', 'День рождения'], description: 'Эффектный букет для яркого признания и важных дат.', composition: 'Эквадорские розы, декоративная зелень' },

  { id: 'peach-garden', name: 'Peach Garden', price: 3190, image: img('https://images.unsplash.com/photo-1457102053979-b1da354f1785'), category: 'Букеты', tags: ['Новинки', 'Для любимой'], description: 'Романтичный садовый букет в кремово-персиковой гамме.', composition: 'Розы, ранункулюсы, ягоды, эвкалипт' },
  { id: 'lavender-roses', name: 'Lavender Roses', price: 3490, image: img('https://images.unsplash.com/photo-1771142480968-6036543055f7'), category: 'Розы', tags: ['Хиты', 'Розы'], description: 'Премиальная композиция с пудровыми и лавандовыми розами.', composition: 'Кустовые розы, розы, зелень' },
  { id: 'pink-orange', name: 'Pink Orange', price: 2690, oldPrice: 2990, image: img('https://images.unsplash.com/photo-1545238771-1cfdc621c2ea'), category: 'Букеты', tags: ['День рождения', 'Хиты'], description: 'Яркий микс розовых и тёплых оттенков для праздника.', composition: 'Розы, герберы, сезонные цветы' },
  { id: 'amber-bloom', name: 'Amber Bloom', price: 2890, image: img('https://images.unsplash.com/photo-1588169126439-bf9cba5b0e69'), category: 'Букеты', tags: ['Спасибо', 'Просто так'], description: 'Тёплая композиция в оттенках янтаря, апельсина и мёда.', composition: 'Оранжевые розы, хризантемы, зелень' },
  { id: 'autumn-rose', name: 'Autumn Rose', price: 3390, image: img('https://images.unsplash.com/photo-1494336877155-7fb9c6984f0a'), category: 'Букеты', tags: ['Новинки', 'Для мамы'], description: 'Глубокий сезонный букет с кремовыми розами и ягодами.', composition: 'Розы, астранция, ягоды, эвкалипт' },
  { id: 'botanical-luxe', name: 'Botanical Luxe', price: 3790, image: img('https://images.unsplash.com/photo-1487530811176-3780de880c2d'), category: 'Букеты', tags: ['Премиум', 'Хиты'], description: 'Фактурный авторский букет с розами и необычной зеленью.', composition: 'Садовые розы, астранция, статица, зелень' },
  { id: 'rose-mix', name: 'Rose Mix', price: 3590, image: img('https://images.unsplash.com/photo-1660765036013-b61a2306a2a5'), category: 'Розы', tags: ['Розы', 'День рождения'], description: 'Большой разноцветный букет роз для яркого подарка.', composition: 'Розы красные, жёлтые, кремовые и оранжевые' },
  { id: 'pink-peony', name: 'Pink Peony', price: 3190, image: img('https://images.unsplash.com/photo-1655723030922-3c3a8b5e3f51'), category: 'Букеты', tags: ['Пионы', 'Для любимой'], description: 'Нежные розовые пионы в лаконичной стеклянной подаче.', composition: 'Пионы, зелень' },
  { id: 'white-bloom', name: 'White Bloom', price: 2990, image: img('https://images.unsplash.com/photo-1554302313-c96f9cf5f11e'), category: 'Букеты', tags: ['Для мамы', 'Спасибо'], description: 'Воздушный белый букет с чистым минималистичным настроением.', composition: 'Белые цветы, маттиола, зелень' },
  { id: 'pink-peonies', name: 'Pink Peonies', price: 3690, image: img('https://images.unsplash.com/photo-1623429618173-cf8f64a9ed95'), category: 'Букеты', tags: ['Пионы', 'Новинки'], description: 'Пышная композиция из розовых пионов для особого случая.', composition: 'Пионы, розы, сезонная зелень' },
  { id: 'white-peony', name: 'White Peony', price: 3490, image: img('https://images.unsplash.com/photo-1674921092109-439454be0775'), category: 'Букеты', tags: ['Пионы', 'Для мамы'], description: 'Светлая композиция с белыми пионами и мягким дневным светом.', composition: 'Белые пионы, зелень, сезонные цветы' },
  { id: 'spring-white', name: 'Spring White', price: 2590, image: img('https://images.unsplash.com/photo-1516616022077-4748fc3876d5'), category: 'Букеты', tags: ['Весна', 'Спасибо'], description: 'Свежий весенний букет в бело-розовой гамме.', composition: 'Пионы, ранункулюсы, сезонные цветы' },
  { id: 'coral-bouquet', name: 'Coral Bouquet', price: 2790, image: img('https://images.unsplash.com/photo-1494337095615-b5f370aad75f'), category: 'Букеты', tags: ['Новинки', 'День рождения'], description: 'Элегантный кораллово-розовый букет в крафтовой упаковке.', composition: 'Кориалловые розы, гвоздики, зелень' },
];

export const formatPrice = (price: number) => `${price.toLocaleString('ru-RU')} ₴`;
