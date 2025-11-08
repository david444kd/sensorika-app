import { NextRequest, NextResponse } from "next/server"
import { GoogleGenAI } from "@google/genai"

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ locale: string }> }
) {
  try {
    const body = (await req.json()) as { values?: unknown; locale?: string }
    if (!body || typeof body !== "object" || body.values == null) {
      return NextResponse.json(
        { error: "Missing 'values' in request body" },
        { status: 400 }
      )
    }
    const { locale } = await context.params
    const requestLocale = body.locale || locale || 'ru'
    
    const apiKey = process.env.GOOGLE_AI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server is not configured with GOOGLE_AI_API_KEY" },
        { status: 500 }
      )
    }
    
    const isEnglish = requestLocale === 'en'
    const languageInstruction = isEnglish 
      ? "Write concisely, in English. Avoid excessive terminology."
      : "Пиши лаконично, на русском языке. Избегай избыточной терминологии."
    
    const systemInstruction = [
      isEnglish 
        ? "You are a child development specialist."
        : "Ты специалист по детскому развитию.",
      isEnglish
        ? "Your task is to analyze the child assessment results from the form and provide clear recommendations for parents."
        : "Твоя задача — проанализировать результаты оценки ребёнка из формы и дать понятные родителю рекомендации.",
      languageInstruction,
      isEnglish ? "Response structure:" : "Структура ответа:",
      isEnglish 
        ? "1) Brief summary (2–4 sentences)"
        : "1) Краткое резюме (2–4 предложения)",
      isEnglish
        ? "2) Strengths (list)"
        : "2) Сильные стороны (список)",
      isEnglish
        ? "3) Development areas (list)"
        : "3) Зоны развития (список)",
      isEnglish
        ? "4) Recommendations for 1–2 weeks (list of 5–8 items)"
        : "4) Рекомендации на 1–2 недели (список из 5–8 пунктов)",
    ].join("\n")
    
    const userPrompt = [
      isEnglish
        ? "Below are the assessment results in JSON. For each subsection there is a score field (array with a number from 0 to 10) and comment (optional comment)."
        : "Ниже результаты оценки в JSON. Для каждой подглавы есть поле score (массив с числом от 0 до 10) и comment (необязательный комментарий).",
      isEnglish
        ? "Evaluate the overall profile, identify priority areas and create an action plan."
        : "Оцени общий профиль, выдели приоритетные направления и сформируй план действий.",
      isEnglish ? "JSON data:" : "Данные в JSON:",
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


