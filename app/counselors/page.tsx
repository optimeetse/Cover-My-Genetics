import Navbar from "@/components/navbar"
import CounselorDirectory from "@/components/counselor-directory"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Star, Users } from "lucide-react"
import Link from "next/link"

export default function CounselorsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Find a Certified Genetic Counselor</h1>
            <p className="text-xl text-gray-600 mb-6">
              Connect with board-certified genetic counselors for professional consultation and validation
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm">
                <Shield className="h-3 w-3 mr-1" />
                Board Certified Only
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Star className="h-3 w-3 mr-1" />
                Verified Professionals
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Users className="h-3 w-3 mr-1" />
                500+ Counselors
              </Badge>
            </div>
          </div>

          {/* When to See a Genetic Counselor */}
          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">When Should You See a Genetic Counselor?</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-700">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Consider a consultation if you have:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Family history of genetic conditions</li>
                    <li>• Abnormal genetic test results</li>
                    <li>• Planning pregnancy with genetic concerns</li>
                    <li>• Multiple family members with cancer</li>
                    <li>• Unexplained developmental delays</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What they can help with:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Interpret complex genetic test results</li>
                    <li>• Assess genetic risks for you and family</li>
                    <li>• Provide emotional support and guidance</li>
                    <li>• Coordinate with your healthcare team</li>
                    <li>• Discuss family planning options</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <CounselorDirectory />

          {/* For Genetic Counselors */}
          <Card className="mt-12 border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-800">Are You a Genetic Counselor?</CardTitle>
            </CardHeader>
            <CardContent className="text-emerald-700">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h4 className="font-semibold mb-3">Join Our Directory & Get Quality Leads</h4>
                  <ul className="space-y-2 text-sm mb-4">
                    <li>• Connect with patients who need your expertise</li>
                    <li>• Pre-qualified leads from our AI screening</li>
                    <li>• Flexible pricing - pay only for leads you want</li>
                    <li>• Professional profile with patient reviews</li>
                    <li>• Integration with telehealth platforms</li>
                  </ul>
                  <div className="flex gap-3">
                    <Link href="/counselors/join">
                      <Button className="bg-emerald-600 hover:bg-emerald-700">Join Directory</Button>
                    </Link>
                    <Link href="/counselors/pricing">
                      <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                        View Pricing
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold mb-3">Lead Quality Stats</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Average lead value:</span>
                      <span className="font-semibold">$150-300</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Conversion rate:</span>
                      <span className="font-semibold">35-45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg. consultation fee:</span>
                      <span className="font-semibold">$200-400</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
