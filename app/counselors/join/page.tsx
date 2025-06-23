import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, DollarSign, Users, TrendingUp, Star, Shield } from "lucide-react"

export default function JoinCounselorsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Join Our Genetic Counselor Directory</h1>
            <p className="text-xl text-gray-600 mb-6">
              Connect with qualified patients and grow your practice with our lead generation platform
            </p>
            <div className="flex items-center justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Users className="h-3 w-3 mr-1" />
                10,000+ Monthly Visitors
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <TrendingUp className="h-3 w-3 mr-1" />
                35% Average Conversion
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <DollarSign className="h-3 w-3 mr-1" />
                $200+ Average Consultation
              </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Application Form */}
            <Card>
              <CardHeader>
                <CardTitle>Apply to Join Our Directory</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Professional Email</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="credentials">Credentials</Label>
                    <Input id="credentials" placeholder="e.g., MS, CGC, PhD" required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="license">License Number</Label>
                      <Input id="license" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">Licensed State(s)</Label>
                      <Input id="state" placeholder="e.g., CA, NY, TX" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialties">Specialties</Label>
                    <Input id="specialties" placeholder="e.g., Cancer Genetics, Prenatal, Cardiovascular" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" type="number" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="consultationFee">Consultation Fee Range</Label>
                    <Input id="consultationFee" placeholder="e.g., $200-300" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Professional Bio</Label>
                    <Textarea
                      id="bio"
                      className="min-h-[100px]"
                      placeholder="Brief description of your expertise and approach..."
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="telehealth" />
                      <label htmlFor="telehealth" className="text-sm">
                        I offer telehealth consultations
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <a href="/counselors/terms" className="text-emerald-600 hover:underline">
                          directory terms
                        </a>{" "}
                        and lead fee structure
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="verification" />
                      <label htmlFor="verification" className="text-sm">
                        I consent to credential verification and background check
                      </label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Benefits & Pricing */}
            <div className="space-y-6">
              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-800">Why Join Our Directory?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-emerald-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Pre-Qualified Leads</h4>
                      <p className="text-sm">
                        Patients are pre-screened by our AI to ensure they need professional genetic counseling
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">High-Value Patients</h4>
                      <p className="text-sm">
                        Average consultation value of $200-400, with many becoming long-term patients
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Professional Profile</h4>
                      <p className="text-sm">Detailed profile with specialties, reviews, and booking integration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Flexible Pricing</h4>
                      <p className="text-sm">Pay only for leads you accept - no monthly fees or commitments</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Lead Pricing Structure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Initial Consultation Lead</span>
                      <span className="text-lg font-bold text-emerald-600">$25</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Follow-up Appointment</span>
                      <span className="text-lg font-bold text-emerald-600">$15</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Family Member Referral</span>
                      <span className="text-lg font-bold text-emerald-600">$20</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• Only pay when a patient books with you</p>
                    <p>• No setup fees or monthly charges</p>
                    <p>• 30-day money-back guarantee on leads</p>
                    <p>• Volume discounts available for high-volume practices</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800">Success Stories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-blue-700">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-semibold">Dr. Sarah Chen, Boston</span>
                    </div>
                    <p className="text-sm">
                      "I've received 15+ qualified leads in my first month. The patients are well-informed and genuinely
                      need genetic counseling."
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-semibold">Dr. Michael Rodriguez, LA</span>
                    </div>
                    <p className="text-sm">
                      "The lead quality is excellent. 40% of my new patients now come through Cover My Genetics."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Verification Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 space-y-2">
                  <p>• Board certification verification</p>
                  <p>• State license validation</p>
                  <p>• Professional reference checks</p>
                  <p>• Malpractice insurance confirmation</p>
                  <p>• Typical approval time: 3-5 business days</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
