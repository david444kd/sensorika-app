import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Spinner } from "@/components/ui/spinner"

 type ResponseModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  loading: boolean
  title?: string
  description?: string
  text?: string
}

export function ResponseModal({ open, onOpenChange, loading, title = "Результат анализа", description, text }: ResponseModalProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description ? (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          ) : null}
        </AlertDialogHeader>
        <div className="min-h-24 max-h-[60vh] overflow-auto whitespace-pre-wrap text-sm">
          {loading ? (
            <div className="flex items-center gap-2 text-muted-foreground"><Spinner className="w-5 h-5" /> Формируем рекомендации…</div>
          ) : (
            text || ""
          )}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>Закрыть</AlertDialogCancel>
          {!loading ? (
            <AlertDialogAction onClick={() => onOpenChange(false)}>Готово</AlertDialogAction>
          ) : null}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

