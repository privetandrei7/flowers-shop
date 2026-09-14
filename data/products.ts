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

export const products: Product[] = [
  { id: 'blush-roses', name: 'Blush Roses', price: 2490, oldPrice: 2990, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85', category: 'Букеты', tags: ['Для любимой', 'Хиты', 'Розы'], description: 'Нежный букет в пудровых оттенках для особенного момента.', composition: 'Розы, эвкалипт, сезонная зелень' },
  { id: 'peony-dream', name: 'Peony Dream', price: 3290, image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85', category: 'Букеты', tags: ['Для любимой', 'Новинки'], description: 'Воздушная композиция с выразительными пионами.', composition: 'Пионы, кустовые розы, зелень' },
  { id: 'white-cloud', name: 'White Cloud', price: 2790, image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=85', category: 'Букеты', tags: ['Для мамы', 'Спасибо'], description: 'Чистая белая композиция с лёгким, элегантным характером.', composition: 'Белые розы, хризантемы, эвкалипт' },
  { id: 'sunny-mood', name: 'Sunny Mood', price: 2190, oldPrice: 2590, image: 'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=900&q=85', category: 'Букеты', tags: ['День рождения', 'Хиты'], description: 'Солнечный букет, который сразу создаёт настроение праздника.', composition: 'Альстромерии, розы, хризантемы' },
  { id: 'red-passion', name: 'Red Passion', price: 3890, image: 'https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=900&q=85', category: 'Розы', tags: ['Для любимой', 'Розы'], description: 'Классическая композиция из насыщенных красных роз.', composition: 'Красные розы, зелень' },
  { id: 'garden-box', name: 'Garden Box', price: 2990, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85', category: 'Цветы в коробке', tags: ['Спасибо', 'Новинки'], description: 'Стильная коробка с сезонными цветами и премиальной подачей.', composition: 'Розы, ранункулюсы, сезонные цветы' },
  { id: 'mini-lumiere', name: 'Mini Lumière', price: 1690, image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=900&q=85', category: 'Букеты', tags: ['Просто так'], description: 'Небольшой комплимент без повода — просто чтобы порадовать.', composition: 'Сезонные цветы, зелень' },
  { id: 'royal-roses', name: 'Royal Roses', price: 4490, image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85', category: 'Розы', tags: ['Хиты', 'Розы', 'День рождения'], description: 'Эффектный букет для яркого признания и важных дат.', composition: 'Эквадорские розы, декоративная зелень' },
];

export const formatPrice = (price: number) => `${price.toLocaleString('ru-RU')} ₴`;
