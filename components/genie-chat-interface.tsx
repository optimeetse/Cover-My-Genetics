"use client"
import { useChat } from "ai/react"
import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Bot, User, Loader2, Key, AlertCircle, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import UsageTracker from "./usage-tracker"
import Link from "next/link"

// Mock user data - in real app, this would come from authentication
const mockUser = {
  plan: "api" as const, // Changed from "free" to "api"
  hasApiKey: false, // This would be checked from user profile
}

export default function GenieChatInterface() {
  const [user] = useState(mockUser)
  const [isBlocked, setIsBlocked] = useState(false)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    onError: (error) => {
      console.error("Chat error:", error)
    },
  })

  useEffect(() => {
    // Block if user doesn't have API key configured
    setIsBlocked(user.plan === "api" && !user.hasApiKey)
  }, [user])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isBlocked) return
    handleSubmit(e)
  }

  const exampleQuestions = [
    "What genetic markers are associated with heart disease?",
    "How can I understand my BRCA1 test results?",
    "What lifestyle changes are recommended for my genetic profile?",
    "Can you explain what a VUS (Variant of Uncertain Significance) means?",
    "How heritable is diabetes in my family history?",
  ]

  const handleExampleClick = (question: string) => {
    if (isBlocked) return
    handleInputChange({ target: { value: question } } as any)
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl h-full flex flex-col">
      <div className="mb-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Avatar className="h-12 w-12 border-2 border-emerald-200">
            <AvatarImage src="/genie-avatar.png" alt="Genie AI" />
            <AvatarFallback className="bg-emerald-100">
              <Bot className="h-6 w-6 text-emerald-600" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Ask Genie
            </h1>
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
              <Sparkles className="h-3 w-3 mr-1" />
              AI Genetic Counselor
            </Badge>
          </div>
        </div>
        <p className="text-gray-600">
          Your personal AI genetic counselor. Ask questions about genetics, health risks, or interpreting genetic data.
        </p>
      </div>

      {/* Error Alert */}
      {error && (
        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-red-800">
            {error.message.includes("API key")
              ? "The AI service is not configured. Please contact support."
              : "I'm having trouble responding right now. Please try again in a moment."}
          </AlertDescription>
        </Alert>
      )}

      {/* Usage Tracker */}
      <div className="mb-6">
        <UsageTracker userPlan={user.plan} />
      </div>

      {messages.length === 0 && (
        <Card className="mb-6 border-emerald-100 bg-gradient-to-br from-emerald-50 to-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/genie-avatar.png" alt="Genie AI" />
                <AvatarFallback className="bg-emerald-100">
                  <Bot className="h-4 w-4 text-emerald-600" />
                </AvatarFallback>
              </Avatar>
              Welcome! I'm Genie, your AI genetic counselor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              I'm here to help you understand genetic information, interpret test results, and provide guidance on
              genetic health topics. You can ask me anything about genetics, heredity, or genetic testing.
            </p>
            <div className="space-y-2">
              <p className="font-medium text-sm text-emerald-800">Try asking me:</p>
              <div className="grid gap-2">
                {exampleQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="justify-start text-left h-auto p-3 whitespace-normal border-emerald-200 hover:bg-emerald-50"
                    onClick={() => handleExampleClick(question)}
                    disabled={isBlocked}
                  >
                    {isBlocked && <Key className="h-3 w-3 mr-2 flex-shrink-0" />}
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* API Key Setup Prompt */}
      {isBlocked && (
        <Card className="mb-6 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Key className="h-6 w-6 text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">API Key Required</h3>
                <p className="text-amber-700 text-sm mb-4">
                  To start using Genie, please add your OpenAI API key to your profile. This gives you unlimited access
                  for just $5/month + your OpenAI costs.
                </p>
                <div className="flex gap-2 justify-center">
                  <Link href="/profile">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Add API Key</Button>
                  </Link>
                  <Link href="/api-setup">
                    <Button variant="outline" className="border-emerald-200 hover:bg-emerald-50">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex-1 flex flex-col min-h-0">
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <Avatar className="h-8 w-8 border border-emerald-200">
                    <AvatarImage src="/genie-avatar.png" alt="Genie AI" />
                    <AvatarFallback className="bg-emerald-100">
                      <Bot className="h-4 w-4 text-emerald-600" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === "user"
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 text-gray-900 border border-gray-200"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.content}</div>
                </div>
                {message.role === "user" && (
                  <Avatar className="h-8 w-8 bg-gray-100 border border-gray-200">
                    <AvatarFallback>
                      <User className="h-4 w-4 text-gray-600" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <Avatar className="h-8 w-8 border border-emerald-200">
                  <AvatarImage src="/genie-avatar.png" alt="Genie AI" />
                  <AvatarFallback className="bg-emerald-100">
                    <Bot className="h-4 w-4 text-emerald-600" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-gray-100 rounded-lg px-4 py-2 border border-gray-200">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-emerald-600" />
                    <span className="text-sm text-gray-600">Genie is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <form onSubmit={handleFormSubmit} className="flex gap-2 mt-4">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder={isBlocked ? "Add your API key to start asking questions..." : "Ask Genie about genetics..."}
            className="flex-1 border-emerald-200 focus:border-emerald-400"
            disabled={isLoading || isBlocked}
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim() || isBlocked}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            {isBlocked ? <Key className="h-4 w-4" /> : <Send className="h-4 w-4" />}
          </Button>
        </form>
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        <p>
          <strong>Disclaimer:</strong> Genie provides educational information and should not replace professional
          medical advice. Always consult with a healthcare provider or certified genetic counselor for medical
          decisions.
        </p>
      </div>
    </div>
  )
}
