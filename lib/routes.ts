import { Activity, Map, Gamepad2, CreditCard } from "lucide-react"

export type NavItem = {
  href: string
  labelKey: string 
  descriptionKey: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const routes: NavItem[] = [
  {
    href: "/tracker",
    labelKey: "tracker",
    descriptionKey: "tracker",
    icon: Activity,
  },
  {
    href: "/roadmap",
    labelKey: "roadmap",
    descriptionKey: "roadmap",
    icon: Map,
  },
  {
    href: "/cards",
    labelKey: "cards",
    descriptionKey: "cards",
    icon: CreditCard,
  },
]