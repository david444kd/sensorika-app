export type Category = 'eat' | 'games' | 'actions'

export type CardItem = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export const CARDS: Record<Category, CardItem[]> = {
  eat: [
    {
      title: 'Яблочный сок',
      description: 'Освежающий напиток из яблок',
      imageSrc: '/eat/apple_juice.png',
      imageAlt: 'Яблочный сок',
    },

    {
      title: 'Яблоко',
      description: 'Спелый фрукт, красный или зелёный',
      imageSrc: '/eat/apple.jpg',
      imageAlt: 'Яблоко',
    },

    {
      title: 'Банан',
      description: 'Сладкий и питательный фрукт',
      imageSrc: '/eat/banana.jpg',
      imageAlt: 'Банан',
    },

    {
      title: 'Бургер',
      description: 'Сочный бургер с котлетой',
      imageSrc: '/eat/burger.jpg',
      imageAlt: 'Бургер',
    },

    {
      title: 'Морковь',
      description: 'Овощ, богатый витамином A',
      imageSrc: '/eat/carrot.png',
      imageAlt: 'Морковь',
    },

    {
      title: 'Какао',
      description: 'Тёплый шоколадный напиток',
      imageSrc: '/eat/cocoa.png',
      imageAlt: 'Какао',
    },

    {
      title: 'Ужин',
      description: 'Тарелка с полезной едой',
      imageSrc: '/eat/dinner.jpg',
      imageAlt: 'Ужин',
    },

    {
      title: 'Картофель фри',
      description: 'Хрустящие ломтики картофеля',
      imageSrc: '/eat/french-fries.png',
      imageAlt: 'Картофель фри',
    },

    {
      title: 'Виноград',
      description: 'Сладкие ягодки, зелёные или фиолетовые',
      imageSrc: '/eat/grape.png',
      imageAlt: 'Виноград',
    },

    {
      title: 'Хот-дог',
      description: 'Сосиска в булочке',
      imageSrc: '/eat/hotdog.png',
      imageAlt: 'Хот-дог',
    },

    {
      title: 'Кимчи',
      description: 'Острая корейская закуска',
      imageSrc: '/eat/kimchi.png',
      imageAlt: 'Кимчи',
    },

    {
      title: 'Обед',
      description: 'Сытный приём пищи днём',
      imageSrc: '/eat/lunch.jpg',
      imageAlt: 'Обед',
    },

    {
      title: 'Молоко',
      description: 'Источник кальция',
      imageSrc: '/eat/milk.png',
      imageAlt: 'Молоко',
    },

    {
      title: 'Апельсин',
      description: 'Цитрус с витамином C',
      imageSrc: '/eat/orange.jpg',
      imageAlt: 'Апельсин',
    },

    {
      title: 'Блинчики',
      description: 'Нежные панкейки на завтрак',
      imageSrc: '/eat/pancakes.png',
      imageAlt: 'Блинчики',
    },

    {
      title: 'Ролл',
      description: 'Небольшой рулет/ролл',
      imageSrc: '/eat/roll.png',
      imageAlt: 'Ролл',
    },

    {
      title: 'Креветки',
      description: 'Морепродукты, богатые белком',
      imageSrc: '/eat/shrimp.jpg',
      imageAlt: 'Креветки',
    },

    {
      title: 'Чай',
      description: 'Горячий напиток — чёрный или зелёный',
      imageSrc: '/eat/tea.png',
      imageAlt: 'Чай',
    },

    {
      title: 'Вафля',
      description: 'Сладкая хрустящая вафля',
      imageSrc: '/eat/waffle.jpg',
      imageAlt: 'Вафля',
    },

    {
      title: 'Вода',
      description: 'Чистая питьевая вода',
      imageSrc: '/eat/water.png',
      imageAlt: 'Вода',
    },

    {
      title: 'Арбуз',
      description: 'Сочный летний плод',
      imageSrc: '/eat/watermelon.png',
      imageAlt: 'Арбуз',
    },
  ],

  games: [
    {
      title: 'Пазл',
      description: 'Собери картинку',
      imageSrc: '/next.svg',
      imageAlt: 'Пазл',
    },

    {
      title: 'Мяч',
      description: 'Игры на координацию',
      imageSrc: '/vercel.svg',
      imageAlt: 'Мяч',
    },

    {
      title: 'Кубики',
      description: 'Построй башню',
      imageSrc: '/globe.svg',
      imageAlt: 'Кубики',
    },
  ],

  actions: [
    {
      title: 'Мыть руки',
      description: 'Перед едой и после прогулки',
      imageSrc: '/file.svg',
      imageAlt: 'Мыть руки',
    },

    {
      title: 'Чистить зубы',
      description: 'Утром и вечером',
      imageSrc: '/window.svg',
      imageAlt: 'Чистить зубы',
    },

    {
      title: 'Одеваться',
      description: 'Надеваем куртку, шапку',
      imageSrc: '/vercel.svg',
      imageAlt: 'Одеваться',
    },
  ],
}
