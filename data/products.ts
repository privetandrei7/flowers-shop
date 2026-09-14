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
  { id: 'blush-roses', name: 'Нежные розы', price: 2490, oldPrice: 2990, image: img('https://images.unsplash.com/photo-1579664872746-55e2a805d705'), category: 'Букеты', tags: ['Для любимой', 'Хиты', 'Розы'], description: 'Нежный букет в пудровых оттенках для особенного момента.', composition: 'Розы, эвкалипт, сезонная зелень' },
  { id: 'peony-dream', name: 'Пионовая мечта', price: 3290, image: img('https://images.unsplash.com/photo-1618239265038-9e4c865fbd10'), category: 'Букеты', tags: ['Для любимой', 'Новинки'], description: 'Воздушная композиция с выразительными пионами.', composition: 'Пионы, кустовые розы, зелень' },
  { id: 'white-cloud', name: 'Белое облако', price: 2790, image: img('https://images.unsplash.com/photo-1521052424247-a1a47c7de691'), category: 'Букеты', tags: ['Для мамы', 'Спасибо'], description: 'Чистая белая композиция с лёгким, элегантным характером.', composition: 'Белые розы, хризантемы, эвкалипт' },
  { id: 'sunny-mood', name: 'Солнечное настроение', price: 2190, oldPrice: 2590, image: img('https://images.unsplash.com/photo-1719477498569-2d6e69cad50b'), category: 'Букеты', tags: ['День рождения', 'Хиты'], description: 'Солнечный букет, который сразу создаёт настроение праздника.', composition: 'Альстромерии, розы, хризантемы' },
  { id: 'red-passion', name: 'Красная страсть', price: 3890, image: img('https://images.unsplash.com/photo-1611784460482-f9a181cf3f91'), category: 'Розы', tags: ['Для любимой', 'Розы'], description: 'Классическая композиция из насыщенных красных роз.', composition: 'Красные розы, зелень' },
  { id: 'garden-box', name: 'Сад в коробке', price: 2990, image: img('https://images.unsplash.com/photo-1591529787628-4ed43078e9e6'), category: 'Цветы в коробке', tags: ['Спасибо', 'Новинки'], description: 'Стильная коробка с сезонными цветами и премиальной подачей.', composition: 'Розы, ранункулюсы, сезонные цветы' },
  { id: 'mini-lumiere', name: 'Маленький комплимент', price: 1690, image: img('https://images.unsplash.com/photo-1705807070861-1cf5591bd567'), category: 'Букеты', tags: ['Просто так'], description: 'Небольшой комплимент без повода — просто чтобы порадовать.', composition: 'Сезонные цветы, зелень' },
  { id: 'royal-roses', name: 'Королевские розы', price: 4490, image: img('https://images.unsplash.com/photo-1710505235775-fe00c617d95a'), category: 'Розы', tags: ['Хиты', 'Розы', 'День рождения'], description: 'Эффектный букет для яркого признания и важных дат.', composition: 'Эквадорские розы, декоративная зелень' },
  { id: 'pink-tenderness', name: 'Розовая нежность', price: 2890, image: img('https://images.unsplash.com/photo-1596438459194-0c4d6e6a1f4b'), category: 'Букеты', tags: ['Для любимой', 'Новинки'], description: 'Романтичный букет в мягких розовых оттенках.', composition: 'Розы, гвоздики, эвкалипт' },
  { id: 'spring-breeze', name: 'Весенний бриз', price: 2390, image: img('https://images.unsplash.com/photo-1490750967868-88aa4486c946'), category: 'Букеты', tags: ['Для мамы', 'Весна'], description: 'Лёгкая свежая композиция с настроением раннего утра.', composition: 'Тюльпаны, альстромерии, зелень' },
  { id: 'lavender-dream', name: 'Лавандовая мечта', price: 2590, image: img('https://images.unsplash.com/photo-1499002238440-d264edd596ec'), category: 'Букеты', tags: ['Спасибо', 'Новинки'], description: 'Спокойная композиция в сиренево-фиолетовой гамме.', composition: 'Лаванда, лизиантус, сезонная зелень' },
  { id: 'sunset-bouquet', name: 'Закат', price: 3190, image: img('https://images.unsplash.com/photo-1495231916356-a86217efff12'), category: 'Букеты', tags: ['День рождения', 'Хиты'], description: 'Тёплая композиция в оттенках закатного солнца.', composition: 'Розы, герберы, хризантемы' },
  { id: 'cream-roses', name: 'Кремовые розы', price: 2790, image: img('https://images.unsplash.com/photo-1518709594023-6eab9bab7b23'), category: 'Розы', tags: ['Для мамы', 'Розы'], description: 'Элегантные розы кремового оттенка для самых тёплых слов.', composition: 'Кремовые розы, эвкалипт' },
  { id: 'scarlet-roses', name: 'Алые розы', price: 4190, image: img('https://images.unsplash.com/photo-1518895949257-7621c3c786d7'), category: 'Розы', tags: ['Для любимой', 'Розы', 'Хиты'], description: 'Выразительный букет алых роз для признания в чувствах.', composition: 'Алые розы, рускус' },
  { id: 'white-roses', name: 'Белая классика', price: 3090, image: img('https://images.unsplash.com/photo-1494336934272-f5f0f5f8f3d7'), category: 'Розы', tags: ['Для мамы', 'Розы'], description: 'Сдержанная и благородная композиция из белых роз.', composition: 'Белые розы, эвкалипт, зелень' },
  { id: 'pink-box', name: 'Розовый сад', price: 3490, image: img('https://images.unsplash.com/photo-1561181286-d3fee7d55364'), category: 'Цветы в коробке', tags: ['Для любимой', 'Новинки'], description: 'Пышная композиция в нежной розовой коробке.', composition: 'Розы, пионы, гортензия' },
  { id: 'white-box', name: 'Белая элегантность', price: 3390, image: img('https://images.unsplash.com/photo-1523438885200-e635ba2c371e'), category: 'Цветы в коробке', tags: ['Для мамы', 'Спасибо'], description: 'Воздушная белая композиция для важных и светлых моментов.', composition: 'Розы, хризантемы, гортензия' },
  { id: 'berry-box', name: 'Ягодный букет', price: 3290, image: img('https://images.unsplash.com/photo-1523693916903-0273e5e9b1e4'), category: 'Цветы в коробке', tags: ['День рождения', 'Хиты'], description: 'Насыщенная композиция с ягодными и винными оттенками.', composition: 'Розы, гвоздики, альстромерии' },
  { id: 'pastel-box', name: 'Пастельное облако', price: 3590, image: img('https://images.unsplash.com/photo-1526047932273-341f2a7631f9'), category: 'Цветы в коробке', tags: ['Для любимой', 'Новинки'], description: 'Нежная пастельная композиция для красивого сюрприза.', composition: 'Розы, лизиантус, сезонные цветы' },
  { id: 'big-pink-bear', name: 'Большой розовый мишка', price: 1890, image: img('https://images.unsplash.com/photo-1607653150149-526b2744ca60'), category: 'Мягкие игрушки', tags: ['Для любимой', 'Подарки', 'Новинки'], description: 'Мягкий розовый мишка — милое дополнение к букету или самостоятельный подарок.', composition: 'Плюш, наполнитель из полиэстера' },
  { id: 'gray-bear-rose', name: 'Серый мишка с розой', price: 1790, image: img('https://images.unsplash.com/photo-1708523955985-463c307c00b5'), category: 'Мягкие игрушки', tags: ['Для любимой', 'Подарки'], description: 'Уютный серый мишка с красной розой для романтичного подарка.', composition: 'Плюш, декоративная роза' },
  { id: 'beige-bear', name: 'Бежевый мишка', price: 1590, image: img('https://images.unsplash.com/photo-1574661570553-be40c85891e5'), category: 'Мягкие игрушки', tags: ['Для мамы', 'Подарки'], description: 'Классический бежевый мишка с тёплым и домашним характером.', composition: 'Плюш, полиэстер' },
  { id: 'yellow-bear', name: 'Жёлтый мишка', price: 1690, image: img('https://images.unsplash.com/photo-1630887961979-f941d415a2cf'), category: 'Мягкие игрушки', tags: ['День рождения', 'Подарки'], description: 'Яркий мягкий мишка для весёлого подарка и хорошего настроения.', composition: 'Плюш, полиэстер' },
  { id: 'pink-bear', name: 'Розовый мишка', price: 1590, image: img('https://images.unsplash.com/photo-1615583452853-a4e45d4f68b1'), category: 'Мягкие игрушки', tags: ['Для любимой', 'Подарки'], description: 'Нежная розовая игрушка, которая отлично сочетается с цветочным подарком.', composition: 'Плюш, полиэстер' },
  { id: 'bear-with-roses', name: 'Мишка с розами', price: 2190, image: img('https://images.unsplash.com/photo-1569929233751-add03a1bd4aa'), category: 'Мягкие игрушки', tags: ['Для любимой', 'Хиты', 'Подарки'], description: 'Плюшевый мишка с цветочным акцентом для особенного признания.', composition: 'Плюш, декоративные розы' },
  { id: 'white-bear-gift', name: 'Белый мишка в подарок', price: 1890, image: img('https://images.unsplash.com/photo-1630638846346-a7b2eed2ac05'), category: 'Мягкие игрушки', tags: ['Подарки', 'Новинки'], description: 'Белый мишка в нежном оформлении — красивое дополнение к букету.', composition: 'Плюш, полиэстер, декоративная лента' },
  { id: 'bear-heart', name: 'Мишка с сердцем', price: 1990, image: img('https://images.unsplash.com/photo-1585666453901-9ffb86e44a13'), category: 'Мягкие игрушки', tags: ['Для любимой', 'Подарки'], description: 'Милый плюшевый подарок с романтичным настроением.', composition: 'Плюш, полиэстер, декоративное сердце' },
];

export const formatPrice = (price: number) => `${price.toLocaleString('ru-RU')} ₴`;
