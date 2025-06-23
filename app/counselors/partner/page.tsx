import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, DollarSign, Users, Calendar, Shield, Star, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function PartnerPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Partner with Cover My Genetics</h1>
            <p className="text-xl text-gray-600 mb-6">
              Keep your hospital job, earn extra income helping patients on your schedule
            </p>
            <div className="flex items-center justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Clock className="h-3 w-3 mr-1" />
                Flexible Hours
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <DollarSign className="h-3 w-3 mr-1" />
                70% Revenue Share
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Shield className="h-3 w-3 mr-1" />
                Zero Risk
              </Badge>
            </div>
          </div>

          {/* Value Proposition */}
          <Card className="mb-12 border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-800">Why Partner with Cover My Genetics?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-semibold">Earn $1,500-4,000/month</h4>
                  </div>
                  <p className="text-sm text-emerald-700">
                    Work 10-20 hours per week on your schedule. Average $210 per consultation with 70% revenue share.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-semibold">Complete Flexibility</h4>
                  </div>
                  <p className="text-sm text-emerald-700">
                    Set your own hours. Work evenings, weekends, or whenever fits your schedule. No minimum commitments.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-semibold">Pre-Qualified Patients</h4>
                  </div>
                  <p className="text-sm text-emerald-700">
                    Our AI screens patients to ensure they genuinely need genetic counseling. No time wasted on
                    inappropriate referrals.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-semibold">Zero Overhead</h4>
                  </div>
                  <p className="text-sm text-emerald-700">
                    We handle billing, scheduling, platform costs, and compliance. You focus purely on patient care.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-semibold">Telehealth Platform</h4>
                  </div>
                  <p className="text-sm text-emerald-700">
                    HIPAA-compliant video platform with integrated scheduling, notes, and patient portal.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-semibold">Build Your Reputation</h4>
                  </div>
                  <p className="text-sm text-emerald-700">
                    Develop your personal brand with patient reviews and specialized expertise recognition.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>How Our Partnership Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <h4 className="font-semibold">Apply & Get Verified</h4>
                  <p className="text-sm text-gray-600">
                    Quick application with credential verification. Most approvals within 48 hours.
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-blue-600">2</span>
                  </div>
                  <h4 className="font-semibold">Set Your Schedule</h4>
                  <p className="text-sm text-gray-600">
                    Choose your available hours, specialties, and patient preferences in our platform.
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-blue-600">3</span>
                  </div>
                  <h4 className="font-semibold">Receive Patient Matches</h4>
                  <p className="text-sm text-gray-600">
                    Get notified of patients who match your expertise and schedule. Accept or decline each case.
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-blue-600">4</span>
                  </div>
                  <h4 className="font-semibold">Provide Care & Get Paid</h4>
                  <p className="text-sm text-gray-600">
                    Conduct consultations via our platform. Automatic payment within 24 hours of session completion.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Revenue Calculator */}
          <Card className="mb-12 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Partnership Income Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold mb-4 text-center">Light Schedule</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Hours per week:</span>
                      <span className="font-semibold">5-8 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Consultations/month:</span>
                      <span className="font-semibold">8-12</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenue per consultation:</span>
                      <span className="font-semibold">$210</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-bold">Monthly income:</span>
                      <span className="font-bold text-green-600">$1,680-2,520</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold">Annual income:</span>
                      <span className="font-bold text-green-600">$20K-30K</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-green-400 relative">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500">
                    Most Popular
                  </Badge>
                  <h4 className="font-semibold mb-4 text-center">Moderate Schedule</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Hours per week:</span>
                      <span className="font-semibold">10-15 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Consultations/month:</span>
                      <span className="font-semibold">15-20</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenue per consultation:</span>
                      <span className="font-semibold">$210</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-bold">Monthly income:</span>
                      <span className="font-bold text-green-600">$3,150-4,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold">Annual income:</span>
                      <span className="font-bold text-green-600">$38K-50K</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold mb-4 text-center">Heavy Schedule</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Hours per week:</span>
                      <span className="font-semibold">20+ hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Consultations/month:</span>
                      <span className="font-semibold">25-30</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenue per consultation:</span>
                      <span className="font-semibold">$210</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-bold">Monthly income:</span>
                      <span className="font-bold text-green-600">$5,250-6,300</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold">Annual income:</span>
                      <span className="font-bold text-green-600">$63K-76K</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-green-700">
                  <strong>Note:</strong> These are estimates based on current platform performance. Actual income
                  depends on availability, specialties, and patient demand in your area.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Specialties in Demand */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                High-Demand Specialties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-emerald-600">Cancer Genetics</h4>
                  <p className="text-sm text-gray-600 mt-1">BRCA, Lynch syndrome, hereditary cancer panels</p>
                  <div className="mt-2 text-xs text-emerald-600 font-medium">High demand • $250-350/session</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-emerald-600">Prenatal Genetics</h4>
                  <p className="text-sm text-gray-600 mt-1">NIPT, carrier screening, pregnancy planning</p>
                  <div className="mt-2 text-xs text-emerald-600 font-medium">Very high demand • $200-300/session</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-emerald-600">Cardiovascular Genetics</h4>
                  <p className="text-sm text-gray-600 mt-1">Cardiomyopathy, arrhythmia, sudden death</p>
                  <div className="mt-2 text-xs text-emerald-600 font-medium">Growing demand • $275-375/session</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-emerald-600">Pharmacogenomics</h4>
                  <p className="text-sm text-gray-600 mt-1">Drug response, medication optimization</p>
                  <div className="mt-2 text-xs text-emerald-600 font-medium">Emerging field • $300-400/session</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-emerald-600">Neurogenetics</h4>
                  <p className="text-sm text-gray-600 mt-1">Huntington's, Alzheimer's risk, epilepsy</p>
                  <div className="mt-2 text-xs text-emerald-600 font-medium">Specialized • $350-450/session</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-emerald-600">Pediatric Genetics</h4>
                  <p className="text-sm text-gray-600 mt-1">Rare diseases, developmental delays</p>
                  <div className="mt-2 text-xs text-emerald-600 font-medium">Steady demand • $225-325/session</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Success Stories */}
          <Card className="mb-12 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Partner Success Stories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold">Dr. Sarah Chen, Boston Children's</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    "I partner with CMG 12 hours/week and earn an extra $3,200/month. The patients are well-prepared and
                    the platform makes everything seamless. It's helped me pay off my student loans 3 years early."
                  </p>
                  <div className="text-xs text-blue-600 font-medium">Cancer Genetics • 18 months as partner</div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold">Dr. Michael Rodriguez, UCLA Health</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    "Working evenings and weekends, I see 8-10 patients/month for an extra $2,000. The flexibility is
                    perfect - I can work around my hospital schedule and family time."
                  </p>
                  <div className="text-xs text-blue-600 font-medium">
                    Cardiovascular Genetics • 14 months as partner
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Partnership Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Minimum Qualifications</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Board certification (ABGC or ABMGG)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Active state license for telehealth</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Minimum 2 years clinical experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Current malpractice insurance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Reliable internet and quiet workspace</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Preferred Qualifications</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>Specialty certification or expertise</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>Telehealth experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>Bilingual capabilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>Research or publication experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>Teaching or mentoring experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Partner with Us?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join hundreds of genetic counselors earning extra income on their schedule. Application takes 10
                minutes, approval typically within 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/counselors/partner/apply">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Apply to Partner</Button>
                </Link>
                <Link href="/contact-us">
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Ask Questions
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No commitment required • Start earning within a week • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
