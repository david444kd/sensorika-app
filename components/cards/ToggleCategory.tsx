import { Category } from "@/lib/cards/cards"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"

type Props = {
  category: Category,
  setCategory: (v: Category) => void
}

export default function ToggleCategory({category, setCategory}: Props){
  return (
    <ToggleGroup
        type="single"
        variant="outline"
        spacing={2}
        size="sm"
        value={category}
        onValueChange={(v) => v && setCategory(v as Category)}
      >
        <ToggleGroupItem value="eat" aria-label="Еда" className="cursor-pointer">
          Еда
        </ToggleGroupItem>
        <ToggleGroupItem value="games" aria-label="Игры" className="cursor-pointer">
          Игры
        </ToggleGroupItem>
        <ToggleGroupItem value="actions" aria-label="Действия" className="cursor-pointer">
          Действия
        </ToggleGroupItem>
      </ToggleGroup>
  )
}