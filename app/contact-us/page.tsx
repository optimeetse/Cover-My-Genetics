import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Navbar from "@/components/navbar"

export default function ContactUsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about genetic testing, our services, or need support? Our team is here to help you on your
              genetic journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-emerald-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-emerald-800">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required className="border-emerald-200 focus:border-emerald-400" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required className="border-emerald-200 focus:border-emerald-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required className="border-emerald-200 focus:border-emerald-400" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" required className="border-emerald-200 focus:border-emerald-400" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        className="min-h-[150px] border-emerald-200 focus:border-emerald-400"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-emerald-100 bg-gradient-to-br from-emerald-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-emerald-800">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <Mail className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@covermygenetics.com</p>
                      <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">Monday - Friday, 9am - 5pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Clock className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Support Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9am - 5pm EST</p>
                      <p className="text-gray-600">Saturday: 10am - 2pm EST</p>
                      <p className="text-sm text-gray-500 mt-1">Emergency support available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        123 Genetics Way
                        <br />
                        Suite 456
                        <br />
                        Boston, MA 02110
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-800">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">How quickly will I get a response?</h4>
                    <p className="text-sm text-gray-600">
                      We respond to all inquiries within 24 hours during business days. For urgent matters, please call
                      our support line.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Can I schedule a consultation?</h4>
                    <p className="text-sm text-gray-600">
                      Yes! Pro and Family plan members can schedule consultations with certified genetic counselors.
                      Contact us to book your session.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Do you offer technical support?</h4>
                    <p className="text-sm text-gray-600">
                      Absolutely. Our technical support team can help with API setup, account issues, and platform
                      navigation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Help?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                For urgent genetic counseling questions or technical issues, don't hesitate to reach out directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@covermygenetics.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us Now
                </a>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
