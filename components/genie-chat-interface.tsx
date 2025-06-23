"use client"
import { useChat } from "ai/react"
import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Bot, User, Loader2, Lock, AlertCircle, Sparkles, Upload, FileText, X, Paperclip } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import UsageTracker from "./usage-tracker"
import Link from "next/link"

// Mock user data - in real app, this would come from authentication
const mockUser = {
  plan: "free" as const,
  questionsUsed: 2,
  questionsLimit: 5,
}

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  content?: string
}

export default function GenieChatInterface() {
  const [userUsage, setUserUsage] = useState(mockUser)
  const [isBlocked, setIsBlocked] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    onFinish: () => {
      // Increment usage for free users
      if (userUsage.plan === "free") {
        setUserUsage((prev) => ({
          ...prev,
          questionsUsed: prev.questionsUsed + 1,
        }))
      }
    },
    onError: (error) => {
      console.error("Chat error:", error)
    },
  })

  useEffect(() => {
    setIsBlocked(userUsage.plan === "free" && userUsage.questionsUsed >= userUsage.questionsLimit)
  }, [userUsage])

  const canUploadFiles = userUsage.plan !== "free"

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isBlocked) return

    // Include file context in the message if files are uploaded
    let messageWithContext = input
    if (uploadedFiles.length > 0) {
      const fileContext = uploadedFiles
        .map((file) => `[File: ${file.name}]\n${file.content || "File uploaded but content not processed yet."}`)
        .join("\n\n")
      messageWithContext = `${input}\n\nUploaded files:\n${fileContext}`
    }

    handleSubmit(e, {
      data: {
        files: uploadedFiles,
        originalMessage: input,
      },
    })
  }

  const handleFileUpload = async (files: FileList) => {
    if (!canUploadFiles) {
      alert("File uploads are available with paid plans. Please upgrade to upload reports and test results.")
      return
    }

    const newFiles: UploadedFile[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]

      // Check file size (limit to 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert(`File ${file.name} is too large. Maximum size is 10MB.`)
        continue
      }

      // Check file type
      const allowedTypes = [
        "application/pdf",
        "text/plain",
        "text/csv",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "image/jpeg",
        "image/png",
        "image/gif",
      ]

      if (!allowedTypes.includes(file.type)) {
        alert(`File type ${file.type} is not supported. Please upload PDF, text, CSV, Excel, or image files.`)
        continue
      }

      const fileId = Math.random().toString(36).substr(2, 9)

      // Read file content for text files
      let content = ""
      if (file.type.startsWith("text/") || file.type === "application/pdf") {
        try {
          content = await readFileContent(file)
        } catch (error) {
          console.error("Error reading file:", error)
          content = "Error reading file content"
        }
      }

      newFiles.push({
        id: fileId,
        name: file.name,
        size: file.size,
        type: file.type,
        content,
      })
    }

    setUploadedFiles((prev) => [...prev, ...newFiles])
  }

  const readFileContent = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => resolve(e.target?.result as string)
      reader.onerror = reject
      reader.readAsText(file)
    })
  }

  const removeFile = (fileId: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId))
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files) {
      handleFileUpload(e.dataTransfer.files)
    }
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
    <div
      className="container mx-auto px-4 py-6 max-w-4xl h-full flex flex-col"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragging && canUploadFiles && (
        <div className="fixed inset-0 bg-blue-500 bg-opacity-20 border-2 border-dashed border-blue-500 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Upload className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <p className="text-lg font-semibold">Drop your files here</p>
            <p className="text-gray-600">Upload genetic reports, test results, or lab documents</p>
          </div>
        </div>
      )}

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
          {canUploadFiles && " Upload your reports and test results for personalized analysis."}
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
        <UsageTracker
          userPlan={userUsage.plan}
          questionsUsed={userUsage.questionsUsed}
          questionsLimit={userUsage.questionsLimit}
        />
      </div>

      {/* File Upload Area */}
      {canUploadFiles && (
        <Card className="mb-6 border-blue-100 bg-blue-50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-blue-800">Upload Reports & Test Results</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Upload className="h-4 w-4 mr-2" />
                Choose Files
              </Button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.txt,.csv,.xlsx,.xls,.jpg,.jpeg,.png,.gif"
              onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
              className="hidden"
            />

            {uploadedFiles.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-blue-800">Uploaded Files:</p>
                {uploadedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between bg-white p-3 rounded-lg border border-blue-200"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">{file.name}</span>
                      <span className="text-xs text-gray-500">({(file.size / 1024).toFixed(1)} KB)</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(file.id)}
                      className="text-red-600 hover:text-red-800 hover:bg-red-50"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            <p className="text-xs text-blue-600 mt-2">
              Drag & drop files here or click "Choose Files". Supports PDF, text, CSV, Excel, and image files (max 10MB
              each).
            </p>
          </CardContent>
        </Card>
      )}

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
              {canUploadFiles && " Feel free to upload your genetic reports or test results for personalized analysis!"}
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
                    {isBlocked && <Lock className="h-3 w-3 mr-2 flex-shrink-0" />}
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Upgrade Prompt for Blocked Users */}
      {isBlocked && (
        <Card className="mb-6 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Lock className="h-6 w-6 text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Monthly Question Limit Reached</h3>
                <p className="text-amber-700 text-sm mb-4">
                  You've used all {userUsage.questionsLimit} free questions this month. Upgrade to continue asking
                  questions and unlock file uploads for your genetic reports.
                </p>
                <div className="flex gap-2 justify-center">
                  <Link href="/pricing">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">View Plans</Button>
                  </Link>
                  <Link href="/api-setup">
                    <Button variant="outline" className="border-emerald-200 hover:bg-emerald-50">
                      Use Your API Key
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
                    <span className="text-sm text-gray-600">Genie is analyzing your information...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <form onSubmit={handleFormSubmit} className="flex gap-2 mt-4">
          <div className="flex-1 relative">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder={isBlocked ? "Upgrade to continue asking questions..." : "Ask Genie about genetics..."}
              className="flex-1 border-emerald-200 focus:border-emerald-400 pr-10"
              disabled={isLoading || isBlocked}
            />
            {canUploadFiles && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-600"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading || isBlocked}
              >
                <Paperclip className="h-4 w-4" />
              </Button>
            )}
          </div>
          <Button
            type="submit"
            disabled={isLoading || !input.trim() || isBlocked}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            {isBlocked ? <Lock className="h-4 w-4" /> : <Send className="h-4 w-4" />}
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
