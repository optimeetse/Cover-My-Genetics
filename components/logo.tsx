import { Dna } from "lucide-react"
import Link from "next/link"

interface LogoProps {
  className?: string
  showText?: boolean
  variant?: "light" | "dark"
}

export default function Logo({ className = "", showText = true, variant = "light" }: LogoProps) {
  const textColor = variant === "light" ? "text-emerald-600" : "text-emerald-400"
  const subtextColor = variant === "light" ? "text-gray-600" : "text-gray-400"

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
        <Dna className="h-5 w-5 text-white" />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`text-lg font-bold ${textColor}`}>CMG</span>
          <span className={`text-xs ${subtextColor} leading-none`}>COVER MY GENETICS</span>
        </div>
      )}
    </Link>
  )
}
