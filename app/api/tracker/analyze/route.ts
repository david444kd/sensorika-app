import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenAI } from '@google/genai'

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { values?: unknown; locale?: string }
    if (!body || typeof body !== 'object' || body.values == null) {
      return NextResponse.json(
        { error: "Missing 'values' in request body" },
        { status: 400 }
      )
    }

    const requestLocale = body.locale || 'ru'

    const apiKey = process.env.GOOGLE_AI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Server is not configured with GOOGLE_AI_API_KEY' },
        { status: 500 }
      )
    }

    let languageInstruction = ''
    let roleInstruction = ''
    let responseStructure = ''

    switch (requestLocale) {
      case 'en':
        languageInstruction =
          'Write concisely, in English. Avoid excessive terminology.'
        roleInstruction = [
          'You are a child development specialist.',
          'Your task is to analyze the child assessment results from the form and provide clear recommendations for parents.',
        ].join('\n')
        responseStructure = [
          'Response structure:',
          '1) Brief summary (2–4 sentences)',
          '2) Strengths (list)',
          '3) Development areas (list)',
          '4) Recommendations for 1–2 weeks (list of 5–8 items)',
        ].join('\n')
        break
      case 'kz':
        languageInstruction =
          'Қысқа және нақты жаз. Артық терминдерді қолданба.'
        roleInstruction = [
          'Сен бала дамуы бойынша мамансің.',
          'Сенің міндетің — формадағы баланың бағалау нәтижелерін талдап, ата-аналарға түсінікті ұсыныстар беру.',
        ].join('\n')
        responseStructure = [
          'Жауап құрылымы:',
          '1) Қысқаша мазмұны (2–4 сөйлем)',
          '2) Күшті жақтары (тізім)',
          '3) Даму аймақтары (тізім)',
          '4) 1–2 аптаға арналған ұсыныстар (5–8 тармақтан тұратын тізім)',
        ].join('\n')
        break
      case 'ru':
      default:
        languageInstruction =
          'Пиши лаконично, на русском языке. Избегай избыточной терминологии.'
        roleInstruction = [
          'Ты специалист по детскому развитию.',
          'Твоя задача — проанализировать результаты оценки ребёнка из формы и дать понятные родителю рекомендации.',
        ].join('\n')
        responseStructure = [
          'Структура ответа:',
          '1) Краткое резюме (2–4 предложения)',
          '2) Сильные стороны (список)',
          '3) Зоны развития (список)',
          '4) Рекомендации на 1–2 недели (список из 5–8 пунктов)',
        ].join('\n')
        break
    }

    const systemInstruction = [
      roleInstruction,
      languageInstruction,
      responseStructure,
    ].join('\n')

    const userPrompt = [
      requestLocale === 'en'
        ? 'Below are the assessment results in JSON. For each subsection there is a score field (array with a number from 0 to 10) and comment (optional comment).'
        : requestLocale === 'kz'
        ? 'Төменде бағалау нәтижелері JSON форматында берілген. Әр бөлімде score өрісі (0–10 аралығындағы сан) және comment (міндетті емес пікір) бар.'
        : 'Ниже результаты оценки в JSON. Для каждой подглавы есть поле score (массив с числом от 0 до 10) и comment (необязательный комментарий).',
      requestLocale === 'en'
        ? 'Evaluate the overall profile, identify priority areas and create an action plan.'
        : requestLocale === 'kz'
        ? 'Жалпы профильді бағала, басым бағыттарды анықта және іс-қимыл жоспарын жаса.'
        : 'Оцени общий профиль, выдели приоритетные направления и сформируй план действий.',
      requestLocale === 'en'
        ? 'JSON data:'
        : requestLocale === 'kz'
        ? 'JSON деректері:'
        : 'Данные в JSON:',
      JSON.stringify(body.values, null, 2),
    ].join('\n\n')

    const ai = new GoogleGenAI({ apiKey })
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
      config: { systemInstruction },
    })

    const text = response.text || ''
    return NextResponse.json({ text })
  } catch (err: unknown) {
    console.error('/api/tracker/analyze error', err)
    return NextResponse.json(
      { error: 'Failed to analyze assessment' },
      { status: 500 }
    )
  }
}
