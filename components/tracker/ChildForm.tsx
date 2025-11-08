import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { generateChildReport } from "@/lib/tracker/report"

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
        <Label htmlFor="name">Имя</Label>
        <Input id="name" placeholder="Введите имя" {...register("name", { required: true })} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="age">Возраст</Label>
        <Input id="age" type="number" placeholder="Введите возраст" {...register("age", { valueAsNumber: true, required: true })} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="comment">Комментарий / особенности</Label>
        <Textarea id="comment" placeholder="Введите комментарий специалиста" rows={4} {...register("comment")} />
      </div>
      <Button 
        type="button" 
        variant='outline' 
        className="w-full" 
        onClick={handleGenerateReport}
      >
        Отчет для родителя
      </Button>
      <div className="flex gap-0">
        <Button type="button" variant="outline" onClick={onCancel} className="w-1/2 rounded-r-none">
          Отмена
        </Button>
        <Button type="submit" className="w-1/2 rounded-l-none">
          Сохранить
        </Button>
      </div>
    </form>
  )
}
