"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChildForm } from "@/components/tracker/ChildForm"

interface Child {
  id: number
  name: string
  age: number
  description: string
}

export default function Specialist() {
  const [selectedChild, setSelectedChild] = useState<Child | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const children: Child[] = [
    {
      id: 1,
      name: "Алиса",
      age: 8,
      description: "Любит читать и играть на фортепиано. Нравятся прогулки на свежем воздухе.",
    },
    {
      id: 2,
      name: "Денис",
      age: 6,
      description: "Энергичный и любознательный. Интересуется динозаврами и конструктором.",
    },
    {
      id: 3,
      name: "София",
      age: 10,
      description: "Творческая и художественная. Любит рисовать и изучать науку.",
    },
  ]

  const handleCardClick = (child: Child) => {
    setSelectedChild(child)
    setIsDialogOpen(true)
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setSelectedChild(null)
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-extrabold">Дети под сопровождением</h1>
          <Button>Добавить ребенка</Button>
        </div>

        <div className="grid gap-4">
          {children.map((child) => (
            <Card
              key={child.id}
              className="cursor-pointer hover:bg-accent transition-colors"
              onClick={() => handleCardClick(child)}
            >
              <CardHeader>
                <CardTitle>{child.name}</CardTitle>
                <CardDescription>Возраст: {child.age}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{child.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Редактирование информации о ребенке</DialogTitle>
          </DialogHeader>
          {selectedChild && (
            <ChildForm
              defaultValues={{
                name: selectedChild.name,
                age: selectedChild.age,
                comment: selectedChild.description,
              }}
              onCancel={handleDialogClose}
              onSubmit={handleDialogClose}
            />
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}
