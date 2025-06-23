import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, DollarSign, Key, Shield, Zap, ExternalLink, Info, Mail } from "lucide-react"
import Link from "next/link"

export default function ApiSetupPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Connect Your OpenAI API</h1>
            <p className="text-xl text-gray-600 mb-6">
              Get unlimited access to Genie for just $5/month + your OpenAI costs
            </p>
            <div className="flex items-center justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <DollarSign className="h-3 w-3 mr-1" />
                $5/month platform fee
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Zap className="h-3 w-3 mr-1" />
                Unlimited questions
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Shield className="h-3 w-3 mr-1" />
                Your data stays private
              </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Why Use Your Own API Key */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <CheckCircle className="h-5 w-5" />
                  Why This Plan is Perfect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-green-700">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Unlimited Usage:</strong> Ask Genie as many questions as you want
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Transparent Costs:</strong> $5/month + OpenAI costs (typically $5-15/month)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Maximum Privacy:</strong> Your conversations go directly to OpenAI
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>Best Value:</strong> Total cost ~$10-20/month vs $29 Pro plan
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Cost Comparison */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Cost Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">Our Pro Plan</span>
                    <span className="text-lg font-bold">$29/month</span>
                  </div>
                  <div className="text-center text-gray-500 text-sm">vs</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded border border-green-200">
                      <span className="font-medium text-green-800">Platform Fee</span>
                      <span className="text-lg font-bold text-green-800">$5/month</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded border border-green-200">
                      <span className="font-medium text-green-800">OpenAI Costs</span>
                      <span className="text-lg font-bold text-green-800">~$5-15/month</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-100 rounded border-2 border-green-300">
                      <span className="font-bold text-green-800">Total</span>
                      <span className="text-xl font-bold text-green-800">~$10-20/month</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600">
                  *OpenAI costs depend on usage. Heavy users might spend more, but you have full control.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Setup Instructions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                How to Set Up Your OpenAI API Key
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-semibold">Create OpenAI Account</h3>
                  <p className="text-sm text-gray-600">Sign up at OpenAI and add billing information to your account</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://platform.openai.com/signup" target="_blank" rel="noopener noreferrer">
                      Sign Up <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="font-semibold">Generate API Key</h3>
                  <p className="text-sm text-gray-600">Create a new API key in your OpenAI dashboard</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer">
                      Get API Key <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="font-semibold">Add to Profile</h3>
                  <p className="text-sm text-gray-600">Enter your API key in your Cover My Genetics profile</p>
                  <Button size="sm" asChild>
                    <Link href="/profile">Add API Key</Link>
                  </Button>
                </div>
              </div>

              <Alert className="border-blue-200 bg-blue-50">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-blue-800">
                  <strong>Security Note:</strong> Your API key is stored securely and encrypted. We never see or log
                  your conversations with Genie.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Why do you charge $5/month if I'm using my own API key?</h3>
                  <p className="text-gray-600 text-sm">
                    The $5 covers our platform infrastructure, security, ongoing development, and support. You still
                    save significantly compared to our Pro plan while getting unlimited access.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">How much will this cost me total?</h3>
                  <p className="text-gray-600 text-sm">
                    Most users spend $10-20/month total ($5 platform fee + $5-15 OpenAI costs). Heavy users might spend
                    more, but you have full control and transparency.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Is my API key secure?</h3>
                  <p className="text-gray-600 text-sm">
                    Yes! Your API key is encrypted and stored securely. We use it only to make requests to OpenAI on
                    your behalf. You can revoke it anytime from your OpenAI dashboard.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">What if I don't want to manage an API key?</h3>
                  <p className="text-gray-600 text-sm">
                    No problem! Our Pro plan ($29/month) includes unlimited questions without needing your own API key.
                    Choose the option that works best for you.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of users who are getting unlimited access to Genie for a fraction of the cost of our Pro
                plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/profile">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Add My API Key</Button>
                </Link>
                <a
                  href="mailto:info@covermygenetics.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Get Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
