"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Crown, Key } from "lucide-react"
import Link from "next/link"

interface UsageTrackerProps {
  userPlan: "api" | "pro" | "family"
  questionsUsed?: number
  questionsLimit?: number
  onUpgrade?: () => void
}

export default function UsageTracker({
  userPlan,
  questionsUsed = 0,
  questionsLimit = 0,
  onUpgrade,
}: UsageTrackerProps) {
  const [usagePercentage, setUsagePercentage] = useState(0)

  useEffect(() => {
    if (questionsLimit > 0) {
      setUsagePercentage((questionsUsed / questionsLimit) * 100)
    }
  }, [questionsUsed, questionsLimit])

  if (userPlan === "pro" || userPlan === "family") {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-800">
                {userPlan === "pro" ? "Pro Plan" : "Family Plan"} - Unlimited Questions
              </span>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Premium
            </Badge>
          </div>
        </CardContent>
      </Card>
    )
  }

  // API Plan (new free tier)
  return (
    <Card className="border-blue-200 bg-blue-50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            API Plan - Unlimited Access
          </span>
          <Badge variant="outline" className="bg-blue-100 text-blue-800">
            $5/month + API costs
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-white p-4 rounded-lg border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Your Plan Benefits:</span>
          </div>
          <ul className="text-sm space-y-1 text-blue-700">
            <li>• Unlimited questions with Genie</li>
            <li>• Complete chat history</li>
            <li>• All genetic resources</li>
            <li>• Direct OpenAI connection</li>
            <li>• Maximum privacy control</li>
          </ul>
        </div>

        <div className="flex gap-2">
          <Link href="/profile" className="flex-1">
            <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
              Manage API Key
            </Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline" size="sm">
              Compare Plans
            </Button>
          </Link>
        </div>

        <div className="text-xs text-gray-600 space-y-1">
          <p>• $5/month platform fee</p>
          <p>• OpenAI costs typically $5-15/month</p>
          <p>• Total: ~$10-20/month vs $29 Pro plan</p>
        </div>
      </CardContent>
    </Card>
  )
}
