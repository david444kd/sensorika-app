"use client"

import { Category } from "@/lib/cards/cards"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import { useTranslations } from "next-intl"

type Props = {
  category: Category,
  setCategory: (v: Category) => void
}

export default function ToggleCategory({category, setCategory}: Props){
  const t = useTranslations('Cards.categories')
  
  return (
    <ToggleGroup
        type="single"
        variant="outline"
        spacing={2}
        size="sm"
        value={category}
        onValueChange={(v) => v && setCategory(v as Category)}
      >
        <ToggleGroupItem value="eat" aria-label={t('eat')} className="cursor-pointer">
          {t('eat')}
        </ToggleGroupItem>
        <ToggleGroupItem value="games" aria-label={t('games')} className="cursor-pointer">
          {t('games')}
        </ToggleGroupItem>
        <ToggleGroupItem value="actions" aria-label={t('actions')} className="cursor-pointer">
          {t('actions')}
        </ToggleGroupItem>
      </ToggleGroup>
  )
}