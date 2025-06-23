"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Crown, AlertTriangle, Key } from "lucide-react"
import Link from "next/link"

interface UsageTrackerProps {
  userPlan: "free" | "api" | "pro" | "family"
  questionsUsed: number
  questionsLimit: number
  onUpgrade?: () => void
}

export default function UsageTracker({ userPlan, questionsUsed, questionsLimit, onUpgrade }: UsageTrackerProps) {
  const [usagePercentage, setUsagePercentage] = useState(0)
  const isNearLimit = usagePercentage >= 80
  const isAtLimit = questionsUsed >= questionsLimit

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

  if (userPlan === "api") {
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
              <li>• File uploads for reports & test results</li>
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

  // Free plan
  return (
    <Card className={`${isNearLimit ? "border-amber-200 bg-amber-50" : "border-blue-200 bg-blue-50"}`}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Free Plan
          </span>
          <Badge variant="outline">
            {questionsUsed}/{questionsLimit} questions
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Questions this month</span>
            <span className={isNearLimit ? "text-amber-600 font-medium" : "text-gray-600"}>
              {questionsUsed} of {questionsLimit}
            </span>
          </div>
          <Progress
            value={usagePercentage}
            className={`h-2 ${isNearLimit ? "[&>div]:bg-amber-500" : "[&>div]:bg-blue-500"}`}
          />
        </div>

        {isAtLimit && (
          <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
            <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium text-red-800">Monthly limit reached</p>
              <p className="text-red-600">Upgrade to continue asking questions with Genie</p>
            </div>
          </div>
        )}

        {isNearLimit && !isAtLimit && (
          <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium text-amber-800">Almost at your limit</p>
              <p className="text-amber-600">You have {questionsLimit - questionsUsed} questions remaining</p>
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <Link href="/pricing" className="flex-1">
            <Button variant="default" className="w-full">
              Upgrade Plan
            </Button>
          </Link>
          <Button variant="outline" size="sm" asChild>
            <Link href="/pricing">Compare Plans</Link>
          </Button>
        </div>

        <div className="text-xs text-gray-600 space-y-1">
          <p>• Free plan resets monthly</p>
          <p>• Upgrade for unlimited questions</p>
          <p>• Upload files with paid plans</p>
        </div>
      </CardContent>
    </Card>
  )
}
