"use client"

import TrackerForm from "@/components/tracker/TrackerForm"
import { FormValues } from "@/lib/tracker/types"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { ResponseModal } from "@/components/tracker/ResponseModal"
import { analyzeAssessment } from "@/lib/tracker/api"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Specialist from "@/components/tracker/Specialist"

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
      <Tabs defaultValue="account">
        <TabsList className="w-full mb-3">
          <TabsTrigger value="account">Я родитель</TabsTrigger>
          <TabsTrigger value="password">Я специалист</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <header className="mb-4 gap-5 flex flex-col">
            <h1 className="text-3xl font-extrabold">Оценка развития ребёнка</h1>
            <p className="text-muted-foreground mt-1 text-sm">Перетяните ползунок для оценки подглавы (0–10), при необходимости добавьте комментарий.</p>
          </header>
          <TrackerForm sendAI={sendAI} loading={loading}/>
        </TabsContent>
        <TabsContent value="password">
          <Specialist/>
        </TabsContent>
      </Tabs>
      <ResponseModal open={modalOpen} onOpenChange={setModalOpen} loading={loading} text={responseText} />
      <Toaster position='top-center'/>
    </div>
  )
}
