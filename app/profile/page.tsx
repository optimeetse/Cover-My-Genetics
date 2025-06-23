"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Key, Shield, Eye, EyeOff, CheckCircle, AlertTriangle, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const [apiKey, setApiKey] = useState("")
  const [showApiKey, setShowApiKey] = useState(false)
  const [isValidating, setIsValidating] = useState(false)
  const [apiKeyStatus, setApiKeyStatus] = useState<"none" | "valid" | "invalid">("none")

  const handleApiKeySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsValidating(true)

    // Simulate API key validation
    setTimeout(() => {
      if (apiKey.startsWith("sk-") && apiKey.length > 20) {
        setApiKeyStatus("valid")
      } else {
        setApiKeyStatus("invalid")
      }
      setIsValidating(false)
    }, 1500)
  }

  const handleRemoveApiKey = () => {
    setApiKey("")
    setApiKeyStatus("none")
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
            <p className="text-gray-600">Manage your account and API configuration</p>
          </div>

          <Tabs defaultValue="api-key" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="api-key">API Configuration</TabsTrigger>
              <TabsTrigger value="account">Account Settings</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>

            <TabsContent value="api-key" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5" />
                    OpenAI API Key Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {apiKeyStatus === "none" && (
                    <Alert className="border-blue-200 bg-blue-50">
                      <Key className="h-4 w-4" />
                      <AlertDescription className="text-blue-800">
                        <strong>No API key configured.</strong> Add your OpenAI API key for unlimited access to Genie at
                        cost. You'll pay OpenAI directly (typically $5-15/month).
                      </AlertDescription>
                    </Alert>
                  )}

                  {apiKeyStatus === "valid" && (
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription className="text-green-800">
                        <strong>API key is active!</strong> You now have unlimited access to Genie. Your usage will be
                        billed directly by OpenAI.
                      </AlertDescription>
                    </Alert>
                  )}

                  {apiKeyStatus === "invalid" && (
                    <Alert className="border-red-200 bg-red-50">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription className="text-red-800">
                        <strong>Invalid API key.</strong> Please check your API key and try again. Make sure it starts
                        with "sk-" and is from your OpenAI dashboard.
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleApiKeySubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="apiKey">OpenAI API Key</Label>
                      <div className="relative">
                        <Input
                          id="apiKey"
                          type={showApiKey ? "text" : "password"}
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                          placeholder="sk-..."
                          className="pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowApiKey(!showApiKey)}
                        >
                          {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">
                        Your API key is encrypted and stored securely. We never see your conversations.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button type="submit" disabled={!apiKey || isValidating}>
                        {isValidating ? "Validating..." : apiKeyStatus === "valid" ? "Update API Key" : "Save API Key"}
                      </Button>
                      {apiKeyStatus === "valid" && (
                        <Button type="button" variant="outline" onClick={handleRemoveApiKey}>
                          Remove API Key
                        </Button>
                      )}
                    </div>
                  </form>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-3">Need an API Key?</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">1. Create OpenAI Account</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Sign up and add billing information to your OpenAI account
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="https://platform.openai.com/signup" target="_blank" rel="noopener noreferrer">
                            Sign Up <ExternalLink className="h-3 w-3 ml-1" />
                          </Link>
                        </Button>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">2. Generate API Key</h4>
                        <p className="text-sm text-gray-600 mb-3">Create a new API key in your OpenAI dashboard</p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer">
                            Get API Key <ExternalLink className="h-3 w-3 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Security & Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">End-to-End Encryption</h4>
                        <p className="text-sm text-gray-600">Your API key is encrypted using AES-256</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Zero-Log Policy</h4>
                        <p className="text-sm text-gray-600">We never store or see your conversations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Direct Connection</h4>
                        <p className="text-sm text-gray-600">Your data goes directly to OpenAI</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Revoke Anytime</h4>
                        <p className="text-sm text-gray-600">Remove your API key instantly</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue="Sarah Johnson" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="sarah@example.com" />
                    </div>
                  </div>
                  <Button>Update Account</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Plan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{apiKeyStatus === "valid" ? "Bring Your Own API" : "Free Plan"}</h3>
                      <p className="text-sm text-gray-600">
                        {apiKeyStatus === "valid"
                          ? "Using your OpenAI API key for unlimited access"
                          : "5 questions per month"}
                      </p>
                    </div>
                    <Badge variant={apiKeyStatus === "valid" ? "default" : "secondary"}>
                      {apiKeyStatus === "valid" ? "Active" : "Free"}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Link href="/pricing">
                      <Button variant="outline">View All Plans</Button>
                    </Link>
                    {apiKeyStatus !== "valid" && (
                      <Link href="/api-setup">
                        <Button>Set Up API Key</Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
