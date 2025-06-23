"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Check, CreditCard, Shield, Star } from "lucide-react"
import Link from "next/link"

export default function SubscribePage() {
  const searchParams = useSearchParams()
  const [selectedPlan, setSelectedPlan] = useState("pro")
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    const plan = searchParams.get("plan")
    if (plan && ["pro", "family"].includes(plan)) {
      setSelectedPlan(plan)
    }
  }, [searchParams])

  const plans = {
    pro: {
      name: "Pro",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "Unlimited questions with Genie",
        "Advanced genetic analysis",
        "Detailed personalized reports",
        "Family history builder",
        "Risk assessment tools",
        "Chat history & export",
        "Priority email support",
        "Early access to new features",
      ],
    },
    family: {
      name: "Family",
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        "Everything in Pro",
        "Up to 6 family member profiles",
        "Shared family genetic reports",
        "Inheritance pattern analysis",
        "Family risk assessments",
        "Genetic counselor consultations (2/month)",
        "Phone & video support",
        "Custom genetic reports",
      ],
    },
  }

  const currentPlan = plans[selectedPlan as keyof typeof plans]
  const price = billingCycle === "monthly" ? currentPlan.monthlyPrice : currentPlan.yearlyPrice
  const yearlyDiscount = Math.round(
    ((currentPlan.monthlyPrice * 12 - currentPlan.yearlyPrice) / (currentPlan.monthlyPrice * 12)) * 100,
  )

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // In a real app, this would redirect to success page or dashboard
      alert("Subscription successful! Welcome to " + currentPlan.name + " plan!")
    }, 2000)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Complete Your Subscription</h1>
            <p className="text-gray-600">
              Start your genetic journey with advanced AI counseling and personalized insights
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Plan Selection */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Select Your Plan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(plans).map(([key, plan]) => (
                    <div
                      key={key}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedPlan === key ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedPlan(key)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{plan.name} Plan</h3>
                        <div className="text-right">
                          <div className="font-bold">
                            ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                          </div>
                          <div className="text-sm text-gray-600">/{billingCycle === "monthly" ? "month" : "year"}</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">{plan.features.slice(0, 3).join(" • ")}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Billing Cycle</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      billingCycle === "monthly"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setBillingCycle("monthly")}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Monthly</span>
                      <span>${currentPlan.monthlyPrice}/month</span>
                    </div>
                  </div>
                  <div
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      billingCycle === "yearly" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setBillingCycle("yearly")}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Yearly</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Save {yearlyDiscount}%
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div>${currentPlan.yearlyPrice}/year</div>
                        <div className="text-sm text-gray-600">${Math.round(currentPlan.yearlyPrice / 12)}/month</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Form */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="card">Card Number</Label>
                      <Input id="card" placeholder="1234 5678 9012 3456" required />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Cardholder Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${Math.round(price * 0.08)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${price + Math.round(price * 0.08)}</span>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={isProcessing}>
                      {isProcessing ? "Processing..." : `Start ${currentPlan.name} Plan`}
                    </Button>

                    <div className="text-center text-sm text-gray-600">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Shield className="h-4 w-4" />
                        <span>Secure payment powered by Stripe</span>
                      </div>
                      <p>7-day free trial • Cancel anytime • 30-day money-back guarantee</p>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Star className="h-5 w-5" />
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {currentPlan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-green-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              Need help choosing a plan?{" "}
              <Link href="/contact-us" className="text-blue-600 hover:underline">
                Contact our team
              </Link>{" "}
              or{" "}
              <Link href="/pricing" className="text-blue-600 hover:underline">
                compare all plans
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
