"use client"

import { getAssessment } from "@/lib/tracker/assessment"
import { FormValues } from "@/lib/tracker/types"
import { FormProvider, Path, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import AssessmentCard from "./AssessmentCard"
import { Spinner } from "../ui/spinner"
import { useTranslations } from "next-intl"
import { useMemo } from "react"

export default function TrackerForm ({
  sendAI,
  loading
}:{
  sendAI: (values: FormValues) => void
  loading: boolean
}) {
  const t = useTranslations()
  const ASSESSMENT = useMemo(() => getAssessment(t), [t])
  
  const methods = useForm<FormValues>({
    defaultValues: generateDefaultValues(ASSESSMENT),
  })
  const { handleSubmit } = methods

  function onSubmit(values: FormValues): void {
    sendAI(values)
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="pb-24">
        <div className="space-y-8">
          {ASSESSMENT.map((chapter) => (
            <section key={chapter.id}>
              <h2 className="text-2xl font-bold mb-3">{chapter.title}</h2>
              <div className="grid gap-4">
                {chapter.sections.map((sec) => {
                  const scoreName = `${chapter.id}.${sec.id}.score` as Path<FormValues>
                  const commentName = `${chapter.id}.${sec.id}.comment` as Path<FormValues>
                  return (
                    <AssessmentCard
                      key={sec.id}
                      title={sec.title}
                      items={sec.items}
                      scoreName={scoreName}
                      commentName={commentName}
                    />
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="fixed max-w-2xl mx-auto inset-x-0 bottom-0 z-40">
          <div className="mx-auto w-full bg-white">
            <Button disabled={loading} type="submit" className="cursor-pointer w-full h-14 rounded-t-xl rounded-b-none text-base font-extrabold">
            {loading && <Spinner className="w-5 h-5" />} {t('Tracker.button')}
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

function generateDefaultValues(assessment: ReturnType<typeof getAssessment>): FormValues {
  const out: FormValues = {}
  for (const ch of assessment) {
    out[ch.id] = {}
    for (const s of ch.sections) {
      out[ch.id][s.id] = { score: [0], comment: "" }
    }
  }
  return out
}