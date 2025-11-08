export type Category = "eat" | "games" | "actions"

export type CardItem = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export function getCards(t: (key: string) => string): Record<Category, CardItem[]> {
  return {
    eat: [
      { title: t('Cards.items.eat.apple_juice.title'), description: t('Cards.items.eat.apple_juice.description'), imageSrc: "../eat/apple_juice.png", imageAlt: t('Cards.items.eat.apple_juice.imageAlt') },
      { title: t('Cards.items.eat.apple.title'), description: t('Cards.items.eat.apple.description'), imageSrc: "/eat/apple.jpg", imageAlt: t('Cards.items.eat.apple.imageAlt') },
      { title: t('Cards.items.eat.banana.title'), description: t('Cards.items.eat.banana.description'), imageSrc: "/eat/banana.jpg", imageAlt: t('Cards.items.eat.banana.imageAlt') },
      { title: t('Cards.items.eat.burger.title'), description: t('Cards.items.eat.burger.description'), imageSrc: "/eat/burger.jpg", imageAlt: t('Cards.items.eat.burger.imageAlt') },
      { title: t('Cards.items.eat.carrot.title'), description: t('Cards.items.eat.carrot.description'), imageSrc: "/eat/carrot.png", imageAlt: t('Cards.items.eat.carrot.imageAlt') },
      { title: t('Cards.items.eat.cocoa.title'), description: t('Cards.items.eat.cocoa.description'), imageSrc: "/eat/cocoa.png", imageAlt: t('Cards.items.eat.cocoa.imageAlt') },
      { title: t('Cards.items.eat.dinner.title'), description: t('Cards.items.eat.dinner.description'), imageSrc: "/eat/dinner.jpg", imageAlt: t('Cards.items.eat.dinner.imageAlt') },
      { title: t('Cards.items.eat.french-fries.title'), description: t('Cards.items.eat.french-fries.description'), imageSrc: "/eat/french-fries.png", imageAlt: t('Cards.items.eat.french-fries.imageAlt') },
      { title: t('Cards.items.eat.grape.title'), description: t('Cards.items.eat.grape.description'), imageSrc: "/eat/grape.png", imageAlt: t('Cards.items.eat.grape.imageAlt') },
      { title: t('Cards.items.eat.hotdog.title'), description: t('Cards.items.eat.hotdog.description'), imageSrc: "/eat/hotdog.png", imageAlt: t('Cards.items.eat.hotdog.imageAlt') },
      { title: t('Cards.items.eat.kimchi.title'), description: t('Cards.items.eat.kimchi.description'), imageSrc: "/eat/kimchi.png", imageAlt: t('Cards.items.eat.kimchi.imageAlt') },
      { title: t('Cards.items.eat.lunch.title'), description: t('Cards.items.eat.lunch.description'), imageSrc: "/eat/lunch.jpg", imageAlt: t('Cards.items.eat.lunch.imageAlt') },
      { title: t('Cards.items.eat.milk.title'), description: t('Cards.items.eat.milk.description'), imageSrc: "/eat/milk.png", imageAlt: t('Cards.items.eat.milk.imageAlt') },
      { title: t('Cards.items.eat.orange.title'), description: t('Cards.items.eat.orange.description'), imageSrc: "/eat/orange.jpg", imageAlt: t('Cards.items.eat.orange.imageAlt') },
      { title: t('Cards.items.eat.pancakes.title'), description: t('Cards.items.eat.pancakes.description'), imageSrc: "/eat/pancakes.png", imageAlt: t('Cards.items.eat.pancakes.imageAlt') },
      { title: t('Cards.items.eat.roll.title'), description: t('Cards.items.eat.roll.description'), imageSrc: "/eat/roll.png", imageAlt: t('Cards.items.eat.roll.imageAlt') },
      { title: t('Cards.items.eat.shrimp.title'), description: t('Cards.items.eat.shrimp.description'), imageSrc: "/eat/shrimp.jpg", imageAlt: t('Cards.items.eat.shrimp.imageAlt') },
      { title: t('Cards.items.eat.tea.title'), description: t('Cards.items.eat.tea.description'), imageSrc: "/eat/tea.png", imageAlt: t('Cards.items.eat.tea.imageAlt') },
      { title: t('Cards.items.eat.waffle.title'), description: t('Cards.items.eat.waffle.description'), imageSrc: "/eat/waffle.jpg", imageAlt: t('Cards.items.eat.waffle.imageAlt') },
      { title: t('Cards.items.eat.water.title'), description: t('Cards.items.eat.water.description'), imageSrc: "/eat/water.png", imageAlt: t('Cards.items.eat.water.imageAlt') },
      { title: t('Cards.items.eat.watermelon.title'), description: t('Cards.items.eat.watermelon.description'), imageSrc: "/eat/watermelon.png", imageAlt: t('Cards.items.eat.watermelon.imageAlt') },
    ],
    games: [
      { title: t('Cards.items.games.puzzle.title'), description: t('Cards.items.games.puzzle.description'), imageSrc: "/next.svg", imageAlt: t('Cards.items.games.puzzle.imageAlt') },
      { title: t('Cards.items.games.ball.title'), description: t('Cards.items.games.ball.description'), imageSrc: "/vercel.svg", imageAlt: t('Cards.items.games.ball.imageAlt') },
      { title: t('Cards.items.games.blocks.title'), description: t('Cards.items.games.blocks.description'), imageSrc: "/globe.svg", imageAlt: t('Cards.items.games.blocks.imageAlt') },
    ],
    actions: [
      { title: t('Cards.items.actions.wash_hands.title'), description: t('Cards.items.actions.wash_hands.description'), imageSrc: "/file.svg", imageAlt: t('Cards.items.actions.wash_hands.imageAlt') },
      { title: t('Cards.items.actions.brush_teeth.title'), description: t('Cards.items.actions.brush_teeth.description'), imageSrc: "/window.svg", imageAlt: t('Cards.items.actions.brush_teeth.imageAlt') },
      { title: t('Cards.items.actions.dress.title'), description: t('Cards.items.actions.dress.description'), imageSrc: "/vercel.svg", imageAlt: t('Cards.items.actions.dress.imageAlt') },
    ],
  }
}