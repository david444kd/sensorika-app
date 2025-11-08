import { Card, CardContent } from "@/components/ui/card"
import { NavItem } from "@/lib/routes"
import Link from "next/link"

type RouteCardProps = {
  item: NavItem
  label: string
  description: string
}

export default function RouteCard({ item, label, description }: RouteCardProps) {
  const Icon = item.icon
  return (
    <Link
      href={item.href}
      aria-label={label} 
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl"
    >
      <Card className="transition-all group hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] border-2 hover:border-primary/50">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-card-foreground mb-1">{label}</h2>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}