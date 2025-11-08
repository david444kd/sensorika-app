import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenAI } from '@google/genai'

export async function POST(req: NextRequest) {
  try {
    const { prompt } = (await req.json()) as { prompt?: string }
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: "Missing or invalid 'prompt'" },
        { status: 400 }
      )
    }

    const apiKey = process.env.GOOGLE_AI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Server is not configured with GOOGLE_AI_API_KEY' },
        { status: 500 }
      )
    }

    const ai = new GoogleGenAI({ apiKey })
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
      config: {
        systemInstruction: 'Ты помощник, отвечай на вопросы',
      },
    })

    const text = response.text || ''
    return NextResponse.json({ text })
  } catch (err: unknown) {
    console.error('/api/ai error', err)
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    )
  }
}
