import { FormValues } from "./types"

export const analyzeAssessment = async (values: FormValues, locale: string): Promise<string> => {
  const res = await fetch("/api/tracker/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ values, locale }),
  })
  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data?.error || `Analyze request failed (${res.status})`)
  }
  const data = (await res.json()) as { text: string }
  return data.text
}