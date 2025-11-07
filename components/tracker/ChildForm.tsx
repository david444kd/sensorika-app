import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

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
  const { register, handleSubmit } = useForm<ChildFormValues>({
    defaultValues,
  })

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
      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={onCancel}>
          Отмена
        </Button>
        <Button type="submit">
          Сохранить
        </Button>
      </div>
    </form>
  )
}
