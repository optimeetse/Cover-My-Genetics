import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cover My Genetics | Your Personal AI Genetic Counselor",
  description:
    "Unlock your genetic code with Genie, your personal AI genetic counselor. Get personalized genetic insights, risk assessments, and expert guidance.",
  keywords: "genetics, genetic counseling, AI, DNA, health, personalized medicine, genetic testing",
  authors: [{ name: "Cover My Genetics", url: "https://covermygenetics.com" }],
  creator: "Cover My Genetics",
  publisher: "Cover My Genetics",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://covermygenetics.com",
    siteName: "Cover My Genetics",
    title: "Cover My Genetics | Your Personal AI Genetic Counselor",
    description: "Unlock your genetic code with Genie, your personal AI genetic counselor.",
    images: [
      {
        url: "/hero-dna.png",
        width: 1200,
        height: 630,
        alt: "Cover My Genetics - AI Genetic Counselor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cover My Genetics | Your Personal AI Genetic Counselor",
    description: "Unlock your genetic code with Genie, your personal AI genetic counselor.",
    images: ["/hero-dna.png"],
  },
  alternates: {
    canonical: "https://covermygenetics.com",
  },
  other: {
    "contact:email": "info@covermygenetics.com",
    "contact:phone": "+1-555-123-4567",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#059669" />
        <meta name="contact" content="info@covermygenetics.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
