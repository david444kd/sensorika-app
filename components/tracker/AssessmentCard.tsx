"use client"

import { Controller, useFormContext } from "react-hook-form"
import type { Path } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { Slider } from "../ui/slider"
import type { FormValues } from "@/lib/tracker/types"
import { useTranslations } from "next-intl"

 type AssessmentCardProps = {
  title: string
  items: string
  scoreName: Path<FormValues>
  commentName: Path<FormValues>
}

export default function AssessmentCard({ title, items, scoreName, commentName }: AssessmentCardProps) {
  const { control, register } = useFormContext<FormValues>()
  const t = useTranslations('Tracker.assessment')
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <Label>{t('score')}</Label>

          <Controller
            control={control}
            name={scoreName}
            rules={{ required: true }}
            render={({ field }) => {
              const valueArray: number[] = Array.isArray(field.value) ? (field.value as number[]) : [0]
              return (
                <div className="px-2">
                  <Slider
                    value={valueArray}
                    onValueChange={(v: number[]) => field.onChange(v)}
                    max={10}
                    step={1}
                    className="w-full"
                  />
                  <div className="mt-2 text-sm">{t('currentValue')} <strong>{Array.isArray(field.value) ? field.value[0] : field.value}</strong></div>
                </div>
              )
            }}
          />

          <div>
            <Textarea
              {...register(commentName, {
                maxLength: { value: 1000, message: t('maxLength') }
              })}
              placeholder={items}
              rows={4}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}