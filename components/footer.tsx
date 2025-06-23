import Link from "next/link"
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Dna } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Dna className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-emerald-400">CMG</span>
                  <span className="text-xs text-gray-400 leading-none">COVER MY GENETICS</span>
                </div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering individuals and families with AI-powered genetic insights and personalized counseling to make
              informed health decisions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ask-genie" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Ask Genie
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/api-setup" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  API Setup
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-emerald-400" />
                <a
                  href="mailto:info@covermygenetics.com"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  info@covermygenetics.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-400" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-emerald-400 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  123 Genetics Way
                  <br />
                  Suite 456
                  <br />
                  Boston, MA 02110
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Cover My Genetics. All rights reserved. | HIPAA Compliant | FDA Registered
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Terms
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
