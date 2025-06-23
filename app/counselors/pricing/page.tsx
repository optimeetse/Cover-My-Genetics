import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, TrendingUp, Users, Calculator, Star } from "lucide-react"
import Link from "next/link"

export default function CounselorPricingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Genetic Counselor Directory Pricing</h1>
            <p className="text-xl text-gray-600 mb-6">
              Transparent, performance-based pricing. Pay only for qualified leads that book consultations.
            </p>
            <Badge variant="secondary" className="text-sm">
              <TrendingUp className="h-3 w-3 mr-1" />
              Average ROI: 400-600%
            </Badge>
          </div>

          {/* Lead Pricing */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-emerald-200">
              <CardHeader className="text-center">
                <CardTitle className="text-emerald-800">Initial Consultation</CardTitle>
                <div className="text-3xl font-bold text-emerald-600">$25</div>
                <p className="text-sm text-gray-600">per qualified lead</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Pre-screened by AI</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Genuine genetic concerns</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Contact info provided</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Booking intent confirmed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 scale-105 shadow-lg">
              <CardHeader className="text-center">
                <Badge className="mb-2">Most Popular</Badge>
                <CardTitle className="text-blue-800">Follow-up Visit</CardTitle>
                <div className="text-3xl font-bold text-blue-600">$15</div>
                <p className="text-sm text-gray-600">per return patient</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Existing patient relationship</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Higher conversion rate</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Ongoing care coordination</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Family planning support</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader className="text-center">
                <CardTitle className="text-purple-800">Family Referral</CardTitle>
                <div className="text-3xl font-bold text-purple-600">$20</div>
                <p className="text-sm text-gray-600">per family member</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>Referred by existing patient</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>Shared genetic concerns</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>Family history context</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>High conversion potential</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ROI Calculator */}
          <Card className="mb-12 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Calculator className="h-5 w-5" />
                ROI Calculator Example
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-800">Monthly Scenario:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Initial consultation leads:</span>
                      <span className="font-semibold">10 leads × $25 = $250</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Conversion rate (35%):</span>
                      <span className="font-semibold">3.5 new patients</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg consultation fee:</span>
                      <span className="font-semibold">$300 per patient</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-semibold">Monthly revenue:</span>
                      <span className="font-bold text-green-600">$1,050</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Lead costs:</span>
                      <span className="font-bold text-red-600">-$250</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-bold">Net profit:</span>
                      <span className="font-bold text-green-700 text-lg">$800</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-green-800">Additional Benefits:</h4>
                  <div className="space-y-2 text-sm text-green-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Follow-up appointments (avg 2 per patient)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Family member referrals (avg 1.5 per patient)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Long-term patient relationships</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Professional network growth</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-green-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">320%</div>
                      <div className="text-sm text-green-700">Average ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Volume Discounts */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Volume Discounts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-lg font-bold">10+ leads/month</div>
                  <div className="text-emerald-600 font-semibold">10% discount</div>
                  <div className="text-sm text-gray-600">$22.50 per lead</div>
                </div>
                <div className="text-center p-4 border rounded-lg border-blue-200 bg-blue-50">
                  <div className="text-lg font-bold">25+ leads/month</div>
                  <div className="text-blue-600 font-semibold">20% discount</div>
                  <div className="text-sm text-gray-600">$20 per lead</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-lg font-bold">50+ leads/month</div>
                  <div className="text-purple-600 font-semibold">30% discount</div>
                  <div className="text-sm text-gray-600">$17.50 per lead</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Success Metrics */}
          <Card className="mb-12 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Platform Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">35%</div>
                  <div className="text-sm text-blue-700">Average Conversion Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">$285</div>
                  <div className="text-sm text-blue-700">Average Consultation Fee</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">2.3</div>
                  <div className="text-sm text-blue-700">Avg Follow-ups per Patient</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">4.8</div>
                  <div className="text-sm text-blue-700">Average Counselor Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                What Counselors Say
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold">Dr. Sarah Chen</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "The lead quality is exceptional. Patients come pre-educated about genetics and genuinely need
                    counseling. My practice has grown 40% since joining."
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold">Dr. Michael Rodriguez</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    "Best ROI of any marketing I've tried. The pay-per-lead model means I only invest in actual
                    opportunities. Highly recommend."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Grow Your Practice?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join hundreds of genetic counselors who are growing their practices with qualified leads from Cover My
                Genetics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/counselors/join">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Apply to Join Directory</Button>
                </Link>
                <Link href="/contact-us">
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Schedule a Demo
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
