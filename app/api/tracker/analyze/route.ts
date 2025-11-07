import { NextResponse } from "next/server"
import { GoogleGenAI } from "@google/genai"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { values?: unknown }
    if (!body || typeof body !== "object" || body.values == null) {
      return NextResponse.json(
        { error: "Missing 'values' in request body" },
        { status: 400 }
      )
    }
    const apiKey = process.env.GOOGLE_AI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server is not configured with GOOGLE_AI_API_KEY" },
        { status: 500 }
      )
    }
    const systemInstruction = [
      "Ты специалист по детскому развитию.",
      "Твоя задача — проанализировать результаты оценки ребёнка из формы и дать понятные родителю рекомендации.",
      "Пиши лаконично, на русском языке. Избегай избыточной терминологии.",
      "Структура ответа:",
      "1) Краткое резюме (2–4 предложения)",
      "2) Сильные стороны (список)",
      "3) Зоны развития (список)",
      "4) Рекомендации на 1–2 недели (список из 5–8 пунктов)",
    ].join("\n")
    const userPrompt = [
      "Ниже результаты оценки в JSON. Для каждой подглавы есть поле score (массив с числом от 0 до 10) и comment (необязательный комментарий).",
      "Оцени общий профиль, выдели приоритетные направления и сформируй план действий.",
      "Данные в JSON:",
      JSON.stringify(body.values, null, 2),
    ].join("\n\n")
    
    const ai = new GoogleGenAI({ apiKey })
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: [
        { role: "user", parts: [{ text: userPrompt }] },
      ],
      config: { systemInstruction },
    })

    const text = response.text || ""
    return NextResponse.json({ text })
  } catch (err: unknown) {
    console.error("/api/tracker/analyze error", err)
    return NextResponse.json(
      { error: "Failed to analyze assessment" },
      { status: 500 }
    )
  }
}


