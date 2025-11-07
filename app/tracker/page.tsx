"use client"

import TrackerForm from "@/components/tracker/TrackerForm"
import { FormValues } from "@/lib/tracker/types"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { ResponseModal } from "@/components/tracker/ResponseModal"
import { analyzeAssessment } from "@/lib/tracker/api"

export default function ChildAssessmentPage() {
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [responseText, setResponseText] = useState<string>("")

  const sendAI = async (values: FormValues) =>{
    setResponseText("")
    setModalOpen(true)
    setLoading(true)
    try {
      const text = await analyzeAssessment(values)
      setResponseText(text)
      toast.success('Результат оценки получен!')
    } catch {
      setResponseText("Произошла ошибка при анализе. Попробуйте позже.")
      toast.error('Ошибка при анализе данных')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="mx-auto p-3 space-y-6">
      <header className="mb-4 gap-5 flex flex-col">
        <h1 className="text-3xl font-extrabold">Оценка развития ребёнка</h1>
        <p className="text-muted-foreground mt-1 text-sm">Перетяните ползунок для оценки подглавы (0–10), при необходимости добавьте комментарий.</p>
      </header>
      <TrackerForm sendAI={sendAI} loading={loading}/>
      <ResponseModal open={modalOpen} onOpenChange={setModalOpen} loading={loading} text={responseText} />
      <Toaster position='top-center'/>
    </div>
  )
}
