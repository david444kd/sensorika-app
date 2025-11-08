"use client"

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
import { useTranslations } from "next-intl"

 type ResponseModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  loading: boolean
  title?: string
  description?: string
  text?: string
}

export function ResponseModal({ open, onOpenChange, loading, title, description, text }: ResponseModalProps) {
  const t = useTranslations('Tracker.modal')
  
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title || t('title')}</AlertDialogTitle>
          {description ? (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          ) : null}
        </AlertDialogHeader>
        <div className="min-h-24 max-h-[60vh] overflow-auto whitespace-pre-wrap text-sm">
          {loading ? (
            <div className="flex items-center gap-2 text-muted-foreground"><Spinner className="w-5 h-5" /> {t('loading')}</div>
          ) : (
            text || ""
          )}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>{t('close')}</AlertDialogCancel>
          {!loading ? (
            <AlertDialogAction onClick={() => onOpenChange(false)}>{t('done')}</AlertDialogAction>
          ) : null}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

