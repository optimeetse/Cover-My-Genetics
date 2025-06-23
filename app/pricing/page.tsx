import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star, Key } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Get started with basic genetic insights",
      features: [
        "5 questions per month with Genie",
        "Basic genetic information",
        "Educational resources",
        "Community support",
      ],
      limitations: [
        "No file uploads",
        "No chat history saving",
        "No detailed reports",
        "No family history tools",
        "No priority support",
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false,
    },
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
        "File uploads for reports & test results",
        "All genetic resources",
        "Email support",
        "Complete privacy control",
      ],
      limitations: [],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
      popular: false,
      highlight: "Most Cost-Effective",
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Comprehensive genetic counseling without API setup",
      features: [
        "Unlimited questions with Genie",
        "No API key required",
        "File uploads for reports & test results",
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
        "File uploads for all family members",
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
                <Star className="h-3 w-3 mr-1" />5 free questions to get started
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Key className="h-3 w-3 mr-1" />
                Upload reports with paid plans
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-blue-500 shadow-lg scale-105" : ""} ${plan.highlight === "Most Cost-Effective" ? "border-green-500" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white">Most Popular</Badge>
                  </div>
                )}
                {plan.highlight && plan.highlight !== "Most Popular" && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white">{plan.highlight}</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 ml-1">/{plan.period}</span>
                    {plan.name === "Bring Your Own API" && (
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

                  <Link
                    href={
                      plan.name === "Free"
                        ? "/signup"
                        : plan.name === "Bring Your Own API"
                          ? "/api-setup"
                          : `/subscribe?plan=${plan.name.toLowerCase()}`
                    }
                  >
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
                <h3 className="font-semibold mb-2">Can I upload my genetic test results?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! With any paid plan, you can upload genetic test results, lab reports, and other documents for
                  Genie to analyze and provide personalized insights.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What happens after my 5 free questions?</h3>
                <p className="text-gray-600 text-sm">
                  You'll need to upgrade to a paid plan to continue. The API plan is most cost-effective at
                  ~$10-20/month total, while Pro offers convenience without API setup.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is my uploaded data secure?</h3>
                <p className="text-gray-600 text-sm">
                  Absolutely. All uploads are encrypted and processed securely. With the API plan, your data goes
                  directly to OpenAI without us storing it.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I switch between plans?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, you can upgrade or downgrade anytime. Your chat history and uploaded files are preserved when
                  switching between paid plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
