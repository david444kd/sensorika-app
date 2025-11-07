import { Activity, Map, Gamepad2, CreditCard } from "lucide-react"

export type NavItem = {
  href: string
  label: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const routes: NavItem[] = [
  {
    href: "/tracker",
    label: "Трекер",
    description: "Трекер развития ребенка",
    icon: Activity,
  },
  {
    href: "/roadmap",
    label: "Маршрут",
    description: "Маршрут коррекции для родителей",
    icon: Map,
  },
  {
    href: "/cards",
    label: "Карточки PECS",
    description: "Карточки PECS",
    icon: CreditCard,
  },
  // {
  //   href: "/games",
  //   label: "Игры",
  //   description: "Игры для развития ребенка",
  //   icon: Gamepad2,
  // },
]