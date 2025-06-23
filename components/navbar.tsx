import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dna } from "lucide-react"

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
              <Dna className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-emerald-600">CMG</span>
              <span className="text-xs text-gray-600 leading-none">COVER MY GENETICS</span>
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/ask-genie" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Ask Genie
          </Link>
          <Link href="/counselors" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Find Counselors
          </Link>
          <Link href="/counselors/partner" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Partner with Us
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Pricing
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Blog
          </Link>
          <Link href="/contact-us" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Contact Us
          </Link>
          <Link href="/resources" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Resources
          </Link>
          <Link href="/api-setup" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            API Setup
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium hover:text-emerald-600 transition-colors hidden md:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-sm font-medium hover:text-emerald-600 transition-colors hidden md:inline-flex"
          >
            Sign up
          </Link>
          <Link href="/pricing">
            <Button className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
