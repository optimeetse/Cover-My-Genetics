import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, DollarSign, Users, Calendar, FileText, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function PracticeInABoxPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Genetic Counseling Practice-in-a-Box</h1>
            <p className="text-xl text-gray-600 mb-6">
              Launch your private genetic counseling practice with our complete platform and patient pipeline
            </p>
            <div className="flex items-center justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Users className="h-3 w-3 mr-1" />
                Complete Practice Solution
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Zap className="h-3 w-3 mr-1" />
                Launch in 30 Days
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Shield className="h-3 w-3 mr-1" />
                HIPAA Compliant
              </Badge>
            </div>
          </div>

          {/* What's Included */}
          <Card className="mb-12 border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-800">Everything You Need to Start Your Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Users className="h-5 w-5 text-emerald-600" />
                    Patient Pipeline
                  </h4>
                  <ul className="space-y-1 text-sm text-emerald-700">
                    <li>• Pre-qualified patient leads</li>
                    <li>• AI-screened referrals</li>
                    <li>• Geographic targeting</li>
                    <li>• Specialty matching</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-emerald-600" />
                    Practice Management
                  </h4>
                  <ul className="space-y-1 text-sm text-emerald-700">
                    <li>• Online scheduling system</li>
                    <li>• Telehealth platform</li>
                    <li>• Patient portal</li>
                    <li>• Automated reminders</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <FileText className="h-5 w-5 text-emerald-600" />
                    Clinical Tools
                  </h4>
                  <ul className="space-y-1 text-sm text-emerald-700">
                    <li>• Pedigree software</li>
                    <li>• Risk assessment tools</li>
                    <li>• Report templates</li>
                    <li>• Clinical decision support</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-emerald-600" />
                    Billing & Revenue
                  </h4>
                  <ul className="space-y-1 text-sm text-emerald-700">
                    <li>• Insurance billing</li>
                    <li>• Payment processing</li>
                    <li>• Revenue tracking</li>
                    <li>• Financial reporting</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-600" />
                    Compliance & Legal
                  </h4>
                  <ul className="space-y-1 text-sm text-emerald-700">
                    <li>• HIPAA compliance</li>
                    <li>• State licensing support</li>
                    <li>• Malpractice guidance</li>
                    <li>• Documentation templates</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Zap className="h-5 w-5 text-emerald-600" />
                    Marketing & Growth
                  </h4>
                  <ul className="space-y-1 text-sm text-emerald-700">
                    <li>• Professional website</li>
                    <li>• SEO optimization</li>
                    <li>• Physician referral network</li>
                    <li>• Patient education materials</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-gray-200">
              <CardHeader className="text-center">
                <CardTitle>Starter Practice</CardTitle>
                <div className="text-3xl font-bold">$2,500</div>
                <p className="text-sm text-gray-600">per month + 15% revenue share</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Up to 20 patients/month</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Basic telehealth platform</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Standard billing support</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Email support</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 scale-105 shadow-lg">
              <CardHeader className="text-center">
                <Badge className="mb-2">Most Popular</Badge>
                <CardTitle className="text-blue-800">Growth Practice</CardTitle>
                <div className="text-3xl font-bold text-blue-600">$4,500</div>
                <p className="text-sm text-gray-600">per month + 12% revenue share</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Up to 50 patients/month</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Advanced telehealth + in-person</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Full billing & insurance</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Dedicated practice manager</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Marketing support</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader className="text-center">
                <CardTitle className="text-purple-800">Enterprise Practice</CardTitle>
                <div className="text-3xl font-bold text-purple-600">$7,500</div>
                <p className="text-sm text-gray-600">per month + 10% revenue share</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>Unlimited patients</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>Multi-location support</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>Custom integrations</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>24/7 support</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>White-label options</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Major Challenges */}
          <Card className="mb-12 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <AlertTriangle className="h-5 w-5" />
                Critical Challenges to Consider
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-red-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Financial Barriers</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Hospital GCs earn $70-90K salary</li>
                    <li>• $2,500-7,500/month is 30-100% of take-home</li>
                    <li>• Need 6-12 months runway before profitability</li>
                    <li>• Most can't afford the risk</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Market Reality</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Insurance reimbursement is complex</li>
                    <li>• Many patients can't afford $300+ consultations</li>
                    <li>• Hospital referrals may dry up</li>
                    <li>• Geographic limitations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Operational Complexity</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• State licensing requirements vary</li>
                    <li>• Malpractice insurance costs</li>
                    <li>• Clinical supervision needs</li>
                    <li>• Continuing education requirements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Competition</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Hospital systems expanding telehealth</li>
                    <li>• Large genetics companies (Invitae, etc.)</li>
                    <li>• Direct-to-consumer testing</li>
                    <li>• AI replacing some counseling needs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alternative Model */}
          <Card className="mb-12 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Alternative: Partnership Model</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-700">
              <div className="space-y-4">
                <p>
                  <strong>Lower-risk approach:</strong> Partner with existing hospital systems to provide overflow
                  capacity and specialized services.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">How it works:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• GCs stay employed by hospitals</li>
                      <li>• Work part-time on our platform</li>
                      <li>• Handle overflow/specialized cases</li>
                      <li>• Revenue sharing model</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• No financial risk for GCs</li>
                      <li>• Supplemental income</li>
                      <li>• Flexible scheduling</li>
                      <li>• Larger addressable market</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Learning More?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're still developing this program. Join our waitlist to be notified when we launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/counselors/waitlist">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Join Waitlist</Button>
                </Link>
                <Link href="/contact-us">
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Schedule Discussion
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
