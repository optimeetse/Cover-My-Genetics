"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Brain, Activity, FileText, Calendar, CheckCircle, Clock, TrendingUp, Key } from "lucide-react"
import Link from "next/link"

// Mock user data
const mockUser = {
  plan: "api" as const, // Changed from "free" to "api"
  hasApiKey: true,
  name: "Sarah Johnson",
  email: "sarah@example.com",
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [user] = useState(mockUser)

  const riskFactors = [
    {
      condition: "Type 2 Diabetes",
      risk: "Moderate",
      percentage: 65,
      icon: Activity,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      locked: false, // API plan users get full access
    },
    {
      condition: "Heart Disease",
      risk: "Low",
      percentage: 25,
      icon: Heart,
      color: "text-green-600",
      bgColor: "bg-green-100",
      locked: false,
    },
    {
      condition: "Alzheimer's Disease",
      risk: "Low-Moderate",
      percentage: 35,
      icon: Brain,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      locked: false,
    },
  ]

  const recentTests = [
    {
      name: "Comprehensive Health Panel",
      date: "2025-06-15",
      status: "Completed",
      results: "Available",
      locked: false,
    },
    {
      name: "BRCA1/BRCA2 Analysis",
      date: "2025-06-10",
      status: "Completed",
      results: "Available",
      locked: false,
    },
    {
      name: "Pharmacogenomic Panel",
      date: "2025-06-05",
      status: "In Progress",
      results: "Pending",
      locked: false,
    },
  ]

  const recommendations = [
    {
      title: "Lifestyle Modifications",
      description:
        "Based on your genetic profile, consider increasing physical activity and monitoring blood sugar levels.",
      priority: "High",
      icon: TrendingUp,
      locked: false,
    },
    {
      title: "Regular Screening",
      description: "Schedule annual cardiovascular screening due to family history.",
      priority: "Medium",
      icon: Calendar,
      locked: false,
    },
    {
      title: "Genetic Counseling",
      description: "Consider meeting with a genetic counselor to discuss family planning options.",
      priority: "Low",
      icon: FileText,
      locked: false,
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}</h1>
                <p className="text-gray-600">
                  Track your genetic insights, test results, and personalized recommendations.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="flex items-center gap-1 bg-blue-100 text-blue-800">
                  <Key className="h-3 w-3" />
                  API Plan
                </Badge>
                {!user.hasApiKey && (
                  <Link href="/profile">
                    <Button>Add API Key</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* API Key Status Banner */}
          {!user.hasApiKey && (
            <Card className="mb-6 border-amber-200 bg-amber-50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-100 rounded-full">
                      <Key className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-800">API Key Required</h3>
                      <p className="text-amber-700 text-sm">
                        Add your OpenAI API key to unlock unlimited access to Genie and all features.
                      </p>
                    </div>
                  </div>
                  <Link href="/profile">
                    <Button>Add API Key</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="results">Test Results</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              <TabsTrigger value="family">Family History</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Plan Status</CardTitle>
                    <Key className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">API Plan</div>
                    <p className="text-xs text-muted-foreground">
                      {user.hasApiKey ? "Unlimited access" : "API key required"}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Risk Assessments</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">2 high priority</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Today</div>
                    <p className="text-xs text-muted-foreground">New results available</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Genetic Risk Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {riskFactors.map((factor, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full ${factor.bgColor}`}>
                            <factor.icon className={`h-4 w-4 ${factor.color}`} />
                          </div>
                          <div>
                            <p className="font-medium">{factor.condition}</p>
                            <p className="text-sm text-gray-600">{factor.risk} Risk</p>
                          </div>
                        </div>
                        <Badge variant="outline">{factor.percentage}%</Badge>
                      </div>
                      <Progress value={factor.percentage} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Test Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTests.map((test, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <p className="font-medium">{test.name}</p>
                          <p className="text-sm text-gray-600">Completed: {test.date}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge
                            variant={test.status === "Completed" ? "default" : "secondary"}
                            className="flex items-center gap-1"
                          >
                            {test.status === "Completed" ? (
                              <CheckCircle className="h-3 w-3" />
                            ) : (
                              <Clock className="h-3 w-3" />
                            )}
                            {test.status}
                          </Badge>
                          <Button variant="outline" size="sm" disabled={test.results === "Pending"}>
                            {test.results === "Available" ? "View Results" : "Pending"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personalized Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recommendations.map((rec, index) => (
                      <div key={index} className="flex gap-4 p-4 border rounded-lg">
                        <div className="p-2 rounded-full bg-blue-100">
                          <rec.icon className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{rec.title}</h3>
                            <Badge
                              variant={
                                rec.priority === "High"
                                  ? "destructive"
                                  : rec.priority === "Medium"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {rec.priority} Priority
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{rec.description}</p>
                          <Button variant="outline" size="sm">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="family" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Family History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-2">Maternal Side</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Mother: Type 2 Diabetes (age 55)</li>
                        <li>• Maternal Grandmother: Heart Disease (age 72)</li>
                        <li>• Maternal Aunt: Breast Cancer (age 48)</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-2">Paternal Side</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Father: Hypertension (age 60)</li>
                        <li>• Paternal Grandfather: Alzheimer's Disease (age 78)</li>
                      </ul>
                    </div>
                    <Button variant="outline">Update Family History</Button>
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
