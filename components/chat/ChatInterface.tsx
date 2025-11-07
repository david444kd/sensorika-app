"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send, Sparkles, User } from "lucide-react"
import { useRef, useEffect, useState, useMemo } from "react"
import { GoogleGenAI } from "@google/genai"

type MessageRole = "user" | "assistant"

type MessagePart = {
  type: "text"
  text: string
}

type Message = {
  id: string
  role: MessageRole
  parts: MessagePart[]
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [status, setStatus] = useState<"idle" | "in_progress">("idle")
  
  const ai = useMemo(() => {
    return new GoogleGenAI({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY || "",
    })
  }, [])

  const sendMessage = async (text: string): Promise<string> => {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-exp",
        contents: text,
        config: {
          systemInstruction: "Ты помощник, отвечай на вопросы",
        }
      })
      return response.text || ""
    } catch (error) {
      console.error("Error generating content:", error)
      throw error
    }
  }

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const input = formData.get("message") as string

    if (!input.trim() || status === "in_progress") return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      parts: [{ type: "text", text: input }],
    }

    setMessages((prev) => [...prev, userMessage])
    setStatus("in_progress")
    e.currentTarget.reset()
    inputRef.current?.focus()

    try {
      const responseText = await sendMessage(input)
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        parts: [{ type: "text", text: responseText }],
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        parts: [{ type: "text", text: "Sorry, I encountered an error. Please try again." }],
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setStatus("idle")
    }
  }

  return (
    <Card className="flex flex-col h-full overflow-hidden">
      {/* Messages Container */}
      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Start a conversation</h3>
            <p className="text-sm text-muted-foreground">
              Ask me anything and I&apos;ll help you with intelligent responses
            </p>
          </div>
        )}

        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            {message.role === "assistant" && (
              <div className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-primary/10">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            )}

            <div
              className={`max-w-[80%] rounded-lg px-4 py-3 ${
                message.role === "user" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {message.parts.map((part, index) => {
                if (part.type === "text") {
                  return (
                    <p key={index} className="text-sm leading-relaxed whitespace-pre-wrap">
                      {part.text}
                    </p>
                  )
                }
                return null
              })}
            </div>

            {message.role === "user" && (
              <div className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-muted">
                <User className="w-4 h-4 text-muted-foreground" />
              </div>
            )}
          </div>
        ))}

        {status === "in_progress" && (
          <div className="flex gap-3 justify-start">
            <div className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-primary/10">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            </div>
            <div className="max-w-[80%] rounded-lg px-4 py-3 bg-muted">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce"></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="p-4 border-t bg-card">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            ref={inputRef}
            name="message"
            placeholder="Type your message..."
            disabled={status === "in_progress"}
            className="flex-1"
            autoComplete="off"
          />
          <Button type="submit" size="icon" disabled={status === "in_progress"}>
            <Send className="w-4 h-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </Card>
  )
}
