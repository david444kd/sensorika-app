import { CardItem } from "@/lib/cards/cards"
import { Info } from "lucide-react"

export default function Toast({item}: {
  item: CardItem
}) {
  return (
    <div className="flex items-start gap-3">
        <div className="mt-0.5 shrink-0 rounded-lg bg-primary-foreground/10 p-2">
            <Info className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold truncate">{item.title}</h3>
            <p className="text-xs/5 opacity-90 line-clamp-3">{item.description}</p>
        </div>
    </div>
  )
}