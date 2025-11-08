"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { generateChildReport } from "@/lib/tracker/report"
import { useTranslations } from "next-intl"

export interface ChildFormValues {
  name: string
  age: number
  comment: string
}

export function ChildForm({
  defaultValues,
  onCancel,
  onSubmit,
}: {
  defaultValues: ChildFormValues
  onCancel: () => void
  onSubmit: (values: ChildFormValues) => void
}) {
  const t = useTranslations('Tracker.childForm')
  const { register, handleSubmit, getValues } = useForm<ChildFormValues>({
    defaultValues,
  })

  const handleGenerateReport = () => {
    const values = getValues()
    generateChildReport(values)
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label htmlFor="name">{t('name')}</Label>
        <Input id="name" placeholder={t('namePlaceholder')} {...register("name", { required: true })} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="age">{t('age')}</Label>
        <Input id="age" type="number" placeholder={t('agePlaceholder')} {...register("age", { valueAsNumber: true, required: true })} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="comment">{t('comment')}</Label>
        <Textarea id="comment" placeholder={t('commentPlaceholder')} rows={4} {...register("comment")} />
      </div>
      <Button 
        type="button" 
        variant='outline' 
        className="w-full" 
        onClick={handleGenerateReport}
      >
        {t('reportButton')}
      </Button>
      <div className="flex gap-0">
        <Button type="button" variant="outline" onClick={onCancel} className="w-1/2 rounded-r-none">
          {t('cancel')}
        </Button>
        <Button type="submit" className="w-1/2 rounded-l-none">
          {t('save')}
        </Button>
      </div>
    </form>
  )
}
