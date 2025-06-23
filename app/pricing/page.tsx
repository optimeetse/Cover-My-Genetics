import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star, Key } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Bring Your Own API",
      price: "$5",
      period: "per month",
      description: "Unlimited access with your OpenAI API key",
      features: [
        "Unlimited questions with Genie",
        "Use your own OpenAI API key",
        "Pay only OpenAI costs (~$5-15/month)",
        "Full chat history",
        "All genetic resources",
        "Email support",
        "Complete privacy control",
        "No usage limits",
      ],
      limitations: [],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
      popular: false,
      isFree: true,
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Comprehensive genetic counseling without API setup",
      features: [
        "Unlimited questions with Genie",
        "No API key required",
        "Advanced genetic analysis",
        "Detailed personalized reports",
        "Family history builder",
        "Risk assessment tools",
        "Priority email support",
        "Early access to new features",
      ],
      limitations: [],
      buttonText: "Start Pro Trial",
      buttonVariant: "default" as const,
      popular: false,
    },
    {
      name: "Family",
      price: "$79",
      period: "per month",
      description: "Complete genetic insights for your entire family",
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
      limitations: [],
      buttonText: "Start Family Plan",
      buttonVariant: "default" as const,
      popular: true,
      highlight: "Most Popular",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Choose Your Genetic Journey</h1>
            <p className="text-xl text-gray-600 mb-8">
              Unlock the power of your genetic information with plans designed for every need
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm">
                <Star className="h-3 w-3 mr-1" />
                7-day free trial on all plans
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Key className="h-3 w-3 mr-1" />
                Bring your own API for maximum savings
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-blue-500 shadow-lg scale-105" : ""} ${plan.isFree ? "border-green-500" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white">Most Popular</Badge>
                  </div>
                )}
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white">{plan.highlight}</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 ml-1">/{plan.period}</span>
                    {plan.isFree && (
                      <div className="text-sm text-green-600 font-medium mt-1">+ Your OpenAI API costs</div>
                    )}
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-700 text-sm">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-500 text-sm">Limitations:</h4>
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start gap-2">
                          <X className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link href={plan.isFree ? "/api-setup" : `/subscribe?plan=${plan.name.toLowerCase()}`}>
                    <Button variant={plan.buttonVariant} className="w-full mt-6">
                      {plan.buttonText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Why do you charge $5/month for the API plan?</h3>
                <p className="text-gray-600 text-sm">
                  The $5 covers our platform costs, infrastructure, security, and ongoing development. You still save
                  significantly compared to our Pro plan while getting unlimited access.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How much does the API key option really cost?</h3>
                <p className="text-gray-600 text-sm">
                  Total cost is $5/month + your OpenAI usage (typically $5-15/month). Most users spend $10-20/month
                  total, compared to $29/month for Pro.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is my data secure with my own API key?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! Your conversations go directly to OpenAI. We never see your chat content, only facilitate the
                  connection.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I switch between plans?</h3>
                <p className="text-gray-600 text-sm">
                  You can start with the API plan, or upgrade to Pro anytime for the convenience of not managing your
                  own API key.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
