import Link from "next/link"
import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, Shield } from "lucide-react"

export default function ApplyPartnerPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Apply to Partner</h1>
            <p className="text-xl text-gray-600 mb-6">
              Start earning extra income as a genetic counselor on your schedule
            </p>
            <div className="flex items-center justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Clock className="h-3 w-3 mr-1" />
                10 minute application
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Shield className="h-3 w-3 mr-1" />
                48 hour approval
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <DollarSign className="h-3 w-3 mr-1" />
                Start earning this week
              </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Partnership Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>
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
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Professional Email</Label>
                          <Input id="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" required />
                        </div>
                      </div>
                    </div>

                    {/* Professional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Professional Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="credentials">Credentials</Label>
                          <Input id="credentials" placeholder="e.g., MS, CGC" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="certification">Board Certification</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select certification" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="abgc">ABGC (American Board of Genetic Counseling)</SelectItem>
                              <SelectItem value="abmgg">ABMGG (American Board of Medical Genetics)</SelectItem>
                              <SelectItem value="other">Other (please specify)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="license">License Number</Label>
                          <Input id="license" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="licenseState">Licensed State(s)</Label>
                          <Input id="licenseState" placeholder="e.g., CA, NY, TX" required />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="experience">Years of Experience</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select experience" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2-3">2-3 years</SelectItem>
                              <SelectItem value="4-6">4-6 years</SelectItem>
                              <SelectItem value="7-10">7-10 years</SelectItem>
                              <SelectItem value="10+">10+ years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="currentEmployer">Current Employer</Label>
                          <Input id="currentEmployer" placeholder="Hospital/Institution name" required />
                        </div>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Specialties & Expertise</h3>
                      <div className="space-y-2">
                        <Label>Select your areas of expertise (check all that apply):</Label>
                        <div className="grid md:grid-cols-2 gap-3">
                          {[
                            "Cancer Genetics",
                            "Prenatal Genetics",
                            "Cardiovascular Genetics",
                            "Neurogenetics",
                            "Pediatric Genetics",
                            "Pharmacogenomics",
                            "Reproductive Genetics",
                            "Rare Diseases",
                            "Adult Onset Conditions",
                            "Psychiatric Genetics",
                          ].map((specialty) => (
                            <div key={specialty} className="flex items-center space-x-2">
                              <Checkbox id={specialty.toLowerCase().replace(/\s+/g, "-")} />
                              <label htmlFor={specialty.toLowerCase().replace(/\s+/g, "-")} className="text-sm">
                                {specialty}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Availability & Preferences</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="hoursPerWeek">Desired Hours per Week</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select hours" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="5-10">5-10 hours</SelectItem>
                              <SelectItem value="10-15">10-15 hours</SelectItem>
                              <SelectItem value="15-20">15-20 hours</SelectItem>
                              <SelectItem value="20+">20+ hours</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferredTimes">Preferred Times</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select preference" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="evenings">Evenings (5-9 PM)</SelectItem>
                              <SelectItem value="weekends">Weekends</SelectItem>
                              <SelectItem value="early-mornings">Early mornings (6-9 AM)</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Languages spoken (check all that apply):</Label>
                        <div className="grid md:grid-cols-3 gap-3">
                          {["English", "Spanish", "Mandarin", "French", "German", "Other"].map((language) => (
                            <div key={language} className="flex items-center space-x-2">
                              <Checkbox id={language.toLowerCase()} />
                              <label htmlFor={language.toLowerCase()} className="text-sm">
                                {language}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Additional Information</h3>
                      <div className="space-y-2">
                        <Label htmlFor="telehealth">Telehealth Experience</Label>
                        <Textarea
                          id="telehealth"
                          placeholder="Describe your experience with telehealth platforms and remote patient care..."
                          className="min-h-[80px]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="motivation">Why do you want to partner with us?</Label>
                        <Textarea
                          id="motivation"
                          placeholder="Tell us about your goals and what you hope to achieve..."
                          className="min-h-[80px]"
                        />
                      </div>
                    </div>

                    {/* Agreements */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Partnership Agreements</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <Checkbox id="employment" />
                          <label htmlFor="employment" className="text-sm">
                            I confirm that this partnership is permitted by my current employer and does not violate any
                            employment agreements
                          </label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="malpractice" />
                          <label htmlFor="malpractice" className="text-sm">
                            I have current malpractice insurance that covers telehealth consultations
                          </label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="licensing" />
                          <label htmlFor="licensing" className="text-sm">
                            I am licensed to practice genetic counseling via telehealth in the states I've indicated
                          </label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="terms" />
                          <label htmlFor="terms" className="text-sm">
                            I agree to the{" "}
                            <a href="/counselors/terms" className="text-emerald-600 hover:underline">
                              partnership terms and conditions
                            </a>{" "}
                            and 70/30 revenue sharing agreement
                          </label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="background" />
                          <label htmlFor="background" className="text-sm">
                            I consent to credential verification and background check
                          </label>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Submit Partnership Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-800">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-emerald-700 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <div>
                      <strong>Application Review</strong>
                      <p>We'll review your application within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <div>
                      <strong>Credential Verification</strong>
                      <p>We verify your licenses and certifications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <div>
                      <strong>Platform Onboarding</strong>
                      <p>Quick training on our platform and tools</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">4</span>
                    </div>
                    <div>
                      <strong>Start Earning</strong>
                      <p>Begin receiving patient matches within days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Questions?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <p>
                    <strong>How long does approval take?</strong>
                    <br />
                    Most applications are approved within 48 hours.
                  </p>
                  <p>
                    <strong>What if my employer doesn't allow partnerships?</strong>
                    <br />
                    You must have permission from your employer. We can provide documentation if needed.
                  </p>
                  <p>
                    <strong>Can I work in multiple states?</strong>
                    <br />
                    Yes, as long as you're licensed for telehealth in those states.
                  </p>
                  <div className="pt-3 border-t">
                    <Link href="/contact-us">
                      <Button variant="outline" size="sm" className="w-full">
                        Contact Support
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
