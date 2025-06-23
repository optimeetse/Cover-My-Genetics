import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, Key, Database, Zap } from "lucide-react"

export default function SetupPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Setup Guide</h1>
            <p className="text-gray-600">
              Follow these steps to get your Cover My Genetics application fully functional.
            </p>
          </div>

          <div className="space-y-6">
            {/* OpenAI API Setup */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  1. OpenAI API Configuration
                  <Badge variant="destructive">Required</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-amber-200 bg-amber-50">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="text-amber-800">
                    Genie AI requires an OpenAI API key to function. Without this, the genetic counselor won't be able
                    to respond to questions.
                  </AlertDescription>
                </Alert>

                <div className="space-y-3">
                  <h3 className="font-semibold">Steps to configure:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>
                      Go to{" "}
                      <a
                        href="https://platform.openai.com/api-keys"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        OpenAI API Keys
                      </a>
                    </li>
                    <li>Create a new API key (you'll need to add billing information)</li>
                    <li>Copy the API key</li>
                    <li>
                      Add it to your environment variables as{" "}
                      <code className="bg-gray-100 px-1 rounded">OPENAI_API_KEY</code>
                    </li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Environment Variable Setup:</h4>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>For local development:</strong>
                    </p>
                    <code className="block bg-gray-800 text-green-400 p-2 rounded text-sm">
                      # Create a .env.local file in your project root
                      <br />
                      OPENAI_API_KEY=your_api_key_here
                    </code>

                    <p className="text-sm mt-4">
                      <strong>For Vercel deployment:</strong>
                    </p>
                    <ol className="list-decimal list-inside text-sm space-y-1">
                      <li>Go to your Vercel project dashboard</li>
                      <li>Navigate to Settings → Environment Variables</li>
                      <li>
                        Add <code>OPENAI_API_KEY</code> with your API key value
                      </li>
                      <li>Redeploy your application</li>
                    </ol>
                  </div>
                </div>

                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription className="text-green-800">
                    <strong>Cost Estimate:</strong> OpenAI GPT-4 costs approximately $0.03 per 1K tokens. A typical
                    conversation costs $0.10-$0.50.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Optional Enhancements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  2. Database Setup (Optional)
                  <Badge variant="secondary">Recommended</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  For production use, you'll want to add a database to store user accounts, subscription status, and
                  usage tracking.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Supabase (Recommended)</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Built-in authentication</li>
                      <li>• Real-time subscriptions</li>
                      <li>• Easy integration</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Neon PostgreSQL</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Serverless PostgreSQL</li>
                      <li>• Auto-scaling</li>
                      <li>• Generous free tier</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Processing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  3. Payment Processing (Optional)
                  <Badge variant="secondary">For Subscriptions</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  To enable paid subscriptions, integrate with Stripe for payment processing.
                </p>

                <div className="space-y-3">
                  <h4 className="font-medium">Required Environment Variables:</h4>
                  <code className="block bg-gray-800 text-green-400 p-2 rounded text-sm">
                    STRIPE_SECRET_KEY=sk_test_...
                    <br />
                    STRIPE_PUBLISHABLE_KEY=pk_test_...
                    <br />
                    STRIPE_WEBHOOK_SECRET=whsec_...
                  </code>
                </div>
              </CardContent>
            </Card>

            {/* Testing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  4. Test Your Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Verify everything is working:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Navigate to the "Ask Genie" page</li>
                    <li>Try asking a sample question like "What is genetics?"</li>
                    <li>Verify Genie responds with helpful information</li>
                    <li>Check that usage tracking updates correctly</li>
                  </ol>
                </div>

                <Alert className="border-blue-200 bg-blue-50">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription className="text-blue-800">
                    <strong>Pro Tip:</strong> Start with a small OpenAI usage limit to control costs while testing.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Need help with setup?{" "}
              <a href="/contact-us" className="text-blue-600 hover:underline">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
