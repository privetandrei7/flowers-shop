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
];

export const formatPrice = (price: number) => `${price.toLocaleString('ru-RU')} ₴`;
